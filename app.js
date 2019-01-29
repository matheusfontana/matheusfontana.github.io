new Vue({
  el: '#app',
  data: {
    topics: [
      { name: "Blockchain" },
      { name: "Centralized Configuration" },
      { name: "DevOps" }, 
      { name: "ELK Stack" }, 
      { name: "Full Stack Web Development" },
      { name: "GraphQL" },
      { name: "Linux" },
      { name: "Microservices" },
      { name: "Software Architecture and Development" },
      { name: "Spring Boot Framework" },
      { name: "SRE" },
      { name: "Symfony Framework" },
      { name: "Test Driven Development" },
    ],
    eLearningPlatforms: [
      { 
        name: "IBM", 
        subjects: [
          {
            name: "Agile",
            show: false, 
            courses: [
              {
                name: "A Taste of Agile",
                link: "https://agile-ibm.mybluemix.net/courses/taste-of-agile",
                time: "2h2min",
                paid: false 
              },
              {
                name: "Operations Fundamentals",
                link: "https://agile-ibm.mybluemix.net/courses/agile-operations-fundamentals",
                time: "1h21min",
                paid: false 
              },
            ]
          }
        ]
      },
      { 
        name: "Udemy", 
        subjects: [
          {
            name: "ELK Stack",
            show: false, 
            courses: [
              {
                name: "Elasticsearch LogStash Kibana",
                link: "https://www.udemy.com/elasticsearch-complete-guide/learn/v4/",
                time: "13h",
                paid: true 
              }
            ]
          },
          {
            name: "Mobile Development",
            show: false, 
            courses: [
              {
                name: "iOS10 Developer - Create Real Apps in Swift 3",
                link: "https://www.udemy.com/the-complete-ios-10-developer-course/",
                time: "13h",
                paid: true 
              }
            ]
          },
          {
            name: "Backend Development",
            show: false, 
            courses: [
              {
                name: "nodeJS with MongoDB",
                link: "https://www.udemy.com/elasticsearch-complete-guide/learn/v4/",
                time: "?",
                paid: true 
              },
              {
                name: "Python REST APIs with Flask, Docker, MongoDB, and AWS DevOps",
                link: "https://www.udemy.com/elasticsearch-complete-guide/learn/v4/",
                time: "?",
                paid: true 
              },
              {
                name: "OAuth2",
                link: "https://www.udemy.com/learn-oauth-2/",
                time: "?",
                paid: true 
              },
              {
                name: "Java - Design Patterns",
                link: "https://www.udemy.com/design-patterns-java/",
                time: "?",
                paid: true 
              },
              {
                name: "Java - Test Driven Development",
                link: "https://www.udemy.com/learn-test-driven-development-in-java/",
                time: "?",
                paid: true 
              },
              {
                name: "Java - Spring Boot RESTFul with MySQL",
                link: "https://www.udemy.com/restful-web-service-with-spring-boot-jpa-and-mysql/",
                time: "?",
                paid: true 
              },
              {
                name: "Java - Microservices with Spring Boot",
                link: "https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/",
                time: "?",
                paid: true 
              }
            ]
          },
          {
            name: "DevOps",
            show: false, 
            courses: [
              {
                name: "Kubernetes",
                link: "https://www.udemy.com/learn-devops-the-complete-kubernetes-course/",
                time: "11h5min",
                paid: true 
              },
              {
                name: "Kubernetes Advanced",
                link: "https://www.udemy.com/learn-devops-advanced-kubernetes-usage/",
                time: "3h30min",
                paid: true 
              }
              ,
              {
                name: "Docker from Zero to Hero",
                link: "https://www.udemy.com/docker-mastery/",
                time: "?",
                paid: true 
              },
              {
                name: "Jenkins CI/CD for Developers and DevOps",
                link: "https://www.udemy.com/the-complete-jenkins-course-for-developers-and-devops",
                time: "4h",
                paid: true 
              },
              {
                name: "Ansible Essentials",
                link: "https://www.udemy.com/learn-devops-advanced-kubernetes-usage/",
                time: "?",
                paid: false 
              },
              {
                name: "Ansible for Beginners",
                link: "https://www.udemy.com/learn-ansible/",
                time: "?",
                paid: true 
              },
              {
                name: "Ansible Mastering",
                link: "https://www.udemy.com/mastering-ansible/",
                time: "?",
                paid: true 
              },
              {
                name: "Terraform Infrastructure Provisioning and Automation",
                link: "https://www.udemy.com/learn-devops-infrastructure-automation-with-terraform/",
                time: "?",
                paid: true 
              },
              {
                name: "Zabbix Network Monitoring",
                link: "https://www.udemy.com/zabbix-network-monitoring-essentials/",
                time: "?",
                paid: true 
              },
              {
                name: "Linux Server Administration Bootcamp",
                link: "https://www.udemy.com/linux-administration-bootcamp/",
                time: "8h",
                paid: true 
              },
              {
                name: "Amazon Web Services (AWS) Certified - 4 Certifications",
                link: "https://www.udemy.com/aws-certified-associate-architect-developer-sysops-admin/",
                time: "?",
                paid: true 
              },
              {
                name: "Amazon Web Services (AWS) - Featuring IAM",
                link: "https://www.udemy.com/mastering-aws-featuring-iam/",
                time: "?",
                paid: false 
              },
              {
                name: "Amazon Web Services (AWS) - Zero to Hero",
                link: "https://www.udemy.com/amazon-web-services-aws-v/",
                time: "?",
                paid: true 
              }
            ]
          }
        ]
      },
    ]
  }
}) 
