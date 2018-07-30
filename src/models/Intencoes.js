const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const intencoesSchema = new Schema({
    idIntencao: String,
    mensagensResposta: String,
    mensagensRecebidas: String,
    entidadeChamada: String
});

mongoose.model('Intencoes', intencoesSchema);