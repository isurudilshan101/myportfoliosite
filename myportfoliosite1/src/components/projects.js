 import React, { Component } from 'react';
 import {Tabs,Tab} from 'react-mdl';

 class Projects extends Component {

        constructor(props){
            super(props);
            this.state={activeTab:0};
        }

        toggleCategories(){
            if(this.state.activeTab===0){
                return(
                    <div><h1>This is React</h1></div>
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
            {this.toggleCategories()}
        </selection>
       </div>
     );
   }
 }


  
 export default Projects;
 