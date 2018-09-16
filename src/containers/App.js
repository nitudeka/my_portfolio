import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar/Navbar';
import MyProjects from '../components/Pages/Projects/Projects';
import About from '../components/Pages/About/About';
import Home from '../components/Pages/Home/Home';

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