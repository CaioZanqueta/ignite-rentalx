import express from 'express';

import { cagoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());
app.use('/categories', cagoriesRoutes);

app.listen(3333, () => console.log('Server is running'));
