const mongoose = require('mongoose');
const Intencoes = mongoose.model('Intencoes');

exports.realizarCadastroIntencao = async (req, res) => {
    const novaIntencao = new Intencoes({
        idIntencao: req.body.idIntecao,
        mensagensResposta: req.body.mensagemEnviar,
        mensagensRecebidas: req.body.msgRecebida,
        entidadeChamada: req.body.entidadeAssociada
    });
    await novaIntencao.save();
    return res.status(200).json({status:true});
}