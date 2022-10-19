exports.run = async (client, message, args) => {
                const { MessageEmbed } = require('discord.js');
                const embed = new MessageEmbed()
                .setTitle('PİNG ÖLÇÜLÜYOR')
                .setColor(0xD97634)
                .addField('Bot pingi:', client.ws.ping + 'ms')
                .setThumbnail('https://cdn.discordapp.com/attachments/717842312872591451/791638011241955328/bot_pp.png')
        message.channel.send(embed)        
     };
     exports.conf = {
       enabled: true,
       guildOnly: true,
       aliases: ["ping"],
       kategori: "ping",
       permLevel: 0
     };
     exports.help = {
       name: "ping",
       description: "ping",
       usage: "ping"
     };