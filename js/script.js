var num =0;
var minimo = 0;
var maximo = 100;
var count = 0;

function verificar(){
    var n2 = document.getElementById("n2").value;
    
    if( n2 != ""){
        n2 = parseInt(n2);
        count++;
        if( n2 === num  ){
            document.getElementById("n1").innerHTML = num;
            document.getElementById("msg2").innerHTML = "Parabéns, você acertou!!!!<br/>Tentativas: "+count; 
            document.getElementById("bt").disabled = true;
            document.getElementById("n2").disabled = true;
        }else if ( n2< num && n2 > minimo) {
            document.getElementById("n2").value = "";
            minimo = n2;
        }else if ( n2 > num && n2 < maximo ) {
            document.getElementById("n2").value = "";
            maximo = n2;
        }else {
            document.getElementById("msg2").innerHTML = "Número "+n2+" fora do intervalo, você foi resetado!!!!";            
            document.getElementById("bt").disabled = true;
            document.getElementById("n2").disabled = true;
        }
       document.getElementById("msg1").innerHTML = "Escolha um número entre "+minimo+" e "+maximo;
    }
}

function resetar(){
    document.getElementById("n2").value = "";
    num = Math.floor(Math.random()*100);
    min = 0;
    max = 100;
    verificar();
}