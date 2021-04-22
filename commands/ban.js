const { bot, extendCtx } = require("../src/index");
const {
  SlashCommand,
  CommandOptionType,
  CommandContext,
} = require("slash-create");

module.exports.default = class BanCommand extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: "ban",
      description: "Bans a user.",
      guildIDs: "825844248867110912",
      requiredPermissions: ["BAN_MEMBERS"],
      options: [
        {
          type: CommandOptionType.USER,
          required: true,
          name: "user",
          description: "The user you want to ban",
        },
        {
          type: CommandOptionType.STRING,
          required: false,
          name: "reason",
          description: "Reason for the ban",
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
    const banMember = await data.guild.members.fetch(ctx.options.user);
    if (
      data.member.guild.owner.id !== data.member.id &&
      data.member.roles.highest.position <= banMember.roles.highest.position
    ) {
      return `ERROR: Your rank is lower than or the same position as <@${banMember.id}>'s`;
    }
    if (!banMember.bannable)
      return `ERROR: I don't have permission to ban this member!`;
    try {
      await banMember.ban({
        reason: `Banned by ${data.user.tag} for ${
          ctx.options.reason ? ctx.options.reason : "no reason provided"
        }`,
      });
    } catch (err) {
      return `Couldn't ban ${banMember.user.tag}: Unknown Error`;
    }

    return `Banned ${banMember.user.tag}`;
  }
};
