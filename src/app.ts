import express, { Application } from 'express'
import authRoutes from './routes/auth';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express();

// settings
app.set('port',4000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000', // Altere para a origem desejada ou '*' para permitir de qualquer origem
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permitir credenciais (por exemplo, cookies)
    optionsSuccessStatus: 204, // Retornar status 204 para preflight
  };
  
app.use(cors(corsOptions));


// routes
app.use('/api/auth/', authRoutes);

export default app;