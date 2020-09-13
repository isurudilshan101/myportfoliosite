 import React, { Component } from 'react';
 import {Tabs,Tab,Grid,Cell, CardTitle, Card, CardText, CardActions, iconButton,Button,CardMenu} from 'react-mdl';

 class Projects extends Component {

        constructor(props){
            super(props);
            this.state={activeTab:0};
        }

        toggleCategories(){
            if(this.state.activeTab===0){
                return(
                    <Card shadow={5} style={{minwidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',background: 'url(https://www.themightycribb.com/wp-content/uploads/2020/07/react-logo.png) center/cover'}}>React Project</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </CardText>
                        <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>

                        </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <iconButton name="share"/>
                    </CardMenu>
                    </Card>
                )
            }else if(this.state.activeTab===1){
                return(
                    <div><h1>This is Angular</h1></div>
                )
            }else if(this.state.activeTab===2){
                return(
                    <div><h1>This is VueJs</h1></div>
                )
            }else if(this.state.activeTab===3){
                return(
                    <div><h1>This is MongoDB</h1></div>
                )
            }

            
        }

     


   render() {
     return (
       <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
        <Tab>React</Tab>
        <Tab>Angular</Tab>
        <Tab>VueJs</Tab>
        <Tab>MongoDB</Tab>
        </Tabs>
        <selection>
            <Grid project-grid>
            <Cell col={12}>
            <div className="content"> {this.toggleCategories()}</div>
            </Cell>
            </Grid>
           
        </selection>
       </div>
     );
   }
 }


  
 export default Projects;
 