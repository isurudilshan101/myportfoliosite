import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

 class Contact extends Component {
  render() {
    return (
      <div>
       <Grid className="demo-grid-1">
        <Cell col={6}>half 1</Cell>
        <Cell col={6}>half 2</Cell>
        
    </Grid>
      </div>
    );
  }
}


export default Contact;
