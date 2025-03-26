let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Verificamos si se ha configurado el texto para Crunchyroll
    if (chat.setcrunchyroll) {
        let crunchyroll = chat.setcrunchyroll;
        await conn.reply(m.chat, crunchyroll, m);
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝙲𝙧𝙪𝙣𝙘𝙝𝙮𝙧𝙤𝙡𝙡, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙘𝙧𝙪𝙣𝙘𝙝𝙮𝙧𝙤𝙡𝙡 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['crunchyroll'];
handler.group = true;
export default handler;
