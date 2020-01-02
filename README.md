# Chat-Application
 A real time application - Register to a chat, login, and chat with who ever is logged in

**Expansion for the app of react auth. In this app after you register and logged in you can chat with every one on the server.**

## Set-up
First we need to define a database to store all the users.
this project design to run with a local mondoDB comprass database so the easyest way is to use mongoDB,
but every other document oriented database that use schema is an eligible choice.

make sure you create a database and register it in the right place in the `.env` file.

you can change the JWT's secret key in `.env` too if you want (it can be anything).

## dependencies
`axios`
`concurrently`
`cors`
`nodemon`
`express`
`react-router-dom`
`dotenv`
`bcryptjs`
`jsonwebtoken`
`mongoose`
`bootstrap`
`font-awesome`
`react-router-dom`
`react-toastify`
`socket.io-client`
`react-scroll-to-bottom`
`socket.io`

## Available Scripts (from server directory)
**use npm i in both the client and server directory to intsall all the dependecies**

### `npm install`
install all the dependencies to run this project

### `npm start` 
defualt run of the server without save changing 

### `npm server`
run the api server and can modify and save it 
The page will reload if you make edits
You will also see any lint errors in the console.

### `npm run dev`
launch both the react and express using concurrently
this will let you explore the full app and make changes online
