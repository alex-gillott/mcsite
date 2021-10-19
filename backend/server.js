import express from "express";
import config from "./config";

const app = express();

app.use("/about",express.static("../frontend/about"));

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));