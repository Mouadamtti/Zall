import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) throw '*تــحميل فيــديوهات الإنستغـــرام مثال :*\n\n*.ig* https://www.instagram.com/reel/C0pHwRRNmyT';
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }});
  let kemii = await fetch(`https://aemt.me/download/igdl?url=${text}`);
  try {
    let res = await kemii.json();
    await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
    conn.sendFile(m.chat, res.result[0].url, 'zall.mp4' , m);
  } catch (e) {
    console.log(e);
    await conn.sendMessage(m.chat, { react: { text: "❎", key: m.key } });
    await m.reply(`*❏  Error ❏*`);
  }
};
handler.help = [ "ig" ];
handler.tags = ['downloader'];
handler.command = /^(ig)$/i;

export default handler;
