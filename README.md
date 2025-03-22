# React + Redux Frontend Assignment

This is a React application built with Vite that integrates Redux for state management. It fetches data from a public API and displays a list with search and detail views.

##  Project Setup

### 1 Installation
Clone the repository:

git clone https://github.com/simran-18/task.git
cd tasks

Ensure you have **Node.js** installed, then run:
```sh
npm i
```

### 2 Running the Project (Development Mode)
```sh
npm run dev
```
This starts a development server, typically at `http://localhost:5173/`.

### 3 Building for Production
To create an optimized production build:
```sh
npm run-script build
```
This generates the production files inside the `dist/` directory.

### 4 Previewing the Production Build
To preview the production build locally:
```sh
npm run-script preview
```
This serves the built project on a local server.

### 5 Running Tests
```sh
npm test
```
This runs unit and integration tests using Jest and React Testing Library.

##  Project Structure
```
/src
│── redux/          # Redux store & slices
│── pages/          # React pages (List, Details)
│── hooks/          # Custom hooks for API calls
│── components/     # Reusable UI components
│── styles/         # Global & component styles
│── App.jsx         # Root component
│── main.jsx        # Entry point
```

##  Features Implemented
 List View - Fetch & display data
 Search & Filter - Search items dynamically
 Detail View - Show item details
 Redux Store - Manage global state
 Routing - Navigate between pages
 Testing - Basic coverage with Jest

---
## Ready for submission! Let me know if you need any refinements. **