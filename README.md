# dCode Server
This server provides backend functionality for *dCode Client*.

### Installation (Mac)
* `cd ~/Documents/<yourprojectsfolder>`
* `git clone https://github.com/samuraijane/dcode-server.git`
* `cd dcode-server`
* `npm install`

### Create A Local Database
This application uses MongoDB, v3.6.0. If you do not have Mongo installed, see these [instructions](https://docs.mongodb.com/manual/installation/).
* Spin up a MongoDB server with `mongod`
* In a separate terminal window, import mock data with `mongoimport --db dcode --collection categories --drop --file ~/Documents/<yourprojectsfolder>/dcode-server/mocks/seed-data-codes.json`


### Verify with Postman
* Execute a GET request in Postman with `localhost:3001/categories`
* If the application is working properly, you will three objects returned in an array
