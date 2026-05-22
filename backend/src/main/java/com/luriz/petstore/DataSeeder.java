package com.luriz.petstore;

import com.luriz.petstore.model.Pet;
import com.luriz.petstore.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private PetRepository repository;

    @Override
    public void run(String... args) throws Exception {
        if (repository.count() == 0) {
            repository.saveAll(List.of(
                // Dogs
                new Pet(null, "Bruno", "Dog", "Golden Retriever", 3, new BigDecimal("2200"), "A very friendly and energetic companion.", "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800"),
                new Pet(null, "Maxxi", "Dog", "German Shepherd", 4, new BigDecimal("1750"), "Loyal and well-trained guard dog.", "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=800"),
                new Pet(null, "Red", "Dog", "Beagle", 2, new BigDecimal("1950"), "Curious and active hunter.", "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800"),
                new Pet(null, "June", "Dog", "Boxer", 1, new BigDecimal("1500"), "Playful and protective family dog.", "https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=800"),
                new Pet(null, "Floral", "Dog", "Poodle", 2, new BigDecimal("2350"), "Intelligent and very stylish.", "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"),
                new Pet(null, "javar", "Dog", "Bulldog", 4, new BigDecimal("1300"), "Calm, courageous, and friendly.", "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800"),
                
                // Cats
                new Pet(null, "Riles", "Cat", "Siamese", 2, new BigDecimal("1100"), "Elegant and vocal Siamese kitten.", "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800"),
                new Pet(null, "Clyden", "Cat", "Maine Coon", 3, new BigDecimal("1000"), "Gentle giant with a fluffy coat.", "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800"),
                new Pet(null, "Hera", "Cat", "Persian", 2, new BigDecimal("1240"), "Placid and sweet-natured companion.", "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800"),
                new Pet(null, "Zara", "Cat", "Abyssinian", 1, new BigDecimal("1450"), "Extremely intelligent and inquisitive.", "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=800"),
                new Pet(null, "Haez", "Cat", "Ragdoll", 2, new BigDecimal("1200"), "Affectionate and docile lap cat.", "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800"),
                
                // Birds
                new Pet(null, "Oreo", "Bird", "Parrot", 2, new BigDecimal("750"), "Can talk and loves attention.", "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800"),
                new Pet(null, "Art", "Bird", "Cockatiel", 3, new BigDecimal("450"), "Cheerful and loves to whistle.", "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=800"),
                new Pet(null, "Reese", "Bird", "Canary", 4, new BigDecimal("380"), "Beautiful singer with vibrant yellow feathers.", "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800"),
                new Pet(null, "Tamed", "Bird", "Lovebird", 3, new BigDecimal("820"), "Social and affectionate pair-bound bird.", "https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?w=800"),
                new Pet(null, "Roswell", "Bird", "Macaw", 4, new BigDecimal("500"), "Magnificent and long-lived companion.", "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?w=800"),
                
                // Fishes
                new Pet(null, "Zeus", "Fish", "Goldfish", 2, new BigDecimal("150"), "Low maintenance and beautiful.", "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=800"),
                new Pet(null, "Finn", "Fish", "Betta", 3, new BigDecimal("130"), "Stunning blue and red fins.", "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=800"),
                new Pet(null, "Butter", "Fish", "Angelfish", 1, new BigDecimal("450"), "Majestic swimmer for your aquarium.", "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=800"),
                new Pet(null, "Fiery", "Fish", "Guppy", 1, new BigDecimal("675"), "Vibrant tail and very active swimmer.", "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?w=800")
            ));
            System.out.println("Database seeded with initial pets successfully.");
        }
    }
}