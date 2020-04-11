const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/gbooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
console.log("mongoose is connected!")
);

// middleware- parses data to be readable
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}
// morgan tells me the status on terminal ex: 200, 404
app.use(morgan("dev"));

routes(app);

 

app.listen(PORT, () => {
    console.log(`SERVER app listening on port ${PORT}`);
});