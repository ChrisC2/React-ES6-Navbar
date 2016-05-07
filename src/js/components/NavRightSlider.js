import React from 'react';
import classNames from 'classnames';
import ItemDropdown from './ItemDropdown';

//Child Component of NavLeftSlider
export default class NavRightSlider extends React.Component {
  render() {
    //Appends array of ItemDropdown components
    let subMenuItems = this.props.subMenu.map((subItem, index) => {
      return (
        <ItemDropdown
          key={index}
          subItem={subItem.item}
          dropdownItems={subItem.subItems}
        />
        )
    })

    return(
      <div>
        <legend>{this.props.itemTitle}</legend>
        {subMenuItems}
      </div>
    )
  }
}
