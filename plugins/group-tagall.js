const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `BOT | MESITO 🦥\n\n *Integrantes :  ${participants.length}* ${oi}\n\n𝘋𝘦𝘴𝘱𝘪𝘦𝘳𝘵𝘦𝘯, 𝘔𝘦𝘴𝘪𝘵𝘰𝘴.🦥\n`;
  for (const mem of participants) {
    teks += `🦥 @${mem.id.split('@')[0]}\n`;
  }
  teks += `

𝙈𝙀𝙎𝙄𝙏𝙊 𝙎𝙏𝙊𝙍𝙀 | 𝙈𝙀𝙇𝘿𝙀𝙓𝙕𝙕`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;
