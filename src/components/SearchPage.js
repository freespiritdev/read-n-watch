import React from 'react';
import Movie from './Movie';
import Book from './Book';

const SearchPage = React.createClass({
  render() {
    return (
      <div className="container" id="searchPageContainer">
        <div className="row">
          <div className="col-xs-12 col-md-6 placeHolder">
            <Book />
          </div>
          <div className="col-xs-12 col-md-6 placeHolder">
            <Movie />
          </div>
        </div>
      </div>
    );
  }
});

export default SearchPage;
