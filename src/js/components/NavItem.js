import React from 'react';
import classNames from 'classnames';

//Child Component of NavBar Component
export default class NavItem extends React.Component {
  //Initialize an unselected state
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  //Selects & Toggles NavRightSlider component open on click
  selectItem = () => {
    this.props.openNavItem();
    this.setState({selected: true});
  }

  //Resets selected state if NavRightSlider is closed
  componentWillReceiveProps = (nextProps) => {
    if(nextProps.sliderClosed) {
      this.setState({selected: false});
    }
  }
  render() {
    //Toggle class for selected animation
    let selected = classNames("sub-item", {"selected": this.state.selected});

    return (
      <div className={selected} onClick={this.selectItem}>
        {this.props.title}
        <img id="nav-icon" src="./images/arrowfwd-icon.png"/>
      </div>
    )
  }
}
