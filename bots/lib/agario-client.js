class AgarioClient {
  constructor() {
    this.nick = "Bot";
  }

  connect(partyCode, region) {
    console.log(`Bot ${this.nick} intentando conectar a ${partyCode} (${region})...`);
    // Aquí iría la lógica real de conexión al servidor de Agar.io
    setTimeout(() => {
      this.onConnected && this.onConnected();
    }, 1000);
  }

  setFollowMouse(state) {
    console.log(`${this.nick} seguirá el mouse: ${state}`);
  }

  setBurstMode() {
    console.log(`${this.nick} en modo burst 💥`);
  }

  on(event, callback) {
    if (event === "connected") {
      this.onConnected = callback;
    } else if (event === "error") {
      this.onError = callback;
    }
  }
}

module.exports = AgarioClient;
