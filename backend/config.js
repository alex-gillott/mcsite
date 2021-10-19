import fs from "fs";

const configData = fs.readFileSync("./config.json");
const config = JSON.parse(configData);

export default config;