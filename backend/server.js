
var express    = require("express");
var bodyParser = require("body-parser");
var cors       = require("cors");
var mongodb    = require("mongodb");
var ObjectID   = mongodb.ObjectID;
var app        = express();

//  creating my db collection variables
var ARTICLES_COLLECTION = 'articles';

// telling my app to use the folling
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// mongoURL
var url = 'mongodb://localhost:27017/news-app'

mongodb.MongoClient.connect(process.env.MONGODB_URI || url, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  db = database;
  console.log("Database connection ready");
  var server = app.listen(process.env.PORT || 80, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// if things go wrong (from Syed)
function handleError(res, reason, message, code) {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({
    "error": message
  })
}

GET

app.get("/articles", function(req, res) {
    // find all articles and return them as an array
    db.collection(ARTICLE_COLLECTION).find({}).toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get location.");
      } else {
        res.status(200).json(docs);
      };
    });
  });

  // save articles to favorites
  app.post("/articles/new", function(req, res) {
    var newArticle = req.body;
    newArticle.createData = new Date();

    // insert one new article
    db.collection(ARTICLES_COLLECTION).insertOne(newArticle, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to add new article.");
      } else {
        res.status(201).json(doc.ops[0]);
      };
    });
  });
// delete by article source
app.delete("/articles/:author", function(req, res) {

  db.collection(ARTICLES_COLLECTION).remove({ name: req.params.name }, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete article");
    } else {
      res.status(204).end();
    }
  });

});

app.put("/articles/:title", function(req, res) {

  //
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(ARTICLE_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update article");
    } else {
      res.status(204).end();
    }
  });


});


