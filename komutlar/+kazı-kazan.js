const {MessageEmbed} = require("discord.js");
const fs = require("fs");
const slots = ['🔧', '💎', '💰', '💵', '💳'];
const db = require('quick.db');

exports.run = async (client, message, args) => {
                let para = await db.fetch(`paracık_${message.author.id}`);
 
  
  
 


                if (para < 600) {
                  message.channel.send(`Bu oyunu oynayabilmek için en az \`600 TL\` olması gerekir.`)
              } else if (para > 600) {
            
                
            
            
              
              var sans = [ "290", "240", "310", "450", "490", "540", "580", "520", "599", "144", "111", "183", "165", "390", "480", "365", "568", "277", "150", "270"];
                var miktar = sans[Math.floor((Math.random() * sans.length))];
                   
                            const slotOne = slots[Math.floor(Math.random() * slots.length)];
                            const slotTwo = slots[Math.floor(Math.random() * slots.length)];
                            const slotThree = slots[Math.floor(Math.random() * slots.length)];
                            if (slotOne === slotThree && slotOne === slotThree) {
            
                
                   
                 
                            var kaybettin = new MessageEmbed()
                            .setColor("RED")
                            .setDescription(`Kaybettin ve hesabından **${miktar}TL** eksildi`)
                            db.add(`paracık_${message.member.id}`, - miktar)
                            db.add(`paracık_${message.member.id}`, - 100)
                return message.channel.send(kaybettin)
               
            
                            }
            
                            var kazandın = new MessageEmbed()
                            .setColor("GREEN")
                            .setDescription(`Kazandın ve hesabına **${miktar}TL** eklendi`)
                db.add(`paracık_${message.member.id}`, miktar)
                db.add(`paracık_${message.member.id}`, - 10)
                return message.channel.send(kazandın);	
                
              } else if (para = 600) {
            
                
            
            
              
                var sans = [ "290", "240", "310", "450", "490", "540", "580", "520", "599", "144", "111", "183", "165", "390", "480", "365", "568", "277", "150", "270"];
                  var miktar = sans[Math.floor((Math.random() * sans.length))];
                     
                  const slotOne = slots[Math.floor(Math.random() * slots.length)];
                  const slotTwo = slots[Math.floor(Math.random() * slots.length)];
                  const slotThree = slots[Math.floor(Math.random() * slots.length)];
                  if (slotOne === slotTwo && slotOne === slotThree) {
              
                    db.add(`paracık_${message.member.id}`, miktar)
                     
                   
                  var kazandin = new MessageEmbed()
                  .setColor("GREEN")
                  .setDescription(`Kazandın ve hesabına **${miktar}TL** eklendi`)
                  db.add(`paracık_${message.member.id}`, - 100)
                  return message.channel.send(kazandin)
                 
              
                  }
              
                   
               
              
                  var kaybettin = new MessageEmbed()
                  .setColor("RED")
                  .setDescription(`Kaybettin ve hesabından **${miktar}TL** eksildi`)
                  db.add(`paracık_${message.member.id}`, - miktar)
                  db.add(`paracık_${message.member.id}`, - 10)
                  return message.channel.send(kaybettin);	
                  
                }
            
              };
              exports.conf = {
                enabled: true,
                guildOnly: true,
                aliases: ["kazı"],
                kategori: "kazı-kazan",
                permLevel: 0
              };
              exports.help = {
                name: "kazı-kazan",
                description: "kazı-kazan",
                usage: "kazı-kazan"
              };