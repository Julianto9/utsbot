const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');
 });



client.on('message', message => {
    if(message.author.bot === false) {
	    if (message.content === 'wes') {
       		message.channel.send('wes');
       }
}


if (message.content === '/tolong') {message.channel.send('toloooooooooooooooooooooooooooooong');}
if (message.content === '/so'){message.channel.send("absen so" + "<@everyone>");message.channel.send("absen so" + "<@everyone>");message.channel.send("absen so" + "<@everyone>");}
	 
	 if (message.content === '/uts') {
	message.channel.send({embed: {
  "title": "Jadwal UTS",
      "description": "**Senin**\nSistem Operasi Dasar = 07.30 - 09.10\nBasis Data Lanjut = 13.30 - 15.10\n\n**Selasa**\nB.Ing = 07.30 - 09.10\nIMK = 13.30 - 15.10\n\n**Rabu**\nAljabar Matriks = 07.30 - 09.10\n\n**Kamis**\n-\n\n**Jumat**\nPBO = 07.30 - 09.10",
      "color": 4437415
									}});}
									
	if (message.content === '/help') {
	message.channel.send({embed: {
      "title": "Commands",
      "description": "**/help** : tolng\n**/uts** : jadwal uts\n**/tolong** : tolong",
      "color": 7506394,
      "thumbnail": {
        "url": "https://i1.sndcdn.com/avatars-000042341361-yma5yn-t500x500.jpg"
      }}});}

});

 



client.login(process.env.BOT_TOKEN);
