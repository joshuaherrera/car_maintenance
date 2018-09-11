import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu, Container } from 'semantic-ui-react'

class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

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
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='vehicles'
          active={activeItem === 'vehicles'}
          onClick={this.handleItemClick}
        />


        <Menu.Menu position='right'>

          <Menu.Item>
            <Button as={Link} to='/sign-up' inverted attached='left' basic color='blue'>Sign Up</Button>
            <Button as={Link} to='/login' inverted attached='right' basic color='red'>Log In</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
      
    )
  }
}

export default Navigation;