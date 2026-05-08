# Tasks: Petstore E-Commerce App

**Input**: Design documents from `SPEC.md`, `PLAN.md`
**Prerequisites**: plan.md (required), spec.md (required)

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Create backend directory structure (Spring Boot)
- [ ] T002 Create frontend directory structure (React + Vite)
- [ ] T003 Initialize backend pom.xml with dependencies (Spring Boot, Data JPA, Postgres, Lombok)
- [ ] T004 Initialize frontend package.json with dependencies (Tailwind, MUI, Axios)

## Phase 2: Foundational (Blocking Prerequisites)

- [ ] T005 Configure application.properties for PostgreSQL connection
- [ ] T006 [P] Setup base Pet entity in `backend/src/main/java/com/petstore/model/Pet.java`
- [ ] T007 [P] Create PetRepository interface in `backend/src/main/java/com/petstore/repository/PetRepository.java`
- [ ] T008 [P] Configure Tailwind CSS and MUI in frontend
- [ ] T009 Create API service in `frontend/src/services/api.js` for Axios calls

## Phase 3: User Story 1 - Browse Pets (Priority: P1) 🎯 MVP

**Goal**: Display a gallery of pets from the database.

- [ ] T010 Implement `getAllPets` and `getPetsBySpecies` in PetService
- [ ] T011 Implement `PetController` with GET endpoints
- [ ] T012 Create `PetCard` component using MUI in `frontend/src/components/PetCard.jsx`
- [ ] T013 Create `PetGallery` component in `frontend/src/components/PetGallery.jsx`
- [ ] T014 Implement species filtering logic in `PetGallery`
- [ ] T015 Seed database with initial pet data

## Phase 4: User Story 2 - Manage Pets (Priority: P1)

**Goal**: Add, update, and delete pets.

- [ ] T016 Implement POST, PUT, DELETE endpoints in `PetController`
- [ ] T017 Create `PetForm` component for adding/editing pets
- [ ] T018 Create `AdminDashboard` page for pet management
- [ ] T019 Implement delete functionality with confirmation modal

## Phase 5: User Story 3 - View Pet Details (Priority: P2)

**Goal**: Show detailed info for a single pet.

- [ ] T020 Implement GET `/pets/{id}` endpoint in `PetController`
- [ ] T021 Create `PetDetails` page in `frontend/src/pages/PetDetails.jsx`
- [ ] T022 Implement navigation to pet details from gallery

## Phase 6: Deployment & Polish

- [ ] T023 Create `render.yaml` for Render Blueprint deployment
- [ ] T024 Configure frontend for production (Base URL management)
- [ ] T025 Add "No results" message and loading states
- [ ] T026 Final UI/UX polish with micro-animations
