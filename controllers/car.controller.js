// We set up all our logic in this file
// import the car model
import Car from "../models/car.model.js";

// get all cars
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find(); // find all cars
    res.status(200).json(cars); // return all cars as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// add a car
export const addCar = async (req, res) => {
  try {
    const make = req.body.make;
    const model = req.body.model;
    const year = Number(req.body.year); // convert the year to a number
    const colour = req.body.colour;
    const registration_number = req.body.registration_number;
    const owner = req.body.owner;

    const newCar = new Car({
      // create a new car
      make,
      model,
      year,
      colour,
      registration_number,
      owner,
    });

    await newCar.save(); // save the new car to the database
    res.status(201).json(newCar); // return the new car as json and send 201 status code
  } catch (error) {
    res.status(400).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// get a car by id
export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id); // find the car by id
    res.status(200).json(car); // return the car as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// delete a car by id
export const deleteCarById = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id); // find the car by id and delete it
    res.status(200).json("Car deleted."); // return a success message as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// update a car by id
export const updateCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id); // find the car by id
    car.make = req.body.make;
    car.model = req.body.model;
    car.year = Number(req.body.year); // convert the year to a number
    car.colour = req.body.colour;
    car.registration_number = req.body.registration_number;
    car.owner = req.body.owner;

    await car.save(); // save the updated car to the database
    res.status(200).json("Car updated!"); // return a success message as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// find all cars older than a certain year
export const getCarsOlderThan = async (req, res) => {
  try {
    const cars = await Car.find({ year: { $lt: req.params.year } }); // find all cars older than the year specified in the url
    res.status(200).json(cars); // return the cars as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// find all cars newer than a certain year
export const getCarsNewerThan = async (req, res) => {
  try {
    const cars = await Car.find({ year: { $gt: req.params.year } }); // find all cars newer than the year specified in the url
    res.status(200).json(cars); // return the cars as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};
