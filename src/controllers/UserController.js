const User = require('./User');

class UserController {
    login(req, res) {
        const { email, password } = req.body;
        if (User.validate(email, password)) {
            res.redirect('/contract'); // redirecionar para a tela de contrato
        } else {
            res.render('login', { error: 'Email ou senha incorretos.' });
        }
    }

    changePassword(req, res) {
        const { name, email, newPassword } = req.body;
        // Lógica para alterar a senha
        res.send('Senha alterada com sucesso!'); // simplificação
    }

    sendPasswordReset(req, res) {
        const { email } = req.body;
        // Lógica para enviar email de redefinição
        res.send('Email de redefinição enviado.');
    }
}

module.exports = new UserController();