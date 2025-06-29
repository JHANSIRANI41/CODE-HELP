const app = require("./src/app");
require('dotenv').config();



app.listen(8080, () => {
    console.log("server is running on 8080")
});