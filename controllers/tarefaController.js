const Tarefa = require('../models/tarefa'); 

let tarefas = [];

async function getTarefas(req, res) { 
    tarefas = await Tarefa.listarTarefas();
    res.render('tarefas', { tarefas }); 
} 

function addTarefa(req, res) { 
  const { title, description } = req.body; 
    const tarefa = new Tarefa(null, title, description); 
    tarefa.salvar();

  res.redirect('/tarefas'); 
} 

async function deleteTarefa(req,res){
  const { title, description } = req.body; 
    const tarefa = delete Tarefa(null, title, description); 
    tarefa.deletar();

  res.redirect('/tarefas'); 
  //req.params.id;
}

module.exports = { getTarefas, addTarefa, deleteTarefa };
