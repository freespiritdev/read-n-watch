import React from 'react';
import {FormGroup, ControlLabel, InputGroup, FormControl, Feedback, ButtonGroup, Button, DropdownButton, MenuItem, Form} from 'react-bootstrap';


const SplashInput = React.createClass({
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2'>
            <Form inline id='splashForm'>
              <FormGroup controlId='formInlineNames'>
                <InputGroup bsSize="large">
                  <DropdownButton
                    componentClass={InputGroup.Button}
                    id="input-dropdown-addon"
                    title="Movie">
                    <MenuItem key="1">Book</MenuItem>
                  </DropdownButton>
                </InputGroup>
                <InputGroup bsSize="large">
                  <FormControl type="text" placeholder="Title" id ='titleInput'/>
                </InputGroup>
                <InputGroup bsSize="large">
                  <FormControl type="text" placeholder="Year (optional)" id="yearInput"/>
                </InputGroup>
                <InputGroup bsSize="large">
                  <InputGroup.Button bsSize="large">
                    <Button type='submit'>Search</Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>

    );
  }
});

export default SplashInput;
