import * as express from 'express';

const app = express();
const PORT = 3001;

// Parse data to json
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hallo Welt');
});
