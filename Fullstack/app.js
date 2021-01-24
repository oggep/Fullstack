const express = require('express');
const dBModule = require('./dBModule');
const { createstorage } = require('./storestuff');
const app = express();
const port = 3000;

const clientDir = __dirname + "\\client\\"

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(clientDir + "index.ejs")
})

app.get('/stilen', (req, res) => {
  res.sendFile(clientDir + ".css")
})

app.post('/', async (req, res) => {
   let Storage = createstorage(req.body.name, req.body.text)
   await dBModule.storeElement(Storage)

  console.log(req.body.name);
  console.log(req.body.text);
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 