pipeline {
    agent any
    stages {
        stage('Install Apache') {
            steps {
                script {
                    def osInfo = sh(script: "cat /etc/os-release", returnStdout: true).toLowerCase()
                    if (osInfo.contains("ubuntu") || osInfo.contains("debian")) {
                        sh '''
                            sudo apt update
                            sudo apt install -y apache2 curl
                            sudo systemctl start apache2
                            sudo systemctl enable apache2
                            # Зробити запити для ініціалізації логів
                            curl -I http://localhost || true
                            curl -I http://localhost/nonexistentpage || true
                        '''
                    } else if (osInfo.contains("centos") || osInfo.contains("redhat") || osInfo.contains("fedora")) {
                        sh '''
                            sudo yum install -y httpd curl
                            sudo systemctl start httpd
                            sudo systemctl enable httpd
                            curl -I http://localhost || true
                            curl -I http://localhost/nonexistentpage || true
                        '''
                    } else {
                        error("Unsupported OS for Apache installation.")
                    }
                }
            }
        }
        stage('Check Apache logs for 4xx and 5xx errors') {
            steps {
                script {
                    def osInfo = sh(script: "cat /etc/os-release", returnStdout: true).toLowerCase()
                    def logPath = ''
                    if (osInfo.contains("ubuntu") || osInfo.contains("debian")) {
                        logPath = '/var/log/apache2/access.log'
                    } else if (osInfo.contains("centos") || osInfo.contains("redhat") || osInfo.contains("fedora")) {
                        logPath = '/var/log/httpd/access_log'
                    } else {
                        error("Unsupported OS for log analysis.")
                    }
                    def fileExists = sh(script: "test -f ${logPath} && echo yes || echo no", returnStdout: true).trim()
                    if (fileExists == 'no') {
                        echo "Log file ${logPath} does not exist."
                        return
                    }
                    def errors = sh(script: "grep -E 'HTTP/1\\.[01]\" [45][0-9]{2}' ${logPath} || true", returnStdout: true).trim()
                    if (errors) {
                        echo "Found 4xx or 5xx errors in Apache logs:\n${errors}"
                    } else {
                        echo "No 4xx or 5xx errors found in Apache logs."
                    }
                }
            }
        }
    }
}
