// import express
import express from "express";
// import cors for Cross Origin Resource Sharing
import cors from "cors";
// import cars route
import carsRoute from "./routes/car.route.js";

const app = express();

// setup cors
app.use(cors());
// express middleware to parse json we no longer need body-parser
app.use(express.json());

// setup routes anything that doesn't match the routes specified will send a 404
app.use("/api/cars", carsRoute);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
