# Step 1: Build inside a verified Maven container
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Step 2: Use the modern Eclipse Temurin image instead of deprecated openjdk
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/petstore-backend-0.0.1-SNAPSHOT.jar petstore.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "petstore.jar", "--spring.main.web-application-type=servlet"]