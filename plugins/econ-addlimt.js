let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ tag the user'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Enter the amount of *limt* you want to add'
    if (isNaN(txt)) throw '🔢 only numbers'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Mínimum  *1*'
    let users = global.db.data.users
   users[who].credit += dmt

    await m.reply(`≡ *limt ADDED*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Did you receive \n\n *+${dmt}* limt`, who, m.text)
}

handler.help = ['addlimt <@user>']
handler.tags = ['economy']
handler.command = ['addlimt'] 
handler.rowner = true

export default handler
