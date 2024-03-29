import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Typography, Grid, IconButton, List, ListItem, ListItemText, Box, Link } from '@mui/material';
import { Email, GitHub, LinkedIn, X, Language, Brightness4, Brightness7 } from '@mui/icons-material';
import profilePhoto from '../assets/profile-photo.webp'; // Import the image

const HomePage = ({ darkMode, onToggleDarkMode }) => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my: 2, mt: 4 }}>
            <Typography variant="h4">Ciaran Regan</Typography>
            <IconButton onClick={onToggleDarkMode}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} md={isLgUp ? 8 : 12}>
          <Typography variant="body1" sx={{ my: 1 }}>
            ALife and AI researcher. Interested in large scale agent systems for social simulacra.
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
            <Link href="https://www.google.com/maps/@36.1103664,140.1011046,3a,75y,135.67h,105.23t/data=!3m6!1e1!3m4!1swG2p1242HKNDpBrypcUcKg!2e0!7i13312!8i6656?entry=ttu" target="_blank" rel="noopener noreferrer">
              <IconButton><Language /></IconButton>
            </Link>
            <Typography variant="body2">Tsukuba, Japan</Typography>
            <Link href="mailto:ciaran.regan@websci.cs.tsukuba.ac.jp">
              <IconButton sx={{ ml: 3 }}><Email /></IconButton>
            </Link>
            <Link href="https://twitter.com/ciaran_regan_" target="_blank" rel="noopener noreferrer">
              <IconButton><X /></IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/ciaran-regan-2b1100194/" target="_blank" rel="noopener noreferrer">
              <IconButton><LinkedIn /></IconButton>
            </Link>
            <Link href="https://github.com/ciaran-regan-ie" target="_blank" rel="noopener noreferrer">
              <IconButton><GitHub /></IconButton>
            </Link>
          </Box>
        </Grid>
        {isLgUp && (
          <Grid item lg={4} style={{ paddingLeft: '24px', textAlign: 'right' }}>
            <img src={profilePhoto} alt="Ciaran Regan" style={{ width: '100px', height: 'auto', borderRadius: '8px' }} />
          </Grid>
        )}
      </Grid>
      
      {/* Education Section */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="h6">Education</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="B.A in Theoretical Physics" secondary={
              <>
                <Link 
                  href="https://www.tcd.ie/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'inherit', 
                    textDecoration: 'none', 
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationColor: theme.palette.text.primary,
                    },
                  }}
                >
                  Trinity College Dublin
                </Link>
                {" (2021)"}
              </>} />
          </ListItem>
          <ListItem>
            <ListItemText primary="M.Sc. in Computer Science" secondary={
              <>
                <Link 
                  href="https://www.tsukuba.ac.jp/en/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'inherit', 
                    textDecoration: 'none', 
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationColor: theme.palette.text.primary,
                    },
                  }}
                >
                  University of Tsukuba
                </Link>
                {" (2025)"}
              </>} />
          </ListItem>
          {/* Add more education items here */}
        </List>
      </Grid>

      {/* Experience Section */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="h6">Experience</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Researcher" secondary={
              <>
                <Link 
                  href="https://blankspace.jp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'inherit', 
                    textDecoration: 'none', 
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationColor: theme.palette.text.primary,
                    },
                  }}
                >
                  Blank Space
                </Link>
                {" (2023 - present)"}
              </>}
            />
          </ListItem>
            <ListItem>
              <ListItemText primary="Data Science Analyst" secondary={
                <>
                  <Link 
                    href="https://accenture.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      color: 'inherit', 
                      textDecoration: 'none', 
                      '&:hover': {
                        textDecoration: 'underline',
                        textDecorationColor: theme.palette.text.primary,
                      },
                    }}
                  >
                    Accenture
                  </Link>
                  {" (2021 - 2022)"}
                </>}
              />
            </ListItem>
          {/* Add more experience items here */}
        </List>
      </Grid>

      {/* Projects Section */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="h6">Projects</Typography>
        <List dense>
        <ListItem>
          <ListItemText 
          primary={
            <Link 
              href="https://graphtft.com" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                color: 'inherit', 
                textDecoration: 'none', 
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationColor: theme.palette.text.primary,
                },
              }}
            >
              GraphTFT
            </Link>
            } 
            secondary="Graph-based app for Teamfight Tactics" 
          />
          </ListItem>
          {/* Add more project items here */}
        </List>
      </Grid>

            {/* Projects Section */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="h6">Publications</Typography>
        <List dense>
          <ListItem>
            <ListItemText 
            primary={
              <Link 
                href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0294228" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: 'inherit', 
                  textDecoration: 'none', 
                  '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: theme.palette.text.primary,
                  },
                }}
              >
                Simulating emergence of novelties using agent-based models
              </Link>
              } 
              secondary="PLOS ONE (2023)" 
            />
          </ListItem>
          {/* Add more project items here */}
        </List>
      </Grid>
    </Container>
  );
};

export default HomePage;
