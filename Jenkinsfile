pipeline {
  agent any
  tools {nodejs "yarn"}
  stages {
    stage('Install node packages') {
      steps {
        sh 'yarn'
      }
    }
    stage('Bundle app') {
      steps {
        sh 'yarn run predeploy'
      }
    }
    stage('Deploy to github pages') {
      steps {
        sh 'yarn run deploy'
      }
    }
  }
}
