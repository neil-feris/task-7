// renders a form for adding a new car to the database
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function CarForm(props) {
  const [car, setCar] = useState({
    // get the car object from props or set it to an object with empty values
    make: props.car ? props.car.make : "",
    model: props.car ? props.car.model : "",
    year: props.car ? props.car.year : "",
    colour: props.car ? props.car.colour : "",
    registration_number: props.car ? props.car.registration_number : "",
    owner: props.car ? props.car.owner : "",
  });
  const [errors, setErrors] = useState([]);
  const history = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault(); // prevent the page from reloading
    // Check that all fields are filled in
    if (
      car.make &&
      car.model &&
      car.year &&
      car.colour &&
      car.registration_number &&
      car.owner
    ) {
      const newCar = { ...car };

      fetch("http://localhost:3001/api/cars/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.errors) {
            setErrors(data.errors);
          } else {
            history("/"); // navigate to the home page
          }
        });
    } else {
      setErrors(["Please fill in all fields"]);
    }
  };

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value }); // update the car object using the spread operator we only update the field that was changed
  };

  const handleEdit = (e) => {
    e.preventDefault(); // prevent the page from reloading
    // Check that all fields are filled in
    if (
      car.make &&
      car.model &&
      car.year &&
      car.colour &&
      car.registration_number &&
      car.owner
    ) {
      const newCar = { ...car };
      fetch(`http://localhost:3001/api/cars/update/${props.car._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.errors) {
            setErrors(data.errors);
          } else {
            // alert user that the car has been updated
            alert("Car updated");
          }
        });
    }
  };

  return (
    <Container sx={{ mb: 2 }}>
      <Typography
        sx={{
          fontFamily: "Sriracha",
          mb: 1,
        }}
        variant="h4"
        component="h1"
        align="center"
      >
        {props.mode} {car.make} {car.model}
      </Typography>
      <Box
        component="form"
        onSubmit={handleAdd}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="make"
              name="make"
              label="Make"
              value={car.make}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="model"
              name="model"
              label="Model"
              value={car.model}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="year"
              name="year"
              label="Year"
              value={car.year}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="colour"
              name="colour"
              label="Colour"
              value={car.colour}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="registration_number"
              name="registration_number"
              label="Registration Number"
              value={car.registration_number}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              required
              id="owner"
              name="owner"
              label="Owner"
              value={car.owner}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {props.mode === "Add" && (
              <Button
                variant="contained"
                type="submit"
                sx={{
                  fontFamily: "Sriracha",
                  mx: 1,
                }}
              >
                Add Car
              </Button>
            )}
            {props.mode === "Edit" && (
              <Button
                variant="contained"
                onClick={handleEdit}
                sx={{
                  fontFamily: "Sriracha",
                }}
              >
                Edit Car
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
      {errors.map((error) => (
        <Typography
          sx={{
            fontFamily: "Sriracha",
          }}
          variant="h6"
          component="h2"
          align="center"
          key={error}
        >
          {error}
        </Typography>
      ))}
    </Container>
  );
}

export default CarForm;
