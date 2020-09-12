import React, { Component } from 'react';
import { Layout, Header, Navigation ,Drawer,Content} from 'react-mdl';
import{ Link }from 'react-router-dom';
import './App.css';
import Main from './components/main';


class App extends Component{
  render(){
    return(
      <div className="demo-big-content">
      <Layout>
          <Header title="Title" scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/abouteme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    )
  }
}

export default App;
