module.exports = {
  name: "ban",
  execute(msg, args) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) {
      msg.channel.send('you have no permissions to ban members');
      return;
    }
    let mentionMember = msg.mentions.members.first();
    if (!mentionMember) {
      msg.channel.send('please mention the user you want to ban');
      return;
    }
    if (!mentionMember.kickable || mentionMember.id === '332115664179298305') {
      msg.channel.send('you are not allowed to ban this user');
      return;
    }

    let reason = msg.content.split(' ').slice(2).join(' ');
    mentionMember.send('you got banned for ' + reason + " in " + msg.guild.name);
    msg.channel.send("<@" + mentionMember + ">" + 'got banned');
    setTimeout(() => { mentionMember.ban(); }, 200);
  }
};