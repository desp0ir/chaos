exports.run = async (client, message, args) => {
                message.channel.send('Espri Yükleniyor..').then(message => {
                        var espriler = ['Facebook hesabın var, niye durum güncellemiyorsun dedim. Abi durumum yok dedi, sarıldık ağlaştık.','Şimdi ben Mevlüt adında bir çocuğu okula göndersem Mevlüt mü okutmuş olacağım.','Sen bana bir adım gel, ben sana bir değil, iki değil, üç değil, tam dört kavanoz bal 100 TL.','Dedem eskiden sevgilisine kızınca güvercini duvara fırlatmış, tabi o zamanlar telefon yok.','Bu mesaj özel bir frekansla gönderilmiştir. Zekilerde hafıza kaybı, aptallarda kısa sureli körlük ibnelerde de bir anlık gülümseme yapar.','İçme aşk şarabından acıdır aman dikkat et kızım babası hocadır.','Okul madem kapandın bir daha açılma çok günah valla.','Babam takdir getir bilgisayarını yenileyeceğim dedi, bende getirdim. Geldi F5′e basıp gitti.','Rock yapmayan kişiye ne denir? -Yaprock ' ,'Ben Yedigün içiyorum sen Onbeşgün iç. :D' ,'Sinemada on dakika ara dedi, aradım aradım açmadı.' ,'Yeni yapılmış resimlere ne denir? -Nevresim' ,'Tebrikler kazandınız, şimdi tencere oldunuz! ' ,'İshal olmuş böceğe ne denir? -Cırcır Böceği' ,'keklik askere giderse nolur? -Erkeklik' ,'Bizim CD sürücümüz ehliyeti nerden almış acaba ?! ' ,'Yılanlardan korkma, yılmayanlardan kork.' ,'Kırmızı giyen erkeğe ne denir? -Albay  ' ,'Ben kahve içiyorum, Nurgül Yeşilçay.'  ,'Bak şu karışıdaki uçak PİSTİ , ama bir türlü temizlemediler.'   ,'Top ağlarda, ben ağlamaz mıyım ?'  ,'Burger King, bende vezir  '];
                           var espri = espriler[Math.floor(Math.random() * espriler.length)];
                                 message.edit(`${espri}`);
                })
        };
        exports.conf = {
          enabled: true,
          guildOnly: true,
          aliases: ["espri"],
          kategori: "espri",
          permLevel: 0
        };
        exports.help = {
          name: "espri",
          description: "espri",
          usage: "espri"
        };