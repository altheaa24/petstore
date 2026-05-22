package com.luriz.petstore.controller;

import com.luriz.petstore.model.Pet;
import com.luriz.petstore.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"}, allowedHeaders = "*")
public class PetController {

    @Autowired
    private PetService petService;

    @GetMapping
    public List<Pet> getAllPets(@RequestParam(required = false) String species) {
        if (species != null && !species.trim().isEmpty() && !species.equalsIgnoreCase("ALL PETS")) {
            // Cleans inputs and turns "DOGS" or "dog" into normalized strings ("Dog" / "Bird" etc.)
            String formattedSpecies = species.trim().toLowerCase();
            if (formattedSpecies.endsWith("s")) {
                formattedSpecies = formattedSpecies.substring(0, formattedSpecies.length() - 1);
            }
            // Capitalize first letter (e.g., "dog" -> "Dog")
            formattedSpecies = formattedSpecies.substring(0, 1).toUpperCase() + formattedSpecies.substring(1);
            
            return petService.getPetsBySpecies(formattedSpecies);
        }
        return petService.getAllPets();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable Long id) {
        return petService.getPetById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Pet createPet(@RequestBody Pet pet) {
        return petService.savePet(pet);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pet> updatePet(@PathVariable Long id, @RequestBody Pet petDetails) {
        return petService.getPetById(id)
                .map(existingPet -> {
                    existingPet.setName(petDetails.getName());
                    existingPet.setSpecies(petDetails.getSpecies());
                    existingPet.setBreed(petDetails.getBreed());
                    existingPet.setAge(petDetails.getAge());
                    existingPet.setPrice(petDetails.getPrice());
                    existingPet.setDescription(petDetails.getDescription());
                    existingPet.setImageUrl(petDetails.getImageUrl());
                    return ResponseEntity.ok(petService.savePet(existingPet));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePet(@PathVariable Long id) {
        if (petService.getPetById(id).isPresent()) {
            petService.deletePet(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}