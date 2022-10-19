const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
                let x = /( -)/


                let miktar = args.slice(0).join(' ');
                if (!miktar) return message.reply('Alacağın miktarı yazman gerek!');
              
              
                if (miktar.match(x)) return message.reply('Tek zeki sensin zaten!');
              if (isNaN(args[0])) return message.channel.send("Lütfen bir sayı gir.")
              
              
                
                 let para = await db.fetch(`paracık_${message.author.id}`);
                
                let elmaspara = 1000
         
               
                  if (para < elmaspara*miktar) {
                    message.channel.send(` ${miktar} elmas alabilmek için yeterli paran görünmüyor. \n Gerekli para **${miktar*elmaspara} **`)
                } else if (para > miktar*elmaspara) {
                  
                    const i = await db.add(`paracık_${message.member.id}` , -miktar*elmaspara)
                   db.add(`elmascıklar_${message.member.id}`, miktar)
                   const aldıE2 = new MessageEmbed()
                   .setColor('RANDOM')
                   .setDescription(`Başarıyla marketten **${miktar}** elmas aldınız\n Hesabınızdan eksilen paran miktarı: **${miktar*elmaspara}**`)
                   .setTimestamp()
                   message.channel.send(aldıE2)
              
              } else if (para = miktar*elmaspara) {
                  
                     const i = await db.add(`paracık_${message.member.id}` , - miktar*elmaspara)
                    db.add(`elmascıklar_${message.member.id}`, miktar)
                   const aldıE = new MessageEmbed()
                   .setColor('RANDOM')
                   .setDescription(` Başarıyla marketten **${miktar}** elmas aldınız\n Hesabınızdan eksilen paran miktarı: **${miktar*elmaspara}**`)
                   .setTimestamp()
                   message.channel.send(aldıE)
               }
              
              };
              exports.conf = {
                enabled: true,
                guildOnly: true,
                aliases: ["elmas-al"],
                kategori: "para-elmas",
                permLevel: 0
              };
              exports.help = {
                name: "elmas-al",
                description: "elmas alır",
                usage: "elmas-al"
              };