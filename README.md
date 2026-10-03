
# Node.js CI/CD Pipeline Using GitHub Actions

## Project Overview
This project demonstrates an automated CI/CD pipeline using GitHub Actions and Docker. Whenever code is pushed to the main branch, GitHub Actions automatically installs dependencies, runs tests, builds a Docker image, and pushes the image to Docker Hub.

## Technologies Used
- Node.js
- Express.js
- GitHub
- GitHub Actions
- Docker
- Docker Hub

## Project Workflow
1. Push application code to GitHub.
2. GitHub Actions triggers the CI/CD workflow.
3. Install Node.js dependencies.
4. Run application tests.
5. Build the Docker image.
6. Push the Docker image to Docker Hub.

## Project Structure
```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── node_modules/
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
└── README.md
```

## Run the Application Locally

Install dependencies:
```bash
npm install
```

Start the application:
```bash
npm start
```

Open in browser:
```text
http://localhost:3000
```

## Run Using Docker

Pull the Docker image:
```bash
docker pull YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest
```

Run the container:
```bash
docker run -d -p 3000:3000 --name nodejs-cicd-output YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest
```

Open `http://localhost:3000` in your browser.

## CI/CD Pipeline
The GitHub Actions workflow automatically:
- Builds and tests the Node.js application.
- Builds the Docker image after successful tests.
- Pushes the image to Docker Hub on pushes to the main branch.

## Docker Hub
Docker image: `YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest`

## Jenkins CI/CD
This project is integrated with Jenkins for automated build, test, and Docker deployment.

## Author
Muhamed Ibrahim
