let elementoNombre = document.getElementById("input-nombre");
let nombre = elementoNombre.value;
console.log(nombre);

let elementoApellido = document.getElementById("input-apellido");
let apellido = elementoApellido.value;
console.log(apellido);

function extraer(){
  let correo = document.getElementById('input-correo').value;
  console.log(correo);
}


const btnResumen = document.getElementById("btn-comprar");


btnResumen.addEventListener("click", function() {
  
  const elementoNombre = document.getElementById("input-nombre");
  const elementoApellido = document.getElementById("input-apellido");
  
  if (elementoNombre !== null && elementoApellido !== null) {
    const nombre = elementoNombre.value;
    const apellido = elementoApellido.value;
    console.log(nombre);
    console.log(apellido);
  } 
});


const btnBorrar = document.getElementById("btn-borrar");


btnBorrar.addEventListener("click", function() {
  
  const inputNombre = document.getElementById("input-nombre");
  const inputApellido = document.getElementById("input-apellido");
  const inputCorreo = document.getElementById("input-correo");
  
  
  inputNombre.value = "";
  inputApellido.value = "";
  inputCorreo.value = "";
});