require("dotenv").config(); // load env vars

/**
 * Module Imports
 */

const path = require("path");
const fs = require("fs");
const Discord = require("discord.js");
const { Guild, GuildMember, User } = require("discord.js");
const { SlashCreator, GatewayServer, CommandContext } = require("slash-create");
const client = new Discord.Client({ disableMentions: "everyone" });
const creator = new SlashCreator({
  applicationID: process.env.CLIENT_ID,
  publicKey: process.env.PUBKEY,
  token: process.env.TOKEN,
});

module.exports.bot = client;

fs.readdirSync("./src/models", "utf-8").forEach((file) =>
  require(`./models/${file}`)
);
/**
 * Slash Commands
 */

/**
 * @typedef {Object} ExtendedCtx
 * @property {Guild} guild
 * @property {GuildMember} member
 * @property {User} user
 */

/**
 *
 * @param {CommandContext} ctx
 * @returns {ExtendedCtx}
 */

module.exports.extendCtx = async (ctx) => {
  const guild = await client.guilds.fetch(ctx.guildID);
  const member = await guild.members.fetch(ctx.member.id);

  if (!guild || !member) throw new Error("404");
  return {
    guild,
    member,
    user: member.user,
  };
};

creator
  .withServer(
    new GatewayServer((handler) => client.ws.on("INTERACTION_CREATE", handler))
  )
  .registerCommandsIn(path.join(__dirname, "../commands"))
  .syncCommands()
  .syncCommandsIn("825844248867110912");

/**
 * Client Events
 */

client.on("ready", () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setActivity(`${client.guilds.cache.size} guilds`, {
    type: "WATCHING",
  });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

client.on("message", async (msg) => {
  if (msg.author.bot) return;
});

client.login(process.env.TOKEN);
