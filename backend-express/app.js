//-подключаем модули
//--внешние модули
// import express from 'express';
// const bodyParser     = require('body-parser');
// const mongoose       = require ('mongoose' );
// s

//--модули приложения
// const keys           = require('./config/keys');
// const notesRoutes    = require('./routes/notes');
//--подключение сервера
// const app            = express();



//-используем модули
// app.use(bodyParser.urlencoded({extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// app.use('api/notes', notesRoutes);


//-настраиваемые модули
const config = {
  useNewUrlParser: true,
};

// //-подключаем БД
// mongoose.Promise = global.Promise;
// const connectToMongoBD = function () {
//   mongoose.connect(keys.mongoURL, config)
//     .then(() => {
//     console.log("MongoDB connected");
//   }).catch((err) => {
//     console.log("Not Connected to Database! - retrying connect in 5 sec", err);
//     setTimeout(connectToMongoBD(), 5000);
//   });
// };
// connectToMongoBD();



// обозначаем начальный роут
// app.get('/', (req, res) => {
//   res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });

//-экспорт настроенного сервера
export default app;