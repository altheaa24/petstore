import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
const API_BASE_URL = "https://petstore-backend.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const petService = {
  getAllPets: (species) => {
    let formattedSpecies = species;

    // Fix mismatches if a category filter is actively selected
    if (formattedSpecies && formattedSpecies !== 'ALL PETS') {
      // 1. Convert "DOGS" -> "dogs"
      formattedSpecies = formattedSpecies.toLowerCase().trim();
      
      // 2. Convert "dogs" -> "dog" (Removes plural ending)
      if (formattedSpecies.endsWith('s')) {
        formattedSpecies = formattedSpecies.slice(0, -1);
      }
      
      // 3. Convert "dog" -> "Dog" (Capitalizes first letter to match your database seeds)
      formattedSpecies = formattedSpecies.charAt(0).toUpperCase() + formattedSpecies.slice(1);
    } else {
      // If 'ALL PETS' is selected, don't pass a species parameter at all
      formattedSpecies = undefined;
    }

    return api.get('/pets', { params: { species: formattedSpecies } });
  },
  
  getPetById: (id) => api.get(`/pets/${id}`),
  createPet: (pet) => api.post('/pets', pet),
  updatePet: (id, pet) => api.put(`/pets/${id}`, pet),
  deletePet: (id) => api.delete(`/pets/${id}`),
};

export default api;