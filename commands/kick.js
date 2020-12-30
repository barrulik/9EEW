module.exports = {
  name: "kick",
  execute(msg) {
    if (!msg.member.hasPermission('KICK_MEMBERS')) {
      msg.channel.send('```you have no permissions to kick members```');
      return;
    }
    let mentionMember = msg.mentions.members.first();
    if (!mentionMember) {
      msg.channel.send('```please mention the user you want to kick```');
      return;
    }
    if (!mentionMember.kickable || mentionMember.id === '332115664179298305') {
      msg.channel.send('```you are not allowed to kick this user```');
      return
    }

    var reason = msg.content.split(' ').slice(2).join(' ');
    mentionMember.send('You got kicked for ' + reason);
    msg.channel.send("<@" + mentionMember + ">" + ' got kicked').catch(err => console.error(err));
    setTimeout(() => { mentionMember.kick(); }, 200);
    msg.channel.send("something went wronge");
  }
};