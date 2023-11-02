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
  const elementoMail= document.getElementById("input-correo");
  const emailRegex =  /\S+@\S+\.\S+/;
  const nomApeRegex =  /^[A-Za-zÑñ]+$/;

  const nombre = elementoNombre.value;
  const apellido = elementoApellido.value;
  const mail= elementoMail.value;
  if (elementoNombre !== null && elementoApellido !== null) { 
    console.log('el nombre es ' + nombre);
    console.log('el apellido es ' + apellido);
  } 
  if (nombre==" " || nombre.length == 0 || !(nomApeRegex.test(nombre))|| apellido==" "|| 
      apellido.length == 0 || apellido.length == 0 || !(nomApeRegex.test(apellido))|| mail==" " || !(emailRegex.test(mail))){
    if (nombre==" " || nombre.length == 0 || !(nomApeRegex.test(nombre))){
        document.getElementById('aviso-nombre').innerHTML='Debe ingresar un nombre válido';
    }
    if (apellido==" " || apellido.length == 0 || !(nomApeRegex.test(apellido))){
        document.getElementById('aviso-apellido').innerHTML='Debe ingresar un apellido válido';
    }
    //console.log(emailRegex.test(mail.value));
    if (mail==" " || mail.length == 0 || !(emailRegex.test(mail)) ){
        document.getElementById('aviso-mail').innerHTML='Debe ingresar un correo electrónico válido';
    }
  }
  else{
    document.getElementById('aviso-nombre').innerHTML="";
    document.getElementById('aviso-apellido').innerHTML="";
    document.getElementById('aviso-mail').innerHTML="";
    let resultado=0;
    let categoria= document.getElementById('input-categoria').value;
    let cant = document.getElementById('input-cantidad').value;
        switch(categoria){
            case "80":
                resultado=200*0.8*parseInt(cant);
                break;
            case "50":
                resultado=200*0.5*parseInt(cant);
                break;
            case "15":
                resultado=200*0.15*parseInt(cant);
                break;
            default:
                resultado=200 *parseInt(cant);
                break;
        }
    document.getElementById('Total').innerHTML= "Total a pagar: $ " + resultado;
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
  document.getElementById("Total").innerHTML='Total a pagar: $';  
  document.getElementById('aviso-nombre').innerHTML="";
  document.getElementById('aviso-apellido').innerHTML="";
  document.getElementById('aviso-mail').innerHTML="";
});