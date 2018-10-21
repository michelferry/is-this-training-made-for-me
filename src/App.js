import React, { Component } from 'react';
import * as firebase from "firebase";
import HomeScreen from './components/HomeScreen.js';
import StarterScreen from './components/StarterScreen.js';
import SectionScreen from './components/SectionScreen.js';
import QuestionScreen from './components/QuestionScreen.js';
import ProfileScreen from './components/ProfileScreen.js';
import LoadingScreen from './components/LoadingScreen.js';
import ResultScreen from './components/ResultScreen.js';
import './css/mediaQueries.css';
import './css/OC.css';
import './css/MyTrainingApp.css';

var config = {
  apiKey: "AIzaSyB_YBvE_6t5MqrMHYXJUL1rNGEzKy4aeJM",
  authDomain: "openclassroom-form.firebaseapp.com",
  databaseURL: "https://openclassroom-form.firebaseio.com",
  projectId: "openclassroom-form",
  storageBucket: "",
  messagingSenderId: "1039988681867"
};
firebase.initializeApp(config);

class MyTrainingApp extends Component {
  constructor(props){
    super(props);
    this.stepMax = 16;
    this.state = {
      step: 0,
      userAnswers: Array.from(Array(15), () => false),
      userPoints: Array.from(Array(15), () => false),
      userProfile: undefined
    }
    this.displayCurrentScreen = this.displayCurrentScreen.bind(this);
    this.goToScreen = this.goToScreen.bind(this);
    this.nextScreen = this.nextScreen.bind(this);
    this.prevScreen = this.prevScreen.bind(this);
    this.updateAnswers = this.updateAnswers.bind(this);
    this.determineUserProfile = this.determineUserProfile.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount(){
    this.setState( function(prevState, props) {
      const userAnswers = prevState.userAnswers.slice();
      userAnswers[0] = "Home";
      userAnswers[1] = "Start";
      userAnswers[2] = "Section 1";
      userAnswers[6] = "Section 2";
      userAnswers[10] = "Section 3";
      return {
        userAnswers: userAnswers
      }
    });
  }

  displayCurrentScreen(){
    if(this.state.step === 0){
      return <HomeScreen step={this.state.step} next={this.nextScreen} prev={this.prevScreen}/>
    } else if(this.state.step === 1){
      return <StarterScreen step={this.state.step} next={this.nextScreen} prev={this.prevScreen}/>
    } else if ([2, 6, 10].indexOf(this.state.step) !== -1){
      return <SectionScreen 
        step={this.state.step} 
        next={this.nextScreen} 
        prev={this.prevScreen} 
        goTo={this.goToScreen}
        userAnswers={this.state.userAnswers}
      />
    } else if(this.state.step === 14){
      return <ProfileScreen 
        step={this.state.step}
        next={this.nextScreen}
        prev={this.prevScreen}
        goTo={this.goToScreen}
        userAnswers={this.state.userAnswers}
        updateAnswers={this.updateAnswers}
      />
    } else if(this.state.step === 15){
      return <LoadingScreen 
        next={this.nextScreen}
        userAnswers={this.state.userAnswers}
        determineUserProfile={this.determineUserProfile}
      />
    } else if(this.state.step === 16){
      return <ResultScreen 
        goTo={this.goToScreen}
        userProfile={this.state.userProfile}
      />
    } else {
      return <QuestionScreen 
        step={this.state.step}
        next={this.nextScreen}
        prev={this.prevScreen}
        goTo={this.goToScreen}
        userAnswers={this.state.userAnswers}
        updateAnswers={this.updateAnswers}
      />
    }
  }

  goToScreen(i){
    this.setState(() => ({
      step: i
    }));
  }

  nextScreen(){
    this.setState((prevState) => ({
      step: Math.min(prevState.step+1, this.stepMax)
    }));
  }

  prevScreen(){
    this.setState((prevState) => ({
      step: Math.max(prevState.step-1, 0)
    }));
  }

  updateAnswers(step, answer, points=false){
    this.setState(function (prevState, props){
      const userAnswers = prevState.userAnswers.slice();
      userAnswers[step] = answer;
      const userPoints = JSON.parse(JSON.stringify(prevState.userPoints));
      userPoints[step] = points;
      return {
        userAnswers: userAnswers,
        userPoints: userPoints
      }
    });
  }

  determineUserProfile(){
    let userProfile = undefined;
    let userPoints = {
      social: 0,
      practical: 0,
      results: 0,
      gogetter: 0
    };
    for(let points of this.state.userPoints){
      for(let profile in userPoints){
        if(!!points && isFinite(points[profile])){
          userPoints[profile] += points[profile];
        }
      }
    }
    const maxPoints = Math.max(userPoints.social, userPoints.practical, userPoints.results, userPoints.gogetter);
    for(let profile in userPoints){
      if(userPoints[profile] === maxPoints){
        userProfile = profile;
        break;
      }
    }
    this.setState(() => ({
      userProfile: userProfile
    }), () => {
      this.saveData();
    });
  }

  dateSubmit() {
    const timestamp = new Date();
    const day = timestamp.getDate();
    const month = timestamp.getMonth()+1;
    const year = timestamp.getFullYear();
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
  
    return day + '/' + month + '/' + year + " - " + hours + ":" + minutes;
  }

  saveData(){
    let timestamp = this.dateSubmit();
    firebase.database().ref('/answers/').push({
      "userAnswers": this.state.userAnswers,
      "userPoints": this.state.userPoints,
      "userProfile": this.state.userProfile,
      "dateSubmit": timestamp
    });
  }

  render() {
    return (
      <div id="AppRoot">
        {this.displayCurrentScreen()}
      </div>
    );
  }
}

export default MyTrainingApp;
