pipeline {
  agent {
    node {
      label 'booklify-build'
    }

  }
  stages {
    stage('git init') {
      steps {
        sh 'git init'
      }
    }

    stage('git pull') {
      steps {
        sh 'git pull https://github.com/edoardovicenzi/s2i-booklify'
      }
    }

    stage('npm install') {
      steps {
        sh 'npm install'
      }
    }

  }
}