const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'bnubq9cswiytwjubyous-mysql.services.clever-cloud.com',
  user     : 'ussykz0ug9jr2q0u',
  password : 'bRi0gzNhI4UIEv4pPWN3',
  database : 'bnubq9cswiytwjubyous'
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
