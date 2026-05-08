import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  CardActions, 
  Chip, 
  Box 
} from '@mui/material';
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

const PetCard = ({ pet }) => {
  const { addToCart } = useCart();

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(169, 74, 74, 0.15)',
          '& .quick-view-overlay': {
            opacity: 1,
          },
          '& .card-media-img': {
            transform: 'scale(1.1)',
          }
        }
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          className="card-media-img"
          component="img"
          height="220"
          image={pet.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={pet.name}
          sx={{ 
            transition: 'transform 0.5s ease',
          }}
        />
        <Box 
          className="quick-view-overlay"
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: 1
          }}
        >
          <Button 
            component={Link} 
            to={`/pet/${pet.id}`}
            variant="contained" 
            sx={{ 
              backgroundColor: 'white', 
              color: 'primary.main',
              fontWeight: 700,
              '&:hover': { backgroundColor: '#f5f5f5' }
            }}
          >
            Quick View
          </Button>
        </Box>
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 700, mb: 0 }}>
            {pet.name}
          </Typography>
          <Chip 
            label={pet.species} 
            size="small" 
            sx={{ 
              backgroundColor: 'accent.main', 
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '0.7rem',
              border: 'none'
            }} 
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
          {pet.breed} • {pet.age} {pet.age === 1 ? 'year' : 'years'}
        </Typography>
        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 800 }}>
          ${pet.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          fullWidth
          variant="contained" 
          disableElevation
          onClick={() => addToCart(pet)}
          sx={{ 
            py: 1,
            fontWeight: 700,
            backgroundColor: 'secondary.main',
            '&:hover': { backgroundColor: '#27d1f3' }
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
