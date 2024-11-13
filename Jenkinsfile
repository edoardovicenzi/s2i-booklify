pipeline {
  agent any
  tools {nodejs "yarn"}
  stages {
    stage('Install node packages') {
      steps {
        sh 'npm install'
      }
    }
  }
}
