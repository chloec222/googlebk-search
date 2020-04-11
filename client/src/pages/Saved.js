import React, { Component } from 'react';
import API from "../utils/API";
import Book from "../components/Book.js";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";


class Saved extends Component {
    state = {
      books: []
    };
  
    componentDidMount() {
      this.getSavedBooks();
    }
  
    getSavedBooks = () => {
      API.getSavedBooks()
        .then(res =>
          this.setState({
            books: res.data
          })
        )
        .catch(err => console.log(err));
    };
  

     deleteBook= id => {
      API.deleteBook(id).then(res => 
        this.getSavedBooks())
        .catch(err => console.log(err));
    };


  
    render() {
      return (
        <Container>
          <Row>
            <Col size="md-12">
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Saved Books" icon="download">
                {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => (
                      <Book
                        key={book._id}
                        title={book.title}
                        subtitle={book.subtitle}
                        link={book.link}
                        authors={book.authors.join(", ")}
                        description={book.description}
                        image={book.image}
                      Button={() => (
                      <button
                      onClick={() => this.deleteBook(book._id)}
                      className="btn btn-light ml-2"
                      >
                      DELETE
                      </button>
                      )}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">NO SAVED BOOKS</h2>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default Saved;
  