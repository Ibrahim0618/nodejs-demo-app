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
                bat 'docker build -t nodejs-demo-app .'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker rm -f nodejs-demo-container || exit 0'
                bat 'docker run -d --name nodejs-demo-container -p 8081:3000 nodejs-demo-app'
            }
        }
    }
}