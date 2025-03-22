export async function before(m, { conn }) {
  if (!m.isGroup) return;  // Solo funciona en grupos

  // Convertimos el mensaje a minúsculas para que no importe si escriben "Gracias", "GRACIAS" o "gracias"
  let messageText = m.text.toLowerCase().trim();

  // Si el mensaje contiene la palabra "gracias" (sin importar si está sola o acompañada de otras palabras)
  if (messageText.includes('gracias')) {
    // Responde con un mensaje de agradecimiento
    await conn.sendMessage(m.chat, {
      text: '¡Muchas gracias a ti! 😊',
      mentions: [m.sender],  // Mencionamos al que dijo "gracias"
    });
  }
}
