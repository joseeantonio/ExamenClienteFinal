"use strict";
const listaJugadores = []
let puntosGanados = 0
let puntosPerdidos = 0
var Jugador = {
    nombre:"Jose",
    apellidos:"Gonzalez Perez",
    nivel:1,
    puntuacion:1,
    sumarPuntuacion(){
        this.puntuacion+=1
        puntosGanados+=1
        if (puntosGanados===10){    //Cada 10 puntos ganados hace lo siguiente
            puntosGanados=0
            this.nivel+=1
        }
    },
    restarPuntuacion(){
        this.puntuacion-=1
        puntosPerdidos+=1
        if (puntosPerdidos===10){   //Cada 10 puntos perdidos hace lo siguiente
            puntosPerdidos=0
            this.nivel-=1
        }
    },
    resetearPuntuacion(){
        //Mostrara una alerta con el jugador que se haya reseteado
        window.alert("El jugador "+this.nombre+"se ha reseteado.")
    }
}

