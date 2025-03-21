let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
        global.db.data.chats[m.chat].setnuevos = text; // Guardamos el set de Nuevos
        conn.reply(m.chat, '𝙇𝙤𝙨 𝙘𝙤𝙢𝙗𝙤𝙨 𝙙𝙚 𝙉𝙪𝙚𝙫𝙤𝙨 𝙝𝙖𝙣 𝙨𝙞𝙙𝙤 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙙𝙤𝙨.', m);
    } else {
        throw `𝙀𝙨𝙘𝙧𝙞𝙗𝙚 𝙡𝙤𝙨 𝙘𝙤𝙢𝙗𝙤𝙨 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖𝙨 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: \n.setnuevos 𝙇𝙤𝙨 𝙢𝙚𝙟𝙤𝙧𝙚𝙨 𝙡𝙤𝙠𝙤𝙣𝙤𝙨.`;
    }
};

handler.command = ['setnuevos']; // Comando de Nuevos
handler.admin = true;
handler.group = true;
export default handler;
