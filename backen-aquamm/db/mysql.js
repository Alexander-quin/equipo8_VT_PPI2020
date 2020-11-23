const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'bbdhavsnwx4oasd9bldv-mysql.services.clever-cloud.com',
  user     : 'uqcogdpx25odruxc',
  password : 'coVZfvWTqdrqsXo15aZM',
  database : 'bbdhavsnwx4oasd9bldv'
});

connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});

module.exports =  {connection: connection}
