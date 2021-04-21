module.exports = {
  name: "warn",
  execute(msg) {
    let mentionMember = msg.mentions.members.first();

    if (!mentionMember) {
      msg.channel.send('please mention the user you want to warn');
      return;
    }
    if (mentionMember.roles.highest.position>= msg.member.roles.highest.position) {
      msg.channel.send("you can't warn someone that is higher then you in the hierarchy");
      return;
    }

    let reason = msg.content.split(' ').slice(2).join(' ');
    mentionMember.send('You got warned for ' + reason + " in " + msg.guild.name);
    msg.channel.send("<@" + mentionMember + ">" + ' got warned for ' + reason);
  }
};