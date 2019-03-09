import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar/Navbar';
import MyProjects from '../components/Pages/Projects/Projects';
import About from '../components/Pages/About/About';
import Home from '../components/Pages/Home/Home';
import Canvas from '../components/Canvas';

class App extends Component {
  state = {
    navShow: false,
  }

  toggleNav = () => {
    this.setState({navShow: !this.state.navShow});
  }
  
  render() {
    return (
      <div>
        <Canvas velocity={2} colors={['#B2B2B2', '#737373', '#262626', '#404040', '#0F0F0F']} />
        <Navbar routeChange={this.routeChangeHandler}
          navShow={this.state.navShow}
          toggleNav={this.toggleNav}
        />
        <Route exact path={`${process.env.REACT_APP_BASE_URL}`} render={() => <Home />} />
        <Route path={`${process.env.REACT_APP_BASE_URL}projects`} render={() => <MyProjects />} />
        <Route path={`${process.env.REACT_APP_BASE_URL}about`} render={() => <About />} />
      </div>
    );
  }
}

export default App;
