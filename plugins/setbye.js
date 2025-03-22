let handler = async (m, { conn, usedPrefix, command, args, isAdmin, isOwner }) => {
  let chat = global.db.data.chats[m.chat]

  if (!m.isGroup) {
    return m.reply('Este comando solo funciona en grupos.');
  }

  if (!(isAdmin || isOwner)) {
    return m.reply('Este comando solo lo puede usar un administrador del grupo.');
  }

  if (command === 'setbye') {
    if (!args.join(' ')) {
      return m.reply('¡Por favor ingresa el mensaje de despedida!');
    }

    chat.sBye = args.join(' ');
    m.reply(`¡El mensaje de despedida se ha actualizado a: \n${chat.sBye}`);
  }
}

handler.help = ['setbye']
handler.tags = ['admin']
handler.command = /^(setbye)$/i

export default handler
