let elementoNombre = document.getElementById("input-nombre");
let nombre = elementoNombre.value;
console.log(nombre);

let elementoApellido = document.getElementById("input-apellido");
let apellido = elementoApellido.value;
console.log(apellido);



const btnResumen = document.getElementById("btn-comprar");

function extraer(){
  let correo = document.getElementById('input-correo').value;
  if(correo){
    validateMail(correo);
  }
//  console.log(correo);
}

btnResumen.addEventListener("click", function() {
  
  const elementoNombre = document.getElementById("input-nombre");
  const elementoApellido = document.getElementById("input-apellido");

  //adquirir los valores para el cálculo
  const inputCategoria = document.getElementById("input-categoria");
  const inputCantidad = document.getElementById("input-cantidad");
  
  if (elementoNombre !== null && elementoApellido !== null) {
    const nombre = elementoNombre.value;
    const apellido = elementoApellido.value;

    let typeName = "nombre";
    let typeLastName = "apellido";

    if(nombre){
      validateName(nombre, typeName);
    }
    if(apellido){
      validateName(apellido, typeLastName);
    }

    const categoria = inputCategoria.value;
    const cantidad = inputCantidad.value;
    console.log(`Cantidad: ${cantidad}, Categoría: ${categoria}`);
//    console.log(nombre);
//    console.log(apellido);
  } 

  extraer();
});


const btnBorrar = document.getElementById("btn-borrar");


btnBorrar.addEventListener("click", function() {
  
  const inputNombre = document.getElementById("input-nombre");
  const inputApellido = document.getElementById("input-apellido");
  const inputCorreo = document.getElementById("input-correo");
  const inputCategoria = document.getElementById("input-categoria")
  
  inputNombre.value = "";
  inputApellido.value = "";
  inputCorreo.value = "";
  inputCategoria.value = "";
});



// Funciones de validaciones
function validateMail(correo) {
  // Expresión regular para validar el formato del correo electrónico
  let expresionRegular = /^[^\s@]+@(gmail\.com|yahoo\.com|yahoo\.com.ar|outlook\.com|hotmail\.com)$/i;
  if(expresionRegular.test(correo)){
    return console.log(correo);
  }
   return alert(`Ingrese un correo válido`);
}

function validateName(name, type){
  let expresionRegular = /^[A-Za-z]+$/
  if(expresionRegular.test(name)){
        return console.log(name);
  }
  return alert(`Ingrese un ${type} válido`);
}