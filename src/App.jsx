import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage'; // Import HomePage
import Container from '@mui/material/Container'; // Import Container

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: [
        'Fira Code',
        'monospace',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ 
  paddingLeft: { 
    xs: '20px', 
    sm: '100px', 
    md: '250px', 
    lg: '250px', // Example value for large screens
    xl: '250px'  // Example value for extra-large screens
  }, 
  paddingRight: { 
    xs: '20px', 
    sm: '100px', 
    md: '250px', 
    lg: '250px', // Example value for large screens
    xl: '250px'  // Example value for extra-large screens
  } 
}}>
        <HomePage darkMode={darkMode} onToggleDarkMode={handleDarkModeToggle} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
