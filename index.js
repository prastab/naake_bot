const Discord = require('discord.js');
const client = new Discord.Client();


const result = require('dotenv').config();
 
if (result.error) {
  throw result.error
}
 

client.login(process.env.BOT,)
require('dotenv').config();
client.on('ready',readyDiscord);
client.on('message', gotMessage);
console.log(process.env);

function readyDiscord(){
    console.log('tada');
}


function gotMessage(msg){
    console.log(msg.content);
    if(msg.content.includes("wish gar") ){
        const mention = msg.mentions.users.first();
        
        console.log(mention);
        msg.channel.send(`${mention}, Happy Birthday 🎉🥳 `)
    }
    if(msg.content.includes("naake spam") ){
        const mention = msg.mentions.users.first();
        
        console.log(mention);
        for(let i = 0 ; i < 100;i++){
        msg.channel.send(`${mention}`);
        }
    }
    if(msg.content.toLowerCase() === "naake" ){
        msg.reply("tero bhanda thulai xa")
    }else if (msg.content.includes("oe naake")){
        msg.reply("K bho")
    }
    if(msg.content.toLowerCase().includes("fuck you")&&msg.content.toLowerCase().includes("naake")){
        msg.reply("tai fuck you")
    }else if(msg.content.toLowerCase()==="fuck naake" || msg.content.toLowerCase()==="naake fuck"){
        msg.reply("talai nai fuck")
    }else if(msg.content.toLowerCase()==="fucking naake"){
        msg.reply("fucking fucking you fucking")}
    if(msg.content.toLowerCase() === "bitch naake" || msg.content.toLowerCase() === "naake bitch"){
        msg.reply("sala tai bitch")
    }
    if(msg.content.toLowerCase() === "chup naake") {
        msg.reply("sala tai chup")
    }
    if(msg.content.includes("😂") || msg.content.toLowerCase() === "haha"||msg.content.includes("🤣")){
        msg.reply("sala k hehe gari hasira")
    }
    if(msg.content.toLowerCase() === "sala naake"){
        msg.reply("tai sala")
    }
}