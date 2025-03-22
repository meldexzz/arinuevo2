export async function before(m, { conn }) {
  if (!m.isGroup) return;  // Solo funciona en grupos

  // Convertimos el mensaje a minúsculas para que no importe si escriben "Gracias", "GRACIAS" o "gracias"
  let messageText = m.text.toLowerCase().trim();

  // Comprobamos si el mensaje contiene "gracias"
  if (messageText.includes('gracias')) {
    // Verificamos que el mensaje no sea del bot
    if (m.sender === conn.user.jid) return;

    // Responde con un mensaje de agradecimiento
    await conn.sendMessage(m.chat, {
      text: '¡Muchas gracias a ti! 😊',
      mentions: [m.sender],  // Mencionamos al que dijo "gracias"
    });
  }
}
