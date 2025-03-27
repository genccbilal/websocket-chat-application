const socket = new WebSocket("ws://localhost:3000"); // Backend WebSocket adresi

socket.onopen = () => {
  console.log(" WebSocket bağlantısı kuruldu.");
};

socket.onerror = (error) => {
  console.error(" WebSocket Hatası:", error);
};

export { socket };
