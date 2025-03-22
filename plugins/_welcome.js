export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;  // Solo se activa en grupos y para ciertos tipos de mensajes
  
  let chat = global.db.data.chats[m.chat];
  let taguser = `@${m.sender.split('@')[0]}`;
  let userJid = m.messageStubParameters[0];
  let img = catalogo; // Asegúrate de que esta variable esté correctamente definida y accesible

  // Verifica si la bienvenida está habilitada
  if (chat.bienvenida) {
    console.log('Bienvenida activada');
    let message = '';
    
    // Revisa el tipo de mensaje para determinar si es una bienvenida, despedida o expulsión
    console.log('Tipo de mensaje:', m.messageStubType);
    if (m.messageStubType == 27) {  // Nuevo miembro
      message = chat.sWelcome
        ? chat.sWelcome.replace('@user', taguser).replace('@subject', groupMetadata.subject)
        : `_🙂 Hola *${taguser}* Bienvenid@ al grupo *${groupMetadata.subject}*_`;
    } else if (m.messageStubType == 32) {  // Miembro salió
      message = chat.sBye
        ? chat.sBye.replace('@user', taguser).replace('@subject', groupMetadata.subject)
        : `_👋 *${taguser}* Ha abandonado el grupo_`;
    } else if (m.messageStubType == 28) {  // Miembro expulsado
      message = chat.sBye
        ? chat.sBye.replace('@user', taguser).replace('@subject', groupMetadata.subject)
        : `_☠️ *${taguser}* Fue expulsad@ del grupo_`;
    }

    // Si hay mensaje, envíalo
    if (message) {
      console.log('Mensaje a enviar:', message);  // Verifica que el mensaje esté correcto
      await conn.sendMessage(m.chat, { image: img, caption: message, mentions: [userJid] });
    }
  } else {
    console.log('Bienvenida desactivada');
  }
}
