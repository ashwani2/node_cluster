const express = require("express");
const cluster = require("cluster");
const totalCPUs = require('os').cpus().length;

const fabObj = require("./math-logic/fibonacci-series");

    const app = express();
    app.get("/", (request, response) => {
        console.log(`Worker Process Id - ${cluster.worker.process.pid} has accepted the request!`);
        let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
        response.send(`<h1>${number}</h1>`);
    });

    app.listen(4000, () => console.log("Express App is running on PORT : 3000"));
