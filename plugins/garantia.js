let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Verificamos si se ha configurado el texto para Garantía
    if (chat.setgarantia) {
        let garantia = chat.setgarantia;
        await conn.reply(m.chat, garantia, m);
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝙂𝙖𝙧𝙖𝙣𝙩í𝙖, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙜𝙖𝙧𝙖𝙣𝙩í𝙖 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['garantia'];
handler.group = true;
export default handler;
