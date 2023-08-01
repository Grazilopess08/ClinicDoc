const db = require('./database');

class Tarefa { 
        constructor(idtodo_list, titulo, descricao, status) { 
            this.idtodo_list = idtodo_list; 
            this.titulo = titulo; 
            this.descricao = descricao; 
            this.status = status;
        } 

        static create(titulo, descricao, status, callback) {
            const sql = 'INSERT INTO todo_list (titulo, descricao, status) VALUES (?, ?, ?)';
            db.query(sql, [titulo, descricao, status], (err, result) => {
              if (err) {
                return callback(err, null);
              }
              return callback(null, result.insertId); // Retorna o ID da tarefa inserida
            });
          }
        
          static getAll(callback) {
            // Implemente a lógica para buscar todas as tarefas no banco de dados
            const sql = 'SELECT * FROM todo_list';
            db.query(sql, (err, results) => {
              if (err) {
                return callback(err, null);
              }
              return callback(null, results);
            });
          }
        
          static getById(id, callback) {
            const sql = 'SELECT * FROM todo_list WHERE idtodo_list = ?';
            db.query(sql, [id], (err, results) => {
              if (err) {
                return callback(err, null);
              }
              if (results.length === 0) {
                return callback(new Error('Tarefa não encontrada'), null);
              }
              return callback(null, results[0]);
            });
          }
        
          static update(id, titulo, descricao, callback) {
            const sql = 'UPDATE todo_list SET titulo = ?, descricao = ? WHERE idtodo_list = ?';
            db.query(sql, [titulo, descricao, id], (err) => {
              if (err) {
                return callback(err);
              }
              return callback(null);
            });
          }
        
          static delete(id, callback) {
            db.query('DELETE FROM todo_list WHERE idtodo_list = ?', [id], (err) => {
              if (err) {
                return callback(err);
              }
              return callback(null);
            });
          }
        
          static updateStatus(id, status, callback) {
            db.query('UPDATE todo_list SET status = ? WHERE idtodo_list = ?', [status, id], (err) => {
              if (err) {
                return callback(err);
              }
              return callback(null);
            });
        }
    } 
    module.exports = Tarefa;
    