module.exports = {
  name: "mute",
  async execute(msg) {
    let username = msg.author.username + "#" + msg.author.discriminator;
    let role = msg.guild.roles.cache.find(r => r.name === "muted");
    let mentionMember = msg.mentions.members.first();
    if (mentionMember.bot) return;
    if (!mentionMember){
      msg.channel.send("please mention the one you want to mute");
      return;
    }
    if (role === undefined) {
      msg.guild.roles.create({ data: { name: 'muted'} })
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