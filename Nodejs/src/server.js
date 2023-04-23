import express from "express";
import bodyParser from "body-parser"; //hỗ trợ lấy các tham số trên server
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB"
import cors from "cors"
require('dotenv').config(); // giúp chạy đc dòng process.env

let app = express();
app.use(cors({ credentials: true, origin: true }))

//config app 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connectDB();

// để chạy đc cần bước này
let port = process.env.PORT || 8080; //để lấy đc tham số trong file .env bược phải dùng câu lệnh process.env.PORT

app.listen(port, () => {
    console.log("backend NodeJs is running on the port: " + port)
})
