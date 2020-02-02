// импортируем модули для сервера
import express from "express";
// import router from "../routes/routes";
import bodyParser from 'body-parser';
import cors from 'cors';
import connectToMongoBD from './src/utils/db-connect';
import config from './src/config/keys';
import  notes from './src/routes/notes';

//создаем экземпляр сервера
const server = express();

// включаем модули на сервере
server.use(bodyParser.urlencoded({extended: true }));
server.use(bodyParser.json());
server.use(cors());
server.use('/api', notes);


connectToMongoBD();
server.get('/', (req, res) => {
  res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

server.listen(process.env.PORT || config.port, () =>
  {console.log('Server has been started', config.port)
});