const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
//app.use(express.json());
app.use(bodyParser.json());

const { MONGOURI } = require('./config/keys');
const PORT = process.env.PORT || 5000;

//dz0ZKdTNSDIU0LYu
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
    console.log("database connected successful... ")
});

db.on("error", () => {
    console.log("connection Failled");
});

const articleRoute = require("./routes/article")


app.use("/api/articles", articleRoute);

//server static assets if in production

if(process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
    });
}




app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}`);
})