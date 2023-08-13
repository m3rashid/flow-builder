import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('hello world'));

app.use('', (req, res, next) => {
  const methodChecks = ['POST', 'PATCH', 'PUT'];
  if (!methodChecks.includes(req.method)) {
    next();
    return;
  }
  // TODO: handle flow checks here
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server is running	on port ' + PORT));
