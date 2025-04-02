class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // Método para validar o usuário
    static validate(email, password) {
        return email === 'ads@exemplo.com' && password === 'ads51';
    }
}

module.exports = User;