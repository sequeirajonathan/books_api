var express = require("express");
var pool = require("../DB/mysqldb");
var router = express.Router();


router.get("/", (req, res, next) => {
    let bookCode = req.query.bookCode;
    let title = req.query.title;
    let query;

    if(bookCode){
      query = `SELECT book.bookCode, title, book.publisherCode, book.type, book.paperback, book.url FROM book WHERE book.bookCode = '${bookCode}';`;
    } else if(title){
      query = `SELECT book.bookCode, title, book.publisherCode, book.type, book.paperback, book.url FROM book WHERE book.title = '${title}';`;
    } else {
      query = `SELECT book.bookCode, title, book.publisherCode, book.type, book.paperback, book.url FROM book;`;
    }
    
    pool.query(query, (err, result) => {
      res.send(result);
    });
  });

module.exports = router;
