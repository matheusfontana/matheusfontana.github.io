new Vue({
  el: '#app',
  data: {
    topics: [
      { name: "Agile" },
      { name: "AWS" },
      { name: "Blockchain" },
      { name: "Back End Technologies" },
      { name: "Centralized Configuration" },
      { name: "DevOps & Infrastructure" }, 
      { name: "Event Stream Processing & Logging" }, 
      { name: "Front End Technologies" },
      { name: "GraphQL" },
      { name: "Linux" },
      { name: "Microservices" },
      { name: "Mobile Development" },
      { name: "Software Architecture" },
      { name: "Spring Boot Framework" },
      { name: "SRE" },
      { name: "Symfony Framework" },
      { name: "Test Driven Development" },
      { name: "UI/UX" },
    ],
    eLearningPlatforms: [
      { 
        name: "IBM (all accessible outside IBM's corporate network via SSO)", 
        subjects: [
          {
            name: "Agile",
            show: false, 
            courses: [
              {
                name: "Web Services and XML",
                link: "https://yourlearning.ibm.com/#activity/ELC-SSWD_XMLE_A05_IT_ENUS",
                time: "1h30min",
                paid: false 
              },
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
            name: "Event Stream Processing & Logging",
            show: false, 
            courses: [
              {
                name: "Elasticsearch LogStash Kibana - The ELK Stack Guide",
                link: "https://www.udemy.com/elasticsearch-complete-guide/learn/v4/",
                time: "13h",
                paid: true 
              },
              {
                name: "Apache Kafka for Beginners",
                link: "https://www.udemy.com/elasticsearch-complete-guide/learn/v4/",
                time: "7h30min",
                paid: true 
              },
              {
                name: "Apache Kafka - Stream Data Processing",
                link: "https://www.udemy.com/kafka-streams/",
                time: "5h",
                paid: true 
              },
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
            name: "AWS",
            show: false,
            courses: [
              {
                name: "Amazon Web Services (AWS) Certified - 4 Certifications",
                link: "https://www.udemy.com/aws-certified-associate-architect-developer-sysops-admin/",
                time: "26h30min",
                paid: true 
              },
              {
                name: "Amazon Web Services (AWS) - Featuring IAM",
                link: "https://www.udemy.com/mastering-aws-featuring-iam/",
                time: "1h30min",
                paid: false 
              },
              {
                name: "Amazon Web Services (AWS) - Zero to Hero",
                link: "https://www.udemy.com/amazon-web-services-aws-v/",
                time: "2h30min",
                paid: false 
              } ,
              {
                name: "AWS Serverless APIs & Apps - A Complete Introduction",
                link: "https://www.udemy.com/aws-serverless-a-complete-introduction/",
                time: "7h30min",
                paid: true 
              }  
            ]
          },
          {
            name: "Front End Technologies",
            show: false, 
            courses: [
              {
                name: "VueJS 2",
                link: "https://www.udemy.com/vuejs-2-the-complete-guide/",
                time: "21h30min",
                paid: true 
              }
            ]
          },
          {
            name: "Back End Technologies",
            show: false, 
            courses: [
              {
                name: "nodeJS with MongoDB",
                link: "https://www.udemy.com/the-complete-nodejs-developer-course-2/",
                time: "26h30min",
                paid: true 
              },
              {
                name: "Python REST APIs with Flask, Docker, MongoDB, and AWS DevOps",
                link: "https://www.udemy.com/python-rest-apis-with-flask-docker-mongodb-and-aws-devops/",
                time: "11h30min",
                paid: true 
              },
              {
                name: "OAuth2",
                link: "https://www.udemy.com/learn-oauth-2/",
                time: "3h30min",
                paid: true 
              },
              {
                name: "Java - Design Patterns",
                link: "https://www.udemy.com/design-patterns-java/",
                time: "10h30min",
                paid: true 
              },
              {
                name: "Java - Test Driven Development",
                link: "https://www.udemy.com/learn-test-driven-development-in-java/",
                time: "3h",
                paid: true 
              },
              {
                name: "Java - Spring Boot RESTFul with MySQL",
                link: "https://www.udemy.com/restful-web-service-with-spring-boot-jpa-and-mysql/",
                time: "20h",
                paid: true 
              },
              {
                name: "Java - Microservices with Spring Boot and Spring Cloud",
                link: "https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/",
                time: "11h",
                paid: true 
              }
            ]
          },
          {
            name: "DevOps & Infrastructure",
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
                name: "Docker Mastery: The Complete Toolset From a Docker Captain",
                link: "https://www.udemy.com/docker-mastery/",
                time: "8h30min",
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
                link: "https://www.udemy.com/ansible-essentials-simplicity-in-automation/",
                time: "1h30min",
                paid: false 
              },
              {
                name: "Ansible for Beginners",
                link: "https://www.udemy.com/learn-ansible/",
                time: "2h30min",
                paid: true 
              },
              {
                name: "Ansible Mastering",
                link: "https://www.udemy.com/mastering-ansible/",
                time: "5h",
                paid: true 
              },
              {
                name: "Terraform Infrastructure Provisioning and Automation",
                link: "https://www.udemy.com/learn-devops-infrastructure-automation-with-terraform/",
                time: "6h30min",
                paid: true 
              },
              {
                name: "Zabbix Network Monitoring Essentials",
                link: "https://www.udemy.com/zabbix-network-monitoring-essentials/",
                time: "2h30min",
                paid: true 
              },
              {
                name: "Linux Server Administration Bootcamp",
                link: "https://www.udemy.com/linux-administration-bootcamp/",
                time: "8h",
                paid: true 
              },
            ]
          }
        ]
      },
    ]
  }
}) 
