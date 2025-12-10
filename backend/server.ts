import http from "http";
import app from "./app";
import connectDB from "./config/db";

connectDB();

const server = http.createServer(app);

const port:number = 3000;

server.listen(port, () => {
  console.log("server started at port", port);
});
