/**
 * FrançaisIA - Data File
 * Contient toutes les questions et modules du système
 * Projet Master - Sciences du Langage
 * Université de Mostaganem - 2024-2025
 */

// Configuration des modules
const LESSONS = [
    {
        id: 'noms',
        title: 'Les Noms',
        icon: '📦',
        description: 'Identification et classification des noms communs et propres',
        difficulty: 'facile'
    },
    {
        id: 'verbes',
        title: 'Les Verbes',
        icon: '🏃',
        description: 'Reconnaissance et utilisation des verbes d\'action et d\'état',
        difficulty: 'moyen'
    },
    {
        id: 'adjectifs',
        title: 'Les Adjectifs',
        icon: '🎨',
        description: 'Accord des adjectifs en genre et en nombre',
        difficulty: 'moyen'
    },
    {
        id: 'determinants',
        title: 'Les Déterminants',
        icon: '🔤',
        description: 'Articles définis, indéfinis et déterminants',
        difficulty: 'difficile'
    },
    {
        id: 'prepositions',
        title: 'Les Prépositions',
        icon: '➡️',
        description: 'Prépositions de lieu et de temps - Focus interférences',
        difficulty: 'difficile'
    },
    {
        id: 'pronoms',
        title: 'Les Pronoms',
        icon: '👥',
        description: 'Pronoms personnels, possessifs et démonstratifs',
        difficulty: 'moyen'
    },
    {
        id: 'conjugaison',
        title: 'La Conjugaison',
        icon: '🔄',
        description: 'Conjugaison aux temps principaux de l\'indicatif',
        difficulty: 'difficile'
    },
    {
        id: 'phrases',
        title: 'Structure de Phrase',
        icon: '✏️',
        description: 'Construction et ordre des mots dans la phrase',
        difficulty: 'moyen'
    },
    {
        id: 'orthographe',
        title: 'L\'Orthographe',
        icon: '📝',
        description: 'Correction des erreurs orthographiques courantes',
        difficulty: 'difficile'
    },
    {
        id: 'temps',
        title: 'Les Temps',
        icon: '⏰',
        description: 'Distinction et utilisation des différents temps',
        difficulty: 'facile'
    }
];

// Banque de questions (150 questions au total - 15 par module)
const QUESTIONS = {
    noms: [
        {
            question: "Dans 'Le chat noir dort', quel est le nom ?",
            options: ["Le", "chat", "noir", "dort"],
            correct: 1,
            explanation: "'Chat' est un nom commun désignant un animal."
        },
        {
            question: "Quel mot est un nom propre ?",
            options: ["ville", "Paris", "maison", "rue"],
            correct: 1,
            explanation: "'Paris' est un nom propre avec majuscule."
        },
        {
            question: "Combien de noms dans 'Marie joue au ballon' ?",
            options: ["1", "2", "3", "0"],
            correct: 1,
            explanation: "Deux noms : 'Marie' (propre) et 'ballon' (commun)."
        },
        {
            question: "Quel nom désigne une idée abstraite ?",
            options: ["table", "bonheur", "chien", "Paris"],
            correct: 1,
            explanation: "'Bonheur' est un nom abstrait désignant un sentiment."
        },
        {
            question: "'Professeur' désigne :",
            options: ["un lieu", "une personne", "une chose", "une action"],
            correct: 1,
            explanation: "'Professeur' est un nom de personne/profession."
        },
        {
            question: "Le nom propre dans 'L'Algérie est belle' :",
            options: ["pays", "belle", "Algérie", "est"],
            correct: 2,
            explanation: "'Algérie' est un nom propre de pays."
        },
        {
            question: "Quel nom est féminin ?",
            options: ["garçon", "fleur", "livre", "stylo"],
            correct: 1,
            explanation: "'Fleur' est féminin (une fleur)."
        },
        {
            question: "Le pluriel de 'cheval' :",
            options: ["chevals", "chevaux", "chevaus", "chevales"],
            correct: 1,
            explanation: "Pluriel irrégulier : chevaux."
        },
        {
            question: "Quel mot n'est PAS un nom ?",
            options: ["courage", "rapidement", "soleil", "enfance"],
            correct: 1,
            explanation: "'Rapidement' est un adverbe."
        },
        {
            question: "Dans 'Le livre de Sophie', qui possède ?",
            options: ["livre", "de", "Sophie", "Le"],
            correct: 2,
            explanation: "'Sophie' indique la possession."
        },
        {
            question: "Un nom collectif désigne :",
            options: ["une chose", "un groupe", "une action", "une qualité"],
            correct: 1,
            explanation: "Exemple : foule, équipe, groupe."
        },
        {
            question: "Féminin de 'directeur' :",
            options: ["directeure", "directrice", "directeuse", "directeuresse"],
            correct: 1,
            explanation: "Le féminin correct est 'directrice'."
        },
        {
            question: "'Soleil' est un nom :",
            options: ["propre", "commun", "abstrait", "collectif"],
            correct: 1,
            explanation: "'Soleil' est un nom commun."
        },
        {
            question: "Dans 'Trois pommes', 'pommes' est :",
            options: ["verbe", "nom pluriel", "adjectif", "singulier"],
            correct: 1,
            explanation: "'Pommes' est au pluriel (marqué par -s)."
        },
        {
            question: "'Amitié' exprime :",
            options: ["objet", "sentiment", "lieu", "personne"],
            correct: 1,
            explanation: "Nom abstrait exprimant un sentiment."
        }
    ],
    verbes: [
        {q: "Dans 'Pierre court vite', le verbe est :", o: ["Pierre", "court", "vite", "aucun"], c: 1, e: "'Court' est un verbe d'action (courir)."},
        {q: "Quel est le verbe d'état ?", o: ["courir", "manger", "être", "danser"], c: 2, e: "'Être' est un verbe d'état."},
        {q: "'Je chante' : 'chante' est :", o: ["nom", "verbe", "adjectif", "adverbe"], c: 1, e: "'Chante' est un verbe conjugué au présent."},
        {q: "L'infinitif de 'fais' est :", o: ["faisant", "faire", "fait", "faisais"], c: 1, e: "L'infinitif de 'fais' est 'faire'."},
        {q: "Quel verbe exprime une action ?", o: ["être", "sembler", "paraître", "marcher"], c: 3, e: "'Marcher' exprime une action physique."},
        {q: "Dans 'Il a mangé', l'auxiliaire est :", o: ["Il", "a", "mangé", "aucun"], c: 1, e: "'A' est l'auxiliaire avoir."},
        {q: "'Ils parlent' : nombre de verbes ?", o: ["0", "1", "2", "3"], c: 1, e: "Un seul verbe : 'parlent'."},
        {q: "Le verbe dans 'Je suis content' :", o: ["Je", "suis", "content", "aucun"], c: 1, e: "'Suis' est le verbe être conjugué."},
        {q: "Quel verbe n'exprime pas d'action ?", o: ["courir", "devenir", "sauter", "jouer"], c: 1, e: "'Devenir' est un verbe d'état."},
        {q: "'Nous avons chanté' : temps utilisé ?", o: ["présent", "futur", "passé composé", "imparfait"], c: 2, e: "Auxiliaire 'avoir' + participe = passé composé."},
        {q: "L'infinitif de 'vont' est :", o: ["aller", "allant", "allé", "va"], c: 0, e: "L'infinitif de 'vont' est 'aller'."},
        {q: "'Elle danse' : la fonction du verbe ?", o: ["sujet", "action", "complément", "adjectif"], c: 1, e: "Le verbe exprime l'action faite par le sujet."},
        {q: "Quel est l'auxiliaire de 'être' ?", o: ["avoir", "être", "faire", "aller"], c: 1, e: "Avec certains verbes, on utilise 'être' comme auxiliaire."},
        {q: "Dans 'Tu finiras demain', le verbe est au :", o: ["présent", "passé", "futur", "conditionnel"], c: 2, e: "'Finiras' est au futur simple."},
        {q: "'Ils étaient' : temps du verbe ?", o: ["présent", "imparfait", "futur", "passé composé"], c: 1, e: "'Étaient' est à l'imparfait."}
    ],

    adjectifs: [
        {q: "'Un chat noir' : l'adjectif est :", o: ["Un", "chat", "noir", "aucun"], c: 2, e: "'Noir' qualifie le chat."},
        {q: "Féminin de 'grand' :", o: ["grande", "grand", "grands", "grandes"], c: 0, e: "On ajoute 'e' : grande."},
        {q: "Pluriel de 'beau' :", o: ["beaux", "beaus", "beautx", "beaulx"], c: 0, e: "Pluriel irrégulier : beaux."},
        {q: "'Une fleur belle' : accord correct ?", o: ["Oui", "Non, 'bel'", "Non, 'beau'", "Non, 'belles'"], c: 0, e: "'Belle' s'accorde avec 'fleur' (féminin singulier)."},
        {q: "Dans 'Des chiens gentils', l'adjectif :", o: ["chiens", "Des", "gentils", "aucun"], c: 2, e: "'Gentils' qualifie les chiens."},
        {q: "Féminin de 'heureux' :", o: ["heureuse", "heureuxe", "heureuses", "heureux"], c: 0, e: "On transforme -eux en -euse : heureuse."},
        {q: "'Un livre intéressant' : l'adjectif se place :", o: ["avant", "après", "les deux", "aucun"], c: 1, e: "La plupart des adjectifs se placent après le nom."},
        {q: "Pluriel de 'national' :", o: ["nationals", "nationaux", "nationales", "national"], c: 1, e: "Les adjectifs en -al font -aux au pluriel."},
        {q: "'Des filles intelligentes' : accord correct ?", o: ["Oui", "Non, intelligent", "Non, intelligents", "Non, intelligente"], c: 0, e: "'Intelligentes' s'accorde (féminin pluriel)."},
        {q: "L'adjectif de couleur 'orange' :", o: ["s'accorde", "ne s'accorde pas", "parfois", "selon le contexte"], c: 1, e: "Les couleurs issues de noms sont invariables."},
        {q: "Féminin de 'vieux' :", o: ["vieille", "vieuxe", "vieuse", "vieulle"], c: 0, e: "Forme irrégulière : vieille."},
        {q: "'Un bon livre' : l'adjectif se place :", o: ["après", "avant", "les deux", "nulle part"], c: 1, e: "Certains adjectifs courts se placent avant."},
        {q: "Pluriel de 'bleu' :", o: ["bleu", "bleus", "bleues", "bleuxs"], c: 1, e: "Pluriel régulier : bleus."},
        {q: "'Des robes blanches' : genre et nombre ?", o: ["masculin singulier", "féminin singulier", "masculin pluriel", "féminin pluriel"], c: 3, e: "L'adjectif s'accorde : féminin pluriel."},
        {q: "L'adjectif 'français' au féminin :", o: ["française", "françaisse", "français", "francaise"], c: 0, e: "On ajoute 'e' : française."}
    ],

    determinants: [
        {q: "Dans 'Le chat', 'le' est :", o: ["nom", "verbe", "article défini", "adjectif"], c: 2, e: "'Le' est un article défini masculin."},
        {q: "Article indéfini féminin :", o: ["un", "une", "le", "la"], c: 1, e: "'Une' est l'article indéfini féminin."},
        {q: "'Les enfants' : type de déterminant ?", o: ["défini", "indéfini", "possessif", "démonstratif"], c: 0, e: "'Les' est un article défini pluriel."},
        {q: "Quel est un déterminant possessif ?", o: ["le", "mon", "ce", "des"], c: 1, e: "'Mon' indique la possession."},
        {q: "'Cette maison' : type de déterminant ?", o: ["défini", "indéfini", "possessif", "démonstratif"], c: 3, e: "'Cette' est un déterminant démonstratif."},
        {q: "Article devant 'arbre' :", o: ["le", "la", "l'", "les"], c: 2, e: "Devant une voyelle : l'arbre."},
        {q: "'Des livres' : type d'article ?", o: ["défini", "indéfini", "partitif", "aucun"], c: 1, e: "'Des' est l'article indéfini pluriel."},
        {q: "Déterminant possessif pour 'ta' au pluriel :", o: ["ta", "tes", "ton", "tas"], c: 1, e: "Pluriel de 'ta' : tes."},
        {q: "'Ce garçon' au féminin :", o: ["ce fille", "cette fille", "cet fille", "ces fille"], c: 1, e: "Féminin de 'ce' : cette."},
        {q: "Article contracté de 'à + le' :", o: ["à le", "au", "aux", "al"], c: 1, e: "'À + le' devient 'au'."},
        {q: "'Son livre' : genre du possesseur ?", o: ["masculin", "féminin", "indéterminé", "neutre"], c: 2, e: "'Son' ne révèle pas le genre du possesseur."},
        {q: "Déterminant devant 'école' :", o: ["le", "la", "l'", "les"], c: 2, e: "Devant une voyelle féminine : l'école."},
        {q: "'Mes amis' : personne du possesseur ?", o: ["1ère", "2ème", "3ème", "aucune"], c: 0, e: "'Mes' indique la 1ère personne."},
        {q: "Article partitif masculin :", o: ["du", "de la", "des", "de l'"], c: 0, e: "'Du' est l'article partitif masculin."},
        {q: "'Leurs maisons' : nombre de possesseurs ?", o: ["un", "deux ou plus", "indéterminé", "aucun"], c: 1, e: "'Leurs' indique plusieurs possesseurs."}
    ],

    prepositions: [
        {q: "Dans 'Je vais à Paris', la préposition est :", o: ["Je", "vais", "à", "Paris"], c: 2, e: "'À' est une préposition de direction."},
        {q: "Préposition de lieu :", o: ["depuis", "pendant", "dans", "avant"], c: 2, e: "'Dans' indique le lieu."},
        {q: "'Le livre de Marie' : fonction de 'de' ?", o: ["temps", "lieu", "possession", "manière"], c: 2, e: "'De' indique la possession."},
        {q: "Erreur d'interférence arabe : 'Je vais ... école'", o: ["à l'", "dans l'", "sur l'", "de l'"], c: 0, e: "En français : 'à l'école' (pas 'dans' comme en arabe في)."},
        {q: "'Sur la table' : type de préposition ?", o: ["temps", "lieu", "manière", "cause"], c: 1, e: "'Sur' indique la position (lieu)."},
        {q: "Préposition de temps :", o: ["avec", "sans", "pendant", "pour"], c: 2, e: "'Pendant' indique la durée."},
        {q: "'Je viens de Mostaganem' : 'de' indique :", o: ["temps", "origine", "manière", "but"], c: 1, e: "'De' indique la provenance."},
        {q: "Erreur courante : 'Je suis ... la maison'", o: ["à", "dans", "sur", "de"], c: 1, e: "Correct : 'dans la maison' (interférence avec 'à')."},
        {q: "'Avec mes amis' : type de préposition ?", o: ["temps", "lieu", "accompagnement", "cause"], c: 2, e: "'Avec' indique l'accompagnement."},
        {q: "Préposition après 'aller' :", o: ["dans", "à", "de", "sur"], c: 1, e: "On dit 'aller à' un lieu."},
        {q: "'Depuis hier' : 'depuis' exprime :", o: ["lieu", "temps", "manière", "but"], c: 1, e: "'Depuis' indique le point de départ temporel."},
        {q: "'Par la fenêtre' : fonction de 'par' ?", o: ["temps", "passage", "possession", "cause"], c: 1, e: "'Par' indique le passage."},
        {q: "Erreur : 'Je parle ... français'", o: ["à", "en", "de", "avec"], c: 1, e: "Correct : 'en français' (pas 'à')."},
        {q: "'Pour toi' : fonction de 'pour' ?", o: ["temps", "but", "lieu", "manière"], c: 1, e: "'Pour' indique le destinataire/but."},
        {q: "'Chez le médecin' : 'chez' signifie :", o: ["temps", "domicile/bureau", "manière", "cause"], c: 1, e: "'Chez' indique le domicile ou le bureau."}
    ],

    pronoms: [
        {q: "'Je parle' : 'je' est :", o: ["nom", "verbe", "pronom", "adjectif"], c: 2, e: "'Je' est un pronom personnel sujet."},
        {q: "Pronom complément pour 'à moi' :", o: ["je", "me", "moi", "mon"], c: 1, e: "'Me' est le pronom complément."},
        {q: "'Il la voit' : 'la' remplace :", o: ["masculin", "féminin", "pluriel", "neutre"], c: 1, e: "'La' remplace un nom féminin singulier."},
        {q: "Pronom possessif de 'mon livre' :", o: ["le mien", "la mienne", "les miens", "le mienn"], c: 0, e: "'Le mien' remplace 'mon livre'."},
        {q: "'Nous leur parlons' : 'leur' signifie :", o: ["à eux", "eux", "leurs", "pour eux"], c: 0, e: "'Leur' = à eux/elles (complément indirect)."},
        {q: "Pronom sujet 3ème personne pluriel :", o: ["nous", "vous", "ils", "je"], c: 2, e: "'Ils/elles' sont les pronoms de 3ème personne pluriel."},
        {q: "'Je le vois' : 'le' remplace :", o: ["féminin", "masculin", "pluriel", "rien"], c: 1, e: "'Le' remplace un nom masculin singulier."},
        {q: "'C'est à elle' : type de pronom pour 'elle' ?", o: ["sujet", "complément direct", "tonique", "possessif"], c: 2, e: "'Elle' après une préposition est un pronom tonique."},
        {q: "Pronom réfléchi pour 'tu' :", o: ["te", "toi", "ton", "ta"], c: 0, e: "'Te' est le pronom réfléchi de 'tu'."},
        {q: "'Lesquels préfères-tu ?' : type de pronom ?", o: ["personnel", "possessif", "interrogatif", "démonstratif"], c: 2, e: "'Lesquels' est un pronom interrogatif."},
        {q: "'Celui de Marie' : type de pronom ?", o: ["personnel", "possessif", "démonstratif", "réfléchi"], c: 2, e: "'Celui' est un pronom démonstratif."},
        {q: "'Nous vous voyons' : 'vous' est :", o: ["sujet", "complément direct", "tonique", "possessif"], c: 1, e: "'Vous' est complément d'objet direct."},
        {q: "Pronom pour remplacer 'les livres' :", o: ["le", "la", "les", "leur"], c: 2, e: "'Les' remplace un nom pluriel."},
        {q: "'Il y va' : 'y' remplace :", o: ["personne", "lieu", "chose", "temps"], c: 1, e: "'Y' remplace un complément de lieu."},
        {q: "'J'en veux' : 'en' remplace :", o: ["personne", "lieu", "quantité", "temps"], c: 2, e: "'En' remplace un complément de quantité."}
    ],

    conjugaison: [
        {q: "'Je chante' : temps du verbe ?", o: ["passé", "présent", "futur", "conditionnel"], c: 1, e: "'Chante' est au présent de l'indicatif."},
        {q: "Passé composé de 'manger' avec 'je' :", o: ["je mange", "j'ai mangé", "je mangeais", "je mangerai"], c: 1, e: "Auxiliaire avoir + participe passé."},
        {q: "'Nous irons' : temps du verbe ?", o: ["présent", "imparfait", "futur", "conditionnel"], c: 2, e: "'Irons' est au futur simple."},
        {q: "Imparfait de 'être' avec 'il' :", o: ["il est", "il était", "il sera", "il fut"], c: 1, e: "'Était' est l'imparfait de 'être'."},
        {q: "'Tu finiras' : groupe du verbe ?", o: ["1er", "2ème", "3ème", "auxiliaire"], c: 1, e: "'Finir' est un verbe du 2ème groupe."},
        {q: "Participe passé de 'faire' :", o: ["faisant", "fait", "fais", "faire"], c: 1, e: "Le participe passé de 'faire' est 'fait'."},
        {q: "'Ils ont été' : temps utilisé ?", o: ["présent", "imparfait", "passé composé", "plus-que-parfait"], c: 2, e: "Auxiliaire avoir + participe = passé composé."},
        {q: "Présent de 'aller' avec 'nous' :", o: ["nous allez", "nous allons", "nous irons", "nous allions"], c: 1, e: "Forme irrégulière : nous allons."},
        {q: "'Elle aurait voulu' : temps du verbe ?", o: ["futur", "conditionnel passé", "plus-que-parfait", "subjonctif"], c: 1, e: "'Aurait voulu' est au conditionnel passé."},
        {q: "Futur de 'avoir' avec 'tu' :", o: ["tu as", "tu avais", "tu auras", "tu aurais"], c: 2, e: "'Auras' est le futur de 'avoir'."},
        {q: "Verbe du 1er groupe :", o: ["finir", "chanter", "voir", "faire"], c: 1, e: "Les verbes en -er (sauf aller) sont du 1er groupe."},
        {q: "'Vous faisiez' : temps du verbe ?", o: ["présent", "imparfait", "futur", "passé simple"], c: 1, e: "'Faisiez' est à l'imparfait."},
        {q: "Auxiliaire avec 'venir' au passé composé :", o: ["avoir", "être", "les deux", "aucun"], c: 1, e: "'Venir' se conjugue avec 'être'."},
        {q: "'Il faut que je parte' : mode du verbe ?", o: ["indicatif", "subjonctif", "conditionnel", "impératif"], c: 1, e: "Après 'il faut que' : subjonctif."},
        {q: "Impératif de 'être' avec 'tu' :", o: ["es", "sois", "soit", "être"], c: 1, e: "L'impératif de 'être' : sois."}
    ],

    phrases: [
        {q: "Ordre correct en français :", o: ["Verbe-Sujet-Complément", "Sujet-Verbe-Complément", "Complément-Verbe-Sujet", "Verbe-Complément-Sujet"], c: 1, e: "Structure de base : Sujet + Verbe + Complément."},
        {q: "'Marie mange une pomme' : fonction de 'une pomme' ?", o: ["sujet", "verbe", "complément d'objet direct", "complément circonstanciel"], c: 2, e: "'Une pomme' est le COD du verbe 'mange'."},
        {q: "Phrase interrogative correcte :", o: ["Tu viens ?", "Viens tu ?", "Tu viens-tu ?", "Viens-tu tu ?"], c: 0, e: "Interrogation avec intonation : 'Tu viens ?'"},
        {q: "'Je ne veux pas' : place de la négation ?", o: ["avant le verbe", "après le verbe", "autour du verbe", "en fin de phrase"], c: 2, e: "'Ne...pas' encadre le verbe conjugué."},
        {q: "Type de phrase : 'Comme c'est beau !'", o: ["déclarative", "interrogative", "exclamative", "impérative"], c: 2, e: "Point d'exclamation = phrase exclamative."},
        {q: "Phrase impérative correcte :", o: ["Tu ranges", "Range", "Tu range", "Ranges"], c: 1, e: "À l'impératif : 'Range' (sans pronom sujet)."},
        {q: "'Hier, j'ai mangé' : fonction de 'hier' ?", o: ["sujet", "COD", "complément circonstanciel", "attribut"], c: 2, e: "'Hier' est un complément circonstanciel de temps."},
        {q: "Ponctuation en fin de question :", o: [".", "!", "?", ","], c: 2, e: "Les questions se terminent par '?'."},
        {q: "'Elle est belle' : fonction de 'belle' ?", o: ["sujet", "COD", "attribut", "complément"], c: 2, e: "'Belle' est attribut du sujet."},
        {q: "Interrogation avec inversion correcte :", o: ["Viens-tu ?", "Tu-viens ?", "Viens tu ?", "Vien-tu ?"], c: 0, e: "Inversion : verbe-trait d'union-pronom."},
        {q: "'Ne...jamais' exprime :", o: ["affirmation", "négation", "interrogation", "exclamation"], c: 1, e: "'Ne...jamais' est une négation."},
        {q: "Phrase déclarative correcte :", o: ["Il mange.", "Mange-t-il ?", "Mange !", "Qu'il mange !"], c: 0, e: "Phrase déclarative simple avec point."},
        {q: "'Où vas-tu ?' : type de mot interrogatif ?", o: ["pronom", "adverbe", "adjectif", "nom"], c: 1, e: "'Où' est un adverbe interrogatif."},
        {q: "Place de l'adverbe 'souvent' :", o: ["début de phrase", "après le verbe", "avant le sujet", "fin de phrase"], c: 1, e: "Les adverbes se placent généralement après le verbe."},
        {q: "'Est-ce que tu viens ?' : type d'interrogation ?", o: ["totale", "partielle", "indirecte", "oratoire"], c: 0, e: "Interrogation totale (réponse oui/non)."}
    ],

    orthographe: [
        {q: "Orthographe correcte :", o: ["à", "a", "as", "ah"], c: 0, e: "Préposition : 'à' avec accent."},
        {q: "'Et' ou 'est' ? : 'Il ... grand'", o: ["et", "est", "es", "ait"], c: 1, e: "Verbe être : 'est'."},
        {q: "Pluriel de 'cheval' :", o: ["chevals", "chevaux", "chevaus", "chevales"], c: 1, e: "Pluriel irrégulier : 'chevaux'."},
        {q: "Accent correct : 'él...ve'", o: ["é", "è", "ê", "e"], c: 1, e: "'Élève' prend un accent grave."},
        {q: "'Son' ou 'sont' ? : 'Ils ... partis'", o: ["son", "sont", "sons", "sond"], c: 1, e: "Verbe être au pluriel : 'sont'."},
        {q: "Orthographe : 'appeller' ou 'appeler' ?", o: ["appeller", "appeler", "apeller", "apelller"], c: 1, e: "Correct : 'appeler' (un seul 'l')."},
        {q: "'Ça' ou 'sa' ? : '... maison'", o: ["ça", "sa", "çà", "sà"], c: 1, e: "Possessif : 'sa' (sans cédille)."},
        {q: "Lettre muette dans 'temps' :", o: ["t", "e", "m", "s"], c: 3, e: "Le 's' final est muet dans 'temps'."},
        {q: "'Eau', 'au' ou 'o' ? : 'B...coup'", o: ["eau", "au", "o", "ô"], c: 1, e: "'Beaucoup' s'écrit avec 'au'."},
        {q: "Accent sur 'ou' ? : 'où es-tu ?'", o: ["oui", "non", "parfois", "selon"], c: 0, e: "'Où' (lieu) prend un accent grave."},
        {q: "'Ces' ou 'ses' ? : '... enfants (à lui)'", o: ["ces", "ses", "c'est", "sais"], c: 1, e: "Possessif : 'ses' enfants."},
        {q: "Orthographe correcte :", o: ["déveloper", "développer", "developer", "develloper"], c: 1, e: "Correct : 'développer' (pp)."},
        {q: "'C'est' ou 'ses' ? : '... mon ami'", o: ["c'est", "ses", "ces", "sais"], c: 0, e: "Démonstratif + être : 'c'est'."},
        {q: "Féminin de 'blanc' :", o: ["blance", "blanque", "blanche", "blanc"], c: 2, e: "Féminin : 'blanche'."},
        {q: "'Leur' ou 'leurs' ? : '... maison' (une seule)", o: ["leur", "leurs", "l'heure", "l'eur"], c: 0, e: "'Leur' (singulier) maison."}
    ],

    temps: [
        {q: "'Je mange' : temps du verbe ?", o: ["passé", "présent", "futur", "conditionnel"], c: 1, e: "'Mange' indique le présent."},
        {q: "Indicateur de futur :", o: ["hier", "demain", "aujourd'hui", "avant"], c: 1, e: "'Demain' indique le futur."},
        {q: "'J'ai mangé' : temps ?", o: ["présent", "passé", "futur", "conditionnel"], c: 1, e: "Passé composé = action passée terminée."},
        {q: "Indicateur de passé :", o: ["bientôt", "hier", "demain", "maintenant"], c: 1, e: "'Hier' indique le passé."},
        {q: "'Je mangerai' : temps ?", o: ["présent", "passé", "futur", "imparfait"], c: 2, e: "'Mangerai' est au futur simple."},
        {q: "'Maintenant' indique quel temps ?", o: ["passé", "présent", "futur", "conditionnel"], c: 1, e: "'Maintenant' = moment présent."},
        {q: "'Je mangeais' : temps ?", o: ["présent", "imparfait", "futur", "passé simple"], c: 1, e: "'Mangeais' est à l'imparfait."},
        {q: "Action terminée dans le passé :", o: ["présent", "imparfait", "passé composé", "futur"], c: 2, e: "Le passé composé exprime une action terminée."},
        {q: "'Autrefois' indique :", o: ["présent", "passé", "futur", "conditionnel"], c: 1, e: "'Autrefois' renvoie au passé."},
        {q: "Temps pour une habitude passée :", o: ["présent", "imparfait", "passé composé", "futur"], c: 1, e: "L'imparfait exprime une habitude passée."},
        {q: "'Bientôt' indique :", o: ["passé", "présent", "futur proche", "conditionnel"], c: 2, e: "'Bientôt' = futur proche."},
        {q: "'Pendant que' + quel temps ?", o: ["présent", "imparfait", "futur", "conditionnel"], c: 1, e: "Action en cours dans le passé : imparfait."},
        {q: "Temps pour une action future certaine :", o: ["présent", "futur proche", "futur simple", "conditionnel"], c: 2, e: "Le futur simple exprime une certitude future."},
        {q: "'Quand j'étais petit' : temps du verbe ?", o: ["présent", "imparfait", "passé composé", "plus-que-parfait"], c: 1, e: "'Étais' est à l'imparfait."},
        {q: "Différence passé composé/imparfait :", o: ["aucune", "action ponctuelle/habitude", "formel/informel", "écrit/oral"], c: 1, e: "Passé composé = ponctuel ; Imparfait = habitude/description."}
    ]
};
