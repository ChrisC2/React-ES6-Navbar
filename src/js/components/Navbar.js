import React from 'react';
import NavLeftSlider from './NavLeftSlider';
import classNames from 'classnames';

//Top NavBar Component
export default class Navbar extends React.Component {
  //Initialize closed left slider
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    }
  }

  //Toggle left slider open/closed
  toggleMenu = () => {
    this.setState({navOpen: !this.state.navOpen})
  }

  render() {
    //Toggle class icon spin animation through transition states on slider toggle
    let iconSpin = classNames("nav-icon", {"spin": this.state.navOpen });
    let iconSrc = this.state.navOpen ? './images/close-icon.svg' : './images/menu-icon.svg';

    //Toggle class slide right animation on slider
    let navClass = classNames('nav-left-slider', {'visible': this.state.navOpen});

    //Render NavLeftSlider component only when toggled
    let navLeftSlider = this.state.navOpen ? <NavLeftSlider navItems={this.props.menuItems}/> : "";

    return (
      <div className='nav-bar'>
        <img className={iconSpin} src={iconSrc} onClick={this.toggleMenu}/>
        <div className={navClass}>
          {navLeftSlider}
        </div>
      </div>
    )
  }
}
