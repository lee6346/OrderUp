const app = require('./app');

const PORT = process.env.PORT || 5000;
/*
if (process.env.NODE_ENV === 'development') {
  const https = require('https');
  const fs = require('fs');
  const privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
  const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
  const credentials = { key: privateKey, cert: certificate };
  let httpsServer = https.createServer(credentials, app);
  httpsServer.listen(PORT);
} else {
  app.listen(PORT);
}
*/
app.listen(PORT);
