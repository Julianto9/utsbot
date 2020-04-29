const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('**Senin** Sistem Operasi Dasar = 07.30 - 09.10 Basis Data Lanjut = 13.30 - 15.10');
       }
	 if (message.content === 'pipik') {
       message.reply('**Senin** Sistem Operasi Dasar = 07.30 \n09.10 Basis Data Lanjut = 13.30 - 15.10');
       }
	 if (message.content === '/uts') {
	message.channel.send({embed: {
  "title": "Jadwal UTS",
      "description": "**Senin**\nSistem Operasi Dasar = 07.30 - 09.10\nBasis Data Lanjut = 13.30 - 15.10\n\n**Selasa**\nB.Ing = 07.30 - 09.10\nIMK = 13.30 - 15.10\n\n**Rabu**\nAljabar Matriks = 07.30 - 09.10\n\n**Kamis**\n-\n\n**Jumat**\nPBO = 07.30 - 09.10",
      "color": 4437415
}});}

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
