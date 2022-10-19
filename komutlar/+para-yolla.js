const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
            let x = /(-)/
  
            let user = message.mentions.users.first();
          
            if (!user) return message.reply('Kime para yollayacağını etiketlemen lazım!');
            if (user.bot === true) return message.reply('Parayı bir bota yollarsan sen zararlı çıkarsın!');
            
            let mesaj = args.slice(1).join(' ');
            if (!mesaj) return message.reply('Yollayacağın miktarı yazman gerek!');
          
            if (user.id === message.author.id) return message.reply(` Kendine paramı yollayacaksın ciddimisin?`);
          
          
          if (isNaN(args[1])) return message.channel.send("Lütfen bir sayı gir.")
          if (mesaj.match(x)) return message.reply('Tek zeki sensin zaten!');
              
              
          
            let elmas = await db.fetch(`elmascıklar_${message.author.id}`);
            let para = await db.fetch(`paracık_${message.author.id}`);
          
          
            let prefix =('?');
          
           
          
            if (para < mesaj) {
              let bulunanP = await db.fetch(`paracık_${message.author.id}`)
              message.channel.send(` Yeterince paran bulunmuyor, sende olan para:  ${bulunanP === null  ? "0" : `${bulunanP}`}`)
          } else if  (para > mesaj) {
          
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(` ${user} Adlı kullanıcıya para yollandı, yollanılan miktar: ${mesaj}`)
            message.channel.send(embed)
            db.add(`paracık_${user.id}`, mesaj)
            db.add(`paracık_${message.author.id}` , -mesaj)
            
          
          }
        };
        exports.conf = {
          enabled: true,
          guildOnly: true,
          aliases: ["para-at"],
          kategori: "Kategori Adı",
          permLevel: 0
        };
        exports.help = {
          name: "para-yolla",
          description: "para yollamanızı sağlar",
          usage: "para-yolla"
        };