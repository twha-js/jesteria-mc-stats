const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => { 

  let prefix = ayarlar.prefix;
  const embed = new Discord.MessageEmbed()
  .setTitle("MC Server Status | Yardım Menüsü")
  .setDescription(`\` ${prefix}sosyal \` komutu ile bize destek olabilirsiniz`)
  .addField(`${prefix}setup`,`Botu Ayarlamanızı Sağlar`,true)
  .addField(`${prefix}sıfırla`,`Botu Sıfırlamanızı Sağlar`,true)
  .addField(`${prefix}bilgi`,`Ayarlanılan Sunucu Hakkında Bilgileri verir`,true)
  .addField(`${prefix}ip`,`Ayarlanınlan Sunucunun IP adresini gösterir`,true)
  .addField(`${prefix}sosyal`,`Sosyal Medyada Biz`,false)
  .setThumbnail(client.user.avatarURL())
  .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL())
message.channel.send(embed)
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h','']
  }
  exports.help = {
    name: 'yardım'
  }