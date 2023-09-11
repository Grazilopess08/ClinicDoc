const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'sql3.freemysqlhosting.net',
  user: 'sql3645566',
  password: 'Pg9d3PGQZw',
  database: 'sql3645566',
});

// Conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

module.exports = connection;