/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require('express')
var bodyParser = require('body-parser')
const AWS = require('aws-sdk');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

AWS.config.update({
  region: "us-west-2"
});

const ddb = new AWS.DynamoDB.DocumentClient();
const table = "Pear";

// declare a new express app
var app = express()
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.get("/api/session/:id", (req, res) => {
  const { id } = req.params;

  const query = {
    TableName: table,
    Key: {
      id
    }
  }

  ddb.get(query).promise()
    .then(({ Item }) => {
      res.status(200).send(Item);
    })
    .catch((err) => {
      console.log(`Error getting data for id ${id}: ${err}`);
      res.status(500).send(err);
    });
});

app.post("/api/session/", bodyParser.json(), (req, res) => {
  const session = req.body;

  const doc = {
    TableName: table,
    Item: session
  }

  ddb.put(doc, (err, results) => {
    if (err) {
      console.log(`Unable to update database: ${err}`);
      res.status(500).send(err);
    } else {
      console.log(`Successfully updated database.`)
      res.sendStatus(201);
    }
  })
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
