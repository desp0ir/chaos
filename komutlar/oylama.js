const {MessageEmbed} = require ('discord.js');
exports.run = async (client, message, args) => {
                if (!message.member.hasPermission('791031811668836403')) return message.channel.send('Bunu yapamazsın')
                const args1 = message.content.split(' ').slice(1)
                  const botmesajı = args1.join(" ")
                  if (!botmesajı) return message.reply('Oylamanın ne olduğunu yazmadınız.');
                  message.delete(message.author)
                  const embed = new MessageEmbed()
                  .setTitle('OYLAMA')
                  .setDescription(botmesajı)
                  .setFooter('Chaos')
                  .setColor('#882940')
                  .setThumbnail('https://cdn.discordapp.com/attachments/717842312872591451/791638011241955328/bot_pp.png')
                  message.channel.send({ embed: embed}).then( embedMesage => {
                        embedMesage.react("✔️")
                        embedMesage.react("❌");
                  })
            };
            exports.conf = {
              enabled: true,
              guildOnly: true,
              aliases: ["oylama"],
              kategori: "oylama",
              permLevel: 0
            };
            exports.help = {
              name: "oylama",
              description: "oylama",
              usage: "oylama"
            };