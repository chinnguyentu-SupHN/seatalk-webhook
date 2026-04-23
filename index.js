const express = require("express"); 
const app = express(); 

app.use(express.json()); 

app.post("/webhook", (req, res) => { 
 console.log("DATA:", req.body); 

 if (req.body.seatalk_challenge) { 
 return res.json({ 
 seatalk_challenge: req.body.seatalk_challenge 
 }); 
 } 

 res.sendStatus(200); 
}); 

app.get("/", (req, res) => { 
 res.send("OK"); 
}); 

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log("Running on " + PORT)); 
