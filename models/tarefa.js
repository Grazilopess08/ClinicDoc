class Tarefa { 
        constructor(id, title, description) { 
            this.id = id; 
            this.title = title; 
            this.description = description; 
        } 

        static async listarTarefas(){
            const Database=require('./database');
            return await Database.query("SELECT * FROM todo_list");
        }

        async salvar(){
            const Database=require('./database');
            let resp = await Database.query(`INSERT INTO todo_list(titulo, descricao) VALUES('${this.title}', '${this.description}')`);
            this.id = resp.insertid;
        }
    } 
    module.exports = Tarefa;
    