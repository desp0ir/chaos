const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
                let u = message.mentions.users.first() || message.author;

                let balance = await db.fetch(`paracık_${u.id}`);
          
            
            let elmas = await db.fetch(`elmascıklar_${u.id}`);
            let maaş = await db.fetch(`meslek_${u.id}`);
            let meslekA = await db.fetch(`meslekA_${u.id}`);
            let pref = ('?')
            
              const embed = new MessageEmbed()
            
            
            
              .addField(' Elmasın:', `${elmas === null ? "0" : `${elmas}`}`, true)
              .addField(' Paran:', `${balance === null ? "0" : `${balance} TL`}`, true)
              .addField(`Meslek`, `Çalıştığı meslek: **${meslekA === null  ? "Bir meslekte çalışmıyorsunuz" : `${meslekA}`}**\nMaaş: **${maaş === null  ? "0" : `${maaş}`}** `)
              
              .setFooter(`Para ve meslek sahibi: ${u.tag} Komutu kullanan: ${message.author.tag}`)
              .setColor('RANDOM')
            
              message.channel.send(embed)
            
              const embed2 = new MessageEmbed()
              .setDescription(`Aldığın eşyaları görmek istersen ${pref}çanta yazarak görebilirsin.`)
              .setColor('RANDOM')
              message.channel.send(embed2)
            };
            exports.conf = {
              enabled: true,
              guildOnly: true,
              aliases: ["envanter"],
              kategori: "para-elmas",
              permLevel: 0
            };
            exports.help = {
              name: "envanter",
              description: "envanterinizi gösterir",
              usage: "envanter"
            };