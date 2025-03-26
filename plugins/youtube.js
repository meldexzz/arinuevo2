let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.setyoutube) {  // Cambié 'setcomprar' a 'setyoutube'
        let youtube = chat.setyoutube;
        await conn.reply(m.chat, youtube, m);
    } else {
        m.reply(`𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝙔𝙤𝙪𝙏𝙪𝙗𝙚, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙮𝙤𝙪𝙩𝙪𝙗𝙚 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.`);  // Cambié el mensaje de "comprar" a "youtube"
    }
}
handler.command = ['youtube'];  // Cambié el comando de 'comprar' a 'youtube'
handler.group = true;
export default handler;
