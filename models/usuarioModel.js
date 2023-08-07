class UsuarioModel{
    constructor(id, username, email, password){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static autenticar(username, password) {
        Database.query(
            `SELECT * FROM users WHERE username = '${username}' AND password = '${md5(password)}';`
        );
    }
}
module.exports = UsuarioModel;