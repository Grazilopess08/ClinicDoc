const Consulta = require('../models/consulta'); 

//let consultas = [];

function getConsulta(req, res) {
  Consulta.getAll((err, consultas) => {
    if (err) {
      console.error('Erro ao obter o agendamento da consulta:', err);
      return res.status(500).send('Erro ao obter as consultas do banco de dados.');
    }
    return res.render('consultas', { consultas });
  });
}

function addConsulta(req, res) {
  const { data_consulta, nome_paciente, status, diagnostico, prescricao_medicamentos } = req.body;

  Consulta.create(data_consulta, nome_paciente, status, diagnostico, prescricao_medicamentos,(err, id) => {
    if (err) {
      console.error('Erro ao inserir a consulta:', err);
      return res.status(500).send('Erro ao inserir a consulta no banco de dados.');
    }
    res.redirect('/consultas');
  });
}

function updateConsulta(req, res) {
  const { id } = req.params; // Obtém o ID da consulta a ser atualizada
  const { data_consulta, nome_paciente, diagnostico, prescricao_medicamentos } = req.body; // Obtém os dados atualizados do formulário

  // Faça uma consulta para atualizar os dados da consulta no banco de dados
  Consulta.update(id, data_consulta, nome_paciente, diagnostico, prescricao_medicamentos, (err) => {
    if (err) {
      console.error('Erro ao atualizar a consulta:', err);
      return res.status(500).send('Erro ao atualizar a consulta no banco de dados.');
    }
    res.redirect('/consultas'); // Redireciona para a lista de consultas após a atualização
  });
}

function getConsultaById(req, res) {
    const { id } = req.params;
  
    Consulta.getById(id, (err, consultas) => {
      if (err) {
        console.error('Erro ao obter a consula:', err);
        return res.status(500).send('Erro ao obter a consulta do banco de dados.');
      }
      return res.render('editarConsulta', { consultas }); // Renderiza o formulário de edição com os dados da consulta
    });
}

function deleteConsulta(req, res) {
    const { id } = req.params; // Obtém o ID da consulta a ser excluída
  
    // Faça uma consulta para excluir a consulta no banco de dados
    Consulta.delete(id, (err) => {
      if (err) {
        console.error('Erro ao excluir a consulta:', err);
        return res.status(500).send('Erro ao excluir a consulta do banco de dados.');
      }
      res.redirect('/consultas'); // Redireciona para a lista de consultas após a exclusão
    });
}

function updateStatusConsulta(req, res) {
    const { id } = req.params; // Obtém o ID da consulta a ser atualizada
    const { status } = req.body; // Obtém o novo status do formulário
  
    // Faça uma consulta para atualizar o status da consulta no banco de dados
    Consulta.updateStatus(id, status, (err) => {
      if (err) {
        console.error('Erro ao atualizar o status da consulta:', err);
        return res.status(500).send('Erro ao atualizar o status da consulta no banco de dados.');
      }
      res.redirect('/consultas'); // Redireciona para a lista de consultas após a atualização
    });
  }


module.exports = { getConsulta, addConsulta, updateConsulta, getConsultaById, deleteConsulta, updateStatusConsulta };
