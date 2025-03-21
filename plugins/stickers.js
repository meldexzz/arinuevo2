let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Definir los comandos y las rutas de los stickers en la carpeta local "stickers"
    let stickers = {
        '.entrega': './stickers/entrega.webp',
        '.pagorecib': './stickers/pagorecib.webp',
        '.espera': './stickers/espera.webp',
        '.disfruta': './stickers/disfruta.webp',
        '.invenv': './stickers/invenv.webp',
        '.renovacionecit': './stickers/renovacionecit.webp',
        '.hastamañana': './stickers/hastamañana.webp',
        '.repo': './stickers/repo.webp',
        '.relax': './stickers/relax.webp',
        '.contactame': './stickers/contactame.webp',
        '.fueraservicio': './stickers/fueraservicio.webp',
        '.gracias': './stickers/gracias.webp',
        '.soporte': './stickers/soporte.webp',
        '.refe': './stickers/refe.webp',
    };

    // Verifica si el mensaje contiene un comando válido
    let stickerPath = stickers[m.text.trim().toLowerCase()];
    
    if (stickerPath) {
        // Si el comando es válido, responder con el sticker desde la ruta local
        await conn.sendMessage(m.chat, { sticker: { url: stickerPath } }, { quoted: m });
    } else {
        // Si el comando no es válido, responder con un mensaje estándar
        await conn.reply(m.chat, "Comando no reconocido. Usa uno de los siguientes: .entrega, .pago, .recib, etc.", m);
    }
};

handler.command = ['entrega', 'pagorecib', 'espera', 'disfruta', 'invenv', 'renovacionecit', 'hastamañana', 'repo', 'relax', 'contactame', 'fueraservicio', 'gracias', 'soporte', 'refe'];
handler.group = true;
export default handler;
