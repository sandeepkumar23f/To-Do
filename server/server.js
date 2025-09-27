import express from "express";
import { connection, collectionName } from "./dbconfig.js";
import cors from 'cors'
const app = express();
app.use(express.json()); 
app.use(cors())
// app.post("/todos", async (req, res) => {
//   try {
//     console.log("Incoming body:", req.body); // Debug
//     const db = await connection();
//     const result = await db.collection(collectionName).insertOne(req.body);
//     res.status(201).json(result);   
//   } catch (err) {
//     console.error("Error inserting:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// });

app.post("/add-task", async (req, res) => {
    try {
        const task = req.body;

        // Optional: simple validation
        if (!task.title || !task.description) {
            return res.status(400).json({ success: false, message: "Title and description are required" });
        }

        const db = await connection();
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(task);

        if (result.acknowledged) {
            res.status(201).json({ success: true, message: "New task added", result });
        } else {
            res.status(500).json({ success: false, message: "Task not added" });
        }
    } catch (err) {
        console.error("Error adding task:", err.message);
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
});

app.get("/tasks", async (req, res) => {
    try {
        const db = await connection();
        const collection = db.collection(collectionName);

        // Fetch all tasks
        const tasks = await collection.find({}).toArray();

        res.status(200).json({ success: true, message: "Task list fetched", tasks });
    } catch (err) {
        console.error("Error fetching tasks:", err.message);
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));