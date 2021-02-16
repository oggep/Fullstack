const express = require('express');
const dBModule = require('./dBModule');
const storestuff = require('./storestuff');
const app = express();
const port = 3000;

names: Array;

const clientDir = __dirname + "\\client\\"

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(clientDir));

app.set('view engine', 'ejs');

app.post('/', async (req, res) => {
   let Storage = storestuff.createstorage(req.body.name, req.body.text, req.body.age,)
   await dBModule.storeElement(Storage)

   console.log(req.body.name);
   console.log(req.body.text);
   console.log(req.body.age);
   res.redirect('/')
  })
app.get('/', async (req, res) => {
  const namelist = await storestuff.nameStorage() 
  console.log(namelist)
  res.render("./index.ejs", {names: namelist})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 