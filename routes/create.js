var express = require("express");
var pool = require("../DB/mysqldb");
var SQL = require("../DB/initiateDB");
var router = express.Router();

/* Create Store Collection. */
router.get("/", (req, res, next) => {
  let resultList = [];

  // pool.query(SQL.EXECUTIONORDER.db, (err, result) => {
  //   resultList.push(result);
  // });
  pool.query(SQL.EXECUTIONORDER.user, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.EXECUTIONORDER.author, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.EXECUTIONORDER.book, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.EXECUTIONORDER.branch, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.EXECUTIONORDER.copy, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.EXECUTIONORDER.publisher, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.EXECUTIONORDER.wrote, (err, result) => {
    resultList.push(result);
  });
  pool.query(SQL.EXECUTIONORDER.inventory, (err, result) => {
    resultList.push(result);
  });

  res.send(resultList);
});

module.exports = router;
