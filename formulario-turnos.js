document.getElementById('miFormulario').addEventListener('submit', (event) => {
    event.preventDefault(); 

    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let email = document.getElementById('email').value.trim();
    let fecha = document.getElementById('fecha').value.trim();
    let hora = document.getElementById('hora').value.trim();

    let servicios = [];
    document.querySelectorAll('#servicio input[name="servicio"]:checked').forEach((checkbox) => {
        servicios.push(checkbox.value);
    });

    let barberos = [];
    document.querySelectorAll('#barberos input[name="barbero"]:checked').forEach((checkbox) => {
        barberos.push(checkbox.value);
    });

    if (!nombre || !apellido || !telefono || !email || !fecha || !hora) {
        Swal.fire({
            icon: "error",
            text: "Por favor, complete todos los campos",
          });
        return;
    }

    if (servicios.length === 0) {
        Swal.fire({
            icon: "error",
            text: "Debe seleccionar almenos un servicio!",
          });
        return;
    }
    const servicioEspecial = "Afeitado tradicional";
    const incluyeAfeitadoTradicional = servicios.includes(servicioEspecial);

    if (servicios.length > 1 && !incluyeAfeitadoTradicional) {
    Swal.fire({
        icon: "error",
        text: "Solo puede seleccionar un servicio, a menos que uno de ellos sea Afeitado Tradicional",
    });
    return;
    }


    if (barberos.length === 0) {
        Swal.fire({
            icon: "error",
            text: "Debe seleccionar un barbero!",
          });
        return;
    }
    if (barberos.length > 1) {
        Swal.fire({
            icon: "error",
            text: "Solo se puede seleccionar un barbero!",
          });
        return;
    }
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
    Swal.fire({
        icon: "success",
        title: "Turno guardado exitosamente",
        showConfirmButton: false,
        timer: 1500
      });
    document.getElementById('miFormulario').reset();
});
