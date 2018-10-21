import React, { Component } from 'react';

class LoadingScreen extends Component {
  render() {
    return (
      <div className="full loading-screen">
        <h1>Merci {this.props.userAnswers[14].firstname} !</h1>
        <h2>Nous analysons votre profil d'apprenant...</h2>
        <ProgressBar next={this.props.next}/>
      </div>
    );
  }

  componentDidMount(){
    this.props.determineUserProfile();
  }
}

class ProgressBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      percent: 0
    }
    this.progressIncrease = this.progressIncrease.bind(this);
  }

  componentDidMount(){
    this.progressIncrease(100);
  }

  progressIncrease(target){
    if(this.state.percent < target){
      this.setState((prevState) => ({
        percent: prevState.percent + 0.2
      }), () => {
        setTimeout(() => {
          this.progressIncrease(target);
        }, 7)
      });
    } else {
      this.props.next();
    }
  }

  render(){
    return (
      <div className="progress-bar">
        <Filler percent={this.state.percent}/>
      </div>
    )
  }
}

const Filler = (props) => {
  return (
    <div className="filler" style = {{width: `${props.percent}%`}}></div>
  )
}

export default LoadingScreen;