<<<<<<< HEAD
console.log("changed");
=======
require('dotenv').config();
import express from "express";
import homeRouter from "./routes/home";

const app = express();

app.use(homeRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port ${process.env.APP_PORT}.`);
});

>>>>>>> 38e7650 (Boilerplate code)
