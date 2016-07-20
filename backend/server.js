
var express    = require("express");
var bodyParser = require("body-parser");
var cors       = require("cors");
var mongodb    = require("mongodb");
var ObjectID   = mongodb.ObjectID;
var app        = express();

//  creating my db collection variables
var ARTICLES_COLLECTION = 'articles';
var SOURCES_COLLECTION  = 'sources';

// telling my app to use the folling
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// mongoURL
var mongoURL = 'mongodb://localhost:27017/news-app'

mongodb.MongoClient.connect(process.env.MONGO_URI || mongoURL, function(err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
})

db = database;
console.log("DB connection ready");

// if things go wrong (from Syed)
function handleError(res, reason, message, code) {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({
    "error": message
  })
}

// GET


app.get("/articles", function(req, res) {
  var newArticle = req.body;
  newArticle.createData = new Date();

  // inserting one new article
  db.collection(ARTICLES_COLLECTION).finre
})
