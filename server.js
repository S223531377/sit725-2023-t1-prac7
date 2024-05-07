const express = require("express");
const path = require("path");
const cors = require("cors");
const multer = require("multer");

const app = express();

// excluding dotenv config from production
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// CORS Middleware
app.use(cors());

// express middleware handling the body parsing
app.use(express.json());

// express middleware handling the form parsing
app.use(express.urlencoded({ extended: false }));

// Multer middleware for handling multipart/form-data
const upload = multer();

// Middleware for parsing form-data requests
app.use(upload.any());

// Middleware for handling sample api routes
app.use("/api/v1", require("./routes/api/crud"));

// Create static assets from react code for production only
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Use port from environment variables for production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// . npm install socket.io  2. np= install http  3. update server.js  
  requre("http").createServer(app);  
  require('socket.io')(http)
  app.listen => http.listen  
  io.on('connection', (socket) => {
  console.log('a client is connected');  
  socket.on('disconnect', ()=> { 
    console.log('user disconnected');
  });
    setInterva1(()=>{
    socket.emit("number", parseInt(Math.random()*10)); 
   }, 1000);
  });
 