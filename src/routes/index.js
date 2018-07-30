const controllerIntecoes = require('../controllers/controllerIntecoes/index');
const controllerDefault = require('../controllers/controllerDefault/index');
module.exports = (application) => {
    application.get('/', (req, res) => { res.render('index') });
    application.get('/defaults', (req, res) => { res.render('defaults') });
    application.get('/chat', (req, res) =>{ res.render('chat')});
    application.post('/cadastrar-intencao', (req, res) => { controllerIntecoes.realizarCadastroIntencao(req,res); });
    application.post('/cadastrar-default', (req, res) => {controllerDefault.realizarCadastroDefault(req, res);});
};
