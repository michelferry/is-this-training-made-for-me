import React, { Component } from 'react';
import Header from './Header.js';
import NavBar from './NavBar.js';
import motivation from '../img/motivation.png';
import change from '../img/change.png';
import elearning from '../img/elearning.png';

class SectionScreen extends Component {
  render() {
    const sectionTitles = {
      2: "Vos sources de motivations et de persévérance",
      6: "Vos attentes vis à vis d’une formation de reconversion professionnelle",
      10: "Les formations en ligne et vous"
    };
    const sectionImages = {
      2: motivation,
      6: change,
      10: elearning
    }
    const sectionDesc = {
      2: "Commençons par ce qui vous motive et vous donne envie d’aller au bout de vos projets.",
      6: "Continuons sur la manière dont  vous abordez votre reconversion professionnelle.",
      10: "Enfin, dites nous en plus sur votre perception des formations en ligne."
    };
    return (
      <div className="full">
        <Header title={sectionTitles[this.props.step]} type="section"/>
        <div className="full horizontal-center">
          <img className="section-icon" src={sectionImages[this.props.step]} alt="" />
        </div>
        <h3 className="highlight-section">{sectionDesc[this.props.step]}</h3>
        <NavBar 
          navButtons={true}
          prev={this.props.prev}
          next={this.props.next}
          goTo={this.props.goTo}
          step={this.props.step}
          userAnswers={this.props.userAnswers}
        />
      </div>
    );
  }
}

export default SectionScreen;