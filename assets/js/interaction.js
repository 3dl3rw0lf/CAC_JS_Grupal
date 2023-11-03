//let elementoNombre = document.getElementById("input-nombre");
//let nombre = elementoNombre.value;
//console.log(nombre);

//let elementoApellido = document.getElementById("input-apellido");
//let apellido = elementoApellido.value;
//console.log(apellido);

//function extraer() {
// let correo = document.getElementById('input-correo').value;
// if (correo) {
//   validateMail(correo);
// }
//  console.log(correo);

const btnResumen = document.getElementById("btn-comprar");

btnResumen.addEventListener("click", function () {

  const elementoNombre = document.getElementById("input-nombre");
  const elementoApellido = document.getElementById("input-apellido");
  const elementoCorreo = document.getElementById("input-correo");

  //adquirir los valores para el cálculo
  //const inputCategoria = document.getElementById("input-categoria");
  //const inputCantidad = document.getElementById("input-cantidad");

  if (elementoNombre !== null && elementoApellido !== null && elementoCorreo !== null) {
    const nombre = elementoNombre.value;
    const apellido = elementoApellido.value;
    const correo = document.getElementById('input-correo').value;

    //let typeName = "nombre";
    //let typeLastName = "apellido";

    if (nombre) {
      //validateName(nombre, typeName);
      validateName(nombre, "nombre");
    }
    if (apellido) {
      //validateName(apellido, typeLastName);
      validateName(apellido, "apellido");
    }

    if (correo) {
      validateMail(correo);
    }
    //const categoria = inputCategoria.value;
    //const cantidad = inputCantidad.value;
    //console.log(`Cantidad: ${cantidad}, Categoría: ${categoria}`);
    //    console.log(nombre);
    //    console.log(apellido);
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
    document.getElementById('div-pagar').innerHTML = 'Total a pagar : ' + resultado;
  }
  //extraer();
});


const btnBorrar = document.getElementById("btn-borrar");
btnBorrar.addEventListener("click", function () {
  const inputNombre = document.getElementById("input-nombre");
  const inputApellido = document.getElementById("input-apellido");
  const inputCorreo = document.getElementById("input-correo");
  const inputCategoria = document.getElementById("input-categoria")
  const inputCantidad = document.getElementById("input-cantidad")
  inputNombre.value = "";
  inputApellido.value = "";
  inputCorreo.value = "";
  inputCategoria.value = 0;
  inputCantidad.value = 'Total a pagar : '
});



// Funciones de validaciones
function validateMail(correo) {
  // Expresión regular para validar el formato del correo electrónico
  let expresionRegular = /^[^\s@]+@(gmail\.com|yahoo\.com|yahoo\.com.ar|outlook\.com|hotmail\.com)$/i;
  if (expresionRegular.test(correo)) {
    return console.log(correo);
  }
  return alert(`Ingrese un correo válido`);
}

function validateName(name, type) {
  let expresionRegular = /^[A-Za-z]+$/
  if (expresionRegular.test(name)) {
    return console.log(name);
  }
  return alert(`Ingrese un ${type} válido`);
}