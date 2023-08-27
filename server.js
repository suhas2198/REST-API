const http = require("http");
require("dotenv").config();

const app = require("./app");

const port = process.env.PORT;
const host = process.env.HOST;

// const server = http.createServer((req, res) => {

//     if (req.url == '/') {

//         res.write('hello')

//         res.end()
//     }
// })
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server Started at ${host}: ${port}`);
});
