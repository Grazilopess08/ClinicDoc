const express = require('express'); 

const tarefaController = require('./controllers/tarefaController'); 

const app = express(); 
const port = 5000; 

app.set('view engine', 'ejs'); 

app.use(express.urlencoded({ extended: true })); 

//ROTA
app.get('/',(req,res)=>{res.send('<h1 style="color:#f98;">Tarefas</h1>')})
app.get('/tarefas', tarefaController.getTarefas); 
//app.get('/tarefas:query', tarefaController.getTarefas);
app.post('/tarefa', tarefaController.addTarefa); 
// app.delete('/tarefa',tarefaController.deleteTarefa);
// app.put('/tarefa',tarefaController.updateTarefa);
// app.get('/tarefa/edit',tarefaController.editTarefa);
// app.get('/tarefa',tarefaController.searchTarefa);

app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});
