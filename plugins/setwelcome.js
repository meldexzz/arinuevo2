let handler = async (m, { conn, usedPrefix, command, args, isAdmin, isOwner }) => {
  let chat = global.db.data.chats[m.chat]

  if (!m.isGroup) {
    return m.reply('Este comando solo funciona en grupos.');
  }

  if (!(isAdmin || isOwner)) {
    return m.reply('Este comando solo lo puede usar un administrador del grupo.');
  }

  if (command === 'setwelcome') {
    if (!args.join(' ')) {
      return m.reply('¡Por favor ingresa el mensaje de bienvenida!');
    }

    chat.sWelcome = args.join(' ');
    m.reply(`¡El mensaje de bienvenida se ha actualizado a: \n${chat.sWelcome}`);
  }
}

handler.help = ['setwelcome']
handler.tags = ['admin']
handler.command = /^(setwelcome)$/i

export default handler
