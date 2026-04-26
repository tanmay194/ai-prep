
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]); // Uses Google and Cloudflare DNS

require("dotenv").config();
const app = require("./src/app.js");
const connectToDB = require("./src/config/database.js");

connectToDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
