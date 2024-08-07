const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const http = require('http');
app.use(cors());
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Update this to match your frontend URL
    methods: ['GET', 'POST'],
  },
});
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('join room', (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  }); 
  socket.on('chat message', (msg, room) => {
    io.to(room).emit('chat message', msg);
    console.log(`Message: ${msg} sent to room: ${room}`);
  });
});

const { pricesData } = require('./helpers/pricesData');
const prisma = require('./database/prisma');
const routersAuthfarmer = require('./routes/Authfarmer.js');
const routerFarmtools = require('./routes/FarmerTools.js');
const routerFarmer = require('./routes/Farmer.js');
const { getWeather } = require('./WeatherAPI/Weather.js');
const routercommunity = require('./routes/community.js');
const newsRouter = require('./routes/News.js');
// const excutiveRoute = require('./routes/excutive.js');
const routercomment = require('./routes/comment.js');
//Declare the express app

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Set port
const port = 5000;
//Load environment variables from .env file
dotenv.config();

app.get('/prices', pricesData);
app.use('/api/farmer', routersAuthfarmer);
app.use('/api/tools', routerFarmtools);
app.use('/api/post', routercommunity);
app.use('/api/comment', routercomment);
// app.get('/weather',getWeather)
app.use('/news', newsRouter);
// app.use('/expert', excutiveRoute);

//Listen for requests  :
server.listen(port, () => console.log(`App listening on port ${port}!`));