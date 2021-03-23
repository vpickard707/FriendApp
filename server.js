const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const socketIO = require("socket.io");
const multer = require("multer");


const dotenv = require("dotenv");
dotenv.config();

const Message = require("./models/messages");
const fileUploader = require("./middleware/fileUploader");


const PORT = process.env.PORT || 3001;

const io = socketIO(process.env.SOCKET_PORT);
const app = express();

io.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});
io.on("connect", (socket) => {
  console.log("Connection established");

getMostRecentMessages()
  .then((results) => {
    socket.emit("mostRecentMessages", results.reverse());
  })
  .catch((error) => {
    socket.emit("mostRecentMessages", []);
  });

socket.on("newChatMessage", (data) => {
  //send event to every single connected socket
  try {
    const message = new Message({
      user_name: data.user_name,
      user_avatar: data.user_avatar,
      message_text: data.message,
    });
    message
      .save()
      .then(() => {
        io.emit("newChatMessage", {
          user_name: data.user_name,
          user_avatar: data.user_avatar,
          message_text: data.message,
        });
      })
      .catch((error) => console.log("error: " + error));
  } catch (e) {
    console.log("error: " + e);
  }
});

socket.on("disconnect", () => {
    console.log("connection disconnected");
  });
});

async function getMostRecentMessages() {
  return await Message.find().sort({ _id: -1 }).limit(10);
}

app.use((req, res, next) => {
  //allow access from every, elminate CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  //set the allowed HTTP methods to be requested
  res.setHeader("Access-Control-Allow-Methods", "POST");
  //headers clients can use in their requests
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );
  //allow request to continue and be handled by routes
  next();
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post(
  "/api/upload",
  upload.single("avatar"),
  fileUploader
);



var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

// connection to mongoose db
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/bffl_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch(err => {
    console.error("Connection error: ", err);
    process.exit();
  });

require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
