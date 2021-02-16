const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
    name: String,
    text: String,
    age: Number,
    
  });
  
  const Storage = mongoose.model('Storage', storageSchema);
  
  exports.createstorage = (name, text, age) => {
      var storage = new Storage({
          name: name, 
          text: text,  
          age: age,
         });
         
         return storage;
    }

    exports.nameStorage = async () => {
        return await Storage.find({})

    }