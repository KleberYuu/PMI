const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');
const app = express();

app.set('view engine', 'ejs'); // Define EJS como motor de visualização
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve arquivos estáticos

// Rotas
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', UserController.login);
app.post('/change-password', UserController.changePassword);
app.post('/reset-password', UserController.sendPasswordReset);

// Inicia o servidor
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
