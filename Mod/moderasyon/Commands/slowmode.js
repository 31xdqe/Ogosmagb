const { MessageEmbed } = require("discord.js");
const ayar = require("../settings.json");
module.exports.execute = async (client, message, args) => {
    
    let embed = new MessageEmbed().setTitle(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(ayar.conf).setColor("RANDOM").setTimestamp();
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Bu komudu kullanmak için gerekli izinlere sahip değilsin.`)).then(x => x.delete({timeout: 10000}));
    let miktar = Number (args[0]);
    message.channel.setRateLimitPerUser(miktar).catch();
    message.react("<a:onayland:830464047018803241>");

};

module.exports.configuration = {
    name: "poco",
    aliases: ["slowmod", "chat", "yavaş-mod"],
    usage: "slowmode [miktar]",
    description: "Belirtilen miktar kadar komutun kullanıldığı kanalı yavaşlatır."
};
