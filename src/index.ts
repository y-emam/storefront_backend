import express, { Request, Response } from 'express';
// import morgan from 'morgan';
import helmet from 'helmet';
// import RateLimit from 'express-rate-limit';
import routes from './routes/index'
import config from './config';

const app = express();
const port = config.port;


app.use('/api', routes);

app.use(helmet());

app.use(express.json());


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

