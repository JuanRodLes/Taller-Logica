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
    let num_ingresado = document.getElementById("NumeroIngresado").value
    if (num_ingresado % 2 == 0) {
        document.getElementById("verificar").innerHTML = "Par"
    } else {
        document.getElementById("verificar").innerHTML = "Impar"
    }
}

function pizzeria() {
    let edad = document.getElementById("edadIngresada").value
    let genero = document.getElementById("generos").value

    if (edad <= 0) {
        alert("Señor usuario, usted no ha nacido")
    } else {
        if (edad <= 10) {
            document.getElementById("bebida").innerHTML = "🧃 Reclame un jugo 🧃"
        } else if (edad <= 17) {
            document.getElementById("bebida").innerHTML = "☹ Desafortunadamente no recibe ninguna bebida ☹"
        } else {
            document.getElementById("bebida").innerHTML = "🍺 Reclame una cerveza 🍺"
        }

    }

    if (genero != "none") {
        if (genero == "Male") {
            document.getElementById("porcion").innerHTML = "🍕 Reclame una porción de pizza tres carnes 🍕"
        } else {
            document.getElementById("porcion").innerHTML = "🍕 Reclame una porción de pizza Hawaiana 🍕"
        }
    } else {
        alert("Por favor indique su género")
    }
}

function multiplicaciones() {
    let multiplicado = document.getElementById("numero1").value
    let multiplicador = document.getElementById("numero2").value
    let resultadosMultiplicacion = ""
    for (let x = 1; x <= multiplicador; x++) {
        resultadosMultiplicacion = resultadosMultiplicacion + (multiplicado + "x" + x + "=" + (multiplicado * x) + "<br>")
        document.getElementById("resultadox").innerHTML = resultadosMultiplicacion
    }
}

function Descuento() {
    let PromedioIngresado = document.getElementById("PromedioEstudiante").value
    let Total = 1000000
    let Promedio3a4 = (Total * 5) / 100
    let Promedio5 = (Total * 50) / 100

    if (PromedioIngresado <= 2) {
        document.getElementById("DescuentoMatricula").innerHTML = `$${Total}`
    } else {
        if (PromedioIngresado < 5) {
            document.getElementById("DescuentoMatricula").innerHTML = `$${Total - Promedio3a4}`
        } else {
            document.getElementById("DescuentoMatricula").innerHTML = `$${Total - Promedio5}`
        }
    }
}
