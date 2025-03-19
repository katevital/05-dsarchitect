import React from "react";
import { GlobalStyle } from "./lib/theme";
import { lightTheme, darkTheme } from "./lib";
import { Placeholder, Button, Icon, Button, ButtonLink, Badge } from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
  const isDarkTheme = true;
  console.log("Rendering App component");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>
        <Badge size="base" text="Hello world" />
        <Badge outlined appearance="green" size="small" text="Hello world" />
      </main>
    </ThemeProvider>
  );
}

export default App;
