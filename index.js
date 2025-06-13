require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const connectBots = require('./bots/connect');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`✅ Bot listo como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith('!bots') || message.author.bot) return;

  const args = message.content.split(' ');
  if (args.length < 4) {
    return message.channel.send('Uso correcto: `!bots <código_party> <región> <modo>`');
  }

  const [_, code, region, mode] = args;
  connectBots(code, region, mode);
  message.channel.send(`🟢 Enviando bots a la party ${code} (${region}) en modo ${mode}`);
});

client.login(process.env.DISCORD_TOKEN);
