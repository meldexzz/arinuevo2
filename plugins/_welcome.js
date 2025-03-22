 import { WAMessageStubType } from '@whiskeysockets/baileys'


export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0


  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]

  
  const userJid = m.messageStubParameters[0]
  let img = catalogo;

 

  if (chat.welcome) {
    let message = ''
    if (m.messageStubType == 27) {
      message = chat.sWelcome
        ? chat.sWelcome.replace('@user', taguser).replace('@subject', groupMetadata.subject)
        : `_🙂 Hola *${taguser}* Bienvenid@ al grupo *${groupMetadata.subject}*_`
    } else if (m.messageStubType == 32) {
      message = chat.sBye
        ? chat.sBye.replace('@user', taguser).replace('@subject', groupMetadata.subject)
        : `_👋 *${taguser}* Ha abandonado el grupo_`
    } else if (m.messageStubType == 28) {
      message = chat.sBye
        ? chat.sBye.replace('@user', taguser).replace('@subject', groupMetadata.subject)
        : `_☠️ *${taguser}* Fue expulsad@ del grupo_`
    }

    if (message) {
      await conn.sendMessage(m.chat, { image: img, caption: message, mentions: [userJid] })
    }
  }
}
