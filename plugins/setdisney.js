let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
        global.db.data.chats[m.chat].setdisney = text; // Guardamos el set de Disney
        conn.reply(m.chat, '𝙇𝙤𝙨 𝙘𝙤𝙢𝙗𝙤𝙨 𝙙𝙚 𝘿𝙞𝙨𝙣𝙚𝙮 𝙝𝙖𝙣 𝙨𝙞𝙙𝙤 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙙𝙤𝙨.', m);
    } else {
        throw `𝙀𝙨𝙘𝙧𝙞𝙗𝙚 𝙡𝙤𝙨 𝙘𝙤𝙢𝙗𝙤𝙨 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖𝙨 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: \n.s𝙚𝙩𝙙𝙞𝙨𝙣𝙚𝙮 𝙇𝙤𝙨 𝙡𝙖𝙢𝙤𝙨 𝙧𝙞𝙤𝙨 𝙙𝙚 𝘿𝙞𝙨𝙣𝙚𝙮.`; 
    }
};

handler.command = ['setdisney']; // Comando de Disney
handler.admin = true;
handler.group = true;
export default handler;
