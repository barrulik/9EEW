module.exports = {
  name: "bonk",
  execute(msg) {
    let mentionMember = msg.mentions.members.first();

    if (!mentionMember) {
      msg.channel.send('please mention the user you want to bonk');
      return;
    }

    let output = "<@" + mentionMember.id + "> got bonked by <@" + msg.author.id + ">\n";
    let bonk_gifs = ["https://tenor.com/view/bonk-gif-18805247", "https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755", "https://tenor.com/view/bonk-meme-dog-doge-gif-14889944", "https://tenor.com/view/bonk-gif-19410756", "https://tenor.com/view/bonk-gif-18272416", "https://tenor.com/view/yoshi-hammer-idiot-bonk-gif-17119858", "https://tenor.com/view/despicable-me-minions-bonk-hitting-cute-gif-17663380", "https://i.imgur.com/t1a9akh.gif", "https://tenor.com/view/sad-cat-bonk-hammer-crying-cat-gif-17177807"]
    let random = Math.floor(Math.random()*bonk_gifs.length);
    output = output + bonk_gifs[random];
    msg.channel.send(output);
  }
};