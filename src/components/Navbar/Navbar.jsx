import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import { RiMenu3Fill, RiGithubFill, RiDiscordFill, RiLinkedinFill } from 'react-icons/ri'

export class NavbarItem extends Component {
  static get propTypes () {
    return {
      item: PropTypes.object
    }
  }

  render () {
    const { item } = this.props
    return <li className="navbar-item">
      <a className="navbar-link" href={item.link}>
        <span className="navbar-item-icon">
          {item.icon()}
        </span>
        {item.name}
      </a>
    </li>
  }
}

export class NavbarMenu extends Component {
  static get propTypes () {
    return {
      items: PropTypes.arrayOf(PropTypes.object)
    }
  }

  render () {
    const items = this.props.items || [{
      name: 'GitHub',
      link: 'https://github.com/alexandrelg2022',
      icon: RiGithubFill
    }, {
      name: 'LinkedIn',
      link: 'https://linked.in/profile',
      icon: RiLinkedinFill
    }, {
      name: 'Discord',
      link: 'https://discord.gg/x',
      icon: RiDiscordFill
    }]
    return <ul className="navbar-menu">
      {items.map((item) => <NavbarItem item={item} key={item.name} />)}
    </ul>
  }
}

export default class Navbar extends Component {
  render () {
    return <nav className="navbar">
      <div className="navbar-content">
        <img src="/assets/icon.png" alt="Logo Alex Développement" className="navbar-icon"/>
        <NavbarMenu />
      </div>
      <button className="navbar-modal-open">
        {RiMenu3Fill()}
      </button>
    </nav>
  }
}
