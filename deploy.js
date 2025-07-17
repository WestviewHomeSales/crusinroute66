require('dotenv').config();
const FtpClient = require('ftp');
const fs = require('fs');
const path = require('path');

const ftpConfig = {
  host: process.env.FTP_HOST,
  port: 21, // Default FTP port
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
};

const deployDir = process.env.FTP_DEPLOY_DIR || 'public_html'; // Directory to deploy to on the FTP server
const distDir = 'dist'; // Directory containing the production build

const c = new FtpClient();

c.on('ready', () => {
  console.log('Connected to FTP server');

  // Function to recursively upload a directory
  const uploadDirectory = (localDir, remoteDir) => {
    fs.readdir(localDir, (err, files) => {
      if (err) {
        console.error(`Error reading directory ${localDir}: ${err}`);
        c.end();
        return;
      }

      let filesToUpload = files.length;
      if (filesToUpload === 0) {
        console.log(`Directory ${localDir} is empty. Nothing to upload.`);
        c.end();
        return;
      }

      files.forEach((file) => {
        const localPath = path.join(localDir, file);
        const remotePath = path.join(remoteDir, file).replace(/\\/g, '/'); // Ensure forward slashes for FTP

        fs.stat(localPath, (statErr, stat) => {
          if (statErr) {
            console.error(`Error stating ${localPath}: ${statErr}`);
            filesToUpload--;
            if (filesToUpload === 0) c.end();
            return;
          }

          if (stat.isFile()) {
            c.put(localPath, remotePath, (uploadErr) => {
              if (uploadErr) {
                console.error(`Error uploading ${localPath} to ${remotePath}: ${uploadErr}`);
              } else {
                console.log(`Uploaded ${localPath} to ${remotePath}`);
              }
              filesToUpload--;
              if (filesToUpload === 0) c.end();
            });
          } else if (stat.isDirectory()) {
            c.mkdir(remotePath, true, (mkdirErr) => { // `true` creates parent directories if they don't exist
              if (mkdirErr && mkdirErr.code !== 550) { // Ignore "directory already exists" error (code 550)
                console.error(`Error creating directory ${remotePath}: ${mkdirErr}`);
                filesToUpload--;
                if (filesToUpload === 0) c.end();
                return;
              }
              console.log(`Created directory ${remotePath}`);
              uploadDirectory(localPath, remotePath); // Recurse into subdirectory
              filesToUpload--; // Decrement for the directory itself
              if (filesToUpload === 0) c.end();
            });
          }
        });
      });
    });
  };

  // Start the upload process
  uploadDirectory(distDir, deployDir);
});

c.on('error', (err) => {
  console.error('FTP error:', err);
});

c.on('end', () => {
  console.log('FTP connection closed');
});

// Connect to the FTP server
c.connect(ftpConfig);
