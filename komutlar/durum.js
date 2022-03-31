
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const util = require('minecraft-server-util');
exports.run = async (client, message, args) => { 

  
let db = require("quick.db").get(`sunucumc.${message.guild.id}`)

if(!db) return message.channel.send("Sunucu ayarlı değil")
  

  util.status(db.ip) 
    .then((response) => { console.log(response);
                         
  let prefix = ayarlar.prefix;
                         
  if(response.host == db.ip) {
    message.channel.send('Sunucu Aktif')
  }
  else if (response.host != db.ip)
    {
      message.channel.send('Sunucu Kapalı')
    }
  
  })
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['','']
  }
  exports.help = {
    name: 'durum'
  }