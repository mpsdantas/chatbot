const mongoose = require('mongoose');
const Defaults = mongoose.model('Defaults');

exports.realizarCadastroDefault = async (req, res) => {
    const novoDefault = new Defaults({
        idDefault: req.body.idDefault,
        mensagensResposta: req.body.mensagemEnviar
    });
    await novoDefault.save();
    return res.status(200).json({ status: true });
}