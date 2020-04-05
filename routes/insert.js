var express = require("express");
var pool = require("../DB/mysqldb");
var SQL = require("../DB/initiateDB");
var router = express.Router();

/* Create Store Collection. */
router.get("/", (req, res, next) => {
  let resultList = [];

  pool.query(SQL.INSERTORDER.insertAuthor, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.INSERTORDER.insertBooks, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.INSERTORDER.insertBranch, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.INSERTORDER.insertCopy, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.INSERTORDER.insertPublisher, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.INSERTORDER.insertWrote, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.INSERTORDER.insertInventory, (err, result) => {
    resultList.push(result);
  });

  res.send(resultList);
});

module.exports = router;
