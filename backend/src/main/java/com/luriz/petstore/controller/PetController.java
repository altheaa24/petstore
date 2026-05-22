package com.luriz.petstore.controller;

import com.luriz.petstore.model.Pet;
import com.luriz.petstore.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
@CrossOrigin(origins = "https://petstore-frontend-ztp4.onrender.com", allowCredentials = "true")
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @GetMapping
    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    @GetMapping("/{id}")
    public Pet getPetById(@PathVariable Long id) {
        return petRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pet not found with id: " + id));
    }
}