// fetches all cars from the API and displays them in a list of Car components

import React, { useState, useEffect } from "react";
import { Grid, Box, Container, Typography } from "@mui/material";

import Car from "./Car";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    try {
      const controller = new AbortController(); // aborts fetch if component unmounts
      fetch("http://localhost:3001/api/cars", { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => setCars(data));
    } catch (error) {
      console.log("An error occured: ", error); // log any errors to the console
    }
    return () => controller.abort(); // aborts fetch if component unmounts
  }, []); // the empty array means that this will only run once or on page reload

  return (
    <Container>
      <Typography
        sx={{
          fontFamily: "Sriracha",
        }}
        variant="h4"
        component="h1"
        align="center"
      >
        Car List
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {cars.map((car) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={car._id}>
              <Car car={car} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default CarList;
