import React from 'react';
import {FormGroup, ControlLabel, InputGroup, FormControl, Feedback, ButtonGroup, Button, DropdownButton, MenuItem, Form} from 'react-bootstrap';


const SplashInput = React.createClass({
  render() {
    console.log('hello');
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3'>
            <Form inline>
              <FormGroup controlId='formInlineNames'>
               <InputGroup bsSize="large">
                 <DropdownButton
                   componentClass={InputGroup.Button}
                   id="input-dropdown-addon"
                   title="Movie">
                   <MenuItem key="1">Book</MenuItem>
                 </DropdownButton>
                 <FormControl type="text" placeholder="Title"/>
                 {/* <InputGroup.FormControl>
                  <FormControl type="text" placeholder="Year"/>
                 </InputGroup.FormControl> */}
               </InputGroup>
             </FormGroup>
            </Form>
          </div>
        </div>





        {/* <form className='form-inline'>
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
        </form> */}
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
