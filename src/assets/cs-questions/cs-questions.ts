import {Question} from '../../app/question';

export const CS_QUESTIONS: Question[] = [
  {
    question: 'Qu\'est ce qu\'un attribut?',
    answer: 'Espace mémoire permettant de conserver de l\'information pour une catégorie d\'objets dans une application. C\'est l\'équivalent d\'un champ d\'un enregistrement en programmation impérative.  Aussi appelé variable d’instance.'
  },
  {
    question: 'Qu\'est ce qu\'une méthode?',
    answer: 'Sous-programme (procédure et fonction) associé à une catégorie d\'objets dans une application.'
  },
  {
    question: 'Qu\'est ce qu\'une classe?',
    answer: 'L\'endroit où sont définis les attributs et les méthodes qui représentent une catégorie d\'objets.  C\'est l\'équivalent d\'un module de type en programmation impérative.'
  },
  {
    question: 'Qu\'est ce qu\'un objet ou une instance?',
    answer: 'Pour conserver des données pour un objet, il faut le définir et l\'instancier à l\'aide du mot réservé new. C\'est l\'équivalent d\'initialiser une variable-enregistrement dynamiquement en programmation impérative sauf qu\'en plus, il est possible de démarrer les méthodes définies dans la classe à partir de l\'objet.'
  },
  {
    question: 'Qu\'est ce que l\'encapsulation?',
    answer: 'Rendre l\'utilisation des attributs d\'un objet indépendante de leur implémentation (private).  En d\'autres termes, on utilise des méthodes pour accéder aux attributs d\'une classe plutôt que d\'y accéder directement.  C\'est ce qui justifie, entre autres, l\'utilisation d\'accesseurs (get) et/ou de mutateurs (set).  Par exemple : getNom, getAge, setNom, setAge, ...'
  },
  {
    question: 'Qu\'est ce que la référence this?',
    answer: 'Rendre l\'utilisation des attributs d\'un objet indépendante de leur implémentation (private).  En d\'autres termes, on utilise des méthodes pour accéder aux attributs d\'une classe plutôt que d\'y accéder directement.  C\'est ce qui justifie, entre autres, l\'utilisation d\'accesseurs (get) et/ou de mutateurs (set).  Par exemple : getNom, getAge, setNom, setAge, ...'
  },
  {
    question: 'Qu\'est ce que l\'encapsulation?',
    answer: 'Il existe une référence spéciale, utilisable dans une méthode non static d’une classe, qui permet d’agir sur les attributs de l’objet actuel. Existe sous différentes formes selon le langage.'
  },
  {
    question: 'Qu\'est ce que l\'héritage?',
    answer: 'En java, nous parlons d\'héritage par hiérarchie de classes.  On peut étendre une classe à l\'aide du mot réservé extends.  On parle alors d\'héritage par extension.  Cela permet d\'utiliser le code d\'une classe sans avoir à le réécrire.  Cette dernière devient la classe parent et on parle de sous-classe pour les classes enfants.  En Java, une classe ne peut hériter que d\'une autre classe (pas d\'héritage multiple).'
  },
  {
    question: 'Qu\'est ce que la référence super?',
    answer: 'Au même titre que la référence this, il existe une référence spéciale qui permet d’agir sur les attributs non privés (public et protected) de la classe parent dans une hiérarchie de classe.'
  },
  {
    question: 'Qu\'est ce qu\'une interface?',
    answer: 'L\'implémentation d\'une interface (implements), permet de définir des méthodes qui doivent obligatoirement être implémentées par une  classe qui en hérite. Une classe peut implémenter plusieurs interfaces. Cela permet d\'assurer une bonne gestion du polymorphisme. Une classe qui implémente une interface est une sous-classe de cette interface.'
  },
  {
    question: 'Qu\'est ce que la redéfinition?',
    answer: 'Un objet d\'une classe peut être instancié pendant l\'exécution d\'une application avec n\'importe quelle sous-classe d\'une classe parent.  Dès lors, les méthodes démarrées à partir de l\'objet dépendent de la classe d\'instanciation.'
  },
  {
    question: 'Qu\'est ce que la gestion événementielle',
    answer: 'Les systèmes d\'exploitation contemporains avisent les applications des différents événements (simple ou double cliquer sur la souris, taper au clavier, fermer une fenêtre, etc.) qui sont produits par l\'utilisateur de l\'ordinateur.  Plusieurs événements existent  et les langages de programmation permettent de s\'abonner à ces événements pour agir selon les besoins de l\'application.  En java, les contrôles se font à l\'aide d\'interfaces que l\'on appelle écouteurs (Listener).'
  },
  {
    question: 'Qu\'est ce que la surcharge?',
    answer: 'Il est possible d\'avoir plusieurs méthodes parfaitement identiques dans une hiérarchie de classes.  Par exemple, une méthode getDistance() peut exister dans la classe Point2D et aussi dans la sous-classe Point3D.  C\'est le type de l\'instance lors de la dernière instanciation qui détermine quelle méthode est appelée.'
  },
  {
    question: 'Qu\'est ce que les composants Swing?',
    answer: 'Classes qui permettent de programmer des applications de style graphique (Graphical User Interface) avec des composants représentant les cadres (JFrame), les panneaux (JPanel), les boutons (JButton), les boîtes de texte (JTextField), les boîtes combo (JComboBox), etc.  Également, vous y trouvez les interfaces de type Listener telles ActionListener, MouseListener, KeyListener, ...'
  },
  {
    question: 'Qu\'est ce qu\'un type de donnée abstraite (TDA)?',
    answer: 'Définition d’un type structuré ayant un comportement prédéterminé dont l’utilisation est indépendante de l’implémentation (implémentation encapsulée).  Sert essentiellement à conserver des données en mémoire.  Le choix du TDA dépend de l’accès aux données que nécessite l’application. S’écrit dans une classe telle Array, Vector, ArrayList, LinkedList, etc.'
  },
  {
    question: 'Que veut dire statique?',
    answer: 'Dans le contexte des TDA, le mot statique signifie que la taille est fixée lors de l’instanciation et qu’elle est non modifiable par la suite.'
  },
  {
    question: 'Que veut dire dynamique?',
    answer: 'Au contraire de statique, la taille du TDA est variable durant l’exécution du programme. On y fait souvent l’utilisation de chaînage dynamique.'
  },
  {
    question: 'Qu\'est ce qu\'une chaine dynamique?',
    answer: 'Technique de programmation pour créer des TDA dont la taille varie durant l’exécution.  Le(s)  lien(s) entre les éléments doi(ven)t être maintenu(s) par le programmeur.  Il y a plusieurs techniques de chaînage (simple, double, gauche-droit, etc.) et plusieurs TDA les utilisent.'
  },
  {
    question: 'Qu\'est ce qu\'une pile?',
    answer: 'TDA dont l’ajout ou le retrait d’objets se fait toujours à partir du dernier élément entré (Last In First Out).'
  },
  {
    question: 'Qu\'est ce qu\'une file?',
    answer: 'TDA dont l’ajout d’objets se fait à la suite du dernier ajouté et le retrait dans l’ordre d’arrivé (First In First Out ou Last In Last Out).'
  },
  {
    question: 'Qu\'est ce qu\'une liste?',
    answer: 'TDA dont  l’ajout ou le retrait d’objets se fait selon les besoins à un endroit spécifié.  Il nécessite de fournir la position de l’opération. Cela peut différer selon le type de liste choisie (position courante, itérateur ou indexée).'
  },
  {
    question: 'Qu\'est ce que la création, levée, et gestion d\'exceptions?',
    answer: 'Il est possible d’envoyer des messages d’exceptions (erreurs) d’une méthode à une autre pendant l’exécution du programme.  Un message d’exception démarre lorsqu’il est levé. À partir de ce moment, il est transmis de méthodes appelantes en méthodes appelantes, en respectant la pile des appels du OS, jusqu’à ce qu’elle soit gérée ou que le OS le reçoive.  À ce moment, la pile des appels est affichée à l’écran avec le texte associé au message d’exception.'
  },
  {
    question: 'Qu\'est ce qu\'un package?',
    answer: 'Les classes de Java sont disposées dans des paquetages fournis avec le Java Developpement Kit (JDK).  Ces paquetages sont installés avec le Java Runtime Environnement (JRE) qui contient la Java Virtual Machine (JVM) qui permet d’exécuter des programme java. Si votre environnement de programmation est bien installé, vous n’avez pas de manœuvres spéciales à effectuer autre que l’importation pour les utiliser.'
  },
  {
    question: 'Qu\'est ce que l\'importation?',
    answer: 'Pour utiliser une classe se trouvant dans un paquetage, on doit l’importer à l’aide du mot réservé import en début de fichier.  On peut importer toutes les classes d’un paquetage à l’aide d’une *'
  },
  {
    question: 'Qu\'est ce que la procédure principale?',
    answer: 'Nous favorisons une classe dédiée qui ne contient que le programme principal.'
  },
  {
    question: 'Qu\'est ce qu\'une Graphical User Interface?',
    answer: 'Une application GUI se crée dans un cadre (JFrame ou JDialog) et dispose des composants (JButton, JTextField, JComboBox, JLabel, …) dans différents  panneaux (JPanel).  Pour accéder à ces classes, il suffit de les importer à partir de javax.Swing.'
  },
  {
    question: 'Qu\'est ce que la disposition des panneaux?',
    answer: 'Nous favorisons la disposition de panneaux à l’aide des gestionnaires de disposition (LayoutManager).  Le LayoutManager du panneau principal (contentPane) d’un cadre JFrame est BorderLayout tandis que celui d’un JPanel est FlowLayout par défaut. Il en existe plusieurs autres dont BoxLayout, GridLayout, GridBagLayout, CardLayout, SpringLayout, etc.).'
  },
  {
    question: 'Qu\'est ce que la création, levée, et gestion d\'exception?',
    answer: 'En java, la classe mère de toutes les exceptions est Exception.  La classe qui lève une exception doit l’annoncer à l’aide de throws dans son entête.  Une méthode peut lever plusieurs exceptions à l’aide de throw.  On gère une exception à l’aide d’un bloc try-catch. On affiche la pile des appels l’aide de e.printStackTrace() où e est une instance de la classe Exception. Il est possible d’hériter de la classe Exception pour créer nos propres classe d’exceptions.'
  }
];
