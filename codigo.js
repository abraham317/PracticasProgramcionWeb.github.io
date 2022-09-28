window.addEventListener("load",function(){
    //AQUI VA TODO EL CODIGO QUE SE EJECUTA DESPUES DE CARGAR LA PAGINA 

    
        formulario=this.doument.getElementById("formulario");
        
        formulario.addEventListener("submit",function(){
            event.preventDefault();
            let nombre = document.getElementById("nombre");
            let pass = document.getElementById("pwd");
            let respuesta = document.getElementById("result")
            //alert("el nombre es " + nombre + "con contraseña" + pass);
            if(nombre == "G7S21" && pass =="si se puede"){
                respuesta.innertext="se acepto el ingreso a el sistema sistema..."
                respuesta.style.color="blue";
                respuesta.style.fontSize="3em";
                respuesta.style.width="350px";
                respuesta.style.height="130px";
                respuesta.style.backgroundColor="White";
            }else{
                respuesta.innertext="Estas mal de tu cabeza...";
                respuesta.style.color="red";
                respuesta.style.fontSize="2em";
                respuesta.style.width="500px"
                respuesta.style.height="150px"
                respuesta.style.backgroundColor="cyan"

            }
        });    
});