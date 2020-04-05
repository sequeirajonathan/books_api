var express = require("express");
var bcrypt = require("bcryptjs");
var pool = require("../DB/mysqldb");
var router = express.Router();

/* GET LOGIN page. */
router.get("/", (req, res, next) => {
  const email = req.query.email;
  const password = req.query.password;
  let queryFindUser = `SELECT password FROM user WHERE email = '${email}'`;
  try {
    pool.query(queryFindUser, (err, result) => {
      if (result.length === 1) {
        let encryptedPass = result[0].password;
        bcrypt.compare(password, encryptedPass).then(match => {
          res.send({ 
          authType: "LOGIN", 
          auth: match, 
          email: email });
        });
      } else {
        res.send({ 
          authType: "LOGIN", 
          auth: false, 
          email: email });
      }
    });
    
  } catch (error) {
    res.send(error);
  }

});

/* POST LOGIN page. */
router.post("/", (req, res, next) => {
  const saltRounds = 10;
  const email = req.query.email;
  const password = req.query.password;
  let saltGen = bcrypt.genSaltSync(saltRounds, (err, salt) => salt);
  let hash = bcrypt.hashSync(password, saltGen, (err, hash) => hash);
console.log(email,password);
  let queryFind = `SELECT email FROM user WHERE email = '${email}'`;
  let queryInsert = `INSERT INTO user (email,password) VALUES ('${email}','${hash}')`;

  pool.query(queryFind, (err, result) => {
    try {
      console.log(result);
      if (result.length === 0) {
        pool.query(queryInsert, (err, result) => {
          console.log(result);
          res.send({
            authType: "SIGNUP",
            auth: true,
            email: email
          });
        });
      } else {
        res.send({
          authType: "SIGNUP",
          auth: false,
          email: email
        });
      }
      
    } catch (error) {
      res.send(error);
    }
  
  });
});

module.exports = router;
