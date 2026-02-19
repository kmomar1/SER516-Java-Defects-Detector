# SER516 Java Defects Detector

## Run Frontend + Backend (Docker)

### Requirements
- Docker Desktop installed and running

### Start
```bash
docker compose up --build
```

### URLs

- Frontend UI: `http://localhost:3000`

- Backend API: `http://localhost:8080/api`

### Notes

- Frontend is served by nginx in a container.

- nginx proxies `/api/*` requests to the backend container.

# Backend

Backend server for the Java Defects Detector application, built with Node.js and Express.

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. (Disclaimer) Env file in included with files

The server will run on the port specified in your `.env` file, or default to port 8080.

## API Endpoints

Currently, the server is set up with basic Express configuration. API endpoints will be added as the project develops.

## Project Structure

```
backend/
├── server.js          # Main application entry point
├── package.json       # Project dependencies and scripts
├── .env              # Environment variables
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT     | Server port | 8080    |

# Frontend
