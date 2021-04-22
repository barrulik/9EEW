module.exports = {
  name: "ping",
  execute(msg) {
    msg.channel.send("Pinging...").then((sent) => {
      sent.edit(
        `Roundtrip latency: ${sent.createdTimestamp - msg.createdTimestamp}ms`
      );
    });
  },
};
