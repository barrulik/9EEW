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
  client.user.setActivity(`after everyone, being a stoker is fun`, { type: "WATCHING" });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */

const commandFiles = readdirSync("./commands").filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require("./commands" + file);
  client.commands.set(command.name, command);
}

client.on("message", async (msg) => {
  if (Date.now() - member.user.createdAt < 1000*60*60*24*10) {
    msg.member.addRole(role);
  }
  if (msg.author.bot) return;

  const arg = msg.content.substring(config.PREFIX.length).split(" ");
  const args = msg.content.slice(client.PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;

  const now = Date.now();


  try {
    command.execute(msg, arg);
  } catch (error) {
    console.error(error);
    msg.channel.send("something went wrong").catch(console.error);
  }
});


client.on("guildMemberAdd", member => {
  if (Date.now() - member.user.createdAt < 1000*60*60*24*10) {
    member.addRole(role);
  }
});