module.exports = {
  name: "mute",
  async execute(msg) {
    let role = msg.guild.roles.cache.find(r => r.name === "muted");
    let mentionMember = msg.mentions.members.first();
    let username = mentionMember.user.username + "#" + mentionMember.user.discriminator;
    if (mentionMember.bot) return;
    if (!mentionMember){
      msg.channel.send("please mention the one you want to mute");
      return;
    }
    if (role === undefined) {
      msg.guild.roles.create({ data: { name: 'muted'} })
      msg.channel.send("role was not found")
      return;
    }
    setTimeout(() => {
      msg.guild.channels.cache.forEach(c => c.updateOverwrite(role, { SEND_MESSAGES: false }));
      setTimeout(() => {
        mentionMember.roles.add(role);
        msg.channel.send(username + " is muted now");
      }, 300);
    }, 300);
    
  }
};