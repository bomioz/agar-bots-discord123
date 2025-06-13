require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const connectBots = require("./bots/connect");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "!ping") {
    msg.reply("Pong!");
  }

  if (msg.content.startsWith("!bots")) {
    const args = msg.content.split(" ");
    if (args.length !== 4) {
      msg.reply("Uso correcto: `!bots <código_party> <región> <modo>`");
      return;
    }

    const [, partyCode, region, mode] = args;
    connectBots(partyCode, region, mode, 28); // 28 bots
    msg.reply(`🧠 Enviando bots al party **${partyCode}** en **${region}**, modo: **${mode}**`);
  }
});

client.login(process.env.DISCORD_TOKEN);
