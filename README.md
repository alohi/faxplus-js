# Fax.Plus JavaScript SDK

<p>
<h4>Made for third-party developers and organizations to send and receive faxes from their own software or
    application.</h4>
<p>
    <a href="https://www.npmjs.com/package/@alohi/faxplus-api"><img
            src="https://img.shields.io/npm/v/@alohi/faxplus-api?style=flat-square" alt="NPM version"></img></a>
    <img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="License">
</p>
</p>

<p>
    <a href="https://apidoc.fax.plus" target="_blank">API Documentation 3.0.4</a>  •
  <a href="https://www.fax.plus" target="_blank">Home</a>  •
  <a href="https://www.fax.plus/help/" target="_blank">Help Center</a>  •
  <a href="https://www.fax.plus/contact-us/" target="_blank">Contact Us</a>
</p>

- Also includes TypeScript definition
- Only available to [Enterprise](https://www.fax.plus/pricing/) clients


## Installation

```
// with npm
npm install @alohi/faxplus-api

// with yarn
yarn add @alohi/faxplus-api
```

## Getting Started

Example usage:

```js
const axios = require('axios');
const Configuration = require('@alohi/faxplus-api').Configuration;
const FaxesApiFp = require('@alohi/faxplus-api').FaxesApiFp;
const FilesApiFp = require('@alohi/faxplus-api').FilesApiFp;

const accessToken = "YOUR_ACCESS_TOKEN"
const configuration = new Configuration({
    accessToken: accessToken,
    basePath: 'https://restapi.fax.plus/v3',
});

// Get the first entry in the corporate member's inbox
const request = await FaxesApiFp(configuration).listFaxes({userId: "self"});

const response = await request(axios);

const cdrId = response.data.data.records[0].id;

// Upload file
const request = await FilesApiFp(configuration).uploadFile("self",
  fs.createReadStream("./test/sample.pdf")
);

const response = await request(axios);

// Send fax

```

## Documentation
Visit the full API reference at [apidoc.fax.plus](https://apidoc.fax.plus).

## Author
© 2023 Alohi (Geneva, Switzerland) - [Alohi.com](https://alohi.com)