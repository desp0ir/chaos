
const { MessageEmbed } = require('discord.js');

exports.run = async (client, Mesaj, args) => {
          
                        const Bot = client
                        
                        const sonuçListesi = [
                          '**En iyisi, sen bu işi boşver kanka.**\n:heart:🖤🖤🖤🖤🖤🖤🖤',
                          '**Kanka, zor ya...**\n:heart::heart:🖤🖤🖤🖤🖤🖤',
                          '**Bilmiyorum ki... Olabilir de, olmayabilir de...**\n:heart::heart::heart:🖤🖤🖤🖤🖤',
                          '**Olabilir...**\n:heart::heart::heart::heart:🖤🖤🖤🖤',
                          '**İhtimali var kanka..**\n:heart::heart::heart::heart::heart:🖤🖤🖤',
                          '**Denemeye değer.**\n:heart::heart::heart::heart::heart::heart:🖤🖤',
                          '**Bir şeyler var..**\n:heart::heart::heart::heart::heart::heart::heart:🖤',
                          '**OTOBÜS MÜ BEKLİYON HADİ GİT AÇIL LA**\n:heart::heart::heart::heart::heart::heart::heart:' // Yazıları artırırsanız "var rakamSonuç"ta sondaki çarpı miktarını da azaltmanız gerekir.
                        ]
                        
                        const Sonuç = Math.floor (Math.random () * (sonuçListesi.length - 1))
                        
                        var rakamSonuç = (Sonuç + 1) * 12.5
                        
                        const aşkÖlçer = new MessageEmbed ().setColor ('#ff005f').setDescription (`**${Mesaj.mentions.users.first()} ile arandaki aşk sonucu:** ${rakamSonuç}%\n\n${sonuçListesi[Sonuç]}`)
                        const kullanıcıYok = new MessageEmbed ().setColor ('#c70000').setThumbnail (Bot.user.avatarURL).setTitle ('Aşkı ölçmek için birisini girmelisin!').setFooter (Bot.user.username, Bot.user.avatarURL).setTimestamp ()
                        const kullanıcıSensin = new MessageEmbed ().setColor ('#c70000').setThumbnail (Bot.user.avatarURL).setTitle ('Kendinle kendin arandaki aşkı ölçemezsin.').setFooter (Bot.user.username, Bot.user.avatarURL).setTimestamp ()
                        
                        if (!Mesaj.mentions.users.first()) Mesaj.channel.send (kullanıcıYok)
                        if (Mesaj.mentions.users.first() == Mesaj.author) Mesaj.channel.send (kullanıcıSensin)
                        if (Mesaj.mentions.users.first()) if (Mesaj.mentions.users.first() !== Mesaj.author) Mesaj.channel.send (aşkÖlçer)
                      };
                      exports.conf = {
                        enabled: true,
                        guildOnly: true,
                        aliases: ["aşkölçer"],
                        kategori: "aşkölçer",
                        permLevel: 0
                      };
                      exports.help = {
                        name: "aşkölçer",
                        description: "aşkölçer",
                        usage: "aşkölçer"
                      };