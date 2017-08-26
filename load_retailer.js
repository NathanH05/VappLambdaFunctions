// TODO implement
var AWS = require("aws-sdk");
var doc = require('dynamodb-doc');
var db = new doc.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context) {

    var tableName = "user_login";

    var params = {
        TableName:tableName,
        Item: {         
        "email": event.email,
         "address":  event.address,
         "exists": event.exists,
         "password": event.password,
         "retailerName":  event.retailerName,
         "streetName": event.streetName,
         "category": event.category,
         "contactFirstName":  event.contactFirstName,
         "contactLastName": event.contactLastName,
         "phoneNumber": event.phoneNumber
        }
    };
    
    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
        console.log("Added item:", params);
        }
            context.done(null,params)

    });
};
