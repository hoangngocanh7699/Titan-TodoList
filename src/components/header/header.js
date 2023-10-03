import React, { Component } from 'react'
import { Input, Menu, Dropdown } from 'semantic-ui-react'
import '../header/header.scss'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
  		{ key: 2, text: 'Choice 2', value: 2 },
  		{ key: 3, text: 'Choice 3', value: 3 }
    ]

    return (
      <div className='header'>
        <Menu pointing>
          <Menu.Item
            name='titan technology'
            active={activeItem === 'titan technology'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
						<Menu.Item compact>
							<Dropdown text='Hello Anh' options={options} simple item/>
						</Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
