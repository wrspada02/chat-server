import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import { userRoute } from "./routes/user";
import { roomRoute } from "./routes/room";

dotenv.config();

const PORT = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { path: '/socket.io/', 
  cors: { origin: "http://localhost:3000" } });

app.use(bodyParser.json());
app.use(cors());
app.use("/rooms", roomRoute);
app.use("/users", userRoute);

const mongoUri = `mongodb://${process.env.MONGO_USERNAME}:
${process.env.MONGO_PASSWORD}@localhost:27017/`

io.on('connection', () => {
  console.log('A user connected!');
});

mongoose.connect((mongoUri)).then(() => {
  httpServer.listen(PORT, () => {
    console.log("Server is running on port 5000");
  });
});

export { io };
