import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  IconButton, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  CircularProgress,
  Alert,
  Container
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { petService } from '../services/api';
import PetForm from '../components/PetForm';

const AdminDashboard = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    setLoading(true);
    try {
      const response = await petService.getAllPets();
      setPets(response.data);
    } catch (err) {
      setError('Failed to load pets.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      try {
        await petService.deletePet(id);
        setPets(pets.filter(p => p.id !== id));
      } catch (err) {
        alert('Failed to delete pet.');
      }
    }
  };

  const handleEdit = (pet) => {
    setSelectedPet(pet);
    setOpenForm(true);
  };

  const handleAdd = () => {
    setSelectedPet(null);
    setOpenForm(true);
  };

  const handleFormSubmit = () => {
    setOpenForm(false);
    fetchPets();
  };

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}><CircularProgress /></Box>;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>Manager Dashboard</Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          onClick={handleAdd}
          sx={{ borderRadius: 2 }}
        >
          Add New Pet
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}

      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f8fafc' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Species</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Breed</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((pet) => (
              <TableRow key={pet.id} hover>
                <TableCell>{pet.name}</TableCell>
                <TableCell>{pet.species}</TableCell>
                <TableCell>{pet.breed}</TableCell>
                <TableCell>${pet.price}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEdit(pet)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(pet.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openForm} onClose={() => setOpenForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>
          {selectedPet ? 'Edit Pet' : 'Add New Friend'}
        </DialogTitle>
        <DialogContent>
          <PetForm 
            pet={selectedPet} 
            onSuccess={handleFormSubmit} 
            onCancel={() => setOpenForm(false)} 
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;
