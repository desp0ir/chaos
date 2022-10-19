const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Artık Kral Oldun!!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    
        .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`)
    return message.channel.send(sunucubilgi);
    };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kral'],
  permLevel: 0
};
exports.help = {
  name: 'kralol',
  description: 'kralol',
  usage: 'kralol'
};
