const db = require('./database');

class Consulta { 
        constructor(id, data_consulta, nome_paciente, status, diagnostico, prescricao_medicamentos) { 
            this.id = id; 
            this.data_consulta = data_consulta; 
            this.nome_paciente = nome_paciente; 
            this.status = status;
            this.diagnostico = diagnostico;
            this.prescricao_medicamentos = prescricao_medicamentos;
        } 

        static create(data_consulta, nome_paciente, status, diagnostico, prescricao_medicamentos, callback) {
            const sql = 'INSERT INTO consultas (data_consulta, nome_paciente, status, diagnostico, prescricao_medicamentos) VALUES (?, ?, ?, ?, ?)';
            db.query(sql, [data_consulta, nome_paciente, status, diagnostico, prescricao_medicamentos], (err, result) => {
              if (err) {
                return callback(err, null);
              }
              return callback(null, result.insertId); // Retorna o ID da consulta inserida
            });
          }
        
          static getAll(callback) {
            
            const sql = 'SELECT * FROM consultas';
            db.query(sql, (err, results) => {
              if (err) {
                return callback(err, null);
              }
              return callback(null, results);
            });
          }
        
          static getById(id, callback) {
            const sql = 'SELECT * FROM consultas WHERE id = ?';
            db.query(sql, [id], (err, results) => {
              if (err) {
                return callback(err, null);
              }
              if (results.length === 0) {
                return callback(new Error('Consulta não encontrada'), null);
              }
              return callback(null, results[0]);
            });
          }
        
          static update(id, data_consulta, nome_paciente, diagnostico, prescricao_medicamentos, callback) {
            const sql = 'UPDATE consultas SET data_consulta = ?, nome_paciente = ?, diagnostico = ?, prescricao_medicamentos = ? WHERE id = ?';
            db.query(sql, [data_consulta, nome_paciente, diagnostico, prescricao_medicamentos, id], (err) => {
              if (err) {
                return callback(err);
              }
              return callback(null);
            });
          }          
        
          static delete(id, callback) {
            db.query('DELETE FROM consultas WHERE id = ?', [id], (err) => {
              if (err) {
                return callback(err);
              }
              return callback(null);
            });
          }
        
          static updateStatus(id, status, callback) {
            db.query('UPDATE consultas SET status = ? WHERE id = ?', [status, id], (err) => {
              if (err) {
                return callback(err);
              }
              return callback(null);
            });
        }
    } 
    module.exports = Consulta;
    