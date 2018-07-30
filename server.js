const app = require('./config/app');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const Defaults = mongoose.model('Defaults');
const Intencoes = mongoose.model('Intencoes');
const matchSorter = require('match-sorter');
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
io.on('connection', async (socket) => {
    const defaultsBemVindo = await Defaults.find({ idDefault: "bemVindo" });
    const defaultsSemAcao = await Defaults.find({ idDefault: "semAcao" });
    const intencoes = await Intencoes.find();
    socket.on('bemVindo', ()=>{
        const number = getRandomInt(0, defaultsBemVindo.length-1);
        const msg = defaultsBemVindo[number].mensagensResposta;
        io.emit('bemVindo', msg);
    });
    socket.on('mensagemEnviada', (msg) => {
        const respostas = matchSorter(intencoes, msg, { keys: ['mensagensRecebidas']});
        let msg2 = '';
        if(respostas.length>0){
            const number = getRandomInt(0, respostas.length - 1);
            msg2 = respostas[number].mensagensResposta;
        }else{
            const number = getRandomInt(0, defaultsSemAcao.length - 1);
            msg2 = defaultsSemAcao[number].mensagensResposta;
        }
        
        io.emit('mensagemEnviada', msg2);
    });
});
http.listen(process.env.PORT, () => {
    console.log(`➡➡➡ The server is online: http://localhost:${process.env.PORT}/ ☻`)
});

