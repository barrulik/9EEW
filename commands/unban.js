module.exports = {
  name: "unban",
  execute(msg, args) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) {
      msg.channel.send('you have no permissions to unban members');
      return;
    }
    if (!msg.guild.me.hasPermission("BAN_MEMBERS")) {
      msg.channel.send(`**${msg.author.username}**, I do not have perms to unban someone`)
      return;
    }

    msg.channel.send('user got unbaned');
    setTimeout(() => {
      let username = args[1];
      msg.guild.fetchBans().then(bans => {
        if (bans.size == 0) return;
        let bUser = bans.find(b => b.user.username + "#" + b.user.discriminator == username);
        if (!bUser) {
          msg.channel.send("i didnt find that user");
          return;
        }
        msg.guild.members.unban(bUser.user.id)
      })
    }, 200);
  }
};