const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {

                message.channel.send('Şanslı Sayını Hesaplıyorum..').then(message => {
                        var espriler = ['Senin Şanslı Sayın 31 ' ,'Senin Şanslı Sayın 69 ' ,'Senin Şanslı Sayın 56 ' ,'Senin Şanslı Sayın 98 ' ,'Senin Şanslı Sayın 84' ,'Senin Şanslı Sayın 99 ' ,'Senin Şanslı Sayın 182' ,'Senin Şanslı Sayın 861' ,'Senin Şanslı Sayın 271' ,'Senin Şanslı Sayın 53' ,'Senin Şanslı Sayın 8172  ' ,'Senin Şanslı Sayın 91 '  ,'Senin Şanslı Sayın 3131  C E N A B E T '   ,'Senin Şanslı Sayın 41'  ,'Senin Şanslı Sayın 01 '];
                           var espri = espriler[Math.floor(Math.random() * espriler.length)];
                                 message.edit(`${espri}`);
                      });
                     
                  };
                  exports.conf = {
                    enabled: true,
                    guildOnly: true,
                    aliases: ["sayım"],
                    kategori: "şanslı-sayı",
                    permLevel: 0
                  };
                  exports.help = {
                    name: "şanslı-sayı",
                    description: "şanslı-sayı",
                    usage: "şanslı-sayı"
                  };