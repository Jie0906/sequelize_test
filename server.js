const express = require('express');
const app = express();
const route = require("./routes/userRouter")
app.set('port', process.env.PORT || 3000);


app.use(express.json());

app.use('/',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})