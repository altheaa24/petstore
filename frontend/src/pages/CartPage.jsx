import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  Avatar, 
  IconButton, 
  Divider, 
  Button, 
  Paper,
  Stack,
  Grid
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Waiting for a best friend?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Your cart is currently empty. Somewhere in our sanctuary, a perfect companion is waiting for you to find them.
        </Typography>
        <Button component={Link} to="/" variant="contained" size="large">
          See Who’s Waiting
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, mb: 4 }}>
        Shopping Cart
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: 2 }}>
            <List disablePadding>
              {cart.map((item, index) => (
                <React.Fragment key={item.id}>
                  <ListItem sx={{ py: 2 }}>
                    <ListItemAvatar sx={{ mr: 2 }}>
                      <Avatar 
                        variant="rounded" 
                        src={item.imageUrl} 
                        sx={{ width: 80, height: 80 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography variant="h6" sx={{ fontWeight: 600 }}>{item.name}</Typography>}
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          {item.species} • ${item.price}
                        </Typography>
                      }
                    />
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mx: 2 }}>
                      <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography sx={{ fontWeight: 600 }}>{item.quantity}</Typography>
                      <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    <Typography sx={{ fontWeight: 700, minWidth: 80, textAlign: 'right' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                    <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)} sx={{ ml: 2 }}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </ListItem>
                  {index < cart.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, border: '1px solid #e2e8f0', borderRadius: 2, backgroundColor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Order Summary
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography color="text.secondary">Subtotal</Typography>
              <Typography sx={{ fontWeight: 600 }}>${cartTotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography color="text.secondary">Shipping</Typography>
              <Typography sx={{ fontWeight: 600, color: 'success.main' }}>FREE</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>Total</Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
                ${cartTotal.toFixed(2)}
              </Typography>
            </Box>
            <Button variant="contained" fullWidth size="large" onClick={() => alert('Checkout functionality coming soon!')}>
              Checkout
            </Button>
            <Button variant="text" fullWidth color="inherit" sx={{ mt: 1 }} onClick={clearCart}>
              Clear Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default CartPage;
