import express from 'express';
import {createServer} from 'node:http';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from "./routes/users.routes.js";
import { connectToSocket } from './controllers/socketManagers.js';


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 3000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

// app.get("/home", (req, res) => {
//     res.send("Hello World from backend!");
// });


app.use("/api/v1/users",userRoutes);

const start = async()=>{
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://shubhamzawar55:Zawar3499@cluster0.v3rhhxs.mongodb.net/")
    console.log(`Mongo connected to DB HOST ${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log(`Listening on port ${app.get("port")}`);
    })
}

start();