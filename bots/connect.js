const AgarioClient = require("../lib/agario-client");
require("dotenv").config();

function connectBots(partyCode, region, mode, count) {
  for (let i = 0; i < count; i++) {
    const bot = new AgarioClient();

    bot.nick = process.env.NICKNAME || "Bot";
    bot.connect(partyCode, region);

    bot.on("connected", () => {
      console.log(`${bot.nick} conectado`);
      if (mode === "seguir") {
        bot.setFollowMouse(true);
      } else if (mode === "burst") {
        bot.setBurstMode();
      }
    });

    bot.on("error", (err) => {
      console.error("Bot error:", err);
    });
  }
}

module.exports = connectBots;
