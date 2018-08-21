import * as express from 'express';
import * as cityRouter from './Routers/cityRouter';
import * as cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('What are you looking at?');
});

app.use('/cities', cityRouter);

export default app;
