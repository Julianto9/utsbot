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

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
