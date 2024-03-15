import express from "express";
import connectDB from "./database/db.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("server started !")
})

const stratServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`server running on the port http://localhost:${PORT}`)
        });
    } catch (error) {
        console.log(`Error connecting to mangodb database ${error.message}`)
    }
}
stratServer();