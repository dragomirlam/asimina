import express from 'express';

const app = express();
const port = 3000;

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Pass to next layer of middleware
  next();
});

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