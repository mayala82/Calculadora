var numero = 0;
var num_1 = 0;
var num_2 = 0;
var longitud = 0;
function pulsarTecla(){
    var x = this.getAttribute("id");    
    var display = document.getElementById('display').textContent;
    longitud = display.length;
    var resultado;
    if(longitud < 8)
    {
        numero += x;
    }
    document.getElementById('display').innerHTML = parseFloat(numero);        
}
function AumentarTeclado(){
    
    var boton = this.getAttribute("id");
    document.getElementById(boton).style.transform = 'scale(1)';
   
}
function reducirTeclado()
{
    var boton = this.getAttribute("id");
    document.getElementById(boton).style.transform = 'scale(0.8)';   
}

var Calculadora = {
    init: function(){
        this.AsignarEventoTeclado();
    },
    AsignarEventoTeclado: function(){
        
        var teclas = document.querySelectorAll(".tecla");
        for(var i=0; i<teclas.length;i++)
        {
            teclas[i].onclick = pulsarTecla;
            teclas[i].onmousedown = reducirTeclado;
            teclas[i].onmouseup = AumentarTeclado;
        }
    }

}

Calculadora.init();