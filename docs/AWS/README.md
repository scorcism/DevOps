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
<summary>AWS Security Group and NACL </summary>

VPC is the one that introduces the concept of `virtual private cloud` in the world of `public cloud` and add a lot of security.

In aws you can add security at internet gateway level at elastic load balancer level which will talk to the privte server at the layer of the subnet. for each subnet you can add more security at the subnet level we will start using NACL. you add more security to the ec2 insatnce level, the lavel at which you actual application is deployed. At the ec2 instance level if you add security it is called security group.    

In aws security is a `shared responsibility` 

Q) Diff between security group and NACL

`Security group` is served at the `instance level`

In security there is two things. `Inbound traffic` and `Outbound traffic`

What is NACL ?
`Network Access Control List` goes a level beyond. This is applied at the subnet level.

At subnet you can define what type of traffic you want to deny. If you deny  some traffic at the subnet layer, even if you try to accept at the security group layer, there will not be any advantage. 

Using NACL they can define their `organizational` network traffic.

Security Groups:

    Security Groups act as virtual firewalls for Amazon EC2 instances (virtual servers) at the instance level. They control inbound and outbound traffic by allowing or denying specific protocols, ports, and IP addresses.
    Each EC2 instance can be associated with one or more security groups, and each security group consists of inbound and outbound rules.
    Inbound rules determine the traffic that is allowed to reach the EC2 instance, whereas outbound rules control the traffic leaving the instance.
    Security Groups can be configured using IP addresses, CIDR blocks, security group IDs, or DNS names to specify the source or destination of the traffic.
    They operate at the instance level and evaluate the rules before allowing traffic to reach the instance.
    Security Groups are stateful, meaning that if an inbound rule allows traffic, the corresponding outbound traffic is automatically allowed, and vice versa.
    Changes made to security group rules take effect immediately.

Network Access Control Lists (NACLs):

    NACLs are an additional layer of security that operates at the subnet level. They act as stateless traffic filters for inbound and outbound traffic at the subnet boundary.
    Unlike Security Groups, NACLs are associated with subnets, and each subnet can have only one NACL. However, multiple subnets can share the same NACL.
    NACLs consist of a numbered list of rules (numbered in ascending order) that are evaluated in order from lowest to highest.
    Each rule in the NACL includes a rule number, protocol, rule action (allow or deny), source or destination IP address range, port range, and ICMP (Internet Control Message Protocol) type.
    NACL rules can be configured to allow or deny specific types of traffic based on the defined criteria.
    They are stateless, which means that if an inbound rule allows traffic, the corresponding outbound traffic must be explicitly allowed using a separate outbound rule.
    Changes made to NACL rules may take some time to propagate to all the resources using the associated subnet.

    [DOC](https://github.com/iam-veeramalla/aws-devops-zero-to-hero/blob/main/day-5/README.md)


</details>


<details>
<summary>Route53</summary>

This provide `DNS` (Domain Name system) as a `service`.

In VPC, we have a internet gateway and inside VPC we have pruvaet subnet and private subnets.

In private subnet we have our applications.

In public subnet we have load balancer, NAT gateway, etc.

From load balancer request will goto appication in real time.

When the load balancer is created, aws gives that load balancer a ip address.

Suppose we have a user and the user tries to access the application through the load balancer. you cannot give the user the ip address of the load balancer. There are two reasons.

1) names are easy to remember compare to ip address.
2) IP address can anytime change.

DNS keeps a lot of records. That map domain names to the ip address. 

So, in front of the load balancer we will have a route 53 

![Diagram](https://imgur.com/TIRyy77.png)

To configure route 53, we need to do a lot of things

1) Domain Registration itself.
2) Hosted zones ->  here we create a dns records

route 53 also provides health check of the web servers

</details>

<details>
<summary>Project Live - Project Used In Production</summary>

**Auto scaling group**

It is like a concept where suppose you want servers to handle the users request and you go with two servers and you know you can require 4-5 servers at some point of time, so insted of creating 4-5 servers ast one time,  What you can do is use auto scaling group. Suppose you have 100 users and which can be handled by two of these servers and suppose there is a boom in request and user hit count reaches to 200 so what auto scaling group will do is, it will `instanly` increase the cout of servers.

**Load Balancer**

It is something that `balances the load`. Distribute load among servers.

**Bastion Host or Jump Server**

Its not recommented to expose the (public ip addres) of the private subnet. What we can do is we can create a bastian host or just a jump host, in th public subnet and through that bastian or jump host, we will connect to the instances inside the private subnet.

We will connect our private subnet instances with the help of bastion server which is inside the public subnet with the help off private ip address inside the VPC.

Insted of directly connecting to the server, we can connect from he bastion, so there can be a proper logging machenism, proper auditing, can configure bunch of rules in the bastion host, where the traffic actully moves from the bastian host.


** Blog [Link](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-example-private-subnets-nat.html) **

_aws public private subnet architecture_
![Architecture](https://docs.aws.amazon.com/images/vpc/latest/userguide/images/vpc-example-private-subnets.png)


</details>


<details>
<summary>AWS Scenario Based Interview Questions on EC2, IAM and VPC</summary>

# Scenario Based Interview Questions on EC2, IAM and VPC


Q: You have been assigned to design a VPC architecture for a 2-tier application. The application needs to be highly available and scalable. 
   How would you design the VPC architecture?

A: In this scenario, I would design a VPC architecture in the following way.
   I would create 2 subnets: public and private. The public subnet would contain the load balancers and be accessible from the internet. The private subnet would host the application servers. 
   I would distribute the subnets across multiple Availability Zones for high availability. Additionally, I would configure auto scaling groups for the application servers.

Q: Your organization has a VPC with multiple subnets. You want to restrict outbound internet access for resources in one subnet, but allow outbound internet access for resources in another subnet. How would you achieve this?

A: To restrict outbound internet access for resources in one subnet, we can modify the route table associated with that subnet. In the route table, we can remove the default route (0.0.0.0/0) that points to an internet gateway. 
   This would prevent resources in that subnet from accessing the internet. For the subnet where outbound internet access is required, we can keep the default route pointing to the internet gateway.

Q: You have a VPC with a public subnet and a private subnet. Instances in the private subnet need to access the internet for software updates. How would you allow internet access for instances in the private subnet?

A: To allow internet access for instances in the private subnet, we can use a NAT Gateway or a NAT instance. 
   We would place the NAT Gateway/instance in the public subnet and configure the private subnet route table to send outbound traffic to the NAT Gateway/instance. This way, instances in the private subnet can access the internet through the NAT Gateway/instance.

Q: You have launched EC2 instances in your VPC, and you want them to communicate with each other using private IP addresses. What steps would you take to enable this communication?

A: By default, instances within the same VPC can communicate with each other using private IP addresses. 
  To ensure this communication, we need to make sure that the instances are launched in the same VPC and are placed in the same subnet or subnets that are connected through a peering connection or a VPC peering link. 
  Additionally, we should check the security groups associated with the instances to ensure that the necessary inbound and outbound rules are configured to allow communication between them.

Q: You want to implement strict network access control for your VPC resources. How would you achieve this?

A: To implement granular network access control for VPC resources, we can use Network Access Control Lists (ACLs). 
  NACLs are stateless and operate at the subnet level. We can define inbound and outbound rules in the NACLs to allow or deny traffic based on source and destination IP addresses, ports, and protocols. 
  By carefully configuring NACL rules, we can enforce fine-grained access control for traffic entering and leaving the subnets.

Q: Your organization requires an isolated environment within the VPC for running sensitive workloads. How would you set up this isolated environment?

A: To set up an isolated environment within the VPC, we can create a subnet with no internet gateway attached. 
   This subnet, known as an "isolated subnet," will not have direct internet connectivity. We can place the sensitive workloads in this subnet, ensuring that they are protected from inbound and outbound internet traffic. 
   However, if these workloads require outbound internet access, we can set up a NAT Gateway or NAT instance in a different subnet and configure the isolated subnet's route table to send outbound traffic through the NAT Gateway/instance.

Q: Your application needs to access AWS services, such as S3 securely within your VPC. How would you achieve this?

A: To securely access AWS services within the VPC, we can use VPC endpoints. VPC endpoints allow instances in the VPC to communicate with AWS services privately, without requiring internet gateways or NAT gateways. 
  We can create VPC endpoints for specific AWS services, such as S3 and DynamoDB, and associate them with the VPC. 
  This enables secure and efficient communication between the instances in the VPC and the AWS services.

Q: What is the difference between NACL and Security groups ? Explain with a use case ?

A: For example, I want to design a security architecture, I would use a combination of NACLs and security groups. At the subnet level, I would configure NACLs to enforce inbound and outbound traffic restrictions based on source and destination IP addresses, ports, and protocols. NACLs are stateless and can provide an additional layer of defense by filtering traffic at the subnet boundary.
  At the instance level, I would leverage security groups to control inbound and outbound traffic. Security groups are stateful and operate at the instance level. By carefully defining security group rules, I can allow or deny specific traffic to and from the instances based on the application's security requirements.
  By combining NACLs and security groups, I can achieve granular security controls at both the network and instance level, providing defense-in-depth for the sensitive application.

Q: What is the difference between IAM users, groups, roles and policies ?

A: IAM User: An IAM user is an identity within AWS that represents an individual or application needing access to AWS resources. IAM users have permanent long-term credentials, such as a username and password, or access keys (Access Key ID and Secret Access Key). IAM users can be assigned directly to IAM policies or added to IAM groups for easier management of permissions.
   IAM Role: An IAM role is similar to an IAM user but is not associated with a specific individual. Instead, it is assumed by entities such as IAM users, applications, or services to obtain temporary security credentials. IAM roles are useful when you want to grant permissions to entities that are external to your AWS account or when you want to delegate access to AWS resources across accounts. IAM roles have policies attached to them that define the permissions granted when the role is assumed.
   IAM Group: An IAM group is a collection of IAM users. By organizing IAM users into groups, you can manage permissions collectively. IAM groups make it easier to assign permissions to multiple users simultaneously. Users within an IAM group inherit the permissions assigned to that group. For example, you can create a "Developers" group and assign appropriate policies to grant permissions required for developers across your organization.
   IAM Policy: An IAM policy is a document that defines permissions and access controls in AWS. IAM policies can be attached to IAM users, IAM roles, and IAM groups to define what actions can be performed on which AWS resources. IAM policies use JSON (JavaScript Object Notation) syntax to specify the permissions and can be created and managed independently of the users, roles, or groups. IAM policies consist of statements that include the actions allowed or denied, the resources on which the actions can be performed, and any additional conditions.

Q: You have a private subnet in your VPC that contains a number of instances that should not have direct internet access. However, you still need to be able to securely access these instances for administrative purposes. How would you set up a bastion host to facilitate this access?

A: To securely access the instances in the private subnet, you can set up a bastion host (also known as a jump host or jump box). The bastion host acts as a secure entry point to your private subnet. Here's how you can set up a bastion host:
      Create a new EC2 instance in a public subnet, which will serve as the bastion host. Ensure that this instance has a public IP address or is associated with an Elastic IP address for persistent access.
      Configure the security group for the bastion host to allow inbound SSH (or RDP for Windows) traffic from your IP address or a restricted range of trusted IP addresses. This limits access to the bastion host to authorized administrators only.
      Place the instances in the private subnet and configure their security groups to allow inbound SSH (or RDP) traffic from the bastion host security group.
      SSH (or RDP) into the bastion host using your private key or password. From the bastion host, you can then SSH (or RDP) into the instances in the private subnet using their private IP addresses.


</details>


<details>
<summary></summary>
</details>









