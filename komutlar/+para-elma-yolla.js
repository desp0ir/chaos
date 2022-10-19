
const db = require('quick.db');
const {MessageEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
          let x = /(-)/
  let user = message.mentions.users.first();

  if (!user) return message.reply('Kime elmas yollayacağını etiketlemen lazım!');
  if (user.bot === true) return message.reply('Elmas bir bota yollarsan sen zararlı çıkarsın!');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('Yollayacağın miktarı yazman gerek!');

  if (user.id === message.author.id) return message.reply(` Kendine elmasmı yollayacaksın ciddimisin?`);

  if (mesaj.match(x)) return message.reply('Tek zeki sensin zaten!');
if (isNaN(args[1])) return message.channel.send("Lütfen bir sayı gir.")

    
    

  let elmas = await db.fetch(`elmascıklar_${message.author.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);


  let prefix =('?');

 

  if (elmas < mesaj) {
    let bulunanP = await db.fetch(`elmascıklar_${message.author.id}`)
    message.channel.send(` Yeterince elmasın bulunmuyor, sende olan elmas:  ${bulunanP === null  ? "0" : `${bulunanP}`}`)
} else if  (elmas > mesaj) {

  const embed = new MessageEmbed()
  .setColor('RANDOM')
  .setDescription(` ${user} Adlı kullanıcıya elmas yollandı, yollanılan miktar: ${mesaj}`)
  message.channel.send(embed)
  db.add(`elmascıklar_${user.id}`, mesaj)
  db.add(`elmascıklar_${message.author.id}`, - mesaj)
  

        }
              
      };
      exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["elmas-at"],
        kategori: "para-elmas",
        permLevel: 0
      };
      exports.help = {
        name: "elmas-yolla",
        description: "elmas yollar",
        usage: "elmas-yolla"
      };