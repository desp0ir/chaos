const {MessageEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(!["808986843851915295"].some(role => message.member.roles.cache.get(role)))
  return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
                let para = await db.fetch(`paracık_${message.author.id}`);

                let mesaj = args.slice(0).join(' ');
                if (!mesaj) return message.reply('Alacağın miktarı yazman gerek!');
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(` yollanılan miktar: ${mesaj}`)
                message.channel.send(embed)
                db.add(`paracık_${message.author.id}`, mesaj)

            };
            exports.conf = {
              enabled: true,
              guildOnly: true,
              aliases: ["para"],
              kategori: "para-elmas",
              permLevel: 0
            };
            exports.help = {
              name: " para",
              description: "para-elmas oyunundaki paranızı gösterir",
              usage: "para"
            };