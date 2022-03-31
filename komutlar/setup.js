
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => { 

  let prefix = ayarlar.prefix;
  const embed = new Discord.MessageEmbed()
  .setTitle("MC Server Status | Kurlum Menüsü")
  .setDescription(`Kurulum Menüsüne Hoş geldiniz lütfen sizden istenilen verileri örnekteki gibi yerleştiriniz.`)
  .addField(`${prefix}kur <Sunucuİsmi> <SunucuİpAdresi>`,`Örnek: ${prefix}kur Hypixel mc.hypixel.net`,false)
  .setThumbnail(client.user.avatarURL())
message.channel.send(embed)
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['s','']
  }
  exports.help = {
    name: 'setup'
  }