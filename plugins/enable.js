
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.bienvenida = isEnable
      break

    case 'modoadmin': case 'soloadmin':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
      }}
      chat.modoadmin = isEnable          
    break
  
    case 'document':
    case 'documento':
    isUser = true
    user.useDocument = isEnable
    break
 
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'nsfw':
      case 'modohorny':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break
    default:
      if (!/[01]/.test(command)) return m.reply(`
*🍟 Ingresa una opción para habilitar o deshabilitar*

*≡ Lista de opciones*
*Tipo :* welcome
*Descripción :* Des/Activa la *Bienvenida* y *Despedida* para Grupos

*Tipo :* nsfw 
*Descripción :* Des/Activa los comandos *NSFW* para Grupos

*Tipo :* antilink 
*Descripción :* Des/Activa el *AntiLink* para Grupos

*Tipo :* document 
*Descripción :* Des/Activa la *Descarga En Documentos* para el Usuario

*• Ejemplo:*
*- ${usedPrefix + command}* welcome
`.trim())
      throw false
  }
  m.reply(`🍭 La función *${type}* se *${isEnable ? 'activó' : 'desactivó'}* ${isAll ? 'para este bot' : isUser ? '' : 'para este chat'}`)
}

handler.help = ['enable', 'disable']
handler.tags = ['nable']
handler.command = /^(enable|disable|on|off|1|0)$/i

export default handler
