import React, { Component } from 'react';
import socialImg from '../img/social.png';
import practicalImg from '../img/practical.png';
import resultsImg from '../img/results.png';
import gogetterImg from '../img/gogetter.png';
import downImg from '../img/down.png';

class ResultScreen extends Component {
  constructor(props){
    super(props);
    this.retakeTest = this.retakeTest.bind(this);
  }

  scrollTo() {
    const destination = document.getElementById("training").offsetTop;
    window.scrollTo({
        top: destination,
        behavior: "smooth"
    });
  }

  retakeTest(){
    this.props.goTo(0);
  }

  render() {
    const userProfile = this.props.userProfile;
    const profiles = {
      social: {
        name: "Apprenant(e) social(e)",
        img: socialImg,
        shortDesc: "Vous réussissez en étant bien entouré(e).",
        longDesc: "Pour vous, apprendre est bien plus facile en étant accompagné(e) par un formateur et en échangeant avec les autres apprenants.",
        question: '“Comment vais-je faire pour travailler tout(e) seul(e) et sans vrai cadre de travail ?”',
        paragraphNormal: "Chez OpenClassrooms, nous sommes convaincus que l’apprentissage est plus efficace lorsqu’il inclus de nombreuses interactions humaines.",
        paragraphBold: "Nous nous sommes donc assurés que nos “apprenants sociaux” ne se sentent jamais seuls dans leur formation :",
        bulletPoints: [
          "Un mentor fait le point avec vous chaque semaine.",
          "Vous êtes en lien permanent avec notre communauté d’apprenants.",
          "Vous choisissez un “buddy” qui effectue la formation en même temps que vous.",
          "Si vous habitez dans une ville OpenClassrooms, venez travailler gratuitement avec d’autres apprenants dans un de nos coworking OpenClassrooms."
        ],
        learnerName: "Benjamin",
        learnerGender: "",
        learnerDesc: "apprenants sociaux",
        urlVideo: "https://www.youtube.com/embed/HkdA6zr51C8"
      },
      practical: {
        name: "Apprenant(e) par la pratique",
        img: practicalImg,
        shortDesc: "Vous réussissez lorsque vous avez l’occasion de pratiquer.",
        longDesc: "Pour vous, apprendre est bien plus facile lorsque vous réalisez des tâches concrètes plutôt que quand vous apprenez des grands blocs de théorie.",
        question: '“Comment vais-je faire pour rester concentré(e) toute la journée à regarder des cours sur mon ordinateur ?”',
        paragraphNormal: "Chez OpenClassrooms, nous sommes convaincus que l’apprentissage est plus efficace lorsqu’il est actif.",
        paragraphBold: "Nous nous sommes donc assurés que nos “apprenants par la pratique” restent engagés tout au long de leur formation :",
        bulletPoints: [
          "Nos parcours ont été conçus pour développer des compétences concrètes et utiles, pas juste pour amasser des connaissances.",
          "Pour valider votre parcours, seuls vos projets comptent. Les cours théoriques sont seulement là pour vous aider si vous en avez besoin.",
          "Chaque semaine vous faites le point avec votre mentor dédié sur vos projets en cours."
        ],
        learnerName: "Léonard",
        learnerGender: "",
        learnerDesc: "apprenants par la pratique",
        urlVideo: "https://www.youtube.com/embed/taGLim_yelo"
      },
      results: {
        name: "Apprenant(e) orienté(e) résultats",
        img: resultsImg,
        shortDesc: "Vous réussissez lorsque ça en vaut la peine.",
        longDesc: "Pour vous, apprendre est bien plus facile si le but est clair et vous apporte des bénéfices concrets et bien identifiés.",
        question: "“Comment m’assurer que cette formation va m'aider à trouver un travail ?”",
        paragraphNormal: "Chez OpenClassrooms, nous mettons un point d’honneur à ce que nos formations diplômantes permettent d’acquérir de vraies compétences demandées sur le marché du travail.",
        paragraphBold: "Voici ce que nous avons mis en place pour nos “apprenants orientés résultats” :",
        bulletPoints: [
          "Nos formations diplômantes ont été conçues en collaboration avec de nombreux recruteurs pour s’assurer que chaque compétence apprise sera nécessaire dans votre prochain travail.",
          "Nos formations diplômantes sont reconnues nationalement (enregistrées au RNCP).",
          "Nous vous apprendrons à mettre en avant votre expérience à travers des cours spécifiques et les conseils de votre mentor dédié.",
          "Si vous ne trouvez pas de travail 6 mois après votre formation, nous vous remboursons l’intégralité de votre formation."
        ],
        learnerName: "Philippine",
        learnerGender: "e",
        learnerDesc: "apprenants orientés résultats",
        urlVideo: "https://www.youtube.com/embed/ExMmhLVxAD0"
      },
      gogetter: {
        name: "Apprenant(e) fonceur(se)",
        img: gogetterImg,
        shortDesc: "Vous réussissez si vous pouvez aller à votre rythme.",
        longDesc: "Vous vous formez régulièrement tout(e) seul(e) et vous aimez ça. Vous apprenez vite et n’aimez pas perdre votre temps sur des notions déjà maîtrisées.",
        question: '“Que vais-je faire si je fini cette formation plus tôt que prévu ?”',
        paragraphNormal: "Chez OpenClassrooms, nous sommes convaincus que chacun doit pouvoir apprendre à son rythme.",
        paragraphBold: "Nous comprenons la peur de s’ennuyer de nos “apprenants fonceurs” et nous avons fait en sorte que rien n’arrête leur soif d’apprendre :",
        bulletPoints: [
          "Flexibilité totale : apprenez où vous voulez, quand vous voulez avec le mentor de votre choix.",
          "Nos parcours n’ont pas de durée fixe, si vous avancez plus vite, vous finirez plus tôt.",
          "Si vous finissez plus tôt, vous pouvez vous former à des compétences complémentaires grâce à notre catalogue de plus de 1 000 cours en ligne."
        ],
        learnerName: "Gaëlle",
        learnerGender: "e",
        learnerDesc: "apprenants fonceurs",
        urlVideo: "https://www.youtube.com/embed/R_cqooajgOw"
      }
    }

    return (
      <div className="full horizontal-center">
        <div className="fullPage">
          <h2>Vous êtes un(e) :</h2>
          <img className="profile-icon" src={profiles[userProfile].img} alt="" />
          <div className="profile-name">{profiles[userProfile].name}</div>
          <div className="profile-shortDesc">{profiles[userProfile].shortDesc}</div>
          <div className="profile-longDesc">{profiles[userProfile].longDesc}</div>
          <img onClick={this.scrollTo} className="down-arrow" src={downImg} alt="" />
        </div>
        <div id="training">
          <h2>Ce parcours est-il fait pour moi ?</h2>
          <div className="profile-question">La question que vous vous posez :</div>
          <h3 className="profile-user-question">{profiles[userProfile].question}</h3>
          <p className="profile-paragraph">{profiles[userProfile].paragraphNormal} <strong>{profiles[userProfile].paragraphBold}</strong></p>
          <ul className="bullet-points-profile">
            {profiles[userProfile].bulletPoints.map((item) => <li key={profiles[userProfile].bulletPoints.indexOf(item)}>{item}</li>)}
          </ul>
          <p className="profile-paragraph"><strong>Découvrez le témoignage de {profiles[userProfile].learnerName}, un{profiles[userProfile].learnerGender} de nos "{profiles[userProfile].learnerDesc}" :</strong></p>
          <iframe className="testimony" width="800" height="400" title="testimony" src={profiles[userProfile].urlVideo} allow="encrypted-media"></iframe>
          <div><button onClick={this.retakeTest} className="primary">COMMENCER MAINTENANT</button></div>
        </div>
      </div>
    );
  }
}

export default ResultScreen;