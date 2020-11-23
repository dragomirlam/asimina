import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.get('/data', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ name: 'test', calories: 10, fat: 10, carbs: 10, protein: 10 }));
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});