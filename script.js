
document.getElementById('jingleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apodo = document.getElementById('apodo').value;
    const evento = document.getElementById('evento').value;
    const estilo = document.getElementById('estilo').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = `🎵 Nueva solicitud de canción personalizada 🎵%0A%0A👤 Nombre: ${nombre}%0A🎭 Apodo: ${apodo}%0A🎉 Evento: ${evento}%0A🎶 Estilo: ${estilo}%0A📝 Mensaje: ${mensaje}`;
    const numeroWhatsApp = '52XXXXXXXXXX'; // Reemplaza con tu número real
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
    window.open(url, '_blank');
});
