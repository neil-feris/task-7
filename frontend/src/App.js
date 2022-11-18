import "./App.css";
// import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Custom Theme
import { theme } from "./components/theme";
import { ThemeProvider } from "@mui/material/styles";

// import custom components
import Header from "./components/Header";
import CarList from "./components/CarList";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import EditCars from "./components/EditCars";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            {/* Set up all our routes */}
            <Route exact path="/" element={<CarList />} />
            <Route exact path="/add" element={<AddCar />} />
            <Route exact path="/update/:id" element={<EditCar />} />
            <Route exact path="/edit" element={<EditCars />} />
            <Route exact path="/search" element={<Filter />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
