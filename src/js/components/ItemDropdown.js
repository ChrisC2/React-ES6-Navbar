import React from 'react';
import classNames from 'classnames';

//Child Component of NavRightSlider
export default class ItemDropdown extends React.Component {
  //Initialize closed dropdown state
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }

  //Toggles dropdown on click
  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
  render() {
    //Toggle class for icon spin animation
    let iconSpin = classNames("arrow-icon", {"spin": this.state.dropdownOpen});

    //Toggle class for selected animation
    let selected = classNames("sub-item", {"selected": this.state.dropdownOpen});

    //Toggle class for dropdown animation
    let dropdownClass = classNames("dropdown-item", {"visible": this.state.dropdownOpen});

    //Appends array of dropdown items conditionally
    let dropdownItems = this.props.dropdownItems.map((item, index) => {
      if(this.state.dropdownOpen) {
        return (
          <div key={index} className={dropdownClass}>{item}</div>
        )
      } else {
        return (
          <div key={index} className={dropdownClass}></div>
        )
      }
    })

    return(
      <div>
        <div className={selected}>
          {this.props.subItem}
          <img className={iconSpin} src="./images/arrowup-icon.png" onClick={this.toggleDropdown}/>
        </div>
        {dropdownItems}
      </div>
    )
  }
}
