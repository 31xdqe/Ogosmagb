const Discord = require("discord.js");
const ayar = require("../settings.json");

module.exports.execute = async (client, message, args) => {
    let executor = message.member
  

if(!["830390751099617304"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setTimestamp()).then(x => x.delete({timeout: 5000}));


  
  let maiwen = "**Sesli Kanalda Olan Yetkililer:**\n";
  let maiwen2 = "**Sesli Kanalda Olmayan Yetkililer:**\n";
  message.member.roles.cache.has(ayar.regHammer).members.map(r => { //herkeste olan rolü yazın.
    maiwen += r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
    maiwen2 += !r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
  });

  const maiwenembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription("" + maiwen + "" + maiwen2 + "")
  message.channel.send(maiwenembed).then(s => s.s);
};
module.exports.configuration = {
    name: "sesli",
    aliases: [],
    usage: "sesli",
    description: ""
};