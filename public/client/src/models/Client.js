const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({

   name: {
       type: String,
       required: true,
   },
   address: {
       type: String,
       required: true
   },
   birth: {
       type: Date,
       required: true,
   },
   createdAt: {
       type: Date,
       default: Date.now
   },
});

mongoose.model('Client', ClientSchema);