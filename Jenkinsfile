pipeline {
  agent any

  environment {
    NODE_HOME = "/usr/bin"
    MAVEN_HOME = "/usr/share/maven"
  }

  stages {
    stage('Checkout') {
    steps {
        git branch: 'main', credentialsId: 'github-ssh-new', url: 'git@github.com:Dracon-24/weather-reporter.git'
    }
}



    stage('Install Dependencies') {
      steps {
        dir('node-service') {
          sh 'npm install'
        }
      }
    }

    stage('Run Node Tests') {
      steps {
        dir('node-service') {
          sh 'npm test'
        }
      }
    }

    stage('Run Java Tests') {
      steps {
        dir('java-service') {
          sh 'mvn test'
        }
      }
    }

    stage('Docker Build & Compose') {
      steps {
        sh 'docker compose down || true'
        sh 'docker compose up --build -d'
      }
    }
  }

  post {
    always {
      echo 'CI/CD Pipeline Completed.'
    }
  }
}
