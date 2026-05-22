package com.luriz.petstore;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.Collections;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        
        // This explicitly authorizes your exact Render frontend link
        config.setAllowedOrigins(Collections.singletonList("https://petstore-frontend-ztp4.onrender.com"));
        
        // This ensures pre-flight OPTIONS requests pass through flawlessly
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization", "X-Requested-With"));
        config.setExposedHeaders(Arrays.asList("Authorization", "Link", "X-Total-Count"));
        config.setAllowCredentials(true);
        config.setMaxAge(3600L); // Caches the handshake for 1 hour to prevent constant checking
        
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}