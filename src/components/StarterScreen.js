import React, { Component } from 'react';

class StarterScreen extends Component {

  render() {
    return (
      <div className="full horizontal-center">
        <h1>Ce parcours est-il fait pour vous ?</h1>
        <h3 className="highlight-section">
          <p>Choisir une formation pour sa réorientation professionnelle est souvent stressant et excitant à la fois.</p>
          <p>Vous hésitez peut-être entre de nombreuses formations sans en avoir encore trouvé une qui réponde à toutes vos attentes.</p>
          <p>Prenez 5 minutes pour découvrir le type de formation qui répond au mieux à vos besoins.</p>
        </h3>
        <div><button onClick={this.props.next} className="primary start-button">FAIRE LE TEST</button></div>
        <div><button onClick={this.props.prev} className="secondary">RETOUR</button></div>
      </div>
    );
  }
}


export default StarterScreen;