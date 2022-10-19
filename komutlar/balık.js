exports.run = async (client, message, args) => {

                message.channel.send('Sanırım oltana balık düştü!').then(message => {
                        var espriler = ['Sazan Tuttun! :fish:' ,'Köpek Balığı Tuttun.' ,'Uskumru Tuttun! :fish:' ,'Mezgit Tuttun! :fish:' ,'Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?' ,'Hamsi Tuttun! :fish:' ,'Levrek Tuttun! :fish:' ,'Hiçbirşey Tutamadın Maalesef! :wastebasket:' ,'Alabalık Tuttun! :fish:' ,'Maalesef Balık Oltadan Kaçtı! :wastebasket:' ,'İstavrit Tuttun! :fish:'];
                           var espri = espriler[Math.floor(Math.random() * espriler.length)];
                                 message.edit(`${espri}`);
                      });
                  };
                  exports.conf = {
                    enabled: true,
                    guildOnly: true,
                    aliases: ["balık-tut"],
                    kategori: "balık-tut",
                    permLevel: 0
                  };
                  exports.help = {
                    name: "balık-tut",
                    description: "balık-tut",
                    usage: "balık-tut"
                  };