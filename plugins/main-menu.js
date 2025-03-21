import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
╔═══════════════╗

¡𝙃𝙊𝙇𝘼! *%name* ! 𝙎𝙤𝙮 𝘼𝙧𝙞𝘽𝙤𝙩.🌱

╚═══════════════╝

*L I S T A  -  M E N Ú S*
`.trimStart(),

  header: '╭──⬣「 *%category* 」⬣',
  body: '│  ➤ *%cmd*\n',
  footer: '╰──⬣\n',
  after: '',
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level } = global.db.data.users[m.sender]
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    
    let text = `
${defaultMenu.before}

▸▸ 𝙄𝙉𝙁𝙊 🌟◂◂
│┊➺ 🌿 .𝘰𝘸𝘯𝘦𝘳
│┊➺ 🌱 .𝘨𝘳𝘶𝘱𝘰𝘴
│┊➺ 🌾 .𝘴𝘵𝘢𝘵𝘶𝘴
│┊➺ 🌵 .𝘵𝘰𝘵𝘢𝘭𝘧𝘶𝘯𝘤𝘪𝘰𝘯𝘦𝘴
│┊➺ 🌸 .𝘮𝘦𝘯𝘶
│┊➺ 🌻 .𝘱𝘪𝘯𝘨
│┊➺ 🌷 .𝘳𝘶𝘯𝘵𝘪𝘮𝘦
│┊➺ 🌹 .𝘴𝘤𝘳𝘪𝘱𝘵
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙃𝙐𝙏𝙏𝙀𝙍𝙎 🔎◂◂
│┊➺ 🌿 .𝘮𝘦𝘳𝘤𝘢𝘥𝘰𝘭𝘪𝘣𝘳𝘦 <𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢>
│┊➺ 🌱 .𝘱𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵
│┊➺ 🌾 .𝘴𝘰𝘶𝘯𝘥𝘴𝘦𝘢𝘳𝘤𝘩 <𝘣ú𝘴𝘲𝘶𝘦𝘝𝘢>
│┊➺ 🌵 .𝘴𝘱𝘰𝘵𝘪𝘧𝘺𝘴𝘦𝘢𝘳𝘤𝘩 <𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢>
│┊➺ 🌸 .𝘵𝘪𝘬𝘵𝘰𝘬𝘴𝘦𝘢𝘳𝘤𝘩 <𝘣ú𝘴𝘲𝘶𝘦𝘝𝘢>
│┊➺ 🌻 .𝘵𝘸𝘦𝘦𝘵𝘱𝘰𝘴𝘵𝘴 <𝘣ú𝘴𝘲𝘶𝘦𝘝𝘢>
│┊➺ 🌷 .𝘨𝘰𝘰𝘨𝘭𝘦 <𝘣ú𝘴𝘲𝘶𝘦𝘝𝘢>
│┊➺ 🌹 .𝘺𝘵𝘴𝘦𝘢𝘳𝘤𝘩 <𝘣ú𝘴𝘲𝘶𝘦𝘝𝘢>
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙅𝙐𝙀𝙂𝙊𝙎 🎮◂◂
│┊➺ 🌿 .𝘢𝘱𝘰𝘴𝘵𝘢𝘳 <𝘤𝘢𝘯𝘵𝘪𝘥𝘢𝘥>
│┊➺ 🌱 .𝘴𝘭𝘰𝘵 <𝘢𝘱𝘶𝘦𝘴𝘵𝘢>
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙍𝙋𝙂 🌠◂◂
│┊➺ 🌿 .𝘤𝘭𝘢𝘪𝘮
│┊➺ 🌱 .𝘤𝘳𝘪𝘮𝘦𝘯
│┊➺ 🌾 .𝘥𝘶𝘭𝘤𝘦𝘴
│┊➺ 🌵 .𝘮𝘪𝘯𝘢𝘳
│┊➺ 🌸 .𝘸𝘰𝘳𝘬
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 📑◂◂
│┊➺ 🌿 .𝘴𝘯
│┊➺ 🌱 .𝘱𝘦𝘳𝘧𝘪𝘭
│┊➺ 🌾 .𝘱𝘦𝘳𝘧𝘪𝘭 @𝘶𝘴𝘦𝘳
│┊➺ 🌵 .𝘳𝘦𝘨 <𝘯𝘰𝘮𝘣𝘳𝘦.𝘦𝘥𝘢𝘥>
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 🏞◂◂
│┊➺ 🌿 .𝘲𝘶𝘰𝘵𝘭𝘺 <𝘵𝘦𝘭𝘦𝘹𝘵𝘰>
│┊➺ 🌱 .𝘴𝘤𝘢𝘵
│┊➺ 🌾 .𝘴𝘮𝘦𝘮𝘦 <𝘵𝘦𝘭𝘦𝘺𝘵𝘰>
│┊➺ 🌵 .𝘴𝘵𝘪𝘤𝘬𝘦𝘳
│┊➺ 🌸 .𝘸𝘮 <𝘯𝘰𝘮𝘣𝘳𝘦>|<𝘢𝘶𝘵𝘰𝘳>
│┊➺ 🌻 .𝘵𝘰𝘷𝘪𝘥 <𝘴𝘵𝘪𝘤𝘬𝘦𝘳>
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙄𝙈𝘼𝙂𝙀𝙉𝙀𝙎 📸◂◂
│┊➺ 🌿 .𝘵𝘪𝘬𝘵𝘰𝘬𝘪𝘮𝘨 <𝘶𝘳𝘭>
│┊➺ 🌱 .𝘪𝘮𝘢𝘨𝘦𝘯 <𝘣ú𝘴𝘲𝘶𝘦𝘝𝘢>
│┊➺ 🌾 .𝘮𝘦𝘨𝘶𝘮𝘪𝘯
│┊➺ 🌵 .𝘯𝘦𝘬𝘰
│┊➺ 🌸 .𝘱𝘱𝘤𝘰𝘶𝘱𝘭𝘦
│┊➺ 🌻 .𝘴𝘩𝘪𝘯𝘰𝘣𝘶
│┊➺ 🌷 .𝘸𝘢𝘪𝘧𝘶
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙂𝙍𝙐𝙋𝙊𝙎 🌿◂◂
│┊➺ 🌱 .𝘣𝘢𝘯𝘦𝘢𝘳𝘣𝘰𝘵
│┊➺ 🌻 .𝘨𝘳𝘰𝘶𝘱 𝘰𝘱𝘦𝘯 / 𝘤𝘭𝘰𝘴𝘦
│┊➺ 🌼 .𝘨𝘳𝘶𝘱𝘰 𝘢𝘣𝘳𝘪𝘳 / 𝘤𝘦𝘳𝘳𝘢𝘳
│┊➺ 🍃 .𝘬𝘪𝘤𝘬 @𝘶𝘴𝘦𝘳
│┊➺ 🌵 .𝘭𝘪𝘯𝘬
│┊➺ 🌿 .𝘦𝘯𝘤𝘶𝘦𝘴𝘵𝘢 <𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢|𝘰𝘱𝘤𝘪𝘰𝘯𝘦𝘴>
│┊➺ 🌱 .𝘱𝘳𝘰𝘮𝘰𝘵𝘦 593𝘹𝘹𝘹
│┊➺ 🍂 .𝘱𝘳𝘰𝘮𝘰𝘵𝘦 @𝘶𝘴𝘶𝘢𝘳𝘪𝘰
│┊➺ 🌾 .𝘱𝘳𝘰𝘮𝘰𝘵𝘦 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳 𝘤𝘩𝘢𝘵
│┊➺ 🌸 .𝘴𝘦𝘵𝘱𝘱𝘨𝘤
│┊➺ 🌺 .𝘵𝘢𝘨
│┊➺ 🌿 .𝘵𝘢𝘨𝘢𝘭𝘭 <𝘮𝘦𝘯𝘴𝘢𝘫𝘦>
│┊➺ 🌾 .𝘪𝘯𝘷𝘰𝘤𝘢𝘳 <𝘮𝘦𝘯𝘴𝘢𝘫𝘦>
│┊➺ 🌱 .𝘥𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘳𝘣𝘰𝘵
│┊➺ 🍂 .𝘥𝘴
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙇𝙊𝙂𝙊 - 𝙈𝘼𝙆𝙀𝙍 🎨◂◂
│┊➺ 🌵 .𝘴𝘢𝘥𝘤𝘢𝘵 <𝘵𝘦𝘳𝘹𝘵𝘰>
│┊➺ 🌸 .𝘵𝘸𝘦𝘦𝘵 <𝘤𝘰𝘮𝘦𝘯𝘵𝘢𝘳𝘪𝘰>
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙊𝙉 / 𝙊𝙁𝙁 📴◂◂
│┊➺ 🌱 .𝘦𝘯𝘢𝘣𝘭𝘦
│┊➺ 🍃 .𝘥𝘪𝘴𝘢𝘣𝘭𝘦
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝘿𝙀𝙎𝘾𝘼𝙂𝘼𝙎 📥◂◂
│┊➺ 🌿 .𝘨𝘥𝘳𝘪𝘷𝘦 <𝘶𝘳𝘭 𝘨𝘥𝘳𝘪𝘷𝘦>
│┊➺ 🌵 .𝘢𝘱𝘵𝘰𝘪𝘥𝘦 <𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢>
│┊➺ 🌸 .𝘨𝘪𝘵𝘤𝘭𝘰𝘯𝘦 <𝘶𝘳𝘭 𝘨𝘪𝘵>
│┊➺ 🌻 .𝘪𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 <𝘶𝘳𝘭 𝘪𝘨>
│┊➺ 🌿 .𝘮𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦 <𝘶𝘳𝘭 𝘮𝘧>
│┊➺ 🌺 .𝘱𝘪𝘯𝘥𝘭 <𝘱𝘪𝘯 𝘶𝘳𝘭>
│┊➺ 🌱 .𝘴𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 <𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢>
│┊➺ 🍃 .𝘴𝘱𝘰𝘵𝘪𝘧𝘺 <𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢>
│┊➺ 🌿 .𝘴𝘱𝘰𝘵𝘪𝘧𝘺𝘥𝘭 <𝘶𝘳𝘭 𝘴𝘱𝘰𝘵𝘪𝘧𝘺>
│┊➺ 🌵 .𝘵𝘪𝘬𝘵𝘰𝘬 <𝘶𝘳𝘭 𝘵𝘵>
│┊➺ 🌼 .𝘵𝘪𝘬𝘵𝘰𝘬𝘪𝘮𝘨 <𝘶𝘳𝘭>
│┊➺ 🍃 .𝘵𝘪𝘬𝘵𝘰𝘬𝘶𝘴𝘦𝘳 <𝘶𝘴𝘶𝘢𝘳𝘪𝘰>
│┊➺ 🌱 .𝘱𝘭𝘢𝘺 <𝘧𝘰𝘳𝘮𝘢𝘵𝘰> <𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢>
│┊➺ 🌻 .𝘱𝘭𝘢𝘺2 <𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢>
│┊➺ 🌸 .𝘺𝘵𝘮𝘱3 <𝘺𝘵 𝘶𝘳𝘭>
│┊➺ 🍃 .𝘺𝘵𝘮𝘱4 <𝘺𝘵 𝘶𝘳𝘭>
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙃𝙀𝙍𝙍𝙁𝙐𝙇𝙇𝙏 🔧◂◂
│┊➺ 🍃 .𝘨𝘰𝘰𝘨𝘭𝘦 <𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢>
│┊➺ 🌱 .𝘣𝘢𝘴𝘦64 <𝘦𝘯𝘤/𝘥𝘦𝘤>
│┊➺ 🍂 .𝘧𝘢𝘬𝘦 <𝘵𝘦𝘳𝘱𝘰𝘳/𝘵𝘢𝘨/𝘵𝘦𝘳𝘵𝘰>
│┊➺ 🌸 .𝘩𝘥
│┊➺ 🌿 .𝘪𝘣𝘣
│┊➺ 🌼 .𝘪𝘨𝘴𝘵𝘢𝘭𝘬 <𝘶𝘴𝘦𝘳𝘯𝘢𝘮𝘦>
│┊➺ 🌿 .𝘮𝘰𝘳𝘴𝘦 <𝘦𝘯𝘤𝘰𝘥𝘦|𝘥𝘦𝘤𝘰𝘥𝘦>
│┊➺ 🍃 .𝘷𝘦𝘳
│┊➺ 🌸 .𝘳𝘦𝘦𝘯𝘷𝘪𝘢𝘳
│┊➺ 🌺 .𝘴𝘴 <𝘶𝘳𝘭>
│┊➺ 🌻 .𝘴𝘴𝘸𝘦𝘣 <𝘶𝘳𝘭>
│┊➺ 🌱 .𝘢𝘪 <𝘱𝘦𝘵𝘪𝘤𝘪ó𝘯>
│┊➺ 🌵 .𝘵𝘰𝘨𝘪𝘧𝘢𝘶𝘥
│┊➺ 🍂 .𝘵𝘰𝘮𝘱3
│┊➺ 🍃 .𝘵𝘰𝘶𝘳𝘭
│┊➺ 🌱 .𝘵𝘰𝘷𝘪𝘥 <𝘴𝘵𝘪𝘤𝘬𝘦𝘳>
│┊➺ 🌺 .𝘵𝘵𝘴 <𝘵𝘦𝘳𝘱𝘰>
│┊➺ 🌼 .𝘸𝘩𝘪𝘴𝘵𝘭𝘦𝘳
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝘿𝙄𝙑𝙀𝙍𝙎𝙄𝙊𝙉 🎲◂◂
│┊➺ 🌿 .𝘩𝘶𝘨 <@𝘶𝘴𝘶𝘢𝘳𝘪𝘰>
│┊➺ 🌸 .𝘢𝘧𝘬 <𝘳𝘢𝘻ó𝘯>
│┊➺ 🌼 .𝘥𝘢𝘯𝘤𝘦 <@𝘶𝘴𝘦𝘳>
│┊➺ 🌻 .𝘨𝘢𝘺
│┊➺ 🍂 .𝘩𝘰𝘳𝘯𝘺
│┊➺ 🍃 .𝘴𝘩𝘪𝘱
│┊➺ 🌱 .𝘴𝘪𝘮𝘪
│┊➺ 🍃 .𝘣𝘰𝘵
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙉𝙎𝙁𝙒 🔞◂◂
│┊➺ 🌿 .𝘳𝘶𝘭𝘦34 <𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢>
│┊➺ 🌸 .𝘹𝘯𝘹𝘹𝘥𝘭 <𝘶𝘳𝘭>
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 😺◂◂
│┊➺ 🌱 .𝘨𝘦𝘵𝘥𝘣
│┊➺ 🌿 .𝘨𝘦𝘵𝘴𝘦𝘴𝘪𝘰𝘯
│┊➺ 🌸 .𝘫𝘰𝘪𝘯 <𝘭𝘪𝘯𝘬>
│┊➺ 🍃 .𝘳𝘦𝘪𝘯𝘪𝘤𝘪𝘢𝘳
│┊➺ 🌿 .𝘴𝘢𝘭𝘪𝘳
│┊➺ 🌱 .𝘴𝘢𝘷𝘦𝘧𝘪𝘭𝘦 <𝘳𝘶𝘵𝘢/𝘯𝘰𝘮𝘣𝘳𝘦>
│┊➺ 🍃 .𝘶𝘱𝘥𝘢𝘵𝘦
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝘼𝙐𝘿𝙄𝙊𝙎 🔉◂◂
│┊➺ 🌱 .𝘣𝘢𝘴𝘴 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌿 .𝘣𝘭𝘰𝘸𝘯 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🍃 .𝘥𝘦𝘦𝘱 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌸 .𝘦𝘢𝘳𝘳𝘢𝘱𝘦 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌻 .𝘧𝘢𝘴𝘵 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🍂 .𝘧𝘢𝘵 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌱 .𝘯𝘪𝘨𝘩𝘵𝘤𝘰𝘳𝘦 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🍃 .𝘳𝘦𝘷𝘦𝘳𝘴𝘦 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌿 .𝘳𝘰𝘣𝘰𝘵 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌸 .𝘴𝘭𝘰𝘸 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌱 .𝘴𝘮𝘰𝘰𝘵𝘩 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🍂 .𝘵𝘶𝘱𝘢𝘪 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🍃 .𝘳𝘦𝘷𝘦𝘳𝘣 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌿 .𝘤𝘩𝘰𝘳𝘶𝘴 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌻 .𝘧𝘭𝘢𝘯𝘨𝘦𝘳 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🍂 .𝘥𝘪𝘴𝘵𝘰𝘳𝘵𝘪𝘰𝘯 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌱 .𝘱𝘪𝘵𝘤𝘩 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🍃 .𝘩𝘪𝘨𝘩𝘱𝘢𝘴𝘴 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🌸 .𝘭𝘰𝘸𝘱𝘢𝘴𝘴 <𝘮𝘱3/𝘷𝘯>
│┊➺ 🍂 .𝘶𝘯𝘥𝘦𝘳𝘸𝘢𝘵𝘦𝘳 <𝘮𝘱3/𝘷𝘯>
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

▸▸ 𝙊𝙏𝙍𝙊 🌀◂◂
│┊➺ 🌱 .𝘦𝘷𝘢𝘭 <𝘦𝘹𝘱𝘳𝘦𝘴𝘪ó𝘯 𝘮𝘢𝘵𝘦𝘮á𝘵𝘪𝘤𝘢>
│┊➺ 🌿 .𝘧𝘢𝘬𝘦𝘪𝘥 <𝘯𝘰𝘮𝘣𝘳𝘦>
│┊➺ 🌸 .𝘨𝘰𝘰𝘨𝘭𝘦𝘥𝘰𝘰𝘥𝘭𝘦
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙


`.trimStart()
    
    let replace = {
      '%': '%',
      p: _p, uptime,
      name, exp, limit
    }
    
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join('|')})`, 'g'), (_, name) => '' + replace[name])
    
    let pp = './storage/img/miniurl.jpg'
    await conn.sendFile(m.chat, pp, 'thumbnail.jpg', text.trim(), m)
    
  } catch (e) {
    conn.reply(m.chat, 'Lo sentimos, el menú tiene un error.', m)
    throw e
  }
}

handler.help = ['menu']
handler.command = ['menu', 'help', 'menú']
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
