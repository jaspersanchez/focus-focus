import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
