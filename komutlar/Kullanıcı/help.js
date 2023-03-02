
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    config: {
        name: "help",
        aliases: [],
        kategori: "Kullanıcı",
        description: "Yardım",
    },
    run: async (client, message) => {

const kulsayi = []
client.guilds.cache.forEach((item, i) => {
    kulsayi.push(item.memberCount)
});
var toplamkulsayi = 0
for (var i = 0; i < kulsayi.length; i++) {
    if (isNaN(kulsayi[i])){
        continue;
    }

    toplamkulsayi += Number(kulsayi[i])
}

const row = new ActionRowBuilder()
.addComponents(
  new SelectMenuBuilder()
  .setCustomId("yardım")
  .setPlaceholder('📌 Komut Kategorileri')
  .setMinValues(1)
  .setMaxValues(1)
  .addOptions([
    {
      label: "Admin",
      description: "Bot içerisindeki Admin komutları",
      value:"Admin",
      emoji:"🔐"
  },
  {
    label:"Moderasyon" ,
    description:"Moderasyon Komutlarını Listeler.",
    value:"Moderasyon",
    emoji:"🔰"
  },
  {
    label:"Kullanıcı",
     description:"Kullanıcı Komutlarını Listeler.",
     value:"kullanıcı",
     emoji:"🌐"
 },
    {
      label:'Müzik',
      description:'Müzik Komutlarını Listeler.',
      value:'Müzik',
      emoji: '🎵'
    },
    {
      label:'Filtre',
      description:'Filtre Komutlarını Listeler.',
      value:'Filtre',
      emoji: '🎵'
    },

  {
    label:"Level",
    description:"Level Komutlarını Listeler.",
    value:"Level",
    emoji:"💎"
  },
   
    ])
  )

let s = new EmbedBuilder()
.addFields(

    { name: '\nHakkımda', value: 'KÖLEDİA ADMİNLERİNE MODERASYON , KÖLEDİA KULLANICILARA EĞLENCE İÇİN GELİDMM', inline: false },
    { name: 'Yapılma Tarihim', value: '02/03/2023', inline: false },
    { name: 'Çalışma Sürem', value: `**${moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]')}** `, inline: false },
    { name: 'Komut Sayısı', value: `${client.commands.size}`, inline: true },
    { name: 'Ping', value: `${client.ws.ping}`, inline: true },
    { name: 'Nasıl Kullanırım', value: 'Menüden Görmek İstediğiniz Komutların Kategorisini Seçin.', inline: false },)
    .setFooter({ text: `${message.author.username} Tarafından İstendi.`, iconURL: message.author.displayAvatarURL({dynamic:true}) })
    .setColor("#000001")
    .setImage('https://media.discordapp.net/attachments/1073597011632336977/1080807944096071700/images_1675463140704.jpg')    
message.channel.send({embeds: [s], components: [row]})

},
}
