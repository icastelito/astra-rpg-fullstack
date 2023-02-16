const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3210;

app.listen(PORT, () => console.log("Server started at port " + PORT));