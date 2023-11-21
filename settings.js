const chalk = require("chalk")
const fs = require("fs")
//aumto presence update
global.autoTyping = false
global.autoRecord = false
global.available = true
global.autoread = false
global.autoread_status = false
//info
global.owner = ['918416093656']
global.ownernumber = '918416093656'
global.ownername = "꧁Herbert♕꧂"
global.location = "India, Mizoram, Aizawl"
global.botname = "HBWABot Mizo"
global.ownerweb = "https://youtube.com/@HBMods_Channel"
global.themeemoji = '🤖'
global.creator = "918416093656@s.whatsapp.net"
global.ownerNumber = ["918416093656@s.whatsapp.net"]
global.prefa = ['','!','.','#','/']
global.sessionName = 'session'

// Sticker Pack Name
global.packname = "Sticker By"
global.author = "HBWABot"
global.hbmods = "https://herbert70.blogspot.com/"
//_______________________________________________
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa
//messages
global.mess = {
    success: '\n*©HBWABot*!', 
    wait: '♲ Nghak lawk rawh..',
    admin: 'He features hi chu admin te chauh hman thei tur a siam a ni!',
    botAdmin: 'Admin min nih tir phawt la, chuan ka ti thei ang!',
    premime: 'Hemi features, premium-ah ka dah bik hi i hman duh chuan owner rawn be rawh',
    owner: 'He features hi a neitu chauh hman thei tura siam a ni!',
    group: 'Hei chu group-ah chauh hman thei tura siam a ni!',
    private: 'Hei chu private chat-ah chauh hman thei tura siam a ni!',
    bot: 'Hei chu kei mah chauh hman thei tur a siam a ni',
    linkm: 'Khawnge a link?',
    endLimit: 'Vawiinah i hman tur i hmang zo tawh, darkar 12 ral hunah i hmang leh thei chauh ang',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
