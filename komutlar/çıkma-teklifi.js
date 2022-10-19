const {MessageEmbed} = require ('discord.js');
exports.run = async (client, message, args) => {
                let kullanıcı = message.mentions.members.first();
        let teklifyazi = args.slice(1).join(' ')

        if(!kullanıcı){
            const cmfhata = new MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Çıkma Teklifi Edeceğin Kullanıcıyı Etiketle**`)
            return message.channel.send(cmfhata)
        }

        if(!teklifyazi){
            const cmfhata = new MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Çıkma Teklifi Edeceğin Kişi Seçildi Tamam Ama Şöyle Süslü Püslü Metinde Gir Etkilensin :smile:**`)
            return message.channel.send(cmfhata)
        }

        const filter = (reaction) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && kullanıcı.id;
        }

        if(kullanıcı){
            const teklifmesaj = new MessageEmbed()
            .setDescription(" ** " + teklifyazi + " ** ")
            .setColor('RANDOM')
            let teklifreact = await message.channel.send(teklifmesaj)
            await teklifreact.react("✅")
            await teklifreact.react("❌")
            teklifreact.awaitReactions(filter, {
                max: 1,
                time: 10000,
                errors: ['time']
            }).then(cmf => {
                const tiklandi = cmf.first();
                    if(tiklandi.emoji.name === "✅"){
                        const kabuletti = new MessageEmbed()
                            .setDescription(`${kullanıcı} Kişisi çıkma teklifini kabul etti`)
                            .setColor('#00ff00')
                        message.channel.send(kabuletti)
                    } 
                    if(tiklandi.emoji.name === "❌"){
                        const redetti = new MessageEmbed()
                         .setDescription(`${kullanıcı} Kişisi çıkma teklifini red etti`)
                            .setColor('#ff0000')
                        message.channel.send(redetti)
                    }   
                })
        }
    };
    exports.conf = {
      enabled: true,
      guildOnly: true,
      aliases: ["teklif"],
      kategori: "çıkma-teklifi",
      permLevel: 0
    };
    exports.help = {
      name: "çıkma-teklifi",
      description: "çıkma-teklifi",
      usage: "çıkma-teklifi"
    };