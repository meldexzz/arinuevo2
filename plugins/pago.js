let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Verificamos si se ha configurado el texto para Max
    if (chat.setmax) {
        let max = chat.setmax;
        await conn.reply(m.chat, max, m);
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙚𝙡 𝙨𝙩𝙤𝙘𝙠, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩stock 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['stock'];
handler.group = true;
export default handler;
