# AWS 

<details>
<summary>Introduction to AWS</summary>

1) What is cloud ?
2) Public cloud vs Private cloud
3) Why is public cloud so popular ?
    - get `rid` of `maintainance` overhead
    - `cost`
4) Why AWS ?
    - `first` mover advantage
    - 
5) Trends of people moving back to private cloud ?
    - from public cloud to privte cloud - `cloud repatriation`
    - `security`
    - not getting `cost advantages`
</details>

<details>
<summary>IAM</summary>

- To manager authentication and authorization
- IAM -> does (solves problem of ) `authentication` and `authorization`
- IAM have `users`, `policies`, `groups` and `roles`
- `users` -> under `authentication`, this gives access to aws and what `user` will do, will be taken care by `policies`.
- we `create` `users` and `attach` some `policies` to the users. 
- `users` are used for authentication and `policies` are used for authorization.
- `groups` to automate adding user and adding policies to the users we use groups. we categories the users. We create a user and add that user to the particular group.
- `ROLES` -> This are created for something inside the aws. `similar` to `users`, but not fully same, roles are created for the `temporary purpose`.
- `roles` are created to make connection between `aws services`
    <details>
    <summary>Official</summary>

    - AWS IAM (Identity and Access Management) is a service provided by Amazon Web Services (AWS) that helps you manage access to your AWS resources. It's like a security system for your AWS account.
        
    - IAM allows you to create and manage users, groups, and roles. Users represent individual people or entities who need access to your AWS resources. Groups are collections of users with similar access requirements, making it easier to manage permissions. Roles are used to grant temporary access to external entities or services.

    - With IAM, you can control and define permissions through policies. Policies are written in JSON format and specify what actions are allowed or denied on specific AWS resources. These policies can be attached to IAM entities (users, groups, or roles) to grant or restrict access to AWS services and resources.

    - IAM follows the principle of least privilege, meaning users and entities are given only the necessary permissions required for their tasks, minimizing potential security risks. IAM also provides features like multi-factor authentication (MFA) for added security and an audit trail to track user activity and changes to permissions.

    - By using AWS IAM, you can effectively manage and secure access to your AWS resources, ensuring that only authorized individuals have appropriate permissions and actions are logged for accountability and compliance purposes.

    - Overall, IAM is an essential component of AWS security, providing granular control over access to your AWS account and resources, reducing the risk of unauthorized access and helping maintain a secure environment.

    ## Components of IAM 

    - `Users`: IAM users represent individual people or entities (such as applications or services) that interact with your AWS resources. Each user has a unique name and security credentials (password or access keys) used for authentication and access control.

    - `Groups`: IAM groups are collections of users with similar access requirements. Instead of managing permissions for each user individually, you can assign permissions to groups, making it easier to manage access control. Users can be added or removed from groups as needed.

    - `Roles`: IAM roles are used to grant temporary access to AWS resources. Roles are typically used by applications or services that need to access AWS resources on behalf of users or other services. Roles have associated policies that define the permissions and actions allowed for the role.

    - `Policies`: IAM policies are JSON documents that define permissions. Policies specify the actions that can be performed on AWS resources and the resources to which the actions apply. Policies can be attached to users, groups, or roles to control access. IAM provides both AWS managed policies (predefined policies maintained by AWS) and customer managed policies (policies created and managed by you).

    </details>

    <details>
    <summary>Interview questions</summary>

    # Interview Questions

    Q: What is AWS IAM, and why is it important?

    A: AWS IAM (Identity and Access Management) is a service provided by Amazon Web Services that helps you control access to your AWS resources. It allows you to manage user identities, permissions, and policies. IAM is important because it enhances security by ensuring that only authorized individuals or entities have access to your AWS resources, helping you enforce the principle of least privilege and maintain a secure environment.

    Q: What is the difference between IAM users and IAM roles?

    A: IAM users represent individual people or entities that need access to your AWS resources. They have their own credentials and are typically associated with long-term access. On the other hand, IAM roles are used to grant temporary access to AWS resources, usually for applications or services. Roles have associated policies and can be assumed by trusted entities to access resources securely.

    Q: What are IAM policies, and how do they work?

    A: IAM policies are JSON documents that define permissions. They specify what actions are allowed or denied on AWS resources and can be attached to IAM users, groups, or roles. Policies control access by matching the actions requested by a user or entity with the actions allowed or denied in the policy. If a requested action matches an allowed action in the policy, access is granted; otherwise, it is denied.

    Q: What is the principle of least privilege, and why is it important in IAM?

    A: The principle of least privilege states that users should be granted only the permissions necessary to perform their tasks and nothing more. It is important in IAM because it minimizes the risk of unauthorized access and limits the potential damage that could be caused by a compromised account. Following the principle of least privilege helps maintain a secure environment by ensuring that users have only the permissions they need to perform their job responsibilities.

    Q: What is an AWS managed policy?

    A: An AWS managed policy is a predefined policy created and managed by AWS. These policies cover common use cases and provide predefined permissions for specific AWS services or actions. AWS managed policies are maintained and updated by AWS, ensuring they stay up to date with new AWS services and features. They can be attached to IAM users, groups, or roles in your AWS account.
    </details>
</details>

<details>
<summary>EC2</summary>

1) what is ec2 ?
-  `elastic cloud compute` 
- `compue` -> you are requesting aws to provide you a compute instance which is a combination of cpu, ram and disk.
- `asking aws to provide you a virtual server`
- `cloud` -> as aws is a public cloud platform. its means a cloud compute instance.
- `elastic` -> service can be `scale up` or `scale down`

2) why you need to use ec2 instances ?
- Insted of creating own system amd get rid of maintainance. AWS will take care of this all things.
- `mangement effort` will be less
- `cost`
- `pay as you go` -> if you dont want these servers to run for particular time, you can shut down the servers and aws will `not` `ask` `you` `for` `money`
- `maintainance` and `cost`

3) Types of ec2 instances
- `general purpose`
- `compute optimized` 
- `memory` 
- `storage` 
- `accelerated compute`

4) Regions and avaibility zones.
- `Regions` to faster access or as close as possible.
- `avaibility zones` -> data0centers in multiple places.



    <details>
    <summary>Official</summary>

    ## Introduction to EC2:

    What is EC2, and why is it important?

    ```
    - Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud.
    - Access reliable, scalable infrastructure on demand. Scale capacity within minutes with SLA commitment of 99.99% availability.
    - Provide secure compute for your applications. Security is built into the foundation of Amazon EC2 with the AWS Nitro System.
    - Optimize performance and cost with flexible options like AWS Graviton-based instances, Amazon EC2 Spot instances, and AWS Savings Plans.
    ```

    EC2 usecases

    ```
    Deliver secure, reliable, high-performance, and cost-effective compute infrastructure to meet demanding business needs.
    Access the on-demand infrastructure and capacity you need to run HPC applications faster and cost-effectively.
    Access environments in minutes, dynamically scale capacity as needed, and benefit from AWS’s pay-as-you-go pricing.
    Deliver the broadest choice of compute, networking (up to 400 Gbps), and storage services purpose-built to optimize price performance for ML projects
    ```

    EC2 Instance Types

    Recommended to follow [this](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) page for very detailed and updated information.

    General purpose

    ```
    General Purpose instances are designed to deliver a balance of compute, memory, and network resources. They are suitable for a wide range of applications, including web servers,
    small databases, development and test environments, and more.
    ```

    Compute optimized

    ```
    Compute Optimized instances provide a higher ratio of compute power to memory. They excel in workloads that require high-performance processing such as batch processing, 
    scientific modeling, gaming servers, and high-performance web servers.
    ```

    Memory optimized

    ```
    Memory Optimized instances are designed to handle memory-intensive workloads. They are suitable for applications that require large amounts of memory, such as in-memory databases,
    real-time big data analytics, and high-performance computing.
    ```

    Storage optimized

    ```
    Storage Optimized instances are optimized for applications that require high, sequential read and write access to large datasets. 
    They are ideal for tasks like data warehousing, log processing, and distributed file systems.
    ```

    Accelerated computing

    ```
    Accelerated Computing Instances typically come with one or more types of accelerators, such as Graphics Processing Units (GPUs),
    Field Programmable Gate Arrays (FPGAs), or custom Application Specific Integrated Circuits (ASICs). 
    These accelerators offload computationally intensive tasks from the main CPU, enabling faster and more efficient processing for specific workloads.
    ```

    ![image](https://github.com/iam-veeramalla/aws-devops-zero-to-hero/assets/43399466/fc8e083c-dba5-41a6-94b9-14ebef0255c1)

    Instance families

    ```
        C – Compute

        D – Dense storage

        F – FPGA

        G – GPU

        Hpc – High performance computing

        I – I/O

        Inf – AWS Inferentia

        M – Most scenarios

        P – GPU

        R – Random access memory

        T – Turbo

        Trn – AWS Tranium

        U – Ultra-high memory

        VT – Video transcoding

        X – Extra-large memory
    ```

    Additional capabilities

    ```
        a – AMD processors

        g – AWS Graviton processors

        i – Intel processors

        d – Instance store volumes

        n – Network and EBS optimized

        e – Extra storage or memory

        z – High performance
    ```

    ## EC2 Instance Basics:

    Understanding the concept of virtual servers and instances.
    Key components of an EC2 instance: AMI (Amazon Machine Image), instance types, and instance states.
    Differentiating between On-Demand, Reserved, and Spot instances.

    ## Launching an EC2 Instance:

    - Step-by-step guide on launching an EC2 instance using the AWS Management Console.
    - Configuring instance details, such as instance type, network settings, and storage options.
    - Understanding security groups and key pairs for securing instances.

    ## Managing EC2 Instances:

    - Starting, stopping, and terminating instances.
    - Monitoring instance performance and utilization.
    - Basic troubleshooting and accessing instances using SSH (Secure Shell).
    </details>

    </details>


<details>
<summary>VPC</summary>

## Virtual Private cloud 

# VPC

1) There is a person in the internet and he is trying to access an application which is called 172.16.3.x/xx _project a_
2) There is a `DevOps enginner` who has created a `VPC`.
3) There is basically a  `Internet gateway` as the front, which has a basic `Ip address range ` and inside that we have  `subnet` for suppose project a, project b and project c or n projects. So, the entire `ip` range is divided into `multiple subnets`
4) What is `subnet`, for each project we have `divided` the `ip address range`. 
5) Lets say there is 1 ec2 instance(project a) inside the subnet and the end goal is to reach here(the subnet) from the internet which is completly outside the VPC.

6) **The Process**

    a) The user will come to the `internet gateway`. It will pass through the internet gateway.

    b) After it passes `Internet gateway` there is a `public subnet`

    c) what is `public subnet`? 
    public subnet+ is the one that can be accessed to the public `outside` the `VPC`. but, they have to `pass` through the `internet gateway`

    d) Once they pass through the internet gateway, In the `public subnet` there is something called as `load balancer` in _aws_ it is called as `elastic load balancer (elb)`.

    e) What is the usecase of  `elastic load balancer`? 
    Your `request` from the external world has reach the elastic load balancer, from the elastic load balancer it has to goto ec2 instance (project a), but how will the load balaner will understand it has to goto project a  inside VPC ?

    f) For elastic load balancer to send your `request` to the private subnet _project a _ there has to be a `proper route`. So, who will define this route from load balancer to the private subnet or project a.

    g) There is something called has a `route table`. Now, you need to have a `route table` and using that partiular path your request from the load balancer to the private subnet has to go. 

    h) Now what you will do is for a elastic load balancer, to the load balancer you will *attach* a `private subnet` and  the `target group`.

    i) For the load balancer to understand request where to go, you need to create a target group and assign the instance _i.e_ ec2 project a to the target group, and at the same time `subnet` should have the `route table ` so that traffic can flow.  

    j) At the instance _(project a)_ there is a `security group` which can `block` the request or `accept` the request. 

    ![Diagram](https://imgur.com/tk3bSPJ.png)

    k) Suppose you have multiple private subnet and they uses same `security group`, within a subnet if you want to define the same security group to `multiple applications`, multiple ec2 instances or you want to `repeat` the security group configuration, there is something called as  `NACL` 

    - NACl are automation for the security group, where insted of  defining the same thing again and again you define that has a `part` for NACLs.

    - *NAT gateways*
    This help to download resources or connect to internet while helping you to mask the ip address.  

    This is used to `mask` the IP address. It is not good pratice to expose private ip address, so `NAT` will try to mask the ip address. It will change the ip address which the public ip address either of the load balancer or the router.

    If it is using the  use load balancer, we will it has a *SNAT* and if uses the router we call it has *NAT* 

    _VPC Flow logs_ records every action.

    <details>
    <summary>Official</summary>


    Imagine you want to set up a private, secure, and isolated area in the cloud where you can run your applications and store your data. This is where a VPC comes into play.

    A VPC is a virtual network that you create in the cloud. It allows you to have your own private section of the internet, just like having your own network within a larger network. Within this VPC, you can create and manage various resources, such as servers, databases, and storage.

    Think of it as having your own little "internet" within the bigger internet. This virtual network is completely isolated from other users' networks, so your data and applications are secure and protected.

    Just like a physical network, a VPC has its own set of rules and configurations. You can define the IP address range for your VPC and create smaller subnetworks within it called subnets. These subnets help you organize your resources and control how they communicate with each other.

    To connect your VPC to the internet or other networks, you can set up gateways or routers. These act as entry and exit points for traffic going in and out of your VPC. You can control the flow of traffic and set up security measures to protect your resources from unauthorized access.

    With a VPC, you have control over your network environment. You can define access rules, set up firewalls, and configure security groups to regulate who can access your resources and how they can communicate.

    ![image](https://github.com/iam-veeramalla/aws-devops-zero-to-hero/assets/43399466/12cc10b6-724c-42c9-b07b-d8a7ce124e24)

    By default, when you create an AWS account, AWS will create a default VPC for you but this default VPC is just to get started with AWS. You should create VPCs for applications or projects. 

    ## VPC components 

    The following features help you configure a VPC to provide the connectivity that your applications need:

    Virtual private clouds (VPC)

        A VPC is a virtual network that closely resembles a traditional network that you'd operate in your own data center. After you create a VPC, you can add subnets.
    Subnets

        A subnet is a range of IP addresses in your VPC. A subnet must reside in a single Availability Zone. After you add subnets, you can deploy AWS resources in your VPC.
    IP addressing

        You can assign IP addresses, both IPv4 and IPv6, to your VPCs and subnets. You can also bring your public IPv4 and IPv6 GUA addresses to AWS and allocate them to resources in your VPC, such as EC2 instances, NAT gateways, and Network Load Balancers.

    Network Access Control List (NACL)

        A Network Access Control List is a stateless firewall that controls inbound and outbound traffic at the subnet level. It operates at the IP address level and can allow or deny traffic based on rules that you define. NACLs provide an additional layer of network security for your VPC.
    
    Security Group

        A security group acts as a virtual firewall for instances (EC2 instances or other resources) within a VPC. It controls inbound and outbound traffic at the instance level. Security groups allow you to define rules that permit or restrict traffic based on protocols, ports, and IP addresses.  

    Routing
    
        Use route tables to determine where network traffic from your subnet or gateway is directed.
    Gateways and endpoints

        A gateway connects your VPC to another network. For example, use an internet gateway to connect your VPC to the internet. Use a VPC endpoint to connect to AWS services privately, without the use of an internet gateway or NAT device.
    Peering connections

        Use a VPC peering connection to route traffic between the resources in two VPCs.
    Traffic Mirroring

        Copy network traffic from network interfaces and send it to security and monitoring appliances for deep packet inspection.
    Transit gateways

        Use a transit gateway, which acts as a central hub, to route traffic between your VPCs, VPN connections, and AWS Direct Connect connections.
    VPC Flow Logs

        A flow log captures information about the IP traffic going to and from network interfaces in your VPC.
    VPN connections

        Connect your VPCs to your on-premises networks using AWS Virtual Private Network (AWS VPN).


    ## Resources 

    VPC with servers in private subnets and NAT

    https://docs.aws.amazon.com/vpc/latest/userguide/vpc-example-private-subnets-nat.html

    ![image](https://github.com/iam-veeramalla/aws-devops-zero-to-hero/assets/43399466/89d8316e-7b70-4821-a6bf-67d1dcc4d2fb)



    </details>



</details>


<details>
<summary></summary>
</details>









