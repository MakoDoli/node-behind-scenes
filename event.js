const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
  constructor(stock) {
    super();
    this.stock = stock;
  }
  newSale(stock) {
    if (this.stock > 0) {
      this.stock = this.stock - 1;
      this.emit("newSale", this.stock);

      return;
    }

    this.emit("error", new Error("there are no more items left"));
  }
}
const mySales = new Sales(3);
myEmitter.on("newSale", () => {
  console.log("New sale");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Mako");
});
myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock - 1} items left`);
});
mySales.on("newSale", (stock) => {
  console.log(`There are ${stock} items left`);
});
mySales.on("error", () => {
  console.log("Now we have pretty error");
});

myEmitter.emit("newSale", 9);
mySales.newSale();
mySales.newSale();
mySales.newSale();
mySales.newSale();

/////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req.url);
  res.end("Response sent");
});

server.on("request", (req, res) => {
  console.log("Another request 🔱");
  //res.end("Another request 🔱");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, console.log("Server is running on port 8000"));
