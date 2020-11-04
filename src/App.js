import React, { useState } from 'react';
import Home from './Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';



function App() {
 
  const [darkMode , setDarkMode] = useState(false);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode  ? 'dark' : 'light',
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3EA6FF'
      },
      background: {
        default: darkMode ? '#1E1E1E' : '#fff',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper:  darkMode ? '#1E1E1E' : '#fff'
      }
    }
  });



  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
