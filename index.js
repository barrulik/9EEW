/**
 * Module Imports
 */
const sqlite3 = require('sqlite3').verbose();
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const config = require("./config.json");


const client = new Client({ disableMentions: "everyone" });

client.commands = new Collection();
client.utils = new Collection();
client.prefix = config.PREFIX;
client.queue = new Map();

/**
 * Client Events
 */

client.on("ready", () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setActivity(`Servers`, { type: "WATCHING" });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */

const commandFiles = readdirSync("./commands").filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require("./commands/" + file);
  client.commands.set(command.name, command);
}

const utilFiles = readdirSync("./utils").filter((file) => file.endsWith(".js"));
for (const file of utilFiles) {
  const util = require("./utils/" + file);
  client.utils.set(util.name, util);
}


client.on("message", async (msg) => {
  if (msg.author.bot) return;


  let args_with_prefix = msg.content.split(" ");
  let emoji_output = "";
  let had_emoji = false;
  for(let i=0;i<args_with_prefix.length && config.EmojisForPoorUsers;i++){
    if (args_with_prefix[i].startsWith(":") && args_with_prefix[i].endsWith(":")){
      let emoji = msg.guild.emojis.cache.find(emoji => ":"+ emoji.name +":" === args_with_prefix[i]);
      if (emoji){
        emoji_output = emoji_output + emoji.toString() + " ";
        had_emoji = true;
      }
    } else {
      emoji_output = emoji_output + args_with_prefix[i] + " ";
    }
  }
  if (had_emoji){
    msg.channel.send(msg.author.username + "#" + msg.author.discriminator + " - \n" + emoji_output);
    msg.delete();
  }

  if(!msg.content.startsWith(client.prefix)) return;
  const arg = msg.content.slice(config.PREFIX.length).trim().split(" ");
  const userCommand = arg[0].toLowerCase();

  const command = client.commands.get(userCommand);
  if (!command) return;


  try {
    command.execute(msg, arg, client);
  } catch (error) {
    console.error(error);
    msg.channel.send("404 | something went wrong").catch(console.error);
  }
});


client.on('guildMemberAdd', async member => {
  member.kick();
  if (Date.now() - member.user.createdAt < 1000 * 60 * 60 * 24 * config.new_account_days && config.AntirRaid) {
    member.kick();
    return;
  }
  if (config.Welcomer) {
    let username = member.user.username + "#" + member.user.discriminator;
    let Discord = require('discord.js');
    const Embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Welcome')
      .setThumbnail(member.user.avatarURL())
      .setDescription(username + " just joined the server")
      .setTimestamp();
    setTimeout(() => {
      client.channels.cache.get(config.welcomeChannel).send(Embed);
    }, 1000);
  }
});

client.on('guildMemberRemove', async member => {
  if (config.Welcomer) {
    let username = member.user.username + "#" + member.user.discriminator;
    let Discord = require('discord.js');
    const Embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Goodbye')
      .setThumbnail(member.user.avatarURL())
      .setDescription(username + " just left the server")
      .setTimestamp();
    setTimeout(() => {
      client.channels.cache.get(config.welcomeChannel).send(Embed);
    }, 1000);
  }
});

const Discord = require('discord.js');
const api = require("imageapi.js");
//please install imageapi.js !
//memes

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(config.TOKEN)
