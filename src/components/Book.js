import React from 'react';
import { ajax } from 'jquery';

const Book = React.createClass({
 getInitialState() {
   return {
     bookTitle: this.props.title,
     bookObj: null
   }
 },
 componentDidMount() {
   // https://www.goodreads.com/book/title.xml?&key=p62cPi50J06SsfYATQEw&title=${this.state.bookTitle}
   ajax(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookTitle}`)
     .done(book => {
       this.setState({book})
       console.log(book)

     })
     .fail(err => {
       console.log('err:',err);
     })
 },
 render() {
   console.log('book rerendered');
   if (this.state.book){
     let {authors, title, publisher, publishedDate, description, pageCount, printType, averageRating, categories, previewLink} = this.state.book.items[0].volumeInfo;
     let imageLinks=this.state.book.items[0].volumeInfo.imageLinks.thumbnail;
     if (authors.length > 1) {
       authors = authors.join(', ');
     }

     return (
       <div className='templateDiv well'>
         <div className='templatePic'>
          <img src={imageLinks} className='picture'/>
         </div>
         <h3>{title} ({publishedDate.substr(0,4)})</h3>
         <p>{description.substr(0,190)}...</p>
         <h3>Authors: {authors}</h3>
         <h3>Publisher: {publisher}</h3>
         <h3>Page Count: {pageCount}</h3>
         <h3>Genre: {categories}</h3>
         <h3>Rating: {averageRating}/5</h3>
         <div className='linkButton'>
           <a href={previewLink}><button className='btn btn-primary'>Preview</button></a>
         </div>
       </div>
     );
   } else {
     return ( <h1>Loading...</h1>);
   }
 }
});

export default Book;
