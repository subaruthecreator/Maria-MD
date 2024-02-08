const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "919614477116"
global.ownername = "Sนbสrน ⚡"
global.ytname = "YT: Akash gamerz"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Indian"

global.ownername = 'Ayush' //owner name
global.botname = '𝐌𝐀𝐑𝐈𝐀-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘AʏᴜSʜ✘𓆪_✰'
global.packname = '❤‍🩹𝓘❜𝓶 𝓷𝓸𝓽 𝓪𝓯𝓻𝓪𝓲𝓭 𝓸𝓯 𝓼𝓽𝓸𝓻𝓶𝓼 𝓫𝓮𝓬𝓪𝓾𝓼𝓮 𝓘❜𝓶 𝓵𝓮𝓪𝓻𝓷𝓲𝓷𝓰 𝓽𝓸 𝓼𝓪𝓲𝓵 𝓶𝔂 𝓸𝔀𝓷 𝓼𝓱𝓲𝓹👀🛥ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ+₉₆₁₄₄₇₇₁₁₆ㅤ👀  𝖘𝖚𝖇𝖆𝖗𝖚ㅤㅤㅤㅤㅤㅤㅤ𝓞𝓷𝓵𝔂 𝓛𝓸𝓸𝓴 𝓗𝓮𝓮 𝓐𝓽𝓽𝓲𝓽𝓾𝓭𝓮😈 𝓦𝓪𝓵𝓪 𝓗𝓪𝓲 𝓑𝓾𝓽♥ 𝓓𝓲𝓵 𝓜𝓮 𝓚𝓸𝓲 𝓖𝓱𝓪𝓶𝓪𝓷𝓭 𝓝𝓪𝓱𝓲 𝓗𝓪𝓶𝓪𝓻𝓮😇'
global.author = 'Maria Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/L8VaMvrygXOFnU6KuEI5hy'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
