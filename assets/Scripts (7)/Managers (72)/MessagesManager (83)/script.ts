/**
 * Message manager can handle message of coins, by players.
 */
class MessagesManager {
  private messages;
  private playerName;
  private slackName;
  
  constructor() {
    let tuto = [
      "Vous avez ramassé une pièce.",
      "Chaque pièce raconte une \nhistoire sur l'un de mes créateurs.",
      "Certaines pièces sont marquées\ndu logo Slack, elles rapportent plus (!) mais ...",
      "... il va falloir essayer de parler\navec mon frangin sur slack...",
      "... il vous aidera à déverouiller\ncertains passages ...",
      "... je m'appelle NArcade, il doit\nsavoir répondre si vous criez mon nom !"
    ];
    
    let players = [
      "yvonnick",
      "fabien.juif"
    ]
    
    this.messages = {
      "yvonnick": {
        "pres_1": "Bonjour, je m'appelle Yvonnick. J'ai 24 ans.",
        "pres_2": "J'ai grandi en région parisienne, où je suis resté jusqu'à mes 18 ans.",
        "pres_3": "",
        "pres_4": "Passionné d'informatique depuis tout petit, j'ai décidé dans faire mon métier :).",
        "form_1": "J'ai passé un BAC STG gestion des systèmes d'information pour avoir déjà un pied dans les métiers de l'IT. J'ai ensuite décidé de poursuivre mes études en alternance.",
        "form_2": "J'ai ensuite passé un BTS informatique de gestion à Laval, qui n'est pas là meilleure des villes pour un étudiant ;).",
        "form_3": "J'ai fait un semestre à Rennes 1 en licence informatique mais le rythme ne me convenait pas.",
        "form_4": "Finalement, j'ai passé un titre de Concepteur Développeur à l'ENI de Nantes. Que j'ai obtenu en janvier dernier.",
        "expe_1": "J'ai passé l'ensemble des mes diplôme en alternance. Ce qui m'a permis de me faire de l'expérience malgré mon profil de junior.",
        "expe_2": "J'ai pu travailler sur un ensemble de sujets variés comme les mémoires de traductions, le calcul de pièces dans l'aeronautique mais aussi des applications de gestion plus classiques. J'aime découvrir de nouveaux domaines.",
        "expe_3": "Avec l'avènement des technologies du Web, j'ai naturellement pris le train en marche. J'ai longuement travaillé en PHP et depuis deux ans je me spécialise plus avec les technologies JS en rapport avec le front.",
        "expe_4": "Zenika est mon premier contrat post-études, je trouve que j'ai vraiment de la chance d'être parmi vous ;) !",
        "hobb_1": "De nature curieuses, je m'intérresse à beaucoup de choses. C'est pourquoi mes passions sont variées. Passionné de musique, je pratique la basse.",
        "hobb_2": "Créatif, j'ai beaucoup fait d'art plastique étant plus jeune. Mais j'ai eu depuis moins le temps de m'y consacré.",
        "hobb_3": "Pendant longtemps j'ai beaucoup pratiqué les jeux videos, mais depuis je suis devenu plus raisonnable.",
        "hobb_4": "Comme vous pouvez le constater, j'ai reporté",
      },
      "fabien.juif": {
        "pres_1": "Salut toi, je suis Fabien !\n27 ans, j'aime les pizzas.",
        "pres_2": "Je suis né en région parisienne mais j'ai vécu dans la région du perche (go go google !)",
        "pres_3": "J'ai deux frères et une soeur, mais ils aiment pas trop le développement :(",
        "pres_4": "Quand on était petit (j'étais lycéen, eux étaient collégiens)\nJe développais des petits jeux en C++/SDL pour nous amuser ensemble :D",
        "form_1": "Je déteste la biologie, en SVT je tombais très régulierement dans les pommes...\nC'est pourquoi j'ai fais un bac SI (Science de l'Ingénieur)",
        "form_2": "Ensuite, et bien, j'ai essayé une prépa math, pression de mon papa puisque j'avais des bonnes notes. Je pense que les professeurs ont eu leur mot aussi\nJe n'ai fais qu'un an, c'était le pire moment de ma vie d'étudiant.",
        "form_3": "J'ai ensuite fait ce que je voulais faire depuis le début, un IUT informatique, à Nantes ! Enchainé sur une licence pro.",
        "form_4": "Durant ma formation, en plus des potes, j'ai croisé des supers professeurs, j'ai même travaillé avec un d'eux sur un OS temps réel pour les voitures (C/Python)\nC'était super fun :)",
        "expe_1": "J'ai fais quelques stages, dont le stage sur l'OS temps réel (voir pièce slack précédente), plus ou moins intéressants.",
        "expe_2": "Ensuite, dans l'IUT informatique de Nantes, on s'est fait démarché par Logica (CGI maintenant)\nJ'étais pas vraiment bien à cette époque, donc j'ai fait au plus facile pour moi, j'ai accepté leur proposition.",
        "expe_3": "J'ai donc travaillé pour CGI jusqu'à arrivé ici, 5 ans environs, j'ai fais beaucoup de choses : développement, pseudo-architecte, concepteur fonctionnel, chargé de projet.",
        "expe_4": "Et puis j'ai eu le déclic : \"J'attend quoi de mon travail ?!\"\nJe voulais me rapprocher de la technique, arrêter le management.\nJ'ai recherché s'il existait des boites sympas sur Nantes.\nEt voilà : Zenika, une des rares que j'avais sélectionné m'a accepté.\nJe vous raconte pas ma joie :D",
        "hobb_1": "J'adore les jeux compétitif, et spécialement League of Legends.",
        "hobb_2": "J'ai une équipe sur LoL, on va même à une LAN en avril à Nantes ensemble, on a pas un niveau super, mais on s'amuse bien.",
        "hobb_3": "J'aime les séries aussi, celle que j'attends le plus chaque semaine, en ce moment, c'est Shameless. Super fun.",
        "hobb_4": "Bon, comme vous le voyez, pas trop d'activité sportive, j'ai essayé une fois ! Promis ! Du handball. Mais ça ne s'est pas bien passé...\nJe vous raconte peut être un jour, si on boit assez pour ça !",
      }
    };
    
    // All the players have tuto messages
    for (let player of players) {
      for (let i = 0; i < tuto.length; ++i) {
        this.messages[player]["tuto_" + (i + 1)] = tuto[i];
      }
    }
  }
  
  getMessage(key:string):string {
    return this.messages[this.playerName][key];
  }

  setPlayerName(name:string) {
    this.playerName = name;
  }

  getSlackName():string {
    return this.slackName;
  }

  setSlackName(slackName:string) {
    this.slackName = slackName;
  }
}
