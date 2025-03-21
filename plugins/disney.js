let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];
    const imagenDisney = './plataformas/disney.jpg'; // Ruta de la imagen de Disney en la carpeta 'plataformas'

    // Verificamos si se ha configurado el texto para Disney
    if (chat.setdisney) {
        let disney = chat.setdisney;
        await conn.reply(m.chat, disney, m, {
            image: { url: imagenDisney },  // Se envía la imagen de Disney antes del texto
        });
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝘿𝙞𝙨𝙣𝙚𝙮, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙙𝙞𝙨𝙣𝙚𝙮 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['disney'];
handler.group = true;
export default handler;
