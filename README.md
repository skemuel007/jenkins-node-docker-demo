# NodeJs Jenkins Docker Project
Simple project to setup and deploy nodejs using docker
and Build using Jenkins

## Environment Variables

`NODE_ENV=development`

`PORT=3004`

## Installation Bare Metal

Clone the repo

```bash
git clone <repo_url>
```

Install required packages

```bash
cd <project_folder>
npm install
```

Run Project
```bash
npm run start
or 
npm run start:dev [For nodemon option]
```

## Build Dockefile.slave

```bash
docker ps -a

docker-compose -f docker-compose.yml up -d


```