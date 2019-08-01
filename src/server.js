const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

//Environment variable setup
const dotenv = require('dotenv');
dotenv.config();

//mail setup
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SEND_GRID_KEY);

//server setup
const port = 4001;
const app = express();
const server = http.createServer(app);
app.use(express.static('./public'));
app.use(cors());
app.use(bodyParser.json());

async function sendEmail(client, url) {
  const msg = {
    to: client,
    from: 'uploadshare@do-not-reply.com',
    subject: 'Your file is ready to download!',
    text: `Download your file at this link:\n${url}`
  };
  await sgMail.send(msg);
}

app.post('/api/sendEmail', (req, res) => {
  console.log('Got a request to send a mail');
  const rawBody = req.body;
  const body = JSON.parse(JSON.stringify(rawBody));

  const emailAddress = body['emailAddress'];
  const downloadUrl = body['downloadUrl'];

  sendEmail(emailAddress, downloadUrl);
});

server.listen(port, () => console.log(`Server is listening on port ${port}`));
