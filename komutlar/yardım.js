const {MessageEmbed} = require('discord.js');
exports.run = (client, message, args) => {
    message.delete();
  
  const yardım = new MessageEmbed()
.setDescription(`
 **GENEL KOMUTLAR**
[?] -çekilişyap <- Çekiliş Yapar.
[?] -yapımcım <- Yapımcımı Gösterir.

**Eğlence Komutları** 
[?] -wwegif        <- WWE Gif Atar.
[?] -yazı-tura     <- Yazı Tura Oynar.
[?] -stresçarkı     <- Stres Çarkı Çevirir.
[?] -espri          <- Espri Yapar. 
[?] -avatar         <- Avatarını Gösterir.
[?] -ascii          <- Yazınızı farklı hale getirirsiniz. 
[?] -aşkölçer          <- Bir kişiyle aranızdaki aşkı ölçebilirsiniz. 
[?] -balık-tut          <- Balık tutabilirsiniz. 
[?] -çıkma-teklfi          <- İstediğiniz kişiye çıkma teklifi edersiniz. 
[?] -dans          <- 1-8 arası sayıları farklı şekilde yazdırabilirsiniz. 
[?] -düello          <- İstediğiniz kişiyle düello yaparsınız.
[?] -güzel-söz          <- Bot güzel bir söz atar.  
[?] -kaçcm          <- Cm hesaplar:). 
[?] -ateş          <- İstediğiniz kişinin kafasına sıkarsınız.
[?] -kapak          <- Bot kapak laflar atar.  
[?] -kraol          <- Kral Olursun. 
[?] -oylama          <- Oylama yapabilirsin.
[?] -ping          <- Botun pingini görürsün.
[?] -Şanslı-sayı          <- Şanslı sayını görürsün.
[?] -yazan-kazanır          <- Botun verdiği kelimeyi ilk yazanın kazanacağı oyunu oynarsın.   
[?] -adamasaca          <- Adam asmaca oynarsın.
[?] -havadurumu          <- Yazdığınız şehirin hava durumunu gösterir.
[?] -fbi          <- Fbi gifi atar.
[?] -hangi-hayvansın          <- Hangi hayvan olduğunu gösterir.



**Para-elmas Komutları** 
[?] -çanta        <- Çantanıza bakarsınız.
[?] -elmas-yolla     <- İstediğiniz kişiye elmas yollar.
[?] -elmas-al     <- Para karşılığında elmas alırsınız.
[?] -envanter          <- Enavntere bakarsınız.
[?] -günlük         <- Günlük maaşınızı alırsınız.
[?] -market          <- Marketten bir şey alabilirsiniz.
[?] -meslek          <- Meslek sahibi olabilrisiniz.
[?] -para-yolla          <- İstediğiniz lişiye para yollayabilirsiniz.
[?] -kazı-kazan          <- 100 para karşılığında kazı kazan oyununu oynarsınız 270 paraya kadar kazanabilirsiniz! eğer kazanırsanız oyun 90 paranızı iade eder.

`,true);
  
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["b"],
  permlevel: 4
};

exports.help = {
  name: 'yardım',
  description: 'Yardım.',
  usage: 'yardım'
};