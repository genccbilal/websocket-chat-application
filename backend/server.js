const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 3000 });
const connections = new Map();

// Kullanıcı ID ve isimleri
const users = {
  1: "Bilal",
  2: "Ahmet",
  3: "Mehmet",
};

server.on("connection", (socket) => {
  if (connections.size >= 2) {
    socket.close();
    return console.log("Sunucu dolu! Bağlantı reddedildi.");
  }

  socket.on("message", (message) => {
    const data = JSON.parse(message);

    if (!data.userId || !data.partnerId) return;

    // Eğer sender (gönderen adı) yoksa, kullanıcı ID'sinden ismi ekle
    if (!data.sender) {
      data.sender = users[data.userId];
    }

    // Kullanıcının bağlantısını kaydet
    if (!connections.has(data.userId)) {
      connections.set(data.userId, socket);
    }

    // Eğer partner bağlıysa mesajı ona gönder
    if (connections.has(data.partnerId)) {
      connections.get(data.partnerId).send(JSON.stringify(data));
    }
  });

  socket.on("close", () => {
    // Kullanıcı bağlantıyı kapatınca, onu `connections` listesinden çıkar
    for (const [userId, sock] of connections.entries()) {
      if (sock === socket) {
        connections.delete(userId);
        break;
      }
    }
  });
});

console.log("✅ WebSocket sunucusu başlatıldı: ws://localhost:3000");
