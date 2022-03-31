
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
exports.run = async (client, message, args) => { 

  let prefix = ayarlar.prefix;
  const embed = new Discord.MessageEmbed()
  .setTitle("MC Server Status | Sosyal Menüsü")
  .setDescription(`İşte Sosyal Medyada Biz. \n <:sevenkingdoms9:831063845580963850> [Discord](https://discord.gg/rabel) \n <:tw:831064262825869332> [Twitch](https://twtich.tv/gweepcreative) \n <:YouTube:831064191486001155> [Youtube](https://youtube.com/GweepCreativeOfficial)`)
  .setThumbnail(client.user.avatarURL())
message.channel.send(embed)
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['social','']
  }
  exports.help = {
    name: 'sosyal'
  }