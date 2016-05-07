import React from 'react';
import classNames from 'classnames';
import NavRightSlider from './NavRightSlider';
import NavItem from './NavItem';

//Child Component of NavBar Component
export default class NavLeftSlider extends React.Component {
  //Initialize a closed NavRightSlider component with no selected items
  constructor(props) {
    super(props);
    this.state = {
      sliderClosed: true,
      selectedItem: null
    }
  }

  //Opens NavRightSlider component when nav item is selected
  openNavItem = (index) => {
    this.setState({
      sliderClosed: false,
      selectedItem: this.props.navItems[index]
    })
  }

  //Closes NavRightSlider component
  closeNavItem = () => {
    this.setState({
      sliderClosed: true,
      selectedItem: null
    })
  }
  render() {
    //Toggle class slide left animation to NavRightSlider when nav item is selected
    let navClass = classNames('slide-nav', {'visible': this.state.selectedItem});

    //Adds Overlay on left side to toggle slider closed on click
    let overlay = this.state.selectedItem ? <div className="overlay" onClick={this.closeNavItem}></div> : "";

    //Appends array of NavItem components to be selected
    let navItems = this.props.navItems.map((item, index) => {
      return (
        <NavItem
          key={index}
          sliderClosed={this.state.sliderClosed}
          title={item.title}
          openNavItem={this.openNavItem.bind(this, index)}
        />
      )
    })

    //Ternary: If item is selected render it on NavRightSlider Component
    let slider = this.state.selectedItem ?
      <div className={navClass}>
        <img id="slider-icon" src='./images/close-icon.svg' onClick={this.closeNavItem}/>
        <NavRightSlider
          itemTitle={this.state.selectedItem.title}
          subMenu={this.state.selectedItem.subMenu}
        />
      </div> : <div className={navClass}></div>

    return(
      <div>
        {navItems}
        {overlay}
        {slider}
      </div>
    )
  }
}
