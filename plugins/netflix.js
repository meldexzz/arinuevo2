let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];
    const imagenNetflix = './plataformas/netflix.jpg'; // Ruta de la imagen de Netflix en la carpeta 'plataformas'

    // Verificamos si se ha configurado el texto para Netflix
    if (chat.setnetflix) {
        let netflix = chat.setnetflix;
        await conn.reply(m.chat, netflix, m, {
            image: { url: imagenNetflix },  // Se envía la imagen de Netflix antes del texto
        });
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝙉𝙚𝙩𝙛𝙡𝙞𝙭, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙣𝙚𝙩𝙛𝙡𝙞𝙭 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['netflix'];
handler.group = true;
export default handler;
