const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
                let x = args[0]

  let user = message.mentions.users.first() || message.author;
  let boksE = await db.fetch(`boksE_${message.author.id}`);
  let kalem = await db.fetch(`kalem_${message.author.id}`);
  let kapışC = await db.fetch(`kapışC_${message.author.id}`);
  let rozet = await db.fetch(`rozet_${message.author.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);
  let elmas = await db.fetch(`elmascıklar_${message.author.id}`);
  

  //ROZET 
  let rozetA = await db.fetch(`elmascıklar_${message.author.id}`);
  let RozetS = -50;
  let rozetF = 50;

  let prefix = ('?');


  try {
    
    if (!x) {
 
const e = new MessageEmbed()
.setColor('RANDOM')
.setDescription(`  Rozeti: **50 ELMAS** (Satın Almak İçin: **${prefix}market rozet**)`)
message.channel.send(e)
      return
    }
    
    if (x === 'rozet') {

      if (rozet > 1) {
      const embed = new MessageEmbed()
        .setDescription(` Zaten sende rozet bulunuyor fazlasını ne yapacaksın?`)
    .setColor('RED')
      .setTimestamp()
      message.channel.send({embed})
    
    
  } else if (rozetA < rozetF) {
        message.channel.send(`  Rozet satın almak için yeterli elmasın bulunuyor. \n Gerekli olan elmas: **${rozetF} ELMAS**.`)
    } else if  (rozetA > rozetF) {
message.channel.send(`  Rozetini başarıyla aldınız`)
db.set(`memberBadge6_${message.author.id}`, "https://cdn.discordapp.com/attachments/531535859594297364/533260601162465280/paraR.png")
db.add(`rozet_${message.author.id}`, 2)
db.add(`elmascıklar_${message.member.id}`, -50)
    
} else if  (rozetA = rozetF) {
  message.channel.send(`  Rozetini başarıyla aldınız`)
  db.set(`memberBadge6_${message.author.id}`, "https://cdn.discordapp.com/attachments/531535859594297364/533260601162465280/paraR.png")
  db.add(`rozet_${message.author.id}`, 2)
  db.add(`elmascıklar_${message.member.id}`, -50)
      }
      return
    }

    if (x === 'kalem') {

      if (kalem > 0) {
      const embed = new MessageEmbed()
      .setDescription(`  Zaten sende kalem eldiveni bulunuyor fazlasını ne yapacaksın?`)
      .setColor('RED')
      .setTimestamp()
      message.channel.send({embed})
    
    
  } else if (para < 200) {
        message.channel.send(`  Kalem satın almak için yeterli paran bulunuyor. \n Gerekli olan para: **250TL**.`)
    } else if  (para > 200) {
message.channel.send(`  :pencil2: Kalem başarıyla aldınız`)
db.add(`kalem_${message.author.id}`+ 2)
db.add(`paracık_${message.member.id}` - 200)

  } else if  (para = 200) {
    message.channel.send(`  :pencil2: Kalem başarıyla aldınız`)
    db.add(`kalem_${message.author.id}`+ 2)
    db.add(`paracık_${message.member.id}` - 200)
        }
      return
    }
      
    } catch(err) {
      
    }
  };
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["market"],
    kategori: "para-elmas",
    permLevel: 0
  };
  exports.help = {
    name: "market",
    description: "marketi gösterir",
    usage: "market"
  };