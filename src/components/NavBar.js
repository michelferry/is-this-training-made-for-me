import React, { Component } from 'react';
import NavButtons from './NavButtons.js';
import motivation from '../img/motivation.png';
import change from '../img/change.png';
import elearning from '../img/elearning.png';
import profile from '../img/users.png';

class NavBar extends Component {
  render() {
    return (
      <div className="form-nav">
        <div className="nav-all-groups">

          <NavGroup src={motivation} startsAt={3} step={this.props.step} goTo={this.props.goTo} userAnswers={this.props.userAnswers}/>
          <span className="nav-arrow">&#10230;</span>

          <NavGroup src={change} startsAt={7} step={this.props.step} goTo={this.props.goTo} userAnswers={this.props.userAnswers}/>
          <span className="nav-arrow">&#10230;</span>

          <NavGroup src={elearning} startsAt={11} step={this.props.step} goTo={this.props.goTo} userAnswers={this.props.userAnswers}/>
          <span className="nav-arrow">&#10230;</span>

          <NavGroup src={profile} solo={true} startsAt={14} step={this.props.step} goTo={this.props.goTo} userAnswers={this.props.userAnswers}/>

        </div>
        {!!this.props.navButtons && <NavButtons 
          prev={this.props.prev}
          next={this.props.next}
          step={this.props.step}
          userAnswers={this.props.userAnswers}
          type="navBar"
          submit = {this.props.submit}
        />}
        {!this.props.navButtons && <div className="nav-buttons"></div>}
      </div>
    );
  }
}

const NavGroup = (props) => {
  return (
    <div className="nav-group">
      <img className="nav-goup-img" src={props.src} alt=""/>

      <NavPoint startsAt={props.startsAt} step={props.step} goTo={props.goTo} userAnswers={props.userAnswers}/>
      {!props.solo && <NavPoint startsAt={props.startsAt+1} step={props.step} goTo={props.goTo} userAnswers={props.userAnswers}/>}
      {!props.solo && <NavPoint startsAt={props.startsAt+2} step={props.step} goTo={props.goTo} userAnswers={props.userAnswers}/>}

    </div>
  );
}

class NavPoint extends Component {
  constructor(props){
    super(props);
    this.goTo = this.goTo.bind(this);
    this.prevQuestion = {
      3: 2,
      4: 3,
      5: 4,
      7: 5,
      8: 7,
      9: 8,
      11: 9,
      12: 11,
      13: 12,
      14: 13
    }
  }

  goTo(){
    if(this.props.userAnswers[this.prevQuestion[this.props.startsAt]] !== false){
      this.props.goTo(this.props.startsAt);
    }
  }

  render () {
    const pointClasses = ["nav-point"];
    if(this.props.step >= this.props.startsAt){
      pointClasses.push("done");
    }
    if(this.props.userAnswers[this.prevQuestion[this.props.startsAt]] !== false){
      pointClasses.push("browsable");
    }
    return(
      <div onClick={this.goTo} className={pointClasses.join(" ")}></div>
    );
  }
}

export default NavBar;