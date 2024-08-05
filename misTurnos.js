
let misTurnos = JSON.parse(localStorage.getItem("turnos")) || [];

const renderTurnos = (arrayTurnos) => {
    let contenedorTurnos = document.getElementById("contenedor-turnos");
    contenedorTurnos.innerHTML = ""; 

    arrayTurnos.forEach((turno) => {
        let turnoGuardado = document.createElement("div");
        turnoGuardado.className = "turnos";
        turnoGuardado.innerHTML = `
            <h2>${turno.nombre} ${turno.apellido}</h2>
            <p><strong>Teléfono:</strong> ${turno.telefono}</p>
            <p><strong>Email:</strong> ${turno.email}</p>
            <p><strong>Fecha:</strong> ${turno.fecha}</p>
            <p><strong>Hora:</strong> ${turno.hora}</p>
            <p><strong>Servicios:</strong> ${turno.servicios.join(', ')}</p>
            <p><strong>Barberos:</strong> ${turno.barberos.join(', ')}</p>
            <button onclick ="eliminarTurno('${turno.apellido}')"> Eliminar</button>
        `;
        contenedorTurnos.appendChild(turnoGuardado); 
    });
};

renderTurnos(misTurnos);

const eliminarTurno = (apellido) => {
misTurnos = misTurnos.filter(turno => turno.apellido !== apellido);
localStorage.setItem('turnos', JSON.stringify(misTurnos));
renderTurnos(misTurnos);
};
