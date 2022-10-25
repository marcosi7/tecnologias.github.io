let username;
document.getElementById("miBoton").onclick = function(){
    username = document.getElementById("fname").value;
    document.getElementById("bienvenido").innerHTML = "BIENVENID(@) "+username;
}

let monto;

let bs = 0.14;
let dl = 6.91;

let resultado;

var bss = document.getElementById("bolivianos");

document.getElementById("conversor").onclick = function(){
    if(bss.value.length==0){
        monto = document.getElementById("dolar").value;
        resultado=monto*dl;
        document.getElementById("resultadoc").innerHTML = "EL MONTO ES: </br>"+resultado+" Bs.";
        document.getElementById("dolar").value="";
    }else{
        monto = document.getElementById("bolivianos").value;
        resultado=monto*bs;
        document.getElementById("resultadoc").innerHTML = "EL MONTO ES: </br>"+resultado+" Dollar.";
        document.getElementById("bolivianos").value="";
    }

}