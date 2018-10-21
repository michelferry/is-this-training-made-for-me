import React, { Component } from 'react';
import Header from './Header.js';
import NavBar from './NavBar.js';

class ProfileScreen extends Component {
  render() {
    const groupOptions = [
      "Etudiant(e)",
      "Salarié(e)",
      "Indépendant(e)",
      "Demandeur d'emploi",
      "Autre"
    ]
    return (
      <div className="full">
        <Header title='Pour finir, quelques informations complémentaires :' type="question"/>
        <div className="contactForm">

          <div className="profileTitle">Statut professionel</div>
          <ControlGroup
            step={this.props.step} 
            userAnswers={this.props.userAnswers} 
            updateAnswers={this.props.updateAnswers}
            groupOptions = {groupOptions}
          />

          <div className="textInputSection">
            <div className="profileTitle">Prénom</div>
            <TextInput 
              name="firstname" 
              error="Ne doit contenir que des lettres et faire 3 caractères ou plus."
              step={this.props.step} 
              userAnswers={this.props.userAnswers} 
              updateAnswers={this.props.updateAnswers}
            />
          </div>

          <div className="textInputSection">
            <div className="profileTitle">Email</div>
            <TextInput 
              name="email" 
              error="Oups, votre email ne semble pas valide."
              step={this.props.step} 
              userAnswers={this.props.userAnswers} 
              updateAnswers={this.props.updateAnswers}
            />
          </div>

          <CheckboxInput 
            name="contactAgreement"
            label="J’autorise OpenClassrooms à me recontacter pour répondre à mes questions."
            step={this.props.step} 
            userAnswers={this.props.userAnswers} 
            updateAnswers={this.props.updateAnswers}
          />

        </div>
        <NavBar
          navButtons={true} 
          prev={this.props.prev} 
          next={this.props.next} 
          goTo={this.props.goTo} 
          step={this.props.step} 
          userAnswers={this.props.userAnswers}
          submit = {true}
        />
      </div>
    );
  }
}

class ControlGroup extends Component {
  constructor(props){
    super(props);
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  selectAnswer(step, answer){
    this.props.updateAnswers(step, answer);
  }

  render(){
    return (
      <div className="control-group">
        {this.props.groupOptions.map((option) => {
          return <GroupOption
            key={this.props.groupOptions.indexOf(option)}
            text={option} 
            userAnswers={this.props.userAnswers} 
            updateAnswers={this.selectAnswer}
            step={this.props.step}
          />;         
        })}
      </div>
    )
  }
}

class GroupOption extends Component {
  constructor(props){
    super(props);
    this.updateAnswers = this.updateAnswers.bind(this);
  }

  updateAnswers(){
    const userFormAnswers = Object.assign({}, this.props.userAnswers[this.props.step]);
    userFormAnswers.status = this.props.text;
    this.props.updateAnswers(this.props.step, userFormAnswers);
  }

  render(){
    const optionClasses = ["group-option"];
    if(!!this.props.userAnswers[this.props.step].status && this.props.text === this.props.userAnswers[this.props.step].status){
      optionClasses.push("checked");
    }
    return (
      <div onClick={this.updateAnswers} className={optionClasses.join(" ")}>{this.props.text}</div>
    )
  }
}

class TextInput extends Component {
  constructor(props){
    super(props);
    this.updateAnswers = this.updateAnswers.bind(this);
    this.state = {
      error: false
    }
  }

  validInputText(value, name){
    if(name === "firstname"){
      return value.match(/[^0-9]{3,}/i);
    } else if (name === "email"){
      return value.match(/^[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z]{2,4}$/);
    }
  }

  formatValue(value, type){
    if(type === "firstname"){
      let formattedValue = value.toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
      formattedValue = formattedValue.split("-").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join('-');
      return formattedValue;
    } else if (type === "email"){
      return value.toLowerCase();
    }
  }

  updateAnswers(e){
    const value = this.formatValue(e.target.value, this.props.name);
    e.target.value = value;
    if(this.validInputText(value, this.props.name)){
      this.setState((prevState) => ({
        error: false
      }), () => {
        const userFormAnswers = Object.assign({}, this.props.userAnswers[this.props.step]);
        userFormAnswers[this.props.name] = value;
        this.props.updateAnswers(this.props.step, userFormAnswers);
      });
    } else {
      this.setState((prevState) => ({
        error: true
      }), () => {
        const userFormAnswers = Object.assign({}, this.props.userAnswers[this.props.step]);
        userFormAnswers[this.props.name] = false;
        this.props.updateAnswers(this.props.step, userFormAnswers);
      });
    }
  }

  render(){
    const errorClasses = ["error-message"];
    this.state.error ? errorClasses.push("error-displayed") : errorClasses.push("error-hidden");
    return(
      <div>
        <input onChange={this.updateAnswers} type="text" name={this.props.name}></input>
        <div className={errorClasses.join(" ")}>{this.props.error}</div>
      </div>
    );
  }
}

class CheckboxInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: "agree"
    }
    this.updateAnswers = this.updateAnswers.bind(this);
  }

  updateAnswers(e){
    const userFormAnswers = Object.assign({}, this.props.userAnswers[this.props.step]);
    this.setState((prevState) => ({
      checked: (prevState.checked === "agree") ? "disagree" : "agree"
    }), function(){
      userFormAnswers[this.props.name] = this.state.checked;
      this.props.updateAnswers(this.props.step, userFormAnswers);
    });
  }

  render(){
    return(
      <div className="checkboxInputSection">
        <input onChange={this.updateAnswers} type="checkbox" name={this.props.name} checked={this.state.checked==="agree" && "checked"} />
        <label onClick={this.updateAnswers} name={this.props.name}>{this.props.label}</label>
      </div>
    );
  }
}

export default ProfileScreen;