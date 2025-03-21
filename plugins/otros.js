let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Verificamos si se ha configurado el texto para Otros
    if (chat.setotros) {
        let otros = chat.setotros;
        await conn.reply(m.chat, otros, m);
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝙊𝙩𝙧𝙤𝙨, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙤𝙩𝙧𝙤𝙨 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['otros'];
handler.group = true;
export default handler;
