import React from 'react';

// const buttonGroupInstance = (
//   <ButtonGroup>
//     <Button>1</Button>
//     <Button>2</Button>
//     <DropdownButton title="Dropdown" id="bg-nested-dropdown">
//       <MenuItem eventKey="1">Dropdown link</MenuItem>
//       <MenuItem eventKey="2">Dropdown link</MenuItem>
//     </DropdownButton>
//   </ButtonGroup>
// );

const SplashInput = React.createClass({
  render() {
    console.log('hello');
    return (
      <div>
        {/* buttonGroupInstance */}
        <form className='form-inline'>
          <div className="input-group">


          <div className="input-group-btn">
                  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                  </div>
                </div>


            <span className="input-group-input">
              <input type="text" className="form-control" placeholder="Book or Movie Title"/>
            </span>
            <span className="input-group-input">
              <input type="text" className="form-control" placeholder="Year of Release"/>
            </span>
            <span className="input-group-btn">
              <button className="btn btn-default">Search</button>
            </span>
          </div>
        </form>
        {/* <form id='pokeForm'>
          <div className="input-group">
            <input type="number" className="form-control" placeholder="Pokemon ID" required/>
            <span className="input-group-btn">
              <button className="btn btn-default">Catch!</button>
            </span>
          </div>
        </form> */}

      </div>

    );
  }
});

export default SplashInput;
