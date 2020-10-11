import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";
import "./App.css";
import AppBar from "./components/app-bar/AppBar";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar />
        <Container maxWidth="sm">
          <Routes />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
