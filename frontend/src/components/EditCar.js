// renders a CarForm component that allows the user to edit a car in the database
import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom"; // import useParams hook to get the id from the url
import CarForm from "./CarForm";

function EditCar(props) {
  const { id } = useParams(); // get the id from the url
  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState({
    make: "",
    model: "",
    year: "",
    colour: "",
    registration_number: "",
    owner: "",
  });

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err); // Log to console
      });
  }, [id]);

  return (
    <Container>
      <Box>
        {loading ? <p>Loading...</p> : <CarForm car={car} mode="Edit" /> }
      </Box>
    </Container>
  );
}

export default EditCar;
