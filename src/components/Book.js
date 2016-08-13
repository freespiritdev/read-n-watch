import React from 'react';
import { ajax } from 'jquery';

const Book = React.createClass({
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
       console.log(book)

     })
     .fail(err => {
       console.log('err:',err);
     })
 },
 render() {
   if (this.state.book){
     let {authors, title, publisher, publishedDate, description, pageCount, printType, averageRating, previewLink} = this.state.book.items[0].volumeInfo;
     let imageLinks=this.state.book.items[0].volumeInfo.imageLinks.thumbnail;

     return (
       <div>
         <img src={imageLinks} />
         <h3>{title} ({publishedDate.substr(0,4)})</h3>
         <h4>{description.substr(0,190)}...</h4>
         <h4>Authors: {authors}</h4>
         <h4>Publisher: {publisher}</h4>
         <h4>Page Count: {pageCount}</h4>
         <h4>Rating: {averageRating}/5</h4>
       </div>
     );
   } else {
     return ( <h1>Loading...</h1>);
   }
 }
});

export default Book;
