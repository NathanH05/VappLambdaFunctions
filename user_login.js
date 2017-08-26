i
    //   var AWS = require("aws-sdk");
    //   var doc = require('dynamodb-doc');
    //   var db = new doc.DynamoDB();
    console.log('Loading function');
      var AWS = require("aws-sdk");
      var doc = new AWS.DynamoDB.DocumentClient();
      var db = new AWS.DynamoDB();
    var docClient = new AWS.DynamoDB.DocumentClient();
    
    var exists = false;

exports.handler = function(event, context) {

    var params = {
        TableName : "user_login",    
        KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames:{
        "#yr": "email"
    },
    ExpressionAttributeValues: {
        ":yyyy":event.email
    }
    };
    

     console.log(params);
docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        if (data.Items.length > 0){
        data.Items.forEach(function(item) {
            console.log(" -", item.email + ": " + item.password);
            if (item.email == event.email){
                exists = true;
                console.log(item.exists)
            }
            else{
                console.log("email does not exist")
            }
            
            item.exists = exists;

        });
        }else{
            data.Items[0] = {
                "exists": exists
            }
        }
//           var response = {
//       "statusCode": 200,
//       "body": JSON.stringify(data)
//   }
      context.done(null, data.Items[0]);
    }
});

};
