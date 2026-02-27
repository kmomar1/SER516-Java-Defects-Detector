# SER516 Java Defects Detector

# Backend

Backend server for the Java Defects Detector application, built with Node.js and Express.

# Frontend

Frontend here is a basic page with an input field to paste a GitHub repo URL to analyze

## Docker (Recommended Approach to Run Project)
- Navigate to the root of the project and make sure the docker-compose file is there
- run `compose up --build` to run both the backend and the frontend
- Open a browser and type http://localhost:3000 to access the frontend

> [!NOTE]
> Port 3000 is needed to run the frontend and 8080 to run the backend

# API

## Github clone API
**POST API**
`localhost:PORT/api/github/clone`
body:

`{"github_link": "https://github.com/nmoham46/SleekBoard.git"}`

## PMD analyze 
this api is used to run PMD on a local repo
**POST API**
`http://localhost:PORT/api/pmd/run-pmd`

body:

`{"repoPath": "./repos/ser516public.git"}`

## Clone and run PMD analyze
> this is a GET api beacuse it might be used with Prometheus in the future
This api will clone a GitHub repo and run PMD analyze on it

**GET API**
`http://localhost:8080/api/pmd/analyze?github_link=`
