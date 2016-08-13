import React from 'react'
import { Link } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">Read and Watch</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <form className="navbar-form navbar-left">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </form>
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Link</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

export default App;
