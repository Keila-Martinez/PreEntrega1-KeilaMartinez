let respuesta= (prompt("Bienvenidos a nuestro sistema de turnos ¿Desea agendar un turno?")).toLowerCase();
console.log("la respuesta del usuario fue: ", respuesta);

if ( respuesta == "si"){
    let contraseñaCorrecta= 1234;
    let contraseñaIngresada= Number(prompt ("Por favor ingresar contraseña:"));
    let intentosPosibles= 3;
    let intentos= 0;
    while (contraseñaIngresada != contraseñaCorrecta && intentos < intentosPosibles){
        intentos= intentos+1;
        console.log(intentos);
        let contraseñaIngresada= Number (prompt ("Contraseña incorrecta, intente nuevamente:"));
    }
    if (contraseñaIngresada == contraseñaCorrecta){
        alert ("Ha ingresado correctamente");
        let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];//Posiciones del array: [0,1,2,3,4]
        let mensaje="";
        for (let contador = 0; contador <= 4; contador++) {
          if (contador == 1 || contador == 2)//Establecemos los dias con disponibilidad de turnos
          {
            mensaje += `El día ${dias[contador]} tiene turnos disponibles.\n`;
          } else {
            mensaje += `El día ${dias[contador]} está completamente ocupado.\n`;
          }
        }
        alert("Los dias con disponibilidad de turnos son: \n" + mensaje);
        let diaSelecionado = (prompt("Ingrese el dia deseado:").toLowerCase())
        switch (diaSelecionado) {
            case "martes":
                alert("Turno agendado, la/lo esperamos :)");
              break;
            case "miercoles":
              alert("Turno agendado, la/lo esperamos :)");
              break;
            default:
              alert("Turnos no disponibles para el dia elegido");
              break;
          }
    } 
    else alert("Se han superado los intentos posibles");
}else if( respuesta =="no"){
    alert ("Gracias, lo esperamos la próxima vez");
}
else{
    alert("Respuesta inválida, responda 'Si' o 'No'");
}












// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");

//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// alert("Turnos terminados, intente mañana");



