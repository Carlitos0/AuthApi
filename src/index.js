config();
import { app } from "./app.js";
import db from "./database.js";
import { config } from "dotenv";


app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`)
})