pipeline {
    agent any
    stages {
        stage('Install Apache') {
            steps {
                script {
                    // Detect OS and install Apache accordingly
                    def os = sh(script: "uname -a", returnStdout: true).toLowerCase()
                    if (os.contains("ubuntu") || os.contains("debian")) {
                        sh '''
                            sudo apt update
                            sudo apt install -y apache2
                            sudo systemctl start apache2
                            sudo systemctl enable apache2
                        '''
                    } else if (os.contains("centos") || os.contains("redhat") || os.contains("fedora")) {
                        sh '''
                            sudo yum install -y httpd
                            sudo systemctl start httpd
                            sudo systemctl enable httpd
                        '''
                    } else {
                        error("Unsupported OS for Apache installation.")
                    }
                }
            }
        }
    }
}
