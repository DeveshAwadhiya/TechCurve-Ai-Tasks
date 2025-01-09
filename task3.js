const express = require('express');
const fs = require('fs');
const port = 3000
const app = express();

app.use(express.json())

app.get('/task/stats', (req, res) => {
    fs.readFile("tasks.json", utf - 8, async (err, data) => {
        if (err) {
            res.status(500).send("ERROR READING THE DATA")
        }
        const tasks = JSON.parse(data)
        const ToatalTask = tasks.length;
        const tasksByStatus = tasks.reduce((acc, task) => {
            acc[task.status] = (acc[task.status] || 0) + 1
            return acc;

        }, {})
        const taskbyuser = tasks.reduce((acc, task)=> {
            acc[task.User] = (acc[task.User] || 0) + 1
            return acc
        })

        res.status(200).json({
            totalTasks: ToatalTask,
            tasksByStatus,
            taskByUser: taskbyuser,
            success: true,
            message: "Task stats fetched successfully"
        })
    })
})