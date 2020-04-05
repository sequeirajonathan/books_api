var express = require("express");
var pool = require("../DB/mysqldb");
var router = express.Router();


router.get("/", (req, res, next) => {
    let authorNum = req.query.authorNum;
    let fName = req.query.authorFirst;
    let lName = req.query.authorLast;
    let query;

    if(fName){
        query = `SELECT * FROM author WHERE author.authorFirst = '${fName}';`;
    } else if(lName){
        query = `SELECT * FROM author WHERE author.authorLast = '${lName}';`;
    } else if(authorNum){
        query = `SELECT * FROM author WHERE author.authorNum = '${authorNum}';`;
    }
    else {
        query = `SELECT authorNum FROM author;`;
    }
    
    pool.query(query, (err, result) => {
      res.send(result);
    });
  });

module.exports = router;
