/**
 * Module Imports
 */
const sqlite3 = require('sqlite3').verbose();
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const config = require("./config.json");


const client = new Client({ disableMentions: "everyone" });

client.login(config.TOKEN);

client.commands = new Collection();
client.prefix = config.PREFIX;
client.queue = new Map();

/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setActivity(`after everyone, being a stalker is fun`, { type: "WATCHING" });
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


  if (config.memer) {
    let dad_jokes_arg = msg.content.split(" ");
    for (let i = 0; i + 1 < dad_jokes_arg.length; i++) {
      if (dad_jokes_arg[i] === "אני" || dad_jokes_arg[i] === "שאני") {
        let output = dad_jokes_arg.slice(i + 1).join(" ").trim();
        msg.channel.send("שלום " + output + ", אני ריק אסטלי");
        return;
      }
    }
  }

  const arg = msg.content.substring(config.PREFIX.length).split(" ");
  const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;

  const now = Date.now();

  try {
    command.execute(msg, arg, client);
  } catch (error) {
    console.error(error);
    msg.channel.send("something went wrong").catch(console.error);
  }




});


client.on('guildMemberAdd', async member => {
  if (Date.now() - member.user.createdAt < 1000 * 60 * 60 * 24 * config.new_account_days && config.AntirRaid) {
    member.kick()
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