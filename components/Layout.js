import Navbar from './Navigation/Navbar/Navbar';

class Layout extends React.Component {
  state = {
    navShow: false,
  };

  toggleNav = () => {
    this.setState({navShow: !this.state.navShow});
  }

  render () {
    return (
      <div>
        <Navbar navShow={this.state.navShow}
          toggleNav={this.toggleNav}
        />
        { this.props.children }
      </div>
    )
  }
}

export default Layout;
