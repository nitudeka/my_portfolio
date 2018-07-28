import React, { Component } from 'react';
import Navbar from '../components/Navigation/Navbar/Navbar';
import MyProjects from '../components/Pages/Projects/Projects';
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
      <div>
        <Navbar routeChange={this.routeChangeHandler} navShow={this.state.navShow} toggleNav={this.toggleNav} />
        {
          this.state.route === 'home'
          ? <MyProjects />
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
