import React from "react";
import { GlobalStyle } from "./lib";
import { lightTheme, darkTheme } from "./lib";
import { Card } from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
  const isDarkTheme = true;
  console.log("Rendering App component");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>
        <Card />
      </main>
    </ThemeProvider>
  );
}

export default App;
