const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaultSchema = new Schema({
    idDefault: String,
    mensagensResposta: String
});

mongoose.model('Defaults', defaultSchema);