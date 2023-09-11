const express = require('express'); 
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

app.set('layout','./layouts/defaut/index')
const consultaController = require('./controllers/consultaController'); 
const usuarioController = require('./controllers/usuarioController'); 
/*const loginRouter = require('./login');
const indexRouter = require('./index');
const usersRouter = require('./users');*/

const port = 3344; 

app.set('view engine', 'ejs'); 
app.use(express.static("public"));

app.set('layout','./layouts/default/index');

app.use(express.urlencoded({ extended: true })); 

//ROTA
app.get('/',(req,res)=>{res.send('<h1 style="color:#f98;">Consultas</h1>')});

app.get('/login',(req, res)=>{
    app.set('layout', './layouts/default/login');
    usuarioController.login(req, res);
});

app.post('/login',(res,req)=>{
    usuarioController.autenticar(req, res);
})

app.get('/consultas', consultaController.getConsulta); 
//app.get('/consultas:query', consultaController.getConsultas);
app.post('/consultas', consultaController.addConsulta); 
//app.delete('/consulta',consultaController.deleteConsulta);
// app.put('/consulta',consultaController.updateConsulta);
// app.get('/consulta/edit',consultaController.editConsulta);
// app.get('/consulta',consultaController.searchConsulta);

app.get('/consultas/:id/editar', consultaController.getConsultaById);

app.post('/consultas/:id/editar', consultaController.updateConsulta);

app.post('/consultas/:id/excluir', consultaController.deleteConsulta);

app.post('/consultas/:id/atualizar-status', consultaController.updateStatusConsulta);

//app.use('/login',loginRouter);
//app.use('/users',usersRouter);
//app.use('/index',indexRouter);

app.use(express.static('views'));

app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});
