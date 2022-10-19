const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
  let x = /(-)/
  let para = await db.fetch(`paracık_${message.author.id}`);
            let miktar = args.slice(0).join(' ');
            if (!miktar) return message.reply('Oynayacağın miktarı yazman gerek!');
            if(para < miktar) return message.reply('Bu kadar paran yok faqir.')

          if (isNaN(args[0])) return message.channel.send("Lütfen bir sayı gir.")
        
          if (miktar.match(x)) return message.reply('Tek zeki sensin zaten!');

            
          
            let veriler = ["0","1","0","1","0","1","0","1","0","1","0","1","0","1"]
    
            let ihtimal = veriler[Math.floor(Math.random() * veriler.length)];    
                
            if(ihtimal === "0") {
              
              let kesilecek = miktar
              
              
            let embed = new MessageEmbed()
            .setTitle(':cry: Haha salak!')  
            .setDescription('Maalesef kaybettin. Paranı kaybettin. Olsun bir daha dene!')  
            .setFooter(client.user.username, message.guild.iconURL)  
            .setColor('RED')  
        
            
            message.channel.send(embed)  
              
            db.add(`paracık_${message.author.id}`, -kesilecek)  
              
              
             return 
            }    
                
            if(ihtimal === "1") {
              
              
             let verilecek = miktar * 2
              
              
              let embed = new MessageEmbed()
            .setTitle('💰 Şanslı velet')  
            .setDescription('Şansın yaver gitti demek; **'+miktar+'**,paranı ikiye katlıyarak **'+verilecek+'** Miktarında para kazandın! :)')  
            .setFooter(client.user.username, message.guild.iconURL)  
            .setColor('GREEN')  
        
            
            message.channel.send(embed)  
              
              db.add(`paracık_${message.author.id}`, verilecek) 
              
            }    
                  
        };
        exports.conf = {
          enabled: true,
          guildOnly: true,
          aliases: ["şans"],
          kategori: "Kategori Adı",
          permLevel: 0
        };
        exports.help = {
          name: "şans",
          description: "şans oyunu",
          usage: "şans"
        };