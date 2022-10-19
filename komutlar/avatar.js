exports.run = async (client, message, args) => {
                const { MessageEmbed } = require('discord.js')
                const user = message.mentions.users.first()
        if (user) { 
                const embed = new MessageEmbed()
                .setTitle('Avatarınız altta!')
                .setImage(user.displayAvatarURL({ dynamic: true, size: 4096}))
                message.channel.send(embed)
        } else {
                const embed = new MessageEmbed()
                .setTitle('Avatarınız altta!')
                .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096}))
                message.channel.send(embed)
        }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["avatar"],
  kategori: "avatar",
  permLevel: 0
};
exports.help = {
  name: "avatar",
  description: "avatar",
  usage: "avatar"
};