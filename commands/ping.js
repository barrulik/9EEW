const { bot, extendCtx } = require("../src/index");

const { SlashCommand } = require("slash-create");

module.exports.default = class PingCommand extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: "ping",
      description: "Returns the bot's ping.",
      guildIDs: "825844248867110912",
    });
    this.filePath = __filename;
  }

  async run(ctx) {
    return `🏓 My ping is ${bot.ws.ping}ms`;
  }
};
