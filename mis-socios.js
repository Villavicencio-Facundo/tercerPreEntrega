document.addEventListener("DOMContentLoaded", () => {
    
    const getSocios = fetch("./socios.json");
    
    getSocios
        .then((res) => res.json())
        .then((res) => {
            
            const socios = res.socios; 
            const container = document.getElementById("socios-container"); 
            
            socios.forEach((socio) => {
                const card = document.createElement("div");
                card.className = "socio-card"; 
                card.innerHTML = `
                    <h2>Socio: ${socio.numero_socio}</h2>
                    <p>Nombre: ${socio.nombre} ${socio.apellido}</p>
                    <p>Cantidad de cortes: ${socio.cantidad_cortes}</p>
                    <p>Más cortes con: ${socio.barbero_mas_cortes}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch((error) => console.error("Error al cargar el JSON:", error));
});
