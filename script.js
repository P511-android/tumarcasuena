function enviarWhatsApp() {
    const nombre = document.getElementById("nombre").value;
    const apodo = document.getElementById("apodo").value;
    const ocasion = document.getElementById("ocasion").value;
    const estilo = document.getElementById("estilo").value;
    const mensaje = `¡Hola! 🎶 Me interesa una canción personalizada. Mis datos son:\n\n👤 Nombre: ${nombre}\n🎤 Apodo/Artístico: ${apodo}\n🎁 Ocasión: ${ocasion}\n🎼 Estilo musical: ${estilo}`;
    const telefono = "5213345650719";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
