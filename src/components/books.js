import React from 'react';
import { ajax } from 'jquery';

const Books = React.createClass({
  getInitialState() {
    return {
      bookTitle: 'the-notebook',
      bookObj: null,
      author: 'sparks'
    }
  },
  componentDidMount() {
    // https://www.goodreads.com/book/title.xml?&key=p62cPi50J06SsfYATQEw&title=${this.state.bookTitle}
    ajax(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookTitle}+inauthor:${this.state.author}`)
      .done(book => {
        this.setState({book})
      })
      .fail(err => {
        console.log('err:',err);
      })
  },
  render() {
    if (this.state.book){
      let {author} = this.state.book.items[0].volumeInfo.authors[0];
      console.log('this.state.book[0]', this.state.book.items[0].volumeInfo.authors[0]);
      return (
        <div>
        <form>
          <div>
            <input type="number" min='1' onChange={this.updatePerson} />
          </div>
        </form>
        <h1>Books Books</h1>
        <h3>Author:{author}</h3>
        </div>
      );
    } else {
      return ( <h1>Loading...</h1>);
    }
  }
});

export default Books;
