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
  <summary>Multi stage docker builds</summary>

  
#### Multi stage docker builds
- Split docker file into two parts or multiple parts
![Simple multi stage eg](https://imgur.com/FTwOGgb.png)
![Multi stage eg](https://imgur.com/IfqKkwc.png)

    <details>
      <summary>eg</summary>

    **file: Dockerfile**

      **Without multistage**

      ```
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

      **With multistage**
      ```
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

    </details>
</details>

<details>

<summary>Distroless images</summary>

#### Distroless images

- Basically a very minimilistic image, that will hardly have any packages and will only have the runtime envs.
- eg python distroless images
- Improves security 

</details>

<details>
<summary> Docker Volumes and Bind Mounts</summary>

####  Docker Volumes and Bind Mounts

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
<summary></summary>
</details>
