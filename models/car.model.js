// We setup our Car model in this file
// import mongoose
import mongoose from "mongoose";

// create a schema for cars making all fields required and trim any whitespace. registration_number is unique
const carSchema = new mongoose.Schema(
  {
    make: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true, trim: true },
    colour: { type: String, required: true, trim: true },
    registration_number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    owner: { type: String, required: true, trim: true },
  },
  { timestamps: true } // this will automatically add createdAt and updatedAt fields to the schema
);

// create a model for cars
const Car = mongoose.model("Car", carSchema);

// export the model
export default Car;
