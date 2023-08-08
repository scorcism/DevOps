# DevOps Concepts Notes

<details>
  <summary>SDLC - software development life cycle</summary>

- software development life cycle.

- It is a process used by the software industry.

- It is a set of standards followed in the software industry to design, develop, and test.

- The end goal is to deliver a high-quality product.

- For developing any new feature in the organisation, we follow some steps, which are:

- **_Planing, Defiing, Desiging, Building, Testing, Deploying, and Planning_** _Cycle structure_

- **Planning + Requirements Gathering**
- Most Important
- Plan for the new features, whether they are required or not. 
- Requirements: Gather the requirements about the project use case.
- Suppose you are working to add a new category to the shop, so in plaining, you will decide if it is required or not, and in requirements, you will decide what is the best suit for that category.

- **Defining + Desigining**
- Defining -> Here, you clearly define the requirements in terms of documents. 
- Documents are the software requirements specification documents, which include all the data as part of the planning phase.
- Designing: very critical phase, here we do high-level design (HLD) and low-level design (LLD).

- **Building, Testing, and Deployment** (Devops-centric)


- **Building** _Developers_
- Developing: code writing After code is done, it is stored in a central repository.


- **Testing** QA Engenniers
- The codes that were written by the developer are tested here. The application that is stored in the git repo is taken and deployed on a server. Then the QA team takes care of testing the software.

- **Deployment**
In this phase, we promote the application to production.
</details>

<details>
<summary>AWS CLI</summary>

1) **Using cmd**
    - `ssh -i path/to/private/key hostname@ipaddress`

2) **aws cli**
    - Install aws cli
    - create aws access  key
    - `aws version` -> check aws 
    - `aws configure`
    - `aws s3 ls` -> list s3 buckets
    - `aws ec2 describe-instances` -> list ec2 
    - https://gist.github.com/mda590/679aba60ca03699d5b12a32314debdc0 -> python boto3
    - 



</details>

<details>
<summary>Configuration Management</summary>

What is Configuration Management ?

it is the way how the devops enginners manages the configurations of the server or infrastructure.

**Puppet vs Anisble**

Puppet is a pull mechanism model. 

Pupet uses master slave arch.. 

In Pupet agent configuration is needed.

Anisble is a `push`(developer writes the ansible scripts  in one place, and push the configuratons to 10 ec2 instnces.so just he has to execute the anisble playbook and the configuration is updated in the push mechenism  ) mechanism model. 

Ansible uses `agent less model`. You can just put the names of ther server in a file called as `inventory file`(stores ip address of target servers), and just have the passwordless authentication enabled.

Anisble is `preety simple`. Ansible uses YAML as configuration language.

You can write your own anible module as anible is written in python.

Anisble not good with windows, debugging and performance.

Ansible as `anisble galaxy` where users can share module. 


**Ansible**

<details>

<summary>Interview Questions</summary>

[Questions](https://www.youtube.com/watch?v=j5PgN0J3d7M)

1) What is Configuration Management
> Configuration Management is a method or process of managing your software, syste m or hardware. To manage multiple servers with single tool.

2) Do you think ansible is better> If yes, why ?
> Ansible is agentless. It is packed by vast community. Is uses simple protocols such as ssh and winrm. It uses YML for writing the file.

3) Can you write an ansible playbook to install and https service and get it running ?
> Yes

4) How ansible helped your organization?
> say one practical example. 

5) What is Ansible Dynamic Inventory ?
> Ansible keeps looking at your aws account for newly added virtual machines and ansible will auto-configure those vertual machines using the concept of Dynamic Inventory. 

6) What is Ansible Tower and have you use it ? if yes, why ?
> Ansible Tower is premium version of ansible.

7) How do you manage the RBAC of users for Ansible Tower ? 
> RBAC -> Role Based Ansible Control. Manage groups in ansible tower. Managing access to ansible tower.

8) What is Ansible Galaxy command and why it is used for ?
> Ansible Galaxy creates bunch of folders using this files and folders you can structure your ansible playbooks

9) Can you explain me structure of Ansible playbook using roles?
> ansible has a standard structure. we can use ansible-galaxy command to create the structure. 

> Role -> 

10) What are handlers in Ansible and why are they used ?
> They are similar to normal task in ansible. They only run when a task contains a notify directive. Conditional task. This tasks only run after some notifications.

11) I would like to run a specific set of tasks only on windows vms and not Linux vms is it possible ?
> you can use tags. you can also find the environment variable and you can use conditional bases running of task.

12) Does ansible support parallel execution of tasks ?
> ansible does parallel execution, if there ar 5 tasks it executes task 1 on all the configured servers then it runs task by task in serial way.

13) What protocol does ansible use to connect to windows vms ?
> `winrm` to connect to windows and `ssh` for linux

14) Can you place them in the order od precedence ?
> playbook group_vars, role vars and extra vars

15) How do you handle secrets in Ansible ?
> you can configure vault.  


16) Can we use ansible for IaC ? If yes, can you compare it with any other IaC toos like Terraform ?
> Yes, ansible is configuration management tool it might some of the things like creating ec2 instance or something like that but it is used for configuration management

17) Can you talk about a ansible playbook that you write and how it helped your company ?
> Explain your thoughts

18) What do you think that ansible can improve ?
> In debugging, windows support can be improved, can support more ides, develop more plugins.


</details>

Ansible files are call as `playbooks`

singline line commands ~~ ls is called `adhoc commands`



<details>
<summary>Commands</summary>

[MODULES LINKS](https://docs.ansible.com/ansible/2.9/modules/)

```bash
vim inventory

x.x.x.x

```

_GROUPING_

```bash
vim inventory
[dbserver]
x.x.x.x
x.x.x.x

[webservers]
x.x.x.x
x.x.x.x

```

_COMMANDS_

```bash

ansible --version

ansible -i[location of inventory file] inventory all -m[module] "shell" -a[command to execute] "touch devopsclass" # Adhoc command

# group bases
ansible -i inventory webservers -m[module] "shell" -a[command to execute] "touch devopsclass" # Adhoc command

```

**Ansible playbook**

```bash

vim first-playbook.yml

--- 
- name: Install and Start nginx #name of the playbook
  hosts: all # on which server to execute
  become: root # Ececute this playbook as a root user

  tasks:
    - name: Install nginx # Task name
      apt:
        name: nginx
        state: present
      # ~~ shell: apt install nginx 

    - name: Start nginx
      # shell: systemctl start nginx
      service:
        name: nginx
        start: started  

ansible-playbook -vvv -i inventory first-playbook.yml

```

ansible -> to run ansible adhoc commands

ansible-playbook -> to run ansible playbbo

ansible roles -> efficient way of writing ansible playbooks that will improve effencency to write complex playbook.

```bash
# configure kubernetes

mkdir second-playbook
cd second-playbook

ansible-galaxy role init kubernetes

# Using this ansible creates bunch of folder using this files and folders you can structure your ansible playbooks

# meta -> write metatdata
# defaults -> store varibles
# tasks -> 
# vars 
# test
# handlers -> handling some kind of exceptions


```

</details>
</details>

<details>
<summary>Infrastructure as Code</summary>

**Problem ?**

IaC is a concept using which we can automate our infrasturcture.

**API as code ?**

api as code is a concept using which you can automate any provider weather its aws, azure anything using their apis. 

**Terraform**

Teraaform is a concept which is used to sove all of these problems, also works on the same concept of IaC, but terraform as advance capabilities called API as Code.

where insted of you writing all of these, terraform says that just learn one language i.e terraform that will take care of talking to all of those cloud providers using the concept of API as Code.

</details>

<details>
<summary>Terraform</summary>

What tf basically does is, you configure  tf provider and tf will talk to the target api.

target api ?

> suppose, you have set tf provider as aws so what tf will understand is, what ever the user has writeen(configuration files) , tf will convert this config files into that api that aws will understand.

- Templating language is the same.

- Track Infrastructure

- Automate changes

- Collaborate

- Standardize Configurations -> standardizing the way of writing.

### tf lifecycle

- Write config file -> Define infrastructure in configuration files

- Plan -> Review the changes `support dry run`

- Apply

- Destroy


**commands**
 
requirement aws cli

 ```bash
 
 terraform init # Initilize 
 # will initilize the tf 

 terraform plan # Dry run

 terraform apply # 

 terraform destroy # 



```

**starter file**

```terraform

# create ec2 instance

vim main.ts


# tf blocks
terraform {

  # Provider details
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  # required version of tf cli
  required_version = ">= 1.2.0"
}

# option - region
provider "aws" {
  region  = "us-west-2"
}

# resources that we want
resource "aws_instance" "app_server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"

  tags = {
    Name = "Terraform_Demo"
  }
}


```

#### using the state file tf will track all the changes `*.tfstate`

tf uses state file to track everything that it has created

you should `store` your state file `remotely`.

not on you `local` machine

its not good idea to store the state file in  `source control`

store state file in remote storage services

Isolate and organize the state files to reduce the blast radius 

Ideal tf structure
![tf](https://imgur.com/rL1oLMA.png)

[repo todo](https://github.com/iam-veeramalla/write_your_first_terraform_project/)


#### Modules

- existing modules

- write your own modules

#### Problems

1) state file is single source of truth

2) manual changes to the cloud provider cannot be identified and auto-coorected.

3) Not a GitOps frendly tool. Don't play well with flux or argo

4) can become very complex and difficult to manage.

5) Trying to position as a configuration management tool as well.


</details>

<details>
<summary>CI/CD</summary>

What is CI/CD?

It is basically two steps.

1) Continuous Interation: It is a process where you integrate a set of tools or processes that you follow before delivering your project to the customer.

2) Continuous Delivery: where you deploy your applications,

eg

the process and steps of testing, monitoring, and all that are to be automated under this.

Some of the steps before delivering the product to the end user

1) unit test -> testing code block, function wise
2) static code analysis: avoid memory leaks and waste of memory. syntax check, well formatted, indentation
3) Code quality and vulnerability testing
4) Automation testing (end-to-end testing) > functional testing Check if one change does not affect others. Verify in an end-to-end manner.
5) Reporting ->
6) Deploy

These steps all take a lot of time.

We need a vcs (version control system) (Github, Gitbucket, and GitLab) to maintain the versioning of the code.

When the moderator pushes the code to VCS from there, your cicd will take care.

1)

![v1](https://imgur.com/WY8umpU.png)


When the programmer commits the code to, say, github, we will setup a CICD tool, e.g., Jenkins, in our organisation, and what we will tell Jenkins is to always watch the repo, and when ever there is a merge request, push request, or new commit on a specific branch, just tell me, and what Jenkins will do is, after listing the event, run a set of actions.
and after that, Jenkins will run all that as part of testing.

Jenkis will act as an orchentrator, a pipeline, As part of these pipelines, Jenkins will automate and orchestrate a lot of tools.

Jenkins is called the orchestrator, which will facilitate all of the tools using the Jenkins pipeline.


2) 

![v2](https://imgur.com/sbSS1W8.png)

jenkins can also promote the applications to different stages.


</details>


<details>
<summary>Jenkins</summary>

### Install

Pre-Requisites:

- Java (JDK)

**Run the below commands to install Java and Jenkins**

Install Java

```bash

sudo apt update
sudo apt install openjdk-11-jre

```

Now, you can proceed with installing Jenkins

```bash

curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins

```

allow inbound rules

### Docker Slave Configuration

Run the below command to Install Docker

```
sudo apt update
sudo apt install docker.io
```

#### Grant Jenkins user and Ubuntu user permission to docker deamon.


```bash
sudo su - 
usermod -aG docker jenkins
usermod -aG docker ubuntu
systemctl restart docker
```

Once you are done with the above steps, it is better to restart Jenkins.

```bash
http://<ec2-instance-public-ip>:8080/restart
```

The docker agent configuration is now successful.

## Install the Docker Pipeline plugin in Jenkins:

   - Log in to Jenkins.
   - Go to Manage Jenkins > Manage Plugins.
   - In the Available tab, search for "Docker Pipeline".
   - Select the plugin and click the Install button.
   - Restart Jenkins after the plugin is installed.
   
<img width="1392" alt="Screenshot 2023-02-01 at 12 17 02 PM" src="https://user-images.githubusercontent.com/43399466/215973898-7c366525-15db-4876-bd71-49522ecb267d.png">

Wait for the Jenkins to be restarted.


### Jenkinsfile

using the pipeline one which uses groove syntax and you can easily generate the goovy code using jenkins groovi generator 

simple jenkins file

```groovy
pipeline {
  agent {
    docker { image 'node:16-alpine' }
  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
      }
    }
  }
}

```

#### Jenkins interview 

1) CICD Process

[Doc](https://www.jenkins.io/doc/book/pipeline/)

![Pipeline ](https://www.jenkins.io/doc/book/resources/pipeline/realworld-pipeline-flow.png)

2) How do you handle issues in the worker node

    login to the worker node try to undertsand the problem, look into health, but this would not happen if we use docker.

3) How jenkins pipeline can be Trigered ?

  Most efficinet way is to use webhooks. Insted of jenkins watching the repo, git will send the notification to jenkins.

4) 

</details>


<details>
<summary>TODO: Realtime CI/CD Project</summary>

# Jenkins Pipeline for Java based application using Maven, SonarQube, Argo CD, Helm and Kubernetes

![screenshot](https://user-images.githubusercontent.com/43399466/228301952-abc02ca2-9942-4a67-8293-f76647b6f9d8.png)


Here are the step-by-step details to set up an end-to-end Jenkins pipeline for a Java application using SonarQube, Argo CD, Helm, and Kubernetes:

Prerequisites:

   -  Java application code hosted on a Git repository
   -   Jenkins server
   -  Kubernetes cluster
   -  Helm package manager
   -  Argo CD

Steps:

    1. Install the necessary Jenkins plugins:
       1.1 Git plugin
       1.2 Maven Integration plugin
       1.3 Pipeline plugin
       1.4 Kubernetes Continuous Deploy plugin

    2. Create a new Jenkins pipeline:
       2.1 In Jenkins, create a new pipeline job and configure it with the Git repository URL for the Java application.
       2.2 Add a Jenkinsfile to the Git repository to define the pipeline stages.

    3. Define the pipeline stages:
        Stage 1: Checkout the source code from Git.
        Stage 2: Build the Java application using Maven.
        Stage 3: Run unit tests using JUnit and Mockito.
        Stage 4: Run SonarQube analysis to check the code quality.
        Stage 5: Package the application into a JAR file.
        Stage 6: Deploy the application to a test environment using Helm.
        Stage 7: Run user acceptance tests on the deployed application.
        Stage 8: Promote the application to a production environment using Argo CD.

    4. Configure Jenkins pipeline stages:
        Stage 1: Use the Git plugin to check out the source code from the Git repository.
        Stage 2: Use the Maven Integration plugin to build the Java application.
        Stage 3: Use the JUnit and Mockito plugins to run unit tests.
        Stage 4: Use the SonarQube plugin to analyze the code quality of the Java application.
        Stage 5: Use the Maven Integration plugin to package the application into a JAR file.
        Stage 6: Use the Kubernetes Continuous Deploy plugin to deploy the application to a test environment using Helm.
        Stage 7: Use a testing framework like Selenium to run user acceptance tests on the deployed application.
        Stage 8: Use Argo CD to promote the application to a production environment.

    5. Set up Argo CD:
        Install Argo CD on the Kubernetes cluster.
        Set up a Git repository for Argo CD to track the changes in the Helm charts and Kubernetes manifests.
        Create a Helm chart for the Java application that includes the Kubernetes manifests and Helm values.
        Add the Helm chart to the Git repository that Argo CD is tracking.

    6. Configure Jenkins pipeline to integrate with Argo CD:
       6.1 Add the Argo CD API token to Jenkins credentials.
       6.2 Update the Jenkins pipeline to include the Argo CD deployment stage.

    7. Run the Jenkins pipeline:
       7.1 Trigger the Jenkins pipeline to start the CI/CD process for the Java application.
       7.2 Monitor the pipeline stages and fix any issues that arise.

This end-to-end Jenkins pipeline will automate the entire CI/CD process for a Java application, from code checkout to production deployment, using popular tools like SonarQube, Argo CD, Helm, and Kubernetes.


</details>


<details>
<summary>GitHub Actions</summary>

CI/CD Solution

This is primary focused on github

To create a github action, goto the root of the directory and create 
```bash
mkdir .github/workflows

cd .github/workflows

vim first-actions.yml

name: My First GitHub Actions

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        python-version: [3.8, 3.9]

    steps:
    - uses: actions/checkout@v3
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: ${{ matrix.python-version }}

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install pytest

    - name: Run tests
      run: |
        cd src
        python -m pytest addition.py

```

# GitHub-Actions-Zero-to-Hero
Repository to kick start your journey with GitHub Actions

## Comparing with Jenkins 

### Advantages of GitHub Actions over Jenkins

- Hosting: Jenkins is self-hosted, meaning it requires its own server to run, while GitHub Actions is hosted by GitHub and runs directly in your GitHub repository.

- User interface: Jenkins has a complex and sophisticated user interface, while GitHub Actions has a more streamlined and user-friendly interface that is better suited for simple to moderate automation tasks.

- Cost: Jenkins can be expensive to run and maintain, especially for organizations with large and complex automation needs. GitHub Actions, on the other hand, is free for open-source projects and has a tiered pricing model for private repositories, making it more accessible to smaller organizations and individual developers.

### Advantages of Jenkins over GitHub Actions

- Integration: Jenkins can integrate with a wide range of tools and services, but GitHub Actions is tightly integrated with the GitHub platform, making it easier to automate tasks related to your GitHub workflow.

In conclusion, Jenkins is better suited for complex and large-scale automation tasks, while GitHub Actions is a more cost-effective and user-friendly solution for simple to moderate automation needs.



</details>


<details>
<summary>CI/CD Interview Questions</summary>


Q: Can you explain the CICD process in your current project ? or Can you talk about any CICD process that you have implemented ?

A: In the current project we use the following tools orchestrated with Jenkins to achieve CICD.
   - Maven, Sonar, AppScan, ArgoCD, and Kubernetes
   
   Coming to the implementation, the entire process takes place in 8 steps
    
    1. Code Commit: Developers commit code changes to a Git repository hosted on GitHub.
    2. Jenkins Build: Jenkins is triggered to build the code using Maven. Maven builds the code and runs unit tests.
    3. Code Analysis: Sonar is used to perform static code analysis to identify any code quality issues, security vulnerabilities, and bugs.
    4. Security Scan: AppScan is used to perform a security scan on the application to identify any security vulnerabilities.
    5. Deploy to Dev Environment: If the build and scans pass, Jenkins deploys the code to a development environment managed by Kubernetes.
    6. Continuous Deployment: ArgoCD is used to manage continuous deployment. ArgoCD watches the Git repository and automatically deploys new changes to the development environment as soon as they are committed.
    7. Promote to Production: When the code is ready for production, it is manually promoted using ArgoCD to the production environment.
    8. Monitoring: The application is monitored for performance and availability using Kubernetes tools and other monitoring tools.
   

Q: What are the different ways to trigger jenkins pipelines ?

A: This can be done in multiple ways,
   To briefly explain about the different options,
   ```
     - Poll SCM: Jenkins can periodically check the repository for changes and automatically build if changes are detected. 
                 This can be configured in the "Build Triggers" section of a job.
                 
     - Build Triggers: Jenkins can be configured to use the Git plugin, which allows you to specify a Git repository and branch to build. 
                 The plugin can be configured to automatically build when changes are pushed to the repository.
                 
     - Webhooks: A webhook can be created in GitHub to notify Jenkins when changes are pushed to the repository. 
                 Jenkins can then automatically build the updated code. This can be set up in the "Build Triggers" section of a job and in the GitHub repository settings.
   ```
Q: How to backup Jenkins ?

A: Backing up Jenkins is a very easy process, there are multiple default and configured files and folders in Jenkins that you might want to backup.
```  
  - Configuration: The `~/.jenkins` folder. You can use a tool like rsync to backup the entire directory to another location.
  
    - Plugins: Backup the plugins installed in Jenkins by copying the plugins directory located in JENKINS_HOME/plugins to another location.
    
    - Jobs: Backup the Jenkins jobs by copying the jobs directory located in JENKINS_HOME/jobs to another location.
    
    - User Content: If you have added any custom content, such as build artifacts, scripts, or job configurations, to the Jenkins environment, make sure to backup those as well.
    
    - Database Backup: If you are using a database to store information such as build results, you will need to backup the database separately. This typically involves using a database backup tool, such as mysqldump for MySQL, to export the data to another location.
```
One can schedule the backups to occur regularly, such as daily or weekly, to ensure that you always have a recent copy of your Jenkins environment available. You can use tools such as cron or Windows Task Scheduler to automate the backup process.

Q: How do you store/secure/handle secrets in Jenkins ?

A: Again, there are multiple ways to achieve this, 
   Let me give you a brief explanation of all the posible options.
```  
   - Credentials Plugin: Jenkins provides a credentials plugin that can be used to store secrets such as passwords, API keys, and certificates. The secrets are encrypted and stored securely within Jenkins, and can be easily retrieved in build scripts or used in other plugins.
   
   - Environment Variables: Secrets can be stored as environment variables in Jenkins and referenced in build scripts. However, this method is less secure because environment variables are visible in the build logs.
   
   - Hashicorp Vault: Jenkins can be integrated with Hashicorp Vault, which is a secure secrets management tool. Vault can be used to store and manage sensitive information, and Jenkins can retrieve the secrets as needed for builds.
   
   - Third-party Secret Management Tools: Jenkins can also be integrated with third-party secret management tools such as AWS Secrets Manager, Google Cloud Key Management Service, and Azure Key Vault.
```

Q: What is latest version of Jenkins or which version of Jenkins are you using ?

A: This is a very simple question interviewers ask to understand if you are actually using Jenkins day-to-day, so always be prepared for this.

Q: What is shared modules in Jenkins ?

A: Shared modules in Jenkins refer to a collection of reusable code and resources that can be shared across multiple Jenkins jobs. This allows for easier maintenance, reduced duplication, and improved consistency across multiple build processes.
   For example, shared modules can be used in cases like:
```
        - Libraries: Custom Java libraries, shell scripts, and other resources that can be reused across multiple jobs.
        
        - Jenkinsfile: A shared Jenkinsfile can be used to define the build process for multiple jobs, reducing duplication and making it easier to manage the build process for multiple projects.
        
        - Plugins: Common plugins can be installed once as a shared module and reused across multiple jobs, reducing the overhead of managing plugins on individual jobs.
        
        - Global Variables: Shared global variables can be defined and used across multiple jobs, making it easier to manage common build parameters such as version numbers, artifact repositories, and environment variables.
```

Q: can you use Jenkins to build applications with multiple programming languages using different agents in different stages ?

A: Yes, Jenkins can be used to build applications with multiple programming languages by using different build agents in different stages of the build process.

Jenkins supports multiple build agents, which can be used to run build jobs on different platforms and with different configurations. By using different agents in different stages of the build process, you can build applications with multiple programming languages and ensure that the appropriate tools and libraries are available for each language.

For example, you can use one agent for compiling Java code and another agent for building a Node.js application. The agents can be configured to use different operating systems, different versions of programming languages, and different libraries and tools.

Jenkins also provides a wide range of plugins that can be used to support multiple programming languages and build tools, making it easy to integrate different parts of the build process and manage the dependencies required for each stage.

Overall, Jenkins is a flexible and powerful tool that can be used to build applications with multiple programming languages and support different stages of the build process.

Q: How to setup auto-scaling group for Jenkins in AWS ?

A: Here is a high-level overview of how to set up an autoscaling group for Jenkins in Amazon Web Services (AWS):
```
    - Launch EC2 instances: Create an Amazon Elastic Compute Cloud (EC2) instance with the desired configuration and install Jenkins on it. This instance will be used as the base image for the autoscaling group.
    
    - Create Launch Configuration: Create a launch configuration in AWS Auto Scaling that specifies the EC2 instance type, the base image (created in step 1), and any additional configuration settings such as storage, security groups, and key pairs.
    
    - Create Autoscaling Group: Create an autoscaling group in AWS Auto Scaling and specify the launch configuration created in step 2. Also, specify the desired number of instances, the minimum number of instances, and the maximum number of instances for the autoscaling group.
    
    - Configure Scaling Policy: Configure a scaling policy for the autoscaling group to determine when new instances should be added or removed from the group. This can be based on the average CPU utilization of the instances or other performance metrics.
    
    - Load Balancer: Create a load balancer in Amazon Elastic Load Balancer (ELB) and configure it to forward traffic to the autoscaling group.
    
    - Connect to Jenkins: Connect to the Jenkins instance using the load balancer endpoint or the public IP address of one of the instances in the autoscaling group.
    
    - Monitoring: Monitor the instances in the autoscaling group using Amazon CloudWatch to ensure that they are healthy and that the autoscaling policy is functioning as expected.

 By using an autoscaling group for Jenkins, you can ensure that you have the appropriate number of instances available to handle the load on your build processes, and that new instances can be added or removed automatically as needed. This helps to ensure the reliability and scalability of your Jenkins environment.
```

Q: How to add a new worker node in Jenkins ?

A: Log into the Jenkins master and navigate to Manage Jenkins > Manage Nodes > New Node. Enter a name for the new node and select Permanent Agent. Configure SSH and click on Launch.

Q: How to add a new plugin in Jenkins ?

A: Using the CLI, 
   `java -jar jenkins-cli.jar install-plugin <PLUGIN_NAME>`
  
  Using the UI,

   1. Click on the "Manage Jenkins" link in the left-side menu.
   2. Click on the "Manage Plugins" link.

Q: What is JNLP and why is it used in Jenkins ?

A: In Jenkins, JNLP is used to allow agents (also known as "slave nodes") to be launched and managed remotely by the Jenkins master instance. This allows Jenkins to distribute build tasks to multiple agents, providing scalability and improving performance.

   When a Jenkins agent is launched using JNLP, it connects to the Jenkins master and receives build tasks, which it then executes. The results of the build are then sent back to the master and displayed in the Jenkins user interface.

Q: What are some of the common plugins that you use in Jenkins ?

A: Be prepared for answer, you need to have atleast 3-4 on top of your head, so that interview feels you use jenkins on a day-to-day basis.


</details>

<details>
<summary>Project Management Tools</summary>


**Agile**

The Agile methodology is a project management approach that involves breaking the project into phases and emphasizes continuous collaboration and improvement. Teams follow a cycle of planning, executing, and evaluating.

![img](https://www.nvisia.com/hubfs/agile-methodology-chicago.png)


**JIRA**

Platform that implements agile or project management.

Used to track projects.

**Confluence** && **SharePoint**

A knowledge sharing platform.

Just like, jira every project can create their own pages, or projects inside confluence and they can start working it.

Documentation sharing platform.

**servicenow**

monitoring system can be easily integrated with the service now apis. where your monitoring system directly talks to the servicenow api and it creates the incidents on its own and it assigns the tickets.

Incident Management -> Tracking incidents 

Change Management -> ***


**Read the Docs**

open source version of Confluence && SharePoint.

Good Integration with Github

</details>


<details>
<summary> Containers </summary>

Advancement to virtual machines.

Containers are light weight in nature as they do not have **a complete OS** 

have a minimal OS or a base image .

A container is a package or a bundle which is the combination of application + application libraries  + system dependencies.

and rest other will be used from the host machine.

**Whay docker is popular ?**

to create a conatiner what docker has done is, just simple write a docker file, and you cans ubmit this to docker engine using some docker command and this docker engine will convert this dockerfile into and image and again using some docker command you can convert this docker image into docker comtainer. 

Docker Lifecyele

1. Write a dockerfile
2. Execute a dockerfile, and create a image
3. Execute the image and create a container.

Docker is dependent on docker engine which is a single point of faiure (spof) means when the docker engine is down all the docker container will be down too.

so, to avoid this spof, creating lot of layers, and other challenges [Buildah](https://buildah.io/) can workaround with this.


</details>


<details>
<summary>Docker</summary>


## What is a container ?

A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

Ok, let me make it easy !!!

A container is a bundle of Application, Application libraries required to run your application and the minimum system dependencies.

![Screenshot 2023-02-07 at 7 18 10 PM](https://user-images.githubusercontent.com/43399466/217262726-7cabcb5b-074d-45cc-950e-84f7119e7162.png)



## Containers vs Virtual Machine 

Containers and virtual machines are both technologies used to isolate applications and their dependencies, but they have some key differences:

    1. Resource Utilization: Containers share the host operating system kernel, making them lighter and faster than VMs. VMs have a full-fledged OS and hypervisor, making them more resource-intensive.

    2. Portability: Containers are designed to be portable and can run on any system with a compatible host operating system. VMs are less portable as they need a compatible hypervisor to run.

    3. Security: VMs provide a higher level of security as each VM has its own operating system and can be isolated from the host and other VMs. Containers provide less isolation, as they share the host operating system.

   4.  Management: Managing containers is typically easier than managing VMs, as containers are designed to be lightweight and fast-moving.



## Why are containers light weight ?

Containers are lightweight because they use a technology called containerization, which allows them to share the host operating system's kernel and libraries, while still providing isolation for the application and its dependencies. This results in a smaller footprint compared to traditional virtual machines, as the containers do not need to include a full operating system. Additionally, Docker containers are designed to be minimal, only including what is necessary for the application to run, further reducing their size.

Let's try to understand this with an example:

Below is the screenshot of official ubuntu base image which you can use for your container. It's just ~ 22 MB, isn't it very small ? on a contrary if you look at official ubuntu VM image it will be close to ~ 2.3 GB. So the container base image is almost 100 times less than VM image.

![Screenshot 2023-02-08 at 3 12 38 PM](https://user-images.githubusercontent.com/43399466/217493284-85411ae0-b283-4475-9729-6b082e35fc7d.png)


To provide a better picture of files and folders that containers base images have and files and folders that containers use from host operating system (not 100 percent accurate -> varies from base image to base image). Refer below.



### Files and Folders in containers base images

```
    /bin: contains binary executable files, such as the ls, cp, and ps commands.

    /sbin: contains system binary executable files, such as the init and shutdown commands.

    /etc: contains configuration files for various system services.

    /lib: contains library files that are used by the binary executables.

    /usr: contains user-related files and utilities, such as applications, libraries, and documentation.

    /var: contains variable data, such as log files, spool files, and temporary files.

    /root: is the home directory of the root user.
```



### Files and Folders that containers use from host operating system

```
    The host's file system: Docker containers can access the host file system using bind mounts, which allow the container to read and write files in the host file system.

    Networking stack: The host's networking stack is used to provide network connectivity to the container. Docker containers can be connected to the host's network directly or through a virtual network.

    System calls: The host's kernel handles system calls from the container, which is how the container accesses the host's resources, such as CPU, memory, and I/O.

    Namespaces: Docker containers use Linux namespaces to create isolated environments for the container's processes. Namespaces provide isolation for resources such as the file system, process ID, and network.

    Control groups (cgroups): Docker containers use cgroups to limit and control the amount of resources, such as CPU, memory, and I/O, that a container can access.
    
```

It's important to note that while a container uses resources from the host operating system, it is still isolated from the host and other containers, so changes to the container do not affect the host or other containers.

**Note:** There are multiple ways to reduce your VM image size as well, but I am just talking about the default for easy comparision and understanding.

so, in a nutshell, container base images are typically smaller compared to VM images because they are designed to be minimalist and only contain the necessary components for running a specific application or service. VMs, on the other hand, emulate an entire operating system, including all its libraries, utilities, and system files, resulting in a much larger size. 

I hope it is now very clear why containers are light weight in nature.



## Docker


### What is Docker ?

Docker is a containerization platform that provides easy way to containerize your applications, which means, using Docker you can build container images, run the images to create containers and also push these containers to container regestries such as DockerHub, Quay.io and so on.

In simple words, you can understand as `containerization is a concept or technology` and `Docker Implements Containerization`.


### Docker Architecture ?

![image](https://user-images.githubusercontent.com/43399466/217507877-212d3a60-143a-4a1d-ab79-4bb615cb4622.png)

The above picture, clearly indicates that Docker Deamon is brain of Docker. If Docker Deamon is killed, stops working for some reasons, Docker is brain dead :p (sarcasm intended).

### Docker LifeCycle 

We can use the above Image as reference to understand the lifecycle of Docker.

There are three important things,

1. docker build -> builds docker images from Dockerfile
2. docker run   -> runs container from docker images
3. docker push  -> push the container image to public/private regestries to share the docker images.

![Screenshot 2023-02-08 at 4 32 13 PM](https://user-images.githubusercontent.com/43399466/217511949-81f897b2-70ee-41d1-b229-38d0572c54c7.png)



### Understanding the terminology (Inspired from Docker Docs)


#### Docker daemon

The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.


#### Docker client

The Docker client (docker) is the primary way that many Docker users interact with Docker. When you use commands such as docker run, the client sends these commands to dockerd, which carries them out. The docker command uses the Docker API. The Docker client can communicate with more than one daemon.


#### Docker Desktop

Docker Desktop is an easy-to-install application for your Mac, Windows or Linux environment that enables you to build and share containerized applications and microservices. Docker Desktop includes the Docker daemon (dockerd), the Docker client (docker), Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper. For more information, see Docker Desktop.


#### Docker registries

A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry.

When you use the docker pull or docker run commands, the required images are pulled from your configured registry. When you use the docker push command, your image is pushed to your configured registry.
Docker objects

When you use Docker, you are creating and using images, containers, networks, volumes, plugins, and other objects. This section is a brief overview of some of those objects.


#### Dockerfile

Dockerfile is a file where you provide the steps to build your Docker Image. 


#### Images

An image is a read-only template with instructions for creating a Docker container. Often, an image is based on another image, with some additional customization. For example, you may build an image which is based on the ubuntu image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run.

You might create your own images or you might only use those created by others and published in a registry. To build your own image, you create a Dockerfile with a simple syntax for defining the steps needed to create the image and run it. Each instruction in a Dockerfile creates a layer in the image. When you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt. This is part of what makes images so lightweight, small, and fast, when compared to other virtualization technologies.



## INSTALL DOCKER

A very detailed instructions to install Docker are provide in the below link

https://docs.docker.com/get-docker/

For Demo, 

You can create an Ubuntu EC2 Instance on AWS and run the below commands to install docker.

```
sudo apt update
sudo apt install docker.io -y
```


### Start Docker and Grant Access

A very common mistake that many beginners do is, After they install docker using the sudo access, they miss the step to Start the Docker daemon and grant acess to the user they want to use to interact with docker and run docker commands.

Always ensure the docker daemon is up and running.

A easy way to verify your Docker installation is by running the below command

```
docker run hello-world
```

If the output says:

```
docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
See 'docker run --help'.
```

This can mean two things, 
1. Docker deamon is not running.
2. Your user does not have access to run docker commands.


### Start Docker daemon

You use the below command to verify if the docker daemon is actually started and Active

```
sudo systemctl status docker
```

If you notice that the docker daemon is not running, you can start the daemon using the below command

```
sudo systemctl start docker
```


### Grant Access to your user to run docker commands

To grant access to your user to run the docker command, you should add the user to the Docker Linux group. Docker group is create by default when docker is installed.

```
sudo usermod -aG docker ubuntu
```

In the above command `ubuntu` is the name of the user, you can change the username appropriately.

**NOTE:** : You need to logout and login back for the changes to be reflected.


### Docker is Installed, up and running 🥳🥳

Use the same command again, to verify that docker is up and running.

```
docker run hello-world
```

Output should look like:

```
....
....
Hello from Docker!
This message shows that your installation appears to be working correctly.
...
...
```


## Great Job, Now start with the examples folder to write your first Dockerfile and move to the next examples. Happy Learning :)

### Clone this repository and move to example folder

```
git clone https://github.com/iam-veeramalla/Docker-Zero-to-Hero
cd  examples
```

### Login to Docker [Create an account with https://hub.docker.com/]

```
docker login
```

```
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username: abhishekf5
Password:
WARNING! Your password will be stored unencrypted in /home/ubuntu/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
```

### Build your first Docker Image

You need to change the username accoringly in the below command

```
docker build -t abhishekf5/my-first-docker-image:latest .
```

Output of the above command

```
    Sending build context to Docker daemon  992.8kB
    Step 1/6 : FROM ubuntu:latest
    latest: Pulling from library/ubuntu
    677076032cca: Pull complete
    Digest: sha256:9a0bdde4188b896a372804be2384015e90e3f84906b750c1a53539b585fbbe7f
    Status: Downloaded newer image for ubuntu:latest
     ---> 58db3edaf2be
    Step 2/6 : WORKDIR /app
     ---> Running in 630f5e4db7d3
    Removing intermediate container 630f5e4db7d3
     ---> 6b1d9f654263
    Step 3/6 : COPY . /app
     ---> 984edffabc23
    Step 4/6 : RUN apt-get update && apt-get install -y python3 python3-pip
     ---> Running in a558acdc9b03
    Step 5/6 : ENV NAME World
     ---> Running in 733207001f2e
    Removing intermediate container 733207001f2e
     ---> 94128cf6be21
    Step 6/6 : CMD ["python3", "app.py"]
     ---> Running in 5d60ad3a59ff
    Removing intermediate container 5d60ad3a59ff
     ---> 960d37536dcd
    Successfully built 960d37536dcd
    Successfully tagged abhishekf5/my-first-docker-image:latest
```

### Verify Docker Image is created

```
docker images
```

Output 

```
REPOSITORY                         TAG       IMAGE ID       CREATED          SIZE
abhishekf5/my-first-docker-image   latest    960d37536dcd   26 seconds ago   467MB
ubuntu                             latest    58db3edaf2be   13 days ago      77.8MB
hello-world                        latest    feb5d9fea6a5   16 months ago    13.3kB
```

### Run your First Docker Container

```
docker run -it abhishekf5/my-first-docker-image
```

Output

```
Hello World
```

### Push the Image to DockerHub and share it with the world

```
docker push abhishekf5/my-first-docker-image
```

Output

```
Using default tag: latest
The push refers to repository [docker.io/abhishekf5/my-first-docker-image]
896818320e80: Pushed
b8088c305a52: Pushed
69dd4ccec1a0: Pushed
c5ff2d88f679: Mounted from library/ubuntu
latest: digest: sha256:6e49841ad9e720a7baedcd41f9b666fcd7b583151d0763fe78101bb8221b1d88 size: 1157
```

</details>




<details>
  <summary>Multi stage docker builds</summary>

#### Multi stage docker builds
- Split docker file into two parts or multiple parts

Suppose you are writing a calculator and you are using ubuntu as a base images so for python we only need python interepeter

![Simple multi stage eg](https://imgur.com/FTwOGgb.png)
![Multi stage eg](https://imgur.com/IfqKkwc.png)


### Without multistage

**file: Dockerfile**

```Dockerfile
###########################################
# BASE IMAGE
###########################################

FROM ubuntu AS build

RUN apt-get update && apt-get install -y golang-go

ENV GO111MODULE=off

COPY . .

RUN CGO_ENABLED=0 go build -o /app .

ENTRYPOINT ["/app"]
```

### With multistage

```Dockerfile
###########################################
# BASE IMAGE
###########################################

FROM ubuntu AS build

RUN apt-get update && apt-get install -y golang-go

ENV GO111MODULE=off

COPY . .

RUN CGO_ENABLED=0 go build -o /app .

############################################
# HERE STARTS THE MAGIC OF MULTI STAGE BUILD
############################################

FROM scratch

# Copy the compiled binary from the build stage
COPY --from=build /app /app

# Set the entrypoint for the container to run the binary
ENTRYPOINT ["/app"]
```

#### React Project

```Dockerfile

# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm config set unsafe-perm true #https://stackoverflow.com/questions/52196518/could-not-get-uid-gid-when-building-node-docker
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

```

</details>

<details>

<summary>Distroless images</summary>

#### Distroless images

- Basically a very minimilistic image, that will hardly have any packages and will only have the runtime envs.
- eg python distroless images
- Reduces images size
- Improves security 

</details>

<details>
<summary> Docker Volumes and Bind Mounts</summary>

###  Docker Volumes and Bind Mounts

#### Why need volumes
1) container did not have any way to read host file and to perfrom writee operations. Cannot keep track of previous logs, if the container fails.
2) when there is connection between backend and frontend backend writes to some file and frontend reads from that file and perform, as like a cron job.
3) Container or app tries to read some file from the host os and it doesnt know how to read that file.

_To tackle this docker came up with 2 concepts **bind mounts** and **volumes**_

#### bind mounts
- Allows us to bind a directory inside the container
- Bind folder in the container with the folder in the host.

    ![bind mounts](https://imgur.com/sxzlXB2.png)

#### Volumes 
- volumes are same as bind mounts but these offer better life cycle.
- Life cycle ? -> using docker cli we can create volume. Like a logical partitioning on the host.
- here, we dont provide the directory details.
- using volume docker will be create a logical disk or it will create a logical volume and this volume will be mounted to the container. 
- we can create volumes in any host, any external storage we can link it with the container volume.
- eg
    - `docker volume ls`
    - `docker volume create scor32k` -> This will create a  logical partition on the host which we can't see
    - `docker volume inspect scor32k` -> To inspect(details about the volume) a volume 
    - `docker volume rm scor32k` -> delete volume scor32k 
    - `docker run -d --mout source=scor32k, target=/app image details `
    

</details>

<details>
<summary>Docker commands</summary>

# Docker Commands

Some of the most commonly used docker commands are 

### docker images

Lists docker images on the host machine.

### docker build

Builds image from Dockerfile.

### docker run

Runs a Docker container. 

There are many arguments which you can pass to this command for example,

`docker run -d` -> Run container in background and print container ID
`docker run -p` -> Port mapping

use `docker run --help` to look into more arguments.

### docker ps

Lists running containers on the host machine.

### docker stop

Stops running container.

### docker start

Starts a stopped container.

### docker rm

Removes a stopped container.

### docker rmi

Removes an image from the host machine.

### docker pull

Downloads an image from the configured registry.

### docker push

Uploads an image to the configured registry.

### docker exec

Run a command in a running container.

### docker network

Manage Docker networks such as creating and removing networks, and connecting containers to networks.

</details>

<details>
<summary>Docker Networking</summary>

Networking allows containers to communiate with each other, and the host system.

If we take an example, we have 2 docker container on the host system suppose `backend` and `frontend` and will have to contact with each other and they need to surely interact with the host system.

#### How a container can talk to the host OS?

1) Container 1 talks to container 2
2) Conatiner 1 has isolation with container 2

Whenever you create a continer, docker creates a virtual **veth** (docker0). without this docker cannot talk to the host. This is called as **Bridge Networking** which is **default** in docker.

![Bridge networking](https://imgur.com/VtNOwO3.png)

1) Bridge Networking as explained above
  
2) Host Networking -> Containers will directly use the network of the host.

Here, when you create a continer, docker will directly bind the your container with the ip address(eth0) of the host.

Both of them are in the same cidr block

This is very problametic in nature.

3) Overlay network -> This is very usefull when you have multiple hosts. 

The problem

When we have 2 docker conatiners with the host which are connected using the bridge network, they will have to share the `docker0 brudge`, which becomres the common path between both the container and host. This is out of the box nature which is not secure. 

How to achieve logical level isolation ?

This can be achieved using the `bridge` networking itself.

Docker allows you to **create custom bridge networks**.

So, in our scenerio 1 container can talk to host with the veth or docker0 and otther container will talk using the custom bridge network.

![Custom bridge network](https://imgur.com/tjv1osR.png)



#### DEMO

```bash

docker inspect container_name # Inspect continer

docker network ls 

docker network create new_name # new bridge netwok witll be created

docker run -d --network=new_name --name secure image_name

# However, you can at any point of time, attach the first container to my_bridge network and enable communication
docker network connect my_bridge web

# Container with the host network
docker run -d --name demo-host --network=host image

docker network rm test

```

</details>


<details>
<summary>Docker Interview Questions</summary>

**1) What is Docker?**

Docker is an open-source containerization platform. It enables developers to package applications into containers.

**2) How are containers different from virtual machines?**

Containers are very light in nature because they don't have a complete OS.

Containers are combinations of `application dependency` and `system library`.

**3) Docker Lifecycle?**

A user would create a Dockerfile with a set of instructions or commands that define a Docker image. e.g., which base image should I choose? what dependencies should be installed for the application to run.

Docker changes act as a set of instructors to build a Docker container. It can be compared to a snapshot in a VM.

**4) What are the different Docker Components ?**

When you install Docker, you have the `client`. Client is the Docker cli.

Using the client, while installing Docker, we install something called `docker deamon` or `docker host`.

Which is responsible for executing the tasks. Daemon is the most important of the components.

We have a Docker registry to store Docker images.

![Docker components](https://imgur.com/7w2j0j4.png)

**5) What is the difference between docker copy and docker add?**

**docker ADD** -> Docker ADD can copy or download the files from a URL.

**docker COPY** -> Docker COPY, which can only copy files from the host system into the container.

**6) What is the difference between CMD"  and Entrypoint in Docker?**

**CMD** -> CLI arguments using the Docker run command will override the arguments specified using the CMD instructions.

**Entrypoint** -> Whereas ENTRYPOINT instructions in the shell form will override additional arguments provided using CLI parameters or even through the CMD commands.

**7) What are the networking types in Docker, and what is the default?**

The default network is Bridge.

You can change the default type and configure one of them.

  1. **Bridge** -> veth0/docker0 network is created using that docker connect with the host. You can create custom bridge network to isolate containers.

  2. **Overlay**: This mode enables communication between containers across multiple Docker host machines, allowing containers to be connected to a single network even when they are running on different hosts.


  3. **Host**: Bind the host network with the container network.

  4. **MacVlan**: This mode allows a container to appear on the network as a physical host rather than as a container.

**8) Can you explain how to isolate networking between the containers?**

You can create your own bridge network using ```docker network create newNetwork```, and then you can build the container with the new network using ```docker run --name d1 --network=newNetwork image```.


**9) What is a multi-stage build in Docker?**

Muilti stage build allows you to build your Docker container in multiple stages, allowing you to copy artefacts from one stage to another.

The major advantage of this is that it builds light-weight continer.

**10) What are distro-less images in Docker?**

Distroless images contain only your application and its runtime dependencies, with a very minimum of OS libraries.

They do not contain package managers, shells, or any other programmes you would expect to find in a standard Linux distribution.

They are very small and light-weight images.

**11) Real-Time Challenges with Docker?**

      1. Docker is a single daemon process. Which is a single point of failure.
      2. The Docker daemon runs as a root user. Which is a security threat. Podman is one such thing that does not have a single point of failure.
      3. **Resource Constraints**.

**12)  What steps would you take to secure the contents?**

     1. Use Distroless or Imags with not too many packages as your final image in a multi-stage build so that there is less chance of CVE or security issues.
     2. Ensure that the networking is configured properly. This is one of the most common reasons for security issues.
     3. Use utilities like SYNC to scan your container images.

</details>

<details>
<summary>KUBERNETES - k8s</summary>

What is the diff between docker and kubernetes

Docker is a **container platform**.

Kubernets is a **container orchestration platform**. 

Container are **Ephermeral** (short living in nature)(can die and revive anytime) in nature.

Problem with docker or containers

1. **Single host**. Nature of the container platform is scoped to single host. 

2. Suppose someone killed one of your container,so application running inside the container will be not accessible. unless another developer or user starts the container it will not start. This behavour is called as **auto healing** 

**Auto healing** -> is a behavour, where without users manual intervention your continer should start by itself. 

3. **Auto Scaling**  -> as soon as the load get increased, *manually* you increase the container count from 1 to 10. or it has to happen automatically.

4. Docker is very minimilistic and simple platform, docker doent support any enterprise level support. Enterprise standards such has having load balancer, firewall, auto scale, healing, api gateways, etc. 

How Kubernetes solves the problem

1. **Single Host** -> By default, kubernetes is a **cluster (Group of nodes)**. K8s are installed in a master node architecture. means, when ever we install  kubernetes we just create one master node and and multiple nodes. If there is one faulty application in the node and which is impacting the other applications, k8s because it has multi node arch immediatly it can put that application/pods in different node. 
   
2. **Auto Scaling** -> k8c has replica sets. Suppose we have increase in traffic we have someting called as `replication.yml` file, and say that increase my replacas from 1 to 10. 

k8s also has **HPA**(Horizontal pod autoscalar) using which you can say when ever there is a load just keep increasing. 
   
3. **Auto healing** -> When ever there is a damage, k8s has to control the damage. k8s controls and fix the damage. 

using the feature of auto-healing, when ever the container is going down, even before the container goes down, k8s will start a new container.
   
1. **Enterprise nature**

</details>


<details>
<summary>K8s Architecture</summary>

Why k8s -> k 8 characters in mid then s

Docker vs Kubernetes

Kubernetes offer 4 fundamental advantages over docker

1. by-default cluster in nature
2. Auto healing
3. Auto scaling
4. multiple enterpirse level support

in Docker the simpleset thing is `container` and in k8s the simplest thing is `pod`.

To run container we must have a **container runtime** called as **dockershim**.

In k8s we create a **Master** and a **worker**.

So, what happens, in k8s we dont directly send the request to the worker but your requests **goes through master**. Your request always goes through something called as **control plane**.

In k8s the smallest level of deployment is **pod**. In Docker we deploy a **container**.

Pod is just a wrapper over a container which has some advance capilities.

When user tries to deploy a pod, similar to container, your pod get deployed, we have component in pods called has `**kubelet**` which is **responsoble for running** the pod. 

In docker we have a docker engine- dokershim in **K8s** we have `kubelet`, which is **reponsible** for **maintaing** this kubernetes pod. It always looks for, if the pod is running or not running using the feature of auto healing it maintaing the  env.

But we need a container runtime to run the containers, so in k8s we have a **container runtime**. The diff is docker is **not** mendatory, in docker we have dockershim but, in k8s we can either use dockershim, containerd, crio these are all compitation to dockershim or anyother container runtime, which implements k8s container interface.  

In docker we have docter0 or we have a default networking in docker i.e bridge networking so in k8s we have `**kube-proxy**` which provides you networking. 

so, till now we talked about 3 

These are the 3 components available in worker node or Data plane.

1. **kube-proxy** -> which provides networking, ip addresses, and also the load balancing. Its uses [ip tables](https://medium.com/skilluped/what-is-iptables-and-how-to-use-it-781818422e52) on the linux machines.
2. **kubelet** -> actually responsible for **creation** of the _pod_ and also responsible for **running** the application. If application is not running, then kubelet informs one of the components in the control plane that something is going wrong
3. container runtime -> which actually runs your container

#### Master component or control plane

why you need control plane or master componenet or master node ?

so for any application/components there are some standards, cluster is one specific standard. 

Now, who will decide, where the pod will be created, in node 1 or node 2 or etc. So, this is one specific instuction, there can be multiple instcrutions and there should be a core component which has to deal with such type of instuctions. Components which act as a core components, take all the requests. 

There has to be a core component which is bascially doing everything in the k8s and that core component is called as **`API server`** and this component is present in your master component. 

**API server** is a component that basically exposes your k8s to the external world. The **hertz** of the k8s is API server

now, suppose user is trying to create a pod, he tries to access the api server and from the api server k8s api server decides that node 1 is free but, to schedule the component in node 1 we have a component called as **`scheduler`** 

**scheduler** -> so scheduler is basically responsibe for  scheduling your pod or scheduling your resources on k8s.

API server decides the information and controller acts on that server.

Now as we have deployed, we need a component that should act as a backup service, act as a backing store for the entire cluster information. In k8s we have `**etcd**`. 

**etcd** -> A key value store and the entire cluster information is stored as objects in etcd. Without etcd we dont have the cluster related information. 

**Controller Manager** 

k8s supports auto scaling, so to support auto scalling k8s has some components, so mange those componnets in k8s we have **controllers** eg **replica set** used for mainting state of the pods. 

Those controllers are managed by **controller manager**.

**Cloud Controller Manager  c-c-m** 

To help understand the cloud providers the user requests such as eks. 

The k8s should understand the arch of eks so k8s has to translate the request from the user to the api request that yout cloud privider undertsands.

This mechenism has to be implemented ccm.

#### summary - Components of k8s

![Components of k8s](https://imgur.com/i0qrMZy.png)

we have k8s divided into 2 parts.

control plane(master node) and data plane(worker node) 

Data plane -> executing the actions.
  1. kube-proxy
  2. container runtime
  3. kubelet

Control plane -> controlling the actions.
  1. API server
  2. etcd
  3. schedular
  4. controller manager
  5. ccm

</details>

<details>
<summary>k8s Production systems</summary>

k8s distros ?

1. Kubernetes
2. openshift
3. Ranchter
4. Tanzo
5. EKS
6. AKS
7. GKE
8. DKE

Diff between k8s and EKS

EKS provide supports and if you use k8s you have to manage on your owns.

How devops enginner manages 100 of clusters on production ?

Using tools such has kops, kubeadm. **kops** is the toll which is most widely used.

**KOPS** Kubernetes Operations.

The life cycle of k8s is managed by kops. This is the most widly used tool for installing k8s.


#### To learn k8s and explore for development envs

1. minikube
2. k3s
3. kind
4. k3d
4. microk8s


</details>

<details>
<summary>...</summary>

.  .  .

</details>


