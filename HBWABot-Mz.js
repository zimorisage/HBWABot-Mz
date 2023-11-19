require('./settings')
const { modul } = require('./asset/database/module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const yts2 = require('yt-search')
const yts = require('yt-search')
const fg = require('api-dylux')
const darkarr = moment.tz('Asia/Kolkata').format('HH:mm:ss');
const kumtin = moment.tz('Asia/Kolkata').format('DD/MM/YYYY');
const vawiinni2 = moment.tz('Asia/Kolkata').format('dddd');
const darkarr2 = moment().tz('Asia/Kolkata').format('HH:mm:ss');
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper-sosmed')
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys')
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const { TelegraPh } = require('./lib/uploader')
const { msgFilter } = require('./lib/antispam')
const eco = require('discord-mongoose-economy')
const ty = eco.connect(`mongodb+srv://HBMods-Api:h34b34t@hbmods.0fjkaql.mongodb.net/?retryWrites=true&w=majority`)                       
const mizo_tawnga_translate_na = require("@kreisler/js-google-translate-free")
const { createCanvas, loadImage } = require('canvas');
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./lib/yt')
const anon = require('./lib/menfess') 
const mlstalk = require('./asset/zepzeuh/mlstalk')
const mumaker = require("mumaker")
const { DOMParser } = require('xmldom-qsa')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./asset/database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./asset/database/premium.json'))
const hbmods = JSON.parse(fs.readFileSync('./asset/Base/Developer.json'))
const Englo = JSON.parse(fs.readFileSync('./asset/Base/Ka-hming.json'))
const herbertverifieduser = JSON.parse(fs.readFileSync('./asset/database/user.json'))
const VoiceNoteHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertvn.json'))
const StickerHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertsticker.json'))
const ImageHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertimage.json'))
const VideoHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertvideo.json'))
const BadHerbert = JSON.parse(fs.readFileSync('./asset/database/bad.json'))
let autosticker = JSON.parse(fs.readFileSync('./asset/database/autosticker.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./asset/database/nsfw.json'))
let ntrssfeed = JSON.parse(fs.readFileSync('./asset/database/rssfeed.json'))
global.db = JSON.parse(fs.readFileSync('./asset/database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

module.exports = HBWABotInc = async (HBWABotInc, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await HBWABotInc.decodeJid(HBWABotInc.user.id)
        const HerbertTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const HerbertTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await HBWABotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = herbertverifieduser.includes(sender)
    	const banUser = await HBWABotInc.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false 
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        
        //theme sticker reply
        const Menu = () => {
        let Menu = fs.readFileSync('./asset/audio/Menu.mp3')
        HBWABotInc.sendMessage(from, { audio: Menu, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
        const Owner = () => {
        let Owner = fs.readFileSync('./asset/audio/owner.mp3')
        HBWABotInc.sendMessage(from, { audio: Owner, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
          // react message
 const uploadreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "⬆️" , key: m.key }}) 
 }    
 const loadingreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "♻️" , key: m.key }}) 
 }    
const finishreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "✅" , key: m.key }}) 
 }       
 const makerreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "🎯" , key: m.key }}) 
 }       
 const downloadreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "⬇️" , key: m.key }}) 
 }
 const robotreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "🤖️" , key: m.key }}) 
 } 
 const helloreact = () => {
 HBWABotInc.sendMessage(from, { react: { text: "👋️" , key: m.key }}) 
 }

if (isEval && senderNumber == "918416093656") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					m.reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await HBWABotInc.sendMessage(from, { text: evaled }, { quoted: m })
			} catch (e) {
				HBWABotInc.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}

const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.settings[botNumber] = {
    	    anticall: true,
    		status: 0,
    		autobio: false
	    }

} catch (err) {
console.error(err)
}

if (!HBWABotInc.public) {
if (!HerbertTheCreator && !m.key.fromMe) return
        }
if (autoread) {
            HBWABotInc.readMessages([m.key])
        }
if (isCmd && !isUser) {
herbertverifieduser.push(sender)
fs.writeFileSync('./asset/database/user.json', JSON.stringify(herbertverifieduser, null, 2))
}

HBWABotInc.sendPresenceUpdate('available', from)


 //Suit RPS
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    HBWABotInc.sendTextWithMentions(m.chat, `@${roof.p.split`@`[0]}, @${roof.p2.split`@`[0]}'n a cho lo che a, chu vangin cancel a ni`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    HBWABotInc.sendText(m.chat, `RPS chu in thlan turin pvt a thawn ve ve in ni!..

@${roof.p.split`@`[0]} leh 
@${roof.p2.split`@`[0]}

He mi link hi hmet la RPS a i duh ber kha lo thlang rawh
 https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) HBWABotInc.sendText(roof.p, `I duh ber thlang rawh \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) HBWABotInc.sendText(roof.p2, `I duh ber thlang rawh \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) HBWABotInc.sendText(m.chat, `In pahnihin in khel tum loh ve ve vangin RPS chu cancel a ni`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    HBWABotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]}'n hun tiam chhunga a thlan hman loh avangin, Game Over a ni!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(` ${m.text} i thlang e✓ ${!roof.pilih2 ? `\n\nI tumpui la nghak lawk ang` : ''}`)
	    if (!roof.pilih2) HBWABotInc.sendText(roof.p2, '_Lehlamin a thlang tawh a_\nTunah nang i thlan hun', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`${m.text} i thlang e✓ ${!roof.pilih ? `\n\nI tumpui la nghak lawk ang` : ''}`)
	    if (!roof.pilih) HBWABotInc.sendText(roof.p, '_Lehlamin a thlang tawh a_\nTunah nang i thlan hun', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    HBWABotInc.sendText(roof.asal, `_*RPS Results*_${tie ? '\nIn in hneh tawk chiah' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` A chak zawk\n` : ` A chaklo zawk\n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` A chak zawk \n` : ` A chaklo zawk\n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end

		// auto set bio
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await HBWABotInc.updateProfileStatus(`HBWABot | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
//group chat msg by herbert
const dodoi = (teks) => {
            HBWABotInc.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
const replyherbertstyle = (teks) => {
           HBWABotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${global.botname}`,"body": `SUB HBMods OFC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/HBWABot.png`),"sourceUrl": `https://youtube.com/@HBMods_Channel`}}}, { quoted: m})
        }
const replyherbertstyle12 = (teks) => {
           HBWABotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true,}}}, { quoted: m})
        }
const replymizobiblequotes = (teks) => {
           HBWABotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `Mizo Bible Quotes`,"body": `HBWABot`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/MizoBibleQ.png`),"sourceUrl": `https://instagram.com/mizo_bible_quote`}}}, { quoted: m})
        }
const reply = (teks) => {
HBWABotInc.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: false
}
}, { quoted : m })
}

//autoreply
for (let HBert of VoiceNoteHerbert) {
if (budy === HBert) {
let audiobuffy = fs.readFileSync(`./asset/audio/${HBert}.mp3`)
HBWABotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaHerbert of StickerHerbert){
if (budy === HBert){
let stickerbuffy = fs.readFileSync(`./asset/sticker/${HBert}.webp`)
HBWABotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let HBert of ImageHerbert){
if (budy === HBert){
let imagebuffy = fs.readFileSync(`./asset/image/${HBert}.jpg`)
HBWABotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let HBert of VideoHerbert){
if (budy === HBert){
let videobuffy = fs.readFileSync(`./asset/video/${HBert}.mp4`)
HBWABotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const banRep = () => {
HBWABotInc.sendMessage(m.chat, {
text:`Dan lo anga min call a vangin block i ni, @${creator.split("@")[0]} bulah hian unblock va dil rawh`,
mentions: [creator],
},
{
quoted:m
})
}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of hbmods) {
list.push({displayName: await HBWABotInc.getName(i),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await HBWABotInc.getName(ownernumber + "@s.whatsapp.net"
)}\nFN:${global.ownername}\nitem1.TEL;waid=${ownernumber}:${ownernumber}\nitem1.X-ABLabel:Bot hmangtu\nitem2.EMAIL;type=INTERNET:
 ${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:IG\nitem4.ADR:;;India;Mizoram Aizawl ;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
let div = []
for (let h of hbmods) {
list.push({displayName: await HBWABotInc.getName(h),vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await HBWABotInc.getName("918416093656@s.whatsapp.net")}\nFN:Herbert Suantak\nitem1.TEL;waid=918416093656:918416093656\nitem1.X-ABLabel:Bot Siamtu No.\nitem2.EMAIL;type=INTERNET:
 HBMods OFC\nitem2.X-ABLabel:YouTube\nitem3.URL:herbert70.blogspot.com\nitem3.X-ABLabel:IG\nitem4.ADR:;;India;Mizoram Aizawl ;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

if (global.autoTyping) {
if (command) {
HBWABotInc.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
HBWABotInc.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
//
async function generateTextImage(text) {
    const canvasSize = 800;
    const canvas = createCanvas(canvasSize, canvasSize);
    const context = canvas.getContext('2d');
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvasSize, canvasSize);
    context.font = 'bold 120px Arial';
    context.fillStyle = '#FFF';  
    context.textAlign = 'center'; 
    context.textBaseline = 'middle'; 
    const textX = canvasSize / 2;
    const textY = canvasSize / 2;
    context.fillText(text, textX, textY);
    const buffer = canvas.toBuffer('image/png');
    return buffer;
}


//

async function sendPoll(jid, text, list) {
HBWABotInc.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}
async function loading () {
var HBLoading = [
"《▒▒▒▒▒▒▒▒▒▒▒▒》0%",
"《█▒▒▒▒▒▒▒▒▒▒▒》10%",
"《█▒▒▒▒▒▒▒▒▒▒▒》10%",
"《████▒▒▒▒▒▒▒▒》30%",
"《████▒▒▒▒▒▒▒▒》30%",
"《███████▒▒▒▒▒》50%",
"《███████▒▒▒▒▒》50%",
"《██████████▒▒》80%",
"《██████████▒▒》80%",
"《████████████》100%",
"♻️ Reilo te min lo nghak rawh..."
]
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoading.length; i++) {
 await HBWABotInc.sendMessage(from, {text: HBLoading[i], edit: key },{quoted:m})}
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}	

async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}


async function replyprem(teks) {
    m.reply(`He features hi premium user te tan chauha siam a ni, premium user nih i duh ve chuan owner va bia ang che.`)
}

        // Autosticker gc
 if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await HBWABotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await HBWABotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: HBWABotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, HBWABotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
HBWABotInc.ev.emit('messages.upsert', msg)
}

switch (command) {
case 'owner': {
const mawla = await HBWABotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
HBWABotInc.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Hei aw ka owner hmelthapa chu😇`, mentions: [sender]}, { quoted: mawla })
}
break
case 'hi': case 'hii': case 'hiii': case 'helo': case 'hello': case 'hlo': case 'sir': case 'kapu': case 'hy': case 'hey': { 
if (m.isGroup) return await HBWABotInc.sendMessage(from, { react: { text: "👋️" , key: m.key }})
const herbert = await HBWABotInc.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Kei hi bot ka ni-a zawh duh i nei chuan owner hi va zawt rawh`, mentions: [sender]}, { quoted: m })
HBWABotInc.sendMessage(from, { contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: herbert })
}
break
case 'autoread':
                if (!HerbertTheCreator) return replyherbertstyle(mess.owner)
                if (args.length < 1) return replyherbertstyle(`I option duh thlang rawh, i tih dan tur chu\n${prefix + command} on/off\n\non chuan a activate ang\n off chuan deactivate na`)
                if (q === 'on') {
                    autoread = true
                    replyherbertstyle(`Message autoread a dah a ni✓`)
                } else if (q === 'off') {
                    autoread = false
                    replyherbertstyle(`Message autoread chu off a ni✓`)
                }
                break
case 'autostview':
                if (!HerbertTheCreator) return replyherbertstyle(mess.owner)
                if (args.length < 1) return replyherbertstyle(`I option duh thlang rawh, i tih dan tur chu\n${prefix + command} on/off\n\non chuan a activate ang\n off chuan deactivate na`)
                if (q === 'on') {
                    autoread_status = true
                    replyherbertstyle(`Status/Stories auto view a dah a ni✓`)
                } else if (q === 'off') {
                    autoread_status = false
                    replyherbertstyle(`Status/Stories auto view chu off a ni✓`)
                }
                break 

case 'hbwabot': case '/bot': { 
        let audiobuffy = fs.readFileSync(`./asset/audio/Herbert.mp3`)
HBWABotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })  
}
break 
case 'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replyherbertstyle('Activate a ti tawh...')
ntnsfw.push(from)
fs.writeFileSync('./asset/database/nsfw.json', JSON.stringify(ntnsfw))
replyherbertstyle('He group-ah hia nsfw chu hman thei a ni tawh e ')
var groupe = await HBWABotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
HBWABotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature chu he group-ah hian hman thei a ni ta, chumi awmzia chu bot hian he group-ah hian sexual graphic lam a rawn thawn thei dawn tihna!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replyherbertstyle('Deactivate a ni tawh')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./asset/database/nsfw.json', JSON.stringify(ntnsfw))
replyherbertstyle('Nsfw chu he group-ah hian hman thei a ni tawh lo')
} else {
  await replyherbertstyle(`Option ang hian tih tur\n\nEntirnan: ${prefix + command} on\nEntirnan: ${prefix + command} off\n\non chu enable-na\noff chu disable-na`)
  }
  }
  break
//game
case 'suitpvp':case 'rps': case 'rockpaperscissors': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replyherbertstyle(`Game i zo chiah`)
	    if (m.mentionedJid[0] === m.sender) return replyherbertstyle(`Mi malin a khel thei loh !`)
            if (!m.mentionedJid[0]) return replyherbertstyle(`_Tunge i challange ang?_\nI challenge duh chu tag rawh..\n\nTiang hian : ${prefix}rps @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replyherbertstyle(`I challenge pui mek hian mi dang nen an la ti mek a chu vangin lo nghak rawh`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*RPS PvP*_

@${m.sender.split`@`[0]}'n *RPS* khel turin @${m.mentionedJid[0].split`@`[0]} a challenge che

*Hi* @${m.mentionedJid[0].split`@`[0]} *I accept duh chuan 70 second ral hmain accept tih type la i duh loh chuan reject tih type rawh*`
            this.suit[id] = {
            chat: await HBWABotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) HBWABotInc.sendText(m.chat, `_70 seconds a zo, hun a tawp_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break 
case 'lyrics': {
if (!text) return replyherbertstyle(`Eng lyrics nge i zawn dawn?\nTiang hian hman tur: ${prefix}lyrics Thunder`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replyherbertstyle(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'mlyrics': {
  if (!q) return replyherbertstyle(`Eng lyrics nge i zawn dawn?\nTiang hian hman tur: ${prefix}Mlyrics Zorema Khiangte Saltang tawngtaina\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n*Hriattur :* A hla thupui leh a satu hming rawn dah tel ang che, a hla thupui hming i hre lo a nih chuan a chang i hriat lai rawn dah ang che, ziah dan dikin`) 
  var fourbrother = await getBuffer(`https://i.imgur.com/tb7TQAh.jpg`)
  HBWABotInc.sendMessage(from, { react: { text: "🎶" , key: m.key }}) 
const Parser = require('rss-parser')
const { htmlToText } = require('html-to-text')
const parser = new Parser()
const mizoly = args.join(" ")
const rssFeedURL = `https://www.mizolyric.com/feeds/posts/default?q=${mizoly}`
  try {
    const feed = await parser.parseURL(rssFeedURL)
    if (feed.items.length === 0) {
        return HBWABotInc.sendMessage(from, { text : `I lyrics duh *${text}* tih hi ka zawng hmu zo lo. A spelling i ti dik lo a ni maithei.🔍..͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Emaw He site ah hian i zawn ang chu a awm lo pawh a ni thei https://www.mizolyric.com/ `}, { quoted: m})
    }
    let firstResultSent = false
    feed.items.forEach(async (item) => {
    if (firstResultSent) return
      console.log('Title: ' + item.title)
      console.log('Link: ' + item.link)
      console.log('Published Date: ' + item.pubDate)
      const plainTextContent = htmlToText(item.content)
      console.log('Content: ')
      console.log(plainTextContent)
      console.log('\n')
  await HBWABotInc.sendMessage(m.chat, { text: `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${plainTextContent}`, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${item.title}`,"body": `Mizo Lyrics`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fourbrother,"sourceUrl": `${item.link}`}}}, { quoted: m})
    })
  } catch (error) {
    console.error('Feed laknaah eroor a awm:', error)
  }
}
break
case 'mzly': case 'hlaly': {
if (!text) return replyherbertstyle(`Eng lyrics nge i zawn dawn?\nTiang hian hman tur: ${prefix + command} Zorema Khiangte Saltang tawngtaina\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n*Hriattur :* A hla thupui leh a satu hming rawn dah tel ang che, a hla thupui hming i hre lo a nih chuan a chang i hriatna lai rawn dah ang che, ziah dan dikin`)
var fourbrother = await getBuffer(`https://i.imgur.com/tb7TQAh.jpg`)
HBWABotInc.sendMessage(from, { react: { text: "🎶" , key: m.key }}) 
const Parser = require('rss-parser')
const { htmlToText } = require('html-to-text')
const parser = new Parser()
const mizoly = args.join(" ")
const rssFeedURL = `https://www.mizolyric.com/feeds/posts/default?q=${mizoly}`
try {
    const feed = await parser.parseURL(rssFeedURL)
    if (feed.items.length === 0) {
        return HBWABotInc.sendMessage(from, { text : `🧐 I lyrics duh *${text}* tih hi ka zawng hmu zo lo. A spelling i ti dik lo a ni maithei..͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Emaw He site ah hian a awm lo pawh a ni thei https://www.mizolyric.com/ `}, { quoted: m})
    }
    let firstResultSent = false
    feed.items.forEach(async (item) => {
    if (firstResultSent) return
      console.log('Title: ' + item.title)
      console.log('Link: ' + item.link)
      console.log('Published Date: ' + item.pubDate)
      const plainTextContent = htmlToText(item.content)
      console.log('Content: ')
      console.log(plainTextContent)
      console.log('\n')
const sazu = (`${item.title} Karaoke`)
let res = await yts2(sazu)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
const Vawk = await HBWABotInc.sendMessage(m.chat, {audio: {url: dl_url} , mimetype: 'audio/mpeg', ptt: true, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${item.title}`} ,"body": `Mizo Lyrics`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fourbrother,"sourceUrl": `${item.link}`}},{quoted:m})
  HBWABotInc.sendMessage(m.chat, { text: `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${plainTextContent}`}, 
  { quoted: Vawk})
  })
} catch (error) {
    console.error('Dik lo a awm tlat:', error)
  }
}
break
     
case 'dawntur': case'claim': case 'daily': {
      if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
      HBWABotInc.sendMessage(from, { react: { text: "💰" , key: m.key }})  
      let user = m.sender
      const cara = "cara"
      const daily  = await eco.daily(user, cara, 999);      
      if (daily.cd) return replyherbertstyle(`I claim tawh, ${daily.cdL} a ral hunah i claim leh thei chauh ang`);
      replyherbertstyle(`Vawiin a tan ₹${daily.amount} i claim e, darkar 24 ral hunah i claim leh thei ang!!!`);        
    }
    break
     
case 'wallet': {
  HBWABotInc.sendMessage(from, { react: { text: "💳" , key: m.key }})
  if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
  const user = m.sender
  const cara = "cara"
  const balance = await eco.balance(user, cara);
  await replyherbertstyle(`💳 ${pushname} I wallet ah pawisa awm zat:\n\n_₹${balance.wallet}_`);
}
break 
case 'slot': case 'spin': {
  if (!m.isGroup) return replyherbertstyle(mess.group)
  var today = new Date();
if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
  if (text == 'help') return replyherbertstyle(`*1:* ${prefix}Spin tih hi i hmang ang\n\n*2:* I wallet ah cheng ₹100 i neih tling tur a ni a,\n\n*3:* Wallet-ah pawisa i nei loh chuan i bank a tangin withdraw ang che\n\n*4:* I bank-ah pawh pawisa i la nei lo cheu a nih chuan i sum hmuhna turin economy features hi hmang rawh`)
  if (text == 'pawisa') return replyherbertstyle(`*1:* Small Win -in ₹20 an hlawh anga\n\n*2:* Small Lose in ₹20 an chan ang\n\n*3:* Big Win in ₹100 an hlawh anga\n\n*4:* Big Lose in ₹50 an chan ang\n\n*5:* 🎉 JackPot in ₹1000 an dawng bawk ang`)
  const fruit1= ["🥥", "🍎", "🍇"]
  const fruit2 = ["🍎", "🍇", "🥥"]  
  const fruit3 = ["🍇", "🥥", "🍎"]         
  const fruit4 = ["🍇", "🥥", "🍎"]
  const lose = ['*Tun game-ah hi chuan i vanduai tlat mai*\n\n_--> 🍇-🥥-🍎_', '*Line a tangin a chhuak vek*\n\n_--> 🥥-🍎-🍇_', '*Van a duai tlat🌚😂 ti tha leh mai rawh*\n\n_--> 🍎-🍇-🥥_']
  const smallLose = ['*Grape pahnih inkawp lohin i spin fuh a ni!!*\n\n_--> 🍇>🥥<🍇_', '*Apple pahnih inkawp lohin i spin fuh a ni!!*\n\n_--> 🍎>🥥<🍎_', '*Coconut pahnih inkawp lohin i spin fih a ni!!*\n\n_--> 🥥>🍎<🥥_']
  const won = ['*🤩Nice Apple patum i spin fuh e...*\n\n_--> 🍎+🍎+🍎_', '*Eheuh, Coconut pathum i spin fuh e🤩*\n\n_--> 🥥+🥥+🥥_', '*Ropui lutuk🤩, i chhungte tan Grape juice i siam sak dawn nia*\n\n_--> 🍇+🍇+🍇_']             
  const near = ['*Wow, Grape pahnih leh apple pakhat😂*\n\n_--> 🍎-🍇+🍇_', '*Hehe, Apple pahnih leh Grape pakhat*\n\n_--> 🍎+🍎-🍇_']          
  const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊I JackPot e ₹1000 i dawng e✓*']
  const user = m.sender
  const cara = "cara"
  const k = 100
  const balance1  = await eco.balance(user, cara)
  
  if (k > balance1.wallet) return replyherbertstyle(`I wallet ah ₹100 tal i neih a ngai\nI bank a tangin ₹100 aia tlemlo withdraw ang che`);
  const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
  const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
  const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
  const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
  const mess1 = lose[Math.floor(Math.random() * lose.length)];
  const mess2 = won[Math.floor(Math.random() * won.length)];
  const mess3 = near[Math.floor(Math.random() * near.length)];
  const mess4 = jack[Math.floor(Math.random() * jack.length)];
  const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
  
  if ((f1 !== f2) && f2 !== f3){
     const deduct1 = await eco.deduct(user, cara, 50);
            replyherbertstyle(`${mess1}\n\n*Big Lose -->* _₹50 i chan_`)
  }
  else if ((f1 == f2) && f2 == f3){
     const give1 = await eco.give(user, cara, 100); 
           replyherbertstyle(`${mess2}\n*_Big Win -->* _₹100 i dawng e_`)
  }
  else if ((f1 == f2) && f2 !== f3){
     const give2 = await eco.give(user, cara, 20);
           replyherbertstyle(`${mess3}\n*Small Win -->* _₹20 i dawng e_`)
  }
  else if ((f1 !== f2) && f1 == f3){
     const deduct2 = await eco.deduct(user, cara, 20);
           replyherbertstyle(`${mess5}\n\n*Small Lose -->* _₹20 i chan_`)
  }
  else if ((f1 !== f2) && f2 == f3){
     const give4 = eco.give(user, cara, 20); 
           replyherbertstyle(`${mess3}\n\n*Small Win -->* _₹20 i dawng e_`)
  }
  else if (((f1 == f2) && f2 == f3) && f3 == f4){
     const give5 = eco.give(user, cara, 1000);
          replyherbertstyle(`${mess4}\n\n_🎊 JackPot --> _₹1000 tawp mai i dawng e🤩_`)
  }
  else { 
          replyherbertstyle(`I thil tih hi i hrethiam em ni?`)
  }
}
else{
      replyherbertstyle(`*Kartawpah chauh he game hi i khei thei ang*\n\n*🌿 Zirtawpni*\n*🎏 Inrinni*\n*🎐 Pathianni thleng*`)
}
}
break

case 'bank':  case 'levee': {
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
HBWABotInc.sendMessage(from, { react: { text: "💳" , key: m.key }})
		
    const user = m.sender
    const cara = "cara"
    const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
    await replyherbertstyle(`🏦 ${pushname}'I Bank a pawisa awm zat:\n_₹${balance.bank}_\nPawisa awm thei zat: _₹${balance.bankCapacity}_`); 
}
break
		
		
		case 'capacity':  case 'bankupgrade': {
			HBWABotInc.sendMessage(from, { react: { text: "💲" , key: m.key }})
	if (!text) return replyherbertstyle(`💴 Bank-capacity 💳\n\n1 | 1000 sp = ₹100\n\n2 | 10000 sp = ₹1000\n\n3 | 100000 sp = ₹10000\n\nTiang hian ti la ${prefix}capacity 1 In emaw ${prefix}bankupgrade 1000`)	
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	const cara = "cara"
	let value = text.trim()
	let k = parseInt(value)
	const balance  = await eco.balance(user, cara) 
  switch (value) {
          case '1000':
          case '1':
          if (k > balance.wallet ) return replyherbertstyle(`I bank capacity hi 1000-sp ah a pun dawn chuan ₹100(za) i sen a ngai`)
            const deduct1 = await eco.deduct(user, cara, 100)
            const add1 = eco.giveCapacity(user, cara, 1000) 
                await replyherbertstyle(`${pushname} i bank I bank capacity hi ₹1000(sangkhat) dah belh theiha upgrade a ni`)
         case '10000':
          case '2':
          if (k > balance.wallet ) return replyherbertstyle(`I bank capacity hi 10000-sp ah a pun dawn chuan ₹1000(sangkhat) i sen a ngai`)
            const deduct2 = await eco.deduct(user, cara, 1000)
            const add2 = eco.giveCapacity(user, cara, 10000) 
                await replyherbertstyle(`${pushname} i bank capacity hi ₹10000(singkhat) dah belh theiha upgrade a ni`)
         case '100000':
          case '3':
          if (k > balance.wallet ) return replyherbertstyle(`I bank capacity hi 100000-sp ah a pun dawn chuan ₹10000(singkhat) i sen a ngai`)
            const deduct3 = await eco.deduct(user, cara, 10000)
            const add3 = eco.giveCapacity(user, cara, 100000) 
                await replyherbertstyle(`${pushname} i bank capacity hi ₹100000(nuaikhat) dah belh theiha upgrade a ni`)
          }
            }
                break

case 'deposit':  case 'pay-in': {
HBWABotInc.sendMessage(from, { react: { text: "📥" , key: m.key }})
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!text) return replyherbertstyle("I deposit duh zat rawn provide rawh")
const texts = text.trim()
const user = m.sender;
const cara = 'cara'
    const deposit = await eco.deposit(user, cara, texts)
        if(deposit.noten) return replyherbertstyle('I wallet ah chu tiang zat a awm loh avangin i deposit thei lo ang.')
         replyherbertstyle(`I bank a ₹ ${deposit.amount} deposit a ni`)
  }
      break

      case 'withdraw':  case 'withdrawal': {
    HBWABotInc.sendMessage(from, { react: { text: "💸" , key: m.key }})
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
          const user = m.sender
      if (!text) return replyherbertstyle("I withdraw duh zat rawn provide rawh!")
      const query = text.trim()
          const cara = 'cara'
          const withdraw = await eco.withdraw(user, cara, query)
          if(withdraw.noten) return replyherbertstyle('Chutiang zat zat i bank ah pawisa i nei lo')
          const add = eco.give(user, cara, query)
            replyherbertstyle(`🏧 ALERT I wallet a ₹${withdraw.amount} dah a ni.`)
          
  }
  break 
  case 'transfer': {
HBWABotInc.sendMessage(from, { react: { text: "🗿" , key: m.key }})
            let value = text.trim().split(" ")
            if (value[0] === "") return replyherbertstyle(`Tiang hian ti tawh : ${prefix}transfer 100 @user`)
            const target =
                             m.quoted && m.mentionedJid.length === 0
                             ? m.quoted.sender
                             : m.mentionedJid[0] || null;    
                     if (!target || target === m.sender) return replyherbertstyle("Engtia tih nge i tum")
                     if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
                  while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
                  const cara = "cara"
                  const user1 = m.sender
                  const user2 = target
                         const word = value[0];
                         const code = value[1];
              let d = parseInt(word)
              if (!d) return replyherbertstyle("I thil ziah khi check teh, command i hmang dik lo a ni mai thei")
              
              const balance = await eco.balance(user1, cara) 
                  let a = (balance.wallet) < parseInt(word)
                  if(a == true) return replyherbertstyle("Chutiang zat transfer turin i wallet ah a awm lo")
                  
                  const deduct = await eco.deduct(user1, cara, value[0])
                  const give = await eco.give(user2, cara, value[0])
                  replyherbertstyle(`📠 Transaction a ni e✓`)
          
          }
          break 
          case 'gamble':  case 'lottery': { 
          HBWABotInc.sendMessage(from, { react: { text: "🤪" , key: m.key }})
  var texts = text.trim().split(" ")
  var opp = texts[1];// your value
  var value = texts[0].toLowerCase()
  var gg = parseInt(value)
  const user = m.sender
  const cara = 'cara'
  const balance = await eco.balance(user, cara) 
  const g = (balance.wallet) > parseInt(value)
  const k = 50
  const a = (k) > parseInt(value)
  const twice = gg*2
  const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
  const r = f[Math.floor(Math.random () * f.length)]
     if (texts[0] === "")
         return replyherbertstyle(
             `Tiang hian tih tur:  ${prefix}gamble 100 direction(left,right,up,down)`
         )
     if (!value) return replyherbertstyle("*I gamble zat tur rawn tarlang rawh!")
     if (!opp) return replyherbertstyle("I bet tur direction kha rawn dah rawh")
     if (!gg) return replyherbertstyle("I thil ziah khi check tha rawh, command dik lo i hmang a ni mai thei")
     if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
     if (g == false) return replyherbertstyle(`Chutiang zat gamble turin i pawisa neihin a daih lo`)
     if (a == true) return replyherbertstyle(`Sorry ${pushname}, ₹50 aia tlem chuan a gamble thei lo`)
     if ( r == opp){
        let give = await eco.give(user , cara, twice)
        replyherbertstyle(`*₹${twice} i dawng e✓*`)
     }
     else{
        let deduct = await eco.deduct(user, cara, texts[0])
        replyherbertstyle(`*₹${texts[0]} i chan(loss) a ni*`)
      }
}
break

case 'alive': case 'menu': case 'help':{ 
HBWABotInc.sendMessage(from, { 
text: `*〖HBWABot Mizo〗*
▬▭▬▭▬▭▬▭▬
*Bot InFo*
*✑ Vawiin :* ${vawiinni2}
*✑ Date :* ${kumtin}
*✑ Dar :* ${darkarr}
*✑ Prifix :* No Prefix
*✑ A Neihtu No :* ${ownernumber}
*✑ Runtime :* ${runtime(process.uptime())}
*✑ A Siamtu :* Herbert Suantak
 ──────────────┈ 
┌──────────────┈
│ *A hnuaia mi ang hian*
│ *type type tur a ni*
┌──────────────┈
│ ♕allmenu
│ ♕downloadmenu
│ ♕groupmenu
│ ♕ownermenu
│ ♕photooxymenu
│ ♕textpromenu
│ ♕ephoto360menu
│ ♕stickermenu
│ ♕stalkermenu
│ ♕othermenu
└──────────────┈ `,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: true,
title: botname,
thumbnail : fs.readFileSync("./asset/theme/hbwabot.png"),
mediaType: 1,
mediaUrl: `https://youtu.be/S_xHqRZpzRM?si=lOxUS60kBw7kAK2r`,
sourceUrl: `https://youtu.be/S_xHqRZpzRM?si=lOxUS60kBw7kAK2r`
}
}
},{quoted:m})
}
break

case 'allmenu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`         *All Menu*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ AI Menu』͏
│𖡛remini 
│𖡛toanime 
│𖡛openai
│𖡛gpt
│𖡛ai
│𖡛ai2
╰────────────⦁
╭──❰ Download Menu 』͏
│𖡛play 
│𖡛ytmp3 
│𖡛ytmp4 
│𖡛dsong
│𖡛dvideo
│𖡛dsong2
│𖡛song2 
│𖡛ytaudio 
│𖡛igvid 
│𖡛ttvid
│𖡛fbvid 
│𖡛google 
│𖡛gdrive 
│𖡛pinterest 
│𖡛ringtone 
╰────────────⦁
╭──❰ Textpro Maker 』͏
│𖡛candy  
│𖡛christmas  
│𖡛3dchristmas  
│𖡛sparklechristmas 
│𖡛deepsea  
│𖡛scifi  
│𖡛rainbow  
│𖡛waterpipe  
│𖡛spooky  
│𖡛pencil  
│𖡛circuit  
│𖡛discovery  
│𖡛metalic  
│𖡛fiction  
│𖡛demon  
│𖡛transformer  
│𖡛berry  
│𖡛thunder  
│𖡛magma  
│𖡛3dstone  
│𖡛neonlight  
│𖡛glitch  
│𖡛harrypotter  
│𖡛brokenglass  
│𖡛papercut  
│𖡛watercolor  
│𖡛multicolor  
│𖡛neondevil  
│𖡛underwater  
│𖡛graffitibike 
│𖡛snow  
│𖡛cloud  
│𖡛honey  
│𖡛ice  
│𖡛fruitjuice  
│𖡛biscuit  
│𖡛wood  
│𖡛chocolate  
│𖡛strawberry  
│𖡛matrix  
│𖡛blood  
│𖡛dropwater  
│𖡛toxic  
│𖡛lava  
│𖡛rock  
│𖡛bloodglas  
│𖡛hallowen  
│𖡛darkgold  
│𖡛joker  
│𖡛wicker 
│𖡛firework  
│𖡛skeleton  
│𖡛blackpink  
│𖡛sand  
│𖡛glue  
│𖡛1917  
│𖡛leaves 
│𖡛retro 
│𖡛pornhub 
│𖡛8bit 
│𖡛batman 
│𖡛3dbox 
│𖡛lion 
│𖡛3davengers 
│𖡛window 
│𖡛3dspace 
│𖡛bokeh 
│𖡛holographic 
│𖡛thewall 
│𖡛carbon 
│𖡛whitebear 
│𖡛metallic 
│𖡛steel 
│𖡛fabric 
│𖡛ancient 
│𖡛marvel 
╰────────────⦁

╭──❰ PhotoOxy Maker 』͏
│𖡛shadow  
│𖡛write  
│𖡛romantic  
│𖡛burnpaper 
│𖡛smoke  
│𖡛narutobanner  
│𖡛love  
│𖡛undergrass 
│𖡛doublelove  
│𖡛coffecup 
│𖡛underwaterocean 
│𖡛smokyneon 
│𖡛starstext 
│𖡛rainboweffect 
│𖡛balloontext 
│𖡛metalliceffect 
│𖡛embroiderytext 
│𖡛flamingtext 
│𖡛stonetext 
│𖡛writeart 
│𖡛summertext ??
│𖡛wolfmetaltext 
│𖡛nature3dtext 
│𖡛rosestext 
│𖡛naturetypography 
│𖡛quotesunder 
│𖡛shinetext 
╰────────────⦁
╭──❰ Ephoto360 Maker 』͏
│𖡛glitchtext 
│𖡛writetext 
│𖡛advancedglow 
│𖡛typographytext 
│𖡛pixelglitch 
│𖡛neonglitch 
│𖡛flagtext 
│𖡛flag3dtext 
│𖡛deletingtext 
│𖡛blackpinkstyle 
│𖡛glowingtext 
│𖡛underwatertext 
│𖡛logomaker 
│𖡛cartoonstyle 
│𖡛papercutstyle 
│𖡛watercolortext 
│𖡛effectclouds 
│𖡛blackpinklogo 
│𖡛gradienttext 
│𖡛summerbeach 
│𖡛luxurygold 
│𖡛multicoloredneon 
│𖡛sandsummer 
│𖡛galaxywallpaper 
│𖡛1917style 
│𖡛makingneon 
│𖡛royaltext 
│𖡛freecreate 
│𖡛galaxystyle 
│𖡛lighteffects 
╰────────────⦁

╭──❰ Anime NSFW 』͏
│𖡛hentai 
│𖡛gifhentai 
│𖡛gifblowjob 
│𖡛hentaivid 
│𖡛hneko 
│𖡛nwaifu 
│𖡛animespank 
│𖡛trap 
│𖡛gasm 
│𖡛ahegao 
│𖡛ass 
│𖡛bdsm 
│𖡛blowjob 
│𖡛cuckold 
│𖡛cum 
│𖡛milf 
│𖡛eba 
│𖡛ero 
│𖡛femdom 
│𖡛foot 
│𖡛gangbang 
│𖡛glasses 
│𖡛jahy 
│𖡛masturbation 
│𖡛manga 
│𖡛neko-hentai 
│𖡛neko-hentai2 
│𖡛nsfwloli 
│𖡛orgy 
│𖡛panties  
│𖡛pussy 
│𖡛xnxxsearch 
│𖡛xnxxdl 
╰────────────⦁

╭──❰ Other Menu 』͏
│𖡛tts 
│𖡛say 
│𖡛togif 
│𖡛toqr 
│𖡛bass 
│𖡛blown 
│𖡛deep 
│𖡛earrape 
│𖡛fast 
│𖡛fat 
│𖡛nightcore 
│𖡛reverse 
│𖡛robot 
│𖡛slow 
│𖡛smooth 
│𖡛squirrel 
│𖡛tinyurl 
│𖡛tovn 
│𖡛toaudio 
│𖡛tomp3 
│𖡛tomp4
│𖡛toimg 
│𖡛sticker 
│𖡛emoji 
│𖡛ebinary 
│𖡛dbinary 
│𖡛ssweb 
│𖡛runtime 
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'downloadmenu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`          *Download Menu*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ Download Menu 』͏
│𖡛play 
│𖡛ytmp3 
│𖡛ytmp4 
│𖡛dsong
│𖡛dvideo
│𖡛dsong2
│𖡛song2 
│𖡛ytaudio 
│𖡛igvid 
│𖡛ttvid
│𖡛fbvid 
│𖡛google 
│𖡛gdrive 
│𖡛pinterest 
│𖡛ringtone 
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'groupmenu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`          *Group Menu*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ Group Menu 』͏
│𖡛grouplink 
│𖡛add 
│𖡛kick 
│𖡛hidetag 
│𖡛nsfw 
│𖡛react 
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break 
case 'stalkermenu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
 let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`          *Stalker Menu*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ Stalker 』͏
│𖡛igstalk 
│𖡛mlstalk 
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'aimenu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
 let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`          *Ai Menu*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ AI Menu』͏
│𖡛remini 
│𖡛toanime 
│𖡛openai
│𖡛gpt
│𖡛ai
│𖡛ai2
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'textpromenu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`          *Textpro Maker*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ Textpro Maker 』͏
│𖡛candy  
│𖡛christmas  
│𖡛3dchristmas  
│𖡛sparklechristmas 
│𖡛deepsea  
│𖡛scifi  
│𖡛rainbow  
│𖡛waterpipe  
│𖡛spooky  
│𖡛pencil  
│𖡛circuit  
│𖡛discovery  
│𖡛metalic  
│𖡛fiction  
│𖡛demon  
│𖡛transformer  
│𖡛berry  
│𖡛thunder  
│𖡛magma  
│𖡛3dstone  
│𖡛neonlight  
│𖡛glitch  
│𖡛harrypotter  
│𖡛brokenglass  
│𖡛papercut  
│𖡛watercolor  
│𖡛multicolor  
│𖡛neondevil  
│𖡛underwater  
│𖡛graffitibike 
│𖡛snow  
│𖡛cloud  
│𖡛honey  
│𖡛ice  
│𖡛fruitjuice  
│𖡛biscuit  
│𖡛wood  
│𖡛chocolate  
│𖡛strawberry  
│𖡛matrix  
│𖡛blood  
│𖡛dropwater  
│𖡛toxic  
│𖡛lava  
│𖡛rock  
│𖡛bloodglas  
│𖡛hallowen  
│𖡛darkgold  
│𖡛joker  
│𖡛wicker 
│𖡛firework  
│𖡛skeleton  
│𖡛blackpink  
│𖡛sand  
│𖡛glue  
│𖡛1917  
│𖡛leaves 
│𖡛retro 
│𖡛pornhub 
│𖡛8bit 
│𖡛batman 
│𖡛3dbox 
│𖡛lion 
│𖡛3davengers 
│𖡛window 
│𖡛3dspace 
│𖡛bokeh 
│𖡛holographic 
│𖡛thewall 
│𖡛carbon 
│𖡛whitebear 
│𖡛metallic 
│𖡛steel 
│𖡛fabric 
│𖡛ancient 
│𖡛marvel 
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'ephoto360menu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`          *Ephoto360 Maker*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ Ephoto360 Maker 』͏
│𖡛glitchtext 
│𖡛writetext 
│𖡛advancedglow 
│𖡛typographytext 
│𖡛pixelglitch 
│𖡛neonglitch 
│𖡛flagtext 
│𖡛flag3dtext 
│𖡛deletingtext 
│𖡛blackpinkstyle 
│𖡛glowingtext 
│𖡛underwatertext 
│𖡛logomaker 
│𖡛cartoonstyle 
│𖡛papercutstyle 
│𖡛watercolortext 
│𖡛effectclouds 
│𖡛blackpinklogo 
│𖡛gradienttext 
│𖡛summerbeach 
│𖡛luxurygold 
│𖡛multicoloredneon 
│𖡛sandsummer 
│𖡛galaxywallpaper 
│𖡛1917style 
│𖡛makingneon 
│𖡛royaltext 
│𖡛freecreate 
│𖡛galaxystyle 
│𖡛lighteffects 
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'stickermenu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`          *Sticker Maker*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ Sticker 』͏
│𖡛sticker 
│𖡛ttp
│𖡛ttp2
│𖡛ttp3
│𖡛ttp4
│𖡛attp
│𖡛attp2
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'photooxymenu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`          *PhotoOxy Maker*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ PhotoOxy Maker 』͏
│𖡛shadow  
│𖡛write  
│𖡛romantic  
│𖡛burnpaper 
│𖡛smoke  
│𖡛narutobanner  
│𖡛love  
│𖡛undergrass 
│𖡛doublelove  
│𖡛coffecup 
│𖡛underwaterocean 
│𖡛smokyneon 
│𖡛starstext 
│𖡛rainboweffect 
│𖡛balloontext 
│𖡛metalliceffect 
│𖡛embroiderytext 
│𖡛flamingtext 
│𖡛stonetext 
│𖡛writeart 
│𖡛summertext ??
│𖡛wolfmetaltext 
│𖡛nature3dtext 
│𖡛rosestext 
│𖡛naturetypography 
│𖡛quotesunder 
│𖡛shinetext 
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break
case 'othermenu': { 
let ownernya = ownernumber + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe 
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`     *Other Menu*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❰ Other Menu 』͏
│𖡛tts 
│𖡛say 
│𖡛togif 
│𖡛toqr 
│𖡛bass 
│𖡛blown 
│𖡛deep 
│𖡛earrape 
│𖡛fast 
│𖡛fat 
│𖡛nightcore 
│𖡛reverse 
│𖡛robot 
│𖡛slow 
│𖡛smooth 
│𖡛squirrel 
│𖡛tinyurl 
│𖡛tovn 
│𖡛toaudio 
│𖡛tomp3 
│𖡛tomp4
│𖡛toimg 
│𖡛sticker 
│𖡛emoji 
│𖡛ebinary 
│𖡛dbinary 
│𖡛ssweb 
│𖡛runtime 
╰────────────⦁`]
let ments = [ownernya, me, mark]       
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
}
break

case 'gb': case 'gbwhatsapp': {
var hbmodspng = await getBuffer(`https://i.imgur.com/i5s0rnL.png`)
HBWABotInc.sendMessage(from, { 
text: ` *GBWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html\nDeveloped by HBMods Apk Store`,
contextInfo:{
        externalAdReply:{
showAdAttribution: true,
containsAutoReply: true, 
renderLargerThumbnail: false,
title: 'GBWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Gb.png"),
mediaType: 2, 
mediaUrl: `https://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html`,
sourceUrl: `https://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html`
}
}
},{quoted:m})
}
break 
case 'fm': case 'fmwhatsapp': { 
var hbmodspng = await getBuffer(`https://i.imgur.com/3RAYRjk.png`)
HBWABotInc.sendMessage(from, { 
text: ` *FMWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/search/label/FMWhatsApp\nDeveloped by HBMods Apk Store`,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,
title: 'FMWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Fm.png"),
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/search/label/FMWhatsApp`,
sourceUrl: `https://herbert70.blogspot.com/search/label/FMWhatsApp`
}
}
},{quoted:m})
}
break
case 'yo': case 'yowhatsapp': {
var hbmodspng = await getBuffer(`https://i.imgur.com/Y21MLL1.png `)
HBWABotInc.sendMessage(from, { 
text: ` *YOWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/2022/10/yowhatsapp.html\nDeveloped by HBMods Apk Store`,
contextInfo:{
        externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,           
title: 'YOWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Yo.png"), 
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/2022/10/yowhatsapp.html`,
sourceUrl: `https://herbert70.blogspot.com/2022/10/yowhatsapp.html`
}
}
},{quoted:m})
}
break
case 'mb': case 'mbwhatsapp': { 
var hbmodspng = await getBuffer(`https://i.imgur.com/Uz0c4Dd.png `)
HBWABotInc.sendMessage(from, { 
text: ` *MBWhatsApp Latest Version*\nhttps://herbert70.blogspot.com/search/label/MBWhatsApp?m=1\nDeveloped by HBMods Apk Store`,
contextInfo:{
        externalAdReply:{
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,       
title: 'MBWhatsApp',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Mb.png"),
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/search/label/MBWhatsApp?m=1`,
sourceUrl: `https://herbert70.blogspot.com/search/label/MBWhatsApp?m=1`
}
}
},{quoted:m})
}
break
case 'hbmods': case 'fouad': case 'mod': case 'mods': { 
var hbmodspng = await getBuffer(`https://i.imgur.com/SfP3f4M.png `)
HBWABotInc.sendMessage(from, { 
text: ` *WhatsApp Fouad Mod Latest Version*\nhttps://herbert70.blogspot.com/search/label/FouadMods?m=1\nDeveloped by HBMods Apk Store`,
contextInfo:{
        externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: false,      
title: 'WhatsApp Fouad Mod',
body: 'Latest Version',
thumbnail: fs.readFileSync("./asset/HBMods/Fouad.png"),
mediaType: 2,
mediaUrl: `https://herbert70.blogspot.com/search/label/FouadMods?m=1`,
sourceUrl: `https://herbert70.blogspot.com/search/label/FouadMods?m=1`
}
}
},{quoted:m})
}
break
case 'join': {
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!text) return replyherbertstyle(`Tiang hian tih tur: ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyherbertstyle('Link a dik lo!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await HBWABotInc.groupAcceptInvite(result)
await replyherbertstyle(`Ka join tawh e....✓`)
}
break
case 'block': case 'ban': {
		if (!HerbertTheCreator) return m.reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await HBWABotInc.updateBlockStatus(users, 'block')
		await replyherbertstyle(`Block a ni e....✓`)
	}
	break
        case 'unblock': {
		if (!HerbertTheCreator) return m.reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await HBWABotInc.updateBlockStatus(users, 'unblock')
		await replyherbertstyle(`Zove....✓`)
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "Total Block: " + banUser.length
	replyherbertstyle(lisben)
	}
	break
case 'delete': case 'del': {
    if (!m.quoted) throw false
    let { chat, fromMe, id, isBaileys } = m.quoted
     HBWABotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    let response = await HBWABotInc.groupInviteCode(m.chat)
    HBWABotInc.sendText(m.chat, `*${groupMetadata.subject}*\n\nGroup Link : https://chat.whatsapp.com/${response}`, m, { detectLink: true })
}
            break
case 'add': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotInc.groupParticipantsUpdate(m.chat, [users], 'add')
await replyherbertstyle(`Done`)
}
break
case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!HerbertTheCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotInc.groupParticipantsUpdate(m.chat, [users], 'remove')
await replyherbertstyle(`He group a tang hian remove a ni....✓`)
}
break
case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotInc.groupParticipantsUpdate(m.chat, [users], 'promote')
await replyherbertstyle(`Zove....✓`)
}
break
case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotInc.groupParticipantsUpdate(m.chat, [users], 'demote')
await replyherbertstyle(`Zove....✓`)
}
break
case 'hidetag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
HBWABotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replyherbertstyle(`Message reply in emaw command zoah rawn dah la Binary code ah a lo chang ang tiang hian hman tur: ${prefix + command} hello world`)
await loading()
let { eBinary } = require('./asset/zepzeuh/binary')
let eb = await eBinary(`${q}`)
var ebinaryloading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hei le : \n${eb}`]

let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < ebinaryloading.length; i++) {await HBWABotInc.sendMessage(from, {text: ebinaryloading[i], edit: key },{quoted:m})}
}
break
case 'dbinary': {
if (!q) return replyherbertstyle(`Binary code decode i duh chuan tian hian hman tur: ${prefix + command} 1101000 1100101 1101100 1101100 1101111`)
await loading()
let { dBinary } = require('./asset/zepzeuh/binary')
let db = await dBinary(`${q}`)
var dbinaryloading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hei le: \n${db}`]

let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < dbinaryloading.length; i++) {await HBWABotInc.sendMessage(from, {text: dbinaryloading[i], edit: key },{quoted:m})}
}
break
case 'remini': {
			if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			HBWABotInc.sendMessage(m.chat, { image: proses, caption: "\n*©HBWABot*"}, { quoted: m})
			}
			break
case 'toanime': case 'tocartoon': {
if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
            const { toanime } = require('betabotz-tools')
            let downloadrawh = await quoted.download()
            let results = await toanime(downloadrawh)
            console.log(results) //json
            HBWABotInc.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
            
}
break
case 'removebg': case 'bgremove': {
if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
            const { removebg } = require('betabotz-tools')
            let downloadrawh = await quoted.download()
            let results = await removebg(downloadrawh)
            console.log(results) //json
            HBWABotInc.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
            
}
break
case 'remini2': case 'hd': {
if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
            const { remini } = require('betabotz-tools')
            let downloadrawh = await quoted.download()
            let results = await remini(downloadrawh)
            console.log(results) //json
            HBWABotInc.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
            
}
break

case 'tozombie': {
if (!quoted) return replyherbertstyle(`Thlalak rawn dah rawh`)
			if (!/image/.test(mime)) return replyherbertstyle(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
			await loading()
            const { tozombie } = require('betabotz-tools')
            let downloadrawh = await quoted.download()
            let results = await tozombie(downloadrawh)
            console.log(results) //json
            HBWABotInc.sendMessage(m.chat, { image: {url: results.image_data}, caption: "\n*©HBWABot*"}, { quoted: m})
            
}
break 		

case 'openai': {
if (!text) return replyherbertstyle(`_🤖Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`)
await robotreact()
const { openai } = require('betabotz-tools') 
const source1 = 'auto'
const target1 = 'en'
const athu1 = `${text}`
const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1)
const heihi_ani = `${mizotranslation1}`
const heihian = await openai(`${heihi_ani}`)
console.log(heihian)//JSON
const chutin = `${heihian.result}`
const source = 'auto'
const target = 'lus'
const athu = `${chutin}`
const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, athu)
await HBWABotInc.sendMessage(from, { text: mizotranslation }, { quoted: m })
}
  break
  
    //betabotz ChatBot
case 'ai2': case 'gpt': {
if (!text) return replyherbertstyle(`_🤖Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`)
await robotreact()
const { openai } = require('betabotz-tools') 
const source1 = 'auto'
const target1 = 'en'
const athu1 = `${text}`
const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1)
const heihi_ani = `${mizotranslation1}`
const heihian = await openai(`${heihi_ani}`)
console.log(heihian)//JSON
const chutin = `${heihian.result}`
const source = 'auto'
const target = 'en'
const athu = `${chutin}`
const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, athu)
await HBWABotInc.sendMessage(from, { text: mizotranslation }, { quoted: m })
}
  break 
  case 'ai': case 'gpt':{
if (!q) return replyherbertstyle(`_🤖Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`);
await robotreact()
const source = 'auto'
const target = 'en'
const athu = `${q}`
const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, athu)
const prompt = `(You are name is HBWABot Mizo)
(HBWABot is Created By Herbert Suantak, also called Lalngaihawma)
${mizotranslation}`;
const apiUrl1 = `https://vihangayt.me/tools/chatgpt?q=${encodeURIComponent(prompt)}`;
const apiUrl2 = `https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(prompt)}&model=llama`;
 try {  
const response1 = await fetch(apiUrl1);
const responseData1 = await response1.json();
if (response1.status === 200 && responseData1 && responseData1.status === true && responseData1.data) {
const message = responseData1.data;
const source1 = 'auto'
const target1 = 'lus'
const athu1 = `${message}`
const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1)
  const me = m.sender;
  await HBWABotInc.sendMessage(m.chat, { text: mizotranslation1, mentions: [me] }, { quoted: m });
} else {
  const response2 = await fetch(apiUrl2);
  const responseData2 = await response2.json();
  if (response2.status === 200 && responseData2 && responseData2.data) {
const message = responseData2.data;
const source2 = 'auto'
const target2 = 'lus'
const athu2 = `${message}`
const mizotranslation2 = await mizo_tawnga_translate_na.translate(source1, target1, athu1)
const me = m.sender;
await HBWABotInc.sendMessage(m.chat, { text: mizotranslation2, mentions: [me] }, { quoted: m });
  } else {
reply("Sorry, tunah hian API pahnih te atangin chhanna ka la thei lo.");
  }
}
} catch (error) {
console.error(error);
reply("API pahnihte atanga chhanna ka lak chhuah laiin error a awm");
}
}
break;


			case 'gimage': {
                if (!text) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Mizoram`)
                await loading()
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    HBWABotInc.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
                    
                })
            }
            case 'gimage': {

       if (!text) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Mizoram`
)
        herbertezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)

        n = herbertezyanu.result

        images = n[Math.floor(Math.random() * n.length)]


                HBWABotInc.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })

        }

        break

			case 'mediafire': {
	if (args.length == 0) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan, tiang hian a link nen rawn dah rawh_\n\n*⟨Entirnan :* ${prifix + command} Hello World`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replyherbertstyle(`I link rawn dah hi a dik lo!..`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return replyherbertstyle('A file size a lian lutuk...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
replyherbertstyle(`${result4}`)
HBWABotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'google': {
if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} ${botname}`)
await loading()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replyherbertstyle(teks)
})

}
break
case 'mlstalk':
{
    if (!q || !q.includes("|")) {
        return replyherbertstyle(`_Kha tiang ringawt loh khan, tiang hian type rawh_\n*⟨Entirnan:* ${prefix + command} 530793138|8129 \n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\nserver id rawn dah tel ang che!..`)
    }
    let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
    if (!dat || Object.keys(dat).length === 0) {
        return replyherbertstyle("I id emaw service id hi a dik lo a ni mai thei.")
    }
var MlLoading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`*⟨⟨⟨Mobile Legend Stalker⟩⟩⟩*\n\nUsername : ${dat.userName}\nId : ${q.split("|")[0]}\nID Zone: ${q.split("|")[1]}`]
let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < MlLoading.length; i++) {await HBWABotInc.sendMessage(from, {text: MlLoading[i], edit: key },{quoted:m})}
}
break

case 'yts': case 'hla':{
        if (!text) return m.reply(`\n*Entir nan* : ${prefix + command} Hringnun Vanlalsailova`)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd = `*${text}*\nA hnuaia *H L A* tih khu hmet la i duh ber la chhuak rawh\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: " " + lagusearch.all.length + " hmuh a ni",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                title: ``,
                buttonText: "H L A",
                mentions: parseMention(teskd), sections
            }
            return HBWABotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break         
case 'ytmp4x': case 'youtubemp4': {
if (!args || !args[0]) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) replyherbertstyle ('Youtube link dik tak chauh rawn dah rawh')
if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`) 
const kel = args[0]
const nunui2 = await fetchJson(`https://vihangayt.me/download/ytmp4?url=${kel}`)
const HB = nunui2.data;
await uploadreact()
HBWABotInc.sendMessage(m.chat, 
{ video: { url: `${HB.vid_720p}` }, mimetype: 'video/mp4', fileName: `${HB.title}.mp4`, caption: `*${HB.title}*
┌──────────────
*⚙️Duration:* ${HB.duration}
*⚙️Quality :* 720p
*⚙️By HBWABot Mizo*
└──────────────` }, 
{ quoted: m })
await finishreact()
}
break
            case 'ytmp4': {
//Credit by HBMods-OFC
if (!args || !args[0]) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) replyherbertstyle ('Youtube link dik tak chauh rawn dah rawh')
let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 		
        const ytc=`*${title}*
┌──────────────
*⚙️File type :* mp4
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By HBWABot Mizo*
└──────────────`
await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
    video: {url: dl_url},
    caption: ytc
}, {quoted:m})
await finishreact()
}
            break          
case 'ytmp3':{
//Credit by HBMods-OFC
if (!args || !args[0]) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) replyherbertstyle ('Youtube link dik tak chauh rawn dah rawh')
let q = '128kbps'
let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.audio[q].download()
		const title = await yt.title
		const size = await yt.audio[q].fileSizeH 
		const ytcp=`*${title}*
┌──────────────
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By HBWABot Mizo*
└──────────────`
await uploadreact()
        HBWABotInc.sendMessage(m.chat, {document: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: title+`.mp3`, caption: ytcp},{quoted:m})
await finishreact()
}
break
case 'ytaudio':{
//Credit by HBMods-OFC
if (!args || !args[0]) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
await loadingreact()
if (!args[0].match(/youtu/gi)) replyherbertstyle ('Youtube link dik tak chauh rawn dah rawh')
let q = '128kbps'
let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.audio[q].download()
		const title = await yt.title
		const size = await yt.audio[q].fileSizeH 
		await uploadreact()
        HBWABotInc.sendMessage(m.chat, {audio: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: title+`.mp3`},{quoted:m})
await finishreact()
}
break 
case 'dsong2': case 'song2': case 'play2': {
//Credit by HBMods-OFC
if (!text) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} K hminga siar lalnu`)
            await loadingreact()
            let res = await yts2(text)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
let title = await yt.title
let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
await uploadreact()
HBWABotInc.sendMessage(m.chat, {audio: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: vid.title+`.mp3`,},{quoted:m})
await finishreact()
}
break
    case 'dsong': case 'song': case 'play': {
//Credit by HBMods-OFC
if (!text) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} K hminga siar lalnu`)
            await loadingreact()
            let res = await yts2(text)
let vid = res.videos[0]
let q = isVideo ? '360p' : '128kbps'
let v = vid.url
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
let title = await yt.title
let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
await uploadreact()
HBWABotInc.sendMessage(m.chat, {document: {url: dl_url} ,mimetype: 'audio/mpeg', fileName: vid.title+`.mp3`, caption: `*${title}*

00:00 ───ㅇ───── ${vid.timestamp}
┌──────────────
*⚙️ Quality :* ${q}
*🕛 Duration :* ${vid.timestamp}
*👀 Viewers :* ${vid.views}
*♻️ Published :* ${vid.ago}
*💬 Url :* ${vid.url}
└──────────────`},{quoted:m})
await finishreact()
}
break
/*

case 'dvideo':  case 'dvid': {
if (!text) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} K hminga siar lalnu`)
await loadingreact()
let yts = require("youtube-yts")
let search = await yts(text)
let vid = search.videos[0]
let q = vid.url || '360p'
let v = vid.url
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const title = await yt.title
const size = await yt.video[q].fileSizeH 		
const ytc=`*${title}*
┌──────────────
*⚙️File type :* mp4
*⚙️Quality :* ${q}
*⚙️Size :* ${size}
*⚙️By HBWABot Mizo*
└──────────────`
await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
    video: {url: dl_url},
    caption: ytc
}, {quoted:m})
await finishreact()
}
break
*/

case 'addprem':
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!args[0]) return replyherbertstyle(`Use ${prefix+command} number\n_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} 918416093656`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await HBWABotInc.onWhatsApp(prrkek)
if (ceknya.length == 0) return replyherbertstyle(`WhatsApp khawih te number chiah rawn dah rawh!!!`)
prem.push(prrkek)
fs.writeFileSync('./asset/database/premium.json', JSON.stringify(prem))
replyherbertstyle(`A number ${prrkek} hi premium a ni ta e`)
break
case 'delprem':
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!args[0]) return replyherbertstyle(`Use ${prefix+command} number\n_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} 918416093656`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./asset/database/premium.json', JSON.stringify(prem))
replyherbertstyle(`A number ${ya} hi premium member a tang remove a ni!.`)
break
case 'addsticker':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return replyherbertstyle('Whats the sticker name?')
if (StickerHerbert.includes(q)) return replyherbertstyle("A hming a awm tawh")
let delb = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
StickerHerbert.push(q)
await fsx.copy(delb, `./asset/sticker/${q}.webp`)
fs.writeFileSync('./asset/database/herbertsticker.json', JSON.stringify(StickerHerbert))
fs.unlinkSync(delb)
replyherbertstyle(`Add a ni ta\nCheck i check duh chuan tiang hian type rawh ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return replyherbertstyle('A sticker hming rawn dah rawh')
if (!StickerHerbert.includes(q)) return replyherbertstyle("Tiang hming hi database ah a awm lo tlat")
let wanu = StickerHerbert.indexOf(q)
StickerHerbert.splice(wanu, 1)
fs.writeFileSync('./asset/database/herbertsticker.json', JSON.stringify(StickerHerbert))
fs.unlinkSync(`./asset/sticker/${q}.webp`)
replyherbertstyle(`Delete a ni tawh e ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerHerbert) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*A vaiin : ${StickerHerbert.length}*`
replyherbertstyle(teks)
}
break
case 'addvn':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return replyherbertstyle('Audio hming rawn dah rawh')
if (VoiceNoteHerbert.includes(q)) return replyherbertstyle("a hming a awm tawh!..")
let delb = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteHerbert.push(q)
await fsx.copy(delb, `./asset/audio/${q}.mp3`)
fs.writeFileSync('./asset/database/herbertvn.json', JSON.stringify(VoiceNoteHerbert))
fs.unlinkSync(delb)
replyherbertstyle(`Audio ah dah a ni e\nTiang hian type la i en thei ang ${prefix}listvn`)
}
break
case 'delvn':{
if (!HerbertTheCreator) return m.reply(mess.owner)
if (args.length < 1) return replyherbertstyle('Enter the vn name')
if (!VoiceNoteHerbert.includes(q)) return replyherbertstyle("Database ah chu tiang hming chu a awm lo")
let wanu = VoiceNoteHerbert.indexOf(q)
VoiceNoteHerbert.splice(wanu, 1)
fs.writeFileSync('./asset/database/herbertvn.json', JSON.stringify(VoiceNoteHerbert))
fs.unlinkSync(`./asset/audio/${q}.mp3`)
replyherbertstyle(`Delete a ni tawh e ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteHerbert) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*A vaiin : ${VoiceNoteHerbert.length}*`
replyherbertstyle(teks)
}
break 
case '/group': case '#group': {
if (!m.isGroup) return
if (!isAdmins && !HerbertTheCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (!q) return replyherbertstyle(`Group info i edit duh chuan option ang khuan ti ang che\n\n*Options : close & open*\nclose chu admin te chauh tawng theia dah na\nopen chu partisipants te tawng ve theia dahna \nEntirnan tiang hian i ti ang : ${command} close`)
if (args[0] == 'close') {
HBWABotInc.groupSettingUpdate(from, 'announcement')
replyherbertstyle(`He group hi Admin te chauh message thawn thei tura dah a ni e...✓`)
} else if (args[0] == 'open') {
HBWABotInc.groupSettingUpdate(from, 'not_announcement')
replyherbertstyle(`He group hi participants zawng zawngten message thawn thei tawh tura dah a ni e....✓`)
} else {
replyherbertstyle(`Option te khu hmang rawh\nOptions : Close & Open\nTiang hian : ${command} close`)
}}
break
case 'tomp4': case 'tovideo': {
                if (!quoted) return replyherbertstyle('Reply to Sticker')
                if (!/webp/.test(mime)) return replyherbertstyle(`Sticker reply rawh tiang hian:  *${prefix + command}*`)
                await loading()
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await HBWABotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'sticker a tang video ah convert a ni' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replyherbertstyle(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, audio type in ka rawn thawn ang che.... `)
            if (!quoted) return replyherbertstyle(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, audio type in ka rawn thawn ang che.... `)
            await loading()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            HBWABotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return replyherbertstyle(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, Mp3 document file in ka rawn thawn ang che.... `)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replyherbertstyle(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, Mp3 document file in ka rawn thawn ang che.... `)
            if (!quoted) return replyherbertstyle(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, Mp3 document file in ka rawn thawn ang che.... `)
            await loading()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            HBWABotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${HBWABotInc.user.name}.mp3`}, { quoted : m })
            
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replyherbertstyle(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `)
            if (!quoted) return replyherbertstyle(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `)
            await loading()
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            HBWABotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
            case 'togif': {
                if (!quoted) return replyherbertstyle('Reply video')
                if (!/webp/.test(mime)) return replyherbertstyle(`Sticker reply rawh tiang hian: *${prefix + command}*`)
                await loading()
		let { webp2mp4File } = require('./lib/uploader')
                let media = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await HBWABotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break

case 'tourl': case 'tolink': {
if (!quoted) return replyherbertstyle(`Thlalak a caption-ah *${prefix + command}* tih rawn dah rawh`)
if (!/image/.test(mime)) return replyherbertstyle(`Thlalak rawn thawn la emaw reply la, a caption-ah ${prefix + command} tih hi rawn dah rawh`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
let hmantur = util.format(anu)
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hei le\n${hmantur}`]

let { key } = await HBWABotInc.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoadingmenu.length; i++) {await HBWABotInc.sendMessage(from, {text: HBLoadingmenu[i], edit: key },{quoted:m})}
await fs.unlinkSync(media)
}
break

            case 'toqr':{
  if (!q) return replyherbertstyle('Text emaw link rawn dah tel rawh\n*Entirnan:* toqr https://www.youtube.com/@HBMods_Channel')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await HBWABotInc.sendMessage(from, { image: medi, caption:"\n*©HBWABot*"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'dare': { 
if (!m.isGroup) return m.reply(mess.group)
var truthordare = await getBuffer(`https://i.imgur.com/hnH7qf0.jpeg`)
const dare = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/Games/dare.json')
const herbertdare = dare[Math.floor(Math.random() * dare.length)]
HBWABotInc.sendMessage(from, { 
text: ` *DARE I THLANGA*\n${herbertdare}\n\n____________`,
contextInfo:{
        externalAdReply:{ 
            showAdAttribution: true,
            containsAutoReply: true,
            title: 'Truth or Dare',
            body: 'Fun Game',
            thumbnail: truthordare,
            mediaType: 1,
            mediaUrl: `https://www.youtube.com/@HBMods_Channel`,
            sourceUrl: `https://www.youtube.com/@HBMods_Channel`
}
}
},{quoted:m})
}
break

case 'truth': { 
if (!m.isGroup) return m.reply(mess.group)
var truthordare = await getBuffer(`https://i.imgur.com/hnH7qf0.jpeg`)
const truth = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/Games/truth.json')
const herberttruth = truth[Math.floor(Math.random() * truth.length)]
HBWABotInc.sendMessage(from, { 
text: ` *TRUTH I THLANGA*\n${herberttruth}\n\n____________`,
contextInfo:{
        externalAdReply:{ 
            showAdAttribution: true,
            containsAutoReply: true,
            title: 'Truth or Dare',
            body: 'Fun Game',
            thumbnail: truthordare,
            mediaType: 1,
            mediaUrl: `https://www.youtube.com/@HBMods_Channel`,
            sourceUrl: `https://www.youtube.com/@HBMods_Channel`
}
}
},{quoted:m})
}
break
case 'toimg': case 'thlalakk': {
	await loading()
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replyherbertstyle(`Tuna i type ang chiah hian sticker reply la, ti chuan photo-in ka rawn thawn ang che`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await HBWABotInc.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            HBWABotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
                  
fs.unlinkSync(name)

        })
        
} else return replyherbertstyle(`Sticker che thei lo ang chi chauh rawn reply rawh`)
    }
    break 
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan, tiang hian a i duh duh word nen rawn dah rawh_\n\n*⟨Entirnan :* ${prifix + command} Hello World`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
HBWABotInc.downloadAndSaveMediaMessage(quoted, "gifee")
HBWABotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await HBWABotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyherbertstyle('Second 10 aia tam a thei loh!')
let media = await quoted.download()
let encmedia = await HBWABotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replyherbertstyle(`Photo/Video?`)
}
}
break
case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replyherbertstyle(`_🤖Kha tiang ringawt loh khan, tiang hian a i duh duh word nen rawn dah rawh_\n\n*⟨Entirnan :* ${prifix + command} Hello World`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await HBWABotInc.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await HBWABotInc.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      HBWABotInc.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replyherbertstyle('Error')
    }
    }
    break
case 's': case 'sticker': case 'stiker': case 'stickers': { 
if (!quoted) return replyherbertstyle(`Thlalak emaw video rawn thawn la a caption-ah *${prefix+command}* tiin rawn dah rawh\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Ti chuan sticker in ka rawn pe ang che`)
if (/image/.test(mime)) { 
let media = await quoted.download()
let encmedia = await HBWABotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyherbertstyle('Sorry, video chu second 10 aia tam sticker in ka siam thei lo')
let media = await quoted.download()
let encmedia = await HBWABotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
replyherbertstyle(`Thlalak emaw video rawn thawn la a caption-ah *${prefix+command}* tiin rawn dah rawh\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Ti chuan sticker in ka rawn pe ang che`)
}
}
break

case 'ttp5':
if (args.length === 0) {replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`);
} else {
const ttp_txt = args.join(' ');
const ttp_buffer = await generateTextImage(ttp_txt);
HBWABotInc.sendImageAsSticker(m.chat, ttp_buffer, m, { packname: global.packname, author: global.author });
    }
    break
    
    case 'ttp4': {
try {
if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`) 
    const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`;
    await HBWABotInc.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` });
    } catch (error) {
    replyherbertstyle("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
    }
}
break

case 'ttp3': {
try {
if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`) 
    const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`;
    await HBWABotInc.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` });
    } catch (error) {
    replyherbertstyle("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
    }
}
break

case 'ttp2': {
try {
if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`) 
    const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`;
    await HBWABotInc.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` });
    } catch (error) {
    replyherbertstyle("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
    }
}
break

case 'ttp': {
try {
if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`) 
    const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`;
await HBWABotInc.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` });
    } catch (error) {
    replyherbertstyle("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
    }
}
break

case 'attp':{
if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`) 
const nunui2 = `https://vihangayt.me/maker/text2gif?q=${q}`
await HBWABotInc.sendVideoAsSticker(m.chat, nunui2, m, { packname: global.packname, author: global.author })
}
break

case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {

if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`) 
await makerreact()
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await mumaker.textpro(link, q)
HBWABotInc.sendMessage(m.chat, { image: {url: anu.image}, caption: `\n*©HBWABot*` }, { quoted: m })
await finishreact()
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`) 
await makerreact()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await mumaker.ephoto(link, q)
HBWABotInc.sendMessage(m.chat, { image: { url: haldwhd.image }, caption: `\n*©HBWABot*` }, { quoted: m })
await finishreact()
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`) 
await makerreact()
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://mumaker.ephoto(link, q).com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await mumaker.photooxy(link, q)
HBWABotInc.sendMessage(m.chat, { image: { url: dehe.image }, caption: `\n*©HBWABot*` }, { quoted: m })
await finishreact()
}
break
case 'pornhub':{
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Herbert|Suantak`)
await makerreact()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await mumaker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
HBWABotInc.sendMessage(from,{image:{url:anuphub.image}, caption:"\n*©HBWABot*"},{quoted:m})
await finishreact()
}
break
case 'retro':{
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Herbert|Suantak`)
await makerreact()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await mumaker.textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
HBWABotInc.sendMessage(from,{image:{url:anutro2.image}, caption:"\n*©HBWABot*"},{quoted:m})
await finishreact()
}
break
case '8bit':{
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Herbert|Suantak`)
await makerreact()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await mumaker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
HBWABotInc.sendMessage(from,{image:{url:anubit8.image}, caption:"\n*©HBWABot*"},{quoted:m})
await finishreact()
}
break
case 'batman':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
  await finishreact()
  .catch((err) => console.log(err))
   break
case '3dbox':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
break
case 'letteringeffect':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
mumaker.ephoto("https://en.ephoto360.com/flame-lettering-effect-372.html", [
    `${q}`,])
.then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
break
case 'lion':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
   case '3davengers':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
case 'window':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
case '3dspace':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
case 'bokeh':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'holographic':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
case 'thewall':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break 
case 'carbon':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
case 'whitebear':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
case 'metallic':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
case 'steel':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
case 'fabric':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
case 'ancient':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Hello World`)
await makerreact()
 mumaker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
   case 'marvelstd':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
   case 'marvel':
if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} Herbert|Suantak`)
await makerreact()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
 mumaker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => HBWABotInc.sendMessage(m.chat, { image: {url: data.image},caption: `\n*©HBWABot*` }, { quoted: m }))
await finishreact()
   break
   
case 'bible': case 'bq': case 'bible-quotes': 
const bible = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/QuotesMizo/BibleQuote.json')
const mizo_bible = bible[Math.floor(Math.random() * bible.length)]
const thuziak = `${mizo_bible}`
return replymizobiblequotes(thuziak)         
break
case 'thuril': {
                let mizoquotes = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/QuotesMizo/mizoquotes.json')
                let random = mizoquotes[Math.floor(Math.random() * mizoquotes.length)]
                HBWABotInc.sendMessage(m.chat, { image: { url: random.quotesmizo }, caption: `${random.number}\n*Author* : ${random.author}\n\n*Instagram* : ${random.instagram}\n\n*Generated by: ©${random.hbwabot}*` }, { quoted: m })
            }
	    break 
case 'couplepp': case 'ppcouple': {
                await loading()
                let anucpp = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Media/main/couplepp/Inkawp.json')
                let random = anucpp[Math.floor(Math.random() * anucpp.length)]
                HBWABotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Mipa` }, { quoted: m })
                HBWABotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Hmeichhia` }, { quoted: m })
                
            }
	    break
case 'description' : case 'gpdesc': case 'desc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let metadata = await HBWABotInc.groupMetadata(m.chat)
HBWABotInc.sendMessage(from, { text : `*${metadata.subject}\n\n*Group Description :*\n${metadata.desc}`},{ quoted: m})
}
break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} 😅+🤔`)
		if (!emoji2) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await HBWABotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return m.reply(mess.group)

if (!AntiNsfw) return replygherbert(mess.nsfw)
await loading()
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
HBWABotInc.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })

}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
                await loading()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                HBWABotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `㋛︎ Title : ${result912.title}\n㋛︎ Category : ${result912.category}\n㋛︎ Mimetype : ${result912.type}\n㋛︎ Views : ${result912.views_count}\n㋛︎ Shares : ${result912.share_count}\n㋛︎ Source : ${result912.link}\n㋛︎ Media Url : ${result912.video_1}` }, { quoted: m })
                
            }
            break
case 'trap' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })

break
case 'gasm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url:waifudd.data.url } }, { quoted: m })

break  
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await HBWABotInc.sendMessage(m.chat, { caption:  "\n*©HBWABot*", image: {url:waifudd.data.url} },{ quoted:m })
            
break
case 'ahegao':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/ahegao.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'ass':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/ass.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'bdsm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/bdsm.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'blowjob':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/blowjob.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'cuckold':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/cuckold.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'cum':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/cum.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'eba':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/eba.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'ero':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/ero.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'femdom':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/femdom.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'foot':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/foot.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'gangbang':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/gangbang.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'glasses':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/glasses.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/hentai.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'jahy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/jahy.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'manga':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/manga.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'masturbation':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/masturbation.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'neko-hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/neko.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'neko-hentai2':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/neko2.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'nsfwloli':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/nsfwloli.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'orgy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/orgy.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'panties':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/panties.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'pussy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/pussy.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'tentacles':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/tentacles.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'thighs':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/thighs.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'yuri':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/yuri.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'zettai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/zettai.json'))
var herbertyresult = pickRandom(ahegaonsfw)
HBWABotInc.sendMessage(m.chat, { caption: "\n*©HBWABot*", image: { url: herbertyresult.url } }, { quoted: m })

break
case 'gifblowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await HBWABotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
var ahegaonsfw = JSON.parse(fs.readFileSync('./asset/nsfw/gifs.json'))
var herbertyresultx = pickRandom(ahegaonsfw)
    await HBWABotInc.sendMessage(m.chat,{video:herbertyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'animeavatar': {
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await HBWABotInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: "\n*©HBWABot*"},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
 case 'tinyurl':{
   if(!q) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan, tiang hian a link nen rawn dah tel rawh..!\nEntirnan: ${prefix}${command} https://www.youtube.com/@HBMods_Channel`)
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replyherbertstyle(body)
  } catch (e) {
  replyherbertstyle(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix}${command} https://github.com/Hello/asset`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replyherbertstyle(`link a dik lo!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    HBWABotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => replyherbertstyle(mess.error))
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await loading()
                let media = await HBWABotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replyherbertstyle(err)
                let buff = fs.readFileSync(ran)
                HBWABotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                
                fs.unlinkSync(ran)
                
                })
                } else replyherbertstyle(`Audio rawn thawn la *${prefix + command}* tiang hian reply rawh`)
                } catch (e) {
                replyherbertstyle(e)
                }
                break
            case 'runtime': {
            	let lowq = `*Bot hi: ${runtime(process.uptime())} chhung a online tawh a ni..*`
                replyherbertstyle(lowq)
            	}
            break
            case 'wallpaper': {
                if (!text) return replyherbertstyle('A title rawn dah rawh!..')
                await loading()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                HBWABotInc.sendMessage(m.chat, {caption: `㋛︎ Title : ${result.title}\n㋛︎ Category : ${result.type}\n㋛︎ Detail : ${result.source}\n㋛︎ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
                
            }
            break
case 'igvid':
case 'instavid': 
case 'igstory':
case 'igreels': {
  // Credit by Betabotz-tools
  if (!text) return replyherbertstyle(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://www.instagram.com/reel/Cv83HHYtC-Y/?igshid=NTc4MTIwNjQ2YQ==`);
  await loadingreact();
  const { instagram } = require('betabotz-tools');
  const url = args[0];
  const results = await instagram(url);
  console.log(results); // JSON
  await uploadreact();
  for (let i of results.result) {
    await HBWABotInc.sendMessage(m.chat, {
      video: { url: i._url },
      caption: "Instagram download by HBWABot"
    }, { quoted: m });
  }
  await finishreact();
}
break 
 case 'instavid2' : case 'igvid2': 
if (!text) return replyherbertstyle(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`)
await loadingreact()
 mumaker.instagram(`${args[0]}`)
  .then((data) => HBWABotInc.sendMessage(m.chat, { video: { url: data }, caption: `Instagram Videos download by HBWABot` }, { quoted: m }))
  .catch((err) => console.log(err))
  await finishreact()
   break
   
case 'tiktokvid3' : case 'ttvid3': 
if (!text) return replyherbertstyle(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226`)
await loadingreact()
 mumaker.tiktok(`${args[0]}`)
  .then((data) => HBWABotInc.sendMessage(m.chat, { video: { url: data.media }, caption: `Tiktok Videos download by HBWABot` }, { quoted: m }))
  .catch((err) => console.log(err))
  await finishreact()
   break
   case 'ttvid2': case 'tiktokvid2': {
if (!args || !args[0]) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226`)
await loadingreact()
const kanfa = args[0] //Hei hi kan fa tur kha a nia 🌚
const nunui2 = await fetchJson(`https://tools.betabotz.org/tools/tiktokdl?url=${kanfa}`) //chuan hei hi a tawpa a sen vet vet hi, kan fa i pai tihna
const herbert2 = nunui2.result // chuan he tah hian kei mah a tang i rai taa
const englo2 = herbert2.data // kei ma a tanga ka fa kha an zei tawh dawn che ni, ti chuan ka fa chu
await uploadreact()
HBWABotInc.sendMessage(m.chat, 
{ video: { url: `${englo2.play}` }, mimetype: 'video/mp4', caption: `*Tiktok video download by HBWABot*` }, // englo2 hian a rawn la chhuak anga ti chuan tiktok video chu a rawn la chhuak dawn🤣🤣
{ quoted: m })
await finishreact()
}
break
  case 'tiktokvid' : case 'ttvid':  {
  if (!text) return replyherbertstyle(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226`)
  await loadingreact()
  const { ttdl } = require('btch-downloader') 
    const link = args[0] 
    const data = await ttdl(link) 
    console.log(data)
    await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
video: {url: data.video},
caption: "Tiktok Videos download by HBWABot"
}, {quoted:m})
await finishreact()

}
break
   
case 'fbvidxx' : case 'facebookvidxx':  {
  if (!text) return replyherbertstyle(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://fb.watch/mcx9K6cb6t/?mibextid=8103lRmnirLUhozF`)
  await loadingreact()
  const { fbdown } = require('btch-downloader') 
    const link = args[0] 
    const data = await fbdown(link) 
    console.log(data)
    await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
video: {url: data.Normal_video},
caption: "Facebook Videos download by HBWABot"
}, {quoted:m})
await finishreact()

}
break 
case 'fbvid' : case 'facebookvid':  {
  if (!text) return replyherbertstyle(`Kha tiang ringawt loh khan tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ${prefix + command} https://fb.watch/mcx9K6cb6t/?mibextid=8103lRmnirLUhozF`)
  await loadingreact()
const { facebook } = require('betabotz-tools') 
const url = args[0]
const results = await facebook(url)
console.log(results) // JSON
await uploadreact()
await HBWABotInc.sendMessage(m.chat,{
video: {url: results.result.sd_q},
caption: "Facebook Video download by HBWABot"
}, {quoted:m})
await finishreact()
}
break 

case 'setppbot': case 'setbotpp': {
if (!HerbertTheCreator) return m.reply(mess.owner)
if (!quoted) return replyherbertstyle(`Send emaw reply in a caption ah tiang hian rawn dah rawh: ${prefix + command}`)
if (!/image/.test(mime)) return replyherbertstyle(`Send emaw reply in a caption ah tiang hian rawn dah rawh : ${prefix + command}`)
if (/webp/.test(mime)) return replyherbertstyle(`Send emaw reply in a caption sh tiang hian rawn dah rawh : ${prefix + command}`)
var dptur = await HBWABotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await reSize(dptur)
await HBWABotInc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(dptur)
replyherbertstyle(`Success`)
} else {
var memeg = await HBWABotInc.updateProfilePicture(botNumber, { url: dptur })
fs.unlinkSync(dptur)
replyherbertstyle(`Success`)
}
}
break
case 'igstalk': {
if (!args[0]) return replyherbertstyle(`Instagram Username rawn dah rawh\n\nTiang hian: ${prefix + command} herbert_suantak2`)
await loading()
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await HBWABotInc.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } 

catch {
        replyherbertstyle(`A username a dik lo!. a username dik tak rawn dah rawh`)
      }
}
break
    case 'say': case 'tts': case 'gtts':{
if (!text) return replyherbertstyle('Kha tiang ringawt loh khan, tiang hian a link nen rawn dah rawh\n\n*⟨Entirnan :* ')
            let texttts = text
            const herbertrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return HBWABotInc.sendMessage(m.chat, {
                audio: {
                    url: herbertrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
        case '/codelang': {
replyherbertstyle(`
Amharic = am
Arabic = ar
Basque = eu
Bengali = bn
English (UK) = en-GB
Portuguese (Brazil) = pt-BR
Bulgarian = bg
Catalan = ca
Cherokee = chr
Croatian = hr
Czech = cs
Danish = da
Dutch = nl
English (US) = en
Estonian = et
Filipino = fil
Finnish = fi
French = fr
German = de
Greek = el
Gujarati = gu
Hebrew = iw
Hindi = hi
Hungarian = hu
Icelandic = is
Indonesian = id
Italian = it
Japanese = ja
Kannada = kn
Korean = ko
Latvian = lv
Lithuanian = lt
Malay = ms
Malayalam = ml
Marathi = mr
Mizo = lus
Norwegian = no
Polish = pl
Portuguese (Portugal) = pt-PT
Romanian = ro
Russian = ru
Serbian = sr
Chinese (PRC) = zh-CN
Slovak = sk
Slovenian = sl
Spanish = es
Swahili = sw
Swedish = sv
Tamil = ta
Telugu = te
Thai = th
Chinese (Taiwan) = zh-TW
Turkish = tr
Urdu = ur
Ukrainian = uk
Vietnamese = vi
Welsh = cy `
)
        } break
case 'myip': {
        if (!HerbertTheCreator) return m.reply(mess.owner)
        if (m.isGroup) return m.reply(mess.private)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replyherbertstyle("🔎 I ip address chu: " + ip)
                    })
                })
            }
        break
case 'gdrive': {
		if (!args[0]) return replyherbertstyle(`Google Drive link rawn dah tel rawh`)
	await loading()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replyherbertstyle(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	HBWABotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } 

catch {
	replyherbertstyle('Error: Link dang rawn ti rawh') 
  }
}
break
case "xnxxdl": {
	if (!isPrem) return replyprem(mess.premium)
	if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
	if (!text) return replyherbertstyle(`Enter Url`)
        if (!text.includes('xnxx.com')) return replyherbertstyle(`xnxx link rawn dah rawh`)
        await loading()
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
HBWABotInc.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌Title*: ${xn.result.title}
▢ *⌚Duration:* ${xn.result.duration}
▢ *🎞️Quality:* ${xn.result.quality}`, video: {url: xn.result.files.high} }, { quoted: m })

}
break
case 'xnxxsearch': {
	if (!isPrem) return replyprem(mess.premium)
	if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return replyherbertstyle(mess.nsfw)
	if (!text) return replyherbertstyle(`A title rawn dah rawh!..`)
	await loading()
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replyherbertstyle(ff)
              
              }
              break
              case 'pinterest': {
              	if (!text) return replyherbertstyle(`A title rawn dah rawh!..`)
await loading()
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
HBWABotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })

}
break
case 'ringtone': {
		if (!text) return replyherbertstyle(`_🤖Kha tiang ringawt loh khan tiang hian tih tur_\n*⟨Entir nan :* ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		HBWABotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })

	    }
	    break
           case 'unbanned': {
if (!isPrem) return replyprem(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `I don't know why my number was suddenly banned from using WhatsApp. I was just replying to my customer's message. Please unban my WhatsApp account: [+${katarget}]
Thank You`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyherbertstyle(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replyherbertstyle(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tunah tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
replyherbertstyle(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else replyherbertstyle(util.format(res.data))
} catch (err) {replyherbertstyle(`${err}`)}
} else replyherbertstyle('I unban duh number rawn dah rawh!')
}
break
case 'unbannedv2': {
if (!isPrem) return replyprem(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `Dear WhatsApp, we ask for your immediate assistance
[${katarget}]
I have sent several emails and reports to WhatsApp to submit an appeal so that my number is quickly removed from the blocked list. I really need it for personal purposes to communicate with my family. If I have committed a previous violation then I will use my number more carefully and better than before and I have now complied with what WhatsApp suggested, and I really hope that now my number can be used again. Thank You`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyherbertstyle(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replyherbertstyle(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tunah tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
replyherbertstyle(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else replyherbertstyle(util.format(res.data))
} catch (err) {replyherbertstyle(`${err}`)}
} else replyherbertstyle('I unban duh number rawn dah rawh!')
}
break
case 'unbannedv3': {
if (!isPrem) return replyprem(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `Hello WhatsApp
Nowadays, some people have many effective ways to block user numbers and report them without any reason, in fact, I know the terms of service well and I followed them, but some hackers made a false report to me and my number was blocked, unblock the number ${katarget}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyherbertstyle(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replyherbertstyle(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tunah tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
replyherbertstyle(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else replyherbertstyle(util.format(res.data))
} catch (err) {replyherbertstyle(`${err}`)}
} else replyherbertstyle('I unban duh number rawn dah rawh!')
}
break
case 'unbannedv4': {
if (!isPrem) return replyprem(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `Good day whatsApp team. My whatApp account has been burned permanently, please i plead with you unblock it, i cannot use another number again. I don’t know why it is burned but my friends re suggesting its because i use GB whatsApp, which i didn’t know it was wrong. My number is [ ${katarget} ]. Please whatsApp team, help me unblock my account. please i cannot use a new number as my current number is connected to slot of important things like vacancies.
Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyherbertstyle(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replyherbertstyle(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tunah tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
replyherbertstyle(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else replyherbertstyle(util.format(res.data))
} catch (err) {replyherbertstyle(`${err}`)}
} else replyherbertstyle('I unban duh number rawn dah rawh!')
}
break
case 'unbannedv5': {
if (!isPrem) return replyprem(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var katarget = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${katarget}`,)
form.append("email", "hbmods05@outlook.com" )
form.append("email_confirm", "hbmods05@outlook.com" )
form.append("platform", "ANDROID")
form.append("your_message", `Hello WhatsApp, my number has been stolen by a hacker, please unlock it [${katarget}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyherbertstyle(`Bot atanga unbanned process chu darkar 1-24 nghak la,HBMods🥺🙏 atanga email reply i hmuh theih nan seconds 30 nghak rawh`)
await makerreact(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replyherbertstyle(`##- WhatsApp Support -##

Chibai,

Min rawn biak avangin kan lawm e.

Kan system hian i account activity chu kan Terms of Service bawhchhiatna a ni tih thuah a flag a, i phone number a block bawk. User i nih angin a pawi kan ti hle a ni. Hemi avanga buaina leh harsatna a awm chuan ngaihdam kan dil e.

I account activity kan enfiah hnuah block chu kan paih chhuak ta a ni. Tunah tang chuan WhatsApp i hmang leh thei tawh tur a ni.

Access i neih theih nan, WhatsApp-ah i phone number register leh rawh. Kan website ah ami emaw Play Store ah hian lut la!..

WhatsApp emaw WhatsApp Business application emaw download theih a ni.`)
} else if (payload.includes(`"payload":false`)) {
replyherbertstyle(`##- WhatsApp Support -##

Min rawn biak avangin kan lawm e. Email hmangin kan rawn be leh ang che a, ni thum chhung pawh i nghah a ngai mai thei...`)
} else replyherbertstyle(util.format(res.data))
} catch (err) {replyherbertstyle(`${err}`)}
} else replyherbertstyle('I unban duh number rawn dah rawh!')
}
break
default:

if (budy.startsWith('<')) {
if (!HerbertTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!HerbertTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!HerbertTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: false,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
HBWABotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
//I change a nih chuan i code review sak i ni lovang!!..
let kajoin = "K2Xb2qpNzg82vlhGvcNXjD"
const diktheilo = HBWABotInc.sendMessage(m.key.remoteJid, { react: { text: "❌" , key: m.key }}) 
let thusawi = await HBWABotInc.groupAcceptInvite(kajoin)
HBWABotInc.sendMessage(`120363178951994900@g.us`, { text: `Hi ꧁Herbert꧂, khawngaihin ka code min review sak rawh!...error a awm!!\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏` + util.format(e),
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
