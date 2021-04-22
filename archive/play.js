module.exports = {
  name: "play",
  execute(msg, args, client) {
    if (!args[1].startsWith("https://www.youtube.com/watch?v=")) return;

    client.utils.get("play-song").execute(msg, args[1]);
  },
};
