// renders the page with a CarForm component to add a Car
import React from "react";
import { Container } from "@mui/material";
import CarForm from "./CarForm";

function AddCar() {
  return (
    <Container>
      <CarForm mode="Add"/>
    </Container>
  );
}

export default AddCar;
