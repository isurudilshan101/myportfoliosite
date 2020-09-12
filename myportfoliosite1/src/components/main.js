import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

 const Main=()=>(
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>


    </Switch>
 )

 export default Main;