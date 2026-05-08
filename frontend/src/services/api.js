import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const petService = {
  getAllPets: (species) => api.get('/pets', { params: { species } }),
  getPetById: (id) => api.get(`/pets/${id}`),
  createPet: (pet) => api.post('/pets', pet),
  updatePet: (id, pet) => api.put(`/pets/${id}`, pet),
  deletePet: (id) => api.delete(`/pets/${id}`),
};

export default api;
