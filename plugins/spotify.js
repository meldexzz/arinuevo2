let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];
    const imagenSpotify = './plataformas/spotify.jpg'; // Ruta de la imagen de Spotify en la carpeta 'plataformas'

    // Verificamos si se ha configurado el texto para Spotify
    if (chat.setspotify) {
        let spotify = chat.setspotify;
        await conn.reply(m.chat, spotify, m, {
            image: { url: imagenSpotify },  // Se envía la imagen de Spotify antes del texto
        });
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝚂𝚙𝚘𝚝𝚒𝚏𝚢, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙨𝙥𝙤𝚝𝙞𝚏𝚢 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['spotify'];
handler.group = true;
export default handler;
