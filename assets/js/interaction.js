let bNombreValido=true;
let bApellidoValido=true;
let bCorreoValido=true;

// Funciones de validaciones
function validateMail(correo) {
  // Expresión regular para validar el formato del correo electrónico
  let expresionRegular = /^[^\s@]+@(gmail\.com|yahoo\.com|yahoo\.com.ar|outlook\.com|hotmail\.com)$/i;
  if (!(expresionRegular.test(correo)) ){
    bCorreoValido=false;
    return alert(`Ingrese un correo válido`);  
  }
  else bCorreoValido=true;
}
function validateName(name, type) {
  let expresionRegular = /^[A-Za-z]+$/
  if (!(expresionRegular.test(name))) {
    if (type=="nombre")
      bNombreValido=false;
    else
      bApellidoValido=false;

    return alert(`Ingrese un ${type} válido`);
  }
  else
  {
    if (type=="nombre")
      bNombreValido=true;
    else
      bApellidoValido=true;
  }
}

const btnResumen = document.getElementById("btn-comprar");
btnResumen.addEventListener("click", function () {

  const elementoNombre = document.getElementById("input-nombre");
  const elementoApellido = document.getElementById("input-apellido");
  const elementoCorreo = document.getElementById("input-correo");

  if (elementoNombre !== null && elementoApellido !== null && elementoCorreo !== null) {
    const nombre = elementoNombre.value;
    const apellido = elementoApellido.value;
    const correo = document.getElementById('input-correo').value;
    
    validateName(nombre, "nombre");
    validateName(apellido, "apellido");
    validateMail(correo);
    
    if (bCorreoValido && bApellidoValido && bNombreValido){
      let categoria = document.getElementById('input-categoria').value;
      let cant = document.getElementById('input-cantidad').value;
      switch (categoria) {
        case "80":
          resultado = 200 * 0.8 * parseInt(cant);
          break;
        case "50":
          resultado = 200 * 0.5 * parseInt(cant);
          break;
        case "15":
          resultado = 200 * 0.15 * parseInt(cant);
          break;
        default:
          resultado = 200 * parseInt(cant);
          break;
      }
      document.getElementById('total').innerHTML = 'Total a Pagar: $ ' + resultado;
    }  
  }
});


const btnBorrar = document.getElementById("btn-borrar");
btnBorrar.addEventListener("click", function () {
  const inputNombre = document.getElementById("input-nombre");
  const inputApellido = document.getElementById("input-apellido");
  const inputCorreo = document.getElementById("input-correo");
 // const inputCategoria = document.getElementById("input-categoria")
  //const inputCantidad = document.getElementById("input-cantidad")
  
  inputNombre.value = "";
  inputApellido.value = "";
  inputCorreo.value = "";
  //inputCategoria.value = 0;
  //inputCantidad.value = 'Total a pagar: $'
  document.getElementById("total").innerHTML='Total a Pagar: $';
});
