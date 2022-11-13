const parrafoInicial = document.getElementById("parrafoInicial");

console.log(parrafoInicial);




parrafoInicial.onclick = function (){
    cambiaColorAleatorio();
}

function cambiaColorAleatorio(){

    const colores = [
        "red",
        "blue",
        "black",
        "cyan",
        "white",
        "pink",
        "violet",
        "yellow",
        "green",
        "orange"        
    ]
    parrafoInicial.style.color = colores[Math.floor(Math.random()*colores.length)];
    parrafoInicial.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)];
}



/*
    TIPOS DE DATOS

    var -> puede modificarse, scope global, no se recomienda
    let -> puede modificarse, scope limitado, se recomienda
    const -> no puede modificarse, scope global

*/

/*
CASES en javascript

PascaleCase = nombre de clases (java)

camelCase = nombre de funciones y variables y atributos (javascript)

snake_case = Python
variables y funciones

CASE = constantes

*/

