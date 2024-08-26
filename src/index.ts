import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createServer } from "node:http";
import { Server } from "socket.io";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3002;

const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a new client connected');

  socket.on('message', (arg) => {
    console.log(arg);
  })

  socket.on('disconnect', () => {
    console.log("disconect");
  })
})


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
