const AgarClient = require('./lib/agario-client');

function connectBots(partyCode, region, mode) {
  const totalBots = 28;

  for (let i = 0; i < totalBots; i++) {
    const bot = new AgarClient(partyCode, region, mode);
    bot.connect();
  }
}

module.exports = connectBots;
