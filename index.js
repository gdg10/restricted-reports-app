const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const lookupWrapper = require('./api-calls/lookupWrapper')

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'--------------------------------------------------

// PASSWORDS
app.get('/api/passwords', (req, res) => {
  const count = 5;
  
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// GET RESTRICTED REPORT PDF
app.get('/api/getPdf/:data', (req, res) => {
  console.log('Request for PDF');
  // console.log(req.params.data.slice(1, req.params.data.length));
  // var data = req.params.data.slice(1, req.params.data.length); 
  console.log(req.params.data);
  var data = req.params.data; 
  var ID = '52726';
  var url = "https://us1.pdfgeneratorapi.com/api/v3/templates/" + ID + "/output?format=pdf&output=url&data=" + data;
  
  lookupWrapper.make_PDF_call(url)
  
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })

})

// var key = 'df95b809583e1377de772a6a0bd215f6d1c709fa7bb869fa716e674f8d3fdcfc';
// var secret = '9dea60808354915c1f3ec63de0f5e6278774d16b3ae20df4a542f945922628ab';
// var workspace = 'garrett@blackshirtcode.com';

// var ID = '52726';
// var url = "https://us1.pdfgeneratorapi.com/api/v3/templates/" + ID + "/output?format=pdf&output=url&data=" + data;

// return fetch(url, { "method": "post", "headers": { 'X-Auth-Key': key, 'X-Auth-Secret': secret, 'X-Auth-Workspace': workspace, 'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8' } }).then(response => response.text());


// ESTATED PROPERTY LOOKUP
app.get('/api/lookup/:srchStr', (req, res) => {
  var sStr = req.params.sStr; 
  console.log('Request for property info');
  console.log(req.params.sStr);
  lookupWrapper.make_API_call("https://api.estated.com/property/v3?token=LjBmdE0uCvAiNppmi2nwE7tcbCM6EV" + sStr)
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

// Feedback when server start
console.log(`Express backend listening on ${port}`);
