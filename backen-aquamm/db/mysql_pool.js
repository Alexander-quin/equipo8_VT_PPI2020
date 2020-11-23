const mysql = require(`mysql`);
const pool = mysql.createPool({
  connectionlimit : 10,
  host : `bbdhavsnwx4oasd9bldv-mysql.services.clever-cloud.com`,
  user :`uqcogdpx25odruxc`,
  password: `coVZfvWTqdrqsXo15aZM` ,
  database : `bbdhavsnwx4oasd9bldv`
});
module.exports = {pool : pool}