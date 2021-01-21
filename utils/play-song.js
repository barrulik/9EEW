const ytdl = require('ytdl-core');
module.exports = {
  name: "play-song",
  execute(msg, songURL) {
    msg.member.voice.channel.join().then(connection => {
	  const stream = ytdl(songURL, { filter: 'audioonly' });
	  const dispatcher = connection.play(stream);
	  dispatcher.on('finish', () =>{
       msg.member.voice.channel.leave();
      });
    })
  }
};