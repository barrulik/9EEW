const ytdl = require('ytdl-core');
module.exports = {
  name: "play",
  execute(msg, args) {
    msg.member.voice.channel.join().then(connection => {
	  const stream = ytdl(args[1], { filter: 'audioonly' });
	  const dispatcher = connection.play(stream);
	  dispatcher.on('finish', () => voiceChannel.leave());
    })
  }
};
