import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Button, 
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Badge,
  IconButton
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { 
  Grid, 
  TextField, 
  Stack, 
  Divider,
  InputAdornment
} from '@mui/material';
import PetGallery from './components/PetGallery';
import AdminDashboard from './pages/AdminDashboard';
import PetDetails from './pages/PetDetails';
import CartPage from './pages/CartPage';
import { useCart } from './context/CartContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111a99',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#40355b',
    },
    background: {
      default: '#FFF6DA',
      paper: '#969dfc',
    },
    accent: {
      main: '#a9e7f5',
    },
    text: {
      primary: '#22143b',
      secondary: '#2d6d8f',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
  },
});

function App() {
  const { cartCount } = useCart();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'background.paper', color: 'text.primary', borderBottom: '1px solid #e2e8f0' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <PetsIcon sx={{ display: { xs: 'flex' }, mr: 1, color: 'primary.main' }} />
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  fontWeight: 800,
                  letterSpacing: '.05rem',
                  color: 'primary.main',
                  textDecoration: 'none',
                }}
              >
                PETSTORE
              </Typography>

              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Button component={Link} to="/" sx={{ my: 2, color: 'text.secondary', fontWeight: 600 }}>
                  Pictures
                </Button>
                <Button component={Link} to="/admin" sx={{ my: 2, color: 'text.secondary', fontWeight: 600 }}>
                  Manager
                </Button>
              </Box>

              <Box>
                <IconButton component={Link} to="/cart" color="inherit">
                  <Badge badgeContent={cartCount} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
          <Routes>
            <Route path="/" element={<PetGallery />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/pet/:id" element={<PetDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Container>

        <Box component="footer" sx={{ py: 8, px: 2, mt: 'auto', backgroundColor: 'secondary.main', color: 'white' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PetsIcon sx={{ mr: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '.1rem' }}>
                      PETSTORE
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                    Where hearts and paws connect. We specialize in boutique adoptions and premium care, ensuring every companion finds a home filled with endless love.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton color="inherit" size="small">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton color="inherit" size="small">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton color="inherit" size="small">
                      <TwitterIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
              
              <Grid item xs={6} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                  Quick Links
                </Typography>
                <Stack spacing={1}>
                  <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}>Pictures</Link>
                  <Link to="/admin" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}>Manager Dashboard</Link>
                  <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}>Shopping Cart</Link>
                </Stack>
              </Grid>

              <Grid item xs={6} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                  Categories
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2">Dogs</Typography>
                  <Typography variant="body2">Cats</Typography>
                  <Typography variant="body2">Birds</Typography>
                  <Typography variant="body2">Fish</Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                  Info
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                  Subscribe to get special offers and pet care tips.
                </Typography>
                <Box sx={{ 
                  backgroundColor: 'rgba(255, 246, 218, 0.15)', 
                  p: 0.5, 
                  borderRadius: 2,
                  display: 'flex'
                }}>
                  <TextField 
                    placeholder="Your email" 
                    variant="standard" 
                    fullWidth 
                    InputProps={{ 
                      disableUnderline: true,
                      sx: { color: 'white', px: 2, fontSize: '0.875rem' } 
                    }}
                  />
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ borderRadius: 1.5, px: 3 }}
                  >
                    Join
                  </Button>
                </Box>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
            
            <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
              {'Copyright © '}
              <Link color="inherit" to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 700 }}>
                Petstore
              </Link>{' '}
              {new Date().getFullYear()}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
