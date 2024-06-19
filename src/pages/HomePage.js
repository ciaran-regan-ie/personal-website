import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Typography, Grid, IconButton, List, ListItem, ListItemText, Box, Link } from '@mui/material';
import { Email, GitHub, LinkedIn, X, Language, Brightness4, Brightness7 } from '@mui/icons-material';
import { ReactComponent as GoogleScholarIconLight } from '../assets/google-scholar-icon-light.svg';
import { ReactComponent as GoogleScholarIconDark } from '../assets/google-scholar-icon-dark.svg';

import profilePhoto from '../assets/profile-photo.webp'; // Import the image

const HomePage = ({ darkMode, onToggleDarkMode }) => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const GoogleScholarIcon = theme.palette.mode === 'dark' ? GoogleScholarIconDark : GoogleScholarIconLight;

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
            ALife and AI researcher.
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
            <Link href="https://scholar.google.com/citations?user=q35leGMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
          <IconButton>
            <GoogleScholarIcon />
          </IconButton>
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
          {/* Add more education items here */}
        </List>
      </Grid>

      {/* Experience Section */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="h6">Experience</Typography>
        <List dense>
        <ListItem>
            <ListItemText primary="Research Assistant" secondary={
              <>
                <Link 
                  href="https://www.it-chiba.ac.jp/english/" 
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
                  Chiba Institute of Technology
                </Link>
                {" (2024 - present)"}
              </>}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Research Assistant" secondary={
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

      {/* Publications Section */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="h6">Publications</Typography>
        <List dense>
        <ListItem>
            <ListItemText 
            primary={
              <Link 
                href="https://arxiv.org/abs/2406.12374" 
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
                Problem-Solving in Language Model Networks
              </Link>
              } 
              secondary="ALIFE (2024)" 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
            primary={
              <Link 
                href="https://arxiv.org/abs/2406.04663" 
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
                LLM-POET: Evolving Complex Environments using Large Language Models
              </Link>
              } 
              secondary="GECCO (2024)" 
            />
          </ListItem>
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

      {/* Talks Section */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="h6">Presentations</Typography>
        <List dense>
          <ListItem>
              <ListItemText primary="InferenceQL Hands-On" secondary={
                <>
                  Probabilistic Computing Workshop (2024), Tokyo, Japan
                </>}
              />
            </ListItem>
          <ListItem>
              <ListItemText primary="Reinforcement and Novelty in Innovation Networks" secondary={
                <>
                  <Link 
                    href="https://netscix2024.netscisociety.org/" 
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
                    NetSciX (2024), Venice, Italy
                  </Link>
                </>}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="AI + IT = Knowledge Technology" secondary={
                <>
                  <Link 
                    href="https://www.digitaldunlaoghaire.ie/" 
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
                    Digital Dun Laoighare (2024), Dublin, Ireland
                  </Link>
                </>}
              />
            </ListItem>
            <ListItem>
            <ListItemText primary="Towards Scalable Generative Agent Systems" secondary={
              <>
                  Probabilistic Computing Workshop (2023), Tokyo, Japan
              </>}
            />
            </ListItem>
            <ListItem>
              <ListItemText primary="Reinforcement and Novelty in Innovation Networks" secondary={
                <>
                  <Link 
                    href="https://www.alife-japan.org/eng-news/the-8th-artificial-life-research-group-workshop-announced" 
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
                    Artificial Life Japan Workshop 8 (2023), Kyoto, Japan
                  </Link>
                </>}
              />
            </ListItem>
          {/* Add more project items here */}
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

    </Container>
  );
};

export default HomePage;
