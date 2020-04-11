import React, { Component } from 'react';
import Search from '../components/Search';
import BookResults from '../components/BookResults';
import API from "../utils/API";
 


class Books extends Component {
    // create sta
constructor(props){
    super(props);
    this.state = {
 
        books: [],
        searchField:''
    }
}


searchBook = (event) => {
  event.preventDefault();
    API.getGoogleBooks(this.state.searchField).then(response => {
         console.log(response.data)

         this.setState({books: response.data})
    }) 
}


handleSearch = (event) => {
    this.setState({searchField: event.target.value })
}

saveBook = (bookData) => {
  API.saveBook(bookData).then((response) => {
    console.log(response)
  })
}
 

  render() {
    return (
      <div>
        <Search searchBook = {this.searchBook} handleSearch = {this.handleSearch} />
        <BookResults
       books={this.state.books}  saveBook = { this.saveBook }     />

       
      </div>
    );
  }
}

export default Books;

