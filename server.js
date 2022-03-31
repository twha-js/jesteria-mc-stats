const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const util = require('minecraft-server-util');
const db = require("quick.db");
const fs = require("fs");//gweep creative
require("./util/eventLoader")(client);//gweep creative

//gweep creative
const log = message => {
  console.log(`${message}`);
};
//gweep creative

//gweep creative
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//gweep creative

client.on('ready', async () => {
client.user.setStatus('online');
   setInterval(async () => {
  util.status('mc.hypixel.net') 
    .then((response) => { 
client.user.setActivity(`Şunada Hypixel'de ${response.onlinePlayers} Kişi oyunda`);
  });
     }, 5000);
console.log(`${client.user.username} ismiyle bağlandım.`);
})

client.login(ayarlar.token);



