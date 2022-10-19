const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
                let x = args[0]

                // let user = message.mentions.users.first();
                let para = await db.fetch(`paracık_${message.author.id}`);
              
                let meslek = await db.fetch(`meslek_${message.author.id}`);
                let meslekA = await db.fetch(`meslekA_${message.author.id}`);
  


                let madenciA = ('Madenci'); 
                let çiftçiA = ('Çiftçi'); 
                let tamirciA = ('Tamirci'); 
                let emlakçıA = ('Emlakçı'); 
                let mimarA = ('Mimar'); 
                let yazılımA = ('Yazılım Mühendisi'); 
            
              
              
                let prefix = ('?');
              
                try {
                  
                  if (!x) {
               
              const e = new MessageEmbed()
              .setColor('RANDOM')
              .setTitle('Meslek Listesi')
              .addField(`Madenci`, `Meslek sahibi olmak için gerekli para: **1000TL**\nKazanç: 24 Saat'te bir 300TL\nMeslek sahibi olmak için **?meslek madenci**`)
              .addField(`Çiftçi`,  `Meslek sahibi olmak için gerekli para: **2000TL**\nKazanç: 24 Saat'te bir 500TL\nMeslek sahibi olmak için **?meslek çiftçi**`)
              .addField(`Tamirci`,  `Meslek sahibi olmak için gerekli para: **3000TL**\nKazanç: 24 Saat'te bir 700TL\nMeslek sahibi olmak için **?meslek tamirci**`)
              .addField(`Emlakçı`,  `Meslek sahibi olmak için gerekli para: **5000TL**\nKazanç: 24 Saat'te bir 900TL\nMeslek sahibi olmak için **?meslek emlakçı**`)
              .addField(`Mimar`,  `Meslek sahibi olmak için gerekli para: **10000TL** \nKazanç: 24 Saat'te bir 1200TL\nMeslek sahibi olmak için **?meslek mimar**`)
              .addField(`Yazılım mühendisi`,  `Meslek sahibi olmak için gerekli para: **20000TL**\nKazanç: 24 Saat'te bir 1500TL\nMeslek sahibi olmak için **?meslek Yazılım**`)
              
              message.channel.send(e)
              
              const e2 = new MessageEmbed()
              .setColor('RANDOM')
              .addField(`Mesleğin:`, `Çalıştığı meslek: ${meslekA === null  ? "Bir meslekte çalışmıyorsunuz" : `${meslekA}`}`)
              .setTimestamp()
              message.channel.send(e2)
              
                    return
                  }
                  
                  if (x === 'madenci') {
              
                   
                  if (meslek > 0) {
                    message.channel.send(`  Sen bu mesleği önceden olmuşsun zaten.`)
              
                  } else if (meslek > 0) {
                    const embed = new MessageEmbed()
                      .setDescription(`  Zaten madenci mesleğindesin`)
                  .setColor('RED')
                    .setTimestamp()
                    message.channel.send({embed})
                
                } else if (para < 1000) {
                      message.channel.send(`  Madenci olmak için yeterli paran bulunmuyor. \n Gerekli olan para: **1000TL**.`)
                  } else if  (para > 1000) {
                    const madenciE = new MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`  Yeni mesleğiniz **madenci**\n  Mesleğinde başarılar.`)
                    .setTimestamp()
                   message.channel.send(madenciE)
                   db.add(`meslek_${message.author.id}`, 300)
                   db.add(`paracık_${message.author.id}`, - 1000)
                   db.set(`meslekA_${message.author.id}`, madenciA)
              
                  } 
                    return
                  }
              
                  if (x === 'çiftçi') {
                    db.add(`meslek_${message.author.id}`, 1)
              
                    if (meslek < 1) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}`, - 1)
              
                     } else if (meslek > 301) {
                      db.add(`meslek_${message.author.id}` , - 1)
                        message.channel.send(`  Sen bu mesleği önceden olmuşsun zaten.`)
                    
                    } else if (meslek > 499) {
                      const embed = new MessageEmbed()
                      .setDescription(`  Zaten çiftçi mesleğindesin`)
                      .setColor('RED')
                      .setTimestamp()
                      message.channel.send({embed})
                      db.add(`meslek_${message.author.id}`, - 1)
                    
                
                
                    
                  } else if (para < 2000) {
                    db.add(`meslek_${message.author.id}`, - 1)   
                    message.channel.send(`  Çiftçi olmak için yeterli paran bulunmuyor. \n Gerekli olan para: **2000TL**.`)
                    } else if  (para > 2000) {
                      const madenciE = new MessageEmbed()
                      .setColor('RANDOM')
                      .setDescription(`  Yeni mesleğiniz **çiftçi**\n  Mesleğinde başarılar.`)
                      .setTimestamp()
                     message.channel.send(madenciE)
                     db.delete(`meslekA_${message.author.id}`)
                     db.add(`meslek_${message.author.id}`, 200)
                     db.add(`paracık_${message.author.id}`, - 2000)
                     db.set(`meslekA_${message.author.id}`, çiftçiA)
                     db.add(`meslek_${message.author.id}`, - 1)
                
                    }
                  
                    return
                  }
              
                  if (x === 'tamirci') {
                    db.add(`meslek_${message.author.id}`, 1)
              
                    if (meslek < 302) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}` ,- 1)
              
                     } else if (meslek > 501) {
                      db.add(`meslek_${message.author.id}`, - 1)
                        message.channel.send(`  Sen bu mesleği önceden olmuşsun zaten.`)
                    
                    } else if (meslek > 699) {
                      const embed = new MessageEmbed()
                      .setDescription(`  Zaten tamirci mesleğindesin`)
                      .setColor('RED')
                      .setTimestamp()
                      message.channel.send({embed})
                      db.add(`meslek_${message.author.id}`, - 1)
                    
                
                
                    
                  } else if (para < 3000) {
                    db.add(`meslek_${message.author.id}`, - 1)   
                    message.channel.send(`  tamirci olmak için yeterli paran bulunmuyor. \n Gerekli olan para: **3000TL**.`)
                    } else if  (para > 3000) {
                      const madenciE = new MessageEmbed()
                      .setColor('RANDOM')
                      .setDescription(`  Yeni mesleğiniz **tamirci**\n  Mesleğinde başarılar.`)
                      .setTimestamp()
                     message.channel.send(madenciE)
                     db.delete(`meslekA_${message.author.id}`)
                     db.add(`meslek_${message.author.id}`, 200)
                     db.add(`paracık_${message.author.id}`, - 3000)
                     db.set(`meslekA_${message.author.id}`, tamirciA)
                     db.add(`meslek_${message.author.id}`, - 1)
                
                    }
                  
                    return
                  }
              
                  if (x === 'emlakçı') {
                    db.add(`meslek_${message.author.id}`, 1)
              
                    if (meslek < 302) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}`, - 1)
              
                    } else if (meslek < 502) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}` , - 1)
              
                     } else if (meslek > 901) {
                      db.add(`meslek_${message.author.id}`, - 1)
                        message.channel.send(`  Sen bu mesleği önceden olmuşsun zaten.`)
                    
                    } else if (meslek > 899) {
                      const embed = new MessageEmbed()
                      .setDescription(`  Zaten emlakçı mesleğindesin`)
                      .setColor('RED')
                      .setTimestamp()
                      message.channel.send({embed})
                      db.add(`meslek_${message.author.id}`, - 1)
                  
                
                
                    
                  } else if (para < 5000) {
                    db.add(`meslek_${message.author.id}` , - 1)   
                    message.channel.send(`  emlakçı olmak için yeterli paran bulunmuyor. \n Gerekli olan para: **5000TL**.`)
                    } else if  (para > 5000) {
                      const emlakçıE = new MessageEmbed()
                      .setColor('RANDOM')
                      .setDescription(`  Yeni mesleğiniz **emlakçı**\n  Mesleğinde başarılar.`)
                      .setTimestamp()
                     message.channel.send(emlakçıE)
                     db.delete(`meslekA_${message.author.id}`)
                     db.add(`meslek_${message.author.id}`, 200)
                     db.add(`paracık_${message.author.id}`, - 5000)
                     db.set(`meslekA_${message.author.id}`, emlakçıA)
                     db.add(`meslek_${message.author.id}`, - 1)
                
                    }
                  
                    return
                  }
              
              
                  if (x === 'mimar') {
                    db.add(`meslek_${message.author.id}`, 1)
              
                    if (meslek < 302) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}`, - 1)
              
                    } else if (meslek < 502) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}`, - 1)
              
                    } else if (meslek < 702) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}`, - 1)
              
                     } else if (meslek > 1201) {
                      db.add(`meslek_${message.author.id}`, - 1)
                        message.channel.send(`  Sen bu mesleği önceden olmuşsun zaten.`)
                    
                    } else if (meslek > 1199) {
                      const embed = new MessageEmbed()
                      .setDescription(`  Zaten mimar mesleğindesin`)
                      .setColor('RED')
                      .setTimestamp()
                      message.channel.send({embed})
                      db.add(`meslek_${message.author.id}`, - 1)
                    
                
                
                    
                  } else if (para < 10000) {
                    db.add(`meslek_${message.author.id}`, - 1)   
                    message.channel.send(`  mimar olmak için yeterli paran bulunmuyor. \n Gerekli olan para: **10000TL**.`)
                    } else if  (para > 10000) {
                      const mimarE = new MessageEmbed()
                      .setColor('RANDOM')
                      .setDescription(`  Yeni mesleğiniz **mimar**\n  Mesleğinde başarılar.`)
                      .setTimestamp()
                     message.channel.send(mimarE)
                     db.delete(`meslekA_${message.author.id}`)
                     db.add(`meslek_${message.author.id}`, 300)
                     db.add(`paracık_${message.author.id}`, - 10000)
                     db.set(`meslekA_${message.author.id}`, mimarA)
                     db.add(`meslek_${message.author.id}`, - 1)
                
                    }
                  
                    return
                  }
              
                  if (x === 'yazılım') {
                    db.add(`meslek_${message.author.id}`, 1)
              
                    if (meslek < 302) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}`, - 1)
              
                    } else if (meslek < 502) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}` , - 1)
              
                    } else if (meslek < 702) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}`, - 1)
              
                    } else if (meslek < 902) {
                      message.channel.send(`  Lütfen meslekleri sırasıyla ol\n **${prefix}meslek** Yazarak mesleğini ve sırayı görebilirsin`)
                      db.add(`meslek_${message.author.id}`, - 1)
              
                     } else if (meslek > 1501) {
                      db.add(`meslek_${message.author.id}`, - 1)
                        message.channel.send(`  Sen bu mesleği önceden olmuşsun zaten.`)
                    
                    } else if (meslek > 1499) {
                      const embed = new MessageEmbed()
                      .setDescription(`  Zaten YAzılım mühendisi mesleğindesin`)
                      .setColor('RED')
                      .setTimestamp()
                      message.channel.send({embed})
                      db.add(`meslek_${message.author.id}`, - 1)
                    
                
                
                    
                  } else if (para < 20000) {
                    db.add(`meslek_${message.author.id}`, - 1)   
                    message.channel.send(`  doktor olmak için yeterli paran bulunuyor. \n Gerekli olan para: **20000TL**.`)
                    } else if  (para > 20000) {
                      const doktorE = new MessageEmbed()
                      .setColor('RANDOM')
                      .setDescription(`  Yeni mesleğiniz **Yazılım mühendisi**\n  Mesleğinde başarılar.`)
                      .setTimestamp()
                     message.channel.send(yazılımA)
                     db.delete(`meslekA_${message.author.id}`)
                     db.add(`meslek_${message.author.id}`, 300)
                     db.add(`paracık_${message.author.id}`, - 20000)
                     db.set(`meslekA_${message.author.id}`, doktorA)
                     db.add(`meslek_${message.author.id}`, - 1)
                
                    }
                  
                    return
                  }
              
              
                    
                  } catch(err) {
                    
                  }
              
                  
                };
                exports.conf = {
                  enabled: true,
                  guildOnly: true,
                  aliases: ["meslek"],
                  kategori: "para-elmas",
                  permLevel: 0
                };
                exports.help = {
                  name: " meslek",
                  description: "meslek seçiminizi yapar",
                  usage: "meslek"
                };