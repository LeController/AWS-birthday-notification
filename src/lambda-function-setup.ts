const {
    CreateFunctionCommand,
  } = require("@aws-sdk/client-lambda");
const {lambdaClient} = require ( "./libs/lambdaClient.js" );

const params = {
    Code: {
      S3Bucket: "birthday-mybucket160f8132-6d6rdy0mzllc", // BUCKET_NAME
      S3Key: "mylambdafunction.zip.zip", // ZIP_FILE_NAME
    },
    FunctionName: "birthday_wisher",
    Handler: "index.handler",
    Role: "arn:aws:iam::906623066445:role/BIRTHDAY-myLambdaRole8B777879-5B0XFPXN3OW2", // IAM_ROLE_ARN; e.g., arn:aws:iam::650138640062:role/v3-lambda-tutorial-lambda-role
    Runtime: "nodejs12.x",
    Description:
        "Scans a DynamoDB table of employee details and using Amazon Simple Notification Service (Amazon SNS) to " +
        "send employees an email on the anniversary of their start-date.",
  };
  
const run = async () => {
  try {
    const data = await lambdaClient.send(new CreateFunctionCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
  
run();
// snippet-end:[lambda.JavaScript.general-examples-dynamodb-lambda.LambdaFunctionSetUpV3]
  