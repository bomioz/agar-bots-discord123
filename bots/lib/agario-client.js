const WebSocket = require('ws');

class AgarClient {
  constructor(partyCode, region, mode) {
    this.partyCode = partyCode;
    this.region = region;
    this.mode = mode;
    this.ws = null;
  }

  connect() {
    const url = `wss://agar.io/?party_id=${this.partyCode}`;
    this.ws = new WebSocket(url);

    this.ws.on('open', () => {
      console.log(`✅ Bot conectado a ${this.partyCode}`);
      this.sendHello();
    });

    this.ws.on('message', (data) => {
      // Aquí iría la lógica para alimentar, seguir, dividir, etc.
    });

    this.ws.on('close', () => {
      console.log(`🔴 Bot desconectado de ${this.partyCode}`);
    });

    this.ws.on('error', (err) => {
      console.error(`❌ Error de conexión:`, err.message);
    });
  }

  sendHello() {
    const helloMessage = Buffer.from([254, 5, 0, 0, 0]);
    this.ws.send(helloMessage);
  }
}

module.exports = AgarClient;
