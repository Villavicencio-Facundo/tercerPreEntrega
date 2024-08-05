document.getElementById('miFormulario').addEventListener('submit', (event) => {
event.preventDefault(); 

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;

    let servicios = [];
    document.querySelectorAll('#servicio input[name="servicio"]:checked').forEach((checkbox) => {
        servicios.push(checkbox.value);
    });

    let barberos = [];
    document.querySelectorAll('#barberos input[name="barbero"]:checked').forEach((checkbox) => {
        barberos.push(checkbox.value);
    });

    const turno = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        fecha: fecha,
        hora: hora,
        servicios: servicios,
        barberos: barberos
    };

    let turnos = JSON.parse(localStorage.getItem('turnos')) || [];


    turnos.push(turno);

    localStorage.setItem('turnos', JSON.stringify(turnos));

    alert('Turno guardado exitosamente');
    document.getElementById('miFormulario').reset();
});
