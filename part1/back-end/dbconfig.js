var dbconfig = {
  development: {
    //connectionLimit : 10,
    host: "192.168.1.102",
    port: "3306",
    user: "root",
    password: "",
    database: "moviedb",
  },
  production: {
    //connectionLimit : 10,
    host: "localhost",
    port: "3306",
    user: "dbuser",
    password: "P@ssw0rd@2025",
    database: "moviedb",
  },
};
module.exports = dbconfig;
