let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Verificamos si se ha configurado el texto para Capcut
    if (chat.setcapcut) {
        let capcut = chat.setcapcut;
        await conn.reply(m.chat, capcut, m);
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝘾𝙖𝙥𝙘𝙪𝙩, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙘𝙖𝙥𝙘𝙪𝙩 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['capcut'];
handler.group = true;
export default handler;
