<!--
title: AWS Serverless REST API example in NodeJS
description: This example demonstrates how to setup a RESTful Web Service allowing you to create, list, get, update and delete Loans. DynamoDB is used to store the data.  This README is a shameless copy of the the same in Todos example.
layout: Doc
-->
# Serverless REST API

This example demonstrates how to setup a [RESTful Web Services](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services) allowing you to create, list, get, update and delete Loans. DynamoDB is used to store the data. This is just an example and of course you could use any data storage as a backend.

## Structure

This service has a separate directory for all the loan operations. For each operation exactly one file exists e.g. `loans/delete.js`. In each of these files there is exactly one function which is directly attached to `module.exports`.

The idea behind the `loans` directory is that in case you want to create a service containing multiple resources (e.g. loans, borrowers, credit agencies) you could do so in the same service. While this is certainly possible you might consider creating a separate service for each resource. It depends on the use-case and your preference.

## Use-cases

- API for a Web Application
- API for a Mobile Application

## Setup

```bash
npm install
```

## Deploy

In order to deploy the endpoint simply run

```bash
serverless deploy
```

The expected result should be similar to:

```bash
Serverless: Packaging service…
Serverless: Uploading CloudFormation file to S3…
Serverless: Uploading service .zip file to S3…
Serverless: Updating Stack…
Serverless: Checking Stack update progress…
Serverless: Stack update finished…

Service Information
service: slac-rest-api-with-dynamodb
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  POST - https://{XXXXX}.execute-api.us-east-1.amazonaws.com/dev/loans
  GET - https://{XXXXX}.execute-api.us-east-1.amazonaws.com/dev/loans
  GET - https://{XXXXX}.execute-api.us-east-1.amazonaws.com/dev/loans/{id}
  PUT - https://{XXXXX}.execute-api.us-east-1.amazonaws.com/dev/loans/{id}
  DELETE - https://{XXXXX}.execute-api.us-east-1.amazonaws.com/dev/loans/{id}
functions:
  slac-rest-api-with-dynamodb-dev-update: arn:aws:lambda:us-east-1:488110005556:function:slac-rest-api-with-dynamodb-dev-update
  slac-rest-api-with-dynamodb-dev-get: arn:aws:lambda:us-east-1:488110005556:function:slac-rest-api-with-dynamodb-dev-get
  slac-rest-api-with-dynamodb-dev-list: arn:aws:lambda:us-east-1:488110005556:function:slac-rest-api-with-dynamodb-dev-list
  slac-rest-api-with-dynamodb-dev-create: arn:aws:lambda:us-east-1:488110005556:function:slac-rest-api-with-dynamodb-dev-create
  slac-rest-api-with-dynamodb-dev-delete: arn:aws:lambda:us-east-1:488110005556:function:slac-rest-api-with-dynamodb-dev-delete
```

## Usage

You can create, retrieve, update, or delete loans with the following commands:

### Create a Loan

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/loans --data '{"loan": {"upb": 250000, "amort": "FRM", "term": 30 }}'
```

Example Result:
```bash
{"id":"5d487440-9829-11e7-84d6-ed21e36d83cc","upb":250000,"amort":"FRM","term":30,"delinquent":false,"createdAt":1505268908420,"updatedAt":1505268908420}
```

### List all Loans

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/loans
```

Example output:
```bash
[{"upb":350000,"updatedAt":1505268967242,"createdAt":1505268967242,"term":"5/1","amort":"ARM","id":"8057faa0-9829-11e7-84d6-ed21e36d83cc","delinquent":false},{"upb":250000,"updatedAt":1505268908420,"createdAt":1505268908420,"term":30,"amort":"FRM","id":"5d487440-9829-11e7-84d6-ed21e36d83cc","delinquent":false}]
```

### Get one Loan

```bash
# Replace the <id> part with a real id from your loans table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/loans/<id>
```

Example Result:
```bash
{"upb":250000,"updatedAt":1505268908420,"createdAt":1505268908420,"term":30,"amort":"FRM","id":"5d487440-9829-11e7-84d6-ed21e36d83cc","delinquent":false}
```

### Update a Loan *[TODO]*

```bash
# Replace the <id> part with a real id from your loans table
curl -X PUT https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/loans/<id> --data '{"loan": {"upb": 250000, "amort": "FRM", "term": 30, "delinquent": true }}'
```

Example Result:
```bash
{"id":"5d487440-9829-11e7-84d6-ed21e36d83cc","upb":250000,"amort":"FRM","term":30,"delinquent":true,"createdAt":1505268908420,"updatedAt":1505270636953}
```

### Delete a Loan

```bash
# Replace the <id> part with a real id from your loans table
curl -X DELETE https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/loans/<id>
```

No output

## Scaling

### AWS Lambda

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).

### DynamoDB

When you create a table, you specify how much provisioned throughput capacity you want to reserve for reads and writes. DynamoDB will reserve the necessary resources to meet your throughput needs while ensuring consistent, low-latency performance. You can change the provisioned throughput and increasing or decreasing capacity as needed.

This is can be done via settings in the `serverless.yml`.

```yaml
  ProvisionedThroughput:
    ReadCapacityUnits: 1
    WriteCapacityUnits: 1
```

In case you expect a lot of traffic fluctuation we recommend to checkout this guide on how to auto scale DynamoDB [https://aws.amazon.com/blogs/aws/auto-scale-dynamodb-with-dynamic-dynamodb/](https://aws.amazon.com/blogs/aws/auto-scale-dynamodb-with-dynamic-dynamodb/)
