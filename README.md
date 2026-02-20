# SER516 Java Defects Detector

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

| Variable | Description  | Default |
|----------|--------------|---------|
| PORT     | Server port  | 8080    |
| PORT     | Frontend Port| 3000    |

# Frontend
> [!NOTE]
> For the frontend to work the backend must be running.


## Docker

run `compose up --build` to run both the backend and the frontend
**Note** Port 3000 is needed to run the frontend

## Without docker

run `npx http-server . -p 3000` in the frontend directory


