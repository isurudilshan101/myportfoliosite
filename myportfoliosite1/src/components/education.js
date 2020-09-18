import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return(
           <div>
              <Grid>
                  <Cell col={4}>
        <p>{this.props.startYear}- {this.props.endYear}</p>
                  </Cell>
                  <Cell col={8}>
        <h4 style={{marginTop:'0px'}}>{this.props.UniversityName}</h4>
        <p>{this.props.UniversitDescription}</p>
                  </Cell>
              </Grid>
           </div>
        );

        
    }

}
export default Education;

