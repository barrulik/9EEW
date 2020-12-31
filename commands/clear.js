const { inspect } = require('util');
module.exports = {
  name: "clear",
  async execute(msg, args) {
    if (msg.member.hasPermission('MANAGE_MESSAGES')) {
      if (isNaN(args[1])){
        msg.channel.send("please write how many messages to delete like !clear amount");
        return;
      }
      msg.channel.bulkDelete(parseInt(args[1])+1)
      .then(msg.channel.send("seccessfully deleted " + args[1] + " messages")).catch(error => console.error(error));
    }
  }
};