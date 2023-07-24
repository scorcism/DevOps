# Notes

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
    - https://gist.github.com/mda590/679aba60ca03699d5b12a32314debdc0
    - 



</details>