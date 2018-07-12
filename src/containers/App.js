import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navigation/Navbar/Navbar';
import MyProjects from '../components/Pages/MyProjects/MyProjects';
import About from '../components/Pages/About/About';
import Home from '../components/Pages/Home/Home';

class App extends Component {
  state = {
    navShow: false,
    route: 'home'
  }

  toggleNav = () => {
    this.setState({navShow: !this.state.navShow});
  }

  routeChangeHandler = (route) => {
    this.setState({route: route, navShow: false});
  }
  
  render() {
    return (
      <div className='App'>
        <Navbar routeChange={this.routeChangeHandler} navShow={this.state.navShow} toggleNav={this.toggleNav} />
        {
          this.state.route === 'home'
          ? <Home />
          :
          this.state.route === 'myProjects'
          ? <MyProjects />
          : <About />
        }
      </div>
    );
  }
}

export default App;
