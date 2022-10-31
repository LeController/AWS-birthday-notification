const { SNSClient } = require("@aws-sdk/client-sns");
// Set the AWS Region.
const REGION = "us-east-1"; // e.g. "us-east-1"
// Create an Amazon Simple Notification Service client object.
const snsClient = new SNSClient({region:REGION});
module.exports = { snsClient };
                