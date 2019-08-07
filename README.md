# Meetapp
Developer event aggregator app for bootcamp certification (GoStack Rocketseat)
> This app is built to take certification as a learning method for Rocketseat's GoStack course.

see [Rocketseat](https://rocketseat.com.br/)

## Techs
1. [NodeJS](https://nodejs.org/en/)
2. [ExpressJS](https://expressjs.com/pt-br/)
3. [ReactJS](https://pt-br.reactjs.org/)
4. [React Native](https://facebook.github.io/react-native/)
5. [Docker](https://www.docker.com/)
6. [PostgreSQL](https://hub.docker.com/_/postgres)
7. [MongoDB](https://hub.docker.com/_/mongo) 

## Backend Usage

**install docker**
see [Docker](https://www.docker.com/)

**create a postgres docker**
```bash
docker run --name -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

**create a mongodb docker**
```bash
docker run --name mongomeetapp -p 27017:27017 -d -t mongo
```
make sure the containers are running

**clone repository**
```bash
git clone https://github.com/thiagolago1/Meetapp.git
```

**install dependencys**
```bash
cd path/to/project

yarn install
```
**execute database migrations**
```bash
yarn sequelize db:migrate
```

**run express server**
```bash
yarn dev
```

## Frontend Usage

* soon the frontend part

