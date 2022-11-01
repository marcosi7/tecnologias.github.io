document.getElementById("formulario").addEventListener("submit",crear);
function crear(e){
    nombre=document.getElementById("titulo").value
    email=document.getElementById("descripcion").value
    contraseña=document.getElementById("precio").value

    let usuario={
        nombre,
        email,
        contraseña
    }
    if(localStorage.getItem("Usuario")===null){
        let libros=[]
        libros.push(usuario)
        localStorage.setItem("Usuario",JSON.stringify(libros))
    }else{
        let libros = localStorage.getItem(JSON.parse("Usuario"))
        libros.push(usuario)
        localStorage.setItem("Usuario",JSON.stringify(libros))
    }
    document.getElementById("formulario").reset();
    e.preventDefault();
    console.log("Guardado correctamente")
}