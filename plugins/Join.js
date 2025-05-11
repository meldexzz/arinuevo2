let handler = async (m, { conn, args }) => {
  // Verificar si se proporcionó un enlace
  if (!args[0]) throw '✳️ Por favor envía el enlace del grupo de WhatsApp\n\nEjemplo: .join https://chat.whatsapp.com/ABC123456789'
  
  // Extraer el código del enlace
  let linkRegex = /chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/i
  let [, code] = args[0].match(linkRegex) || []
  
  if (!code) throw '✳️ Enlace inválido. Asegúrate de que sea un enlace de grupo de WhatsApp válido'
  
  try {
    // Notificar que se está uniendo
    await m.reply('🔄 Uniéndose al grupo...')
    
    // Unirse al grupo
    let res = await conn.groupAcceptInvite(code)
    
    // Confirmación
    await m.reply(`✅ Me he unido al grupo correctamente`)
    
  } catch (e) {
    console.error(e)
    throw '✳️ No pude unirme al grupo. Posibles razones:\n\n- El enlace ha expirado\n- El bot fue baneado previamente\n- El grupo está lleno\n- No tengo permisos para unirme'
  }
}

// Configuración del comando
handler.help = ['join <enlace>']
handler.tags = ['owner']
handler.command = ['join', 'unirse'] 
handler.rowner = true // Solo el dueño puede usar este comando

export default handler
