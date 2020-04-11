import React from 'react';


const Search = (props) => {
    return (
      <div className='Search text-center mb-5'>
      <h4 id="searchTxt">SEARCH FOR BOOKS</h4>
        <form onSubmit = { props.searchBook } action=''>
            <input onChange={ props.handleSearch } type='text' id="inputBox"/>
            <button className="button" type='submit'>SEARCH</button>
        </form>
      </div>
      
    )
}

export default Search;

