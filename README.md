# Petstore - Premium E-Commerce for Pets

A full-stack e-commerce application built with **Java Spring Boot**, **PostgreSQL**, and **React**.

## Tech Stack

- **Backend**: Java 17, Spring Boot 3, Spring Data JPA, PostgreSQL.
- **Frontend**: React (Vite), Tailwind CSS, Material UI (MUI).
- **Deployment**: Render (Blueprint with `render.yaml`).

## Features

- **Pet Gallery**: Browse available pets with species-based filtering.
- **Pet Details**: View detailed information about each pet.
- **Admin Dashboard**: Create, update, and delete pet listings.
- **Responsive Design**: Works seamlessly on mobile and desktop.
- **Data Persistence**: All changes are saved to a PostgreSQL database.

## Local Setup

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- PostgreSQL (running locally or a connection string)

### Backend
1. Navigate to the `backend` directory.
2. Update `src/main/resources/application.properties` with your PostgreSQL credentials.
3. Run `./mvnw spring-boot:run` (or use your IDE).

### Frontend
1. Navigate to the `frontend` directory.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open [http://localhost:5173](http://localhost:5173).

## Deployment

This project is configured for **Render**. 
Simply connect your GitHub repository and Render will automatically detect the `render.yaml` file to set up the backend, frontend, and database.
