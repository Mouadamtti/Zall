import fetch from "node-fetch";

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*التحميل من منصة الإنستغرام يرجى كتابة الامر متبوع برابط الفيديو مثال :*\n\n*${usedPrefix + command}* https://www.instagram.com/reel/C0R-SZmNki_`
  let dann = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=Gatadios&url=${text}`)
  let res = await dann.json()
  conn.sendFile(m.chat, res.result, 'ig.mp4', '*جاري تحميل*\n\n ', m)
}

handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^instagram$/i

export default handler
