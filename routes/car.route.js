// We setup our API routes in this file and map it to the appropriate controller
// import express
import express from "express";
// create a router
const router = express.Router();

// import our controllers
import {
  getCars,
  addCar,
  getCarById,
  deleteCarById,
  updateCarById,
  getCarsOlderThan,
  getCarsNewerThan,
} from "../controllers/car.controller.js";

router.get("/", getCars); // map the getCars controller to the / route

router.post("/add", addCar); // map the addCar controller to the /add route

router.get("/:id", getCarById); // map the getCarById controller to the /:id route

router.delete("/:id", deleteCarById); // map the deleteCarById controller to the /:id route

router.put("/update/:id", updateCarById); // map the updateCarById controller to the /update/:id route

router.get("/search_older/:year", getCarsOlderThan); // map the getCarsOlderThan controller to the /search_older/:year route

router.get("/search_newer/:year", getCarsNewerThan); // map the getCarsNewerThan controller to the /search_newer/:year route

export default router;
