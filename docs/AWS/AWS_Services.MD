# **AWS Services**


<details>
<summary>Services --oneline</summary>

1) EC2 -> Live Projects

2) VPC -> to `secure` ec2 instances

3) EBS Volumes -> add `volume` to ec2 instances

4) S3 -> `storage service`

5) IAM -> Identity and Access Management, for `authentication and authorization`.

6) Cloud Watch -> takes care of `monitoring` and `oberservibility` in aws

7) Lambda -> `serverless compute` 

8) Cloud Build services -> aws `CI/CD` using these 3 services

    - AWS Code Pipeline -> Like jenkins pipeline
    - AWS Code Build -> Fully managed build service 
    - AWS Code Deploy -> Deploying your code

9) AWS configurations services

10) Billing and costing

11) AWS KMS -> Key management service

12) Cloud Trail -> Enable `operational` and  `risk auditing`. `Record api activities` and `preserve logs` for specific durations.

13) AWS EKS -> Elastic Kubernetes service. 

14) Fargate, ECS 

15) ELK -> Elastic Search (logging search mechenism)

</details>

## **Servics**

------

### **VPC ( Virtual Private Cloud )**

This is a networking service that creates your own private network in the cloud where you can deploy your services and database in a secure and isolated manner.

------

### **EC2 ( Amazon Elastic Compute Cloud )**

Create virtual services in the cloud.

------

### **S3 ( Simple Storage Service )**

Scalable and secure object storage.

------

### **Amazon RDS ( Amazon Relational Database Service )**

Relational DB management systems, let you operate, easy setup and scaling of DB.

RDBs such as Amazon Aurora , PostgreSQL , MySQL , MariaDB , Oracle Database , and SQL Server.

------

### **Amazon IAM ( Amazon Identity and Access Management )**

Identity and access management help manage access to AWS resources.

Create and manage user, group, and control groups to maintain access and user-specific access.

------
------

## **CI/CD Services**

------
------

### **AWS CodeCommit**

Similar to Github( a secure, highly scalable, managed source control service that makes it easier for teams to collaborate on code ). GitHub for aws.

------

### **AWS Codebuild**

Fully manage build services that compile the source code, run the tests, and produce the software bundle, which is ready to deploy.

Allows you to quickly build and test code changes, enabling more frequent and fast code releases.

------

### **AWS CodeDeploy**

Automated application deployment services.

------

### **AWS CodePipeline**

Continuous delivery service that helps you automate your releases. Helps for faster and more reliable updates.

------
------

## **Networking Services**

------
------

### **VPC ( Virtual Private Cloud )**

This is a networking service that creates your own private network in the cloud where you can deploy your services and database in a secure and isolated manner.

------

### **Route 53**

Amazon Route 53 is a scalable and highly available Domain Name System (DNS) web service offered by Amazon Web Services (AWS). It provides reliable and cost-effective domain registration, DNS routing, and health checking services.

let you register domain names for applications or websites and also create and configure DNS records that can route traffic to AWS services.

------
------

## **DB Services**

------
------

### **Dynamo DB**

Amazon DynamoDB is a fully managed NoSQL database service provided by AWS. It offers seamless scalability, high performance, and automatic data replication across multiple regions for fast and reliable application development and storage.Scalable and secure object storage.

------

### **ElasticCache**

Amazon ElastiCache is a fully managed in-memory caching service provided by AWS. It supports popular caching engines such as Redis and Memcached, allowing you to improve the performance and scalability of your applications by caching frequently accessed data in a dedicated, highly available cache.Scalable and secure object storage.

------
------

## **IAC ( Infrastructure as Code ) Services**

------
------

### **Cloud Formation**

AWS CloudFormation is a service that enables you to provision and manage AWS resources using code-based templates. It allows for automated and consistent infrastructure deployment, making it easier to create and manage complex cloud architectu

------
------

## **Container Services**

------
------

### **ECR**

Amazon Elastic Container Registry (ECR) is a fully managed Docker container registry service provided by AWS. It allows you to store, manage, and deploy container images securely, making it easier to integrate container-based applications into your AWS environment. Dockerhub for AWS.

------

### **ECS**

Amazon Elastic Container Service (ECS) is a fully managed container orchestration service provided by AWS. It allows you to run, scale, and manage Docker containers in a highly available and scalable manner, simplifying the deployment and management of containerized applications.

First you push image in ECR and then ECS used to delpoy them in the form of container.

Supportes 2 different lanunhes

1. EC2 Launch type -> Deploy on EC2

2. Fragate Launch type -> In serverless Fashion.

------

### **EKS**

Amazon Elastic Kubernetes Service (EKS) is a managed Kubernetes service provided by AWS. It allows you to easily deploy, manage, and scale containerized applications using Kubernetes, providing a highly available and resilient environment for running your containers.

------
------

## **Monitoring Services**

------
------

### **Cloudwatch**

Amazon CloudWatch is a monitoring and observability service provided by AWS. It enables you to collect and track metrics, log files, and events from various AWS resources, helping you gain insights into your applications' performance, troubleshoot issues, and automate actions based on predefined conditions.

Let's you collect and track meturces, log files and set alarams.

------

### **CloudTrail**

Amazon CloudTrail is a service provided by AWS that enables you to log, monitor, and retain account activity across your AWS infrastructure. It provides a comprehensive audit trail of API calls and events, aiding in compliance, security analysis, and troubleshooting.

------
------

## **Automation Services**

------
------

### **Lambda**

It allows you to run code without provisioning or managing servers, scaling automatically in response to incoming requests, and charging only for the compute time consumed by your code.

------

### **AWS System Manager**

Helps you manage your EC2 instances and on-premises systems at scale. It provides a unified interface for system inventory, patch management, configuration automation, and secure remote access, simplifying operational tasks and improving security compliance.

------

### **Elastic Beanstalk**

AWS Elastic Beanstalk is a fully managed service that simplifies the deployment and management of applications in various programming languages. 

It handles the underlying infrastructure and autoscaling, allowing developers to focus on writing code and deploying applications quickly.

------
------

## **Security Services**

------
------

### **KMS**

AWS Key Management Service (KMS) is a fully managed service that enables you to create and control encryption keys for securing your data stored in AWS services and applications.

It offers seamless integration with other AWS services and provides robust security features to protect your sensitive data.

------

### **Secret manager**

AWS Secrets Manager is a fully managed service that helps you protect sensitive information, such as API keys and database credentials. It simplifies the management of secrets by securely storing, encrypting, and rotating them, making it easier to adhere to security best practices.
