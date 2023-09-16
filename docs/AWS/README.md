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
<summary>AWS S3</summary>

**simple storage service**

- Scalable
- High available
- Secure
- cost effective
- performance

S3 service allows you to create buckets in which you can store anything. 

Objets in S3 are globally accessible.

buckets name shoud be unique as they are global.

any thing we upload in S3 is an `object`. 

**Five major advantages of S3**

1) `Availability and Durability` -> 11 9s

2) `Scalability` -> Store ALOMOST unlimited data in a single bucket. however, each object size cannot exceed 5 TB mark.
aws supports multi-part upload

3) `Security` -> S3 provides bucket policies, access control, and encryption settings are properly configured.
aws supportes encryption at rest and encryption at transit. 
Enable logging.

4) `Cost Effective` -> depend on the storage class that you use.


5) `Performance`

#### Permissions

**Bucket permissions**
```json

{
  "Version": "2012-10-17",
  "Id": "RestrictBucketToIAMUsersOnly",
  "Statement": [
    {
      "Sid": "AllowOwnerOnlyAccess",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::your-bucket-name/*",
        "arn:aws:s3:::your-bucket-name"
      ],
      "Condition": {
        "StringNotEquals": {
          "aws:PrincipalArn": "arn:aws:iam::AWS_ACCOUNT_ID:root"
        }
      }
    }
  ]
}

```

**Host Static website**
global access permissions 

```json

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::<Bucket-Name>/*"
            ]
        }
    ]
}

```

<details>
<summary>Official</summary>

# AWS S3

## About 

What is Amazon S3?

Simple Storage Service is a scalable and secure cloud storage service provided by Amazon Web Services (AWS). It allows you to store and retrieve any amount of data from anywhere on the web.

What are S3 buckets?

S3 buckets are containers for storing objects (files) in Amazon S3. Each bucket has a unique name globally across all of AWS. You can think of an S3 bucket as a top-level folder that holds your data.

Why use S3 buckets?

S3 buckets provide a reliable and highly scalable storage solution for various use cases. They are commonly used for backup and restore, data archiving, content storage for websites, and as a data source for big data analytics.

Key benefits of S3 buckets

S3 buckets offer several advantages, including:

    Durability and availability: S3 provides high durability and availability for your data.
    Scalability: You can store and retrieve any amount of data without worrying about capacity constraints.
    Security: S3 offers multiple security features such as encryption, access control, and audit logging.
    Performance: S3 is designed to deliver high performance for data retrieval and storage operations.
    Cost-effective: S3 offers cost-effective storage options and pricing models based on your usage patterns.

## Creating and Configuring S3 Buckets

Creating an S3 bucket

To create an S3 bucket, you can use the AWS Management Console, AWS CLI (Command Line Interface), or AWS SDKs (Software Development Kits). You need to specify a globally
unique bucket name and select the region where you want to create the bucket.

Choosing a bucket name and region

The bucket name must be unique across all existing bucket names in Amazon S3. It should follow DNS naming conventions, be 3-63 characters long, and contain only lowercase
letters, numbers, periods, and hyphens. The region selection affects data latency and compliance with specific regulations.

Bucket properties and configurations

    Versioning: Versioning allows you to keep multiple versions of an object in the bucket. It helps protect against accidental deletions or overwrites.

Bucket-level permissions and policies

Bucket-level permissions and policies define who can access and perform actions on the bucket. You can grant permissions using IAM (Identity and Access Management) policies, 
which allow fine-grained control over user access to the bucket and its objects.

## Uploading and Managing Objects in S3 Buckets

Uploading objects to S3 buckets

You can upload objects to an S3 bucket using various methods, including the AWS Management Console, AWS CLI, SDKs, and direct HTTP uploads. 
Each object is assigned a unique key (name) within the bucket to retrieve it later.

Object metadata and properties

Object metadata contains additional information abouteach object in an S3 bucket. It includes attributes like content type, cache control, encryption settings, 
and custom metadata. These properties help in managing and organizing objects within the bucket.

File formats and object encryption

S3 supports various file formats, including text files, images, videos, and more. You can encrypt objects stored in S3 using server-side encryption (SSE). 
SSE options include SSE-S3 (Amazon-managed keys), SSE-KMS (AWS Key Management Service), and SSE-C (customer-provided keys).

Lifecycle management

Lifecycle management allows you to define rules for transitioning objects between different storage classes or deleting them automatically based on predefined criteria.
For example, you can move infrequently accessed data to a lower-cost storage class after a specified time or delete objects after a certain retention period.

Multipart uploads

Multipart uploads provide a mechanism for uploading large objects in parts, which improves performance and resiliency. You can upload each part in parallel and then
combine them to create the complete object. Multipart uploads also enable resumable uploads in case of failures.

Managing large datasets with S3 Batch Operations

S3 Batch Operations is a feature that allows you to perform bulk operations on large numbers of objects in an S3 bucket. 
It provides an efficient way to automate tasks such as copying objects, tagging, and restoring archived data.

## Advanced S3 Bucket Features

S3 Storage Classes

S3 offers multiple storage classes, each designed for different use cases and performance requirements:

![Screenshot 2023-07-06 at 7 16 51 PM](https://github.com/iam-veeramalla/aws-devops-zero-to-hero/assets/43399466/6b1ebcda-5b99-4358-ac1a-5bf559140571)


S3 Replication

S3 replication enables automatic and asynchronous replication of objects between S3 buckets in different regions or within the same region. 
Cross-Region Replication (CRR) provides disaster recovery and compliance benefits, while Same-Region Replication (SRR) can be used for data resilience and low-latency access.

S3 Event Notifications and Triggers

S3 event notifications allow you to configure actions when specific events occur in an S3 bucket. For example, you can trigger AWS Lambda functions, send messages to Amazon
Simple Queue Service (SQS), or invoke other services using Amazon SNS when an object is created or deleted.

S3 Batch Operations

S3 Batch Operations allow you to perform large-scale batch operations on objects, such as copying, tagging, or deleting, across multiple buckets. It simplifies managing large
datasets and automates tasks that would otherwise be time-consuming.

## Security and Compliance in S3 Buckets

S3 bucket security considerations

Ensure that S3 bucket policies, access control, and encryption settings are appropriately configured. Regularly monitor and audit access logs for unauthorized activities.

Data encryption at rest and in transit

Encrypt data at rest using server-side encryption options provided by S3. Additionally, enable encryption in transit by using SSL/TLS for data transfers.

Access logging and monitoring

Enable access logging to capture detailed records of requests made to your S3 bucket. Monitor access logs and configure alerts to detect any suspicious activities or unauthorized access attempts.


## S3 Bucket Management and Administration

S3 bucket policies

Create and manage bucket policies to control access to your S3 buckets. Bucket policies are written in JSON and define permissions for various actions and resources.

S3 access control and IAM roles

Use IAM roles and policies to manage access to S3 buckets. IAM roles provide temporary credentials and fine-grained access control to AWS resources.

S3 APIs and SDKs

Interact with S3 programmatically using AWS SDKs or APIs. These provide libraries and methods for performing various operations on S3 buckets and objects.

Monitoring and logging with CloudWatch

Utilize Amazon CloudWatch to monitor S3 metrics, set up alarms for specific events, and collect and analyze logs for troubleshooting and performance optimization.

S3 management tools

AWS provides multiple management tools, such as the AWS Management Console, AWS CLI, and third-party tools, to manage S3 buckets efficiently and perform operations like uploads, downloads, and bucket configurations.

## Troubleshooting and Error Handling

Common S3 error messages and their resolutions

Understand common S3 error messages like access denied, bucket not found, and exceeded bucket quota. Troubleshoot and resolve these errors by checking permissions, bucket configurations, and network connectivity.

Debugging S3 bucket access issues

Investigate and resolve issues related to access permissions, IAM roles, and bucket policies. Use tools like AWS CloudTrail and S3 access logs to identify and troubleshoot access problems.

Data consistency and durability considerations

Ensure data consistency and durability by understanding S3's data replication and storage mechanisms. Verify that data is correctly uploaded, retrieve objects using proper methods, and address any data integrity issues.

Recovering deleted objects

If an object is accidentally deleted, you can often recover it using versioning or S3 event notifications. Additionally, consider enabling Cross-Region Replication (CRR) for disaster recovery scenarios.

</details>

</details>


<details>
<summary>AWS cli</summary>

[commands](https://docs.aws.amazon.com/cli/latest/)

```bash
aws version
aws configure

aws s3 ls # list s3 bucktes

... etc

```

</details>


<details>
<summary>IaC with AWS CFT</summary>

**CFT** -> **Cloud Formation Template**
are used to create infrastructure on `aws`

They implements the principle of IaC (Infrastructure as Code)

It is a template that helps in cloud(aws) formation. So, cft are templates that helps us in cloud formation in aws i.e in creating the resources, managing  and updating the cloud insftarcture in aws.

Why choose cft over cli ?

CFT implements the principles of IaC which cli does not.

Infrastructure as Code Principles

1) any tool i.e iac tool, this tool as to act as a middle man between the user and one or multiple cloud provider, if users submits a template. eg terraform supports multiple cloud provider, cft supports only aws.

    Any template i.e declarative and versioned in nature as to be submitted by the user to the tool, and the tool has to take template as input and convert this to the lanaguge that the cloud provider understands, usually tha langauge are api call.

    user can submit YAML or JSON file both supported by CFT


Features of CFT and format

1) Supports both JSON and (YAML)
2) has many Features such as creating IaC and Drift Detection

Drift Detection ?

detect changes made to the resources created by cloud formation which are not rquired. 

Stacks ?

Stack is the one that implements the template. 

When you write a template you have to submit it to stack, and stack will convert the template request into the api using the cloud formation service. 

CFT YAML file structure components

- version 
- description
- metadata
- parameters -> passing variable to CFT at runtime 
- rules -> let say you want to validate the parameter submiited by the parameters. (check naming convention)
- mappings -> assigning the parameter to the variables
- conditions
- resources -> manditory, here, we define what exactly we want.
- output -> 

**[Documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)**

**[Template Format](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-formats.html)**

**[Template anomity](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html)**

**[Template Reference -> Resource and property reference ](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)**

Tools VS Code-> YAML && AWS toolkit 

</details>


<details>
<summary>AWS CodeCommit</summary>

In Ideal case using jenkins we have 4 steps

    1) we need a place, where we host or code eg github and github using webhooks trigenners the jenkins pipeling

    2) jenkins pipeline
    
    3) within pipeline, we have build process

    4) Deploy to k8s ot ec2

so for this 4 steps we are using 4 tools

    1) github

    2) jenkins

    3) Docker

    4) shell, argocs, ansible to deploy
    
so AWS came up with its own services to implete this all things 

For version control use **CodeCommit** ~ GitHub

For Jenkins Pipeline use **CodePipeline**

For building use **AWS CodeBuild**

For deploy use **AWS CodeDeploy**

## AWS CodeCommit

Store code in **Private Git Repos**

```bash
```

**Advantages**

- Managed Git
- Scalability
- Reliability

**Dis-advantages**

- Features
- AWS Restricted
- Less Integration with services outside AWS


</details>


<details>
<summary> AWS Code Pipeline </summary>

~ **Jenkins**, which is responsibe for continous integration which implements continous interation and invoking continous delivery

CI/CD Flow using jenkins

![Flow chart](https://imgur.com/nBgg5x0.png)

using code pipeline 

code pipeline invokes continuous integratiom and invokes continuous dilivery

![code pipeline](https://imgur.com/u65npyx.png)

**Why Pipeline ?**

- Auto Managing
- Auto Scalling 

</details>
 

<details>
<summary>AWS cloud watch</summary>

**?**

_cloud + watch_

It is a servier who is watching activities on the cloud. eg watchman for aws cloud

It watch all the activities on aws.

help in **monitoring**, **alerting**, **reporting** and **logging**.

**Features:**

- **Monitoring**
- **Real life metrics** -> tells us, what are the usages of the services in real time. eg, in ec2 how many api request dows application inside ec2 receives, during last 30 min what were the cpu utilizations, what was the memory consumptions in last 30 mins of ec2
- **Alarms** -> to take actions on the metrics outcome. eg if if ec2 cpu utiliztion reaches 80% send a notification to the particular email address. 
- **Log insights** -> Providing the log of which service is accessing the other service.
- **Custom metrics** -> we can create custom metrics of memory utilizations.
- **Cost Optimization** -> 
- **Scaling** -> It can integrate with other services

![features](https://imgur.com/DebYpQL.png)

<details>
<summary>Official docs
</summary>

What is AWS CloudWatch?

AWS CloudWatch is a powerful monitoring and observability service provided by Amazon Web Services. It enables you to gain insights into the performance, health, and operational aspects of your AWS resources and applications. CloudWatch collects and tracks metrics, collects and monitors log files, and sets alarms to alert you on certain conditions.

Advantages of AWS CloudWatch:

    Comprehensive Monitoring: CloudWatch allows you to monitor various AWS resources such as EC2 instances, RDS databases, Lambda functions, and more. You get a unified view of your entire AWS infrastructure.

    Real-Time Metrics: It provides real-time monitoring of metrics, allowing you to respond quickly to any issues or anomalies that might arise.

    Automated Actions: With CloudWatch Alarms, you can set up automated actions like triggering an Auto Scaling group to scale in or out based on certain conditions.

    Log Insights: CloudWatch Insights lets you analyze and search log data from various AWS services, making it easier to troubleshoot problems and identify trends.

    Dashboards and Visualization: Create custom dashboards to visualize your application and infrastructure metrics in one place, making it easier to understand the overall health of your system.

Problem Solving with AWS CloudWatch:

CloudWatch helps address several critical challenges, including:

    Resource Utilization: Tracking resource utilization and performance metrics to optimize your AWS infrastructure efficiently.
    Proactive Monitoring: Identifying and resolving issues before they impact your applications or users.
    Troubleshooting: Analyzing logs and metrics to troubleshoot problems and reduce downtime.
    Scalability: Automatically scaling resources based on demand to ensure optimal performance and cost efficiency.

Practical Use Cases of AWS CloudWatch:

    Auto Scaling: CloudWatch can trigger Auto Scaling actions based on defined thresholds. For example, you can automatically scale in or out based on CPU utilization or request counts.

    Resource Monitoring: Monitor EC2 instances, RDS databases, DynamoDB tables, and other AWS resources to gain insights into their performance and health.

    Application Insights: Track application-specific metrics to monitor the performance of your applications and identify potential bottlenecks.

    Log Analysis: Use CloudWatch Logs Insights to analyze log data, identify patterns, and troubleshoot issues in real-time.

    Billing and Cost Monitoring: CloudWatch can help you monitor your AWS billing and usage patterns, enabling you to optimize costs.
</details>
</details>

<details>
<summary>AWS LAMBDA</summary>

## What lambda is solving ?

_compute + serverless_

Gives compute but follow the serverless arch


<details>
<summary>Details</summary>

# AWS Lambda Deep Dive for Beginners

So, what exactly is "serverless computing"? Don't worry; it's not about eliminating servers altogether. Instead, serverless computing is a cloud computing execution model where you, as a developer, don't have to manage servers directly. You focus solely on writing and deploying your code, while the cloud provider takes care of all the underlying infrastructure.

## Understanding AWS Lambda

In this serverless landscape, AWS Lambda shines as a leading service. AWS Lambda is a compute service that lets you run your code in response to events without the need to provision or manage servers. It automatically scales your applications based on incoming requests, so you don't have to worry about capacity planning or dealing with server maintenance.

## How Lambda Functions Fit into the Serverless World

At the heart of AWS Lambda are "Lambda functions." These are individual units of code that perform specific tasks. Think of them as small, single-purpose applications that run independently.

Here's how Lambda functions fit into the serverless world:

1. **Event-Driven Execution**: Lambda functions are triggered by events. An event could be anything, like a new file being uploaded to Amazon S3, a request hitting an API, or a specific time on the clock. When an event occurs, Lambda executes the corresponding function.

2. **No Server Management**: As a developer, you don't need to worry about managing servers. AWS handles everything behind the scenes. You just upload your code, configure the trigger, and Lambda takes care of the rest.

3. **Automatic Scaling**: Whether you have one user or one million users, Lambda scales automatically. Each function instance runs independently, ensuring that your application can handle any level of incoming traffic without manual intervention.

4. **Pay-per-Use**: One of the most attractive features of serverless computing is cost efficiency. With Lambda, you pay only for the compute time your code consumes. When your code isn't running, you're not charged.

5. **Supported Languages**: Lambda supports multiple programming languages like Node.js, Python, Java, Go, and more. You can choose the language you are comfortable with or that best fits your application's needs.

## Real-World Use Cases

Now, let's explore some real-world use cases to better understand how AWS Lambda can be applied:

1. **Automated Image Processing**: Imagine you have a photo-sharing app, and users upload images every day. You can use Lambda to automatically resize or compress these images as soon as they are uploaded to S3.

2. **Chatbots and Virtual Assistants**: Build interactive chatbots or voice-controlled virtual assistants using Lambda. These assistants can perform tasks like answering questions, fetching data, or even controlling smart home devices.

3. **Scheduled Data Backups**: Use Lambda to create scheduled tasks for backing up data from one storage location to another, ensuring data resilience and disaster recovery.

4. **Real-Time Analytics**: Lambda can process streaming data from IoT devices, social media, or other sources, allowing you to perform real-time analytics and gain insights instantly.

5. **API Backends**: Develop scalable API backends for web and mobile applications using Lambda. It automatically handles the incoming API requests and executes the corresponding functions.
</details>

</details>


<details>
<summary> CloudFront</summary>

Provided the solution for CDN.

## Table of Contents
1. Introduction to Content Delivery Networks (CDN)
2. What is CloudFront?
3. How Does CloudFront Work?
4. Benefits of CloudFront
5. Setting Up CloudFront on AWS
6. Use Cases and Scenarios
7. Tips and Best Practices
8. Conclusion

## 1. Introduction to Content Delivery Networks (CDN)

Imagine you have a website with lots of cool content, like images, videos, and documents. When a user visits your site from a different location far away from your server, the content might take a long time to load. That's where CDN comes to the rescue!

A CDN is like a network of servers spread across various locations worldwide. These servers store a copy of your website's content. When a user requests your website, the content is delivered from the server closest to the user, making it super fast! It's like having a local store for your website content everywhere in the world.

## 2. What is CloudFront?

CloudFront is Amazon Web Services' (AWS) very own CDN service. It integrates seamlessly with other AWS services and allows you to deliver content, videos, applications, and APIs securely with low-latency and high transfer speeds.

## 3. How Does CloudFront Work?

Let's understand how CloudFront works with a simple example:

Imagine you have a website with images stored on an Amazon S3 bucket (a cloud storage service). When a user requests an image, the request goes to CloudFront first.

Here's how the process flows:
- **Step 1**: CloudFront checks if it already has the requested image in its cache (storage). If it does, great! It sends the image directly to the user. If not, it proceeds to Step 2.
- **Step 2**: CloudFront fetches the image from the S3 bucket and stores a copy in its cache for future requests. Then, it sends the image to the user.

The next time someone requests the same image, CloudFront will deliver it from its cache, making it super fast and efficient!

## 4. Benefits of CloudFront

- **Fast Content Delivery**: CloudFront ensures your content reaches users with minimal delay, making your website lightning fast.
- **Global Reach**: With servers in various locations worldwide, CloudFront brings your content closer to users, regardless of where they are.
- **Security**: CloudFront provides security features like DDoS protection and SSL/TLS encryption to keep your content and users safe.
- **Scalability**: CloudFront can handle traffic spikes effortlessly, ensuring a smooth experience for your users.
- **Cost-Effective**: Pay only for the data transfer and requests made, making it cost-effective for businesses of all sizes.

## 5. Setting Up CloudFront on AWS

Now, let's get our hands dirty and set up CloudFront on AWS!

### Step 1: Create an S3 Bucket
1. Go to the AWS Management Console and navigate to Amazon S3.
2. Create a new bucket to store your website content.

### Step 2: Upload Content to the S3 Bucket
1. Upload images, videos, or any other content you want to serve through CloudFront to your S3 bucket.

### Step 3: Create a CloudFront Distribution
1. Go to the AWS Management Console and navigate to CloudFront.
2. Click "Create Distribution."
3. Choose whether you want to deliver a web application or content (like images and videos).
4. Configure your settings, such as the origin (your S3 bucket), cache behaviors, and security settings.
5. Click "Create Distribution" to set up CloudFront.

### Step 4: Update Website URLs
1. Once your CloudFront distribution is deployed (it may take a few minutes), you'll get a CloudFront domain name (e.g., `d1a2b3c4def.cloudfront.net`).
2. Replace the URLs of your website content with the CloudFront domain name.

That's it! Your content is now being delivered through CloudFront.

## 6. Use Cases and Scenarios

### Scenario 1: E-Commerce Website
Let's say you have an e-commerce website that sells products globally. By using CloudFront, your product images and videos load quickly for customers all over the world, improving the shopping experience.

### Scenario 2: Media Streaming
You're running a video streaming platform. With CloudFront, you can stream videos to users efficiently, regardless of their location, without buffering issues.

### Scenario 3: Software Downloads
If you offer software downloads, CloudFront can distribute your files faster, reducing download times and providing a better user experience.

## 7. Tips and Best Practices

- **Caching Strategies**: Configure cache settings wisely to balance freshness and speed for different types of content.
- **Invalidation**: Learn how to invalidate or clear cached content when you make updates to your website.
- **Monitoring and Reporting**: Use AWS tools to monitor your CloudFront distribution's performance and gain insights into user behavior.

## 8. Conclusion

By using CloudFront, you can dramatically improve your website's performance, making users happier and potentially boosting your application and business.

</details>

<details>

<summary>ECR</summary>

Elastic Container Registry

Conatainer -> package that conatins application code and software to run the apllication.

Registry -> 

Similar to DockerHub

Diff ECR and DockerHub

In DokerHub, by defualt repos are public. (use IAM users with ECR)
In ECR, by default repos are private. (focus on privacy)

## Table of Contents
1. What is AWS ECR?
2. Key Benefits of ECR
3. Getting Started with AWS ECR
   - Creating an ECR Repository
   - Installing AWS CLI
   - Configuring AWS CLI
4. Pushing Docker Images to ECR
5. Pulling Docker Images from ECR
6. Cleaning Up Resources

## 1. What is AWS ECR?
AWS Elastic Container Registry (ECR) is a fully managed container image registry service provided by Amazon Web Services (AWS). It enables you to store, manage, and deploy container images (Docker images) securely, making it an essential component of your containerized application development workflow. ECR integrates seamlessly with other AWS services like Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).

## 2. Key Benefits of ECR
- **Security**: ECR offers encryption at rest, and images are stored in private repositories by default, ensuring the security of your container images.
- **Integration**: ECR integrates smoothly with AWS services like ECS and EKS, simplifying the deployment process.
- **Scalability**: As a managed service, ECR automatically scales to meet the demands of your container image storage.
- **Availability**: ECR guarantees high availability, reducing the risk of image unavailability during critical times.
- **Lifecycle Policies**: You can define lifecycle policies to automate the cleanup of unused or old container images, helping you save on storage costs.

## 3. Getting Started with AWS ECR
### Creating an ECR Repository
1. Go to the AWS Management Console and navigate to the Amazon ECR service.
2. Click on "Create repository" to create a new repository.
3. Enter a unique name for your repository and click "Create repository."

### Installing AWS CLI
To interact with ECR from your local machine, you'll need to have the AWS Command Line Interface (CLI) installed. Follow the instructions in the [AWS CLI User Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) to install it.

### Configuring AWS CLI
After installing the AWS CLI, open a terminal and run the following command to configure your CLI with your AWS credentials:

```
aws configure
```

Enter your AWS Access Key ID, Secret Access Key, default region, and preferred output format when prompted.

## 4. Pushing Docker Images to ECR
Now that you have your ECR repository set up and the AWS CLI configured, let's push a Docker image to ECR.

1. Build your Docker image locally using the `docker build` command:

```
docker build -t <your-image-name> <path-to-dockerfile>
```

2. Tag the image with your ECR repository URI:

```
docker tag <your-image-name>:<tag> <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/<your-repository-name>:<tag>
```

3. Log in to your ECR registry using the AWS CLI:

```
aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com
```

4. Push the Docker image to ECR:

```
docker push <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/<your-repository-name>:<tag>
```

## 5. Pulling Docker Images from ECR
To pull and use the Docker images from ECR on another system or AWS service, follow these steps:

1. Log in to ECR using the AWS CLI as shown in Step 3 of the previous section.
2. Pull the Docker image from ECR:

```
docker pull <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/<your-repository-name>:<tag>
```

## 6. Cleaning Up Resources
As good practice, remember to clean up resources that you no longer need to avoid unnecessary costs. To delete an ECR repository:

1. Make sure there are no images in the repository, or delete the images using `docker rmi` locally.
2. Go to the AWS Management Console, navigate to the Amazon ECR service, and select your repository.
3. Click on "Delete" and confirm the action.



</details>

<details>
<summary>ECS</summary>

Elasic Container Service.

Issue with docker - auto scaling and auto healing.

Cluster -> farget || ECR

Task Defination ~ Pods

Task -> Runn form of Task Defination. Implementation

Services -> Can add load banacer servicer || ingress or anything

![](https://imgur.com/sNgeG1L.png)


## 1. What is AWS ECS?

AWS ECS is a fully managed container orchestration service that allows you to run Docker containers at scale. It eliminates the need to manage your own container orchestration infrastructure and provides a highly scalable, reliable, and secure environment for deploying and managing your applications.

## 2. Why Choose ECS Over Other Container Orchestration Tools?

Before diving deep into ECS, let's compare it with some popular alternatives like Kubernetes and Docker Swarm.

### Comparison with Kubernetes:

Kubernetes is undoubtedly a powerful container orchestration tool with a vast ecosystem, but it comes with a steeper learning curve. ECS, on the other hand, offers a more straightforward setup and is tightly integrated with other AWS services, making it a preferred choice for AWS-centric environments.

### Comparison with Docker Swarm:

Docker Swarm is relatively easy to set up and is suitable for small to medium-scale deployments. However, as your application grows, ECS outshines Docker Swarm in terms of scalability, reliability, and seamless integration with AWS features like IAM roles and CloudWatch.

## 3. ECS Fundamentals

To understand ECS better, let's explore its core components:

### Clusters:

A cluster is a logical grouping of EC2 instances or Fargate tasks on which you run your containers. It acts as the foundation of ECS, where you can deploy your services.

### Task Definitions:

Task Definitions define how your containers should run, including the Docker image to use, CPU and memory requirements, networking, and more. It is like a blueprint for your containers.

### Tasks:

A task represents a single running instance of a task definition within a cluster. It could be a single container or multiple related containers that need to work together.

### Services:

Services help you maintain a specified number of running tasks simultaneously, ensuring high availability and load balancing for your applications.

## 4. Pros of Using AWS ECS

- **Fully Managed Service**: AWS handles the underlying infrastructure, making it easier for you to focus on deploying and managing applications.

- **Seamless Integration**: ECS seamlessly integrates with other AWS services like IAM, CloudWatch, Load Balancers, and more.

- **Scalability**: With support for Auto Scaling, ECS can automatically adjust the number of tasks based on demand.

- **Cost-Effective**: You pay only for the AWS resources you use, and you can take advantage of cost optimization features.

## 5. Cons of Using AWS ECS

- **AWS-Centric**: If you have a multi-cloud strategy or already invested heavily in another cloud provider, ECS's tight integration with AWS might be a limitation.

- **Learning Curve for Advanced Features**: While basic usage is easy, utilizing more advanced features might require a deeper understanding.

- **Limited Flexibility**: Although ECS can run non-Docker workloads with EC2 launch types, it is primarily optimized for Docker containers.

## 6. Installation and Configuration

Let's get our hands dirty and set up AWS ECS step-by-step.

### Prerequisites:

- An AWS account with appropriate IAM permissions.
- The AWS CLI and ECS CLI installed on your local machine.

### Setting Up ECS CLI:

ECS CLI is a command-line tool that simplifies the process of creating and managing ECS resources.

```bash
$ ecs-cli configure --region <region> --access-key <access-key> --secret-key <secret-key> --cluster <cluster-name>
```

### Configuring AWS Credentials:

Ensure you have the necessary AWS credentials configured using `aws configure` command.

## 7. Deploying Your First Application on ECS

In this section, we'll deploy a simple web application using ECS.

### Preparing the Application:

1. Create a Dockerfile for your web application.
2. Build the Docker image and push it to Amazon ECR (Elastic Container Registry).

### Creating a Task Definition:

Define the task using the ECS CLI or the AWS Management Console.

### Configuring the Service:

Create an ECS service to manage the desired number of tasks and set up load balancing.

### Deploying the Service:

Use the ECS CLI or the AWS Management Console to deploy the service.

### Monitoring the Service:

Monitor your ECS service using AWS CloudWatch metrics and logs.


### Use

#### Login to ECR (replace <region> and <account-id> with your actual values)
$ aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com


#### Build the Docker image (replace <repo-name> with your ECR repository name)
$ docker build -t <account-id>.dkr.ecr.<region>.amazonaws.com/<repo-name>:latest .

#### Push the Docker image to ECR (replace <repo-name> with your ECR repository name)
$ docker push <account-id>.dkr.ecr.<region>.amazonaws.com/<repo-name>:latest

</details>

<details>

<summary>Secret Management</summary>

1. Systems Manager
2. Secrets Manager
3. Hashicorp vault -> not aws

1. System Manager
- Parameter store
Here the data is very easy to retireve. Just need to grant the IAM role.
eg Storing Docker username or docker registry url


2. Secrets Manager
Sometimes we need to rotate the informations. 
Rotate ?
When the information is very secret.
eg Storing Docker password

3. Hashicorp vault
works for hybrid cloud architecture

</details>


<details>
<summary>AWS Config</summary>

Identify Compliant and Non Compliant AWS resources 

Using Config we can check how many resources are conpliant and not compliant. 

### Rules
we can set rules

here we use the concept of **compliance**.

Compliance can be all ec2 must have an tag attahced.

# AWS Config

we'll use AWS Config to detect compliant and non-compliant ec2 instances for below rule.
- compliant ec2 instance has monitoring enabled
- non-compliant ec2 instance does not have monitoring enabled

Step 1: Set Up AWS Config

    Log in to your AWS Management Console.

    Navigate to the AWS Config service.

    Click on "Get started" if you're using AWS Config for the first time.

    Configure the delivery channel settings, which include specifying an Amazon S3 bucket where AWS Config will store configuration history.

    Choose the resource types you want AWS Config to monitor. In this case, select "Amazon EC2 Instances."

Step 2: Create a Custom Config Rule

    Navigate to the AWS Config console.

    In the left navigation pane, click on "Rules."

    Click on the "Add rule" button.

    Choose "Create a custom rule."

    Give your rule a name and description (e.g., "Monitoring for EC2 Instances").

    For "Scope of changes," choose "Resources."

    Define the rule trigger. You can use AWS Lambda as the trigger source. If you haven't already created a Lambda function for this rule, create one that checks whether monitoring is enabled for an EC2 instance. The Lambda function will return whether the resource is compliant or not based on monitoring status.

Step 3: Define the Custom Rule in AWS Config

    Choose your Lambda function from the dropdown list as the evaluator for the rule.

    Specify the trigger type (e.g., "Configuration changes").

    Save the rule.

Step 4: Monitor and Alert

    AWS Config will now continuously evaluate your EC2 instances against the rule you've created.

    If any EC2 instance is found without monitoring enabled, the custom rule's Lambda function will mark it as non-compliant.

</details>