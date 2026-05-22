import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Box, 
  Typography, 
  ToggleButtonGroup, 
  ToggleButton, 
  CircularProgress,
  Alert
} from '@mui/material';
import { useRef } from 'react';
import PetCard from './PetCard';
import { petService } from '../services/api';

const PetGallery = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [speciesFilter, setSpeciesFilter] = useState('All');

  const galleryRef = useRef(null);

  const fetchPets = async () => {
    setLoading(true);
    try {
      // Fetch the full pet array from your working backend
      const response = await petService.getAllPets();
      setPets(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load pets. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setSpeciesFilter(newFilter);
    }
  };

  // Run the fetch once when the component mounts
  useEffect(() => {
    fetchPets();
  }, []);

  // CRITICAL FIX: Filter the list locally in memory before mapping it to the UI grid!
  const filteredPets = pets.filter((pet) => {
    if (speciesFilter === 'All') return true;
    
    // Fallback normalization in case data is casing-mismatched (e.g., 'dog' vs 'Dog')
    return pet.species?.toLowerCase() === speciesFilter.toLowerCase();
  });

  return (
    <Box sx={{ py: 4 }} ref={galleryRef}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800, color: 'primary.main' }}>
          "Meet Your New Best Friend"
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Every paw has a story. Find the one that belongs in yours within our handpicked adoption gallery.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ToggleButtonGroup
            value={speciesFilter}
            exclusive
            onChange={handleFilterChange}
            aria-label="species filter"
            sx={{ 
              backgroundColor: 'background.paper',
              p: 0.5,
              borderRadius: 4,
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              '& .MuiToggleButton-root': {
                px: 4,
                py: 1,
                borderRadius: 3,
                border: 'none',
                fontWeight: 700,
                color: 'text.secondary',
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    }
                  }
                }
              }}
            >
              <ToggleButton value="All">All Pets</ToggleButton>
              <ToggleButton value="Dog">Dogs</ToggleButton>
              <ToggleButton value="Cat">Cats</ToggleButton>
              <ToggleButton value="Bird">Birds</ToggleButton>
              <ToggleButton value="Fish">Fishes</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            {/* CHANGED: Check filteredPets instead of raw pets state */}
            {filteredPets.length === 0 ? (
              <Typography variant="h6" align="center" color="text.secondary" sx={{ py: 10 }}>
                No pets found in this category.
              </Typography>
            ) : (
              <Grid container spacing={4}>
                {/* CHANGED: Loop through the filtered array */}
                {filteredPets.map((pet) => (
                  <Grid item key={pet.id} xs={12} sm={6} md={4}>
                    <PetCard pet={pet} />
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </Box>
    );
};

export default PetGallery;