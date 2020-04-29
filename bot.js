const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('rede');

});

 

client.on('message', message => {
    if (message.content === '@CTI') {
       message.reply('apa mek');
       }
	 
	 if (message.content === '/uts') {
	message.channel.send({embed: {
  "title": "Jadwal UTS",
      "description": "**Senin**\nSistem Operasi Dasar = 07.30 - 09.10\nBasis Data Lanjut = 13.30 - 15.10\n\n**Selasa**\nB.Ing = 07.30 - 09.10\nIMK = 13.30 - 15.10\n\n**Rabu**\nAljabar Matriks = 07.30 - 09.10\n\n**Kamis**\n-\n\n**Jumat**\nPBO = 07.30 - 09.10",
      "color": 4437415
}});}

});

 



client.login(process.env.BOT_TOKEN);
