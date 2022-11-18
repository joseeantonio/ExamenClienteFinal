"use strict";

//Convertir a entero
//que este entre 2001 y 2500
//Comprobar que sea un numero
//2004,2008,20012,2016,2020 son bisiestos


function isLeapYear(anio1,anio2) {
    //años guardados en variables
    let anioUno = anio1
    let anioDos = anio2
    //array vacio para ir añadiendo nuemro bisiestos
    let numerosBisiestos = []
    var arrayFinal = []
    let coma = ""
    //Comprobamos si son numeros
    if (!isNaN(anioUno)){
        if (!isNaN(anioDos)){
            //Paso los años a entero
            anioUno = Math.round(anioUno)
            anioDos = Math.round(anioDos)
            if (anioUno>=2001){
                if (anioDos<=2500){
                    //Recorremos el rango de numeros entre los dos
                    for (var i=anioUno;anioDos;i++){
                        if (i === anioDos){
                            for (var i=0;numerosBisiestos.length;i++){
                                arrayFinal += coma+numerosBisiestos[i]+" "
                                coma = ","
                            }
                            console.log(arrayFinal)
                            return arrayFinal
                        }
                        //Segun las condiciones lo añadimos a el array de numeroBisiestos
                        if (i%4===0){
                            numerosBisiestos.push(i)
                            console.log(i)
                        }else if (i%100===0){
                            if (i%400===0){
                                console.log(i)
                                numerosBisiestos.push(i)
                            }
                        }
                    }
                }else{
                    window.alert(anioDos+" es mayor que 2005")
                    return;
                }
            }else{
                window.alert(anioUno+" es menor que 2001")
                return;
            }
        }else{
            //devolvemos el mensaje al usuario y terminamos la funcion
            window.alert(anioDos+" no es valido.")
            return;
        }
    }else{
        //devolvemos el mensaje al usuario y terminamos la funcion
        window.alert(anioUno+" no es valido.")
        return;
    }
}
isLeapYear(2003,2022)
