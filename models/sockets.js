const { guardarQueja, Quejas } = require("../controllers/quejas");

class Sockets{

    constructor( io ){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        //On connection
        this.io.on('connection', (socket) => {
        //scoket.on escucha un evento
        //io.emit emite un evento general
        //socket.emit emite evento particular
        //Escuchar eventos
        socket.on('Obtener-Quejas', async() => {
            const TodasLasQuejas = await Quejas();
            this.io.emit('Quejas', TodasLasQuejas )
        })

        socket.on('Queja', ( queja ) => {
            const guardada = guardarQueja(queja);
            if (guardada) {
                this.io.emit('Queja-Guardada', queja);
            } else {
                this.io.emit('Queja-sin-guardar', queja);
            }
        })
            
        });
    }
}
module.exports = Sockets;