pipeline {
  agent {
    node {
      label 'booklify-build'
    }

  }
  stages {
    stage('ClearWorkspace') {
      steps {
        cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true, disableDeferredWipeout: true)
        echo 'Clean Done!'
      }
    }

  }
}