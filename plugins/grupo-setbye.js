const handler = async (m, {conn, text, isROwner, isOwner}) => {
if (text) {
global.db.data.chats[m.chat].sBye = text;
m.reply('𝙇𝘼 𝘿𝙀𝙎𝙋𝙀𝘿𝙄𝘿𝘼 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘿𝘼 𝘼𝙍𝙄𝘾𝙄𝙏𝘼.🍭');
} else throw `𝘼𝙜𝙧𝙚𝙜𝙖 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙖𝙨 𝙙𝙚 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙖\n𝙋𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙡𝙤𝙨 𝙥𝙖𝙧á𝙢𝙚𝙩𝙧𝙤𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙖𝙡𝙚𝙨 *@𝙪𝙨𝙚𝙧* (𝙥𝙖𝙧𝙖 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤) 𝙮 *@𝙨𝙪𝙗𝙟𝙚𝙘𝙩* (𝙥𝙖𝙧𝙖 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤).🍭`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
handler.register = false 
export default handler;
