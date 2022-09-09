// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://user_2:dhinakaran2003@cluster0.x4ozo.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user_2:dhinakaran2003@cluster0.x4ozo.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Highway 37" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
