pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        COMPOSE_PROJECT_NAME = "ser516"
    }

    options {
        timestamps()
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Checking out source code..."
                checkout scm
            }
        }

        stage('Stop Old Containers') {
            steps {
                echo "Stopping existing containers..."
                sh 'docker compose down || true'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo "Building Docker images..."
                sh 'docker compose build'
            }
        }

        stage('Run Backend Tests') {
            steps {
                echo "Running backend unit tests..."
                sh 'docker compose run --rm pmd npm test'
            }
        }

        stage('Deploy Application') {
            steps {
                echo "Starting application..."
                sh 'docker compose up -d'
            }
        }
    }

    post {

        success {
            echo "Build succeeded. Application deployed successfully."
        }

        failure {
            echo "Build failed. Fix defects before merging."
        }

        always {
            echo "Pipeline execution completed."
        }
    }
}