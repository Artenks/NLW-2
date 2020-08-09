const dataBase = require("sqlite-async");

function execute(db) {
  //criar as tabelas do banco de dados
  return db.exec(`
  CREATE TABLE IF NOT EXISTS proffys (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
avatar TEXT,
whatsapp TEXT,
bio TEXT
  );

  CREATE TABLE IF NOT EXISTS classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject INTEGER,
    cost TEXT,
    proffy_id INTEGER
  );

  CREATE TABLE IF NOT EXISTS class_schedule(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_id INTEGER,
    weekday INTEGER,
    time_from INTEGER,
    time_to INTEGER
  );


  `);
}
module.exports = dataBase.open(__dirname + "/database.sqlite").then(execute);

// relacionamento entre as tabelas
//SQL é um banco de dados relacional, com isso, é possivel relacionar uma tabela com a outra
// configuração do banco de dados
