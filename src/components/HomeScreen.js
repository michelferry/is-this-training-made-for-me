import React, { Component } from 'react';
import path_project from '../img/path_project.svg';
import path_mentor from '../img/path_mentor.svg';
import path_calendar from '../img/path_calendar.svg';
import path_degree from '../img/path_degree.svg';
import path_garantee from '../img/path_garantee.svg';

class HomeScreen extends Component {

  render() {
    window.scrollTo({top: 0});
    return (
      <div className="full">
        <header id="HEADER_1">
          <div id="HEADER_DIV_8">
              <div id="HEADER_DIV_9">
                <div id="HEADER_DIV_10">
                  <div id="HEADER_DIV_11">
                    <div id="HEADER_DIV_12">
                      <a href="/fr/" id="HEADER_A_13"> <span id="HEADER_SPAN_14">OpenClassrooms.com</span></a>
                    </div>
                    <div id="HEADER_DIV_15">
                      <div id="HEADER_DIV_16">
                        <div id="HEADER_DIV_17">
                          <nav id="HEADER_NAV_18">
                            <ul id="HEADER_UL_19">
                              <li id="HEADER_LI_20">
                                <a href="/fr/paths" id="HEADER_A_21">Parcours</a>
                              </li>
                              <li id="HEADER_LI_22">
                                <a href="/fr/courses" id="HEADER_A_23">Cours</a>
                              </li>
                              <li id="HEADER_LI_24">
                                <a href="/forum/" id="HEADER_A_25">Forums</a>
                              </li>
                              <li id="HEADER_LI_26">
                                <a href="/fr/premium" id="HEADER_A_27">Premium</a>
                              </li>
                              <li id="HEADER_LI_28">
                                <a href="/fr/for-business" id="HEADER_A_29">For Business</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div id="HEADER_DIV_30">
                          <div id="HEADER_DIV_31">
                            <div id="HEADER_DIV_32">
                              <form id="HEADER_FORM_33">
                                <input id="HEADER_INPUT_34" type="search" placeholder="Rechercher" />
                                <button type="button" id="HEADER_BUTTON_37">
                                  <span id="HEADER_SPAN_38"></span>
                                </button>
                                <span id="HEADER_SPAN_42"></span>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div id="HEADER_DIV_43">
                          <div id="HEADER_DIV_44">
                            <a href="/fr/dashboard" title="Notifications" id="A_45"> <span id="SPAN_46"><span id="SPAN_47"></span> <span id="SPAN_48">Michel Ferry</span></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav id="HEADER_NAV_76">
                          <div id="HEADER_DIV_77">
                            <a href="#tab-userMenu" id="HEADER_A_78"> <span id="HEADER_SPAN_79"> <span id="HEADER_SPAN_80"> <span id="HEADER_SPAN_81"><span id="HEADER_SPAN_82"></span> <span id="HEADER_SPAN_83">Michel Ferry</span></span></span></span></a> <a href="#tab-search" id="HEADER_A_84"> <span id="HEADER_SPAN_85">Rechercher</span><i id="HEADER_I_86"></i></a> <a href="#tab-courseMenu" id="HEADER_A_87"> <span id="HEADER_SPAN_88">Cours</span><i id="HEADER_I_89"></i></a> <a href="#tab-courseEditMenu" id="HEADER_A_90"> <span id="HEADER_SPAN_91">Créer un cours</span><i id="HEADER_I_92"></i></a> <a href="#tab-searchMenu" id="HEADER_A_93"> <span id="HEADER_SPAN_94">Rechercher</span><i id="HEADER_I_95"></i></a> <a href="#tab-main" id="HEADER_A_96"> <span id="HEADER_SPAN_97">Menu principal</span><i id="HEADER_I_98"></i></a>
                          </div>
                        </nav>
                  </div>
                  <div id="HEADER_DIV_99">
                  </div>
                </div>
              </div>
            </div>
        </header>
        <div id="DIV_1">
          <div id="DIV_2">
            <section id="SECTION_3">
              <div id="DIV_4">
                <div id="DIV_5">
                  <nav id="NAV_6">
                    <ul id="UL_7">
                      <li id="LI_8">
                        <a href="../" id="A_9"> <span id="SPAN_10">Accueil > </span></a>
                      </li>
                      <li id="LI_11">
                        <a href="https://openclassrooms.com/fr/paths" id="A_12"> <span id="SPAN_13">Parcours > </span></a>
                      </li>
                      <li id="LI_14">
                        Chef de projet multimédia - Développement
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </section>
          </div>
          <main id="MAIN_15">
            <div id="DIV_16">
              <section id="SECTION_17">
                <header id="HEADER_18">
                  <div id="DIV_19">
                    <div id="DIV_20">
                      <div id="DIV_21">
                        <div id="DIV_22">
                          <div id="DIV_23">
                            Devenez
                          </div>
                          <h1 id="H1_24">
                            Chef de projet multimédia - Développement
                          </h1>
                          <div id="DIV_25">
                            Pilotez des projets de communication digitale et spécialisez-vous dans la création de site web.
                          </div>
                          <div id="DIV_26">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </section>
              <section id="SECTION_27">
                <div id="DIV_28">
                  <div id="DIV_29">
                    <div id="DIV_30">
                      <div id="DIV_31">
                        <div id="DIV_32">
                          <div id="DIV_33">
                            <img src={path_project} alt="" id="IMG_34" /> <span id="SPAN_35">6 projets professionnalisants</span>
                          </div>
                        </div>
                        <div id="DIV_36">
                          <div id="DIV_37">
                            <img src={path_mentor} alt="" id="IMG_38" /> <span id="SPAN_39">Mentor<br id="BR_40" />individuel</span>
                          </div>
                        </div>
                        <div id="DIV_41">
                          <div id="DIV_42">
                            <img src={path_calendar} alt="" id="IMG_43" /> <span id="SPAN_44">Durée flexible<br id="BR_45" />12 mois</span>
                          </div>
                        </div>
                        <div id="DIV_46">
                          <div id="DIV_47">
                            <div id="DIV_48">
                              <img src={path_degree} alt="" id="IMG_49" /> <span id="SPAN_50">Diplôme niveau Bac+3/4*</span>
                            </div>
                          </div>
                        </div>
                        <div id="DIV_51">
                          <div id="DIV_52">
                            <img src={path_garantee} alt="" id="IMG_53" /> <span id="SPAN_54">Emploi garanti<br id="BR_55" /> sous 6 mois</span>
                          </div>
                        </div>
                      </div>
                      <div id="DIV_56">
                        <div id="DIV_57">
                          <span id="SPAN_58">300 €</span> <span id="SPAN_59">par mois</span> <span id="SPAN_60">Sans engagement</span>
                          <a href="#root" id="A_61">Je commence maintenant</a>
                          <a onClick={this.props.next} href="#root" id="A_62">Ce parcours est-il<br/>fait pour moi ?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div id="DIV_63">
                <div id="DIV_64">
                  <section id="SECTION_65">
                    <div id="DIV_66">
                      <div id="DIV_67">
                        <div id="DIV_68">
                          <div id="DIV_69">
                            <p id="P_70">
                              Vous souhaitez en savoir plus sur ce parcours ? Laissez-nous vos coordonnées pour recevoir plus d'informations.
                            </p>
                          </div>
                          <div id="DIV_500">
                            <p id="P_501">
                              <span id="SPAN_502">* Champ obligatoire</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div id="DIV_503">
                <div id="DIV_504">
                  <div id="DIV_505">
                    <span id="SPAN_506"><i id="I_507"></i></span>
                    <p id="P_508">
                      Vous pouvez faire financer nos offres Premium dans le cadre de la formation professionnelle.
                    </p>
                  </div>
                </div>
              </div>
              <section id="SECTION_511">
                <div id="DIV_512">
                  <div id="DIV_513">
                    <div id="DIV_514">
                      <div id="DIV_515">
                        <h2 id="H2_516">
                          Qu’est-ce qu’un chef de projet multimédia ?
                        </h2>
                        <p id="P_517">
                          Le chef de projet multimédia gère et coordonne l’ensemble de la production du produit multimédia autour d’une équipe composée de développeurs, UX designers, webdesigners, webmarketers…
                        </p>
                        <p id="P_518">
                          Cela lui permet de répondre aux besoins de communication de son client ou de sa structure en interne : vendre, informer, développer la notoriété, le trafic, l’image de marque…
                        </p>
                        <p id="P_519">
                          Vous serez chargé de :
                        </p>
                        <ul id="UL_520">
                          <li id="LI_521">
                            diagnostiquer et analyser la demande du client
                          </li>
                          <li id="LI_522">
                            formaliser la demande et soutenir votre proposition auprès du client
                          </li>
                          <li id="LI_523">
                            gérer le projet et coordonner les membres de l’équipe
                          </li>
                          <li id="LI_524">
                            mobiliser et mettre en oeuvre les compétences techniques de la production multimédia : développement, design, outils de communication et d’acquisition...
                          </li>
                        </ul>
                        <p id="P_525">
                          Selon la structure dans laquelle vous évoluerez, vos activités peuvent se diversifier : définir la ligne éditoriale, élaborer le plan de communication, rédiger les contenus, suivre le développement de l’application et de son interface...
                        </p>
                        <h2 id="H2_526">
                          Spécialité Développement
                        </h2>
                        <p id="P_527">
                          Grâce à la spécialisation Développement, vous affirmerez votre expertise en production de sites web interactifs. Vous pourrez à terme, si vous le souhaitez, vous orienter vers un métier dans le développement.
                        </p>
                        <p id="P_528">
                          Vous saurez analyser les problèmes soumis et trouver des solutions efficaces pour que la machine réponde comme on le souhaite. Vous devrez non seulement produire la fonctionnalité mais aussi vous assurer que vous ne créez pas de bugs et que le tout fonctionne rapidement… sans failles de sécurité !
                        </p>
                        <p id="P_529">
                          Suivez cette formation en ligne pour obtenir le diplôme “Chef de projet multimédia”* enregistré au RNCP, de niveau II reconnu par l’État (équivalent au niveau Bac+3/4). Ce diplôme est délivré par ECAD consultants - IESA multimédia.
                        </p>
                        <h2 id="H2_530">
                          Pré-requis :
                        </h2>
                        <p id="P_531">
                          Cette formation est accessible à tous. Voici cependant quelques recommandations :
                        </p>
                        <ul id="UL_532">
                          <li id="LI_533">
                            Niveau conseillé : Bac ou équivalent
                          </li>
                          <li id="LI_534">
                            Pour les apprenants étrangers, un niveau de français B1-B2 (utilisateur indépendant) est conseillé pour la réussite de la formation.
                          </li>
                          <li id="LI_535">
                            Accès à un ordinateur (PC ou Mac), muni d'un micro, d'une webcam ainsi qu'une bonne connexion internet.
                          </li>
                        </ul>
                        <p id="P_536">
                          Pour accéder au diplôme, vous devrez réaliser tous les projets et les faire valider lors des soutenances, par vos mentors. Votre dossier devra ensuite être validé par le jury du diplôme, composé de professionnels. Si vous en avez besoin, utilisez les cours que nous vous proposons pour vous préparer aux projets.
                        </p>
                        <h2 id="H2_537">
                          Ce que vous saurez faire
                        </h2>
                        <ul id="UL_538">
                          <li id="LI_539">
                            Analyser les besoins et objectifs d’un client lors d’un rendez-vous ou appel à projets
                          </li>
                          <li id="LI_540">
                            Rédiger une proposition sous la forme d’un cahier des charges
                          </li>
                          <li id="LI_541">
                            Soutenir votre proposition lors d’une présentation au client
                          </li>
                          <li id="LI_542">
                            Piloter un projet dans le respect du planning et du budget
                          </li>
                          <li id="LI_543">
                            Élaborer un rétro-planning et un échéancier
                          </li>
                          <li id="LI_544">
                            Rédiger un cahier des charges technique et fonctionnel
                          </li>
                          <li id="LI_545">
                            Animer des réunions de suivi et de cadrage
                          </li>
                          <li id="LI_546">
                            Travailler en équipe avec une méthodologie de gestion de projet
                          </li>
                          <li id="LI_547">
                            Communiquer avec le client pour effectuer une proposition commerciale
                          </li>
                          <li id="LI_548">
                            Créer des sites web interactifs en HTML5, CSS, JavaScript, Bootstrap
                          </li>
                          <li id="LI_549">
                            Concevoir des applications professionnelles à l’aide de PHP, du framework Symfony et du gestionnaire de versions Git
                          </li>
                        </ul>
                        <h2 id="H2_550">
                          Quels métiers pourrez-vous exercer ?
                        </h2>
                        <p id="P_551">
                          Ce parcours donne accès aux métiers suivants :
                        </p>
                        <ul id="UL_552">
                          <li id="LI_553">
                            Chef de projet multimédia (plusieurs milliers d’offres d'emploi sur RemixJobs, Alsacréations, Indeed)
                          </li>
                          <li id="LI_554">
                            Chef de projet digital (plus de 600 offres d'emploi sur <a href="https://remixjobs.com/Emploi-chef,de,projet,digital" id="A_555">RemixJobs</a>, Alsacréations, <a href="http://www.indeed.fr/emplois?q=chef+de+projet+digital" id="A_556">Indeed</a>)
                          </li>
                          <li id="LI_557">
                            Chef de projet web mobile
                          </li>
                          <li id="LI_558">
                            Concepteur réalisateur multimédia
                          </li>
                          <li id="LI_559">
                            Développeur JavaScript junior
                          </li>
                          <li id="LI_560">
                            Développeur PHP junior
                          </li>
                          <li id="LI_561">
                            Développeur web junior
                          </li>
                        </ul>
                        <p id="P_562">
                          Vous pourrez exercer dans les agences web, de communication ou publicité, des start-ups, des PME, des grandes sociétés ou encore sous le statut d’auto-entrepreneur.
                        </p>
                        <h2 id="H2_563">
                          Rémunération
                        </h2>
                        <p id="P_564">
                          En suivant la formation “Chef de projet multimédia”, vous pouvez prétendre aux rémunérations suivantes (ces salaires peuvent varier selon les régions) :
                        </p>
                        <ul id="UL_565">
                          <li id="LI_566">
                            Débutant : 30 000 € à 39 000 € annuels bruts
                          </li>
                          <li id="LI_567">
                            Expérimenté : 40 000 € à 55 000 € annuels bruts
                          </li>
                        </ul>
                        <p id="P_568">
                          Ces profils sont très recherchés, majoritairement en CDI.
                        </p>
                        <aside id="ASIDE_569">
                          <p id="P_570">
                            Ce parcours peut être effectué <strong id="STRONG_571">en alternance</strong>. <a href="http://info.openclassrooms.com/alternance" id="A_572">Plus d'informations</a>.
                          </p>
                        </aside>
                        <div id="DIV_573">
                          <h2 id="H2_574">
                            Votre diplôme
                          </h2>
                          <p id="P_575">
                            OpenClassrooms est un établissement privé d'enseignement à distance déclaré au rectorat de l'Académie de Paris, délivrant ses propres diplômes ainsi que ceux d'autres partenaires académiques prestigieux.
                          </p>
                          <p id="P_576">
                            À l'issue de votre formation et de la validation de vos compétences par le jury du diplôme, vous pourrez obtenir le diplôme "Chef(fe) de projet multimédia" <a href="http://www.rncp.cncp.gouv.fr/grand-public/visualisationFiche?format=fr&amp;fiche=26290" id="A_577">enregistré au Répertoire National des Certifications Professionnelles</a>.
                          </p>
                          <p id="P_578">
                            Ce diplôme est de niveau Bac+3/4, c'est-à-dire de niveau 6 sur le Cadre Européen des Certifications (European Qualifications Framework) et de niveau 2 sur le cadre français. Grâce au <a href="https://fr.wikipedia.org/wiki/Processus_de_Bologne" id="A_579">processus de Bologne</a> signé par 50 pays, ce diplôme est d'un niveau reconnu internationalement par tous les pays participants et notamment en Europe.
                          </p>
                          <p id="P_580">
                            Si vous avez des questions à propos de son équivalence pour poursuivre vos études, contactez votre université ou école dans laquelle vous voulez continuer après le diplôme.
                          </p>
                          <p id="P_581">
                            Si vous avez déjà au moins 1 an d'expérience professionnelle dans ce métier, vous pouvez obtenir plus rapidement ce diplôme grâce à une Validation des Acquis de l'Expérience (VAE). <a href="/p/validation-des-acquis-de-lexperience-vae" id="A_582">En savoir plus</a>
                          </p>
                        </div>
                        <div id="DIV_583">
                          <h2 id="H2_584">
                            Votre emploi garanti
                          </h2>
                          <p id="P_585">
                            L'engagement d'OpenClassrooms, c'est un emploi fait pour vous. Garanti.
                          </p>
                          <p id="P_586">
                            Avec le parcours "Chef de projet multimédia - Développement", formez-vous à un nouveau métier passionnant avec des perspectives d'évolution intéressantes.
                          </p>
                          <p id="P_587">
                            Vous trouvez un emploi sous 6 mois suivant votre diplôme ou nous vous remboursons votre parcours !
                          </p>
                          <p id="P_588">
                            <a href="/fr/job-guarantee" id="A_589">En savoir plus</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="SECTION_590">
                <div id="DIV_591">
                  <div id="DIV_592">
                    <div id="DIV_593">
                      <div id="DIV_594">
                        <p id="P_595">
                          <a href="#root" id="A_596">S'inscrire pour 300 € par mois</a>
                        </p>
                        <p id="P_598">
                          <a onClick={this.props.next} href="#root" id="A_597">Ce parcours est-il<br/>fait pour moi ?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }
}


export default HomeScreen;