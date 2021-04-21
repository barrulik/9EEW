module.exports = {
  name: "unmute",
  async execute(msg) {
    let role = msg.guild.roles.cache.find(r => r.name === "muted");
    let mentionMember = msg.mentions.members.first();
    let username = mentionMember.user.username + "#" + mentionMember.user.discriminator;
    if (mentionMember.bot) return;
    if (!mentionMember){
      msg.channel.send("please mention the user you want to mute");
      return;
    }
    if (role === undefined) {
      msg.guild.roles.create({ data: { name: 'muted'} })
    }
    setTimeout(() => {
      msg.guild.channels.cache.forEach(c => c.updateOverwrite(role, { SEND_MESSAGES: false }));
      setTimeout(() => {
        mentionMember.roles.remove(role);
        msg.channel.send(username + " is unmuted now");
      }, 300);
    }, 300);
    
  }
};