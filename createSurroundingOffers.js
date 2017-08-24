var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "VappApp_RetailOffers";

var params2 = {
    TableName : tableName,
};

exports.handler = function(event, context) {
  console.log(Math.random() * (1000 - 1) + 1);
  var northPntLat = (event.latitude + 0.000600).toFixed(6);
  var northPntLng = event.longitude.toFixed(6);

  var eastPntLat = event.latitude.toFixed(6);
  var eastPntLng = (event.longitude + 0.000850).toFixed(6);

  var southPntLat = (event.latitude - 0.000600).toFixed(6);
  var southPntLng = (event.longitude).toFixed(6);

  var westPntLat = event.latitude.toFixed(6);
  var westPntLng = (event.longitude - 0.000850).toFixed(6);


  console.log("North Point is: " + northPntLat, northPntLng);
  console.log("East Point is: " + eastPntLat, eastPntLng);
  console.log("South Point is: " + southPntLat, southPntLng);
  console.log("West Point is: " + westPntLat, westPntLng);
  console.log(Math.floor(Math.random() * 20).toString());
  console.log(Math.floor(Math.random() * 20).toString());
    
  params = {
    RequestItems: {
      "VappApp_RetailOffers": [{
          PutRequest: {
            Item: {
              "retailerID": {
                "S": Math.floor(Math.random() * (1000 - 1) + 1).toString()
              },
              "latitude": {
                "S": northPntLat.toString()
              },
              "longitude": {
                "S": northPntLng.toString()
              },
              "retailerName": {
                "S": "Kyosaki Sushi House"
              },
              "offerDescription": {
                "S": "Half price sushi, get in fast"
              },
              "offerStartTime": {
                "S": "20170823150001"
              },
              "offerEndTime": {
                "S": "20170823155001"
              },
              "offerDescription2": {
                "S": "Free food"
              },
              "offerStartTime2": {
                "S": "20170823150001"
              },
              "offerEndTime2": {
                "S": "20170823155001"
              },
              "offerDescription3": {
                "S": "Free stuff"
              },
              "offerStartTime3": {
                "S": "20170823150001"
              },
              "offerEndTime3": {
                "S": "20170823155001"
              },
              "category": {
                "S": "accomodation"
              },
              "rating": {
                "S": "3"
              },
              "website": {
                "S": "www.akooda.com"
              },
              "streetname": {
                "S": "Ponsonby Road"
              },
              "duration": {
                "S": "40"
              },
              "altitude": {
                "S": "100"
              }
            }
          }
        },
        {
          PutRequest: {
            Item: {
              "retailerID": {
                "S": Math.floor(Math.random() * (1000 - 1) + 1).toString()
              },
              "latitude": {
                "S": eastPntLat.toString()
              },
              "longitude": {
                "S": eastPntLng.toString()
              },
              "retailerName": {
                "S": "Duck Creek Restaurant"
              },
              "offerDescription": {
                "S": "Kid's eat free"
              },
              "offerStartTime": {
                "S": "20170823150001"
              },
              "offerEndTime": {
                "S": "20170823155001"
              },
              "offerDescription2": {
                "S": "Free stuff"
              },
              "offerStartTime2": {
                "S": "20170823150001"
              },
              "offerEndTime2": {
                "S": "20170823155001"
              },
              "offerDescription3": {
                "S": "Free things"
              },
              "offerStartTime3": {
                "S": "20170823150001"
              },
              "offerEndTime3": {
                "S": "20170823155001"
              },
              "category": {
                "S": "food/dining"
              },
              "rating": {
                "S": "2"
              },
              "website": {
                "S": "www.akooda.com"
              },
              "streetname": {
                "S": "Ponsonby Road"
              },
              "duration": {
                "S": "40"
              },
              "altitude": {
                "S": "100"
              }
            }
          }
        },
        {
          PutRequest: {
            Item: {
              "retailerID": {
                "S": Math.floor(Math.random() * (1000 - 1) + 1).toString()
              },
              "latitude": {
                "S": southPntLat.toString()
              },
              "longitude": {
                "S": southPntLng.toString()
              },
              "retailerName": {
                "S": "Freya's Cafe"
              },
              "offerDescription": {
                "S": "Latte's 30% off"
              },
              "offerStartTime": {
                "S": "20170823150001"
              },
              "offerEndTime": {
                "S": "20170823155001"
              },
              "offerDescription2": {
                "S": "Free stuff"
              },
              "offerStartTime2": {
                "S": "20170823150001"
              },
              "offerEndTime2": {
                "S": "20170823155001"
              },
              "offerDescription3": {
                "S": "Free stuff"
              },
              "offerStartTime3": {
                "S": "20170823150001"
              },
              "offerEndTime3": {
                "S": "20170823155001"
              },
              "category": {
                "S": "shopping"
              },
              "rating": {
                "S": "4"
              },
              "website": {
                "S": "www.akooda.ca"
              },
              "streetname": {
                "S": "Ponsonby Road"
              },
              "duration": {
                "S": "40"
              },
              "altitude": {
                "S": "100"
              }
            }
          }
        },
        {
          PutRequest: {
            Item: {
              "retailerID": {
                "S": Math.floor(Math.random() * (1000 - 1) + 1).toString()
              },
              "latitude": {
                "S": westPntLat.toString()
              },
              "longitude": {
                "S": westPntLng.toString()
              },
              "retailerName": {
                "S": "History Museum"
              },
              "offerDescription": {
                "S": "2 for 1 Adults"
              },
              "offerStartTime": {
                "S": "20170823150001"
              },
              "offerEndTime": {
                "S": "20170823155001"
              },
              "offerDescription2": {
                "S": "Free stuff"
              },
              "offerStartTime2": {
                "S": "20170823150001"
              },
              "offerEndTime2": {
                "S": "20170823155001"
              },
              "offerDescription3": {
                "S": "Free things"
              },
              "offerStartTime3": {
                "S": "20170823150001"
              },
              "offerEndTime3": {
                "S": "20170823155001"
              },
              "category": {
                "S": "attractions"
              },
              "rating": {
                "S": "4"
              },
              "website": {
                "S": "www.akooda.com"
              },
              "streetname": {
                "S": "Ponsonby Road"
              },
              "duration": {
                "S": "40"
              },
              "altitude": {
                "S": "100"
              }
            }
          }
        }
      ]
    },
    ReturnConsumedCapacity: "NONE",
    ReturnItemCollectionMetrics: "NONE"
  };
    function scan_for_mocks(callback,params){
    docClient.scan(params2, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query succeeded.");
            var already_scanned = false;
            
            if (data.Items.length > 0){
 
                data.Items.forEach(function(item) {
                if (parseFloat(item.latitude).toFixed(2) == parseFloat(northPntLat).toFixed(2) || parseFloat(item.longitude).toFixed(2) == parseFloat(northPntLng).toFixed(2) || parseFloat(item.latitude).toFixed(2) == parseFloat(eastPntLat).toFixed(2) || parseFloat(item.longitude).toFixed(2) == parseFloat(eastPntLng).toFixed(2) || parseFloat(item.latitude).toFixed(2) == parseFloat(southPntLat).toFixed(2) || parseFloat(item.longitude).toFixed(2) == parseFloat(southPntLng).toFixed(2) || parseFloat(item.latitude).toFixed(2) == parseFloat(westPntLat).toFixed(2) || parseFloat(item.longitude).toFixed(2) == parseFloat(westPntLng).toFixed(2)  ){
                    console.log("Nearby values already exist, do not mock any");
                    console.log(parseInt(item.latitude).toFixed(4));
                    console.log(parseInt(northPntLat).toFixed(4));
                    
                }
                // If nearby retailers do not already exist  then we can add mocked local retailers
                else{
                    // A check to make sure we do not add the mocked retailers for every item in the table
                    if (already_scanned){
                    }
                    else{
                        callback(params);
                        already_scanned = true;
                    }
                }
            });  
            }
            // If there is nothing in the table, create surrounding mocked retailers
            else{
                callback(params);

            }


        }
    });
    
}
  scan_for_mocks(add_to_DB,params);
  
  function add_to_DB (params){
  dynamodb.batchWriteItem(params, function(err, data) {
    if (err) {
      console.log("WHAT UP IM AN ERROR")
      context.done(
        null, {
          "Result ": JSON.stringify(err, null, 2)
        }
      );
    } else {
      console.log('great success: ' + JSON.stringify(data, null, '  '));
      context.done(null, 'K THX BY');
    }
  })
}

};
