import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as socketio from 'socket.io';
import * as routes from './routes';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const io: any = socketio(server);

app.use(express.static(path.join(__dirname, '../public')));
app.use(compress());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

const port: number = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});





