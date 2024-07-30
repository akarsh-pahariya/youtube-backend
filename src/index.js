import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error("Error: ", error);
            throw error;
        });
        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `Server is running at Port = ${process.env.PORT || 8000}`
            );
        });
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
