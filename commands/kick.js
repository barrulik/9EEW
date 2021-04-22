const { bot, extendCtx } = require("../src/index");
const {
  SlashCommand,
  CommandOptionType,
  CommandContext,
} = require("slash-create");

module.exports.default = class KickCommand extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: "kick",
      description: "Kicks a user.",
      guildIDs: "825844248867110912",
      requiredPermissions: ["KICK_MEMBERS"],
      options: [
        {
          type: CommandOptionType.USER,
          required: true,
          name: "user",
          description: "The user you want to kick",
        },
        {
          type: CommandOptionType.STRING,
          required: false,
          name: "reason",
          description: "Reason for the kick",
        },
      ],
    });
    this.filePath = __filename;
  }

  /**
   *
   * @param {CommandContext} ctx
   */
  async run(ctx) {
    const data = await extendCtx(ctx);
    const kickMember = await data.guild.members.fetch(ctx.options.user);
    if (
      data.member.guild.owner.id !== data.member.id &&
      data.member.roles.highest.position <= kickMember.roles.highest.position
    ) {
      return `ERROR: Your rank is lower than or the same position as <@${kickMember.id}>'s`;
    }
    if (!kickMember.kickable)
      return `ERROR: I don't have permission to ban this member!`;
    try {
      await kickMember.kick({
        reason: `Kicked by ${data.user.tag} for ${
          ctx.options.reason ? ctx.options.reason : "no reason provided"
        }`,
      });
    } catch (err) {
      return `Couldn't kick ${kickMember.user.tag}: Unknown Error`;
    }

    return `Kicked ${kickMember.user.tag}`;
  }
};
