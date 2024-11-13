pipeline {
  agent any
  stages {
    stage('git pull') {
      steps {
        git(url: 'https://github.com/edoardovicenzi/s2i-booklify/', branch: 'main')
      }
    }

    stage('npm install') {
      steps {
        sh 'npm install'
      }
    }

  }
}