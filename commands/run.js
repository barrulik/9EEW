const { inspect } = require('util');
module.exports = {
  name: "run",
  async execute(msg, args) {
    let evaled;
    let length = args[0].length + 1;
    evaled = await eval(msg.content.slice(length)).then(() => {
      if (evaled){
        msg.channel.send(inspect(evaled));
      }
    });
  }
};