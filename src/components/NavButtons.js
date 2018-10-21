import React, { Component } from 'react';

class NavButtons extends Component{
  render(){
    return(
      <div className="nav-buttons">
        <PrevButton prev={this.props.prev}/>
        <NextButton next={this.props.next} step={this.props.step} userAnswers={this.props.userAnswers} submit={this.props.submit}/>
      </div>
    )
  }
}

class NextButton extends Component{
  constructor(props){
    super(props);
    this.next = this.next.bind(this);
    this.nextActivated = this.nextActivated.bind(this);
  }

  nextActivated(){
    if(!!this.props.submit){
      if(!!this.props.userAnswers[this.props.step].status && !!this.props.userAnswers[this.props.step].firstname && !!this.props.userAnswers[this.props.step].email){
        return true;
      } else {
        return false;
      }
    } else {
      if(this.props.userAnswers[this.props.step] !== false){
        return true;
      } else {
        return false;
      }
    }
  }

  next(){
    if(this.nextActivated()){
      this.props.next();
    } 
  }

  render(){
    const buttonClass = ["next"];
    this.nextActivated() ? buttonClass.push("primary") : buttonClass.push("disabled");
    return(
      <button onClick={this.next} className={buttonClass.join(" ")}>
        {!!this.props.submit ? "VALIDER" : "SUIVANT"}
      </button>
    )
  }
}

const PrevButton = (props) => {
  return(
    <button onClick={props.prev} className="secondary prev">PRECEDENT</button>
  );
}

export default NavButtons;