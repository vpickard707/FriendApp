const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3001;

const app = express();

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
