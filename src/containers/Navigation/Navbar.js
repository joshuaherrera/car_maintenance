import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu, Container } from 'semantic-ui-react'
import LogoutButton from '../../containers/Logout/Logout'

class Navigation extends Component {
  state = {
    activeItem: null,
  }

  componentDidMount() {
    //check if active is cached, and use as state
    if (sessionStorage.getItem('ActiveItem')) {
      // statement
      this.setState({activeItem: sessionStorage.getItem('ActiveItem')});
    }
    else {
      this.setState({activeItem: 'home'});
    }
  }

  handleItemClick = (e, { name }) => {
    sessionStorage.setItem('ActiveItem', name);
    //console.log(sessionStorage.getItem('ActiveItem'))
    this.setState({ activeItem: name });
  }

  /*NOTE: Want to have conditional navigation based on login status.
          I'm thinking I could have a flag passed in somehow (as state?)
          that would allow me to conditionally render either logged in navigation or
          nonlogged in. As of 3/27/2019 this file contains a preliminary navbar based
          on a user not being logged in.
  */
  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted borderless size='large'>
      <Container>
        <Menu.Item header>Maintenance Tracker</Menu.Item>
        <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          as={Link}
          to='/about'
          name='about'
          active={activeItem === 'about' /*item is active if the name matches*/}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/vehicles'
          name='vehicles'
          active={activeItem === 'vehicles'}
          onClick={this.handleItemClick}
        />


        <Menu.Menu position='right'>

          <Menu.Item>
            <Button name='signup'
                    active={activeItem === 'signup'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/sign-up'
                    inverted
                    basic color='blue'>
                    Sign Up
            </Button>
            <Button as={Link}
                    to='/login'
                    inverted
                    basic color='red'
                    name='login'
                    active={activeItem==='login'}
                    onClick={this.handleItemClick}>
                    Log In
            </Button>
            <LogoutButton />
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
      
    )
  }
}

export default Navigation;