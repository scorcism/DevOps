## App 2

### Create Dockerfile
```bash
vim Dockerfile
```

```Dockerfile
FROM node:latest

WORKDIR /app

COPY backend/package.json .

RUN npm install

COPY backend/index.js .

EXPOSE 3000

ENTRYPOINT [ "node" ]

CMD [ "index.js" ]
```

**Build and Create Image**
```bash
docker build -t scor32k/app2-image:v1 .    

docker run --name app2-image1 -d -p 3000:3000 app2-image
```

### Create pod

```bash
vim pod.yml
```

```yml
apiVersion: v1
kind: Pod
metadata:
  name: app2-pod
spec:
  containers:
  - name: app2-pod-container
    image: nginx
    ports:
    - containerPort: 3000

```

**deploy pod**
```bash
kubectl apply -f pod.yml
```

### Create deployment
```bash
vim deployment.yml
```
```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app2-deployment
  labels:
    app: app2-deploy
spec:
  replicas: 2
  selector:
    matchLabels:
      app: app2-deploy
  template:
    metadata:
      labels:
        app: app2-deploy
    spec:
      containers:
      - name: app2-deploy-container
        image: scor32k/app2-image:v1
        ports:
        - containerPort: 3000 
```

**deploy deployment**
```bash
kubectl apply -f deployment.yml
```

### Create service
```bash
vim service.yml
```

```yml
apiVersion: v1
kind: Service
metadata:
  name: app2-service
spec:
  type: NodePort
  selector:
    app: app2-deploy
  ports:
    - port: 80
      targetPort: 3000
      nodePort: 30007
```

**deploy service**
```bash
kubectl apply -f service.yml
```