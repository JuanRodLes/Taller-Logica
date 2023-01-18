function sumatoria() {
    let valor_ingresado = document.getElementById("numero-ingresado").value
    let resultado = 0

    for (let x = 1; x <= valor_ingresado; x++) {
        resultado = x + resultado
    }
    document.getElementById('calculo').innerHTML = resultado
    console.log(resultado)
}

function parimpar() {
    let numero_ingresado = document.querySelector("#numero").value
    let revisar = numero_ingresado / 2
    if (revisar == 0) {
        document.querySelector("#verificar").innerHTML = "Impar"
    } else {
        document.querySelector("#verificar").innerHTML = "Par"
    }
}

function pizzeria() {
    let edad = document.querySelector("#edadIngresada").value
    let genero = document.querySelector("input.radio")
    if (edad <= 10) {
        document.querySelector("#reclame").innerHTML = "Reclame un jugo"
    }
    else (edad >= 18) {
        document.querySelector("#reclame").innerHTML = "Reclame una cerveza"
    }
    if (genero = getElementById("male")) {
        document.getElementById("reclame").innerHTML += "y una porción de pizza tres carnes"
    } else {
        document.getElementById("reclame").innerHTML += "y una porción de pizza hawaiana"
    }
}
