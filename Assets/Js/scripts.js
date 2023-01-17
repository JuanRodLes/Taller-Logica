function sumatoria(){
    let valor_ingresado = document.getElementById("numero-ingresado").value
    let resultado = 0
    
    for (let x = 1; x <= valor_ingresado; x++) {
        resultado = x + resultado        
    }
    calculo.innerHtml = "calculo"
    console.log(resultado)
}
/* 
function parimpar(){
    let numero = document.getElementById("numerousuario").value
    let verificado = numero % 2
    if verificado == 0 {
        console.log(verificado)+"impar"
    }else{
        console.log(verificado)+"impar" 
}
} */