let handler = async (m, { conn, text, command, usedPrefix }) => {
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*[β] π΄ππΈπππ΄ππ΄ π° ππ½π° πΏπ΄πππΎπ½π° πΎ ππ΄ππΏπΎπ½π³π° π° ππ½ πΌπ΄π½ππ°πΉπ΄ π³π΄π» πΆπππΏπΎ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return
if (user.warn == 0) throw '*[β] π΄π» ππππ°ππΈπΎ ππΈπ΄π½π΄ 0 π°π³ππ΄πππ΄π½π²πΈπ°π*'  
user.warn -= 1
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `β»οΈ *@${who.split`@`[0]}*`} ππ΄ π»π΄ πππΈππΎ ππ½π° π°π³ππ΄πππ΄π½π²πΈπ° `, `*ADVERTENCIAS:*\nβ οΈ *Antes: ${user.warn + 1}/3*\nβ οΈ *Ahora: ${user.warn}/3*\n\n${wm}`, pp, [['π π»πΈππππ°ππ½ π', '#listwarn']], m, { mentions: [who] })}
handler.command = /^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
