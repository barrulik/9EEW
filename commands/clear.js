const { inspect } = require('util');
module.exports = {
  name: "clear",
  async execute(msg, args) {
    if (msg.member.hasPermission('MANAGE_MESSAGES')) {
      if (isNaN(args[1])){
        msg.channel.send("please specify how many messages to delete : ```g?clear amount```");
        return;
      }
      if (args[1]>=200){
        msg.channel.send("i can't delete more then 200 messages !")
        return;
      }
      msg.channel.bulkDelete(parseInt(args[1])+1)
        .catch(error => console.error(error))
          .then(msg.channel.send("successfully deleted " + args[1] + " messages"));
    }
  }
};