import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import pollRoutes from './routes/pollRoutes';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use('/api', pollRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
