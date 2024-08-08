const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const http = require('http');
app.use(cors());
app.use(morgan('dev'));
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*', // accept all request urls
    methods: ['GET', 'POST'],
  },
});
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('join room', async (room) => {
    if (room.farmerId && room.expertId) {
      socket.join(room.roomId);
      console.log(`User joined room: ${room.roomId}`);
      const checkRoom = await prisma.room.findMany({
        where: {
          roomid: room.roomId,
        },
      });
      if (checkRoom.length) return;
      await prisma.room.create({
        data: {
          farmerId: room.farmerId,
          expertId: room.expertId,
          roomid: room.roomId,
        },
      });
    }
  });
  socket.on(
    'chat message',
    async ({ message, roomId, senderName, senderId, createdAt }) => {
      await prisma.message.create({
        data: {
          roomId: roomId,
          senderId: senderId,
          senderName: senderName,
          message,
        },
      });
      io.to(roomId).emit('chat message', {
        message,
        roomId,
        senderId,
        senderName,
        createdAt,
      });
      console.log(`Message: ${message} sent to room: ${roomId} from ${senderName}`);
    }
  );
});

const { pricesData } = require('./helpers/pricesData');
const routersAuthfarmer = require('./routes/Authfarmer.js');
const routersAuthexpert = require('./routes/Authexpert.js');
const routerFarmtools = require('./routes/FarmerTools.js');
const routerFarmer = require('./routes/Farmer.js');
const routerEnrollement = require('./routes/Enrollement.js');
const { getWeather } = require('./WeatherAPI/Weather.js');
const routercommunity = require('./routes/community.js');
const newsRouter = require('./routes/News.js');
const routercomment = require('./routes/comment.js');
const routerMessage = require('./routes/messageRoute.js');
const routerprice=require('./routes/prices.js')
//Declare the express app

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Set port
const port = 5000;
//Load environment variables from .env file
dotenv.config();

app.get('/prices', pricesData);
app.use('/api/farmer', routersAuthfarmer);
app.use('/api/expert', routersAuthexpert);
app.use('/api/tools', routerFarmtools);
app.use('/api/post', routercommunity);
app.use('/api/comment', routercomment);
// app.get('/weather',getWeather)
app.use('/news', newsRouter);
app.use('/enrollement', routerEnrollement);
app.use('/api/message', routerMessage);
app.use('/api/price',routerprice)

//Listen for requests  :
server.listen(port, () => console.log(`App listening on port ${port}!`));
