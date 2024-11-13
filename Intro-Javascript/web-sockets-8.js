// Connect to the WebSocket server
const socket = io("http://localhost:4000");

socket.on("connect", function () {
  console.log("connected!", socket.id);

  // Subscribe to a currency stream
  // const currency = "ETH";
  // socket.emit("subscribe", currency);
});

// Handle incoming messages from the server
socket.on("message", (message) => {
  console.log("Received message:", message);
  // Process the message as needed
});
