# SER516 Java Defects Detector

# Backend

Backend server for the Java Defects Detector application, built with Node.js and Express.

# Frontend

Frontend here is a basic page with an input field to paste a GitHub repo URL to analyze

## Docker (Recommended Approach to Run Project)
- Navigate to the root of the project and make sure the docker-compose file is there
- run `compose up --build` to run both the backend and the frontend
- Open a browser and type http://localhost:3000 to access the frontend

## Running Backend Tests

```bash
cd backend

npm install

npm test
```

> [!NOTE]
> Port 3000 is needed to run the frontend and 8080 to run the backend




