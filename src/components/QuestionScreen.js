import React, { Component } from 'react';
import Header from './Header.js';
import NavBar from './NavBar.js';
import NavButtons from './NavButtons.js';

class QuestionScreen extends Component {
  render() {

    const questions = {
      3: "En général, qu’est ce qui vous permets de créer des habitudes saines et les tenir sur le long terme ?",
      4: "A l’inverse, quelle est en général la raison n°1 qui vous pousse à arrêter une bonne habitude que vous avez commencée ?",
      5: "Lorsque vous devez apprendre un nouveau concept, quelle approche adoptez-vous ?",
      7: "Quelle est votre ressenti vis à vis de l’apprentissage de nouvelles compétences ?",
      8: "Qu’est-ce qui vous paraît le plus important dans le choix d’une formation de reconversion professionnelle ?",
      9: "Quelle est votre plus grosse crainte concernant une formation de reconversion professionnelle ?",
      11: "A quel point êtes-vous à l’aise avec les outils numériques en général ?",
      12: "Avez-vous déjà travaillé depuis la maison ou effectué des formations à distance ?",
      13: "Pour vous, quel est le plus gros avantage d’une formation en ligne ?"
    };

    const answers = {
      3: [
        {text: "Je me contente de faire de nouvelles petites actions chaque jour sans trop y penser.", practical: 1},
        {text: "J’ai pu maintenir de bonnes habitudes seulement si je me sentais soutenu(e) / accompagné(e) par quelqu’un.", social: 1}, 
        {text: "Toujours garder en tête l’objectif final que cette bonne habitude va me permettre d’atteindre.", results: 1},
        {text: "De manière générale, je suis assez fort(e) pour tenir de bonnes habitudes sur le long terme.", gogetter: 1}
      ],
      4: [
        {text: "Je me suis rendu compte que les bénéfices de cette nouvelle habitude n’étaient pas si importants après tout.", results: 1},
        {text: "Je n’ai pas été suffisamment discipliné(e) et j’ai progressivement arrêté cette habitude.", practical: 0.7, social: 0.3},
        {text: "Les conditions extérieures / des éléments perturbateurs m’ont empêché de la continuer.", practical: 0.3, social: 0.7},
        {text: "Honnêtement, je n’arrive pas à trouver une bonne habitude que je n’ai pas réussi à tenir.", gogetter: 1}
      ],
      5: [
        {text: "J'évite la théorie pour commencer directement par des cas concrets.", practical: 1},
        {text: "Je suis scrupuleusement le chemin recommandé.", gogetter: 1},
        {text: "J’analyse en détail les bénéfices concrets que vont m’apporter ce nouveau concept.", results: 1},
        {text: "J’essaie de trouver quelqu’un qui pourra me l’expliquer.", social: 1}
      ],
      7: [
        {text: "C’est un processus long et difficile qui me demande de véritables efforts.", practical: 0.4, social: 0.6},
        {text: "En fonction des modalités de l’apprentissage ça peut bien se passer comme être assez démotivant.", practical: 0.6, social: 0.4},
        {text: "J’aime bien apprendre de nouvelles compétences seulement si elles vont m’être utiles concrètement et immédiatement.", results: 1},
        {text: "J’adore ça, je me forme d’ailleurs régulièrement tout(e) seul(e) à de nouvelles compétences.", gogetter: 1}
      ],
      8: [
        {text: "Le résultat : ce que je vais être capable de faire à la fin.", results: 1},
        {text: "Le fait de me sentir accompagné(e) et soutenu(e) pour aller jusqu’au bout.", social: 1},
        {text: "Le fait que la formation soit basée sur des cas pratiques plutôt que des exemples théoriques.", practical: 1},
        {text: "M’assurer que je ne vais pas perdre mon temps sur des notions trop simples ou trop difficiles.", gogetter: 1}
      ],
      9: [
        {text: "Perdre ma motivation en cours de route.", social: 1},
        {text: "Ne pas trouver de travail à l’issue de la formation.", results: 1},
        {text: "Ne pas avoir acquis les compétences que j’espérais.", practical: 1},
        {text: "Choisir une formation qui ne soit pas adaptée à mon niveau.", gogetter: 1}
      ],
      11: [
        {text: "Très à l’aise, j’en utilise un grand nombre au quotidien.", gogetter: 1, practical: 0.5, social: 0.5, results: 0.5},
        {text: "Je me débrouille mais il me faut un peu de temps pour me familiariser avec les nouveaux.", practical: 0.5, social: 0.5, results: 0.5},
        {text: "Pas très à l’aise, je peux ressentir de l’anxiété à l’idée de découvrir un nouvel outil numérique.", practical: 0.5, social: 0.5, results: 0.5}
      ],
      12: [
        {text: "Oui, et j’ai eu l’impression d’être PLUS productif(ve).", gogetter: 1, practical: 0.3, results: 0.5},
        {text: "Oui, et j’ai eu l’impression d’être MOINS productif(ve).", social: 1, practical: 0.7, results: 0.5},
        {text: "Non mais pourquoi pas essayer.", gogetter: 0.7, results: 0.5, practical: 0.3},
        {text: "Non et je ne compte pas essayer.", social: 1, results: 0.5, practical: 0.7}
      ],
      13: [
        {text: "La flexibilité, l’autonomie et la possibilité de s’adapter finement à mon niveau.", gogetter: 1, practical: 0.5, results: 0.5, social: 0.3},
        {text: "Le coût : moins cher pour atteindre les mêmes objectifs.", gogetter: 1, practical: 0.3, results: 1, social: 0.3},
        {text: "Aucun : personnellement, il me faut à tout prix du présentiel pour me motiver.", practical: 0.7, results: 0.5, social: 1}
      ]
    }

    return (
      <div className="full">
        <Header title={questions[this.props.step]} type="question"/>
        <AnswersGroup 
          step={this.props.step} 
          answers={answers[this.props.step]}
          userAnswers={this.props.userAnswers} 
          updateAnswers={this.props.updateAnswers}
        />
        <NavButtons 
          prev={this.props.prev} 
          next={this.props.next} 
          step={this.props.step} 
          userAnswers={this.props.userAnswers}
        />
        <NavBar 
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

class AnswersGroup extends Component {
  constructor(props){
    super(props);
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  selectAnswer(step, answer, points){
    this.props.updateAnswers(step, answer, points);
  }

  render(){
    return (
      <div className="answers-group">
        {this.props.answers.map((answer) => {
          return <Answer
            key={this.props.answers.indexOf(answer)}
            index={this.props.answers.indexOf(answer)} 
            text={answer.text} 
            points = {{social: answer.social, practical: answer.practical, results: answer.results, gogetter: answer.gogetter}}
            userAnswers={this.props.userAnswers} 
            updateAnswers={this.selectAnswer}
            step={this.props.step}
          />;         
        })}
      </div>
    )
  }
}

class Answer extends Component {
  constructor(props){
    super(props);
    this.updateAnswers = this.updateAnswers.bind(this);
  }

  updateAnswers(){
    this.props.updateAnswers(this.props.step, this.props.text, this.props.points);
  }

  render(){
    const radioClasses = ["radioButton"];
    const textClasses = ["answer-text"];
    if(this.props.text === this.props.userAnswers[this.props.step]){
      radioClasses.push("checked");
      textClasses.push("text-selected");
    }
    return (
      <div onClick={this.updateAnswers} className="answer"> 
        <div className={radioClasses.join(" ")}></div>
        <div className={textClasses.join(" ")}>{this.props.text}</div>
      </div>
    )
  }
}

export default QuestionScreen;