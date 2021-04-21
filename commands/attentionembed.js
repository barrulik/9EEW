const {  MessageEmbed } = require("discord.js");

module.exports = {
 async  attentionembed(message, title) {

    try{
      await message.reactions.removeAll();
       await message.react("");
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle(titel)
      .setColor("#ff0e7a")
      
      message.channel.send(resultsEmbed);
    return;

  }
};
