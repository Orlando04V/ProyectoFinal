function validar(){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    var expresion;

    expresion = /\w+@\w+\.[a-zA-Z]{2,6}/;



    if(nombre === ""){
        alert("Es necesario ingresar el nombre.");
    }else if(correo === ""){
        alert("Es necesario ingresar el correo.");
    }
    else if(mensaje === ""){
        alert("Es necesario ingresar el mensaje.");
    }
    //Validar la logiotud de los campos para que corresponda a la base de datos
   else if(nombre.length>100){
        alert("El nombre es demasiado largo");
    }
    else if(correo.length>100){
        alert("El correo es demasiado largo");
    }
    else if(mensaje.length>200){
        alert("El mensaje es demasiado largo");
    }
}