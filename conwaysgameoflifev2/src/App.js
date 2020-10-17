import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Main from './Components/Main/Main';
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: "Arial",
    h1: {
      fontSize: "2.5rem"
    },
    h2: {
      fontSize: "2rem"
    },
    h3: {
      fontSize:"1.5rem"
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Main />
    </ThemeProvider>
  );
}
