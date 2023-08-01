const express = require('express'); 
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

app.set('layout','./layouts/defaut/index')
const tarefaController = require('./controllers/tarefaController'); 
/*const loginRouter = require('./login');
const indexRouter = require('./index');
const usersRouter = require('./users');*/

const port = 5000; 

app.set('view engine', 'ejs'); 
app.use(express.static("public"));

app.set('layout','./layouts/default/index');

app.use(express.urlencoded({ extended: true })); 

//ROTA
app.get('/',(req,res)=>{res.send('<h1 style="color:#f98;">Tarefas</h1>')});
app.get('/tarefas', tarefaController.getTarefas); 
//app.get('/tarefas:query', tarefaController.getTarefas);
app.post('/tarefas', tarefaController.addTarefa); 
//app.delete('/tarefa',tarefaController.deleteTarefa);
// app.put('/tarefa',tarefaController.updateTarefa);
// app.get('/tarefa/edit',tarefaController.editTarefa);
// app.get('/tarefa',tarefaController.searchTarefa);

app.get('/tarefas/:id/editar', tarefaController.getTarefaById);

app.post('/tarefas/:id/editar', tarefaController.updateTarefa);

app.post('/tarefas/:id/excluir', tarefaController.deleteTarefa);

app.post('/tarefas/:id/atualizar-status', tarefaController.updateStatusTarefa);

//app.use('/login',loginRouter);
//app.use('/users',usersRouter);
//app.use('/index',indexRouter);

app.use(express.static('views'));

app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});
