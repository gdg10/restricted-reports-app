const express = require("express");
const path = require("path");
const generatePassword = require("password-generator");
const lookupWrapper = require("./api-calls/lookupWrapper");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Put all API endpoints under '/api'--------------------------------------------------

// PASSWORDS
app.get("/api/passwords", (req, res) => {
  const count = 5;
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  );
  // Return them as json
  res.json(passwords);
  console.log(`Sent ${count} passwords`);
});

// GET RESTRICTED REPORT PDF
app.get("/api/getPdf/:data", (req, res) => {
  console.log("Request for PDF");
  // console.log(req.params.data.slice(1, req.params.data.length));
  // var data = req.params.data.slice(1, req.params.data.length);
  console.log(req.params.data);
  var data = req.params.data;
  var ID = "52726";
  var url =
    "https://us1.pdfgeneratorapi.com/api/v3/templates/" +
    ID +
    "/output?format=pdf&output=url&data=" +
    data;

  lookupWrapper
    .make_PDF_call(url)

    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.send(error);
    });
});

// ESTATED PROPERTY LOOKUP
const lookupFunction = (req, res) => {
  console.log("Request for property info");
  let sStr =
    "&address=" +
    req.params.address +
    "&city=" +
    req.params.city +
    "&state=" +
    req.params.state +
    "&street_number=" +
    req.params.streetNumber +
    "&street_pre_direction=" +
    req.params.preDirection +
    "&street_post_direction=" +
    req.params.postDirection +
    "&zip_code=" +
    req.params.curZip;
  console.log(
    "making call to endpoint: " +
      "https://api.estated.com/property/v4?token=LjBmdE0uCvAiNppmi2nwE7tcbCM6EV" +
      sStr
  );
  lookupWrapper
    .make_API_call(
      "https://api.estated.com/property/v4?token=LjBmdE0uCvAiNppmi2nwE7tcbCM6EV" +
        sStr
    )
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.send(error);
    });
};

app.get(
  "/api/lookup/:streetNumber/:preDirection/:streetSuffix/:postDirection/:streetName/:curCity/:curZip",
  lookupFunction(req, res)
);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

// Feedback when server start
console.log(`Express backend listening on ${port}`);
