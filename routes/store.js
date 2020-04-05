var express = require("express");
var pool = require("../DB/mysqldb");
var router = express.Router();

/* GET Book Store Collection. */
router.get("/", (req, res, next) => {
  let queryFind = `SELECT book.bookCode, title, book.publisherCode, book.type, book.paperback, book.url, author.authorNum, author.authorLast, author.authorFirst, publisher.publisherCode, branch.branchNum, branchName, branchLocation, copyNum  FROM book 
  LEFT JOIN wrote ON wrote.bookCode = book.bookCode 
  LEFT JOIN author ON author.authorNum = wrote.authorNum
  LEFT JOIN publisher ON book.publisherCode = publisher.publisherCode
  LEFT JOIN copy ON book.bookCode = copy.bookCode
  LEFT JOIN branch ON copy.branchNum = branch.branchNum
  ORDER BY bookCode;`;
  pool.query(queryFind, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
