var numero = 0;
var num_1 = 0;
var num_2 = 0;
var longitud = 0;
var resultado = 0;
var operacion = "";
var signo = "";

function pulsarTecla(){
    var x = this.getAttribute("id");    
    var display = document.getElementById('display').textContent;
    switch(isNaN(x))
    {
        case false:
            longitud = display.length;
            var resultado;
            if(longitud < 8)
            {
                numero += x;
            }
            document.getElementById('display').innerHTML = parseFloat(numero);
            break;
        case true:
            if(x =='on')
            {
                numero = 0;
                document.getElementById('display').innerHTML = parseFloat(numero);
            }
            if(x == 'punto')
            {
                numero += '.';
                document.getElementById('display').innerHTML = parseFloat(numero);
            }
            if(x == 'sign')
            {
                if(document.getElementById('display').textContent.indexOf('-')=="-1")
                {
                    numero = '-' + numero;
                    document.getElementById('display').innerHTML = parseFloat(numero);
                    console.log('-');
                }
                else {
                    numero = numero * -1;
                    document.getElementById('display').innerHTML = parseFloat(numero);
                }
            }
            if(x=='mas')
            {
                num_1 = parseFloat(numero);
                numero = 0;
                document.getElementById('display').innerHTML = parseFloat(numero);
                operacion = 's';
                console.log(num_1 + ' ' + operacion);

            }
            if(x=='menos')
            {
                num_1 = parseFloat(numero);
                numero = 0;
                document.getElementById('display').innerHTML = parseFloat(numero);
                operacion = 'm';
                console.log(num_1 + ' ' + operacion);

            }
            if(x=='por')
            {
                num_1 = parseFloat(numero);
                numero = 0;
                document.getElementById('display').innerHTML = parseFloat(numero);
                operacion = 'p';
                console.log(num_1 + ' ' + operacion);

            }
            if(x=='dividido')
            {
                num_1 = parseFloat(numero);
                numero = 0;
                document.getElementById('display').innerHTML = parseFloat(numero);
                operacion = 'd';
                console.log(num_1 + ' ' + operacion);

            }
            if(x=='igual')
            {
                num_2 = parseFloat(document.getElementById('display').textContent);
                switch(operacion) {
                    case 's':
                        resultado = Suma(num_1,num_2);
                        document.getElementById('display').innerHTML = parseFloat(resultado);
                        numero = resultado;
                        break;
                    case 'm':
                        resultado = Resta(num_1,num_2);
                        document.getElementById('display').innerHTML = parseFloat(resultado);
                        numero = resultado;
                        break;
                    case 'p':
                        resultado = Multiplicacion(num_1,num_2);
                        document.getElementById('display').innerHTML = parseFloat(resultado);
                        numero = resultado;
                        break;
                    case 'd':
                        resultado = Division(num_1,num_2);
                        document.getElementById('display').innerHTML = parseFloat(resultado);
                        numero = resultado;
                        break;
                }
            }
    }
            
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
function Suma(n1, n2)
{
    var op = parseFloat(n1) + parseFloat(n2);
    return(op);
}
function Resta(n1, n2)
{
    var op = parseFloat(n1) - parseFloat(n2);
    return(op);
}
function Multiplicacion(n1, n2)
{
    var op = parseFloat(n1) * parseFloat(n2);
    return(op);
}
function Division(n1, n2)
{
    var op = parseFloat(n1) / parseFloat(n2);
    return(op);
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