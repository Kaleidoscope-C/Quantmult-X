var body = $response.body;
var obj = JSON.parse(body);
obj= {
  "isCurrentlyInFreeTrial" : false,
  "newlyAssociated" : true,
  "valid" : true,
  "hasUserConsumedAppleFreeTrial" : false
};
body = JSON.stringify(obj);
$done(body);
