import express from 'express';

const app = express();
app.use(express.static('dist'));
app.use(express.static('public'));

app.get(/.*/, (res, req) => {
  req.sendFile('./public/index.html');
})

app.listen(3000, () => console.log('App listening on port 3000!'));
