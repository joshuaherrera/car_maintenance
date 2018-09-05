import React, { Component } from 'react'
import { Button, Dropdown, Menu, Segment } from 'semantic-ui-react'

class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted borderless size='small'>
        <Menu.Item header>Maintenance Tracker</Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
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
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button inverted attached='left' basic color='blue'>Sign Up</Button>
            <Button inverted attached='right' basic color='red'>Log In</Button>
          </Menu.Item>
{/*          <Menu.Item>
            <Button inverted color='green'>Log In</Button>
          </Menu.Item>*/}
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navigation;