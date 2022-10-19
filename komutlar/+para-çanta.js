const {MessageEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
                let user = message.mentions.users.first() || message.author;
                let boksE = await db.fetch(`boksE_${user.id}`);
                let kalem = await db.fetch(`kalem_${user.id}`);
                let kapışC = await db.fetch(`kapışC_${user.id}`);
                let rozet = await db.fetch(`memberBadge6_${user.id}`);
              
                let prefix = ('?');
              
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`**Rozet:** ${rozet === null  ? "Alınmamış" : `Alınmış`}\n **Kalem:** ${kalem === null ? "Alınmamış" : `Alınmış`} \n **Boks Eldiveni:** ${boksE === null ? "Alınmamış" : `Alınmış`} \n Eğer eşya satın almak isterseniz **${prefix}market** yazarak alabilirsiniz.`) 
              message.channel.send(embed)
                  
            };
            exports.conf = {
              enabled: true,
              guildOnly: true,
              aliases: ["çanta"],
              kategori: "para-elmas",
              permLevel: 0
            };
            exports.help = {
              name: " çanta",
              description: "para-elmas oyunundaki çantanızı gösterir",
              usage: "çanta"
            };