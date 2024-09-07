import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";
import CoffeeShopPage from "./CoffeeShopPage"; // Import the CoffeeShopPage
import FinancialToolsPage from "./FinancialPage"; // Import the FinancialToolsPage

function App() {
  return (
    <Router>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#915732', // Nice blue for the app bar
        }}
      >
        <Toolbar>
          <Button
            color="inherit"
            component={Link}
            to="/admin"
            sx={{
              color: '#f3e5f5', // Light purple text for buttons
              '&:hover': {
                backgroundColor: '#29a083', // Hover with dark purple background
              },
            }}
          >
            Admin Page
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/user"
            sx={{
              color: '#f3e5f5', // Light purple text for buttons
              '&:hover': {
                backgroundColor: '#29a083', // Hover with dark purple background
              },
            }}
          >
            Pet Recommendation
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/coffee"
            sx={{
              color: '#f3e5f5', // Light purple text for buttons
              '&:hover': {
                backgroundColor: '#29a083', // Hover with dark purple background
              },
            }}
          >
            Coffee Shop Recommendation
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/financial-tools"
            sx={{
              color: '#f3e5f5', // Light purple text for buttons
              '&:hover': {
                backgroundColor: '#c68649', // Hover with dark purple background
              },
            }}
          >
            Financial Tools Recommendation
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        p={2}
        sx={{
          backgroundColor: '#f5f5f5', // Light background for content area
          minHeight: '100vh', // Ensure the app covers the full height of the page
        }}
      >
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/coffee" element={<CoffeeShopPage />} />
          <Route path="/financial-tools" element={<FinancialToolsPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
