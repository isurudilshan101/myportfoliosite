import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';


 class Resume extends Component{
     render(){
         return(
                <div>
                   <Grid>
                       <Cell col={4}>Left side</Cell>

                       <Cell col={8}>Right side</Cell>
                   </Grid>
                </div>

         )
     }
 }

 export default Resume;