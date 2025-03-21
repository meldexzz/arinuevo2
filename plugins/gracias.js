let handler = async (m, { conn }) => {
    // Convertimos el texto del mensaje a minúsculas para hacer la búsqueda más flexible
    let messageText = m.text.toLowerCase();

    // Si el mensaje contiene la palabra "gracias"
    if (messageText.includes("gracias")) {
        // El bot responde con el mensaje personalizado
        await conn.sendMessage(m.chat, { text: 'Un placer, gracias por comprar y disfruta. \n\nATT: Equipo de Ary ventas' }, { quoted: m });
    }
};

handler.help = ['gracias'];  // Esto es solo un nombre de referencia
handler.tags = ['información'];  // Categoría
handler.command = ['gracias'];  // Este también es solo un nombre de referencia

// Este handler ahora se ejecuta cada vez que el bot recibe un mensaje, no solo comandos
export default handler;
