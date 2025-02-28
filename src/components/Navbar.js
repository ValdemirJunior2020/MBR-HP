import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <AppBar position="static" color={darkMode ? "default" : "primary"}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          QA KPI Dashboard
        </Typography>

        {/* Dark Mode Toggle */}
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
