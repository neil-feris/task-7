// renders a search bar and a list of results
import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Input,
  Select,
  Button,
} from "@mui/material";

import { SearchSharp } from "@mui/icons-material";
import Car from "./Car";

const Filter = () => {
  const [search, setSearch] = React.useState("");
  const [searchType, setSearchType] = React.useState("older_than"); // default search type
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    if (!search) return; // if search is empty, do nothing

    if (searchType === "older_than") {
      // if search type is older_than, search for cars older than the given year
      setLoading(true);
      fetch(`http://localhost:3001/api/cars/search_older/${search}`)
        .then((res) => res.json())
        .then((data) => setResults(data));
      setLoading(false);
      return;
    }

    if (searchType === "newer_than") {
      // if search type is newer_than, search for cars newer than the given year
      setLoading(true);
      fetch(`http://localhost:3001/api/cars/search_newer/${search}`)
        .then((res) => res.json())
        .then((data) => setResults(data));
      setLoading(false);
      return;
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Filter by year
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Select
                native
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                sx={{ width: "200px", marginRight: "10px" }}
                inputProps={{
                  // required for the native select to work
                  name: "search",
                  id: "search",
                }}
              >
                <option value="older_than">Older Than</option>
                <option value="newer_than">Newer Than</option>
              </Select>
              <Input
                type="number"
                value={search}
                onChange={handleChange}
                sx={{ width: "200px", marginRight: "10px" }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ width: "100px" }}
                endIcon={<SearchSharp />}
              >
                Search
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5" component="h2" gutterBottom>
                  Results
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={2}>
              {results.length > 0 ? ( // if there are results, display them
                results.map((car) => {
                  // map through the results and display each car using the Car component
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={car._id}>
                      <Car car={car} />
                    </Grid>
                  );
                })
              ) : (
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    {!loading &&
                      results.length === 0 && ( // if there are no results, display a message
                        <Typography variant="h6" component="h2" gutterBottom>
                          No results
                        </Typography>
                      )}
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Filter;
