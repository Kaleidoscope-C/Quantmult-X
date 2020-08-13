var body = $response.body; 
var obj = JSON.parse(body); 
obj= {
 "result": "ok",
 "total_cost": 0,
 "privilege": [
  {
   "times": 0,
   "expire_time": 4102415999,
   "spid": "data_recover"
  },
  {
   "times": 0,
   "expire_time": 4102415999,
   "spid": "ocr"
  },
  {
   "times": 0,
   "expire_time": 4102415999,
   "spid": "pdf2doc"
  },
  {
   "times": 0,
   "expire_time": 4102415999,
   "spid": "pdf_merge"
  },
  {
   "times": 0,
   "expire_time": 4102415999,
   "spid": "pdf_sign"
  },
  {
   "times": 0,
   "expire_time": 4102415999,
   "spid": "pdf_split"
  }
 ],
 "userid": 115941770,
 "wealth": 0,
 "level": 1,
 "exp": 0,
 "vip": {
  "memberid": 40,
  "expire_time": 4102415999,
  "name": "超级会员",
  "has_ad": 0,
  "enabled": [
   {
    "name": "超级会员",
    "expire_time": 4102415999,
    "memberid": 40
   },
   {
    "name": "WPS会员",
    "expire_time": 4102415999,
    "memberid": 20
   },
   {
    "name": "稻壳会员",
    "expire_time": 4102415999,
    "memberid": 12
   }
  ]
 },
 "total_buy": 0
};
body = JSON.stringify(obj); 
$done(body);
