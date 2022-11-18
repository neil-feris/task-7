// renders a component that displays all cars in the database in editable form
import React, { useState, useEffect } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import CarForm from "./CarForm";

function EditCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/api/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Typography
        sx={{
          fontFamily: "Sriracha",
          marginBottom: "1rem",
        }}
        variant="h3"
        component="h1"
        align="center"
      >
        Edit Multiple Cars
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Grid container spacing={2}>
            {cars.map((car) => (
              <Grid item xs={12} sm={12} md={12} key={car._id}>
                <CarForm car={car} mode="Edit" />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default EditCars;
