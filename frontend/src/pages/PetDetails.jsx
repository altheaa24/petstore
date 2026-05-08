import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Button, 
  Paper, 
  Chip, 
  Divider,
  CircularProgress,
  Alert,
  Container
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { petService } from '../services/api';

import { useCart } from '../context/CartContext';

const PetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await petService.getPetById(id);
        setPet(response.data);
      } catch (err) {
        setError('Pet not found.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPet();
  }, [id]);

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!pet) return null;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate(-1)} 
        sx={{ mb: 4 }}
      >
        Back to Gallery
      </Button>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <img 
              src={pet.imageUrl || 'https://via.placeholder.com/600x450?text=No+Image'} 
              alt={pet.name} 
              style={{ width: '100%', display: 'block' }} 
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Chip label={pet.species} color="primary" sx={{ mb: 2 }} />
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
              {pet.name}
            </Typography>
            <Typography variant="h5" color="secondary.main" sx={{ fontWeight: 700, mb: 3 }}>
              ${pet.price}
            </Typography>
            
            <Paper variant="outlined" sx={{ p: 3, mb: 4, backgroundColor: '#f8fafc', borderRadius: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" color="text.secondary">Breed</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{pet.breed}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" color="text.secondary">Age</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{pet.age} {pet.age === 1 ? 'year' : 'years'}</Typography>
                </Grid>
              </Grid>
            </Paper>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>Description</Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
              {pet.description}
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Button 
              variant="contained" 
              size="large" 
              fullWidth 
              startIcon={<ShoppingCartIcon />}
              sx={{ py: 2, borderRadius: 2, fontWeight: 700, textTransform: 'none', fontSize: '1.1rem' }}
              onClick={() => {
                addToCart(pet);
                alert(`${pet.name} added to cart!`);
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetails;
