import React from 'react';
import Movie from './Movie';
import Book from './Book';

const SearchPage = React.createClass({
  render() {
    console.log('searchpage rerendered');
    return (
      <div className="container" id="searchPageContainer">
        <div className="row">
          <div className="col-xs-12 col-md-6 placeHolder">
            <Book title={this.props.params.id}/>
          </div>
          <div className="col-xs-12 col-md-6 placeHolder">
            <Movie title={this.props.params.id}/>
          </div>
        </div>
      </div>
    );
  }
});

export default SearchPage;
