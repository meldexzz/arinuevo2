import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m, { conn, participants, groupMetadata }) {
  // Verifica que sea un mensaje de grupo y que tenga el tipo de mensaje esperado
  if (!m.messageStubType || !m.isGroup) return true;

  const userJid = m.messageStubParameters[0];
  let taguser = `@${userJid.split('@')[0]}`;

  // Obtiene la configuración del chat
  let chat = global.db.data.chats[m.chat];
  
  // Definir la imagen para la bienvenida o despedida (puede ser una URL o un buffer)
  let img = 'https://example.com/welcome-image.jpg'; // Reemplaza con tu imagen

  // Solo se procesan los mensajes de bienvenida/despedida
  if (chat.welcome) {
    let message = '';
    
    // Mensaje de bienvenida
    if (m.messageStubType == 27) {
      message = chat.sWelcome
        ? chat.sWelcome.replace('@user', taguser).replace('@subject', groupMetadata.subject)
        : `_🙂 Hola *${taguser}* Bienvenid@ al grupo *${groupMetadata.subject}*_`;
    
    // Mensaje de despedida (cuando alguien sale)
    } else if (m.messageStubType == 32) {
      message = chat.sBye
        ? chat.sBye.replace('@user', taguser).replace('@subject', groupMetadata.subject)
        : `_👋 *${taguser}* Ha abandonado el grupo_`;
    
    // Mensaje de expulsión
    } else if (m.messageStubType == 28) {
      message = chat.sBye
        ? chat.sBye.replace('@user', taguser).replace('@subject', groupMetadata.subject)
        : `_☠️ *${taguser}* Fue expulsad@ del grupo_`;
    }

    // Si hay un mensaje definido, se envía
    if (message) {
      await conn.sendMessage(m.chat, { image: img, caption: message, mentions: [userJid] });
    }
  }
}
