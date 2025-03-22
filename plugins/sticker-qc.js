import { sticker } from '../lib/sticker.js';
import axios from 'axios';

const handler = async (m, { conn, args, usedPrefix, command }) => {
    let user = global.db.data.users[m.sender];
    let f = user.packname || global.packname;
    let g = (user.packname && user.author ? user.author : (user.packname && !user.author ? '' : global.author));
    let text;

    // Obtención del texto
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return m.reply("╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇* ⊱❗️⊱╮\n\n𝘼𝙂𝙍𝙀𝙂𝙐𝙀́ 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝘾𝙍𝙀𝘼𝙍 𝙀𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍");
    }

    if (!text) {
        return m.reply("╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇* ⊱❗️⊱╮\n\n𝘼𝙂𝙍𝙀𝙂𝙐𝙀́ 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝘾𝙍𝙀𝘼𝙍 𝙀𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍");
    }

    // Enviar mensaje de procesamiento
    conn.fakeReply(m.chat, `Calma crack estoy procesando 👏\n\n> *Esto puede demorar unos minutos*`, '0@s.whatsapp.net', `No haga spam gil`, 'status@broadcast');

    const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    const mentionRegex = new RegExp(`@${who.split('@')[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'g');
    const mishi = text.replace(mentionRegex, '');

    if (mishi.length > 65) {
        return m.reply('*⚠️ El texto no puede tener mas de 65 caracteres*');
    }

    // Obtener imagen de perfil
    const pp = await conn.profilePictureUrl(who).catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
    console.log('Imagen de perfil:', pp);  // Depuración: ver la URL de la imagen de perfil

    const nombre = await conn.getName(who);
    const obj = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#000000",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [{
            "entities": [],
            "avatar": true,
            "from": { "id": 1, "name": `${who?.name || nombre}`, "photo": { url: `${pp}` } },
            "text": mishi,
            "replyMessage": {}
        }]
    };

    try {
        // Solicitar la API para generar la imagen base64
        const json = await axios.post('https://bot.lyo.su/quote/generate', obj, { headers: { 'Content-Type': 'application/json' } });
        console.log('Respuesta de la API:', json.data);  // Depuración: ver la respuesta de la API

        // Verificar que la API haya devuelto la imagen correctamente
        if (!json.data.result || !json.data.result.image) {
            console.error('No se encontró la imagen en la respuesta de la API');
            return m.reply('Hubo un error al generar el sticker.');
        }

        // Crear el buffer de la imagen base64
        const buffer = Buffer.from(json.data.result.image, 'base64');
        console.log('Buffer generado:', buffer);  // Depuración: ver el buffer generado

        // Generar el sticker
        let stiker = await sticker(buffer, false, f, g);

        if (stiker) {
            return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, {
                contextInfo: {
                    'forwardingScore': 200,
                    'isForwarded': false,
                    externalAdReply: {
                        showAdAttribution: false,
                        title: wm,
                        body: vs,
                        mediaType: 2,
                        sourceUrl: [nna, nn, md, yt].getRandom(),
                        thumbnail: imagen4
                    }
                }
            }, { quoted: m });
        } else {
            console.error('Error al generar el sticker.');
            return m.reply('Hubo un error al generar el sticker.');
        }

    } catch (error) {
        console.error('Error en la generación del sticker:', error);
        return m.reply('Hubo un error al intentar procesar tu solicitud.');
    }
};

handler.help = ['qc'];
handler.tags = ['sticker'];
handler.command = /^(qc)$/i;
handler.register = false;

export default handler;
