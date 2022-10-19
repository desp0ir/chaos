
const ascii = require('figlet');
exports.run = async (client, message, args) => {
                var yazi = args.slice(0).join(' ');
                if (yazi.length < 1) return message.reply("Lütfen **1 ile 8** arasında yazı yaznz")
                if (yazi.length > 8) return message.reply("Lütfen **1 ile 8** arasında yazı yaznz")
                
                 ascii(yazi, {
                      font: 'Dancing Font',
                      horizontalLayout: 'fitted',
                      verticalLayout: 'fitted'
                    },
                    function(err, data) {
                      if (err) {
                        message.reply(`HATA ${err}`)
                        console.error(err)
                      }
                   
                   message.channel.send('```css\n' + data + '\n```');
                    
              
                   
                    })
                  };
                  exports.conf = {
                    enabled: true,
                    guildOnly: true,
                    aliases: ["dans"],
                    kategori: " ascii",
                    permLevel: 0
                  };
                  exports.help = {
                    name: "dans  ",
                    description: "dans",
                    usage: "dans"
                  };