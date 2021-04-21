const api = require("imageapi.js");
const Discord = require("discord.js")
module.exports = {
  name: "meme",
  async execute(msg) {
    let subreddits = [
      "memes"
    ];
    let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
    let img = await api(subreddit)
    const Embed = new Discord.MessageEmbed()
    .setTitle('Meme.exe')
    .setURL(`https://www.reddit.com/r/arabfunny`)
    .setColor('RANDOM')
    .setImage(img)
    msg.channel.send(Embed);
  }
};
