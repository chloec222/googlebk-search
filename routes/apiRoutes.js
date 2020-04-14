const db = require("../models");
const axios = require("axios");

function apiRoutes(app) {
    app.get("/api/googlebooks/:title", (req, res) => {
        const title = req.params.title;
        axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + title )
        .then(results =>
          results.data.items.filter(
            result =>
              result.volumeInfo.title &&
              result.volumeInfo.infoLink &&
              result.volumeInfo.authors &&
              result.volumeInfo.description &&
              result.volumeInfo.imageLinks.thumbnail
          )
        )
        .then(apiBooks =>
          db.Book.find().then(dbBooks =>
            apiBooks.filter(apiBook =>
              dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
            )
          )
        )
        .then(books => res.json(books))
        .catch(err => res.send("error"));
    })

    // data refers to the data in the database
    // getting all books and populating it
    app.get("/api/savedbooks", (req, res) => {
        db.Book.find({}).then((data)=>{
            res.json(data);
        })
    })
    // this is saving the books and the data is returned in req.body
    app.post("/api/savedbooks", (req, res) => {
        const newBook = req.body;
        db.Book.create(newBook).then((data) => {
            res.json(data);
        })
    })

    app.get("/api/savedbooks", (req, res) => {
      db.Book.findById(req.params.id)
      .then((data) => res.json(data));
    })

    app.put("/api/savedbooks", (req, res) => {
      db.Book.findByIdAndUpdate({ _id: req.params.id}, req.body)
      .then((data) => res.json(data))
    })


    // :id finds the specific book by its id and deletes it
    app.delete("/api/savedbooks/:id", (req, res)=>{
      db.Book.findById({ _id: req.params.id}, req.body)
      .then((removedBook) => removedBook.remove())
      .then((removedBook) => res.json(removedBook));
    })
      
    };


module.exports = apiRoutes;