// Renders the header component using AppBar from Material UI
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TimeToLeaveSharpIcon from "@mui/icons-material/TimeToLeaveSharp";
import { SearchSharp } from "@mui/icons-material";

const pages = ["Add", "Edit", "Search"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null); // for navigation menu

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget); // open navigation menu
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null); // close navigation menu
  };

  return (
    <AppBar sx={{ mb: 2 }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TimeToLeaveSharpIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CAR TRACKER
          </Typography>
          {/* title */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Menu">
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography variant="h6" textAlign="center">
                    {/* if page is search show searchicon */}
                    {page === "Search" ? <SearchSharp /> : null}
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TimeToLeaveSharpIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CAR TRACKER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  mr: 2,
                  color: "inherit",
                  textDecoration: "none",
                }}
                href={`/${page.toLowerCase()}`}
              >
                {page}
                {/* if page is search show searchicon */}
                {page === "Search" ? <SearchSharp sx={{ m: 1 }} /> : null}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
