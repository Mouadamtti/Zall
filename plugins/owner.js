import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 OWNER BOT🤖」*

*Number :*\nwa.me/212630886351


*WhatsApp :*\https://whatsapp.com/channel/0029Vakln6GJ93wbzCYyXd34




`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
