import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Modern E-Commerce API running' });
});

app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
