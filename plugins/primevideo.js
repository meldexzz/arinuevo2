let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Verificamos si se ha configurado el texto para PrimeVideo
    if (chat.setprimevideo) {
        let primevideo = chat.setprimevideo;
        await conn.reply(m.chat, primevideo, m);
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝙋𝙧𝙞𝙢𝙚𝙑𝙞𝙙𝙚𝙤, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙥𝙧𝙞𝙢𝙚𝙫𝙞𝙙𝙚𝙤 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['primevideo'];
handler.group = true;
export default handler;
