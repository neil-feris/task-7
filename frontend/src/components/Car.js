// renders a single car in a MUI card component
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Typography,
} from "@mui/material";

function Car({ car }) {
  const handleDelete = () => {
    // delete a car
    fetch(`http://localhost:3001/api/cars/${car._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
        } else {
          // reload the page
          window.location.reload();
        }
      });
  };

  const handleEdit = () => {
    // navigate to the edit page
    window.location.href = `/update/${car._id}`;
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 320, borderRadius: 3, mb: 2 }}>
      <CardHeader title={car.make} subheader={car.model} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>Year</b>: {car.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Colour</b>: {car.colour}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Owner</b>: {car.owner}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Registration</b>: {car.registration_number}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mb: 1 }}>
        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={handleEdit}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Car;
