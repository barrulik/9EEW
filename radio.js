
const { canModifyQueue } = require("../util/nkm");
const { play } = require("../include/play");
const { attentionembed } = require("../util/attentionembed"); 
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { PREFIX } = require(`../config.json`);
//all radio stations
const Radiostations = [
  "Standard-Radio https://streams.ilovemusic.de/iloveradio14.mp3",
  "Base-Radio.de https://baseradiode.stream.laut.fm/baseradiode",
  "Chill-Radio https://streams.ilovemusic.de/iloveradio17.mp3",
  "Dance-Radio https://streams.ilovemusic.de/iloveradio2.mp3",
  "Deutsch-Rap-Radio https://streams.ilovemusic.de/iloveradio6.mp3",
  "Greatest-hits-Radio https://streams.ilovemusic.de/iloveradio16.mp3",
  "Hip-hop-Radio https://streams.ilovemusic.de/iloveradio3.mp3",
  "Party-Radio https://streams.ilovemusic.de/iloveradio14.mp3",
  "Us-Rap-Radio https://streams.ilovemusic.de/iloveradio13.mp3",
  "X-Mas-Radio https://streams.ilovemusic.de/iloveradio8.mp3",
  "Greatest-hits-Radio https://stream-mz.planetradio.co.uk/net2national.mp3", 
  "Absolut-Radio http://icy-e-bab-02-gos.sharp-stream.com/absoluteradio.mp3",
  "Absolut-70s-Radio http://ais.absoluteradio.co.uk/absolute70s.mp3",
  "Absolut-80s-Radio http://ais.absoluteradio.co.uk/absolute80s.mp3",
  "Absolut-90s-Radio http://ais.absoluteradio.co.uk/absolute90s.mp3",
  "Absolut-2000s-Radio http://ais.absoluteradio.co.uk/absolute00s.mp3",
  "Absolut-Classic-Rock http://icy-e-bab-04-cr.sharp-stream.com/absoluteclassicrock.mp3",

  "Top-Radio http://loadbalancing.topradio.be/topradio.mp3", 

  "88.6-Radio http://radio886.fluidstream.eu/886_live.mp3", 
  "Kronehit-Radio http://onair.krone.at/kronehit.mp3", 

  "NRJ-Radio http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3",
  "Radio-France-Radio http://direct.fipradio.fr/live/fip-midfi.mp3",

  "Rai-Radio http://icestreaming.rai.it:80/1.mp3",
  "Veronica-Radio http://icestreaming.rai.it:80/2.mp3",

  "ERR-Radio http://icecast.err.ee:80/vikerraadio.mp3",
  "Tallin-Radio http://icecast.err.ee:80/raadiotallinn.mp3",

  "Color-Music-Radio http://icecast8.play.cz/color128.mp3",
  "Helax-93.7-Radio http://ice.abradio.cz:8000/helax128.mp3",

  "Český-rozhlas-Radio http://icecast6.play.cz/cro2-128.mp3",
  "Spin-Radio http://icecast4.play.cz/spin128.mp3",

  "BB-Radio http://icecast.omroep.nl/radio1-bb-mp3",
  "538-Radio http://21223.live.streamtheworld.com/RADIO538.mp3",

  "radio90-cieszyn http://streams2.radio90.pl:8000/radio90_128kbps_stereo.mp3",
  "Fama-Radio http://stream2.nadaje.com:8076/,stream.mp3"
]

module.exports = {
  name: "radio",
  description: "Play a Radiostation",
  cooldown: 3,
  edesc: `Type this command to play a radio live stream!\nUsage: ${PREFIX}radio <1-34>`,
 async execute(message, args, client) {
 
  let resultsEmbed = new Discord.MessageEmbed()
      .setTitle(`**✅ Available Radio Stations**`)//
      .addFields(
        { name: `***   Standard Radio***`, value: `**1:  ** [\`${Radiostations[1-1].split(" ")[0]}\`](${Radiostations[1-1].split(" ")[1]})
        **2:  ** [\`${Radiostations[2-1].split(" ")[0]}\`](${Radiostations[2-1].split(" ")[1]})
        **3:  ** [\`${Radiostations[3-1].split(" ")[0]}\`](${Radiostations[3-1].split(" ")[1]})
        **4:  ** [\`${Radiostations[4-1].split(" ")[0]}\`](${Radiostations[4-1].split(" ")[1]})
        **5:  ** [\`${Radiostations[5-1].split(" ")[0]}\`](${Radiostations[5-1].split(" ")[1]})
        ` , inline: true}, { name: `***   Standard Radio***`, value: `**6:  ** [\`${Radiostations[6-1].split(" ")[0]}\`](${Radiostations[6-1].split(" ")[1]})
        **7:  ** [\`${Radiostations[7-1].split(" ")[0]}\`](${Radiostations[7-1].split(" ")[1]})
        **8:  ** [\`${Radiostations[8-1].split(" ")[0]}\`](${Radiostations[8-1].split(" ")[1]})
        **9:  ** [\`${Radiostations[9-1].split(" ")[0]}\`](${Radiostations[9-1].split(" ")[1]})
        **10: ** [\`${Radiostations[10-1].split(" ")[0]}\`](${Radiostations[10-1].split(" ")[1]})
        ` , inline: true},
        { name: `\u200b`, value: `\u200b` , inline: true},

        { name: `***🇬🇧 British RADIO:***`, value: `**11: ** [\`${Radiostations[11-1].split(" ")[0]}\`](${Radiostations[11-1].split(" ")[1]})
**12: ** [\`${Radiostations[12-1].split(" ")[0]}\`](${Radiostations[12-1].split(" ")[1]})
` , inline: true},
{ name: `***🇬🇧 British RADIO:***`, value: `
**13: ** [\`${Radiostations[13-1].split(" ")[0]}\`](${Radiostations[13-1].split(" ")[1]})
**14: ** [\`${Radiostations[14-1].split(" ")[0]}\`](${Radiostations[14-1].split(" ")[1]})
` , inline: true},
{ name: `***🇬🇧 British RADIO:***`, value: `
**15: ** [\`${Radiostations[15-1].split(" ")[0]}\`](${Radiostations[15-1].split(" ")[1]})
**16: ** [\`${Radiostations[16-1].split(" ")[0]}\`](${Radiostations[16-1].split(" ")[1]})
` , inline: true},

{ name: `***🇦🇺 AUSTRALIA RADIO:***`, value: `**17: ** [\`${Radiostations[17-1].split(" ")[0]}\`](${Radiostations[17-1].split(" ")[1]})
**18: ** [\`${Radiostations[18-1].split(" ")[0]}\`](${Radiostations[18-1].split(" ")[1]})`, inline: true  },
       
{ name: `***   AUSTRIA RADIO:***`, value: `**19: ** [\`${Radiostations[19-1].split(" ")[0]}\`](${Radiostations[19-1].split(" ")[1]})
**20: ** [\`${Radiostations[20-1].split(" ")[0]}\`](${Radiostations[20-1].split(" ")[1]})`, inline: true },

        { name: `***🇫🇷 France RADIO:***`, value: ` **21: ** [\`${Radiostations[21-1].split(" ")[0]}\`](${Radiostations[21-1].split(" ")[1]})
**22: ** [\`${Radiostations[22-1].split(" ")[0]}\`](${Radiostations[22-1].split(" ")[1]})`, inline: true },

        { name: `***🇮🇹 Italy RADIO:***`, value: `**23: ** [\`${Radiostations[23-1].split(" ")[0]}\`](${Radiostations[23-1].split(" ")[1]})
**24: ** [\`${Radiostations[24-1].split(" ")[0]}\`](${Radiostations[24-1].split(" ")[1]})`, inline: true },

        { name: `***🇪🇪 Estonia RADIO:***`, value: `**25: ** [\`${Radiostations[25-1].split(" ")[0]}\`](${Radiostations[25-1].split(" ")[1]})
**26: ** [\`${Radiostations[26-1].split(" ")[0]}\`](${Radiostations[26-1].split(" ")[1]})`, inline: true },

        { name: `***🇪🇸 Spain RADIO:***`, value: `**27: ** [\`${Radiostations[27-1].split(" ")[0]}\`](${Radiostations[27-1].split(" ")[1]})
**28: ** [\`${Radiostations[28-1].split(" ")[0]}\`](${Radiostations[28-1].split(" ")[1]})`, inline: true },

        { name: `***🇨🇿 Czech RADIO:***`, value: `**29: ** [\`${Radiostations[29-1].split(" ")[0]}\`](${Radiostations[29-1].split(" ")[1]})
**30: ** [\`${Radiostations[30-1].split(" ")[0]}\`](${Radiostations[30-1].split(" ")[1]})`, inline: true },

        { name: `***🇳🇱 Netherlands RADIO:***`, value: `**31: ** [\`${Radiostations[31-1].split(" ")[0]}\`](${Radiostations[31-1].split(" ")[1]})
**32: ** [\`${Radiostations[32-1].split(" ")[0]}\`](${Radiostations[32-1].split(" ")[1]})`, inline: true },

        { name: `***🇵🇱 Polska RADIO:***`, value: `**33: ** [\`${Radiostations[33-1].split(" ")[0]}\`](${Radiostations[33-1].split(" ")[1]})
**34: ** [\`${Radiostations[34-1].split(" ")[0]}\`](${Radiostations[34-1].split(" ")[1]})`, inline: true },
      )		
      .setColor("#c219d8")
      .setFooter(`Type: ${PREFIX}radio <1-34>`,  client.user.displayAvatarURL())
      .setTimestamp();
        
  if(!message.guild)      
      return message.author.send(resultsEmbed);      
    
    if (args[0] == null) {
      message.channel.send(    new MessageEmbed().setColor("#c219d8")
      .setDescription(`**👍 ${message.author} Check your \`direct messages\` for a list of Radio Stations!**`)
       );
       message.author.send(new MessageEmbed().setColor("#c219d8")
       .setDescription(`**👍 Sent from <#${message.channel.id}>**`))
      return message.author.send(resultsEmbed);
    }
  const { channel } = message.member.voice;
 
  const serverQueue = message.client.queue.get(message.guild.id);

  if (!channel) return attentionembed(message, "Please join a Voice Channel first");  
  
    message.react("✅");
    if (serverQueue && channel !== message.guild.me.voice.channel)
    return attentionembed(message, `You must be in the same Voice Channel as me`);
   
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return attentionembed(message,"I need permissions to join your channel!");
    if (!permissions.has("SPEAK"))
      return attentionembed(message,"I need permissions to speak in your channel");

    if(isNaN(args[0])) {
      channel.leave();
      return message.reply(
      new MessageEmbed()
      .setColor("#ff0e7a")
      .setTitle( `Not a valid radio station please use a Number between \`1\` and \`${Radiostations.length}\``)
     );}

let i;


for(i=1; i <= 1 + Radiostations.length; i++){

  if(Number(args[0])===Number(i)) {
    break;
  } 
}

if(Number(i) === 35) {
  channel.leave();
  return message.reply(  new MessageEmbed()
.setColor("#ff0e7a")
.setTitle( `Not a valid radio station please use a Number between \`1\` and \`${Radiostations.length}\``));}

const args2 = Radiostations[i-1].split(` `);

const song = {
  title: args2[0],
  url: args2[1],
  thumbnail: "",
  duration: 10000,
};
let a, b;
if(!serverQueue){
  a=[];
  b=0;
}else{
  a = serverQueue.filters;
  b = serverQueue.realseek;
}

const queueConstruct = {
  textChannel: message.channel,
  channel,
  connection: null,
  songs: [],
  loop: false,
  volume: 25,
  filters: a,
  realseek: b,
  playing: true
};

queueConstruct.connection = await channel.join().catch(console.error);

if(!serverQueue)
message.channel.send(    new MessageEmbed().setColor("#c219d8")
.setDescription(`**👍 Joined \`${channel.name}\`\`#${message.channel.name}\`**`)
.setFooter(`${message.author.username}#${message.author.discriminator}`));

message.channel.send(new MessageEmbed().setColor("#c219d8")
.setDescription(`** Searching... \`${Radiostations[i-1].split(" ")[0]}\`**`));

await queueConstruct.connection.voice.setSelfDeaf(true);
await queueConstruct.connection.voice.setDeaf(true);

if (serverQueue) {
  
  let estimatedtime = Number(0);
  for (let i = 0; i < serverQueue.songs.length; i++) {
    estimatedtime += Number(serverQueue.songs[i].duration);
  }
  if (estimatedtime > 60) {
    estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
    estimatedtime = estimatedtime + " Minutes"
  }
  else if (estimatedtime > 60) {
    estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
    estimatedtime = estimatedtime + " Hours"
  }
  else {
    estimatedtime = estimatedtime + " Seconds"
  }
 
  serverQueue.songs.push(song);

  const newsong = new MessageEmbed()
    .setTitle("✅ " + song.title)
    .setColor("#c219d8")
    .setThumbnail(song.thumbnail)
    .setURL(song.url)
    .setDescription(`\`\`\`Has been added to the Queue.\`\`\``)
    .addField("Estimated time until playing:", `\`${estimatedtime}\``, true)
    .addField("Position in queue", `**\`${serverQueue.songs.length - 1}\`**`, true)
    .setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
  //send the Embed into the Queue Channel
    return serverQueue.textChannel
    .send(newsong)
    .catch(console.error);
  
}
//add it to the Queue
queueConstruct.songs.push(song);
//set the Server Queue
message.client.queue.set(message.guild.id, queueConstruct);

try {
  play(queueConstruct.songs[0], message, client);     
} catch (error) {
  console.error(error);
  message.client.queue.delete(message.guild.id);
  await channel.leave();
  return message.channel.send(`Could not join the channel: ${error}`).catch(console.error);
}
  
 }
};
