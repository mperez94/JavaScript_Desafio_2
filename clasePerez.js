let saludoUsuario = prompt ('Ingrese su saludo');

if (saludoUsuario == 'Hola'){

    alert ('Su saludo debe ser mas largo');

}
else{

    alert ('Bienvenido al Sistema');

    alert ('Su saludo fue: ' + saludoUsuario);

}

let numeroUsuario = prompt ('Ingrese un numero entre 10 y 50');

    numeroUsuario = parseFloat (numeroUsuario);

if (numeroUsuario >= 10 && numeroUsuario <= 50){

    alert ('El numero se encuentra dentro del rango apropiado');

}
else if (numeroUsuario >= 1000){
 
    alert ('NO SE PERMITEN NUMEROS DE 4 CIFRAS O MAS');

}
else {

    alert ('Numero fuera de rango');
    
}
