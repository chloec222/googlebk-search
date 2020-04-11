
import axios from "axios";

export default {
  // Gets books from the Google API
  // the :id is only on the server side, on client we do not use that syntax
  getGoogleBooks: function(q) {
    return axios.get("/api/googlebooks/" + q );
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/savedbooks");
  },
  
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/savedbooks", bookData);
  },

  deleteBook: function(id) {
    return axios.delete("/api/savedbooks/" + id);
  }
};
