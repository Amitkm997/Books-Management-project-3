const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router/route')
const mongoose = require('mongoose')
const app = express();
app.use(bodyParser.json())


mongoose.connect("mongodb+srv://Daniel997:0C3UNDypy94fmHDP@cluster0.zyocpul.mongodb.net/group62Database",{

  useNewUrlParser : true
})

.then(()=> console.log("mongoDb is connected"))
.catch(err=> console.log(err))

app.use('/',router)
app.use(function (req, res) {
  var err = new Error('Not Found');
  return res.status(400).send({status : false, msg : "path not found"})
  });

app.listen(process.env.PORT || 3000,function(){

    console.log("express app running on port" + (process.env.PORT||3000))
})
