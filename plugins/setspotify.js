let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
        global.db.data.chats[m.chat].setspotify = text; // Guardamos el set de Spotify
        conn.reply(m.chat, '𝙇𝙤𝙨 𝙘𝙤𝙢𝙗𝙤𝙨 𝙙𝙚 𝙎𝙥𝙤𝚝𝙞𝚏𝚢 𝙝𝙖𝙣 𝙨𝙞𝙙𝙤 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙙𝙤𝙨.', m);
    } else {
        throw `𝙀𝙨𝙘𝙧𝙞𝙗𝙚 𝙡𝙤𝙨 𝙘𝙤𝙢𝙗𝙤𝙨 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖𝙨 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: \n.s𝙚𝙩𝙨𝙥𝙤𝚝𝙞𝚏𝚢 𝙉𝙪𝙚𝙨𝙩𝙧𝙤 𝙥𝙡𝙖𝙮𝙡𝙞𝙨𝙩 𝙛𝙖𝙗𝙪𝙡𝙤.`; 
    }
};

handler.command = ['setspotify']; // Comando de Spotify
handler.admin = true;
handler.group = true;
export default handler;
