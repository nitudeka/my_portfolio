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
        <Canvas colors={['#B2B2B2', '#737373', '#262626', '#404040', '#0F0F0F']} />
        <Navbar routeChange={this.routeChangeHandler}
          navShow={this.state.navShow}
          toggleNav={this.toggleNav}
        />
        <Route exact path='/' render={() => <Home />} />
        <Route path='/projects' render={() => <MyProjects />} />
        <Route path='/about' render={() => <About />} />
      </div>
    );
  }
}

export default App;
