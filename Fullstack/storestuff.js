const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
    name: String,
    text: String,
  });
  
  const Storage = mongoose.model('Storage', storageSchema);
  
  exports.createstorage = (name, text) => {
      var storage = new Storage({
          name: name, 
          text: text,  
         });
         
         return storage;
    }