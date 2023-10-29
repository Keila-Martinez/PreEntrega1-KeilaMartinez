// creo tipo de objeto usuario

class Usuario {
  constructor(nombreUsuario, contraseña) {
    this.nombreUsuario = nombreUsuario;
    this.contraseña = contraseña;
  }
}

let keila = new Usuario('keila',1234)

//lista de usuarios
let listaDeUsuarios = [keila];

class Dia {
  constructor(nombre) {
    this.nombre = nombre;
    this.horariosDisponibles = ['8:00 AM', '10:00 AM', '2:00 PM', '4:00 PM'];
  }

  eliminarHorario(horario) {
    const indice = this.horariosDisponibles.indexOf(horario);
    if (indice !== -1) {
      this.horariosDisponibles.splice(indice, 1);
    }
  }
}

// Crear objetos "Dia" para representar los días de la semana
const lunes = new Dia('Lunes');
const martes = new Dia('Martes');
const miercoles = new Dia('Miércoles');
const jueves = new Dia('Jueves');
const viernes = new Dia('Viernes');

// Agregar los objetos "Dia" a un array
const diasDeLaSemana = [lunes, martes, miercoles, jueves, viernes];

// Función para nuevo usuario
function crearUsuario() {
  let nombreUsuario = prompt("Ingrese un nombre de usuario:");
  let contraseña = prompt("Ingrese una contraseña:");
  let nuevoUsuario = new Usuario(nombreUsuario, contraseña);
  listaDeUsuarios.push(nuevoUsuario);
  alert("Usuario creado exitosamente.");
  return true;
}

function iniciarSesion (){
  let intentosPosibles= 3;
  let intentos= 0;
  let usuario= prompt ("Ingrese su usuario:");
  let nombresUsuario = listaDeUsuarios.map(function(usuario){
    return usuario.nombreUsuario;
  })
  var contraseñas = listaDeUsuarios.map(function(usuario){
    return usuario.contraseña;
  })
  let indiceUsuario = nombresUsuario.indexOf(usuario);
  while(indiceUsuario == -1){
    usuario = prompt("Usuario inexistente, intente nuevamente:");
    indiceUsuario = nombresUsuario.indexOf(usuario);
  }
  let contraseñaIngresada= prompt ("Ingrese su contraseña:");
  while(contraseñaIngresada != contraseñas[indiceUsuario] && intentos < intentosPosibles ){
    intentos= intentos+1;
    contraseñaIngresada=  prompt ("Contraseña incorrecta, intente nuevamente:");
  }
  if(contraseñaIngresada == contraseñas[indiceUsuario]){
    alert('Bienvenido. \n\nA continuación, le mostraremos la agenda disponible');
    return true;
  }
  else {
    alert("Se han superado los intentos posibles");
    return false;
  }

 
} 

function seleccionTurno(){
  // Pido que el usuario elija un dia
  let seleccionDia = prompt("Días con horarios disponibles:\n\n" +
    diasDeLaSemana.map((dia, indice) => (indice + 1) + ". " + dia.nombre).join("\n") +
    "\n\nSeleccione un día (ingrese el número):");

  seleccionDia = Number(seleccionDia) - 1;

  if (seleccionDia >= 0 && seleccionDia < diasDeLaSemana.length) {
    let diaSeleccionado = diasDeLaSemana[seleccionDia];

    let seleccionHorario = prompt("Horarios disponibles para " + diaSeleccionado.nombre + ":\n\n" +
      diaSeleccionado.horariosDisponibles.map((horario, indice) => (indice + 1) + ". " + horario).join("\n") +
      "\n\nSeleccione un horario (ingrese el número):");

    seleccionHorario = Number(seleccionHorario) - 1;

    if (seleccionHorario >= 0 && seleccionHorario < diaSeleccionado.horariosDisponibles.length) {
      let horarioSeleccionado = diaSeleccionado.horariosDisponibles[seleccionHorario];
      diaSeleccionado.eliminarHorario(horarioSeleccionado);
      alert("Su turno ha sido agendado el dia " + diaSeleccionado.nombre + " a las: " + horarioSeleccionado + "\n\n ¡Muchas gracias, te esperamos!");
      menu();
    } else {
      alert("Selección de horario no válida.");
    }
  } else {
    alert("Selección de día no válida.");
  }
}

function menu(){
  let respuesta= Number(prompt("Bienvenidos a nuestro sistema de turnos. \n\n Para reservar un turno debe iniciar sesión.  \n 1- Iniciar sesion \n 2- Crear usuario \n 3- Salir"));
 switch (respuesta){
  case 1:
    if(iniciarSesion()){seleccionTurno();}
    else{menu();}
    break;

    case 2:
      if(crearUsuario()){
        if(iniciarSesion()){
          seleccionTurno();
          menu();
        }
      }
        break;

    case 3:
      alert("Gracias por visitarnos");
      break;
        
    default: 
      alert ("Opción invalida, intente nuevamente");
      menu();
  }
}



//   if ( respuesta == 1){
//     if(iniciarSesion()){seleccionTurno();}
//     else{menu();}
//   }
//   if(respuesta == 2){
//     if(crearUsuario()){
//       if(iniciarSesion()){
//         seleccionTurno();
//         menu();
//       }
//     }
//   }
  
// }

menu();








