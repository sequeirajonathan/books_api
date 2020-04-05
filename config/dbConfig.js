module.exports = dbconnnection = {
    connectionLimit: 15,
    host : 'us-cdbr-iron-east-01.cleardb.net' || process.env.DB_HOST,
    user : 'b0108ac8232dff' || process.env.DB_USER,
    password :'ce7f3b28' || process.env.DB_PASS,
    database : 'heroku_b9a4b8b77b124ab' || process.env.DB_DATABASE
};