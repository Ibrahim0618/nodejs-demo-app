pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                bat '"C:\\Users\\User\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" build -t nodejs-demo-app .'
            }
        }

        stage('Deploy') {
            steps {
                bat '"C:\\Users\\User\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" rm -f nodejs-demo-container || exit 0'
                bat '"C:\\Users\\User\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" run -d --name nodejs-demo-container -p 8081:3000 nodejs-demo-app'
            }
        }
    }
}