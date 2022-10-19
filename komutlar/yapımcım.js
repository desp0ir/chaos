const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, msg, args) => {
  msg.channel.send("Yapımcım: @!𐊚 Lilith ʳʷ#3949 ")
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bot-yazarı"],
  kategori: "YETKİLİ KOMUTLARI",
  permLevel: 0
};
exports.help = {
  name: "yapımcım",
  description: "Yapımcımı Gösterir.",
  usage: "yapımcım"
};
