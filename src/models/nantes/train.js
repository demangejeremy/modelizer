const brain = require("brain.js");
const fs = require("fs");
// const data = require("./data.js");
JSON.stringify({ hello: "ok" });

// create configuration for training
const config = {
	iterations: 1,
	log: true,
	logPeriod: 50,
	layers: [10],
};

// Training data
const data = [
	{
		input:
			"Vid\u00e9o Message de la Soci\u00e9t\u00e9 Civile Las Abejas Pour les compagn-e-on-s qui luttent en Europe au 2* Forum Contre les Grands Projets Inutiles, \u00e0 Notre Da",
		output: "espoirchiapas",
	},
	{
		input:
			"La FSF France (Free Software Foundation France) vient de faire conna\u00eetre ses craintes face au danger que repr\u00e9sente le projet de loi DADVSI (droits d'",
		output: "anonymous",
	},
	{
		input:
			"Dans ce rapport, Chachipe, qui est une association de d\u00e9fense des droits des Roms bas\u00e9e au Luxembourg, a analys\u00e9 les mesures qui ont \u00e9t\u00e9 mises en plac",
		output: "anonyme",
	},
	{
		input:
			"Action \u00e0 Rennes en solidarit\u00e9 avec la ZAD contre l'a\u00e9roport de Notre-Dame des Landes. Depuis 6h30 ce mercredi matin, 19 d\u00e9cembre 2012, des opposants \u00e0",
		output: "camille",
	},
	{
		input:
			"Grande manifestation unitaire \u00e0 Al\u00e8s (Gard), capitale des C\u00e9vennes 11 et 12 mai 2013, Al\u00e8s : l\u2019endroit o\u00f9 il faut \u00eatre ! Soyons tous pr\u00e9sents pour en ",
		output: "moi",
	},
	{
		input:
			"si CETTE bande annonce du film atteint les 10 000 vues sur youtube sous 10 jours, le film Toute ma vie (en prison) sera gratuit sur Internet pendant 1",
		output: "moi",
	},
	{
		input:
			"Le 6 avril, \u00e0 l\u2019universit\u00e9 de Paris Dauphine M. Masuda, ancien directeur \u00e0 l\u2019Agence Internationale de l\u2019Energie Atomique (AIEA) devait parler de \u00ab la ",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 12399 R\u00e9ponse du Sous Commandant Marcos aux b\u00eates critiques avec une carricature: Apr\u00e8s \u00eatre r\u00e9apparu sur la sc\u00e8ne publique, et de c",
		output: "espoirchiapas",
	},
	{
		input:
			"Nous sommes nombreux/ses maintenant. Nous habitons ici, et ce n\u2019est pas peu dire. Habiter n\u2019est pas loger. Un logement n\u2019est finalement qu\u2019une case, d",
		output: "zadist",
	},
	{
		input:
			"Notre-Dame-des-Landes : L\u2019accord du 8 mai 2012 \u00e0 l\u2019\u00e9preuve de la r\u00e9alit\u00e9 du terrain Mr et Mme Claude et Christiane Herbin, Le Liminbout, Notre-Dame-de",
		output: "anonyme",
	},
	{
		input:
			"MOBILISATION CONTRE L'ETABLISSEMENT PENITENTIAIRE POUR MINEURS D'ORVAULT Dans la nuit de dimanche \u00e0 lundi , nous avons occup\u00e9 le chantier de construct",
		output: "anonymous",
	},
	{
		input:
			"ON ASSUME\u00a0! Le minist\u00e8re de l'int\u00e9rieur semble avoir gagn\u00e9 une premi\u00e8re manche. Le tribunal correctionnel de Tours a rendu aujourd'hui son verdict. Ho",
		output: "jc",
	},
	{
		input:
			"Une AG pour faire le bilan de l\u2019organisation de la manif du 17, et discuter des perspectives ... : de futures rencontres entre les comit\u00e9s qui se sont",
		output: "zadist",
	},
	{
		input:
			"Apr\u00e8s son \u00e9lection, Fran\u00e7ois Hollande d\u00e9clarait\u202f: \u201cUne alternance change le pouvoir mais elle ne change pas la r\u00e9alit\u00e9\u201d. Ces propos illustrent pleinem",
		output: "unsympathisantducci",
	},
	{
		input:
			'Le Site est depuis hier bien malade, du coup aux "urgences informatique" dans ce moment. En attendant on continue sur www.lazad.noblogs.org On essaye ',
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 12501 Qui sont-ils/elles ? Nous avons pour projet, ici, \u00e0 Nice, de rejoindre Nantes \u00e0 pied. Pour d\u00e9livrer un message \u00e0 dimension hum",
		output: "zadist",
	},
	{
		input:
			"<em>La solidarit\u00e9 est une arme</em> Une ambiance sexiste, machiste, homophobe, viriliste s\u2019est cristallis\u00e9e dans des espaces et moments collectifs sur",
		output: "zadist",
	},
	{
		input:
			"Nous vous invitons a un pique-nique au carrefour de la Saulce et du chemin de Suez. Il y aura de la musique ! venez avec pain, fromages, et autres g\u00e2t",
		output: "zadist",
	},
	{
		input:
			"Mardi 18 d\u00e9cembre, 9 heures. Trois jeunes gens sont assis sur la place Royale. Apr\u00e8s refus de pr\u00e9senter leurs papiers d'identit\u00e9, ils sont interpell\u00e9s",
		output: "zadist",
	},
	{
		input:
			"Rassemblement en solidarit\u00e9 \u00e0 l\u2019immolation d\u2019un ch\u00f4meur en fin de droits jeudi 14/02/13 \u00e0 13:10 Pole Emploi NANTES EST - 8bis rue de la garde CHOMAGE ",
		output: "valk",
	},
	{
		input:
			"Depuis trois semaines, l'Etat m\u00e8ne une op\u00e9ration militaro-polici\u00e8re contre les opposantEs au projet d'a\u00e9roport de Notre Dame des Landes.1200 gendarmes",
		output: "anonyme",
	},
	{
		input:
			"Venons nombreux/ses montrer notre determination \u00e0 faire arr\u00eater le projet d'a\u00e9roport et notre soutien \u00e0 la ZAD. Demandons le retrait imm\u00e9diat et sans ",
		output: "anonyme",
	},
	{
		input:
			"- panorama : il y a d\u2019abord eu un tour de parole enthousiasmant des actions r\u00e9alis\u00e9es par des comit\u00e9s locaux venus de corse, de belgique, de poitiers,",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 12201 Pas de titre pour 12200 Voir tact ci joint Pi\u00e8ces jointes Pas de titre pour 12178",
		output: "moi",
	},
	{
		input:
			"La pr\u00e9paration a \u00e9t\u00e9 divis\u00e9e en plusieurs groupes de travail, qui peuvent se retrouver autant de fois que n\u00e9cessaire d\u2019ici la prochaine AG : il y a - ",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 12535 Fri, February 15, 8:30pm \u2013 11:00pm Vendredi 15 F\u00e9vrier, 20h30 - 23h",
		output: "moi",
	},
	{
		input:
			"A travers le monde, un milliard de femmes sont viol\u00e9es ou battues au cours de leur vie selon l\u2019ONU (1 femme sur 3). Nous refusons d\u2019attendre passiveme",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 11341 Pas de titre pour 11340 Pas de titre pour 11339 Venir aux Planchettes Pas de titre pour 11337 Ceci n'est pas un pamphlet mais ",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 12157 Quand C\u00e9sar patauge... Depuis le mardi 16 octobre, l\u2019offensive redout\u00e9e a commenc\u00e9. Les 1800 hectares de la ZAD ont \u00e9t\u00e9 envahi",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 12214 Pas de titre pour 12213 15 novembre : - \u00c0 partir de 16h00, venez planter vos tentes (emmenez de bonnes couvertures) - 19h00 re",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 12370 Pas de titre pour 12369 L\u2019\u00c9tat saucialiste a pari\u00e9 sur la destruction de ces lieux de vie et de leurs jardins collectifs en im",
		output: "zadist",
	},
	{
		input:
			"Manifestation de r\u00e9occupation Non \u00e0 l'a\u00e9roport de Notre-Dame-des-Landes Jusqu'ici, rien ne semblait pouvoir r\u00e9sister \u00e0 l'expansion effr\u00e9n\u00e9e de \u00ab Nante",
		output: "camille",
	},
	{
		input:
			"Pas de titre pour 12515 Arriv\u00e9e des marcheur-euse-s de Nice sur la ZAD rdv \u00e0 7 h 30 au Cardo (terminus Tram \u00e0 > Orvault) pour faire l'\u00e9tape enti\u00e8re ou",
		output: "zadist",
	},
	{
		input:
			"sam., 2 mars, 14:00 \u2013 17:00 Action organis\u00e9e par des coop\u00e9rateurs de l'Aquitaine et de l'Ile de France. Uune vingtaine de sportifs et de grapheurs ras",
		output: "moi",
	},
	{
		input:
			"Sur place la r\u00e9sistance s\u2019organise, du 5 au 15 d\u00e9cembre : 10 jours de r\u00e9sistance et de d\u00e9fense de la Chataigne. Apr\u00e8s deux semaines de construction, i",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 12176 Nous vous invitons \u00e0 nous rencontrer au local B17 (17, rue Paul Bellamy \u00e0 Nantes, deuxi\u00e8me cour \u00e0 gauche au-dessus de l'Atelie",
		output: "cntnantes",
	},
	{
		input:
			"\u00c9change autour de De l\u2019engagement dans une \u00e9poque obscure RENCONTRE : MIGUEL BENASAYAG ET ANG\u00c9LIQUE DEL REY vendredi 24 f\u00e9vrier \u00e0 18h30 philosophie du",
		output: "philippe",
	},
	{
		input:
			"Ces chasseurs de mammif\u00e8res marins, pour arriver \u00e0 leurs fins, s'en prenaient parfois aux baleineaux pour attirer \u00e0 eux ''les parents baleines''. Cett",
		output: "jc",
	},
	{
		input:
			"A cette occasion, plusieurs associations et organisations environnementales, dont Natur-\u0080\u0099Action et la LPO, proposent une sortie vers le Grand Tourtea",
		output: "moi",
	},
	{
		input:
			"Pas de titre pour 12466 Pas de titre pour 12454 Ne voulant pas appara\u00eetre au premier plan et pour \u00e9viter le risque d\u2019un enlisement sur le terrain, le ",
		output: "pcint",
	},
	{
		input:
			"Pas de titre pour 10131 Graslin. L'entreprise de retraite par capitalisation de Guillaume Sarkozy, membre \u00e9minent du MEDEF. Pas de titre pour 10128 Pa",
		output: "jackpalmer",
	},
	{
		input:
			"Les lecteurs ont sans doute suivi les \u00e9v\u00e9nements autour du mouvement \u00ab Occupation de Wall Street \u00bb (OWS). Depuis la mi-septembre, des milliers de mani",
		output: "unsympathisantducci",
	},
	{
		input:
			'A la suite du documentaire "Carnets de route : un autre monde est possible", Keny Arkana vous propose de partager ensemble un espace ouvert, libre et ',
		output: "anonymous",
	},
	{
		input:
			"journ\u00e9e organis\u00e9e par les associations : ALFA (Association Locale des Femmes Alg\u00e9riennes), Commission femmes du GASProm - Asti de Nantes, Espace Simon",
		output: "anonymous",
	},
	{
		input:
			"http://www.youtube.com/watch?v=AVcWKGWPto8 http://www.youtube.com/watch?v=4JCtXieRNRg http://www.youtube.com/watch?v=YK891-tz0BA http://www.youtube.co",
		output: "a",
	},
	{
		input:
			"Dans la nuit de Jeudi \u00e0 Vendredi, l'agence Vinci Park d'Ixelles (Bruxelles) a \u00e9t\u00e9 attaqu\u00e9e. Les fils de la cam\u00e9ra de surveillance ont \u00e9t\u00e9 coup\u00e9s, les ",
		output: "anonyme",
	},
	{
		input:
			"On a trouv\u00e9 du cheval dans des lasagnes \u00ab au b\u0153uf \u00bb surgel\u00e9es. De la viande d\u00e9coup\u00e9e en Roumanie vendue par un trader hollandais \u00e0 un trader chypriote",
		output: "pmo",
	},
	{
		input:
			"Pas de titre pour 10812 Pas de titre pour 10811 Pas de titre pour 10810 Pas de titre pour 10809 Pas de titre pour 10808 Les cravat\u00e9s arrivaient au com",
		output: "anonyme",
	},
	{
		input:
			"Il faut \u00eatre dipl\u00f4m\u00e9 Pour \u00eatre un peu respect\u00e9 Quel que soit notre \u00e2ge Quelle que soit notre nage Pourtant, les dipl\u00f4mes ne sont rien Et cachent surto",
		output: "patricefaubert",
	},
	{
		input:
			"Une m\u00e9fiance sourde, constante, de lourds pr\u00e9jug\u00e9s, le jugement cruel et destructeur, la culpabilit\u00e9, la peur de l\u2019autre... Voil\u00e0 ce qui se glisse auj",
		output: "unsympathisantducci",
	},
	{
		input:
			"Les vendredi de B17 L\u2019\u00e9volution de la domination capitaliste D\u00e9bat Vendredi 16 d\u00e9cembre 2011 RDV \u00e0 partir de 19h30 20h30 discussions Vers 22h \u00ab auberg",
		output: "philippe",
	},
	{
		input:
			"Pas de titre pour 10568 Pas de titre pour 10540 Actions et manifestations : - 18/3 : Intrusion nucl\u00e9aire \u00e0 Rennes - 20/3 : Nantes mobilis\u00e9e contre le ",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 12174 Nous qui sommes de la ZAD, nous qui sommes d'autres contr\u00e9es, invitons \u00e0 une semaine d'actions d\u00e9centralis\u00e9es. Du Samedi 10 au",
		output: "zad",
	},
	{
		input:
			"Selon la loi d\u2019orientation agricole du 5 janvier 2006, d\u00e8s janvier 2015 la reproduction des ruminants devra \u00eatre soumise \u00e0 des crit\u00e8res scientifiques ",
		output: "pmo",
	},
	{
		input:
			"Pas de titre pour 11854 Pas de titre pour 11853 De la m\u00eame mani\u00e8re RTE a list\u00e9 pour nous les incidents de parcours militants rencontr\u00e9s par ce chantie",
		output: "notht",
	},
	{
		input:
			"Le 1er d\u00e9cembre 2012, une manifestatiopn avait eu lieu devant le si\u00e8ge de Garczynski Traploir Energie, qui a travaill\u00e9 aux c\u00f4t\u00e9s d\u2019Omexom - Vinci Ener",
		output: "anonyme",
	},
	{
		input:
			"A pr\u00e9voir avant la manif ------------------------ Durant la manifestation, radio klaxon \u00e9mettera en live, donnera toutes les informations utiles et re",
		output: "zadist",
	},
	{
		input:
			"- 9h30 : les flics sont aussi retourn\u00e9s dans la for\u00eat, pour d\u00e9truire les cabanes reconstruites pendant le we ... deux personnes auraient \u00e9t\u00e9 interpell",
		output: "zadist",
	},
	{
		input:
			"Genevi\u00e8ve Fioraso, aujourd\u2019hui ministre de l\u2019Enseignement sup\u00e9rieur et de la recherche, a rendu en f\u00e9vrier 2012 un long, lourd et filandreux \u00ab\u00a0Rapport",
		output: "pmo",
	},
	{
		input:
			"\"Il m'enviait que j'\u00e9tais pas sculpteur, que moi je maniais que les culs de clientes, des vagins en veux- tu voil\u00e0 !... Il me voyait que touchant les ",
		output: "patricefaubert",
	},
	{
		input:
			"Afin que chacun puisse participer \u00e0 la manifestation de r\u00e9occupation de la ZAD qui \u00e0 lieu le 17 novembre pr\u00e8s de Notre Dame Des Landes Un appel \u00e0 h\u00e9be",
		output: "moi",
	},
	{
		input:
			"Au cours de ces derni\u00e8res ann\u00e9es, on s\u2019est parfois senti-e-s un peu seul-e-s entre les techniques m\u00e9diatico-polici\u00e8res de stigmatisation/criminalisati",
		output: "zadist",
	},
	{
		input:
			"Vu pr\u00e8s de Baiona Vu pr\u00e8s de Baiona au Pays Basque, les bureaux de Vinci construction tagu\u00e9s en solidarit\u00e9 avec la ZAD Bien au sud de la ZAD, de grand",
		output: "anonyme",
	},
	{
		input:
			"O.P.A soutient la Z.A.D Yep ! Pour ce nouveau bulletin d\u2019info, c\u2019est notre dernier communiqu\u00e9 qui nous sert d\u2019\u00e9dito. A la suite, la revue de presse. P",
		output: "o.p.a",
	},
	{
		input:
			'" Dans les pays hautement m\u00e9canis\u00e9s, les aliments en bo\u00eete, la conservation par le froid, les ar\u00f4mes synth\u00e9tiques, ont fait du palais un organe quasim',
		output: "patricefaubert",
	},
	{
		input:
			"Coups de poings, arrosage, \u00e9vacuation muscl\u00e9e, les images sont \u00e9loquentes. Plusieurs manifestant-e-s ont fini aux urgences avec fractures, ITT, etc Li",
		output: "moi",
	},
	{
		input:
			"Selon Greenpeace ce projet apparaissait comme irresponsable et d\u00e9raisonn\u00e9 et son abandon atteste que la mobilisation citoyenne en faveur du climat peu",
		output: "anonyme",
	},
	{
		input:
			"Confidential to Honorable Pope Benedict: I used to write to Pope John Paul about things to come, but my letters would never get through to him, probab",
		output: "bobbymeade",
	},
	{
		input:
			"Apr\u00e8s plusieurs mois de prison ils avaient \u00e9t\u00e9 remis en libert\u00e9 avec des contr\u00f4les judiciaires tr\u00e8s stricts et contraignants qu'ils avaient d\u00e9cid\u00e9 de ",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Il se l\u00e8ve et dit : \u00ab La contre-insurrection n'est pas seulement la doctrine d'intervention des arm\u00e9es occidentales en Afghanistan, c'est la nature m\u00ea",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 8511 Les fins de mois sont de plus en plus difficiles. On se fait de plus en plus exploiter au boulot pour toujours moins de fric, s",
		output: "anonyme",
	},
	{
		input:
			"Le communisme c\u2019est la destruction des fausses communaut\u00e9s ! Qu\u2019elles soient structur\u00e9es par L\u2019Etat et le capitalisme, ses marchandises ou la couleur ",
		output: "xxx",
	},
	{
		input:
			"Ces associations qui annoncent publiquement leur adh\u00e9sion \u00e0 l'appel BDS lanc\u00e9 en juillet 2005 par les Palestiniens en d\u00e9forment pourtant les revendica",
		output: "bds",
	},
	{
		input:
			"Depuis plus d\u2019une semaine, la bande de Gaza vit une v\u00e9ritable crise humanitaire La fermeture de l'unique centrale \u00e9lectrique a provoqu\u00e9 de longues cou",
		output: "moi",
	},
	{
		input:
			"- Le 5 janvier 2012, Mozaffar Saleh Nia, un militant ouvrier connu et respect\u00e9, membre du Bureau Ex\u00e9cutif du Syndicat Libre des Ouvriers Iraniens, a p",
		output: "soliranparis",
	},
	{
		input:
			"Monsieur le Pr\u00e9sident, vos Excellences, Mesdames et Messieurs Je vous suis tr\u00e8s reconnaissant de me recevoir en ce moment de solidarit\u00e9 et de crise. J",
		output: "ujfp",
	},
	{
		input:
			'Ce matin sur la ZAD, comme tous les matins il y a du monde aux aguets, mais la situation reste d"un calme plat\u2026 \u2013 oh non, j\u2019allais oublier : - 10h27 :',
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 5730 Pas de titre pour 5729 Pas de titre pour 5728 Pas de titre pour 5727 Pas de titre pour 5726 Pas de titre pour 5725 Pas de titre",
		output: "anonymous",
	},
	{
		input:
			'Pour que les libert\u00e9s publiques et individuelles soient de nouveau respect\u00e9es. Pour que la France m\u00e9rite \u00e0 nouveau qu\u2019on la qualifie de "patrie des dr',
		output: "collectifbellaciao",
	},
	{
		input:
			"Le nationalisme est un poison id\u00e9ologique que la bourgeoisie utilise, soit pour embrigader la classe ouvri\u00e8re dans ses conflits guerriers, soit pour \u00e9",
		output: "unsympathisantducci",
	},
	{
		input:
			"petit ajout au d\u00e9cors de la BNP Pas de titre pour 10996 Les jaunes se d\u00e9gonflent. Pas de titre pour 10994 Pas de titre pour 10993 Pas de titre pour 10",
		output: "jackpalmer",
	},
	{
		input:
			"Depuis presque un mois les camarades zadistes (et autres) resistent aux tentatives d\u2019expulsion et \u00e0 l\u2019occupation militaire du territoire. Une attaque ",
		output: "anonyme",
	},
	{
		input:
			"Nous publions ici une discussion entre les camarades qui se sont impliqu\u00e9s dans l\u2019intervention vis-\u00e0-vis des ouvriers en gr\u00e8ve de Verizon aux Etats-Un",
		output: "unsympathisantducci",
	},
	{
		input:
			'So in Boston I suspect that the Devil worshippers that I call the Bush Nazis (a.). were trying to "Do something, whether good or bad, so that we will ',
		output: "bobbymeade",
	},
	{
		input:
			"To Whom It May Concern: 12/13 - I am dealing with a Notice to Quit after 7 years at 7 Eaton Place. They say, \"He can't hear. He can't do anything abou",
		output: "bobbymeade",
	},
	{
		input:
			"Sweet Alletta George No? GHW is too sweet! Isn't he? Like his great granddaddy Sweet Alletta George above? Plus he has a private army of dunces to bac",
		output: "bobbymeade",
	},
	{
		input:
			"Les activistes occupent des endroits abandonn\u00e9s, publics ou priv\u00e9s, et y mettent en place des r\u00e9coltes, afin d'interpeller les pouvoirs sur leur utili",
		output: "anonyme",
	},
	{
		input:
			"Soutien aux anarchistes isra\u00e9liens Ils militent plus sp\u00e9cifiquement avec le but de rejoindre les communaut\u00e9s palestiniennes dans leur lutte pour d\u00e9man",
		output: "o.p.a",
	},
	{
		input:
			"9 6 8 7 6 5 4 3 2 1 La strat\u00e9gie polici\u00e8re est d'excentrer le campement et de le mettre sous pression pour \u00e9liminer le mouvement : pour l'instant, il ",
		output: "jackpalmer",
	},
	{
		input:
			"Pas de titre pour 12459 Synopsis :\u00a0 Nous sommes en mars 1871, tandis qu\u2019un journaliste de la T\u00e9l\u00e9vision Versaillaise diffuse une information l\u00e9nifiant",
		output: "anonyme",
	},
	{
		input:
			"\u00ab La gr\u00e8ve \u00bb par Grandjouan en Une de \u00ab L\u2019Assiette au beurre \u00bb de mai 1905 Mobilisant un clich\u00e9 r\u00e9curent chez les plumitifs de l\u2019ordre dominant, l\u2019\u00e9di",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 10280 Cette fois ci, c'est du copwatching qu'ils se plaignent. En gros les flics se plaignent de ne pas pouvoir tabasser tout en \u00e9ta",
		output: "anonyme",
	},
	{
		input:
			"- 8h : des nouvelles des interpell\u00e9-e-s d\u2019hier soir : sur le 6 qui ont \u00e9t\u00e9 emmen\u00e9-e-s \u00e0 Blain : 4 sont sorties vers 23h30, 1 \u00e0 23h45, la derni\u00e8re devr",
		output: "zadist",
	},
	{
		input:
			"- 10h27 : l\u2019H\u00e9li circules tr\u00e8s bas entre La Paquelais et Le trou des Planchettes ( r\u00e9gion Phare Ouest ) - 10h18 : l\u2019H\u00e9li viens d\u2019y arriver ! On en a p",
		output: "zadist",
	},
	{
		input:
			"O.P.A - Revue de presse - Janvier 2012 Les dessous de l\u2019Affaire J\u2019aurai beaucoup de choses \u00e0 dire sur les dessous de l\u2019Affaire, les tenants et les abo",
		output: "o.p.a",
	},
	{
		input: "- 7h :il fait nuit noire et rien ne bouge ...",
		output: "zadist",
	},
	{
		input:
			"On aurait envie de gueuler un peu sur les camarades que l'on avait pr\u00e9venus de ce fait il y a d\u00e9j\u00e0 plus d'un mois, mais en sachant que ce blog \u00e9tait i",
		output: "antifa",
	},
	{
		input:
			"Depuis des semaines d\u2019occupation et de harc\u00e8lement policier et militaire, alors que nous continuons \u00e0 d\u00e9fendre la zone du b\u00e9tonnage programm\u00e9, nous av",
		output: "zadist",
	},
	{
		input:
			"Organisons un rassemblement en solidarit\u00e9 \u00e0 l'homme de 43 ans a commis un geste d\u00e9sesp\u00e9r\u00e9, ce mercredi vers 13h10, devant une agence P\u00f4le emploi, \u00e0 Na",
		output: "moi",
	},
	{
		input:
			"Pas de titre pour 12331 Pas de titre pour 12329 Le Crif et ses officines sont coutumiers du fait. Comme leurs ma\u00eetres isra\u00e9liens, ils ne supportent au",
		output: "bureaunationaldel\u2019ujfp",
	},
	{
		input:
			"\"Seul l'\u00e9crivain sans public peut se permettre le luxe d'\u00eatre sinc\u00e8re. Il ne s'adresse \u00e0 personne; tout au plus \u00e0 soi-m\u00eame. \" E.M. Cioran (1911-1995) ",
		output: "patricefaubert",
	},
	{
		input:
			'"(...)le sabotage de distributeurs automatiques de billets n\u2019est en aucune fa\u00e7on, \u00e0 nos yeux, un moyen de d\u00e9fendre la cause des sans papiers en g\u00e9n\u00e9ra',
		output: "solidarit\u00e9",
	},
	{
		input:
			"Tiens donc, \u00e7a continue. La nuit de lundi 22 au mardi 23 f\u00e9vrier \u00e0 paris, toutes les vitres d\u2019une boutique SNCF ( rue Littr\u00e9, 6e), d\u2019une agence Carlso",
		output: "anonyme",
	},
	{
		input:
			"Samedi 23 janvier - Manifestation contre la machine \u00e0 expulser\u2026 Dans le cadre de la semaine de solidarit\u00e9 avec les inculp\u00e9s de l\u2019incendie de vincennes",
		output: "anonyme",
	},
	{
		input:
			"- 15h26 : on sait pas trop quoi a faire avec l\u2019info, mais on imagine pas non plus qu\u2019il se amusent de juste faire des allers retours : 10 fourgons de ",
		output: "zadist",
	},
	{
		input:
			'Nous avons introduit la notion de soci\u00e9t\u00e9 de contrainte, au dernier chapitre de "Terreur et possession" (1), pour caract\u00e9riser une phase nouvelle dans',
		output: "pmo",
	},
	{
		input:
			"Que les bureaucrates, les barbouzes et les fats intellectuels et m\u00e9diatiques n'esp\u00e8rent pas manipuler les r\u00e9volutionnaires. D\u00e9sireux de mettre des b\u00e2t",
		output: "anonyme",
	},
	{
		input:
			"\"Notre univers technologique en expansion nous emporte de plus en plus loin d'une existence simplement humaine, cependant que l'extension de la cit\u00e9 d",
		output: "patricefaubert",
	},
	{
		input:
			"Si la r\u00e9sistance \u00e0 l'a\u00e9roport De Notre-Dame-des-Landes N'emp\u00eache pas ce mauvais sort A la r\u00e9action, tout sera permis, alors C'est en v\u00e9rit\u00e9, un enjeu ",
		output: "patricefaubert",
	},
	{
		input:
			'Suite \u00e0 une \u00e9ni\u00e8me tentative de suicide, hier jeudi 15 novembre, dans le CRA 2 de vincennes, des retenus se sont r\u00e9volt\u00e9s et ont selon eux "tout cass\u00e9',
		output: "anonyme",
	},
	{
		input:
			"DU MEXIQUE, LETTRE DE SOUTIEN \u00c0 LA LUTTE DE NOTRE DAME DES LANDES - 30 octobre 2012 Aux gens de Notre-Dame des Landes et de la France en r\u00e9sistance \u00c0 ",
		output: "anonyme",
	},
	{
		input:
			"Pas toujours facile les actions \u00e0 4h du mat' Pas de titre pour 10091 Pas de titre pour 10090 Pas de titre pour 10089 Pas de titre pour 10088 Pas de ti",
		output: "anonyme",
	},
	{
		input:
			"Photo : les gr\u00e8ves de Nantes vues par le magazine Radar en 1955 Retour sur une lutte locale : les gr\u00e8ves insurrectionnelles de Nantes, en 1955. Au bea",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Nous posons au Conseil G\u00e9n\u00e9ral le probl\u00e8me du non-respect de ses obligations, \u00e0 savoir la protection de l'enfance, le devoir de loger et nourrir les e",
		output: "pj49",
	},
	{
		input:
			"Vers 20H les ERIS sont intervenus (dans le calme selon les journaux). Les eris se sont les brigades d'intervention, compos\u00e9s de matons masqu\u00e9s, qui se",
		output: "anonyme",
	},
	{
		input:
			"En soutien \u00e0 la lutte contre l\u2019a\u00e9roport, les personnes pr\u00e9sentes au Cyclocamp ont d\u00e9cid\u00e9 de rendre visite \u00e0 M.\u00a0Musti\u00e8re, pr\u00e9sident des Ailes pour l\u2019Ou",
		output: "zadist",
	},
	{
		input:
			"Contrairement \u00e0 ce que sous entend le journaliste de France 3 interview\u00e9 sur 20 minutes (http://www.20minutes.fr/nantes/1693695-20150923-dame-landes-j",
		output: "zadist",
	},
	{
		input:
			"Ferme des bouillons, la propri\u00e9t\u00e9 priv\u00e9e ne doit pas avoir le dernier mot ! Au moment m\u00eame o\u00f9 cet article \u00e9tait publi\u00e9, les occupants de la Ferme des ",
		output: "...",
	},
	{
		input:
			"Le message de Netanyahou \u00e0 la population de Gaza vivant en cage est clair : \u00ab si tu bouges, je t\u2019\u00e9crabouille. Il n\u2019y aura pas de limite et personne ne",
		output: "bureaunationaldel\u2019ujfp",
	},
	{
		input:
			"Valls n\u2019\u00e9tait d\u00e9j\u00e0 plus premier ministre, il n\u2019est m\u00eame plus candidat. Ciao\u00a0! On ne peut manquer de se r\u00e9jouir qu\u2019un politicien sinistre qui a annonc\u00e9",
		output: "zadist",
	},
	{
		input:
			"Depuis pas mal d\u2019ann\u00e9es maintenant, d\u2019innombrables exp\u00e9riences se sont multipli\u00e9es dans le bocage ou alentours\u00a0! Des r\u00e9unions par centaines, des manif",
		output: "zadist",
	},
	{
		input:
			"Dans un monde o\u00f9 les conditions de survie sont toujours plus insupportables, o\u00f9 quelques uns continuent \u00e0 s\u2019enrichir en exploitant la mis\u00e8re, la priso",
		output: "anonyme",
	},
	{
		input:
			"les raisons de la col\u00e8re n'ont pas disparu, d'autant que la machine \u00e0 broyer judiciaire continue son sale boulot L'instruction de ce que le Pouvoir vo",
		output: ".",
	},
	{
		input:
			"\u00a0Cette action avait lieu dans tous les coins de France (et dans 6 pays), afin de d\u00e9noncer le projet de forage du g\u00e9ant p\u00e9trolier au large de l'Amazone",
		output: "gignv",
	},
	{
		input:
			"Isra\u00ebl est-il, oui ou non, coupable de Crime d\u2019 Apartheid ? Le d\u00e9bat n\u2019est pas nouveau. De nombreux textes sur ce sujet ont \u00e9t\u00e9 publi\u00e9s ; tous conclua",
		output: "ujfp",
	},
	{
		input:
			"En gr\u00e8ve de la faim depuis 65 jours , le prisonnier palestinien en gr\u00e8ve de la faim depuis le 18/12/2011 est d\u00e9sormais selon des m\u00e9decins ind\u00e9pendants",
		output: "ahadhaam",
	},
	{
		input:
			"F\u00e9d\u00e9ration CNT sant\u00e9 social et collectivit\u00e9s territoriales 33 rue des Vignoles 75020 Paris Suicide d'un adolescent \u00e0 l'EPM d'Orvault : l'Etat continue",
		output: "cnt",
	},
	{
		input:
			"\u00a0 1 - Le meeting de Marine Le Pen est un \u00e9chec retentissant. Les communicants du FN \u00e9voquent un un peu plus de 3000 participants. Un journaliste parla",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"L\u2019occasion aussi de discuter un peu de tout \u00e7a avec pas mal de passants curieux et int\u00e9ress\u00e9s, malgr\u00e9 la horde habituelle de zombies se rendant d\u2019une ",
		output: "anonyme",
	},
	{
		input:
			"Le site am\u00e9ricain qui accueille la p\u00e9tition en ligne ne peut \u00eatre modifi\u00e9. Merci de r\u00e9pondre au questionnaire en pr\u00e9cisant vos nom, pr\u00e9nom, Email, adr",
		output: "moi",
	},
	{
		input:
			"On trouve d\u00e9j\u00e0 \u00e0 l\u2019\u00e9cole les conseils de discipline, les sanctions et les punitions, les exclusions, les bulletins de notes, les surveillants, la caro",
		output: "anonyme",
	},
	{
		input:
			"Un contr\u00f4le informatique total En ce d\u00e9but 2012, en d\u00e9pit des apparences, nous voici pass\u00e9s sans coup f\u00e9rir d\u2019une soci\u00e9t\u00e9 d\u00e9mocratique \u00e0 une soci\u00e9t\u00e9 d",
		output: "moi",
	},
	{
		input:
			"- Nouvelles parvenues d\u2019Iran ce 11 F\u00e9vrier 21012 via le site Freedom Messenger -Garder des secrets sur le web dans un pays aussi num\u00e9riquement r\u00e9press",
		output: "soliranparis",
	},
	{
		input:
			"L\u2019article suivant, traduit depuis World Revolution (organe de presse du CCI en Grande-Bretagne), a \u00e9t\u00e9 \u00e9crit par un sympathisant de notre organisation",
		output: "unsympathisantducci",
	},
	{
		input:
			"correspondants de nuit Les flics cherchent toujours les auteurs du tract \u00ab [Correspondants de nuit, des agents de la guerre aux pauvres->[http://nante",
		output: "anonyme",
	},
	{
		input:
			"L\u2019attaque de la ZAD du Testet n\u2019est ni un hasard ni la SEULE volont\u00e9 du gouvernement ultralib\u00e9ral saucialiste de favoriser un choix de soci\u00e9t\u00e9 mortif\u00e8",
		output: "zadist",
	},
	{
		input:
			"Texte diffus\u00e9 par la CARB Proc\u00e8s Les r\u00e9v\u00e9lations de la journ\u00e9e du mardi 16, c'est l'expert en analyses ADN venu t\u00e9moigner \u00e0 la barre qui les a faites.",
		output: "anonymous",
	},
	{
		input:
			'voila quelques textes trouv\u00e9s sur le site ZDnet.fr "Business et technologies" avec pour commencer une d\u00e9finition des RFID dont il est question dans le',
		output: "anonymous",
	},
	{
		input:
			"Cette loi offre \u00e0 la police, la gendarmerie et m\u00eame aux polices municipales une tr\u00e8s large autorisation de tirer, modifiant consid\u00e9rablement la doctri",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"De Nantes \u00e0 Bologne Solidarit\u00e9 Les \u00e9tudiant-e-s de l\u2019universit\u00e9 de Bologne se mobilisent depuis bient\u00f4t trois semaines pour emp\u00eacher l\u2019installation d\u2019",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Le 19 juillet 2016, le jour de son 24e anniversaire, Adama Traor\u00e9 meurt apr\u00e8s son interpellation, entre les mains des gendarmes de la ville de Beaumon",
		output: "anonyme",
	},
	{
		input:
			"3 octobre 1940. Le premier Statut des Juifs fait d\u2019une partie des fran\u00e7ais sous Vichy des citoyens \u00ab\u00a0\u00e0 part\u00a0\u00bb. Le lendemain, la loi du 4 octobre 1940 ",
		output: "ujfp",
	},
	{
		input:
			"Vers 17h 45, les jeunes revenaient vers le rassemblement apr\u00e8s s\u2019\u00eatre affront\u00e9s aux flics au niveau de la dalle de la pr\u00e9fecture. Les (tr\u00e8s) jeunes re",
		output: "anonyme",
	},
	{
		input:
			"Yo Merci \u00e0 toutes les personnes qui ont refus\u00e9 de donner Identit\u00e9 et Signal\u00e9tique mercredi soir, \u00e0 celles qui ont essay\u00e9 et \u00e0 toutes celles qui les on",
		output: "x",
	},
	{
		input:
			"Entretemps, le r\u00e9seau militant s'est activ\u00e9 et le groupe grossit jusqu'\u00e0 une bonne trentaine de participant-e-s, trois autres tracteurs arrivent. Il e",
		output: "anonyme",
	},
	{
		input:
			"Lors d\u2019une annonce vendredi apr\u00e8s-midi, 17/2, le Recteur de l\u2019\u00c9cole Polytechnique d\u2019Ath\u00e8nes a averti le public de coupures de courant dans les b\u00e2timen",
		output: "anonyme",
	},
	{
		input:
			"Appel \u00e0 une assembl\u00e9e de luttes. Dans la droite ligne des gouvernements pr\u00e9c\u00e9dents, s\u2019accentuent avec les nouvelles lois en cours d\u2019\u00e9criture les in\u00e9ga",
		output: "anonyme",
	},
	{
		input:
			"1 - Vid\u00e9osurveillance. Vendredi 10 mars, les \u00e9lus de la m\u00e9tropole se sont r\u00e9unis pour d\u00e9finir un plan de vid\u00e9osurveillance dans la ville. Les transpor",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Il sera taill\u00e9 pour fonctionner dans un serveur de type \u201cplug\u201d. Il s\u2019agit de petit serveur tenant dans une sorte de grosse prise \u00e9lectrique et consomm",
		output: "anonyme",
	},
	{
		input:
			"Appel \u00e0 en finir avec le cirque \u00e9lectoral Bien de l\u2019eau a coul\u00e9 sous les ponts depuis que le Parti Socialiste a renonc\u00e9 \u00e0 faire son universit\u00e9 d\u2019\u00e9t\u00e9 \u00e0",
		output: "anonyme",
	},
	{
		input:
			"Parce qu'ils veulent nous enfermer, nous faire rentrer dans leurs normes, nous rendre dociles et rentables. Parce que nous sommes contre tous les enfe",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 11359 L'OPAC pour lui demander des comptes sur sa gestion des logements vides. La DDCS et le CCAS dans le cadre de leurs missions de",
		output: "x",
	},
	{
		input:
			"Quelques semaines plus tard, la m\u00eame bande fait \u00e0 nouveau parler d'elle \u00e0 Angers, puis \u00e0 Nantes. Agression raciste, \u00e0 nouveau, dans un bar. Puis une t",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"#JeSuisIndymedia : un logo d\u00e9sormais interdit ! edit du 31/08 19:20: ajout du lien vers le communiqu\u00e9 de la CGA edit du 30/08 17:45: ajout du communiq",
		output: "(((i)))",
	},
	{
		input:
			"Appel \u00e0 rassemblement devant Waldeck Rousseau Ya eu des interpellations cet aprem \u00e0 la manif. Il risque d'y en avoir d'autres. Venez les soutenir et l",
		output: "legalteam",
	},
	{
		input:
			"La volont\u00e9 de changer le syst\u00e8me capitaliste s\u2019est affirm\u00e9e et propag\u00e9e \u00e0 toute vitesse au cours de ces derniers mois dans le monde, en particulier da",
		output: "unsympathisantducci",
	},
	{
		input:
			"Cependant une nouvelle expulsion et une reprise des travaux est possible partir de f\u00e9vrier. L\u2019ANDRA doit d\u00e9fricher certaines parcelles avant la p\u00e9riod",
		output: "zadist",
	},
	{
		input:
			"Dans la nuit du 14 d\u00e9cembre, quatre distributeurs de banques ont \u00e9t\u00e9 d\u00e9truits \u00e0 coups de marteau rue de Belfort \u00e0 Besan\u00e7on. Les agences cibl\u00e9es sont: ",
		output: ".",
	},
	{
		input:
			"C'est au fin fond du Finist\u00e8re, dans un vallon verdoyant et humide qu'est implant\u00e9e l'usine qui fabrique les armes de la police : Nobel Sport, product",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"ILS AURONT BEAU NOUS METTRE EN CAGE, ILS NE FERONT QUE REMETTRE DE LA POUDRE SUR LE FEU DE NOS RAGES\u00a0! LIBERTE POUR TOU-TE-S LES PRISONNIER-E-S\u00a0! SOLI",
		output: "anonyme",
	},
	{
		input:
			"En d\u00e9but de semaine, on a vu que les vitres du commissariat de la place laissaient passer de gros courants d'air, et qu'un tag ornait la fa\u00e7ade : \"ven",
		output: ".",
	},
	{
		input:
			"Pas de titre pour 11156 Pas de titre pour 11155 Nous sommes les 99% OSCAILTIMAGE(attachments/nov2011/noussommesles99.jpg 300 0) Nous sommes les 99% AG",
		output: "karacole",
	},
	{
		input:
			"Appel \u00e0 rassemblement devant la mairie d'Aytr\u00e9 (17), contre la venue de Sarko \u00e0 Alstom, et de S\u00e9go \u00e0 La Rochelle \u00e0 10H30",
		output: "anonyme",
	},
	{
		input:
			"Maintenant qu'on y est, on compte bien y rester. Et multiplier les appels \u00e0 s'approprier cet espace, le faire vivre de mille mani\u00e8res. Tout le monde e",
		output: "anonyme",
	},
	{
		input:
			"interpellation Toute la fin de matin\u00e9e, les voitures de gendarmes, civiles, militaires ou conventionnelles se sont d\u00e9multipli\u00e9es sur les routes. Sur r",
		output: "vmc",
	},
	{
		input:
			"Voici donc le programme d\u00e9taill\u00e9 de la Semaine des Luttes qui se d\u00e9roulera du 19 au 24 septembre \u00e0 l\u2019universit\u00e9 de Rennes 2\u00a0: Tous les jours \u00a0Stands e",
		output: "anonyme",
	},
	{
		input:
			"Ce midi j'ai trouv\u00e9 dans ma bo\u00eete aux lettres une feuille volante indiquant : \"proc\u00e8s-verbal de convocation en vue d'une audition libre\".Il est pr\u00e9cis",
		output: "anonyme",
	},
	{
		input:
			"Bonjour Lors de la manif Mardi 25 Mai 2003 \u00e0 Nantes des personnes distribuaient un dossier d'analyse sur la r\u00e9forme des retraites. Ces personnes trava",
		output: "philippe",
	},
	{
		input:
			"Ce geste prend donc \u00e9videmment une dimension symbolique, mais pas seulement. Planter des arbres, c\u2019est s\u2019inscrire dans la dur\u00e9e et signifier clairemen",
		output: "zadist",
	},
	{
		input:
			"photo piqu\u00e9e \u00e0 Val K: https://twitter.com/ValKphotos/status/770732070624751616 Accul\u00e9 par les mobilisations massives des 9 janvier et 27 f\u00e9vrier, le g",
		output: "zadist",
	},
	{
		input:
			"APPEL D\u2019OCCUPANT-E-S DE LA ZAD La d\u00e9route de C\u00e9sar Depuis des d\u00e9cennies un ubuesque projet d\u2019a\u00e9roport menace le bocage de Notre Dame des Landes pr\u00e8s d",
		output: "zadist",
	},
	{
		input:
			"Une nouvelle pas si surprenante mais qui n'en reste pas moins tr\u00e8s inqui\u00e9tante vient de tomber: Axa, par le biais d'une offre/concours, propose \u00e0 ses ",
		output: "r\u00e9voltenum\u00e9rique",
	},
	{
		input:
			"Grosse nasse cet apr\u00e8m \u00e0 la manif contre les violences polici\u00e8res. Des camarades ont \u00e9t\u00e9 embarqu\u00e9s et sont au poste \u00e0 Waldeck. Un rassemblement devant",
		output: "x",
	},
	{
		input:
			"Cette emission a \u00e9t\u00e9 enregistr\u00e9 dans la nuit de la pleine lune le 8 F\u00e9vrier 2012, y compris les mises \u00e0 jour de Guantanamo Bay, les gisements p\u00e9trolif",
		output: "zadist",
	},
	{
		input:
			"Les \u00ab ultras \u00bb, supporters des \u00e9quipes de foot de la capitale qui, lors des manifestations de l\u2019ann\u00e9e derni\u00e8re avaient affront\u00e9 \u00e0 de nombreuses repris",
		output: "pcint",
	},
	{
		input:
			"Italie : derni\u00e8res nouvelles sur la r\u00e9pression anti-anarchiste Op\u00e9ration \u00ab Cervantes \u00bb Le 27 juillet 2004, sur demande des procureurs romains du \u00ab poo",
		output: "anonymous",
	},
	{
		input:
			"- Nouvelle parvenues d\u2019Iran ce 21 Janvier 2012 via le site Iranien Persianbanoo -Les prisonniers enferm\u00e9s dans la prison d\u2019Evin, vivent dans des condi",
		output: "soliranparis",
	},
	{
		input:
			"Des femmes anonymes et inconnues de diff\u00e9rents points du pays ont initi\u00e9 une campagne pour la d\u00e9p\u00e9nalisation de l'avortement au travers du R\u00e9seau d'In",
		output: "fab",
	},
	{
		input:
			"Samedi 20 mai, dans le quartier de la Rose des vents, c\u2019est sous pr\u00e9texte de d\u00e9gradation (1) que la police a proc\u00e9d\u00e9 \u00e0 des interpellations et des gard",
		output: "zadist",
	},
	{
		input:
			"le 30 avril 2015 est publi\u00e9 une p\u00e9tition (avaaz.org) contre un squatt ,au 94 rue de chatillon \u00e0 rennes. cette p\u00e9tition est lanc\u00e9 par des bretons, comm",
		output: "antifa",
	},
	{
		input:
			"Ces charges ont fait plusieurs dizaines de bless\u00e9s. Le syndicat SUD en a d\u00e9nombr\u00e9 plus d\u2019une quarantaine dont des bras cass\u00e9s et des traumatismes cr\u00e2n",
		output: "anonyme",
	},
	{
		input:
			"http://ulnantes.cnt-f.org/spip.php?article150 Le r\u00e8gne de Macron commence sous le signe de la trique.La police a utilis\u00e9 la mani\u00e8re forte contre le ra",
		output: "cntnantes",
	},
	{
		input:
			"Dans la nuit du 27 au 28 ao\u00fbt, je me baladais dans le centre de Nantes o\u00f9 de nombreuses rues portent encore les noms de n\u00e9griers c\u00e9l\u00e8bres. D\u00e9cid\u00e9 \u00e0 ni",
		output: "x",
	},
	{
		input:
			"Le 18 mai 2016, des syndicats de policiers et des membres de l\u2019extr\u00eame droite se sont rassembl\u00e9s place de la R\u00e9publique contre ce qu\u2019ils d\u00e9signaient c",
		output: "x",
	},
	{
		input:
			"On pourrait croire \u00e0 un effet d'annonce, et peut-\u00eatre effectivement c'est ce qui est recherch\u00e9 au bout du compte puisque l'article annonce des chiffre",
		output: "@",
	},
	{
		input:
			"appel \u00e0 la gr\u00e8ve de l'ob\u00e9issance Anjourd'hui, le jeudi 10 mars 2011, nous vous informons que nous ne remonterons pas de la cour de promenade au terme ",
		output: "m",
	},
	{
		input:
			"Face au \u00e9ni\u00e8me plan d\u2019aust\u00e9rit\u00e9 impos\u00e9 \u00e0 la population grecque, la col\u00e8re a fait irruption dans la rue. Entre 80 000 et 200 000 personnes se sont rass",
		output: "unsympathisantducci",
	},
	{
		input:
			"M\u00eame si rien n'est confirm\u00e9, on voulait quand m\u00eame rappeler qu'il y a un appel \u00e0 se rassembler\u00a0 \u00e0 18h devant la pr\u00e9fecture \u00e0 Nantes en cas d'intervent",
		output: "anonyme",
	},
	{
		input:
			"\u00a0 \u00a0 \u00a0 Rappel des faits. \u00a0 Fin ao\u00fbt/d\u00e9but septembre, de nombreuses manifs ont lieu \u00e0 Besan\u00e7on contre les avis d'expulsion distribu\u00e9s \u00e0 la pelle \u00e0 l'enc",
		output: "anonyme",
	},
	{
		input:
			"- Appel urgent : Saeed Malekpour, Zaniar Moradi, Loghman Moradi et Sherko Moarefi peuvent \u00eatre ex\u00e9cut\u00e9s \u00e0 tout moment ! Aidez-nous \u00e0 les sauver ! - Sa",
		output: "soliranparis",
	},
	{
		input:
			"Le rendu des maisons qui sont pass\u00e9s en proc\u00e8s \u00e0 Saint-Nazaire a eu lieu le 20 septembre. La cabane des Fosses Noires aurait vu sa proc\u00e9dure annul\u00e9e. ",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 9149 Pas de titre pour 9148 Ils construisent pour d\u00e9truire notre futur : prisons, ami des tyrans, t\u00e9l\u00e9 de merde, autoroutes pollueus",
		output: "anonyme",
	},
	{
		input:
			"\u00c9vasion de Palaiseau, proc\u00e8s en appel d\u2019Ibrahim El Louar : le 18 janvier 2013, le tribunal d\u2019\u00c9vry a condamn\u00e9 Ibrahim El Louar a deux ans de prison fer",
		output: "solidarit\u00e9",
	},
	{
		input:
			"\u00ab Lundi 19 juin au soir, il y avait le premier rassemblement du front social \u00e0 Nantes. Mon colocataire y allait. Moi, je gardais notre fille, son peti",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pas de titre pour 10301 Que se soit devant le centre de r\u00e9tention du Mesnil Amelot (pr\u00e8s de Paris), \u00e0 Bochuz (Suisse), devant toutes les prisons grecq",
		output: "anonyme",
	},
	{
		input:
			"PROCES EN APPEL DES 4 DE TOURS CHOIX DE SOCIETE\u00a0: EST-CE A LA JUSTICE DE TRANCHER\u00a0? Lundi 30 janvier 2012, le proc\u00e8s en appel des 4 de Tours a bien eu",
		output: "jc",
	},
	{
		input:
			"- Derni\u00e8res nouvelles et suites des arrestations qui avaient eues lieues \u00e0 T\u00e9h\u00e9ran le 14 f\u00e9vrier 2012 dernier. - Nouvelles qui nous sont parvenues ce ",
		output: "soliranparis",
	},
	{
		input:
			"Pour s\u2019opposer \u00e0 ce monde qui nous encha\u00eene, nous avons souhait\u00e9 louer un espace afin d\u2019y d\u00e9velopper des exp\u00e9riences autonomes, c\u2019est-\u00e0-dire qui d\u00e9vel",
		output: ".",
	},
	{
		input:
			"Pas de titre pour 11035 Pas de titre pour 11034 Comme nous avons dit , les centres p\u00e9nitenciers ne remplissent pas leur mission de r\u00e9insertion bien au",
		output: "espoirchiapas",
	},
	{
		input:
			"Mardi 26 janvier, 18h14 : Une revue de presse non exhaustive de suivi m\u00e9dias de l\u2019accident. \u00a0 Mardi 26 janvier, 17h05, l\u2019ANDRA a publi\u00e9 un communiqu\u00e9 ",
		output: "vmc",
	},
	{
		input:
			"Pour rappel, la trajectoire politique de Bouchet passe par un large \u00e9ventail de l'extr\u00eame droite radicale raciste et antis\u00e9mite : du royalisme au n\u00e9o-",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Parce que nous sommes contre la guerre et les marchands d\u2019armes La France et les USA depuis des d\u00e9cennies pratiquent une politique interventionniste q",
		output: "collectif",
	},
	{
		input:
			"Rappel des circomstances. En f\u00e9vrier 2017, 3 personnes qui sont titulaire d'un compte bancaire li\u00e9 \u00e0 des activit\u00e9s de soutiens antirep (Le comit\u00e9 de s",
		output: "a",
	},
	{
		input:
			"\u00a0 Sous le soleil, nous avons pu prendre le temps de discuter du boulot \u00e0 Nantes-atlantique, du mouvement en cours contre la loi travail et de la manif",
		output: "zadist",
	},
	{
		input:
			"Petit compte-rendu perso de la mobilisation morbihannaise aujourd\u2019hui (19 mai) contre la loi Travail\u00a0: 1500 personnes \u00e0 Lorient, 50 \u00e0 Vannes. Pour \u00ab\u00a0V",
		output: "anonyme",
	},
	{
		input:
			"COMMUNIQUE DE PRESSE \u2013 Alerte \u00e0 Bure\u00a0: l\u2019ANDRA ne creusera pas ses trous dans la for\u00eat de Mandres-en-Barrois\u00a0! L\u2019agence entame des travaux pour \u00e9tendr",
		output: "anonyme",
	},
	{
		input:
			"De nouveau, nous ferons appel \u00e0 votre solidarit\u00e9 citoyenne ! Afin de participer au financement de la scolarit\u00e9 de quelques mineur.e.s \u00e9trangers. Une d",
		output: "anonyme",
	},
	{
		input:
			"Bien mal nous en a pris, puisque depuis lors nous avons subi plusieurs incursions et attaques de la part de fachos : des croix gamm\u00e9es et inscriptions",
		output: "zadist",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no424-juin-2017.html?utm_source=diaporama&utm_medium=image&utm_campaign=home&utm_content=slide-1 Luttes syndi",
		output: "cntnantes",
	},
	{
		input:
			"\u00a0 Tous et toutes en gr\u00e8ve le 12 septembre 2017 D\u00c9FENDONS NOS ACQUIS SOCIAUX ET NOS INT\u00c9R\u00caTS DE CLASSE \u00ab Si tu ne participes \u00e0 la lutte, tu participes ",
		output: "cntnantes",
	},
	{
		input:
			'manifestation en hommage \u00e0 R\u00e9mi le 27/10 \u00e0 Nantes Apr\u00e8s des ann\u00e9es de luttes "conventionnelles" \u00e0 Notre-Dame-des-Landes\u00a0 comme au Testet et bien d\'aut',
		output: "karacole",
	},
	{
		input:
			"\u00a0\u00c9tudiant-e-s, lyc\u00e9en-ne-s d\u00e9fendons la ZAD ! Apr\u00e8s la nouvelle d\u00e9monstration de force de plus de 40 000 personnes le samedi 8 octobre et une journ\u00e9e ",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Bonjour, quelques nouvelles de la #zad #NDDL en cette chaleur estivale, qui n'emp\u00eache pas de lutter, ici comme ailleurs- Alors, l'info du moment, \u00e0 fa",
		output: "zadist",
	},
	{
		input:
			"- Juge : Marc Fricoteaux - Assesseur-e-s : Jean Ravon et Catherine Billard - Procureur : Olivier Bonhomme --------------------------------------------",
		output: "legalteam",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no425-ete-2017.html Luttes syndicales Section \u00e0 l\u2019APF d\u2019Echiroles. La force de travail handicap\u00e9e soumise \u00e0 u",
		output: "cntnantes",
	},
	{
		input:
			"Ces descentes font suite \u00e0 l\u2019action contre le si\u00e8ge de Vinci Construction Grand Ouest (http://zad.nadir.org/spip.php?article106), le 20 octobre dernie",
		output: "zadist",
	},
	{
		input:
			"Vendredi dernier, Enguerrand a vu sa demande d'am\u00e9nagement de peine accept\u00e9e par la JAP (Juge d'Application des Peines).\u00a0Il aurait du sortir hier, sou",
		output: "comit\u00e9desoutien\u00e0enguerrand",
	},
	{
		input:
			"....What you don't know is that knee replacement is usually a one way ticket out of here, for very few people survive the failure of those joints, esp",
		output: "bobbymeade",
	},
	{
		input:
			"Rez de chauss\u00e9e Sous-sol2 Sous-sol1 A l'occasion de l'ouverture du nouveau centre p\u00e9nitentiaire de Valence, et du transfert pr\u00e9vu dans les semaines \u00e0 ",
		output: "anonyme",
	},
	{
		input:
			"En mai 2015, l\u2019assembl\u00e9e nationale a vot\u00e9 et adopt\u00e9 une loi contre le gaspillage alimentaire, concernant essentiellement les grandes surfaces de super",
		output: "anonyme",
	},
	{
		input:
			"R\u00e9mi a \u00e9t\u00e9 tu\u00e9 par la police dimanche 26 octobre d\u2019un tir de grenade offensive. Ce qui lui est arriv\u00e9 aurait pu arriver \u00e0 n\u2019importe lequel d\u2019entre nou",
		output: "x",
	},
	{
		input:
			"Samedi 1er ao\u00fbt 2015 Alors, on apprend la mort de Michel Tarin. \u00c7a fait chier. Le cancer a emport\u00e9 un camarade, le genre avec qui on n\u2019est pas toujour",
		output: "zadist",
	},
	{
		input:
			"\u00ab\u00a0J\u2019ai \u00e9galement demand\u00e9 des renforts militaires. J\u2019ai \u00e9galement convoqu\u00e9 le Conseil des ministres. Deux d\u00e9cisions seront prises\u00a0: l\u2019\u00e9tat d\u2019urgence se",
		output: "anonyme",
	},
	{
		input:
			"Les quelques 900 personnes, dont de nombreux voisins, qui sont venues participer le week-end dernier \u00e0 de multiples chantiers pour construire l\u2019avenir",
		output: "zadist",
	},
	{
		input:
			"Contre les violences polici\u00e8res, une centaine de personnes s'est rassembl\u00e9e \u00e0 Nantes, devant le tribunal puis Place du Bouffay, en ce lundi pluvieux, ",
		output: "@nonyme",
	},
	{
		input:
			"Marche de la Dignit\u00e9 : l'appel Avec le soutien d'Angela Davis En octobre 2005, \u00e9taient fauch\u00e9es \u00e0 Clichy sous bois, les jeunes vies de Ziad et Bouna, ",
		output: "anonyme",
	},
	{
		input:
			"\u00a0 Toutefois, les attentats meurtriers de novembre 2015 ont port\u00e9 un coup \u00e0 la dynamique engag\u00e9e par la Marche. L\u2019\u00c9tat d\u2019urgence a notamment permis de ",
		output: ".",
	},
	{
		input:
			'"Les \u00e9v\u00e9nements que nous reprenons nous semblent enthousiasmants. Nous nous en sentons solidaires, parce qu\u2019ils vont dans le sens d\u2019un monde qui d\u00e9tru',
		output: "anonyme",
	},
	{
		input:
			"Le 19 mars aura lieu la marche pour la justice et la dignit\u00e9, contre les violences polici\u00e8res et le racisme d\u2019Etat. On esp\u00e8re tou.te.s qu\u2019elle sera ma",
		output: ".",
	},
	{
		input:
			"Nous ne nous \u00e9tions jamais rencontr\u00e9es avant qu'elle apprenne par un interm\u00e9diaire - Yazid Meddad, autre d\u00e9l\u00e9gu\u00e9 - mon histoire et qu'elle d\u00e9cide de m",
		output: "julieamadis",
	},
	{
		input:
			"Nous ne sommes pas tou-te-s l\u00e0, il manque les prisonnier-e-s ! Quelques mots \u00e9crits par des anarchistes de Pandora avant leur arrestation : Pour celle",
		output: "@nonyme",
	},
	{
		input: ". https://zad.nadir.org/spip.php?article4529",
		output: "zadist",
	},
	{
		input:
			"Rendez-vous\u00a0\u00e0\u00a012h\u00a0devant\u00a0la\u00a0pr\u00e9fecture\u00a0\u00e0\u00a0Nantes, ou \u00e0 partir de 13h au croisement de la D39 et de l\u2019ancienne voie ferr\u00e9e \u00e0 la Chapelle sur Erdre, ou \u00e0",
		output: "zadist",
	},
	{
		input:
			"Dans le but de poursuivre cette logique, nous souhaitons que la gestion de ce garage se fasse, au moins dans un premier temps, entre meufs, trans, p\u00e9d",
		output: "zadist",
	},
	{
		input:
			"On a suivi de loin les derni\u00e8res expulsions v\u00e9cues par les militant.e.s sur les terres non-c\u00e9d\u00e9es. Nous souhaitons apporter notre solidarit\u00e9 \u00e0 toutes ",
		output: "zadist",
	},
	{
		input:
			"C\u2019est depuis l\u2019histoire d\u2019un projet d\u2019a\u00e9roport \u00e0 Notre-Dame-des-Landes marqu\u00e9e par le m\u00e9pris des gouvernant.e.s envers celles et ceux qui vivent ici q",
		output: "zadist",
	},
	{
		input:
			"Salut \u00e0 toutes et \u00e0 tous\u00a0! Un lieu feministe, tout proche de la Zad, vient d\u2019ouvrir\u00a0! Le lieu est beau, grand, avec plein d\u2019espaces diff\u00e9rents (hangar",
		output: "anonyme",
	},
	{
		input:
			"\u00a0 A partir du mois de septembre (et non ao\u00fbt, comme pr\u00e9vu initialement), des formations auront lieu \u00e0 la\u00a0ZAD\u00a0tous les week-end, ainsi qu\u2019ailleurs en F",
		output: "zadist",
	},
	{
		input:
			"NON En d\u00e9cembre et janvier la mobilisation Contre l'a\u00e9roport, contre les expulsions A conduit le pouvoir, \u00e0 bout de solutions, A pondre sans vergogne ",
		output: "zadist",
	},
	{
		input:
			"Nous risquons \u00e9galement de manquer de mat\u00e9riel si l'on doit en fournir \u00e0 tous les m\u00e9dics arrivant, venez si possible avec le votre. Vous pouvez faire ",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Les d\u00e9mocraties grecques \u2014 dont on sait qu\u2019elles ne m\u00e9ritent gu\u00e8re ce titre puisque la moiti\u00e9 de la population (les femmes) n\u2019\u00e9tait pas concern\u00e9e, et ",
		output: "-",
	},
	{
		input:
			'En r\u00e9action la PJJ (protection judiciaire de la jeunesse) a \u00e9t\u00e9 tagu\u00e9 "l\'epm tue". Derri\u00e8re le tribunal un autre tag "la justice tue" a \u00e9t\u00e9 vu, et pr\u00e8',
		output: "anonyme",
	},
	{
		input:
			"le 19 mai, la direction Alstom annoncait la suppression de plus de 600 emplois \u00e0 Belfort. Le 6 juin elle annonce 295 nouvelles suppressions d'emploi .",
		output: "anonymous",
	},
	{
		input:
			"Lettre \u00e0 tous les c\u0153urs indomptables \u00c7a m\u2019est difficile de commencer d\u2019\u00e9crire avec tout ce que j\u2019ai \u00e0 communiquer, et encore plus \u00e0 retenir secret; le",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Samedi 17 novembre \u00e0 Paris, on \u00e9tait une trentaine de personnes bien d\u00e9cid\u00e9es \u00e0 exprimer notre solidarit\u00e9 avec les mutins de l'EPM de Lavaur, ainsi qu",
		output: "a",
	},
	{
		input:
			"L\u2019extr\u00eame-droite, et par extension les id\u00e9es nationalistes, r\u00e9actionnaires et stigmatisantes ont la cote chez les plus jeunes \u00e9lecteurs et \u00e9lectrices.",
		output: "anonyme",
	},
	{
		input:
			"\u00a0 Et oui ! Sur d\u00e9cision de justice, s\u2019appuyant sur l\u2019article L412-6 [1], cette tr\u00eave a \u00e9t\u00e9 accord\u00e9e \u00e0, a minima, 14 lieux de vie situ\u00e9s sur la ZAD ou ",
		output: "zadist",
	},
	{
		input:
			"Pourquoi Macron ne finira pas son mandat ? Parce que le r\u00e8gne qui commence est d\u00e9j\u00e0 presque aussi d\u00e9test\u00e9 que celui finissait p\u00e9niblement en mai derni",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le ROI commence \u00e0 se rendre compte que la majorit\u00e9 de la population n'a jamais voulu le voir acc\u00e9der au tr\u00f4ne .... Il envoie son bouffon prendre la pa",
		output: "anonyme",
	},
	{
		input:
			"Les compagnons qui vivent dans l\u2019immeuble occup\u00e9 sont mont\u00e9s sur le toit et en bas il y a eu un groupe de soutien, aussi parce que au d\u00e9but la raison ",
		output: ".",
	},
	{
		input:
			"Il \u00e9tait 4h20 du matin lorsque la d\u00e9tonation a eu lieu. D\u2019une puissance relativement faible, elle n\u2019a fait aucun bless\u00e9. On voir par ailleurs sur des ",
		output: "anonyme",
	},
	{
		input:
			"- 19 juin \u00e0 Nantes. Quelques centaines de personnes se r\u00e9unissent sur une place pour protester contre les ordonnances de Macron. Musique, boissons, bo",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Les chefs d\u2019inculpations nous inqui\u00e8tent car on l\u2019accuse d\u2019une tentative d\u2019homicide sur des agents de police, pour des jets de projectiles. Cette cat\u00e9",
		output: "anonyme",
	},
	{
		input:
			"Parce qu'on est sensible \u00e0 l'appel du collectif syndical contre l'a\u00e9roport et son monde \u00e0 faire\u00a0 un cort\u00e8ge contre le transfert de l'a\u00e9roport de Nante",
		output: "zadist",
	},
	{
		input:
			"Utiliser la m\u00e9taphore de la cord\u00e9e, comme l'a fait Macron hier soir dans son exercice de propagande m\u00e9diatique, r\u00e9introduit \u00e0 la fois l'\u00e9litisme de po",
		output: "*",
	},
	{
		input:
			"Il semblerait qu'un petit groupe de personne se soit fait bloquer \u00e0 la sortie du tribunal avec prise d'identit\u00e9s. Finalement deux personnes se sont fa",
		output: ".",
	},
	{
		input:
			"La cabane \u00ab Palette Palace \u00bb qui a \u00e9t\u00e9 un lieu de r\u00e9unions, de vie depuis le d\u00e9but \u00e0 \u00e9t\u00e9 enti\u00e8rement d\u00e9truite dans un incendie le 5 octobre 2017 autre",
		output: "anonyme",
	},
	{
		input:
			"Le 17 novembre prochain aura lieu \u00e0 Poitiers le proc\u00e8s de neuf personnes accus\u00e9es d\u2019avoir, le 19 mai 2016, \u00ab\u00a0p\u00e9n\u00e9tr\u00e9, circul\u00e9, ou stationn\u00e9, sans auto",
		output: "*",
	},
	{
		input:
			"A en croire ses intentions, cet \u00e9tablissement, administr\u00e9 par la PJJ (Protection Judiciaire de la Jeunesse), prot\u00e8ge et accompagne les jeunes pris dan",
		output: "...",
	},
	{
		input:
			'" Nous savons que nous ne savons rien, mais ce rien nous rend f\u00e9roces "Docteur Ren\u00e9 Laennec - 1781 - 1826 - ( Inventeur du st\u00e9thoscopeet de l\'ausculta',
		output: "patricefaubert",
	},
	{
		input:
			"/// D\u00e9claration de soutien de La Via campesina \u00e0 l'avenir de la zad de Notre-Dame-Des-Landes Depuis presque 50 ans, des paysans et habitants de l'oues",
		output: "zadist",
	},
	{
		input:
			"Carte manifs 10 octobre Ailleurs : Bordeaux : rdv place de la R\u00e9publique \u00e0 11h30 Poitiers : manifestation 14h Porte de Paris LaRochelle : rassemblemen",
		output: "*",
	},
	{
		input:
			"De belles \u00e9nergies ont emerg\u00e9 de ce cort\u00e8ge venu de Villejean, permettant de prendre la t\u00eate de la manif et de ne pas laisser le leaderchip de la mani",
		output: "@nonyme",
	},
	{
		input:
			'Bonjour,Voici en pdf, le No 167, novembre/d\u00e9cembre 2017, du petit journal mobile recto-verso A4"RESISTONS ENSEMBLE" du r\u00e9seau contre les violences pol',
		output: "r\u00e9seaure",
	},
	{
		input:
			'Un collage "la police et la justice d\u00e9fendent les riches", "solidarit\u00e9 avec les inculp\u00e9-e-s de l\'incendie de la keufmobile, libert\u00e9 pour tou-te-s" de ',
		output: ".",
	},
	{
		input:
			"Depuis plusieurs mois, la gendarmerie harc\u00e8le, par des contr\u00f4les quotidiens, nos camarades en lutte \u00e0 Bure contre un projet absurde d\u2019enfouissement de",
		output: "zadist",
	},
	{
		input:
			"R\u00e9cit et r\u00e9flexions autour de la manif sauvage du mercredi 11 octobre 2017 en solidarit\u00e9 avec les condamn\u00e9-e-s de l'affaire de la voiture br\u00fbl\u00e9e du qu",
		output: "anonyme",
	},
	{
		input:
			"Partout dans le monde, les luttes ouvri\u00e8res se multiplient. En Gr\u00e8ce, en Italie, en Allemagne, en Espagne, en Islande, en Grande-Bretagne, en Irlande\u2005",
		output: "unsympathisantducci",
	},
	{
		input:
			"Plusieurs rdv : - 10h devant la cit\u00e9 des congr\u00e8s : contre-rassemblement face aux nantais pour la famille, groupe issu de la manif pour tous - 12h deva",
		output: "anonyme",
	},
	{
		input:
			"Depuis deux jours sur zone tous-tes les occupant-e-s sont sur le qui-vive pour faire face \u00e0 une \u00e9ventuelle expulsion polici\u00e8re le lendemain. Des strat",
		output: "vmc",
	},
	{
		input:
			"Environ 200 personnes s'\u00e9lancent \u00e0 18H sur les grands axes de la ville, ceintur\u00e9es par un dispositif r\u00e9pressif tellement d\u00e9lirant qu'il en devient rid",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"LE MINISTRE DE L'INTERIEUR PORTE PLAINTE NON AU REFOULEMENT DE L'HISTOIRE Le Ministre de l'int\u00e9rieur vient de porter plainte contre X \u00e0 propos d'un co",
		output: "jc",
	},
	{
		input:
			"1 chop\u00e9e sur la zad vendredi matin + 6 chop\u00e9es en manif samedi \u00e0 Nantes. 4 refusent la comparution imm\u00e9diate dont la personne de la zad qui est mainte",
		output: "zadist",
	},
	{
		input:
			"Nous voici, de nouveau, \u00e0 l\u2019approche d\u2019\u00e9lections. Les affiches fleurissent un peu partout, la t\u00e9l\u00e9vision nous assomme de messages, la presse en rempli",
		output: "unsympathisantducci",
	},
	{
		input:
			"Pas de titre pour 10778 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 Au del\u00e0 du caract\u00e8re r\u00e9gionaliste et potentiellement identitaire discutable de cet \u00e9v\u00e9n",
		output: "jackpalmer",
	},
	{
		input:
			"Photo de Rapha\u00ebl Stainville Parachut\u00e9 pour trois jours, Stainville, muni de son baggage d\u2019antigauchisme primaire (forc\u00e9ment, \u00e0 trop fr\u00e9quenter les Le ",
		output: "zadist",
	},
	{
		input:
			"On attend que cette entreprise annonce officiellement qu\u2019elle ne participera plus au projet d\u2019a\u00e9roport. Vous pouvez la contacter au\u00a0: 02 99 69 73 77, ",
		output: "zadist",
	},
	{
		input:
			"Si nous tenons bon, c'est bien gr\u00e2ce \u00e0 la multiplication des actions de solidarit\u00e9s \u00e0 l'\u00e9gard de la zad. Comme les auteurs de ce grand bluff, il nous ",
		output: "zadist",
	},
	{
		input:
			"L\u2019appareil policier et militaire \u00e0 la solde du r\u00e9gime totalitaire et fasciste Iranien de Khamenei et Hassan Rouhani, frappe de nouveau avec la plus ex",
		output: "soliranparis",
	},
	{
		input:
			"R\u00e9cit et r\u00e9flexions autour de la manif sauvage du mercredi 11 octobre 2017 en solidarit\u00e9 avec les condamn\u00e9-e-s de l'affaire de la voiture br\u00fbl\u00e9e du qu",
		output: "anonyme",
	},
	{
		input:
			"L'article annonce 11 jeunes scolaris\u00e9.e.s et d\u00e9voile des pr\u00e9noms. On peut suivre la logique de BZH info. Alors que dimanche se tenait la braderie de R",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Bonjour \u00e0 tous-tes ! Ici en direct de Bure o\u00f9 une op\u00e9ration de perquisition d\u2019ampleur cible diff\u00e9rents lieux. Ils ont notamment saisi la quasi int\u00e9gra",
		output: "vmc",
	},
	{
		input:
			"Licence C.C. by www.contre-faits.org/ Le 10 ao\u00fbt dernier, l'Assembl\u00e9e Nationale a vot\u00e9 la loi dite LRU, relative aux \u00ab libert\u00e9s et responsabilit\u00e9s des",
		output: "imcnantes",
	},
	{
		input:
			"Les Points d'acc\u00e8s au droit sont les visages citoyens, \"de proximit\u00e9\", de la Justice. Justice qui a toujours pour but d'\u00e9craser les pauvres et briser ",
		output: ".",
	},
	{
		input:
			"Monsieur, Nous avons exprim\u00e9 notre satisfaction de votre courrier aux parlementaires et au pr\u00e9fet, leur rappelant leurs responsabilit\u00e9s dans l'accueil",
		output: "pj49",
	},
	{
		input:
			'\u00a0 \u00a0 """" Les liens de ce site ne sont pas les bienvenues sur Indymedia Nantes, vu que Caroline Fourest y participe.""" (modo d\'indynantes comme justif',
		output: "*",
	},
	{
		input:
			"A Paris, une universit\u00e9 est envahie par les CRS, et les occupants pass\u00e9s \u00e0 tabacs. A Rouen, Brest, Tours, ou Bordeaux, des facs sont ferm\u00e9es pour emp\u00ea",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pierre-Alexandre Bouclay, fier de lui sur TV Libert\u00e9s\u2026 La fine \u00e9quipe de TV Libert\u00e9s : Philippe Milliau (A), Martial Bild (B), Arnaud Soyez (C), \u00c9lise",
		output: "lahorde",
	},
	{
		input:
			"Lors de la charge pr\u00e8s de la HSBC : - Un papa et sa petite fille de 2 ans et demie ont \u00e9t\u00e9 braqu\u00e9s au LBD 40. Le papa a perdu deux dents de devant (pr",
		output: "streetmedicnantes",
	},
	{
		input:
			"D\u00e8s le petit matin nous avions su qu\u2019\u00e0 la prison, ils n\u2019\u00e9taient pas du tout au courant qu\u2019il devait avoir une audience ce jour et que donc ce n\u2019\u00e9tait ",
		output: "x",
	},
	{
		input:
			"\u00catre l'homo du PIR, ou ne pas l'\u00eatre Un ultimatum Sur le plateau de l'\u00e9mission Ce soir ou jamais, diffus\u00e9e sur France 2 le 18 mars dernier, Bouteldja ",
		output: "lesamisdejulietteetduprintemps",
	},
	{
		input:
			"Ce n'est pas rare de se retrouver confront\u00e9.es \u00e0 la critique apr\u00e8s une prise de d\u00e9cision dans certaines luttes qui ont cours actuellement sur Nantes. ",
		output: ".",
	},
	{
		input:
			"stickers appos\u00e9s au sein du Palais de Justice de Paris, le 8 novembre 2017, jour du proc\u00e8s Pour en savoir plus : l'appel incrimin\u00e9, le texte suite \u00e0 l",
		output: ".",
	},
	{
		input:
			"On est lundi et comme chanque d\u00e9but semaine, Cayenne prend l'antenne. On est d\u00e9j\u00e0 en ligne donc on vous attend sur\u00a0https://radiocayenne.antirep.net . ",
		output: "radiocayenne",
	},
	{
		input:
			"Le Giro renforce la revendication ill\u00e9gale de souverainet\u00e9 d\u2019Isra\u00ebl sur la ville de J\u00e9rusalem dans son ensemble alors que l\u2019Italie, l\u2019UE, l\u2019ONU et le ",
		output: "bds",
	},
	{
		input:
			'Le 25 novembre, les flics avaient \u00e9t\u00e9 appel\u00e9s par des habitantEs d\'un immeuble parce que leur voisin "p\u00e9tait les plombs" (dixit la presse). Les pompie',
		output: "acab",
	},
	{
		input:
			'Notre pervers, "gande victime" d\'une femme sur qui il a exerc\u00e9 des manipulations et violences psychologiques assez dingues pendant presque trois ans, ',
		output: ".",
	},
	{
		input:
			"Aujourd'hui est rendu le jugement des recours environnementaux contre la construction de l'a\u00e9roport de Notre Dame des Landes. Quels que soient le r\u00e9su",
		output: "zadist",
	},
	{
		input:
			"Pour commencer, nous n'avons pas grand chose \u00e0 dire sur le scandale du jour: quelques tags dans une maison laiss\u00e9e inocup\u00e9e depuis des ann\u00e9es.- pour c",
		output: "zadist",
	},
	{
		input:
			"<!--OHAOFP--><!--OHSOSP--><!--OHSOFP--> Mise \u00e0 jour le 26/03 \u00a0 L\u2019enseignement et la recherche, lieux de premi\u00e8re importance dans le fonctionnement d\u2019u",
		output: "imcnantes",
	},
	{
		input:
			"Notre\u00a0Dame\u00a0des\u00a0Landes\u00a0: La\u00a0Zad,\u00a0un\u00a0bien\u00a0commun\u00a0des\u00a0luttes La lutte contre le projet d'a\u00e9roport et son monde arrive \u00e0 un point crucial. Valls s'affirme",
		output: "cntnantes",
	},
	{
		input:
			"Dans la nuit du 21 d\u00e9cembre, nous avons arpent\u00e9 Seyssins jusqu'\u00e0 l'\u00e9co-quartier Pr\u00e9 Nouvel, chantier d\u00e9marr\u00e9 depuis plusieurs ann\u00e9es, cens\u00e9ment deveni",
		output: "anonyme",
	},
	{
		input:
			"Adresse aux journalistes depuis la ZAD de Notre-Dame-des-Landes Salut \u00e0 toi, petite merde. \u00c7a y est, tu vas enfin couvrir les expulsions de la ZAD de ",
		output: ".",
	},
	{
		input:
			"- 1 personne pour une v\u00e9rification d'identit\u00e9 - 10 personnes en garde \u00e0 vue - 1 personne en d\u00e9grisement (dont on ne sait pas pour le moment si le d\u00e9gr",
		output: "...",
	},
	{
		input:
			"Aujourd'hui, le gouvernement Macron, apr\u00e8s avoir r\u00e9ussi \u00e0 imposer d\u00e8s les premiers mois de son mandat un recul social sans pr\u00e9c\u00e9dent et un passage de ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"p { margin-bottom: 0.25cm; line-height: 120%; }a:link { } La banque \u00e9tait pr\u00e9venue, les m\u00e9dias aussi. Et pourtant, la surprise \u00e9tait grande quand une ",
		output: "gignv",
	},
	{
		input:
			"Dans une atmosph\u00e8re digne d\u2019une mauvaise Cendrillon, un puits se transforme alors en tunnel viet-cong, des b\u00e2tons plant\u00e9s dans un talus en une herse s",
		output: "zadist",
	},
	{
		input:
			"Face au enjeux environnementaux et sociaux d\u00e9cisifs dans lesquels le monde est plong\u00e9, le gouvernement n\u2019a pas plus de l\u00e9gitimit\u00e9 aujourd\u2019hui qu\u2019hier ",
		output: "zadist",
	},
	{
		input:
			"Le mouvement anti-a\u00e9roport a \u00e9t\u00e9 tr\u00e8s r\u00e9actif. De nombreuses personnes des comit\u00e9s de soutien et paysans de la r\u00e9gion \u00e9taient pr\u00e9sentes d\u00e8s 7h du mati",
		output: "zadist",
	},
	{
		input:
			"\u00a0 Aujourd\u2019hui, jeudi 12 mai 2016, \u00e9tudiant\u00b7e\u00b7s et ami\u00b7e\u00b7s de l\u2019\u00e9cole des beaux-arts, d\u00e9cidons d\u2019habiter durablement notre \u00e9cole. Les semaines pass\u00e9es,",
		output: "*",
	},
	{
		input:
			"Ces interventions r\u00e9p\u00e9t\u00e9es ne sont pas \u00e0 prendre \u00e0 la l\u00e9g\u00e8re, d'autant plus si elles ne trouvent pas de r\u00e9ponses en face. Il appara\u00eet de plus en plus ",
		output: "zadist",
	},
	{
		input:
			"A la fin du mouvement universitaire de l\u2019ann\u00e9e 2008-2009 luttant contre la LRU, la mast\u00e9risation et le d\u00e9cret des enseignants chercheurs s\u2019est pos\u00e9e l",
		output: "anonyme",
	},
	{
		input:
			"\u00a0Il s'est d'abord fait aboy\u00e9 dessus sans comprendre ce qui lui \u00e9tait dit, mais comprenant bien qu'on lui laissait entendre qu'il n'avait rien \u00e0 faire ",
		output: ".",
	},
	{
		input:
			"Hommage \u00e0 Clem Tous ceux et celles qui ont eu l'occasion de croiser sa route t\u00e9moignent de sa bont\u00e9, sa g\u00e9n\u00e9rosit\u00e9, sa grande intelligence de coeur et",
		output: "o.p.a",
	},
	{
		input:
			"Les modos (ou un-e modo) confondent l'islam politique (r\u00e9actionnaire - oppos\u00e9 aux principe de la charte indy Nantes) avec la globalit\u00e9 de l'islam (htt",
		output: "*",
	},
	{
		input:
			"Appellistes et racialistes\u00a0: mariage blanc, mariage de raison ou mariage d\u2019amour\u00a0? Depuis 2005, avec la parution de son texte fondateur, l\u2019Appel, se d",
		output: "lesamisdejulietteetduprintemps",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no429-decembre-2017.html Luttes syndicales Du syndicalisme d\u2019accompagnement d\u2019aujourd\u2019hui. Retour d\u2019exp\u00e9rienc",
		output: "cntnantes",
	},
	{
		input:
			"\u00a0 Voici un extrait du texte https://rebellyon.info/Concernant-les-recentes-tentatives-d \u00e9crit sur le site d\u2019info alternative Rebellyon.info en 2012. C",
		output: "anonyme",
	},
	{
		input:
			"Non-blancs, racis\u00e9s, d\u00e9coloniaux... Et Nous, les Alg\u00e9riens Si vous avez d\u00e9j\u00e0 parcouru la prose des racialistes de tous ordres, vous savez que selon le",
		output: "lesamisdejulietteetduprintemps",
	},
	{
		input:
			"Ni dieu ni ma\u00eetre, le documentaire qui remercie Rokhaya Diallo Ramonet produit documentaire pro chef d'Etat + dictateur (Lumumba, Castro) comme Youlou",
		output: "a",
	},
	{
		input:
			"Comme tomb\u00e9s du ciel 4p 13 novembre, 2015, quelques fous de dieu descendent de leur ciel sur Paris pour tirer dans des foules et massacrent environ 13",
		output: ".",
	},
	{
		input:
			"En milieu d\u2019apr\u00e8s-midi, ce samedi, en marge des violents heurts qui devaient se d\u00e9rouler dans le centre ville de Nantes, un certain nombre de groupusc",
		output: "...",
	},
	{
		input:
			"r\u00e9p\u00e9tez : \u00a0 \u00a0 il n'y a que de l'islamophobie pas d'islamistes \u00a0 les musulman-e-s sont actuellement des victimes que l'on ne peut pas critiquer - il n'",
		output: "a",
	},
	{
		input:
			'"""" Les liens de ce site ne sont pas les bienvenues sur Indymedia Nantes, vu que Caroline Fourest y participe.""" (modo d\'indynantes comme justificat',
		output: "*",
	},
	{
		input:
			"C\u2019est ainsi que sont violemment interpell\u00e9s Edwy Plenel, Edgar Morin et Pascal Boniface, sans parler de la v\u00e9ritable chasse aux sorci\u00e8res qui vise le ",
		output: "ujfp",
	},
	{
		input:
			"Rejoignez-nous toute la nuit et demain matin devant Waldeck pour les accueillir \u00e0 leur sortie, et demain \u00e0 14H au tribunal au cas o\u00f9 il y aurait des c",
		output: "x",
	},
	{
		input:
			"Les amis de Juliette et du printemps LA RACE COMME SI VOUS Y \u00c9TIEZ ! Une Soir\u00e9e de printemps chez les racialistes (236 p., Automne 2016) PDF \u00e0 t\u00e9l\u00e9cha",
		output: "lesamisdejulietteetduprintemps",
	},
	{
		input:
			"Il y a bien 10 ans, nous avions rencontr\u00e9\u00a0 le camarade bordiguiste (c\u2019est ainsi qu\u2019il s\u2019\u00e9tait alors pr\u00e9sent\u00e9), clope au bec, boucle d\u2019oreille et baluc",
		output: ".",
	},
	{
		input:
			"Retenu pendant quelques temps, le parquet a donn\u00e9 l\u2019ordre de lever cette \u00ab\u00a0r\u00e9tention\u00a0\u00bb vers 15h. S\u2019agissant du motif\u2026 Lors de la manifestation du 16 n",
		output: ".",
	},
	{
		input:
			"\u00e9lectoralisme capture d'\u00e9cran twitter d'Houria Bouteldja qui tourne depuis plusieurs jours maintenant Sans surprise Houria Bouteldja soutient des cand",
		output: "*",
	},
	{
		input:
			"l'occupation collective (!) des voies Aux diff\u00e9rents r\u00e9seaux et organisations libertaires Camarades, Le 17 novembre prochain aura lieu \u00e0 Poitiers le p",
		output: ".",
	},
	{
		input:
			"Bonjour \u00e0 tous. Je tenais \u00e0 vous signaler plusieurs faits alarmants dont vous devez d\u00e9j\u00e0 \u00eatre au courant. J'ai bien re\u00e7u la lettre de l'enseignante de",
		output: "anonyme",
	},
	{
		input:
			"Cette manifestation a \u00e9galement \u00e9t\u00e9 un laboratoire exp\u00e9rimental pour la police et la justice en mati\u00e8re de r\u00e9pression. La premi\u00e8re en mutilant, la sec",
		output: "zad",
	},
	{
		input:
			"- Poser des barricades avec tout matos \u00e0 main possible (voitures, matos chantier, meubles, d\u00e9boulonner en amont des bancs, poteaux, machines de chanti",
		output: "a",
	},
	{
		input:
			"Ils nous harc\u00e8lent, ils nous radient, ils sont hors la loi, ils nous mettent au travail obligatoire, ils nous imposent le travail gratuit, \u00e7a va p\u00e9ter",
		output: "anonymous",
	},
	{
		input:
			"Nous sommes des participantEs de cette manifestation comme de son processus d\u2019organisation en assembl\u00e9e. Nous n'acceptons pas que les mots pr\u00e9m\u00e2ch\u00e9s d",
		output: "zadist",
	},
	{
		input:
			"Il n'y a rien de tr\u00e8s nouveau l\u00e0-dedans, mais on peut voir que certains mettent une vigueur renouvel\u00e9e depuis quelques semaines \u00e0 tenter de creuser ce",
		output: "zadist",
	},
	{
		input:
			"Dans ce contexte, nous pensons que strat\u00e9giquement il est important d'occuper un maximum de terres. L'enjeu agricole est multiple : montrer notre r\u00e9si",
		output: "zadist",
	},
	{
		input:
			"Camarades, je m'excuse d'embl\u00e9e de ne pas avoir fait de briefing ces derniers jours mais l'internet en Cit\u00e9U marche une fois sur deux. Je vais ici rel",
		output: "guitoto",
	},
	{
		input:
			"Le 24 janvier 2009, une manifestation a \u00e9t\u00e9 organis\u00e9e \u00e0 Barb\u00e8s en solidarit\u00e9 avec tous les prisonniers et r\u00e9volt\u00e9s incarc\u00e9r\u00e9s notamment Isa, Juan et D",
		output: "solidarite",
	},
	{
		input:
			"***MERCREDI 6 MAI : PROC\u00c8S DE 7 DES 15 INCULP\u00c9-E-S SOLIDAIRES DES INCULP\u00c9-E-S*** ///SOYONS NOMBREUX-SES MERCREDI 6 MAI A 9H00 \u00c0 LA 24-1\u00c8ME CHAMBRE DU ",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Suite \u00e0 cette audition, il a \u00e9t\u00e9 mis en examen pour une s\u00e9rie de sabotages par incendie sur des armoires \u00e9lectriques de signalisation qui ont paralys\u00e9",
		output: "anonyme",
	},
	{
		input:
			"La nuit du 18 au 19 janvier, le distributeur de la Banque Populaire rue d\u2019Alesia (14\u00e8me), le distributeur et toutes les vitres de la Soci\u00e9t\u00e9 G\u00e9n\u00e9rale ",
		output: "solidarite",
	},
	{
		input:
			"fresne01 Paris-Fresnes, malgr\u00e9 la flicaille Aujourd'hui, mercredi 2 juillet, s'est d\u00e9roul\u00e9e \u00e0 Fresnes l'action de solidarit\u00e9 avec Isa, Juan et tous le",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Dans la nuit du dimanche 23 au lundi 24 janvier, l'appel du front de lib\u00e9ration des murs ( https://paris.indymedia.org/spip.php?article5280 ) a \u00e9t\u00e9 en",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 8605 Pas de titre pour 8604 Pas de titre pour 8603 Pas de titre pour 8602 Pas de titre pour 8601 Pas de titre pour 8600 Pas de titre",
		output: "anonyme",
	},
	{
		input:
			"Cette soir\u00e9e de solidarit\u00e9 a notamment pour but de r\u00e9colter de la thune pour aider aux proc\u00e8s des nombreux inculp\u00e9s arr\u00eat\u00e9s \u00e0 la manifestation du 24 j",
		output: "anonyme",
	},
	{
		input:
			"INCULP\u00c9-E-S SOLIDAIRES DES INCULP\u00c9-E-S : Les 7 qui passaient en proc\u00e8s le 6 mai suite \u00e0 la manifestation du 24 janvier 2009 \u00e0 Barb\u00e8s ont \u00e9t\u00e9 relax\u00e9s. ",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Jonction entre le rassemblement et la manif lyc\u00e9enne Rassemblement devant le tribunal administratif Ce matin, \u00e0 10h, le rassemblement de soutien \u00e0 Bru",
		output: "anonyme",
	},
	{
		input:
			"Le 14 octobre a eu lieu le proc\u00e8s concernant la manifestation de Fresnes du 2 juillet 2008. Il s\u2019est d\u00e9roul\u00e9 en pr\u00e9sence de nombreuses personnes solid",
		output: "anonyme",
	},
	{
		input:
			"Du sabotage consid\u00e9r\u00e9 comme un des Beaux Arts Il faut vraiment \u00eatre aveugle pour ne pas voir dans le sabotage une arme classique des exploit\u00e9s. Il fau",
		output: "solidarite",
	},
	{
		input:
			"D\u00e9but du texte: Pour traverser l'\u00e9paisseur \u00e9touffante de cet opuscule de racialist-fantasy, il semble utile d'en \u00e9tablir un parcours de lecture. On ne",
		output: "lesamisdejulietteetduprintemps",
	},
	{
		input:
			"\u00ab Libert\u00e9 pour tous les enferm\u00e9s \u00bb, intervention en direct sur France Culture Le 14 janvier 2009, vers 19 heure, un petit groupe de personnes ont fait",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 8534 Pas de titre pour 8533 Appel \u00e0 une semaine de solidarit\u00e9 sans fronti\u00e8re avec Isa et tous les prisonniers du 18 au 25 janvier 20",
		output: "anonyme",
	},
	{
		input:
			"Paris : autre action de solidarit\u00e9 Mercredi 21 au soir \u00e0 Paris, les vitrines du local PS rue de Gergovie (14) et UMP rue Pleyel (12) ont \u00e9t\u00e9 d\u00e9truites",
		output: "solidarite",
	},
	{
		input:
			"Alors que le secteur de l\u2019Education nationale (EN) est particuli\u00e8rement vis\u00e9 avec des suppressions massives de postes d\u2019enseignants, de surveillants, ",
		output: "unsympathisantducci",
	},
	{
		input:
			'\u00a0 " Les r\u00e9fugi\u00e9.e.s je suis pour hein, mais on ne peut pas accueillir toute la mis\u00e8re du monde!" Ce Poncif rocardien connu, souvent amput\u00e9 de sa fin, ',
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Pour les caravanes\u00a0: 1) La Carav\u00e9lo par la V\u00e9lOdyss\u00e9e d\u00e9part de Bayonne le 26 juin 26/06 juin Bayonne vers L\u00e9on 55 km , 27/06 juin L\u00e9on vers Gastes 67",
		output: "zadist",
	},
	{
		input:
			"Depuis que furent r\u00e9v\u00e9l\u00e9es les pratiques d\u2019esclavage pratiqu\u00e9es sur ces chantiers, Vinci a continu\u00e9 d\u2019engranger les profits sans que l\u2019Internationale ",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 112 Pas de titre pour 117 Un Forum Social Local est pr\u00e9vu a Rennes du 14 mai au 18 Mai, ca commencera par un concert d'ouverture le ",
		output: "anonymous",
	},
	{
		input:
			"Un peu en vrac, en voil\u00e0 quelques unes\u00a0: Est-ce qu\u2019on peut \u00ab\u00a0\u00eatre autonome\u00a0\u00bb (tout court, du genre \u00ab\u00a0autonome dans l\u2019absolu\u00a0\u00bb, si une telle expression",
		output: "anonyme",
	},
	{
		input:
			"\u00a0 L'acte de naissance dans la rue du Front Social est annonc\u00e9 pour ce lundi 19 juin, lendemain des \u00e9lections. Par une chaleur \u00e9crasante, entre 3 et 40",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			'"Fourest n\'est pas la bienvenue"\u00a0\u00a0 \u00a0 \u00a0 alors que vous laissez passer des islamistes, des \u00e9lectoralistes, des antis\u00e9mites, des islamo-gauchistes, des h',
		output: "*",
	},
	{
		input:
			"Le projet urbain des Gohards arrive bient\u00f4t \u00e0 sa phase de r\u00e9alisation. On parle bien ici d'un projet urbain, d'un projet qui va notamment couler sous ",
		output: "roncier",
	},
	{
		input:
			"Nulle qu\u00eate d\u2019autarcie, ce repli cauchemardesque\u00a0! Il s\u2019agit depuis ce bocage de participer \u00e0 un mouvement r\u00e9volutionnaire qui d\u00e9borde le territoire d",
		output: "zadist",
	},
	{
		input:
			"On voulait \u00e9crire sur ce sujet probl\u00e9matique puis on a lu \u00e7a https://nantes.indymedia.org/articles/32335#comment-274220 \u00a0 Mais comme les modos d\u00e9clare",
		output: "*",
	},
	{
		input:
			"\u00c0 l\u2019initiative de l\u2019INHESJ (L\u2019Institut national des hautes \u00e9tudes de la s\u00e9curit\u00e9 et de la justice), un ensemble de recherches ont \u00e9t\u00e9 expos\u00e9es dans le",
		output: "@nonyme",
	},
	{
		input:
			"Commen\u00e7ons avec le plus affligeant : la d\u00e9p\u00eache AFP r\u00e9dig\u00e9e par M. Paul Aubriat \u2013 nous ne sommes pas une soixantaine mais 700 selon les cantines qui s",
		output: "@nonyme",
	},
	{
		input:
			"Rencontres, films, d\u00e9bats, concerts le 17 mai de 14h \u00e0 23h \u00e0 la Maison de quartier de Villejean \u00e0 l'initiative du claaac G8 35 (FA, AL, CNT, SCALP, HU",
		output: "anonymous",
	},
	{
		input:
			"A toutes et \u00e0 tous, Au moment o\u00f9 vous lirez ce message, une nouvelle maison pour lancer une habitation et un projet de conserverie auto-g\u00e9r\u00e9e, est en ",
		output: "zadist",
	},
	{
		input:
			"TOUTES LES INFOS DU PROJET D\u2019ARBORETUM dans le dossier PDF (en bas de page) ou sur https://zad.nadir.org/spip.php?article1926 L'appel des Lutins et Lu",
		output: "zadist",
	},
	{
		input:
			"2/ A l'heure o\u00f9 les d\u00e9cideurs pataugent, o\u00f9 le projet est comme gel\u00e9 dans une sorte de moratoire qui ne dit pas son nom, nous disposons d'une fen\u00eatre ",
		output: "zad",
	},
	{
		input:
			"\u00c0 tous les comit\u00e9s de soutien et sympathisant-e-s qui s'opposent au projet d'a\u00e9roport de NDDL Informations sur la situation juridique de la lutte au 3",
		output: "anonyme",
	},
	{
		input:
			"Vivre du commun sur la ZAD\u00a0: \u00ab\u00a0grands moments\u00a0\u00bb et chantiers collectifs La r\u00e9sistance \u00e0 l\u2019op\u00e9ration C\u00e9sar a rassembl\u00e9 sur la ZAD des gens venus d\u2019hori",
		output: "zadist",
	},
	{
		input:
			"La pauvret\u00e9C'est surtout de la d\u00e9pendanceLa maladieC'est surtout de la d\u00e9pendanceEt des autres, de l'indiff\u00e9renceLa soci\u00e9t\u00e9 du march\u00e9Le march\u00e9 de la s",
		output: "patricefaubert",
	},
	{
		input:
			"\u2013 Si le projet est abandonn\u00e9, nous souhaitons f\u00eater cela massivement dans la rue. \u2013 Si le projet est maintenu, nous appelons \u00e0 marquer largement notre",
		output: "cnca",
	},
	{
		input:
			"Dans Nantes et sa r\u00e9gion, plusieurs \u00e9piceries (GASE) et groupements d\u2019achats autog\u00e9r\u00e9s ont vu le jour ces derni\u00e8res ann\u00e9es. Ces initiatives offrent un",
		output: "zadist",
	},
	{
		input:
			"La prison \u00e0 la maison ? quelques notes sur le contr\u00f4le judiciaire... ------------------------------------------------------------ Brochure (pdf de 8 p",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Dans la nuit du 1er mai, le distributeur de la banque populaire, rue Estienne d\u2019Orves au Pr\u00e9-Saint-Gervais (93) est parti en cendre. La meilleure d\u00e9fe",
		output: "anonyme",
	},
	{
		input:
			"Coups de soleil pour les touristes, Coup de matraque pour les r\u00e9volt\u00e9s L\u2019Etat fran\u00e7ais a soutenu le gouvernement de Ben Ali jusqu\u2019\u00e0 la derni\u00e8re second",
		output: "solidarite",
	},
	{
		input:
			"La fin des illusions Les fins de mois sont d\u00e9j\u00e0 difficiles \u00e0 boucler, et voil\u00e0 qu\u2019on nous promet de tous c\u00f4t\u00e9s une nouvelle cure d\u2019aust\u00e9rit\u00e9 \u00e0 ingurgi",
		output: "solidarite",
	},
	{
		input:
			"C\u2019\u00e9tait rue de Clignancourt, devant le commissariat du 18\u00e8 arrondissement. Sous une bagnole de flics (une d\u00e9panneuse), des bouteilles d\u2019essence et des",
		output: "anonyme",
	},
	{
		input:
			"Ainsi, Bruno, d\u00e9j\u00e0 incarc\u00e9r\u00e9 une 1\u00e8re fois en 2008 pour avoir transport\u00e9 des fumig\u00e8nes \u00e0 une manifestation devant le centre de r\u00e9tention de Vincennes ",
		output: "solidarit\u00e9",
	},
	{
		input:
			"L\u2019islam au sein des m\u00e9dias fran\u00e7ais est un sujet incontournable et en permanence ressass\u00e9. Les journalistes depuis des d\u00e9cennies nous abreuvent du \u00ab\u00a0p",
		output: "antifa",
	},
	{
		input:
			"Vous trouverez dans les commentaires ci-dessous un fil infos r\u00e9alis\u00e9 principalement \u00e0 partir de l'infotraflic de radio klaxon. L'infotraflic des semai",
		output: "anonyme",
	},
	{
		input:
			"L'immigration est un th\u00e8me \u00e0 ce point passionnel dans notre pays qu'il devient difficile de faire sereinement le partage entre les faits \u00e9tablis et le",
		output: "anonymous",
	},
	{
		input:
			"Pas de titre pour 12980 Pas de titre pour 12979 - 10h34 :Y\u2019a comme une bruit d\u2019h\u00e9lico dans l\u2019air... - 9h29 : Les camarades pr\u00e9sents sur le terrain on ",
		output: "zadist",
	},
	{
		input:
			"La pr\u00e9fecture a par ailleurs publi\u00e9 5 arr\u00eat\u00e9s (source) pour la p\u00e9riode du 18 au 25 janvier 2018 : Arr\u00eat\u00e9 pr\u00e9fectoral du 17 janvier 2018 portant interd",
		output: "acab",
	},
	{
		input:
			"Ayant \u00e9t\u00e9 condamn\u00e9 \u00e0 une peine sup\u00e9rieure \u00e0 2 ans, il a \u00e9t\u00e9 transf\u00e9r\u00e9, entraves aux pieds, de la Maison d'Arr\u00eat de Fleury-M\u00e9rogis au Centre de D\u00e9tenti",
		output: ".",
	},
	{
		input:
			"Ci-dessous l'appel \u00e0 dons : https://www.helloasso.com/associations/les-habitants-vigilants/collectes/une-maison-vigilante-dans-le-fief-de-l-andra-a-go",
		output: ".",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no432-mars-2018.html Luttes syndicales Les vieux/vieilles sacrifi\u00e9.es \u00e0 la rentabilit\u00e9, EHPAD et ADMR\u00a0: urgen",
		output: "cntnantes",
	},
	{
		input:
			"Ce qui suit montre l'analyse du CPE comme une pr\u00e9carisation suppl\u00e9mentaires qui touchera aussi les dipl\u00f4m\u00e9s. trouv\u00e9 sur le site de l'Association Fran\u00e7",
		output: "anonymous",
	},
	{
		input:
			"GRANDE VICTOIRE LA RECTRICE VOLEUSE PROTEGEE PAR L'OTAN, HOLLANDE, HAMON ET BELKACEM Une grande victoire pour les enfants battus par leurs professeurs",
		output: "julieamadis",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no427-octobre-2017.html Luttes syndicales Conditions de travail p\u00e9nibles sur le chantier du m\u00e9tro rennais P10",
		output: "cntnantes",
	},
	{
		input:
			"En affirmant que J\u00e9rusalem, dont l\u2019occupation depuis 1967 a \u00e9t\u00e9 d\u00e9clar\u00e9e ill\u00e9gale par tous les textes internationaux, est la capitale d\u2019Isra\u00ebl, Trump ",
		output: "ujfp",
	},
	{
		input:
			"Tous les faits diversSont r\u00e9v\u00e9lateurs de la soci\u00e9t\u00e9Qu'ils soient ordinaires ou extraordinairesIls permettent de la jaugerFinalementIl faut de la d\u00e9lin",
		output: "patricefaubert",
	},
	{
		input:
			"Au fil des jours, je croise de plus en plus de personnes qui me disent qu\u2019elles ont des bronchites qui s\u2019\u00e9ternisent, des difficult\u00e9s respiratoires au ",
		output: "...",
	},
	{
		input:
			"Strasbourg- Rassemblement \u00e0 l'appel d'organisations pro-palestiniennes et turques place kleber. Environ 500 personnes au d\u00e9but. D\u00e9part en manif appare",
		output: "guitoto",
	},
	{
		input:
			"BDS, C\u2019EST QUOI\u00a0? \u00ab\u00a0BDS\u00a0\u00bb fait r\u00e9f\u00e9rence aux termes Boycott, D\u00e9sinvestissement, Sanctions. Il a pour origine une campagne lanc\u00e9e en 2005 par une tr\u00e8s ",
		output: "bds",
	},
	{
		input:
			"\u00ab\u00a0L\u2019Observatoire de la libert\u00e9 de cr\u00e9ation s\u2019alarme d\u2019une nouvelle forme de censure venue d\u2019associations antiracistes ou f\u00e9ministes\u00a0\u00bb, publie\u00a0Lib\u00e9rati",
		output: "collectif",
	},
	{
		input:
			"- la quasi-totalit\u00e9 des habitants des bourgs alentours est fermement oppos\u00e9e au projet d'a\u00e9roport. - une tr\u00e8s grande partie d'entre eux entretient des",
		output: "zadist",
	},
	{
		input:
			"Photo : ValK Vous trouverez dans les commentaires ci-dessous le fil infos r\u00e9alis\u00e9 principalement \u00e0 partir de l'infotraflic de radio klaxon. L'infotraf",
		output: "anonyme",
	},
	{
		input:
			"Au cours de longues ann\u00e9es de lutte finalement victorieuse, le mouvement dans son ensemble a construit un projet de territoire soucieux des communs, d",
		output: "zadist",
	},
	{
		input:
			"La nature de nos activit\u00e9s est bien connue\u00a0: lutter pour la justice et l\u2019\u00e9galit\u00e9 de droits, contre le racisme, ici en France et l\u00e0-bas en Isra\u00ebl-Pales",
		output: "bureaunationaldel\u2019ujfp",
	},
	{
		input:
			'(oui y\'a un jeu de mot dans le titre...) Au mois de janvier dernier, le "Comit\u00e9 de pilotage pour un avenir sans a\u00e9roport" annulait l\u2019appel d\u2019offres la',
		output: "zadist",
	},
	{
		input:
			"Ce film-fronti\u00e8res entre entretiens r\u00e9flexifs, fictions, litt\u00e9ratures, \u0153uvres picturales et cr\u00e9ations sonores s\u2019articule autour de onze chapitres (68 ",
		output: "anonyme",
	},
	{
		input:
			"Une complicit\u00e9 entre les dirigeants fran\u00e7ais et Isra\u00ebl qui s\u2019est affirm\u00e9e d\u2019ann\u00e9es en ann\u00e9es. Certains ont sans doute en m\u00e9moire la politique \u00e9trang\u00e8r",
		output: "pierrestambul",
	},
	{
		input:
			"L\u2019image est idyllique. Dans un paysage isra\u00e9lien marqu\u00e9 par la banalisation des manifestations racistes, on ne peut que se r\u00e9jouir lorsque des chants ",
		output: "ujfp",
	},
	{
		input:
			"Apr\u00e8s avoir discut\u00e9 avec la cantine, le groupe s\u00e9rigraphie, etc, voici un autre groupe actif sur la ZAD\u00a0: la legal team, un outil collectif d\u2019autonomi",
		output: ".",
	},
	{
		input:
			"Le projet autoblog a pour but d\u2019aider \u00e0 r\u00e9pliquer automatiquement les articles partout sur le web, bien s\u00fbr \u00e0 une \u00e9chelle plus modeste que ce qui a \u00e9t",
		output: "o.p.a",
	},
	{
		input:
			"Il n\u2019y a pas eu d\u2019appel des condamnations prononc\u00e9es le 11 octobre dans l\u2019affaire de la keufmobile br\u00fbl\u00e9e le 18 mai 2016. Celles-ci sont donc d\u00e9finiti",
		output: ".",
	},
	{
		input:
			"Le socialisme sauvage Essai sur l\u2019auto organisation et la democratie directe dans les luttes de 1789 \u00e0 nos jours D\u00e9bat avec Charles Reeve Le samedi 28",
		output: "-",
	},
	{
		input:
			"Des blocages des routes d'acc\u00e8s Des incendies de barricades, de lieux de vie, de constructions, de v\u00e9hicules, de f\u00f4ret Des agressions physiques Des me",
		output: "anonyme",
	},
	{
		input:
			"Tr\u00e8s chers camarades le 19/12/2012 Beaucoup d\u2019\u00e9motion sort de votre lettre. Je ne peux m\u2019emp\u00eacher de verser des larmes en la lisant. Ces m\u00eames larmes ",
		output: "zadist",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no434-mai-2018.html LUTTES SYNDICALES Assurance ch\u00f4mage\u00a0; les casseurs redoublent d\u2019efforts p.2&3 La soci\u00e9t\u00e9 ",
		output: "cntnantes",
	},
	{
		input:
			"Tsahal : une arm\u00e9e de tueurs d'enfants Les assassins pyromanes Trump et N\u00e9tanyahou mettent \u00e0 feu et \u00e0 sang le Proche-Orient en inaugurant l\u2019ambassade ",
		output: "bureaunationaldel\u2019ujfp",
	},
	{
		input:
			"Alors qu'on est toujours plus nombreu.ses \u00e0 \u00eatre confront\u00e9.es \u00e0 la prison, que l'Etat planifie la construction de nouvelles taules et qu'il \u00e9tend touj",
		output: ".",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no426-septembre-2017.html Luttes syndicales Tenir gr\u00e2ce \u00e0 la solidarit\u00e9\u00a0: Contre la mise \u00e0 pied d\u2019une posti\u00e8r",
		output: "cntnantes",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no-419-janvier-2017.html SOMMAIRE Luttes syndicales ESA\u00a0: la CNT gagne le premier round\u00a0! P3 Thales joue la d",
		output: "cntnantes",
	},
	{
		input:
			"C'est reparti pour un nouveau concours \u00e9lectoral de la plus grande entourloupe et de la pire hypocrisie. Difficile de passer au travers, entre la t\u00e9l\u00e9",
		output: "anonyme",
	},
	{
		input:
			"M\u00eame si nous ne comprenons pas toujours pourquoi la Zad est devenue un tel symbole, nous esp\u00e9rons qu\u2019une fois encore sa d\u00e9fense puisse \u00eatre un point d",
		output: "anonyme",
	},
	{
		input:
			"Alors on est un petit groupe de personnes qui vit sur la ZAD depuis quelques ann\u00e9es, r\u00e9uni par l\u2019envie de recueillir d\u2019autres voix\u00a0: des voix qui ne s",
		output: "zadist",
	},
	{
		input:
			"Public / priv\u00e9 : toute s & tous en gr\u00e8ve le 9 avril contre la loi Macron et l'aust\u00e9rit\u00e9 ! Le gouvernement, toujours aussi prompt \u00e0 satisfaire les d\u00e9si",
		output: "cntnantes",
	},
	{
		input:
			"Apr\u00e8s une fouille au corps, 15 personnes peuvent partir, 5 restent l\u00e0, dans l\u2019attente, sans raison, pendant plus de 40 minutes, subissant les pression",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Mat\u00e9riel r\u00e9cup\u00e9r\u00e9 (cam\u00e9ra cach\u00e9e, micro, bo\u00eetier) Captures des prises de vue Il s\u2019est tout de suite pr\u00e9sent\u00e9 comme \u00e9tant Damien Rigaud, viticulteur da",
		output: "anonyme",
	},
	{
		input:
			"Guillotine pochoir Il nous semble archa\u00efque et anti-\u00e9galitaire que des personnes se pensent sup\u00e9rieur-e-s et choisi-e-s par un ou des dieux. Ceci appe",
		output: "*",
	},
	{
		input:
			"Des transports collectifs s'organisent de diff\u00e9rentes villes pour se rendre \u00e0 la manifestation \u00e0 Tours, le samedi 15 janvier, au d\u00e9part de la place de",
		output: "antifa",
	},
	{
		input:
			"En tant qu\u2019\u00e9quipe medic on voulait transmettre ce que l\u2019on a vu aujourd\u2019hui. Alors qu\u2019hier on celebrait la lib\u00e9ration du carrefour de la Saulce deux j",
		output: "zadist",
	},
	{
		input:
			"La Marche doit envoyer un signal fort \u00e0 ce gouvernement qui maltraite quotidiennement un trop grand nombre de ses citoyen-ne-s \u2013 des contr\u00f4les au faci",
		output: "ujfp",
	},
	{
		input:
			"La Conf\u00e9d\u00e9ration Paysanne 44 a choisi, par le biais de l'organisme CAP 44, de participer \u00e0 la mise en place du projet urbain des Gohards, dans le cadr",
		output: "roncier",
	},
	{
		input:
			"les 100-noms Lundi. Il pleut sur Paris. Ce matin, 2500 hommes en armes ont envahit un petit bout de bocage nantais, d'autant plus insignifiant que les",
		output: ".",
	},
	{
		input:
			"SOMMAIRE : * \u00c9dito\u00a0* Apr\u00e8s les crimes, la volont\u00e9 d'un peuple debout* Femmes de ?irnak\u00a0* Guerre d\u00e9clar\u00e9e \u00e0 Sur\u00a0* Fermeture des m\u00e9dias et \u00ab g\u00e9nocide po",
		output: "merhabahevalno",
	},
	{
		input:
			"Apr\u00e8s avoir expuls\u00e9 plus de 5 lieux occup\u00e9s ces derni\u00e8res semaines, ces contr\u00f4les syst\u00e9matiques sont cibl\u00e9s et nous interpellent sur la nouvelle strat",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"Trop souvent le m\u00eame sc\u00e9nario et les m\u00eames \u00e9l\u00e9ments : - Contr\u00f4le CRS sur un v\u00e9hicule de jeunes vers 20 h 30, ce mardi 3 juillet 2018, rue des Plantes ",
		output: "a",
	},
	{
		input:
			"Le Collectif Vigilance Antifasciste 22 (CVA22) vient de recevoir un courrier des lanceurSEs d\u2019alerte, dans lequel ilellles d\u00e9noncent d\u2019un c\u00f4t\u00e9 un dysf",
		output: "*",
	},
	{
		input:
			"Ce dernier a r\u00e9pondu \u00e0 notre sollicitation. Afin d\u2019approfondir ce travail, nous avons besoin de plus de t\u00e9moignages de personnes bless\u00e9es (nominatifs ",
		output: "zadist",
	},
	{
		input:
			"Pour commencer, petite promenade dans la n\u00e9buleuse juridique\u2026 L\u2019ann\u00e9e derni\u00e8re, le projet de Center Parcs avait \u00e9t\u00e9 bloqu\u00e9 sur deux points\u00a0: \u00e0 propos ",
		output: "@nonyme",
	},
	{
		input:
			"Il y a une guerre \u00e0 2 250 kilom\u00e8tres d\u2019ici. Une guerre combattue \u00e0 armes in\u00e9gales. D\u2019une part, l\u2019une des arm\u00e9es les plus redoutables du monde, poss\u00e9da",
		output: "anonyme",
	},
	{
		input:
			"Deux fr\u00e8res fran\u00e7ais d\u2019origine portugaise qui habitent depuis 3 ans \u00e0 Othis, qui \u00e9taient d\u2019anciens habitants d\u2019Aulnay-sous-bois du quartier o\u00f9 la poli",
		output: "*",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no436-ete-2018.html Luttes syndicales Fonctionnaires \u00e0 la casse Apr\u00e8s la SNCF et le rapport Spinetta, le rapp",
		output: "cntnantes",
	},
	{
		input:
			"Contrairement \u00e0 ce qu'avait annonc\u00e9 le nouveau directeur de France Inter, l'\u00e9mission de Daniel Mermet \u00abL\u00e0-bas si j'y suis\u00bb ne figurerait pas dans la g",
		output: "anonymous",
	},
	{
		input:
			"Une contre-manifestation est appel\u00e9e le m\u00eame jour par le collectif Urgence notre Police assassine. L\u2019Etat ne tergiverse pas quant \u00e0 lui. La veille, la",
		output: ".",
	},
	{
		input:
			"LE PRIX DES TRANSPORTS EN COMMUN AUGMENTE. ENCORE ... En 10 ans, c'est la dixi\u00e8me hausse des prix des transports en commun \u00e0 Nantes. Ann\u00e9e apr\u00e8s ann\u00e9e",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Une seule casse, la casse sociale\u00a0! Jeudi 24 mars \u00e0 Nantes, pr\u00e8s de 10 000 manifestantEs ont d\u00e9fil\u00e9 contre la loi travail, dont un nombre consid\u00e9rable",
		output: "cntnantes",
	},
	{
		input:
			"Automne 2014 : R\u00e9mi Fraisse est tu\u00e9 par une grenade lanc\u00e9e par la gendarmerie \u00e0 Sivens. Suite \u00e0 ce drame, les manifestations organis\u00e9es contre les vio",
		output: "anonyme",
	},
	{
		input:
			"Vous trouverez dans les commentaires ci-dessous un fil infos r\u00e9alis\u00e9 principalement \u00e0 partir de l'infotraflic de radio klaxon. L'infotraflic des semai",
		output: "anonyme",
	},
	{
		input:
			'"Justice pour Th\u00e9o - Solidarit\u00e9 avec Aulnay Nantes : rendez-vous samedi 11 f\u00e9vrier, 16H30, Pr\u00e9fecture Jeudi dernier \u00e0 Aulnay-sous-Bois Th\u00e9o \u00e9tait viol',
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le d\u00e9tail du d\u00e9lib\u00e9r\u00e9 des comparutions imm\u00e9diates est le suivant : - La personne arr\u00eat\u00e9e \u00e0 15h15 a \u00e9t\u00e9 condamnn\u00e9e \u00e0 5 mois d\u2019emprisonnement ferme + 1 ",
		output: "zadist",
	},
	{
		input:
			"Ces autoroutes auraient du \u00eatre gratuites depuis une trentaine d\u2019ann\u00e9es. Aujourd\u2019hui, elles profitent, via les p\u00e9ages, aux entreprises priv\u00e9es, notamm",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"Dans ce contexte, la pr\u00e9sidence de l'universit\u00e9 de Nantes a d\u00e9cid\u00e9 de d\u00e9localiser les examens. Une partie d'entre eux se passe \u00e0 la trocardi\u00e8re, \u00e0 Rez",
		output: "acab",
	},
	{
		input:
			"La page de soutien \u00e0 Jean Jacques Reboux : https://www.facebook.com/solidariteavecJJRebouxpoursuiviparBrigitteLamy Son texte suite \u00e0 son audition par ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Rassemblement solidaire et info sur le march\u00e9 dominical de la Batte \u00e0 Li\u00e8ge Nous sommes de tout coeur avec Vous",
		output: "camille",
	},
	{
		input:
			"Bonjour \u00e0 tous nous avons re\u00e7u un message de la part du site de Paris luttes info qui publie tous les mois le bulletin de RE, y est relev\u00e9e une erreur",
		output: "r\u00e9seaur\u00e9sistonsensemble",
	},
	{
		input:
			"Quimper R\u00e9sistance : elle est belle, la France ! Le premier combat politique de Claudine Dupont-Tingaud (CDT), est celui de la d\u00e9fense de l\u2019Alg\u00e9rie fr",
		output: "lahorde",
	},
	{
		input:
			"ce prisonnier palestinien en gr\u00e8ve de la faim depuis le 18 d\u00e9cembre 2011 est d\u00e9sormais en danger de mort pour physicians for human rights ( m\u00e9decins p",
		output: "ahadhaam",
	},
	{
		input:
			"Cedar est l'anarchiste canadien-ne qui a \u00e9t\u00e9 arr\u00eat\u00e9-e d\u00e9but avril \u00e0 Hamilton et mis en prison. Ille est accus\u00e9e de ce qui ressemble en France \u00e0 l'asso",
		output: "*",
	},
	{
		input:
			"Le carrefour dit de la Saulce (entre la D81 et la route des Fosses Noires/Chemin de Suez) \u00e9tait occup\u00e9 en permanence depuis 146 jours. Cette occupatio",
		output: "zadist",
	},
	{
		input:
			"COURS, GILET JAUNE, LE VIEUX MONDE EST DERRI\u00c8RE TOI ! Depuis quelques jours, le mouvement h\u00e9t\u00e9rog\u00e8ne des gilets jaunes semble en train d\u2019\u00e9voluer et de",
		output: "yannisyoulountas",
	},
	{
		input:
			"Peu de d\u00e9tails pour l'instant, rien ne permet d'indiquer qu'elles seront effectivement poursuivies. Il s'agit en tout cas d'un d\u00e9monstration de force,",
		output: ".",
	},
	{
		input:
			"Pas de titre pour 12400 Les grenades des gardes mobiles ont d\u00e9j\u00e0 fait de nombreux-ses bless\u00e9-e-s. Plus d\u2019une centaines pour les seules journ\u00e9es du 24 ",
		output: "cntnantes",
	},
	{
		input:
			"Lundi 15 avril, Pr\u00e9fecture de Bordeaux, 18h, Rassemblement de soutien \u00e0 la ZAD",
		output: "anonyme",
	},
	{
		input:
			"Depuis cet \u00e9v\u00e8nement, Cyril est toujours emprisonn\u00e9 en attente de proc\u00e8s en appel. Il a \u00e9t\u00e9 condamn\u00e9 notamment \u00e0 cinq mois d\u2019emprisonnement faute d\u2019un",
		output: "zadist",
	},
	{
		input:
			"Il est ind\u00e9niable que le projet d'a\u00e9roport Grand Ouest port\u00e9 par Vinci et Jean-Marc Ayrault a eu de nombreuses retomb\u00e9es positives : - Pendant plus de",
		output: "camille",
	},
	{
		input:
			"Week-end d'actions anti-Vinci A l'occasion du week-end d'action d\u00e9centralis\u00e9es contre Vinci et son monde lanc\u00e9 par le mouvement d'occupation de la ZAD",
		output: "o.p.a",
	},
	{
		input:
			"Alors que Notre-Dame-des Landes ne fait plus la une des m\u00e9dias. Alors que les derni\u00e8res expulsions datent d\u2019il y a d\u00e9j\u00e0 4 mois. Alors que l\u2019hiver touc",
		output: "zadist",
	},
	{
		input:
			"Saint-Astier, c'est un village fant\u00f4me en Dordogne, transform\u00e9 en centre d\u2019entra\u00eenement grandeur nature pour les polices du monde entier. Dans des rue",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le premier week-end de 2013, s\u2019est tenu un grand festival de musique et de lutte contre la construction d\u2019un nouvel a\u00e9roport \u00e0 c\u00f4t\u00e9 de Nantes. Plusieu",
		output: "ibrahima",
	},
	{
		input:
			"Pas de titre pour 12577 Et pourtant, malgr\u00e9 la r\u00e9pressions tous azimuts, nous ne rel\u00e2cherons pas la pression, et continuerons \u00e0 faire vivre et avancer",
		output: "x",
	},
	{
		input:
			"Ce texte est l\u2019\u0153uvre de quelques personnes pr\u00e9sentes lors de moments d\u2019affrontements avec la police sur la ZAD. C\u2019est un retour d\u2019exp\u00e9riences qui a po",
		output: "zadist",
	},
	{
		input:
			'Cette nuit, les fa\u00e7ades de la Mairie de Poitiers ont \u00e9t\u00e9 red\u00e9cor\u00e9es \u00e0 la peinture. En grosses lettres, 3 phrases : " non aux expulsions \u00e0 nddl " " non',
		output: "zozo",
	},
	{
		input:
			"Pire, il accuse, ceux qui se d\u00e9fendent face aux violences polici\u00e8res dont les m\u00e9faits ne sont plus \u00e0 d\u00e9montrer, de vouloir nuire \u00e0 la lutte : \u00ab C\u2019est ",
		output: "anonym",
	},
	{
		input:
			"Il est reparti vers son domicile apr\u00e8s avoir fait une pause caf\u00e9 (une terrasse malgr\u00e9 le temps). Cyril souhaite faire un break durant les semaines \u00e0 v",
		output: "zadist",
	},
	{
		input:
			"Il y a six mois commen\u00e7ait l\u2019op\u00e9ration C\u00e9sar, visant \u00e0 nettoyer la ZAD de ses occupant\u2011e\u2011s \u00ab ill\u00e9gaux \u00bb. Coup d\u2019\u00e9p\u00e9e dans l\u2019eau pour le pouvoir (bah o",
		output: "zadist",
	},
	{
		input:
			"\u00ab Tout ce qui est fuligineux n'est pas Imaginaire mais tout ce qui est Imaginaire est fuligineux \u00bb Critique du \u00ab Compte-rendu du livre de Houria Bo***",
		output: "lesamisdejulietteetduprintemps",
	},
	{
		input:
			"Nous d\u00e9non\u00e7ons des mesures disproportionn\u00e9es \u00e0 l\u2019encontre des militants solidaires de la lutte contre l\u2019a\u00e9roport de Notre-Dame-des-Landes. Apr\u00e8s des d",
		output: "zadist",
	},
	{
		input:
			"Les massmedias oubliant syst\u00e9matiquement le fond du probl\u00e8me, nous sommes oblig\u00e9s de rappeler syst\u00e9matiquement qu\u2019ils font partie int\u00e9grante du r\u00e9gime",
		output: "notht",
	},
	{
		input:
			"Des permis de travail indiquent que l\u2019abbatage d\u2019arbres serait imminent et des sources annoncent que l\u2019etat voudrait agir sur le terrain pour affaibli",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 12503 Voici un aper\u00e7u du drapeau qui a \u00e9t\u00e9 utilis\u00e9 lors de la grande manif de r\u00e9occupation de la ZAD, le 17 novembre dernier \u00e0 Notre",
		output: "cnca",
	},
	{
		input:
			'"La ZAD est partout !" Il semble que ce slogan fut pris au s\u00e9rieux hier (16 avril ). De nombreux petits groupes mobiles ont occup\u00e9 diff\u00e9rents lieux de',
		output: "anonyme",
	},
	{
		input:
			"M\u00eame s\u2019il apparait que les diff\u00e9rentes d\u00e9clarations de la Pr\u00e9fecture et de la commission de dialogue rendent improbables de nouvelles expulsions, il n",
		output: "zadist",
	},
	{
		input:
			'Comment dire sans \u00eatre (trop) inconvenant ! ? : "Quelle(s) bande(s) de gros nazes les flics -CRS-" OU plut\u00f4t ceux qui les dirigent"...de loin !...de l',
		output: "zadist",
	},
	{
		input:
			"Le concept d\u2019islamophobie est un racket s\u00e9mantique et politique qui se situe au carrefour de deux camps conceptuels, celui du religieux et celui du ra",
		output: "anonyme",
	},
	{
		input:
			"SEXE PUBLIC ET GUERRE SOCIALE 13 AO\u00dbT 2OO9 ANONYME Les quais tracent le contour de la m\u00e9tropole, en p\u00e9n\u00e9trant dans le port. En se rapprochant, on voit",
		output: ".",
	},
	{
		input:
			"Nous vous bloquons quelques instants. Quelques instants, c\u2019est pas grand-chose par rapport \u00e0 celles et ceux qui sont bloqu\u00e9es 24h sur 24 et qui depuis",
		output: "iaata",
	},
	{
		input:
			"Samedi 24 janvier 2009 avaient lieu une s\u00e9rie de rassemblement et de manifestations partout en France, dans le cadre des 10 jours contre l'antiterrori",
		output: "anonyme",
	},
	{
		input:
			"Dans ce texte, paru sur des sites internet, on dit que le keylogger aurait servi pour capter les commentaires \u00ab\u00a0hors antenne\u00a0\u00bb lors des directes radio",
		output: "anonyme",
	},
	{
		input:
			"Au fil des ann\u00e9es, de nombreuses personnes aux sensibilit\u00e9s diff\u00e9rentes ont ainsi rejoint cette zone en restaurant une maison existante ici ou en cons",
		output: "zadist",
	},
	{
		input:
			"A l'occasion de l'\u00e9lectrification de la voie ferr\u00e9e NANTES - LES SABLES D'OLONNE (125KM), RESEAU FERRE DE FRANCE (RFF) a pr\u00e9vu un ARRACHAGE SYSTEMATIQ",
		output: "anonyme",
	},
	{
		input:
			"Camarade - O.P.A CamaradeQue crois-tu qu\u2019il y ait au bout de ce chemin,Camarade ?Nos r\u00eaves les plus fous quand tu tenais ma mainSur les barricades,San",
		output: "o.p.a",
	},
	{
		input:
			'Concert de soutien au Samovar - Bordeaux Yep\u00a0! Ainsi va la "modernit\u00e9" que dans nos nouvelles n\u00e9cropoles, nous nous baladons, nous autochtones, comme ',
		output: "o.p.a",
	},
	{
		input:
			"Lors de l'ouverture d'un nouveau squat, les flics sont intervenus en nombre tr\u00e8s rapidement, ont p\u00e9n\u00e9tr\u00e9 la propri\u00e9t\u00e9 tr\u00e8s vite et ont embarqu\u00e9 toutes",
		output: "acab",
	},
	{
		input:
			"\u00a0 \u00a0 Ni interdictions ni r\u00e9pression ne nous arr\u00eaterons ! Malgr\u00e9 l\u2019interdiction prononc\u00e9e par le pr\u00e9fet, nous avons d\u00e9fil\u00e9 dans les rues de Nantes ce 19",
		output: "cntnantes",
	},
	{
		input:
			"l\u2019Amour est humaine comme tout ce que nous ressentons, pensons, imaginons, voyons et qu\u2019en d\u00e9sespoir de cause, nous nommons pour nous arracher de la s",
		output: "o.p.a",
	},
	{
		input:
			"dessin de Karine Bernadou dans le journal CQFD n\u00b0 106 L'Appel commun du mouvement anti-a\u00e9roport\u00a0: L\u2019Etat et les pro-a\u00e9roports menacent de passer de no",
		output: "(((i)))",
	},
	{
		input:
			"L'humanit\u00e9Ne sera heureuse et \u00e9panouieQu'avec le temps d'anarchieMais pour celaIl ne faudrait plus aucun fascisteIl ne faudrait plus aucun naziIl ne f",
		output: "patricefaubert",
	},
	{
		input:
			"Un appel \u00e0 tout casser lors de la COP 21 \u00ab\u00a0Dirigeants du monde\u00a0\u00bb, vous avez bien jou\u00e9 votre partie. Vous avez gagn\u00e9 la guerre de classes, liquid\u00e9 ce q",
		output: "anonyme",
	},
	{
		input:
			"T\u00e9l\u00e9charger le PDF du dossier de presse ici (avec t\u00e9moignages des bless\u00e9s, explications techniques sur les diff\u00e9rents flash-ball, LBD et leurs usages,",
		output: "@",
	},
	{
		input:
			"Appel donc aux personnes qui peuvent proposer\u00a0: - un h\u00e9bergement temporaire pour pouvoir se reposer (une nuit, une semaine ou juste une sieste\u00a0!) - un",
		output: "zadist",
	},
	{
		input:
			"Une partie des personnes soutenant la lutte contre ou se disant contre l'ex-a\u00e9roport ou contre l'ex-a\u00e9roport et son monde utilisent encore cette m\u00eame ",
		output: "camille",
	},
	{
		input:
			"Ce mardi 21 Mars nous repr\u00e9sentants de nos lyc\u00e9es respectifs(Camus, St Dominique, Clemenceau, Appert, Livet, Talensac, St Felix, St Jean Baptiste de l",
		output: "anonymous",
	},
	{
		input:
			"Pas de titre pour 10778 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 Au del\u00e0 du caract\u00e8re r\u00e9gionaliste et potentiellement identitaire discutable de cet \u00e9v\u00e9n",
		output: "jackpalmer",
	},
	{
		input:
			"Lyc\u00e9e Monges, au nord de Nantes. D\u00e8s 7H, les flics montent la garde, contr\u00f4lent et fouillent les lyc\u00e9ens qui arrivent. Idem \u00e0 Jean Perrin. Lyc\u00e9e Jules",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Les personnes qui ont des signalements chez les flics ou des vigiles finissent par se retrouver noms, pr\u00e9noms, photos et m\u00eame leurs adresses syst\u00e9mati",
		output: "desanarchistes",
	},
	{
		input:
			"Dans les lyc\u00e9es des quartiers populaires, nombreux \u00e0 se mobiliser, la r\u00e9pression prend un tour plus violent et humiliant qu\u2019ailleurs. Les images de ce",
		output: "ujfp",
	},
	{
		input:
			"Le capitalisme nait en m\u00eame temps que l\u2019Etat moderne, se sont les deux faces d\u2019une m\u00eame pi\u00e8ce\u00a0: un syst\u00e8me d\u2019exploitation des humains et de la nature ",
		output: "anonyme",
	},
	{
		input:
			"Ces derniers temps, la bourgeoisie a tent\u00e9 d\u2019inoculer un fort sentiment d\u2019impuissance dans les rangs ouvriers. L\u2019abstention record des derni\u00e8res \u00e9lect",
		output: "unsympathisantducci",
	},
	{
		input:
			"Au petit matin, le lyc\u00e9e Cl\u00e9menceau a connu une tentative de blocage, malheureusement mise en \u00e9chec par l'administration de l'\u00e9tablissement, qui s'est",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"O.P.A - Revue de presse - Avril / Mai 2013 ACTUALITES O.P.A PROCHAINS CONCERTS Samedi 8 juin - 22h - Place St Michel - Bordeaux Concert \u00e9lectrique ** ",
		output: "o.p.a",
	},
	{
		input:
			"La r\u00e9quisition, depuis septembre 2010, du 237, rue St L\u00e9onard \u00e0 Angers, baptis\u00e9e \u00ab\u00a0Amalgame\u00a0\u00bb par ses 57 habitants, est menac\u00e9e d'expulsion. Une plain",
		output: "pj49",
	},
	{
		input:
			"Je me suis engag\u00e9e dans la lutte contre l'a\u00e9roport et son monde au moment des expulsions de l'hiver 2012. Je n'ai pas arr\u00eat\u00e9, depuis l'abandon du proj",
		output: "anonyme",
	},
	{
		input:
			"\u00a0 \u00a0 \u00a0 \u00a0 D\u00e9part de commerce dans la bonne ambiance \u00e0 11h (mais une personne sera br\u00fbl\u00e9e dans la nuque par une projection de fumi : fa\u00eetes ATTENTION ave",
		output: "streetmedicnantes",
	},
	{
		input:
			"\u00a0 \u00a0 En avril 2016, Valls d\u00e9voilait sa pens\u00e9e \u00e0 propos des \u00e9lections pr\u00e9sidentielles, en reprenant les mots de Margaret Thatcher : \u00ab il n'y a pas d'alt",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Ce mensonge sert aujourd'hui, \u00e0 quelques jours de la manifestation du 22 novembre, \u00e0 justifier par avance les violences polici\u00e8res qui pourraient se p",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Salut \u00e0 tous les camarades, C'est une triste nouvelle qui me pousse \u00e0 \u00e9crire cette lettre. A l'heure o\u00f9 elle sera rendue publique, je serai en prison,",
		output: "anonyme",
	},
	{
		input:
			'La veille de la manifestation "S\u00e8me Ta ZAD", le carrefour de Fosses Noires / Chemin de Suez, est liber\u00e9 de la pr\u00e9sence des gendarmes mobiles... Pendan',
		output: "zad",
	},
	{
		input:
			"Dans le cadre de la journ\u00e9e S\u00e8me ta ZAD, le 13 avril prochain, nous aimerions organiser des ateliers d\u00e9couverte, d\u00e9monstrations, \u00e9change de savoir ou ",
		output: "zadist",
	},
	{
		input:
			"Communiqu\u00e9 du 15 f\u00e9vrier 2010. Arrestations de plusieurs personnes \u00e0 Paris. Aujourd'hui, \u00e0 6h30 du matin, plusieurs arrestations et perquisitions ont ",
		output: "solidarit\u00e9",
	},
	{
		input:
			"ALERTE 1 : Dimanche 13 janvier, nous faisions partie d\u2019un groupe de \u00ab naturalistes en lutte \u00bb et avions inventori\u00e9 les haies, les taillis, les mares e",
		output: "zadist",
	},
	{
		input:
			"cc ValK / bon pied bon oeil : http://bonpiedbonoeil.net/index.php?album=ValK/20150207-09_Bachajon_Chiapas_Mexique Aux m\u00e9dias libres du Chiapas, Aux ad",
		output: "collectif",
	},
	{
		input:
			"Il y a plus d'un si\u00e8cle et demi, un philosophe d'Allemagne, gr\u00e2ce au m\u00e9c\u00e9nat d'un industriel lui aussi ouvri\u00e9riste, \u00e9crivait et publiait des th\u00e9ories ",
		output: ".",
	},
	{
		input:
			"Plong\u00e9e dans \u201cl\u2019archipel \u00e9clat\u00e9\u201d Nous avons sillonn\u00e9 la Cisjordanie dans un petit groupe de trois personnes pendant deux semaines en d\u00e9cembre et janvi",
		output: "pierrestambul",
	},
	{
		input:
			"Les travailleurs ressentent aujourd\u2019hui plus que jamais la n\u00e9cessit\u00e9 de se battre contre les attaques du gouvernement et du patronat. Bon nombre d\u2019ent",
		output: "unsympathisantducci",
	},
	{
		input:
			"Sous les coups de boutoirs de la crise \u00e9conomique, les conditions de vie de la classe ouvri\u00e8re sont en train de se d\u00e9grader \u00e0 toute vitesse. Nous somm",
		output: "unsympathisantducci",
	},
	{
		input:
			"12\u00a0juillet 11h20 On apprend \u00e0 l\u2019instant le renvoi de cette ordure de Necker hier au soir. C\u2019est mauvais signe, il faut le dire\u00a0: pas tellement parce q",
		output: "*",
	},
	{
		input:
			"Paris / Arrestation de deux personnes lors d\u2019une action contre Vinci en soutien \u00e0 la lutte de Notre-Dame-des-Landes Rassemblement dimanche 20 janvier,",
		output: "zadist",
	},
	{
		input:
			"Du 22 au 26\u00a0octobre, s\u2019est tenu \u00e0 la Biblioth\u00e8que Nationale du Venezuela un colloque ayant pour sujet \u00ab\u00a0 la IIIe \u00e9cole de la pens\u00e9e d\u00e9coloniale critiq",
		output: "anonyme",
	},
	{
		input:
			"Mieux vaut tard que jamais... Radio Cayenne fait enfin sa rentr\u00e9e et entamme sa troisi\u00e8me saison ! Viens nous \u00e9couter \u00e0 partir de 19h ce lundi. Au pro",
		output: "radiocayenne",
	},
	{
		input:
			"La veille du passage en force de Macron par ordonnances, des gr\u00e8ves et des manifestations sont organis\u00e9es jeudi 21 septembre. A Nantes, d\u00e8s l'aube, pl",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Les deux premi\u00e8res sont des soci\u00e9t\u00e9s d\u2019ing\u00e9nierie qui participent activement aux \u00e9tudes de ces nouvelles lignes et \u00e0 la coordination des diff\u00e9rents ac",
		output: "ujfp",
	},
	{
		input:
			"SAMEDI, \u00e0 15H, place de la gare, d\u00e9part de d\u00e9fil\u00e9 d\u2019une v\u00e9lOffensive potag\u00e8re organis\u00e9e par des Zad-istes locaux, qui se fondra dans la cycloparade du",
		output: "anonyme",
	},
	{
		input:
			"Le soir du 7\u00a0juillet 2017, pour la deuxi\u00e8me fois d\u2019affil\u00e9e, environ 20\u00a0000\u00a0policiers arm\u00e9s des meilleurs technologies de maintien de l\u2019ordre ont compl",
		output: "anonyme",
	},
	{
		input:
			"Make blocage great again ( consid\u00e9rations sur les luttes \u00e9tudiantes et la s\u00e9lection) La question de la s\u00e9lection \u00e0 l\u2019entr\u00e9e \u00e0 la fac n\u2019est pas nouvell",
		output: "19h17",
	},
	{
		input:
			"APPEL \u00c0 SOUTIEN POUR SE POURVOIR EN CASSATION Pour tout vous dire, dans un premier temps, on h\u00e9sitait un peu. Tout d\u2019abord parce que nous \u00e9tions sous ",
		output: "yannisyoulountas",
	},
	{
		input:
			"Le d\u00e9ploiement policier \u00e9tait, comme souvent, totalement d\u00e9lirant, avec au moins deux policiers par manifestant. La rue devant la pr\u00e9fecture \u00e9tait tou",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"D\u00e9cryptage de l\u2019accord Unedic du 22 mars 2014 concernant les ch\u00f4meurs du r\u00e9gime g\u00e9n\u00e9ral, les int\u00e9rimaires, les salari\u00e9s victimes d\u2019un licenciement inj",
		output: "anonyme",
	},
	{
		input:
			"Apr\u00e8s avoir d\u00e9ambul\u00e9 le long de la route des Fosses Noires nous nous sommes d\u00e9ploy\u00e9es sur les c\u00f4t\u00e9s de la rd 81 afin d\u2019\u00eatre visible des automobilistes",
		output: "zadist",
	},
	{
		input:
			"Qu\u2019est-ce que c\u2019\u00e9tait la ZAD\u00a0? Il y a quelques ann\u00e9es, on s\u2019\u00e9tait demand\u00e9 \u00ab\u00a0qu\u2019est-ce que la ZAD\u00a0?\u00a0\u00bb1. La ZAD telle qu\u2019elle a exist\u00e9 depuis une dizain",
		output: "zadist",
	},
	{
		input:
			"http://soliranparis.wordpress.com/2012/01/10/condamnati...ghri/ - Il faut nous mobiliser pour sauver Saeed Malekpour. - Malheureusement, dans le cadre",
		output: "soliranparis",
	},
	{
		input:
			"Se sont entrecrois\u00e9s \u00e0 partir de la chat-teigne des chantier \u00e9lec\u2019 et des grand jeux - des balades anti-tht autour des pyl\u00f4nes ou des promenades pour ",
		output: "zadist",
	},
	{
		input:
			"Affiche pour le 27 f\u00e9vrier \u00a0 ----------------------- Mardi 23 f\u00e9vrier 2016 :\u00a0 #NANTES : 13H30 : Tribunal de Grande Instance de Nantes, 19 Quai Fran\u00e7oi",
		output: "(((i)))",
	},
	{
		input:
			"Dans la nuit du 18 au 19 juillet 2011, Biotope, entreprise charg\u00e9e d'effectuer des relev\u00e9s biologiques sur la zone concern\u00e9e par le projet d'a\u00e9roport ",
		output: "anonyme",
	},
	{
		input:
			"Depuis plus d\u2019un an et demi en Syrie, le pouvoir d\u2019Assad bombarde, massacre, viole et torture, sous les yeux d\u2019une \u201ccommunaut\u00e9 internationale\u201d qui se ",
		output: "unsympathisantducci",
	},
	{
		input:
			"Nous nous sommes engag\u00e9s \u00e0 d\u00e9fendre ensemble un projet global ainsi qu\u2019au maintien des activit\u00e9s et habitats actuels sur la zad. Nous voulons refuser ",
		output: ".",
	},
	{
		input: "p",
		output: "anonyme",
	},
	{
		input:
			"Depuis quand vous avez commenc\u00e9 la gr\u00e8ve et comment vous vous \u00eates organis\u00e9s pour lancer le mouvement d\u2019occupation\u00a0? On a commenc\u00e9 il y a 15 jours \u00e0 p",
		output: "x",
	},
	{
		input:
			"Des projets d'urbanisation fleurissent aux quatre coins des villes. Ca b\u00e9tonne \u00e0 tout va pour faire place nette \u00e0 de nouveaux centres commerciaux et q",
		output: "acab",
	},
	{
		input:
			'LA FRANCE SOUTIENT LE R\u00c9GIME DES MOLLAHS\u00a0!(Et d\u00e9truit les retraites) \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 face="Arial, Helvetica, sans-serif" size=2>\u00a0Comme j\'ai pu me procurer u',
		output: "do",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no430-janvier-2018.html Luttes syndicales People & baby condamn\u00e9 pour discrimination syndicale\u00a0! Une victoire",
		output: "cntnantes",
	},
	{
		input:
			"De nouveaux citoyens-relais : les agents de s\u00e9curit\u00e9 et la pr\u00e9sidence de l'universit\u00e9 de Caen jouent \u00e0 la police Le 12 avril : la police sur le campus",
		output: "anonyme",
	},
	{
		input:
			"POLICE PARTOUT JUSTICE NULLE PART ! Solidaires 37, Alternative Libertaire 37, Les Amis de Demain le Grand Soir appelaient \u00e0 un rassemblement antimilit",
		output: "jc",
	},
	{
		input:
			"Accus\u00e9 de violences sur la personne de Micka\u00ebl Bourdon (agent de police) Romuald a aujourd'hui un avocat, et un comit\u00e9 de soutien en formation. Il a s",
		output: "anonyme",
	},
	{
		input:
			"Ce d\u00e9cret est issu du projet de loi nomm\u00e9 \u00ab\u00a0avenir professionnel\u00a0\u00bb, vot\u00e9 au parlement cet \u00e9t\u00e9. Ce projet d\u00e9j\u00e0 bien pourri, ne semblait pas assez s\u00e9v\u00e8r",
		output: ".",
	},
	{
		input:
			"- Samedi soir, un groupe de cyclistes anti-a\u00e9roport va taquiner la boutique du patron Musti\u00e8re, chef du lobby radicalement pro-a\u00e9roport \u00abDes Ailes Pou",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Parce que cette marche est une moment de f\u00eate mais aussi de revendications fortes, venez avec vos slogans et pancartes, et si vous portez du rose, c'e",
		output: "anonyme",
	},
	{
		input:
			"Il est possible de rejoindre d\u00e8s maintenant les r\u00e9unions des diff\u00e9rentes commissions : D\u00e9roulement de la manif : Mercredi 20 \u00e0 16h au Liminbout ou \u00e0 l",
		output: "zadist",
	},
	{
		input:
			"recto verso LA PRISON POUR PERSONNE Y'a beaucoup de maisons vides \u00e0 Montreuil. Beaucoup de sp\u00e9culateurs, d'h\u00e9ritages en indivision, de maisons juste a",
		output: ".",
	},
	{
		input:
			"Arriv\u00e9.es devant la pr\u00e9fecture, les camarades \u00e0 la banderole montent sur les marches, d'autres les rejoignent, et un petit groupe se met en place, pan",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Ce d\u00e9c\u00e8s r\u00e9voltant n'est malheureusement pas suprenant dans ce contexte. A Notre dame des landes, au Testet et partout o\u00f9 nous nous opposons \u00e0 leurs d",
		output: "zadist",
	},
	{
		input:
			'Voici quelques nouvelles de ce qui se passe sur Caen : La manif du 26 octobre : La manifestation "\u00e9tudiante" m\u00ealant \u00e9tudiant-e-s, salari\u00e9-e-s et ch\u00f4me',
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 9203 Le premier syndicat SGP-Unit\u00e9 Police (affili\u00e9 \u00e0 FO) f\u00e9licite les troupes ... Visible sur le site du syndicat http://www.unitepo",
		output: "anonyme",
	},
	{
		input:
			"Depuis environ une semaine, c\u2019est de plus en plus fr\u00e9quent. On a quasi chaque jour des retours de camarades qui \u00e9teignent un feu ou emp\u00eachent un autre",
		output: "zadist",
	},
	{
		input:
			"Derni\u00e8re nouvelle: Vendredi 27 mars , la Chambre de l'instruction a ordonn\u00e9 la mise en libert\u00e9 sous contr\u00f4le judiciaire de Damien . Aujourd'hui, Juan ",
		output: "solidarit\u00e9",
	},
	{
		input:
			"En ce samedi d'achats de no\u00ebl, nous avons pu emmerder les bourgeois du quartier latin et de St Germain des pr\u00e9s, les emp\u00eachant de retirer le fruit pre",
		output: "desanarchistes",
	},
	{
		input:
			"Pas de titre pour 9431 \u00a0 Pi\u00e8ces jointes affiche_semaine_solidarite_vincennes.pdf",
		output: "solidarit\u00e9",
	},
	{
		input:
			"La Roya, 15 novembre 2016 Demain 23 novembre, deux personnes, C\u00e9dric Herrou et Pierre-Alain Manonni, passent en proc\u00e8s pour avoir \u00ab par aide directe o",
		output: "anonyme",
	},
	{
		input:
			"LA CAGE MENTALE * Au bout de la \u00ab mort de la famille \u00bb, au bout de l'essoufflement des exp\u00e9riences de vie communautaire, s'est ouverte l'\u00e8re du couple",
		output: "xxx",
	},
	{
		input:
			"M\u00e9nageant ses effets, le pr\u00e9sident de la R\u00e9publique avait publiquement refus\u00e9 la veille une loi sp\u00e9cifique contre l\u2019antisionisme, inutile selon lui, e",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			'Comit\u00e9 des Sans Papiers, sans local, Tel : 06.80.57.50.61- Fax : 03.20.56.13.37 EVACUATION " SANITAIRE " \u00e0 la Bourse du Travail, MALTRAITANCE \u00e0 l\'H\u00f4pi',
		output: "laurent",
	},
	{
		input:
			'La journ\u00e9e a commenc\u00e9e par un rassemblement devant la pr\u00e9fecture appel\u00e9 par les divers accueils de jours pour les personnes sans abri, "en gr\u00e8ve" aujo',
		output: "nantesaveclesexil\u00e9.e.s",
	},
	{
		input:
			"Depuis quelques ann\u00e9es le bulletin N\u00e9gatif [1] s'est efforc\u00e9 de tirer les le\u00e7ons des luttes les plus significatives de la derni\u00e8re d\u00e9cennie. C'est de ",
		output: "unsympathisantducci",
	},
	{
		input:
			"C\u2019est \u00e9galement la rage qui nous a envahis, lorsque que nous avons d\u00e9couvert que l\u2019auteur de cette tuerie de masse avait puis\u00e9 son inspiration dans l\u2019",
		output: "ujfp",
	},
	{
		input:
			"Depuis des mois, les 1120 salari\u00e9s de l\u2019usine Continental de Clairoix font preuve d\u2019une col\u00e8re et d\u2019une d\u00e9termination sans faille. Les \u201c\u2018Contis\u2019 ne l\u00e2",
		output: "unsympathisantducci",
	},
	{
		input:
			"Dans cette troisi\u00e8me partie de cette s\u00e9rie d\u2019articles consacr\u00e9s au NPA, nous reviendrons sur un aspect majeur de leur propagande actuelle qui permet d",
		output: "unsympathisantducci",
	},
	{
		input:
			"\u00ab\u00a0Jean Michel Aulas, Jean Michel Aulas, on va la gagner chez toi\u00a0\u00bb. Il y a quelques mois, les supporters marseillais faisaient la f\u00eate en reprenant ce",
		output: "anonyme",
	},
	{
		input:
			"Les derni\u00e8res \u00e9lections qui viennent de se d\u00e9rouler en France ont \u00e9t\u00e9 marqu\u00e9es, une fois de plus, par une abstention massive (53% des inscrits1 au pre",
		output: "unsympathisantducci",
	},
	{
		input:
			"Les 25 et 26 novembre 2007, nous sommes nombreux \u00e0 n\u2019avoir pas pleur\u00e9 les plus de 80 keufs bless\u00e9s lors des \u00e9meutes de Villiers-le-Bel suite \u00e0 des tir",
		output: "aaa",
	},
	{
		input:
			"De m\u00eame, nous avons tenu parole en nous engageant d\u00e8s juillet 2008 \u00e0 agir pour que, au moins sur Angers, plus personne ne soit \u00e0 la rue! Certains de n",
		output: "pj49",
	},
	{
		input:
			"Avec notamment : - Retour sur la manif potag\u00e8re - News des luttes des exil\u00e9\u00b7e\u00b7s et avec elleux contre les fronti\u00e8res - Chronique sur d\u00e9liveroo l'arriv",
		output: "radiocayenne",
	},
	{
		input:
			"Tarif social, tu perds ton sang froid Depuis janvier 2015, Nantes M\u00e9tropole a mis en place un nouveau tarif social pour les transports en commun dans ",
		output: "cntnantes",
	},
	{
		input:
			'Mercredi 28 septembre 20H15 Cin\u00e9ma Le Concorde Film, D\u00e9bat "La nuit de la v\u00e9rit\u00e9" Film burkinab\u00e9 de Fanta Regina Nacro D\u00e9bat anim\u00e9 par Zita de l\'APEF ',
		output: "anonymous",
	},
	{
		input:
			"Samedi dernier le rendez vous parisien a montr\u00e9 encore une fois la d\u00e9termination des manifestant.es. Le pouvoir ne peut supporter qu\u2019on r\u00e9siste, il l\u2019",
		output: "iaata",
	},
	{
		input:
			"Photo : Marin Driguez Photo : Marin Driguez Photo : Marin Driguez La soir\u00e9e commence en musique, des tables ont \u00e9t\u00e9 install\u00e9es pour un banquet. Et \u00e7a ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			'Pas de titre pour 12685 Carte 2 Carte 1 "S\u00e8me ta zad" et la question des terres agricoles, sur la zad et au-del\u00e0 : La manifestation "s\u00e8me ta zad" est ',
		output: "zadist",
	},
	{
		input:
			"\u00ab\u00a0La manif est partie \u00e0 11h30 de la place Charles de Gaulle. Elle \u00e9tait calme et il n\u2019y avait pas de r\u00e9el dispositif policier. La manifestation s\u2019est ",
		output: "anonyme",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no441-fevrier-2019.html Dossier Gilets Jaunes. Un point sur le mouvement des rond-points. P 2 \u00e0 9 \u00c9cole L\u2019\u00e9co",
		output: "cntnantes",
	},
	{
		input:
			"Suite \u00e0 la nouvelle occupation du ch\u00e2teau du tertre et malgr\u00e9 des dialogues indirects entre la pr\u00e9sidence et les occupants, hier lundi 27 novembre, la",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"A Nantes, les initiatives d\u00e9marrent d\u00e8s l'aube par une action de blocage \u00e9conomique \u00e0 l'a\u00e9roport de Nantes, des op\u00e9rations escargots aux entr\u00e9es de la",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Salut aux compagnons-e-s du monde entier, J\u2019ai longtemps h\u00e9sit\u00e9 \u00e0 m\u2019exprimer publiquement \u00e0 ce sujet pour \u00e9viter de donner de l\u2019eau au moulin \u00e0 la th\u00e9",
		output: "aaa",
	},
	{
		input:
			"Hier soir aux alentours de Minuit, une bande de copain/nes ont coll\u00e9 des affiches au soutien aux sans-papiers et \u00e0 leurs luttes ( par exemple l'incend",
		output: "anonyme",
	},
	{
		input:
			"Face \u00e0 cette situation inadmissible, des soubresauts ont d\u00e9j\u00e0 lieu quelques jours apr\u00e8s la rentr\u00e9e. Un blocus a \u00e9t\u00e9 organis\u00e9 dans un lyc\u00e9e de Caen mar",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Photo 9 Photo 8 Photo 7 Photo 6 Photo 5 Photo 4 Photo 3 Photo 2 Photo 1 \u00ab Ce qui doit arriver un jour peut arriver aujourd'hui \u00bb C'est \u00e0 la ZAD que j'",
		output: "anon",
	},
	{
		input:
			"\u201cPour vous, qu\u2019est-ce qu\u2019\u00eatre Fran\u00e7ais\u202f?\u201d, voil\u00e0 la question que l\u2019ex-\u201cconseiller socialiste\u201d Besson, actuel ministre de l\u2019immigration et de l\u2019identit",
		output: "unsympathisantducci",
	},
	{
		input:
			"Je ne me rappelle pas bien de toutes nos \u00e9changes verbales, mais il y en avait pas mal. Je suis rest\u00e9e tr\u00e8s sereine. J'ai m\u00eame gard\u00e9e beaucoup d'humou",
		output: "anonyme",
	},
	{
		input:
			"Solidarit\u00e9 et complicit\u00e9 internationales avec les prisonnier-es et les inculp\u00e9-es anarchistes \u00a0 voici une proposition d\u2019\u00e9tendre le 1er mai 2019 berlin",
		output: "attaque",
	},
	{
		input:
			"Le Parisien du 4 f\u00e9vrier 2019 nous apprend que \u00ab\u00a0trois personnes ont r\u00e9cemment \u00e9t\u00e9 arr\u00eat\u00e9es par les policiers du commissariat de Mantes-la-Jolie. Ils ",
		output: "sansattendredemain",
	},
	{
		input:
			"Et si la vie, cela n'\u00e9tait pas travailler? Et si la vie, cela n'\u00e9tait pas peindre, Et si la vie, cela n'\u00e9tait pas \u00e9crire? Et si la vie, cela n'\u00e9tait p",
		output: "patricefaubert",
	},
	{
		input:
			"Et si la vie, cela n'\u00e9tait pas travailler ?Et si la vie, cela n'\u00e9tait pas peindre ?Et si la vie, cela n'\u00e9tait pas \u00e9crire ?Et si la vie, cela n'\u00e9tait p",
		output: "patricefaubert",
	},
	{
		input:
			'La for\u00eat comprend une trentaine de "tree houses", des barricades et d\u2019autres lieux collectifs. La coupe de la for\u00eat n\u2019est possible que depuis le 1er o',
		output: "anonyme",
	},
	{
		input:
			"En France aussi, la petite musique qui amalgame insidieusement la moindre critique d\u2019Isra\u00ebl et/ou du sionisme \u00e0 de l\u2019antis\u00e9mitisme bat son plein. Pas ",
		output: "ujfp",
	},
	{
		input:
			"Fil infos de la journ\u00e9e du 22 f\u00e9vrier : https://zad.nadir.org/spip.php?article2213 et https://paris-luttes.info/nantes-notre-dame-des-landes-recit \u00a0 P",
		output: "(((i)))",
	},
	{
		input:
			"Au cours des derni\u00e8res nuits \u00e0 Paris, en \u00e9toilant les \u00e9crans de deux distributeurs de billets, nous avons eu une pens\u00e9e pour le compagnon anarchiste H",
		output: "x",
	},
	{
		input:
			"La fronti\u00e8re comme symbole de la souverainet\u00e9 des \u00c9tats Depuis l\u2019\u00e9poque moderne, la fronti\u00e8re a \u00e9t\u00e9 le marqueur de la cr\u00e9ation des \u00c9tats-nations, de l",
		output: "antifa",
	},
	{
		input:
			"Quelques pistes pour une perspective anti-autoritaire de l'\u00e9cologie radicale Lib\u00e9ration totale ou \u00e9co-activisme ? C'est la question qui se posera (san",
		output: "anonyme",
	},
	{
		input:
			"Le COP 15 r\u00e9unira prochainement \u00ab dirigeants \u00bb mondiaux, multinationales et grosses ONG pour dessiner l'apr\u00e8s-Kyoto et tenter d'emp\u00eacher une crise cli",
		output: "anonyme",
	},
	{
		input:
			"Le 15 juin au matin, les touristes, bourgeois et promeneurs du dimanche se sont r\u00e9veill\u00e9s \u00e9blouis par quelques slogans anarchistes et tags contre la c",
		output: "anonyme",
	},
	{
		input:
			"Vendredi 16 juin 2017 se tenait une demande de remise en libert\u00e9 du compagnon incarc\u00e9r\u00e9 depuis f\u00e9vrier dans l'affaire de la voiture de police incendi\u00e9",
		output: ".",
	},
	{
		input:
			"Les informations sont encore tr\u00e8s flou. Une chose est s\u00fbre la vieille maison d'arr\u00eat va fermer est une nouvelle taule sera batie \u00e0 l'horizon 2015 \u2013 20",
		output: "anonyme",
	},
	{
		input:
			"\"Rien n'est plus difficile que d'obtenir cette disponibilit\u00e9. C'est l\u00e0 que se trouve le changement permanent. Il faut chercher en permanence les progr",
		output: "anonymous",
	},
	{
		input:
			"Le projet initial de verger commun et de cultures m\u00e9dicinales reste donc d'actualit\u00e9. L'\u00e9quipe qui soutenait l'installation ne s'est pas d\u00e9mont\u00e9 et \u00e0 ",
		output: "zadist",
	},
	{
		input:
			"Pour r\u00e9agir face aux pratiques de collabo de La Poste et les visibiliser on est plusieurs personnes \u00e0 \u00eatre all\u00e9es \u00e0 Champigny le samedi 1er\u00a0juin au ma",
		output: ".",
	},
	{
		input:
			"Le v\u00e9hicule de la soci\u00e9t\u00e9 d\u2019\u00e9lectricit\u00e9 a enti\u00e8rement br\u00fbl\u00e9 aux alentours de 2h30 mardi 28 mai. La presse locale se demande s\u2019il s\u2019agit d\u2019un incendie ",
		output: "sansattendre",
	},
	{
		input:
			"L'\u00e9dition 2018 de la f\u00eate du Jardin des Ronces fera date : une 'mar\u00e9e populaire' de l'ordre du millier de personnes est venue profiter de ce riche wee",
		output: "roncier",
	},
	{
		input:
			"Une autre personne aurait \u00e9t\u00e9 arr\u00eat\u00e9e dans la soir\u00e9e mais on n'a pas eu de confirmations, prudence donc sur cette info. Plusieurs personnes sont sorti",
		output: "m",
	},
	{
		input:
			"Depuis l\u2019ann\u00e9e 2008 et le d\u00e9but de la phase actuelle de la crise, partout s\u2019est d\u00e9velopp\u00e9e une aust\u00e9rit\u00e9 croissante. Cette politique \u00e9tait cens\u00e9e r\u00e9du",
		output: "unsympathisantducci",
	},
	{
		input:
			"Au programme : Cantinne v\u00e9g\u00e9ta*ienne bar \u00e0 maquillage Et puis concerts, avec : Dales (Duo instrumental) Haymarket (punk) B1c1 (Tout en kamion - tekno)",
		output: "legalteam",
	},
	{
		input:
			"En Turquie et Kurdistan Nord, le peuple sort dans les rues et exige la d\u00e9mission du gouvernement de l'AKP par un mouvement de contestation qui dure de",
		output: "ibrahima",
	},
	{
		input:
			"Violence Un mouvement si complexe - et tel qu\u2019on ne peut pas si simplement dire \u00ab\u00a0ils veulent le RIC\u00a0\u00bb ou \u00ab\u00a0ils veulent une Ve R\u00e9publique\u00a0\u00bb - nous imp",
		output: "*",
	},
	{
		input:
			"\u00a0 Bonjour, Le bulletin n\u00b0182 du 21\u00a0mai 2019, du petit journal mobile recto verso A4 RESISTONS ENSEMBLE du r\u00e9seau contre les violences polici\u00e8res et s\u00e9",
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			"Parce que les rues de Nantes sont occup\u00e9es par plusieurs centaines de policiers, gendarmes, ... depuis le 9 avril, avec leur h\u00e9licopt\u00e8re, leurs canons",
		output: "x",
	},
	{
		input:
			"300 personnes ont ensuite d\u00e9fil\u00e9, encadr\u00e9es par un nombre au moins \u00e9quivalent de CRS, tr\u00e8s \u00e9nerv\u00e9s, qui ont emp\u00each\u00e9 la manifestation de suivre le parc",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"C'est boooo... :) Le consortium constructeur du barrage de Belo Monte d\u00e9cide de couper les d\u00e9placements entre le chantier du Pimental et la ville d'Al",
		output: "zadist",
	},
	{
		input:
			"\u00a0 On s\u2019est rendu compte que se balader la nuit en l\u2019illuminant d\u2019incendies cibl\u00e9s est une pratique qui est en train de se diffuser. \u00a0 \u00a0 Des objectifs ",
		output: "anonyme",
	},
	{
		input:
			"Qui es-tu Damien\u00a0? Je m'appelle Damien T. J'ai 29 ans. Je suis ma\u00e7on coffreur en int\u00e9rim, actuellement en recherche d'emploi. J'habite \u00e0 Rez\u00e9 dans l'a",
		output: "...",
	},
	{
		input:
			"Ils \u00e9taient un millier de manifestants antifascistes, essentiellement membres des centres sociaux et des collectifs \u00e9tudiants \u00e0 marcher sur la Piazza ",
		output: "antifa",
	},
	{
		input:
			"Des licenciements cons\u00e9cutifs \u00e0 la loi travail, de la s\u00e9lection \u00e0 l\u2019universit\u00e9 \u00e0 la d\u00e9portation des immigr\u00e9s, c\u2019est la m\u00eame logique \u00e9tatique qui consi",
		output: "zadist",
	},
	{
		input:
			"On \u00e9tait environ 80 vers 12h30 devant l\u2019assembl\u00e9e nationale. Quelques personnes ont pris la parole, rappel\u00e9 ce qui se passe l\u00e0-bas, ce qui serait poss",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 10742 D'abord on s'est occup\u00e9Es des vilaines cam\u00e9ras autour du chantier, on les a coiff\u00e9es de jolis sacs poubelles et on a trouv\u00e9 qu",
		output: "anonyme",
	},
	{
		input:
			"Contre tous les Etats et toutes les autorit\u00e9s Depuis les tueries ex\u00e9cut\u00e9es le 13 novembre au nom d\u2019un foutu ordre religieux et de sa loi islamique, la",
		output: "anonyme",
	},
	{
		input:
			"Ce compteur avait \u00e9t\u00e9 pos\u00e9 de force \u00e0 un habitant de Pont-de-Claix en d\u00e9pit de ses refus r\u00e9it\u00e9r\u00e9s par lettre recommand\u00e9e \u00e0 Enedis, lors de r\u00e9unions pu",
		output: "...",
	},
	{
		input:
			"Attention, danger D\u00e9brancher un compteur communicant demande de la prudence. Il faut de s\u00e9rieuses connaissances en \u00e9lectricit\u00e9, sans quoi cela peut se",
		output: "anonyme",
	},
	{
		input:
			"J'ai une pens\u00e9e particuli\u00e8re pour Damien et le compagnon qui a \u00e9t\u00e9 arr\u00eat\u00e9 le 7 f\u00e9vrier dans un squat \u00e0 Montreuil et qui, depuis, est enferm\u00e9 entre qua",
		output: "..",
	},
	{
		input:
			"Nous avons le devoir de d\u00e9noncer tous les islamophobes en responsabilit\u00e9, l\u2019obligation de refuser toutes les euph\u00e9misations et relativisations qui par",
		output: "collectif",
	},
	{
		input:
			"Le MEDEF, champion toutes cath\u00e9gories du hold-up social Les patrons veulent leur a\u00e9roport \u00e0 NDDL et il le font savoir\u00a0haut et fort. D\u00e8s la fin des mun",
		output: "zadist",
	},
	{
		input:
			"Cette manifestation a \u00e9t\u00e9 un exemple de dignit\u00e9 mais aussi de volont\u00e9 d\u2019avancer pour des solutions p\u00e9rennes. Aucun d\u00e9bordement n\u2019a \u00e9t\u00e9 constat\u00e9, y com",
		output: "...",
	},
	{
		input:
			"Pas de titre pour 12499 Retour sur la r\u00e9union \u00e0 Bellevue du jeudi 31 janvier 2013 Dimanche dernier, 27 janvier, des paysanNEs du r\u00e9seau COPAIN, averti",
		output: "zadist",
	},
	{
		input:
			"Lundi 09\u00a0 Avril : Klx : 18:44 : Encore pas mal de flics entre Lama et les Planchettes. Le repas \u00e0 la ch\u00e8vrerie va bient\u00f4t commencer. Repas \u00e0 la Wardin",
		output: "zadist",
	},
	{
		input:
			"Grosse\u00a0journ\u00e9e\u00a0de blocage mardi\u00a0: -d\u00e8s 4h30, beaucoup de gens de l'AG de Luttes, de la KIC (intermittent-es) et de Nuit debout rejoignent les routiers",
		output: "anonyme",
	},
	{
		input:
			"mardi : apr\u00e8s l'annonce du 49.3, 70 personnes s'invitent au local du PS, d\u00e9m\u00e9nagent le mobilier dans la rue. Plusieurs tags apparaissent sur les murs.",
		output: "anonyme",
	},
	{
		input:
			"Depuis le lundi 10 juin des forages se tiennent en plusieurs lieux de la ZAD. Apr\u00e8s le simulacre de concertation orchestr\u00e9 dans le cadre de la commiss",
		output: "zadist",
	},
	{
		input:
			"Dans la r\u00e9pression des mouvements qui contestent son autorit\u00e9, le premier travail de l'\u00c9tat est toujours de nommer, de cat\u00e9goriser ses opposant.es, po",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 12031 Pas de titre pour 12030 Pas de titre pour 12029 Pas de titre pour 12028 Pas de titre pour 12027 Pas de titre pour 12026 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"Cette fois, peu apr\u00e8s le d\u00e9but du rassemblement, alors que la police se chargeait de la s\u00e9curit\u00e9 du palais d'injustice, des gendarmes en civils (proba",
		output: "-",
	},
	{
		input:
			"Il stipule que leurs forces de gu\u00e9rilla ; ont bien fait exploser ; ce pipeline le 29 Juillet 2011 et qu\u2019elles ont quitt\u00e9s le lieu de l\u2019attaque ,sans a",
		output: "soliranparis",
	},
	{
		input:
			"D\u00e8s le matin, alors qu'un gros cort\u00e8ge syndical d\u00e9file dans des rues d\u00e9sertes \u00e0 Saint-Nazaire, des centaines de policiers assi\u00e8gent l'hypercentre de N",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Procr\u00e9ation m\u00e9dicalement assist\u00e9e et \u00e9galit\u00e9 A l\u2019heure actuelle, en France, la PMA est ouverte aux couples h\u00e9t\u00e9rosexuels infertiles ou porteurs d\u2019une ",
		output: "anonyme",
	},
	{
		input:
			"9 et 14 F\u00e9vrier 2016 nouvelles qui nous sont parvenue via le site internet des Master Of Persia un groupe des musiciens underground et r\u00e9fugi\u00e9s politi",
		output: "soliranparis",
	},
	{
		input:
			"\u00a0A Nantes, d\u00e8s midi, plus de 400 \u00e9tudiants se r\u00e9unissent en Assembl\u00e9e G\u00e9n\u00e9rale. L'ambiance des \u00e9changes est tonique, l'amphi est comble. On vote rapid",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Suite aux multiples agressions qu\u2019a subies notre camarade d\u00e9tenu politique Aziz ElBOUR, dans la prison maudite de Berrechid, ce dernier a d\u00e9cid\u00e9 d\u2019ent",
		output: "ibrahima",
	},
	{
		input:
			"Derni\u00e8re initiative pour imposer d'avantage sa vision du monde d\u00e9gradante, l'extr\u00eame droite locale et consort lance une association \u00ab\u00a0LIEN\u00a0\u00bb qui a pou",
		output: "@",
	},
	{
		input:
			"Du 9 au 13 D\u00e9cembre, 20 personnes ont construit une \u00e9olienne de 2,4m de diam\u00e8tre dans le cadre d\u2019un stage organis\u00e9 par Tripalium et ouvert \u00e0 toutes pe",
		output: "zadist",
	},
	{
		input:
			'Le nouveau dispositif juridique concoct\u00e9 aux petits oignons par le nouveau Sinistre de l\'Int\u00e9rieur Bernardo "Gui" Cazeneuve contre les candidats au Ji',
		output: "zadist",
	},
	{
		input:
			"Suite \u00e0 la manif de samedi 14 dernier, on est sans nouvelles des personnes suivantes : - un homme, embarqu\u00e9 vers 18h40 \u00e0 H\u00f4tel Dieu, par les CRS - un ",
		output: "legalteam",
	},
	{
		input:
			"\u00ab\u00a0Libert\u00e9, humanit\u00e9 et dignit\u00e9\u00a0\u00bb\u00a0: \u00ab\u00a0We are not coming back\u00a0!\u00a0\u00bb\u00c0 Paris, Le 17 septembre, \u00e0 6 h du matin, pr\u00e9fecture et mairie ont \u00e0 nouveau envoy\u00e9 leu",
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			"\u00ab Comme on dit \u00bb - R\u00e9sistons Ensemble n\u00b0 139, mars 2015 Le bulletin no 139, mars 2015 du petit journal mobile recto-verso A4 du r\u00e9seau R\u00e9sistons ensem",
		output: "r\u00e9seaure",
	},
	{
		input:
			"1 2 3 4 5 6 7 8 9 10 11 12 1 - Comme d\u2019habitude, la Manif pour Tous se la joue \u00ab\u00a0agit-prop\u00a0\u00bb. \u00c0 ce propos, le Monoprix de Saint-Cloud voudrait bien r\u00e9",
		output: "lahorde",
	},
	{
		input:
			"Du 19 au 23 septembre un camping itin\u00e9rant de lutte contre les fronti\u00e8res s\u2019est d\u00e9ploy\u00e9 dans la r\u00e9gion du brian\u00e7onnais. Intitul\u00e9 Passamontagna, il ava",
		output: "anonyme",
	},
	{
		input:
			"Ce matin (8/03) les exil\u00e9.e.s et leurs soutiens ont investi une ancienne EPADH (maison de retraite) vers chantier naval (tram ligne 1). Suite \u00e0 l'expu",
		output: "nantesaveclesexil\u00e9.e.s",
	},
	{
		input:
			"Dix Th\u00e8ses sur l'Universit\u00e9 Productive ...On observe une dissolution \" mat\u00e9rielle \" de l'identit\u00e9 de l'\u00e9tudiant qui laisse place \u00e0 une figure hybride ",
		output: "laurent",
	},
	{
		input:
			"Un habitant de la for\u00eat de Hambach dont l\u2019esp\u00e8ce est menac\u00e9e : le Pic mar l\u2019\u00e9tendu des d\u00e9g\u00e2ts l\u2019\u00e9tendu des d\u00e9g\u00e2ts Suite \u00e0 l\u2019attaque de la flicaille et",
		output: "zadist",
	},
	{
		input:
			"evacuation du square Daviais Article sur nantes.aveclesexiles.info : Ce matin vers 8h, la pr\u00e9fecture a envoy\u00e9 une 20aine de fourgons de CRS pour \u00e9vacu",
		output: "nantesaveclesexil\u00e9.e.s",
	},
	{
		input:
			"Douce casserole, qui cuit si bien les p\u00e2tes, tu est notre alli\u00e9e. Avec ta forme \u00e0 la fois ronde et creuse, plus une poign\u00e9e, tu r\u00e9sonnes si joliement ",
		output: "anonyme",
	},
	{
		input:
			"A Quimper , les bars organisateurs de concerts ont re\u00e7u r\u00e9cemment un courrier de la DRAC leur imposant d\u2019\u00eatre titulaires d\u2019une licence d\u2019entrepreneur ",
		output: "anonyme",
	},
	{
		input:
			"L'UFC-Que Choisir ne d\u00e9col\u00e8re pas : les trois op\u00e9rateurs de t\u00e9l\u00e9phonie mobile n'ont pas voulu entendre l'avertissement des consommateurs lanc\u00e9 en nove",
		output: "anonymous",
	},
	{
		input:
			"Les prisonniers politiques du groupe Aziz Elbour de la prison de BOULMHAREZ (Hicham Almeskini, Abdelhak Atalhaoui et Mohammed Mouaddine) ont subi une ",
		output: "ibrahima",
	},
	{
		input:
			"Pas de titre pour 12164 Pas de titre pour 12163 Pas de titre pour 12162 Pas de titre pour 12161 Pas de titre pour 12160 Un nouveau symbole de la cultu",
		output: "jackpalmer",
	},
	{
		input:
			"\u00ab Force est de constater que l\u2019inspecteur d\u2019acad\u00e9mie du Morbihan veut, en avan\u00e7ant de tels chiffres, dissuader les parents d\u2019\u00e9l\u00e8ves d\u2019inscrire leurs e",
		output: "anonyme",
	},
	{
		input:
			"Une fois de plus, la 'f\u00eate\u00a0du jardin' fut une sacr\u00e9 r\u00e9ussite! Plusieurs centaines de personne du quartier et d'ailleurs sont venu-e-s (re)d\u00e9couvrir le",
		output: "roncier",
	},
	{
		input:
			"\u00a0 Pour certaines personnes arriv\u00e9es r\u00e9cemment \u00e0 Nantes, c'est cinq expulsions v\u00e9cues en deux mois, autant de fois des affaires de perdues. Sans compte",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"8h30 mardi 14 D\u00e9cembre 2004 \u00e0 RIOM(63) (place du Pr\u00e9 Madame, en face du tribunal) - {{CONFERENCES DEBATS }} - d\u00e9sob\u00e9issance civile : k\u00e9sako ? - d\u00e9sinf",
		output: "anonymous",
	},
	{
		input:
			"Pour s'entrainer : https://youtu.be/7ip8eAPXi6Mhttps://youtu.be/iYjvwT1XFCIhttps://youtu.be/HSh4I6JgGH4https://youtu.be/DTfh2sMUWfghttps://youtu.be/VK",
		output: "x",
	},
	{
		input:
			"La police tue Les m\u00e9dias s'empressent de relayer le r\u00e9cit policier : Aboubakar Fofana, un jeune recherch\u00e9 par la police pour des vols en r\u00e9union et co",
		output: "radiocayenne",
	},
	{
		input:
			"Ce qui est arriv\u00e9 \u00e0 R\u00e9mi aurait pu arriver \u00e0 n\u2019importe qui d\u2019entre nous, ici ou ailleurs. \u00c0 n\u2019importe qui d\u2019un peu d\u00e9termin\u00e9 ce jour-l\u00e0 et qui mettait",
		output: "acab",
	},
	{
		input:
			"En ce moment au ch\u00e2teau du Tertre les jeunes exil\u00e9s et \u00e9tudiants ont pris possession du lieu. Il est devenu un lieu de vie o\u00f9 les gens dorment. Nous a",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Une recherche r\u00e9cente publi\u00e9e par Pierrette Bouchard et Natasha Bouchard, de la Chaire d'\u00e9tudes Claire-Bonenfant sur la condition des femmes (Universi",
		output: "anonymous",
	},
	{
		input:
			"Depuis l\u2019\u00e9t\u00e9 2017 en fRance, on voit fleurir une s\u00e9rie d\u2019attaques contre plusieurs structures sensibles de la domination, et notamment contre les ante",
		output: "anonyme",
	},
	{
		input:
			"Le 24 mars \u00e0 Nantes, on inverse les r\u00f4les avec une grande manif ! La m\u00e9tropole nantaise veut annexer Notre-Dame-des-Landes ? Eh bien ce sont toutes le",
		output: "(((i)))",
	},
	{
		input:
			"Le vendredi 12 juin. le juge d\u2019instruction examinait la demande de remise en libert\u00e9 de Raphou* et lui donnait une suite favorable (le procureur ne s\u2019",
		output: "solidarit\u00e9",
	},
	{
		input:
			"soutien de Bordeaux Le mouvement \u00e9tudiant.e.s d'occupation initi\u00e9 pour la mise \u00e0 l'abri de jeunes en exil \u00e0 la rue a d\u00fb trouver des solutions collecti",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Vendredi 9 juin au matin, au 4 rue Dolor\u00e8s Ibarruri \u00e0 Montreuil, au si\u00e8ge de Egis, qui a entre autrecollabor\u00e9 \u00e0 la construction des prisons de Reau et",
		output: "...",
	},
	{
		input:
			"Le jardin des ronces f\u00eate son 3\u00e8me printemps ! 3\u00e8me printemps d'occupation d'une friche m\u00e9tropolitaine menac\u00e9e par le b\u00e9ton...3\u00e8me printemps d'autoges",
		output: "roncier",
	},
	{
		input:
			"Une nouvelle \u00e9tape dans cette lutte a commenc\u00e9 d\u00e9but juin. Le mardi 7 juin au matin, deux squats de demandeurs d'asile et de rroms furent expuls\u00e9s sim",
		output: "anonyme",
	},
	{
		input:
			'"F\u00e9minists, masculinists, blacklists", titre le "National Post" du 5 juin 2003, affirmant d\u00e8s la premi\u00e8re ligne de l\'article que les auteures du rappo',
		output: "sisyphe",
	},
	{
		input:
			"Toujours plus de flouz pour les friqu\u00e9s et de r\u00e9pression pour les r\u00e9volt\u00e9s ! Bienvenue au salon de l\u2019immobilier tunisien. L\u00e0-bas, il y a toujours des ",
		output: "solidarite",
	},
	{
		input:
			"\u00a0Lundi 17 juillet, se tenait une audience relais dans l\u2019affaire de la voiture incendi\u00e9e quai de Valmy. Le tribunal devait confirmer les dates de proc\u00e8",
		output: ".",
	},
	{
		input:
			"Ainsi une nouvelle \u00e9tape en pr\u00e9paration a \u00e9t\u00e9 r\u00e9v\u00e9l\u00e9e hier par Le Monde. Les services du 115 devront mensuellement communiquer l'identit\u00e9 des personne",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"Il y a exactement 60 ans avait lieu \u00e0 Nantes un mouvement social qui a marqu\u00e9 l'histoire par son intensit\u00e9. Au beau milieu de l'\u00e9t\u00e9 1955, les ouvriers",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Informer, c\u2019est choisir quoi dire et comment le dire. Mardi 21 ao\u00fbt, il est 6h30 du mat\u2019, Ouest-France ouvre le bal. Un premier article sign\u00e9 par Mari",
		output: "anonyme",
	},
	{
		input:
			"\" Dans les neuf derni\u00e8res ann\u00e9es on a d\u00e9velopp\u00e9 au sein de l ' internationale plus d ' id\u00e9es qu ' il n ' en faudrait pour sauver le monde , si les id\u00e9",
		output: "patricefaubertditpatl'invit\u00e9",
	},
	{
		input:
			"Simon est sorti mercredi 15 octobre. Simon \u00e9tait incarc\u00e9r\u00e9 depuis le 20 juin et a \u00e9t\u00e9 condamn\u00e9 le 7 juillet pour le vol d'un livre (17\u20ac) et \u00ab particip",
		output: "zadist",
	},
	{
		input:
			"Le gouvernement d\u00e9clare ne plus vouloir attendre les appels des recours contre le projet d\u2019a\u00e9roport, ce qui constituerait une rupture des engagements ",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 10310 Pas de titre pour 10309 Pas de titre pour 10308 La r\u00e9action de Ben Ali est dans un premier temps le silence, en restant insens",
		output: "anonyme",
	},
	{
		input:
			"Fin de la Tr\u00eave Hivernale Le 31 mars sonne la fin de la tr\u00eave hivernale, des milliers de personnes, de familles seront expuls\u00e9es de leur logement et m",
		output: "dal44",
	},
	{
		input:
			"Nouvelles qui nous sont parvenues, aux environs du 17 Aout, via le site Iranien Freedom Messenger. Un jeune officier Syrien s\u2019exprime sous le couvert ",
		output: "soliranparis",
	},
	{
		input:
			"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Ce n\u2019est qu\u2019un d\u00e9but, continuons le combat\u2026. \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Avec Macron et le Medef, une nouvelle s\u00e9rie d\u2019attaques est clairement act\u00e9e. La m",
		output: "anonyme",
	},
	{
		input:
			"D'abord \u00e0 Tr\u00e9beurden, le contre rassemblement ridiculise les fachos au nombre d'une cinquantaine contre bien 500-600 personnes en faveur de l'acceuil ",
		output: "anonyme",
	},
	{
		input:
			"Prol\u00e9taire ... Personne ne t'oblige \u00e0 aller \u00e0 l'\u00e9cole apr\u00e8s 16 ans ...... mais tu sais que sans aucun dipl\u00f4mes tu seras au bas de l'\u00e9chelle des exploi",
		output: "x",
	},
	{
		input:
			"Les voitures avaient \u00e9t\u00e9 stationn\u00e9es l\u00e0 pour faciliter l\u2019organisation de la F\u00eate de la musique dans le centre du village, \u00e0 l\u2019endroit o\u00f9 elles sont ha",
		output: "sansattendredemain",
	},
	{
		input:
			"La semaine pass\u00e9e, nous avons attaqu\u00e9 le zoo/safari de Peaugres, en mettant le feu \u00e0 ses quatres caisses d'entr\u00e9e, des petites cabines en pr\u00e9fabriqu\u00e9 ",
		output: ".",
	},
	{
		input:
			"Empruntant les rues du centre ville dans une ambiance tonique, le cort\u00e8ge d\u00e9ploie une banderole : \u00ab refugees welcome, GUD go home \u00bb sur le Cours Saint",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Nous envoyons un message de d\u00e9tresse et un appel \u00e0 une v\u00e9ritable solidarit\u00e9, et non \u00e0 la charit\u00e9, au moment le plus difficile de notre lutte pour la l",
		output: "bds",
	},
	{
		input:
			"\u00abTous les grands projets donnent lieu \u00e0 d\u00e9bat. Sur ce dossier que l\u2019\u00c9tat soutient et que pilote le ministre des Transports, je suis confiant\u00bb (1)Jean-",
		output: "zadist",
	},
	{
		input:
			"MANIFESTE Nous repoussons avec d\u00e9go\u00fbt les d\u00e9potoirs de la survie et ses id\u00e9es rationnelles qui remplissent les t\u00eates-poubelles des intellectuels. Nous",
		output: ".",
	},
	{
		input:
			"L'alerte a \u00e9t\u00e9 lanc\u00e9e vers 7h ce matin: la police est intervenue pour expulser les personnes qui dormaient \u00e0 la Fac de la Censive et au Chateau du Ter",
		output: "karacole",
	},
	{
		input:
			"Cette entreprise construit un peu partout non seulement des autoroutes, des a\u00e9roports..., mais aussi des prisons et des camps pour sans-papiers. Feu \u00e0",
		output: "..",
	},
	{
		input:
			"Le gouvernement voulait tout faire pour emp\u00eacher cette jonction visible entre le mouvement social en cours et la r\u00e9sistance aux attaques sur la zad. I",
		output: "zadist",
	},
	{
		input:
			"\u00a0 \u00a0 Dans la nuit du 13 mai, deux points de vente de McDonald's ont de nouveau \u00e9t\u00e9 vis\u00e9s \u00e0 Fribourg: des gens ont d\u00e9cor\u00e9 les succursales de KaJo au c\u0153u",
		output: "..",
	},
	{
		input:
			"De cela, c\u2019est vrai, quand des Gilets jaunes se sont soulev\u00e9s, voici 7 mois, peu d\u2019entre eux le savaient. Mais des centaines de bless\u00e9.es plus tard, a",
		output: "antifa",
	},
	{
		input:
			"Communiqu\u00e9 1 : \u00ab Court.circuit Created by : L'\u00e9ruption d'Eyjafjallaj\u00f6kull. Created on: 23.05.2011 - 15:25. Happened on: Monday, 23. May 2011. Nous fai",
		output: "anon",
	},
	{
		input:
			"Avant le lever du soleil, le campus de la fac de Nantes se h\u00e9risse \u00e0 nouveau de barricades, et plusieurs lyc\u00e9es nantais sont \u00e9galement bloqu\u00e9s. Dans l",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"salut, le weekend dernier a eu lieu un rassemblement \u00e0 la zad de Notre-Dame-des-Landes. Entre 30 et 40000 personnes se sont retrouv\u00e9es, signifiant le ",
		output: "anonyme",
	},
	{
		input:
			"Une perquisition : avant/apr\u00e8s. Depuis le mois de f\u00e9vrier, une quinzaine de \u00ab\u00a0cellules sp\u00e9ciales d\u2019enqu\u00eates Gilets jaunes\u00a0\u00bb a \u00e9t\u00e9 cr\u00e9\u00e9e dans les commi",
		output: ".",
	},
	{
		input:
			"Voici le retour d'une parodie qui pourrait bien servir samedi prochain Le chant des Courtisans Paroles J.B. (d'apr\u00e8s le chant des partisans) Chant R.R",
		output: "moi",
	},
	{
		input:
			"\" Notre propre corps lui-m\u00eame est d\u00e9j\u00e0 un objet , et , par suite , m\u00e9rite le nom de repr\u00e9sentation . Il n ' est , en effet , qu ' un objet parmi d ' a",
		output: "patricefaubertditpatl'invit\u00e9",
	},
	{
		input:
			"Presse oc\u00e9an annonce qu'il y a eu des interpellations la semaine derni\u00e8re de deux personnes en dehors de manifs. On y apprend que les flics la brigade",
		output: "acab",
	},
	{
		input:
			"Loi travail : \u00e7a ne fait que commencer ! La CNT se r\u00e9jouit qu'encore une fois, la mobilisation fut forte \u00e0 Nantes samedi 9 avril, pour la cinqui\u00e8me se",
		output: "cntnantes",
	},
	{
		input:
			"Les fafs se la racontent devant la cath\u00e9drale Cette comm\u00e9moration folklorique de vieillards, de cathos int\u00e9gristes et de fachos ne constitue pas de v\u00e9",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Il est \u00e0 noter que ces personnes, comme d'autres convoqu\u00e9es plus tard, ne se voient pas reprocher\u00a0 le fait d'avoir particip\u00e9 \u00e0 une manif interdite. Co",
		output: "legalteam",
	},
	{
		input:
			"\" Au fond , on sent aujourd ' hui , \u00e0 la vue du travail - on vise toujours sous ce nom le dur labeur du matin au soir , qu ' un tel travail constitue ",
		output: "patricefaubertditpatl'invit\u00e9",
	},
	{
		input:
			"Peut-\u00eatre avez-vous entendu parler de la RUE SAINT MALO \u00e0 BREST dans le quartier de Recouvrance, celle qui est d\u00e9sormais renomm\u00e9e pour \u00eatre reconnue c",
		output: "@nonyme",
	},
	{
		input:
			"Elles \u00e9taient plus de 300000 \u00e0 manifester en Pologne pour le droit \u00e0 l\u2019avortement. Elles \u00e9taient en gr\u00e8ve en Islande pour obtenir l\u2019\u00e9galit\u00e9 des salair",
		output: "*",
	},
	{
		input: ". http://bruxelles.indymedia.org/spip.php?article6803&lang=fr",
		output: "zadist",
	},
	{
		input:
			"Cette fois-ci, ils sont sur la zad et interview Gr\u00e9goire Minday ! Eh oui c'est le gars qui, apr\u00e8s avoir \u00e9t\u00e9 arr\u00eat\u00e9 dans la rue \u00e0 Paris pour la manif d",
		output: "zadist",
	},
	{
		input:
			"Nous d\u00e9cidons d\u2019aller au Camp Climat, car nous entendons qu\u2019une action massive de d\u00e9sob\u00e9issance civile pacifique est pr\u00e9vue pour le samedi. Nom de l\u2019a",
		output: "@",
	},
	{
		input:
			"Comme cette casse fait beaucoup de d\u00e9g\u00e2ts et de m\u00e9content.e.s, il faut trouver des boucs \u00e9missaires et des coupables. Ce sera, comme dans bien des \u00e9po",
		output: "pierrestambul",
	},
	{
		input:
			"Face \u00e0 la rafle du 1er d\u00e9cembre 2011 visant 15 opposant-e-s au projet d\u2019a\u00e9roport de Notre-Dame-des-Landes, qui a n\u00e9cessit\u00e9 27 camions de polices, le C",
		output: "cnca",
	},
	{
		input:
			"La CISPM lance un appel \u00e0 rassemblement Place d'Armes \u00e0 Calais le 14 octobre 2016 \u00e0 16h \u00e0 tous les habitants pr\u00e9sents \u00e0 Calais ainsi qu'\u00e0 toutes les f",
		output: "...",
	},
	{
		input:
			"Pas de titre pour 8743 Pas de titre pour 8742 Pas de titre pour 8741 Pas de titre pour 8740 Pas de titre pour 8739 Pas de titre pour 8738 Pas de titre",
		output: "anonyme",
	},
	{
		input:
			"Le comit\u00e9 de Haren et le collectif Keelbeek Libre\u00a0! appelle \u00e0 un rassemblement pour d\u00e9noncer la commission de concertation, cette farce d\u00e9mocratique, ",
		output: "zadist",
	},
	{
		input:
			"Parents des enfants concern\u00e9s, nous avions du attendre 45 jours apr\u00e8s la rentr\u00e9e pour que la raison, dont vous f\u00fbtes le porte- voix, l'emporte. Notre ",
		output: "anonymous",
	},
	{
		input:
			"Ce bilan est non exhaustif et sous-estim\u00e9 car nombre de personnes bless\u00e9es ne sont pas soign\u00e9es par nos \u00e9quipes. N\u00e9anmoins, nous pouvons souligner une",
		output: "zadist",
	},
	{
		input:
			"Suite au d\u00e9bat qui a eu lieu \u00e0 B17, Ren\u00e9 Berthier a accept\u00e9 que je mette en ligne quelques uns de ses textes. Vous pouvez y acc\u00e9der par la page qui lu",
		output: "philippe",
	},
	{
		input:
			"TCHERNOBYL - Le rapport secret de l'AIEA (25 avril 2006) 25 avril 2006 TCHERNOBYL Le rapport secret de l'AIEA http://mai68.org/ag/985.htm http://kalac",
		output: "anonymous",
	},
	{
		input:
			"\u00c9taient pr\u00e9sents S\u00e9bastien Lecornu, Secr\u00e9taire d\u2019\u00c9tat aupr\u00e8s du Minist\u00e8re de la transition \u00e9cologique, l\u2019un de ses conseillers et un conseiller de Nic",
		output: "zadist",
	},
	{
		input:
			"Mardi :Les flics ne se contentent plus de faire des fouilles et des arrestations \u00e0 l'universit\u00e9 en fin de manif. Mardi matin, la police en tenue anti-",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 12601 T\u00e9l\u00e9charger la brochure au format PDF A5 page par page: http://ravageeditions.noblogs.org/files/2013/03/FA-20p-...e.pdf Lire l",
		output: "anonyme",
	},
	{
		input:
			"Nous poursuivons la bataille que nous menons au sein des prisons locales de Boulmharez et de l'Oudaia de Marrakech, contre les r\u00e9alit\u00e9s catastrophique",
		output: "ibrahima",
	},
	{
		input:
			"capture d'\u00e9cran depuis la carte http://umap.openstreetmap.fr/fr/map/mobilisations-12-septembre_165381#6/47.997/4.351 agenda Front Social 44 Mardi 12 s",
		output: "(((i)))",
	},
	{
		input:
			"Proc\u00e8s du 24 septembre 2018chemin de la ch\u00e8vrerie, zad, expulsion 2018participation sans arme \u00e0 attroupement, visage dissimul\u00e9il avait un casque pour ",
		output: "legalteam",
	},
	{
		input:
			"Mardi 22 mai, Maxime s\u2019est fait arracher la main droite par une grenade en d\u00e9fendant la zad de Notre-Dame-des-Landes. Il fuyait une charge polici\u00e8re n",
		output: "zadist",
	},
	{
		input:
			"Communiqu\u00e9 de Urgence Notre Police Assassine\u00a0: Wafik vient de perdre la vie. Wafik n\u2019est pas un manifestant. Wafik est un jeune de quartier. Wafik est",
		output: "anonyme",
	},
	{
		input:
			"Ces petits voyous ont pu dispara\u00eetre comme par magie malgr\u00e9 la cam\u00e9ra\u2026 Acabadabra\u2026 YES FUTURE ! Que cr\u00e8ve l\u2019\u00c9tat ! Feu \u00e0 l\u2019EPPO de N\u00eemes !",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 10678 Pas de titre pour 10677 Pas de titre pour 10676 Pas de titre pour 10675 Un atelier se r\u00e9unit. Pas de titre pour 10673 Pas de t",
		output: "(((i)))",
	},
	{
		input:
			"Nous souhaitons interpeller la Mairie ainsi que la population angevine sur notre situation de r\u00e9sidents du 48, rue Lionnaise. Nous, demandeurs d'asile",
		output: "pj49",
	},
	{
		input:
			"Pas de titre pour 12062 Pas de titre pour 12061 Pas de titre pour 12060 Pas de titre pour 12059 Une cinquantaine d'individu/es se sont rassembl\u00e9s deva",
		output: "anonyme",
	},
	{
		input: "-",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"La D\u00e9p\u00eache fait preuve d\u2019une d\u00e9ontologie inattendue en rapportant que des bless\u00e9s ont \u00e9t\u00e9 \u00e0 d\u00e9plorer du c\u00f4t\u00e9 des manifestants ... mais le fait dans de",
		output: "iaata",
	},
	{
		input:
			"Dans la nuit, nous partons \u00e0 6 dans une fourgonnettes pour une mission d\u2019exfiltration. Je construis deux brancards \u00e0 ruches, nous prenons des bottes, ",
		output: "zadist",
	},
	{
		input:
			"Le S\u00e9nat et les empereurs romains l'avaient compris bien avant Macron.Pour avoir la paix sociale ils organisaient des jeux.Les jeux sanglants des glad",
		output: "julieamadis",
	},
	{
		input:
			"Dans la nuit de samedi 12 \u00e0 dimanche 13 d\u00e9cembre 2015, nous avons embelli le si\u00e8ge du groupe \u00e9nerg\u00e9tique 'RWE' [1] \u00e0 Essen [2] avec des bombes de pein",
		output: "anonyme",
	},
	{
		input:
			"Depuis l\u2019\u00e9poque des colonies fran\u00e7aises en Afrique du Nord, les habitantes et les habitants de cette r\u00e9gion ne cessent d\u2019\u00eatre trait\u00e9\u00b7e\u00b7s comme des ind",
		output: "acab",
	},
	{
		input:
			"Photo : Taranis News Photo : Evan Forget Photo : Evan Forget Photo : Yves Monteil Photo : Yves Monteil Photo : Yves Monteil Source : https://jurnevele",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"La complainte de Georges Ibrahim Abdallah La complainte de Georges Ibrahim AbdallahDans les vieilles ge\u00f4les fran\u00e7aisesY avait, y avait un prisonnierDe",
		output: "o.p.a",
	},
	{
		input:
			"A la suite il est possible de t\u00e9l\u00e9charger 2 brochures diff\u00e9rentes\u00a0: Des animaux en captivit\u00e9 - Recueil de textes contre les zoos et l\u2019industrie qui va",
		output: "x",
	},
	{
		input:
			"Assassinat en cours \u00e0 la prison de Perpignan Publi\u00e9 le 17 octobre 2018 Le pouvoir promet aujourd\u2019hui d\u2019incarc\u00e9rer toujours davantage, en t\u00e9moignent le",
		output: ".",
	},
	{
		input:
			"Si ce premier jugement \u00e9tait d\u00e9j\u00e0 abusif et ill\u00e9gitime, le verdict du proc\u00e8s en appel est tout simplement scandaleux, puisque Ga\u00e9tan se voit infliger ",
		output: ".",
	},
	{
		input:
			"En France comme ailleurs, la prison tue. Depuis janvier 2018, au moins 30 personnes sont mortes en taule de \u00ab\u00a0suicides\u00a0\u00bb ou \u00ab\u00a0morts suspectes\u00a0\u00bb, \u00e0 Fre",
		output: "...",
	},
	{
		input:
			"Le terrorisme d'\u00e9tat ne passera pas ! Pr\u00e9sent\u00e9 mensong\u00e8rement aux fran\u00e7ais-e-s comme une am\u00e9lioration du dispositif d\u00e9j\u00e0 existant depuis octobre 2012 ",
		output: "zadist",
	},
	{
		input:
			"INFOS PRATIQUES POUR SOUTENIR LES PERSONNES INCARC\u00c9R\u00c9ES Engu\u00e9, incarc\u00e9r\u00e9 \u00e0 Carquefou le 1er avril 2014 pour une peine de 1 an. Pour lui \u00e9crire des let",
		output: "zadist",
	},
	{
		input:
			"\u00a0 La r\u00e9solution, par le biais du paragraphe 2, fait sienne les crit\u00e8res propos\u00e9s par la tr\u00e8s sioniste Alliance internationale de la m\u00e9moire de l\u2019holoc",
		output: "ujfp",
	},
	{
		input:
			"Parce que raconter les moyens utilis\u00e9s par les flics et la justice pour asseoir l'enfermement, la mise au pas, le silence et la discipline des prisonn",
		output: "anonyme",
	},
	{
		input:
			"Recueil de textes et communiqu\u00e9s a propos de la lutte contre les prisonsde type C en Gr\u00e8ce \u2013 68 pages \u2013 f\u00e9vrier-avril 2015 - Ravage Editions.Sommaire ",
		output: "a",
	},
	{
		input:
			"Nucl\u00e9aire la fabrique de l'oubli, c'est quoi ? Ce projet est n\u00e9 apr\u00e8s la lecture de Oublier Fukushima, d'Arkadi Filine, et de La supplication, Tcherno",
		output: "collectif",
	},
	{
		input:
			"Mos Majorum n\u2019est pas la seule op\u00e9ration aux relents de Pax Romana qui sort du chapeau de l\u2019Europe\u00a0: suite au naufrage et \u00e0 la mort de nombreux migran",
		output: "anonyme",
	},
	{
		input:
			"Fin 2007, malgr\u00e9 la r\u00e9pression et l'expulsion de porte-parole, les personnes retenues dans les centres de r\u00e9tention s\u2019organisent et parviennent \u00e0 m\u00e9di",
		output: "m",
	},
	{
		input:
			"Chacun pense ce qu'il veut de facebook, et je suis le premier \u00e0 penser que la lutte ne se fait pas sur internet mais bel et bien sur le terrain. Mais ",
		output: "camille",
	},
	{
		input:
			"Val\u00e9rie Pr\u00e9cresse a eu droit \u00e0 ce commentaire de Nicolas Sarkozy : \u00ab On a rarement vu un ministre aussi heureux d\u2019\u00eatre nomm\u00e9 \u00e0 l\u2019Enseignement sup\u00e9rieu",
		output: "anonyme",
	},
	{
		input:
			"Pour que l\u2019id\u00e9e ne fl\u00e9trisse pas, il faut l\u2019action pour la revigorer. Pour que l\u2019action ne tourne pas en rond, il faut l\u2019id\u00e9e pour l\u2019enchanter. C\u2019est ",
		output: ".",
	},
	{
		input:
			"Vendredi 13 janvier, l\u2019agence de notation am\u00e9ricaine Standard & Poor\u2019s (S&P) d\u00e9grade la note de cr\u00e9dit de 9\u2005\u2005pays de la zone euro. C\u2019est le \u201cblack Fri",
		output: "unsympathisantducci",
	},
	{
		input:
			"YA BASTA ! A l\u2019Arm\u00e9e Zapatiste de Lib\u00e9ration Nationale et au Congr\u00e8s National Indig\u00e8ne Aux parents et compa\u00f1eros des 43 \u00e9tudiants disparus d\u2019Ayotzinap",
		output: "collectif",
	},
	{
		input:
			"5 gr\u00e9vistes de la faim en col\u00e8re - photo : ValK. Lundi 11 f\u00e9vrier 2019 Lorsque les gr\u00e9vistes et leur soutien s'installent dans le hall de la Facult\u00e9 d",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Le chef du m\u00e9dia d'extr\u00eame droite Breizh Info, en pleine investigation. BLOCAGES Premier rendez-vous, sur la grande zone commerciale d'Atlantis, le ma",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pas de titre pour 12494 Pas de titre pour 12493 Pas de titre pour 12492 Pas de titre pour 12491 Pas de titre pour 12490 Pas de titre pour 12489 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"BACeux nantais. Ouest France Presse Oc\u00e9an les chiens de la BAC - visages \u00e0 m\u00e9moriser! Pas de titre pour 11093 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 ",
		output: "jackpalmer",
	},
	{
		input:
			"source : https://www.flickr.com/photos/valkphotos/48864426966 De plus, il est important de rappeler que les habitant.e.s qui restent sont toujours dan",
		output: ".",
	},
	{
		input:
			"Hello les cailloux ! Ce soir c'est Cayenne en direct comme tous les lundis \u00e0 partir de 19h sur https://radio.antirep.net. Au programme, entre autres, ",
		output: "radiocayenne",
	},
	{
		input:
			"Il fut un temps plus r\u00e9cent o\u00f9 ces amas se baptis\u00e8rent m\u00e9tropoles \u00e0 leur tour, \u00e0 force d\u2019amalgame et d\u2019expansion. \u00c0 force de d\u00e9concentration, la d\u00e9cen",
		output: ".",
	},
	{
		input:
			"Nous sommes un collectif qui existe depuis 2016, en r\u00e9action \u00e0 la r\u00e9pression contre la loi Travail. Nous sommes des secouristes autog\u00e9r\u00e9\u00b7e\u00b7s et collec",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Pas de titre pour 9562 La presse bourgeoise avait annonc\u00e9 il y a trois semaines qu'une enqu\u00eate avait \u00e9t\u00e9 lanc\u00e9 contre les auteurs-trices de certains a",
		output: "(((i)))",
	},
	{
		input:
			"Nos 2 toutous ^^ Pas de titre pour 11293 Arriv\u00e9e \u00e0 l'agence - Nous nous faisons barrer l'acc\u00e8s \u00e0 l'agence sans \u00e9voquer de motif, avant m\u00eame que l'on d",
		output: "anonymous",
	},
	{
		input:
			"Rejoignez-nous sur le chat sur https://webchat.cyberguerrilla.org/#cayenne Email de contact: radiocayenne_AT_riseup.net",
		output: "k-hy\u00e8ne",
	},
	{
		input:
			"\u00ab\u00a0Honte aux socialos, qui accueillent les fachos\u00a0\u00bb Autour de 19 heure, le cort\u00e8ge s'\u00e9lance vers la Manufacture, ponctuant le d\u00e9fil\u00e9 de quelques fumig\u00e8",
		output: "actionantifascistenantes",
	},
	{
		input:
			"pour l'\u00e9quipe m\u00e9dic: - casques (avec visi\u00e8res si possible) - gantes (cuirs / chantiers : jardinage) - genouill\u00e8res - chaussures de chantier (chaussure",
		output: "...",
	},
	{
		input:
			"A VOTRE BON COEUR MESSIEURS-DAMES Bernadette Chirac est venue \u00e0 Mont\u00e9limar faire son cin\u00e9ma pour r\u00e9colter ses pi\u00e8ces jaunes. 200 kg de pi\u00e8ces ont \u00e9t\u00e9 ",
		output: "verdi",
	},
	{
		input:
			"Cr\u00e9\u00e9 en 1991 par Jean-Pierre Le Roch, fondateur du groupe de distribution Les Mousquetaires, l\u2019Institut de Locarn-Cultures et Strat\u00e9gies International",
		output: "anonyme",
	},
	{
		input:
			"Quelques notes sur \u00ab\u00a0l\u2019affaire de la Mac\u00e9doine\u00a0\u00bb Depuis la dissolution de la Yougoslavie en 1992, les guerres et les d\u00e9clarations d\u2019ind\u00e9pendance des \u00c9",
		output: "19h17",
	},
	{
		input:
			"Toutes voiles dehors ! Les combattantes de la libert\u00e9 En se \u00ab d\u00e9voilant \u00bb, les Iraniennes ne revendiquent pas seulement le droit de circuler dans les ",
		output: "!",
	},
	{
		input:
			"Untitled Document Bonjour \u00e0 toutes et \u00e0 tous, Chirac ignore ce qu'est un pl\u00e9biscite\u00a0! \u00a0\u00a0\u00a0\u00a0\u00a0Il nous a dit que ce r\u00e9f\u00e9rendum n'\u00e9tait pas un pl\u00e9biscite p",
		output: "do",
	},
	{
		input:
			"Lundi 23 f\u00e9vrier, nous apprenons par t\u00e9l\u00e9phone que la pr\u00e9fecture ne nous recevra pas Mercredi 25 comme nous l\u2019avions demand\u00e9 mais nous renvoie \u00e0 une h",
		output: "anonyme",
	},
	{
		input:
			"Mardi 11 mai, toujours dans C'dans l'air sur France Gouvernement 5, apr\u00e8s l'\u00e9mission \u00e0 la gloire de Sarko la veille, il s'agissait, sous couvert de pa",
		output: "verdi",
	},
	{
		input:
			"Apr\u00e8s la victoire obtenue par les \u00ab recalcul\u00e9s \u00bb, et depuis la victoire de Marseille, les serviles communicants du pouvoir sont r\u00e9quisitionn\u00e9s pour co",
		output: "verdi",
	},
	{
		input:
			"De haut en bas et de gauche \u00e0 droite : Otto Rutanen (avec des lunettes sur la photo de gauche), Arttu Pylkk\u00e4nen, Jesse Eppu Torniainen et Tomi Tiihone",
		output: "anonyme",
	},
	{
		input:
			"Appel \u00e0 dons On a toujours besoin d'un peu d'argent pour continuer nos actions. Impression du journal, soutien \u00e0 celles et ceux qui subissent la r\u00e9pre",
		output: "zadist",
	},
	{
		input:
			"La semaine derni\u00e8re, un homme est mort, abattu par la police \u00e0 Maurepas, Rennes. Dans la nuit de mercredi \u00e0 jeudi, du 2 au 3 d\u00e9cembre 2015, un ami lui",
		output: "anonyme",
	},
	{
		input:
			"Le bras sanglant de Chirac continue de meurtrir le Togo Comi M. Toulabor CEAN-Sciences-Po Bordeaux Apr\u00e8s avoir contraint la Commission \u00e9lectorale nati",
		output: "anonymous",
	},
	{
		input:
			"Nous pouvons les aider et avoir une action tr\u00e8s efficace dans cette mobilisation. Comment ? En mettant en place des caisses de solidarit\u00e9 (financi\u00e8re)",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Nous avons cibl\u00e9 l'entreprise eiffage car elle construit des taules, et une agence immobili\u00e8re au hasard, car elles nous pourrissent la vie, toujours.",
		output: ".",
	},
	{
		input:
			"Interdiction contestable en Etat de droit\u00a0\u00a0 Reporters sans Fronti\u00e8res Allemagne critique le proc\u00e9d\u00e9 employ\u00e9 par le minist\u00e8re f\u00e9d\u00e9ral de l'Int\u00e9rieur da",
		output: "(((i)))",
	},
	{
		input:
			'Messieurs les copr\u00e9sidents de la mal nomm\u00e9e "Bretagne R\u00e9unie", C\'est en tant qu\'ancien adh\u00e9rent du CUAB et de ce qui fut, jadis, sous le nom de "Breta',
		output: "anonyme",
	},
	{
		input: "\u00a0",
		output: "x",
	},
	{
		input:
			"Devant une situation catastrophique pour des dizaines de personnes \u00e0 la rue ou en errance, un collectif de plusieurs associations et organisations (vo",
		output: "dal44",
	},
	{
		input:
			"Photo diffus\u00e9e sur Twitter apr\u00e8s les violences racistes d\u2019octobre 2014 Tags apparus au Rouillen et Ergu\u00e9-Gab\u00e9ric en octobre 2015 Avant d\u2019aller plus lo",
		output: ".",
	},
	{
		input:
			"Quelques insomniacs ont profit\u00e9 de la p\u00e9nombre et de la tranquilit\u00e9 nocturne d'un quartier occup\u00e9 et survol\u00e9 par la police toute la journ\u00e9e pour aller",
		output: "anonyme",
	},
	{
		input:
			"1. Mobilisation dans les \u00e9tablissements et \u00e9coles - lyc\u00e9e Camus : 8 gr\u00e9vistes aujourd'hui. 12 gr\u00e9vistes demain. - lyc\u00e9e des Bourdonni\u00e8res : 9 gr\u00e9viste",
		output: "anonyme",
	},
	{
		input:
			"La situation au Br\u00e9sil en octobre (2018)avant la possible \u00e9lection de Bolsonaro avec Daniel. Extrait de L'\u00e9mission EC=1 de Radio Vosstanie ! https://v",
		output: "x",
	},
	{
		input:
			"Ici sur le littoral du nord de la france et dans ses terres la bidonvillisation,la violence font parti des modes op\u00e9ratoires de l\u2019\u00e9tat en r\u00e9ponse aux ",
		output: "...",
	},
	{
		input:
			"Ils gazent imm\u00e9diatement et en grande quantit\u00e9 les personnes pr\u00e9sentes dans la salle situ\u00e9e \u00e0 l'entr\u00e9e de l'\u00e9difice, et distribuent des coups de matra",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Dans la nuit du dimanche au lundi 3 novembre, on s'est attaqu\u00e9s \u00e0 10mats de mesures \u00e9oliens dans le grand est. On en a fait tomb\u00e9s 6 et on en a endomm",
		output: "...",
	},
	{
		input:
			"1\u00e8re partie Vot\u00e9 en Assembl\u00e9e G\u00e9n\u00e9rale la veille, le blocus de la fac Segalen devait permettre aux \u00e9tudiant-e-s tenu-e-s par le syst\u00e8me r\u00e9pressif mis ",
		output: "...",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no433-avril-2018.html Luttes syndicales Mobilisation dans un foyer d\u2019accueil m\u00e9dicalis\u00e9 du Rh\u00f4ne. P 2 Ici et ",
		output: "cntnantes",
	},
	{
		input:
			'"RESISTONS ENSEMBLE" du r\u00e9seau contre les violences polici\u00e8res et s\u00e9curitaires.Il est destin\u00e9 \u00e0 \u00eatre photocopi\u00e9 et \u00e0 \u00eatre diffus\u00e9 localement, si le jo',
		output: "r\u00e9seaure",
	},
	{
		input:
			"Apr\u00e8s un rassemblement avec des prises de paroles, \u00e0 place des F\u00eates, les flics pourchassent d\u00e8s le d\u00e9but la d\u00e9ambulation, qui devra se disperser \u00e0 qu",
		output: ".",
	},
	{
		input:
			"Pas de titre pour 8850 <!--OHSOSP--><!--OHSOFP--> \u00a0 Jeudi 26 mars - 20h // \u00e0 POL'n, 11, rue des Olivettes, Nantes // prix libre Atelier - Projection :",
		output: "imcnantes",
	},
	{
		input:
			"Ce soir sur Radio Cayenne, on parlera de la mobilisation contre le plan \u00e9tudiant. On \u00e9coutera aussi du son venu tout droit du festival sans fronti\u00e8res",
		output: "radiocayenne",
	},
	{
		input:
			"Une barricade de pneus et de matos de chantier r\u00e9cup\u00e9r\u00e9 a \u00e9t\u00e9 joyeusement enflamm\u00e9e sur les rails du tramway, rails qui ont \u00e9t\u00e9 aussi sabot\u00e9s un peu p",
		output: "xxx",
	},
	{
		input:
			"Au menu, des redifs d'\u00e9missions, des interviews, de la musique, des lectures, des scketchs, des fictions... et aussi des podcasts piqu\u00e9s \u00e0 d'auttres, ",
		output: "radiocayenne",
	},
	{
		input:
			"Ils utilisent notamment Internet pour diffuser une propagande \u00e0 laquelle les l\u00e9gislateurs pr\u00eatent une oreille bienveillante. Certains de ces groupes s",
		output: "anonymous",
	},
	{
		input:
			"Si je pouvais choisir une autre vie, je n'en changerais pour rien au monde Quelques mots de M\u00f3nica Caballero du Centre P\u00e9nitentiaire de Brieva Je me r",
		output: "x",
	},
	{
		input:
			"ZAP la vague\u00a0! Manif d\u2019occupation contre le Surf Park (Travaux pr\u00e9vus en 2020\u00a0!) Le 20 et 21 Juillet \u00e0 Saint P\u00e8re en Retz * Appel \u00e0 la R\u00e9sistance pour",
		output: "collectifterrescommunes",
	},
	{
		input:
			"A Chabrillan (Dr\u00f4me) pr\u00e8s de Crest, plusieurs m\u00e8tres de c\u00e2bles \u00e9lectriques ont \u00e9t\u00e9 incendi\u00e9s, apr\u00e8s que les plaques en b\u00e9ton des rigoles ont \u00e9t\u00e9 soule",
		output: "anonyme",
	},
	{
		input:
			"La BAC fait usage du LBD et des grenades d\u00e9sencerclantes qui blessent plusieurs personnes. Par la suite les GM lancent du gaz et matraquent : plusieur",
		output: "streetmedicnantes",
	},
	{
		input:
			"Dans la nuit du 22 octobre 2019, une voiture de ThyssenKrupp a pris feu \u00e0 Fribourg-en-Brisgau. Cette action est en solidarit\u00e9 avec els personnes au Ro",
		output: "..",
	},
	{
		input:
			"Sommaire\u00a0: 1.\u00a0\u00c9dito\u00a0: Le Premier ministre \u00e0 Nantes, entre revente des terres et\u00a0\u00e9meutes urbaines,suivi d\u2019un point sur l\u2019actualit\u00e9 de la zad2.\u00a0Dissolut",
		output: "zadist",
	},
	{
		input:
			"Les armes polici\u00e8res utilis\u00e9es en France et export\u00e9es dans le monde entier, sont fabriqu\u00e9es sur le sol fran\u00e7ais. Verney Carron \u00e0 Saint Etienne, Alsete",
		output: "anonyme",
	},
	{
		input:
			"\u00ab\u00a0Ces actes ont entra\u00een\u00e9 d\u2019importantes coupures sur les r\u00e9seaux de t\u00e9l\u00e9communication. D\u00e8s lundi \u00e0 partir de 16\u00a0h, mille sept cents foyers se sont retr",
		output: "sansattendre",
	},
	{
		input:
			"Lundi 29 janvier 2018 apr\u00e8s midi, sur fond de pleurs des matons, d'une Tribune collective de d\u00e9tenus et d'une interview sur un journal internet, l'un ",
		output: ".",
	},
	{
		input:
			"L\u2019antis\u00e9mitisme, c\u2019est notre histoire intime. C\u2019est une longue histoire de racisme d\u2019\u00c9tat, de st\u00e9r\u00e9otypes meurtriers, de discriminations, de pogroms e",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"Pas d\u2019\u00e9mission mais des podcasts ! ;)\u00a0\u00a0 :\u00a0 Bon on a quelques probl\u00e8mes avec le H24 mais Cayenne n\u2019est pas morte ! On esp\u00e8re pouvoir reprendre des \u00e9mis",
		output: "radiocayenne",
	},
	{
		input:
			"L\u2019enqu\u00eate Comme \u00e9voqu\u00e9 pr\u00e9c\u00e9demment, tout commence le 9 juin 2017 lorsque un employ\u00e9 d\u2019Enedis retrouve sur le pneu d\u2019un v\u00e9hicule un \u00ab\u00a0engin incendiair",
		output: "xxx",
	},
	{
		input:
			"Apr\u00e8s une premi\u00e8re tentative de sortir du sch\u00e9ma habituel d\u00e8s le d\u00e9but de la manifestation en prenant rue de l'Arche S\u00e8che, le cort\u00e8ge est bloqu\u00e9 par ",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Cela fait maintenant 6 mois qu'on essaye de diffuser un maximum d'informations, d'analyses et de nouvelles de la, ou plut\u00f4t les, situations dans les q",
		output: "merhabahevalno",
	},
	{
		input:
			"GR\u00c8VE - AG SOUVERAINE contre r\u00e9f\u00e9rendum des ''autorit\u00e9s'' GR\u00c8VE AG SOUVERAINE contre r\u00e9f\u00e9rendum des ''autorit\u00e9s'' http://mai68.org/ag/962.htm http://k",
		output: "anonymous",
	},
	{
		input:
			"Les \u00e9lus sont appel\u00e9s \u00e0 voter l\u2019engagement dans ce processus, au conseil municipal de Nantes le 6 octobre et au conseil m\u00e9tropolitain le 13 octobre. L",
		output: ".",
	},
	{
		input:
			"Ce soir, Radio Cayenne est en ligne,\u00a0 mais pas \u00e0 l'adresse habituelle : https://radio.antirep.net/Cayenne Au programme : journal de Jacqueline sp\u00e9cial",
		output: "radiocayenne",
	},
	{
		input:
			"Plusieurs \u00e9l\u00e9ments ont certainement d\u00fb jouer dans cette d\u00e9cision de les mettre en \u00ab d\u00e9tention pr\u00e9ventive \u00bb : tous les trois ont \u00e9t\u00e9 associ\u00e9s \u00e0 diff\u00e9re",
		output: "anonyme",
	},
	{
		input:
			"T\u2019as pas une cop\u00a0? Apr\u00e8s l\u2019abandon de l\u2019a\u00e9roport, comme nous en discutions depuis des ann\u00e9es en pr\u00e9vision de cette possibilit\u00e9, une tentative de n\u00e9goc",
		output: "zadist",
	},
	{
		input:
			"Le 1er d\u00e9cembre dernier, des membres de La Manif Pour Tous, oppos\u00e9s au projet de PMA sans p\u00e8re, s\u2019\u00e9taient rassembl\u00e9s devant la pr\u00e9fecture de Nantes. E",
		output: "actionantifascistenantes",
	},
	{
		input:
			"Certains ont \u00e9t\u00e9 plac\u00e9s \u00e0 hauteur de Rambouillet, Versailles et Trappes, occasionnant des retards en cascade, entre 5 et 9 heures, sur la ligne Paris-",
		output: "sansattendre",
	},
	{
		input:
			"Personne ne rappelle que juin 2019 marquera le sinistre 12e anniversaire du si\u00e8ge de Gaza\u00a0; personne n\u2019\u00e9voque les rapports des missions de l\u2019ONU sur l",
		output: "antifa",
	},
	{
		input:
			"Dans la nuit du lundi 23 au mardi 24 nous avons p\u00e9n\u00e9tr\u00e9 \u00e0 Clermont-Ferrand, proche du centre ville, dans un parking o\u00f9 \u00e9taient stationn\u00e9es trois voitu",
		output: "anonyme",
	},
	{
		input:
			"R\u00e9mi, Le 26\u00a0octobre 2014, ta mort m\u2019avait d\u00e9j\u00e0 marqu\u00e9, s\u2019ajoutant \u00e0 la longue liste des violences polici\u00e8res, confirmant l\u2019\u00e9vidence qu\u2019aujourd\u2019hui, en",
		output: "anonyme",
	},
	{
		input:
			"L\u2019industrie de l\u2019affichage publicitaire mise sur la publicit\u00e9 num\u00e9rique pour d\u00e9velopper son activit\u00e9 et ins\u00e9rer des t\u00e9l\u00e9visions g\u00e9antes publicitaires ",
		output: "anonyme",
	},
	{
		input:
			"Un peu de farine sur le visage d'une activiste de l'expulsion et voil\u00e0 l'ensemble de la caste politique solidaire de la victime .Cette caste politque ",
		output: "larage",
	},
	{
		input:
			"Pas de titre pour 4701 > Selon la LPO ce sont entre 12000 et 15000 oiseaux migrateurs (c'est \u00e0 dire pr\u00e8s de la moiti\u00e9 des effectifs qui y passent l'hi",
		output: "anonymous",
	},
	{
		input:
			"Derni\u00e8res infos : - A Nantes : Un terrain impraticable D\u00e9mocratie et Universit\u00e9 D\u00e9m\u00e9nagement \u00e0 la fac de Nantes Resche, casseur de gr\u00e8ve !!! Pendant c",
		output: "anonymous",
	},
	{
		input:
			"Je d\u00e9couvre la chose, et ne suis pas s\u00fbr d\u2019avoir tout compris, mais ce qui est clair, c\u2019est qu\u2019aux termes de cette nouvelle loi dont l\u2019intention est d",
		output: "anonyme",
	},
	{
		input:
			"D'apr\u00e8s http://lmsi.net/impression.php3?id_article=507 8 f\u00e9vrier 2006 Bonjour... Baudrillard, par Thomas Florian Baudrillard sans simulacres C\u00e9l\u00e9br\u00e9 d",
		output: "anonymous",
	},
	{
		input:
			"Pr\u00e9sidentielles 2007: Nous d\u00e9marrons le Site de vote continu par email valid\u00e9 avec scrutateurs: Vous pouvez voter d\u00e8s maintenant. Si ce site rencontre",
		output: "anonymous",
	},
	{
		input:
			"Egalit\u00e9 et r\u00e9conciliation pays de la loire invitent des auteurs des \u00e9ditions kontre kulture \u00e0 Nantes le samedi 17 d\u00e9cembre 2016 \u00e0 16h pour rencontrer ",
		output: "antifa",
	},
	{
		input:
			"1 2 3 \u00ab Vous ne connaissez pas Dieudonn\u00e9 \u00bb D'abord militant de gauche, humoriste engag\u00e9 dans la lutte contre Le Pen, il a progressivement d\u00e9riv\u00e9 dans ",
		output: "actionantifascistenantes",
	},
	{
		input:
			"D\u2019un printemps \u00e0 l\u2019autre Le printemps s\u2019annonce \u00e0 nouveau. Rappelons-nous de celui de l\u2019ann\u00e9e derni\u00e8re. Le mouvement contre la loi travail surgissait ",
		output: "anonyme",
	},
	{
		input:
			"Le cort\u00e8ge r\u00e9ussit \u00e0 se reformer pour repartir \u00e0 la pr\u00e9fecture o\u00f9 il est \u00e0 nouveau cible de grenades, lacrymog\u00e8nes et d\u00e9sencerclantes : on compte au m",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Nikos Maziotis, compagnon de Pola et papa de Lambros (lors d\u2019un transfert en 2014). Ce soir, tous les mass-m\u00e9dias grecs mettent habilement le scandale",
		output: "anonyme",
	},
	{
		input:
			"Ce jeudi 7 mai, la presse\u00a0[1] a annonc\u00e9 qu\u2019un Toulousain \u00e9tait poursuivi par la justice pour \u00ab\u00a0provocation publique \u00e0 la commission d\u2019un d\u00e9lit ou d\u2019un",
		output: "(((i)))",
	},
	{
		input:
			"Avec deux enfants \u00e0 charge, elle a lou\u00e9 une maison dans la banlieue nantaise avec le p\u00e8re de son deuxi\u00e8me enfant. Une rupture s\u2019ensuit et sans emploi,",
		output: "anonyme",
	},
	{
		input:
			"\" Huit millions de pauvres en France ! ( c ' est le chiffre ahurissant que l ' INSEE a publi\u00e9 r\u00e9cemment . Ce sont donc huit millions de personnes qui ",
		output: "patricefaubertditpatl'invit\u00e9",
	},
	{
		input:
			"- Samedi 25 f\u00e9vrier 2017 \u00ab Je me suis rendue \u00e0 la manifestation contre le FN qui a d\u00e9but\u00e9 \u00e0 15H. Par la suite, je souhaitais rentrer chez moi vers 18h",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"La bande \u00e0 d\u00e9biles d\u2019Angers Husak dans sa p\u00e9riode hitl\u00e9rienne (photo garantie sans trucage) Tout commence par la lecture d\u2019un entrefilet sur le site d",
		output: "anonyme",
	},
	{
		input:
			"Il s'agit de cam\u00e9ras directement install\u00e9es par les CRS, dans une optique de maintien de l'ordre. Des cam\u00e9ras sp\u00e9cialement r\u00e9serv\u00e9es pour les manifest",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le pouvoir a choisi de frapper le squat H\u00f4tel Oniro, un squat r\u00e9fugi\u00e9s/migrants que nous connaissons bien, voisin du Notara 26, et un autre squat, cel",
		output: "yannisyoulountas",
	},
	{
		input:
			"Action Un groupe d\u2019environ 40 personnes bien d\u00e9termin\u00e9es a rejoint le lieu de rendez-vous afin d\u2019emp\u00eacher le d\u00e9part du bus qui est arriv\u00e9 \u00e0 8h. Emp\u00each",
		output: "anonyme",
	},
	{
		input:
			"Nouveaux podcasts sur le blog de radio Cayenne : Emission du 3 d\u00e9cembre 2018 : (cliquer ici pour retrouver les diff\u00e9rents podcasts de l'\u00e9mission) Viol",
		output: "radiocayenne",
	},
	{
		input:
			"A Nantes, le contexte est particulier, puisque la police vient de battre un nouveau record dans l'absurdit\u00e9 r\u00e9pressive. Apr\u00e8s avoir attaqu\u00e9 des manife",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Des moutons & des hommes contre l'identification \u00e9lectronique des animaux et des humains Cet \u00e9t\u00e9, j'\u00e9tais berger. A deux, nous gardions un troupeau de",
		output: "anonymous",
	},
	{
		input:
			"L\u2019amassada, comme premier chantier, comme premi\u00e8re incarnation physique du mouvement de lutte contre le transformateur et les a\u00e9rog\u00e9n\u00e9rateurs, n\u2019est p",
		output: "zadist",
	},
	{
		input:
			"Comp\u00e9tences recherch\u00e9es\u00a0: - UnE couvreur-se pour r\u00e9parer quelques fuites (pose de velux tr\u00e8s bienvenue\u00a0!) - UnE menuisierE, notamment pour les ouvertu",
		output: "zadist",
	},
	{
		input:
			"Pire, pour la premi\u00e8re fois depuis que le festival existe, les \u00ab Rendez-vous de l'Erdre \u00bb ne seront plus un espace festif ou chacun-e pourra aller et ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			'Bravo pour la manifestation ou vous avez fait une parodie superbe d\'une manif de droite, vos encravatt\u00e8s et vos emperlous\u00e9es des "beaux quartiers" \u00e9ta',
		output: "anonymous",
	},
	{
		input:
			"A st-Nazaire, le gaz a \u00e9t\u00e9 utilis\u00e9 en grande quantit\u00e9, \u00e0 la fois sous forme de gazeuse et sous forme de grenades lacrymog\u00e8nes. Tr\u00e8s peu de bless\u00e9s son",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Recette du purin d'ortie Elaboration. Au printemps, d\u00e8s que les orties poussent et avant qu'elles ne fleurissent, r\u00e9coltez 1 kilo de feuilles fra\u00eeches",
		output: "anonymous",
	},
	{
		input:
			"Dan a particip\u00e9 \u00e0 des assembl\u00e9es de la d\u00e9fense collective des gilets jaunes de Toulouse et s\u2019y est impliqu\u00e9 particuli\u00e8rement depuis le mois de mars. O",
		output: "anonyme",
	},
	{
		input:
			"Gageons tout d'abord que ce blog n'est certainement pas le seul \u00e0 s'en r\u00e9jouir, mais surtout que pour le pouvoir le scandale est ailleurs : dans les c",
		output: "..",
	},
	{
		input:
			"Dompierre du Chemin se situe entre Vitr\u00e9 et Foug\u00e8res aux confins orientaux de la Bretagne. Les autres projets ont suscit\u00e9s de nombreuses mobilisations",
		output: "anonyme",
	},
	{
		input:
			"L\u2019\u00c9tat se pr\u00e9sente comme le bon sauveur des sans-d\u00e9fense et s\u2019en vante vis-\u00e0-vis des autres \u00c9tats, quant au nombre de personnes qu\u2019il \u00ab\u00a0accueille\u00a0\u00bb, a",
		output: "-",
	},
	{
		input:
			"Pr\u00e9cision importante : trotskistes s'abstenir. Email de contact: santelmo_AT_no-log.org",
		output: "fab",
	},
	{
		input:
			"Les forces isra\u00e9liennes ont commen\u00e7\u00e9 leurs attaques lorsque les manifestantes se rassemblaient dans la vieille ville. Les policiers les ont notamment ",
		output: "secoursrouge",
	},
	{
		input:
			"Une cinquantaine de personnes, enseignant.e.s, \u00e9l\u00e8ves, parents d'\u00e9l\u00e8ves et ex-enseignant.e.s \u00e9taient donc r\u00e9uni.e.s en Assembl\u00e9e G\u00e9n\u00e9rale pour d\u00e9cider",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"AUDACE Ce samedi l\u00e0, \u00e0 Narbonne, des centaines de Gilets Jaunes se retrouvent au p\u00e9age \u00e0 la sortie de la ville. Un p\u00e9age de la multinationale Vinci. C",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no445-juin-2019.html Lutte syndicale E?cologie anticapitaliste et re?volution. Contre le de?re?glement climat",
		output: "cntnantes",
	},
	{
		input:
			"Une responsable d\u2019une enseigne de v\u00eatements de la rue raconte: \u00ab\u00a0en arrivant ce matin \u00e0 8h40, j\u2019ai d\u00e9couvert de la colle dans la serrure, \u00e9videmment i",
		output: "sansattendre",
	},
	{
		input:
			"Souvenons-nous de l\u2019ind\u00e9cence avec laquelle il avait d\u00e9clar\u00e9, \u00e0 la marge des manifestations de Charlottesville o\u00f9 des militants antiracistes faisaient",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"Il nous faut d'abord rappeler la d\u00e9cision du Tribunal administratif de Nantes du 05 d\u00e9cembre 2017 qui a accord\u00e9 \u00e0 la Pr\u00e9sidence de l'Universit\u00e9 de Nan",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"La troisi\u00e8me condition de L\u00e9nine ?? - R\u00e9sistons Ensemble no 152, mai 2016 Le bulletin no 152, mai 2016 du petit journal mobile recto-verso A4 du r\u00e9sea",
		output: "r\u00e9seaur\u00e9sistonsensemble",
	},
	{
		input:
			"On va cependant rester vigilant-e-s car ces nouvelles proc\u00e9dures peuvent servir pour l \u00c9tat de l\u00e9gitimation du projet (nous avons trop souvent vu ces ",
		output: "collectifterrescommunes",
	},
	{
		input:
			"Une voiture Citro\u00ebn gar\u00e9e juste devant a \u00e9galement \u00e9t\u00e9 endommag\u00e9e par les flammes. \u00ab\u00a0Le v\u00e9hicule incendi\u00e9 et enti\u00e8rement d\u00e9truit est une Peugeot 208 q",
		output: "attaque",
	},
	{
		input:
			"Cette ann\u00e9e, c'est donc un 1er mai important. A Nantes, il y a foule, alors que la r\u00e9volte gronde depuis plus de 5 mois. Des milliers de manifestants ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Photo par Valk : https://secure.flickr.com/photos/valkphotos/sets/72157641402639525/ Un an et demi plus tard, nous sommes toujours l\u00e0. Notre rage et d",
		output: "zadist",
	},
	{
		input:
			"Si vous partagez la m\u00eame impression que nous , l'\u00e9quipe du Magazine libertaire a\u00a0 l'immense plaisir de vous annoncer que nous serons en direct jeudi 3",
		output: "maglib",
	},
	{
		input:
			"\u00e0 Alsetex : \u00ab Malgr\u00e9 les milliers de bless\u00e9\u00b7e\u00b7s par les armes de la police, trop peu de monde avait r\u00e9pondu \u00e0 l'appel pour envisager un r\u00e9el rapport d",
		output: "streetmedicnantes",
	},
	{
		input:
			"Chacune et chacun sont libre de venir aider ou soutenir pour veiller et reconstruire ! source",
		output: "zadist",
	},
	{
		input:
			"Vendredi 6 avril au soir, la soir\u00e9e au bar \u00ab Le Montpe'l \u00bb dans la bonne ville de Montpellier, devait se d\u00e9rouler joyeusement. La salle avait \u00e9t\u00e9 r\u00e9se",
		output: ".",
	},
	{
		input:
			"Le 10 f\u00e9vrier dernier \u00e0 6 heures du matin, dans un froid glacial, plusieurs familles \u00e9taient \u00e9vacu\u00e9es d\u2019un immeuble de Bagnolet par la police. Chass\u00e9s",
		output: "unsympathisantducci",
	},
	{
		input:
			"Au programme :\u00a0\u00a0\u00a0 La safe city : contr\u00f4le total (plus d\u2019infos sur https://technopolice.fr/)\u00a0\u00a0\u00a0 Billet sur le cerveau\u00a0\u00a0\u00a0 Nouvelles de Fabrice Borom\u00e9e (",
		output: "maglib",
	},
	{
		input:
			"Contacts Utiles : mail Infos : zad_AT_riseup.net - mail Soutiens : soutienzad_AT_riseup.net Urgences ZAD (uniquement pour les signalements sur zone) :",
		output: "d\u00e9fendrelazad",
	},
	{
		input:
			"C\u2019est une situation r\u00e9ellement probl\u00e9matique et inqui\u00e9tante. D\u2019autres personnes que nous pourraient l\u2019utiliser de diverses mani\u00e8res en fonction de leu",
		output: "zadist",
	},
	{
		input:
			"Samedi 27 octobre au DIBAR \u00e0 Plougonver 16h, projection d'un film sur les GARI (Groupe d'Action R\u00e9volutionnaire Internationaliste) suivi d'un d\u00e9bat et",
		output: "anonyme",
	},
	{
		input:
			"Depuis plusieurs mois, bon nombre de tags contre les flics, les fronti\u00e8res et les papiers viennent fleurissent au sommet des montagnes des Hautes-Alpe",
		output: ".",
	},
	{
		input:
			"11 Septembre...1973 Salvador Allende, \u00e9lu d\u00e9mocratiquement en 1970, entreprend des r\u00e9formes qui satisfont le peuple mais m\u00e9contentent les milieux des ",
		output: "patricebardet",
	},
	{
		input:
			"Et le chat sur https://webchat.cyberguerrilla.org/#cayenne Email de contact: radiocayenne_AT_riseup.net",
		output: "k-hy\u00e8ne",
	},
	{
		input:
			"Ce mercredi dans le magazine libertaire\u00a0: Pr\u00e9sentation et lectures d\u2019extrait du livre Le travailleur de l\u2019extr\u00eame de \u00c4ke Anst\u00e4llning Chronique sur l\u2019i",
		output: "maglib",
	},
	{
		input:
			"Vous pouvez retrouver les podcasts et infos de Radio Cayenne sur https://Radiocayenne.noblogs.org \u00a0 Email de contact: radiocayenne_AT_riseup.net",
		output: "radiocayenne",
	},
	{
		input:
			"Ces derni\u00e8res semaines, des mobilisations aux formes nouvelles \u00e9taient mises en place localement : blocages de centre-commerciaux, d\u00e9fil\u00e9s en p\u00e9riph\u00e9r",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Vendredi dernier, l'AG etudiante pour \u00e9viter un nouveau blocage a d\u00e9cid\u00e9 d'envoyer une demande de banalisation -annulation des cours et examens- \u00e0 la ",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"et des infos sur le jardin et la lutte en cours! blog Email de contact: lesronces_AT_riseup.net",
		output: "roncier",
	},
	{
		input:
			"Laurent Obertone est encens\u00e9 par Marine Le Pen et l'extr\u00eame droite radicale et identitaire. Comme d'autres il propage les th\u00e9ories sur le \u00ab grand remp",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Selon les journaflics, ils ont reconnu les faits et passeront au tribunal correctionnel de Lorient le 24 octobre pour des faits de violence aggrav\u00e9e s",
		output: "sansattendredemain",
	},
	{
		input:
			"- La Maison du Peuple en \u00e9tat de si\u00e8ge. Les Gilets Jaunes ont ouvert une grande maison du peuple en plein centre ville. Il s'y d\u00e9roule des d\u00e9bats, des",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"La soir\u00e9e s'est termin\u00e9e par une nasse g\u00e9ante rue de l'Arche s\u00e8che, avec contr\u00f4le de tous les papiers des personnes pr\u00e9sentes. Deux soutiens ont \u00e9t\u00e9 i",
		output: "l'autrecantine",
	},
	{
		input:
			"Dans une p\u00e9riph\u00e9rie urbanis\u00e9e laide et quelconque se tient un volume lisse. Devant une pelouse vert plastique pousse sous arrosage automatique. Accroc",
		output: ".",
	},
	{
		input:
			"\u00a0 Deuxi\u00e8me\u00a0interdiction\u00a0:\u00a0toujours\u00a0plus\u00a0de\u00a0d\u00e9termination\u00a0! Le droit de manifester n'est pas n\u00e9gociable. La CNT se r\u00e9jouit de la tenue de la manifestat",
		output: "cntnantes",
	},
	{
		input:
			"Nous sommes en plein coeur de la tr\u00eave hivernale, avec des temp\u00e9ratures proches de 0 la nuit et de la pluie. Plusieurs familles ont err\u00e9 dans les rues",
		output: "l'autrecantinenantes",
	},
	{
		input:
			"\u00a0 Si les contours de l'op\u00e9ration restent flous, Nicole Klein pr\u00e9f\u00e8te de Loire-Atlantique (aujourd'hui directrice de cabinet chez De Rugy) a depuis des",
		output: "anon",
	},
	{
		input:
			"On sera en ligne ce soir, \u00e0 partir de 19h comme chaque lundi sur https://radio.antirep.net Au programme : - T\u00e9moignages de proches de personnes assass",
		output: "radiocayenne",
	},
	{
		input:
			"Pour rappel: depuis 6 mois de nombreux demandeurs d'asile ont trouv\u00e9 un maigre abri dans un gymnase d\u00e9saffect\u00e9 de Beaus\u00e9jour. Ils y ont pass\u00e9 l'hiver ",
		output: "l'autrecantinenantes",
	},
	{
		input:
			"> Rappelons que seuls les citoyens se sont mobilis\u00e9s au d\u00e9part contre ce projet, et c'est \u00e0 force de mobilisations que certains \u00e9lus ont os\u00e9 s'int\u00e9res",
		output: "anonyme",
	},
	{
		input:
			"Pour le moment un peu de musique avant de parler de la situation au Chili avec notre invit\u00e9 Kiltro, on parlera aussi de la marche pour le climat et de",
		output: "radiocayenne",
	},
	{
		input:
			"Ce soir on cause r\u00e9pression judiciaire et LBD. On va aussi passer plein de musique trop cool et parler d'autres trucs mais on vous laisse la surprise ",
		output: "radiocayenne",
	},
	{
		input:
			"Dans la chambre 23-3, passeront d'abord les pr\u00e9venus ayant \u00e9t\u00e9 plac\u00e9s en d\u00e9tention provisoire (parmi lesquels plusieurs compagnons). Compara\u00eetront aus",
		output: ".",
	},
	{
		input:
			"Au programme de cette soir\u00e9e, un retour sur la loi anti-casseurs nouvellement promulgu\u00e9e, d\u00e9couverte d'un anime chinois sur la vie de Karl Marx, retou",
		output: "radiocayenne",
	},
	{
		input:
			"- Un vieux son made in cayenne de 2016 \"Ecologie et greenwashing\" - Un son qu'on sait plus comment qu'il s'appelle (\"C'est des r\u00e9flexions sur un truc\"",
		output: "radiocayenne",
	},
	{
		input:
			"Ensemble, fermons le local identitaire, fasciste et raciste r\u00e9cemment inaugur\u00e9 avenue Pasteur ! Depuis La Manif pour Tous de 2012-2013, l\u2019extr\u00eame-droi",
		output: "x",
	},
	{
		input:
			"Nous avons \u00e9galement appris que suite \u00e0 notre appel, la chambre d'agriculture a appel\u00e9 les 80 stagiaires BPREA \u00e0 ne pas venir lundi (soit-disant pour ",
		output: "collectifterrescommunes",
	},
	{
		input:
			"Le mouvement dit des gilets jaunes semble \u00eatre arriv\u00e9 \u00e0 un tournant. La r\u00e9pression et la fatigue ont fait leur \u0153uvre, comme les appels incessants \u00e0 re",
		output: "desanarchistes",
	},
	{
		input:
			"Le proprio a fait appel \u00e0 Enedis pour venir couper l'\u00e9l\u00e9ctricit\u00e9 depuis la rue ! Il va falloir environ 5jours pour la remettre, \u00e7a veut dire pas de lu",
		output: "l'autrecantine",
	},
	{
		input:
			"Quand la foule s'\u00e9lance, autour de 10H30, nous sommes pr\u00e8s de 5000 personnes dans la rue, par un froid mordant. En t\u00eate, un cort\u00e8ge o\u00f9 se m\u00ealent silho",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"L'AG a act\u00e9 un calendrier pour les jours \u00e0 venir, notez bien tout : Demain Mercredi 11 \u00e0 6h : rdv au rond point Porte de Grand-Lieu ! Demain 10h : ate",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"9 janvier - au passage du cort\u00e8ge devant la MDP 10 janvier Manifestation du 09/01/2020. Petit coucou de la Mdp de St Nazaire en ce 09 Janvier 2020. Gr",
		output: ".",
	},
	{
		input:
			"Quand on s\u2019en prend \u00e0 un des aspects de ce monde c\u2019est avant tout pour nous-m\u00eames. Pour arracher un petit peu de cette vie qui nous est vol\u00e9e chaque j",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Selon des t\u00e9moins, l'homme est \u00ab habituellement un client respectueux \u00bb, mais qui, cette fois, semble \u00ab au bout de sa vie \u00bb. Il a besoin de r\u00e9cup\u00e9rer ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Juillet 1995 Dans Combat Breton est publi\u00e9 un texte de M\u00e9lanie, du groupe Fulor Bro Naoned. Ce groupe anarcho-ind\u00e9pendantiste est proche d'Emgann, tou",
		output: "dispac'h",
	},
	{
		input:
			"Comme nous le soulignons dans un communiqu\u00e9 envoy\u00e9 en d\u00e9but de semaine, le conseil d\u00e9partemental n\u2019a pas souhait\u00e9 se donner les moyens, lors de la sig",
		output: "zadist",
	},
	{
		input:
			"Les chorniqueuses de Radio Cayenne Au programme de la meilleure radio nantaise de tous les temps, r\u00e9pression, gr\u00e8ve de la faim des \u00e9tudiant-es \u00e9trang\u00e8",
		output: "radiocayenne",
	},
	{
		input:
			"Une milice est venu, arm\u00e9e de tracteurs avec tonnes \u00e0 lisiers et de marteaux, piquets et autres objets contondants pour casser du zadiste et d\u00e9truire ",
		output: "collectifterrescommunes",
	},
	{
		input:
			"En effet Jadot c'est: -la soumission au PS,(loi travail, \u00e9tat d'urgence, 49.3 et compagnie) en 2017 -favorable \u00e0 des alliances avec la droite aux muni",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"( La th\u00e9orie r\u00e9volutionnaire est maintenant ennemie de toute id\u00e9ologie r\u00e9volutionnaire , et elle sait qu'elle l'est.) G. E. Debord , la Soci\u00e9t\u00e9 du spe",
		output: "patricefaubertditpatl'invit\u00e9",
	},
	{
		input:
			"Dimanche prochain 23 septembre \u00e0 partir de 14h: on pr\u00e9pare le jardin pour les saisons froides! Au programme, chantier paillage et semis d'engrais vert",
		output: "roncier",
	},
	{
		input:
			"L\u2019attaque s\u2019est produite en dehors du parcours d\u00e9pos\u00e9 de la manifestation, au moment o\u00f9 environ 200 manifestants empruntaient la rue du Pr\u00e9-Bott\u00e9, o\u00f9 ",
		output: "sansattendre",
	},
	{
		input:
			"ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0KLX: #InfoTrafflic de https://radioklaxon.antirep.net/\u00a0TWT: autres sour",
		output: "zad",
	},
	{
		input:
			"[#zad #NDDL] Hello ! Des raquettes et des pommes de pin contre des munitions militaires... via @ValKphotos ZAD: #FlashInfo de zad.nadir https://zad.na",
		output: "zad",
	},
	{
		input:
			"CORT\u00c8GE DE T\u00caTE A Nantes le matin, la foule se masse sous les remparts du Ch\u00e2teau des Ducs, sur l\u2019esplanade maussade du Miroir d\u2019eau. Il y a beaucoup ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"\u00a0 \u00a0 Ces fascistes, monarchistes et identitaires ont attaqu\u00e9 en soir\u00e9es des bars, des groupes\u00a0 et des personnes identifi\u00e9-e-s ou fantasm\u00e9-e-s comme LGB",
		output: "a",
	},
	{
		input:
			"\u00c9tant donn\u00e9e que ce monde nous fait gerber , et suite aux r\u00e9voltes dans les CRA de Vincennes et de Rennes. On s'est ballad\u00e9 pour tagger contre les CRA",
		output: "a",
	},
	{
		input:
			"A partir de l\u00e0, il n'y a plus vraiment de manifestation, mais une nasse g\u00e9ante. La foule est encercl\u00e9e sur plusieurs dizaines de m\u00e8tres, par des genda",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			'photos : https://zad.nadir.org/spip.php?article4045 : "Nous avons re\u00e7u un message du Rojava avec une photo de soutien. En r\u00e9ponse une photo de solidar',
		output: "*",
	},
	{
		input:
			"5 JUIN : tous \"Manifestants\" pour L'AVENIR DE L'ASSURANCE MALADIE et le droit \u00e0 la sant\u00e9 Les organisations syndicales CGT 44, UNSA 44, FSU 44, G 10 So",
		output: "anonymous",
	},
	{
		input:
			"A l'inverse, les mouvements longs s'enlisent souvent sans faire reculer le gouvernement. La mobilisation contre la Loi Travail, avec des manifestation",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"SUIVI (\u00e0 peu pr\u00e8s) LIVE ZAD & ZResist & KLAXON & twitter &... ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0KLX: #Inf",
		output: "zad",
	},
	{
		input:
			"Nous, lyc\u00e9ens de 31 lyc\u00e9es, r\u00e9unis en coordination r\u00e9gion parisienne, restons mobilis\u00e9s contre les r\u00e9formes Darcos et la casse de notre \u00e9ducation. Mal",
		output: "anonyme",
	},
	{
		input:
			"Cher Monsieur Hessel, Ch\u00e8re Madame Shahid, chers participants, Je suis d\u00e9sol\u00e9e de ne pas pouvoir assister \u00e0 cette conf\u00e9rence importante. Pourtant, je ",
		output: "patricebardet",
	},
	{
		input:
			"\u00a0 Contacts Utiles : mail Infos : zad_AT_riseup.net - mail Soutiens : soutienzad_AT_riseup.net Urgences ZAD (uniquement pour les signalements sur zone)",
		output: "d\u00e9fendrelazad",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no423-mai-2017.html LUTTES SYNDICALES Education brune\u00a0: leurre programme... Discours, projets pour l\u2019\u00e9ducatio",
		output: "cntnantes",
	},
	{
		input:
			"Explication : L\u2019association \u00ab Projet 244 \u00bb s\u2019est cr\u00e9\u00e9e en 1999 sur le site d\u2019une ancienne usine de charpente m\u00e9tallique au 244 rue Auguste Chevalier \u00e0",
		output: "anonyme",
	},
	{
		input:
			"ela n\u2019a bien s\u00fbr pas \u00e9t\u00e9 du go\u00fbt de certain.e.s, qui, \u00e9coeur\u00e9.e.s \u00e0 l\u2019id\u00e9e de laisser ces zadistes f\u00eater ces deux ann\u00e9es de tractation politicienne et",
		output: "sansattendre",
	},
	{
		input:
			"photo : Nicolas Moll\u00e9 2000 personnes dans les rues de Nantes ce soir pour la marche nocturne aux flambeaux contre la casse des retraites et le gouvern",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"De 2008 \u00e0 2014, l'\u00c9tat belge a men\u00e9 une vaste enqu\u00eate visant les luttes multi-formes - mais toujours en-dehors des sentiers battus - qui s'attaquaient",
		output: "*",
	},
	{
		input:
			"Les autorit\u00e9s ont donc d\u00e9ploy\u00e9s pr\u00e9ventivement des forces de l'ordre aux abords des bahuts. A Cl\u00e9menceau, \u00ab on s'est fait d\u00e9gager notre blocus par les",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Nous avons besoin de votre aide pour continuer, et faire avancer notre projet de m\u00e9dia ind\u00e9pendant. Si vous aimez notre travail, nos prises de positio",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"http://ulnantes.cnt-f.org/spip.php?article145 La CNT 44 apporte son soutien au centre culturel kurde de Nantes suite \u00e0 l'incendie criminel dont il a \u00e9",
		output: "cntnantes",
	},
	{
		input:
			"Gilles Penelle et Marine Le Pen Le tract d\u2019appel au pique-nique antifasciste : Le jeudi 30 janvier, Marine Le Pen viendra \u00e0 Brest, pour donner une con",
		output: ".",
	},
	{
		input:
			"carte de l'intervention annonc\u00e9e VENIR SUR PLACEPour rejoindre la zad / Pour acc\u00e9der \u00e0 la zone, voir ICI :\u00a0 https://web.archive.org/web/20180311232938",
		output: "d\u00e9fendrelazad",
	},
	{
		input:
			"Jolies ambiances, clowns et battucada, \u00e7a #passalest sur la #zad #NDDL ! via @kaamikali \u00a0 ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?",
		output: "zad",
	},
	{
		input:
			"Vers 16 h 30, alors que la t\u00eate de liste tenait une r\u00e9union avec des colistiers et son \u00e9quipe de campagne, une douzaine d\u2019individus, gar\u00e7ons et filles",
		output: "attaque",
	},
	{
		input:
			"Ecoutez le live de la journ\u00e9e de mobilisation du 17/12 \u00e0 Nantes sur : https://radiocayenne.antirep.net \u00e0 partir de 9hEnvoyez vos infos (seulement cell",
		output: "radiocayenne",
	},
	{
		input:
			"D\u00e9claration de l\u2019Assembl\u00e9e de la Marche des Solidarit\u00e9s.\u00a0 R\u00e9unie en assembl\u00e9e ce dimanche 31 mars 2019 dans les locaux de l\u2019Union syndicale Solidaires",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Il est enferm\u00e9 depuis bient\u00f4t un an et demi et sa date provisoire de lib\u00e9ration est en f\u00e9vrier 2019. L'audience intervenait 9 mois apr\u00e8s qu'il en ait ",
		output: ".",
	},
	{
		input:
			"Laissez vivre nos enfants Bassam Aramin a pass\u00e9 9 ann\u00e9es dans une prison isra\u00e9lienne pour avoir \u00e9t\u00e9 membre du Fatah dans le district de H\u00e9bron, et pou",
		output: "anonymous",
	},
	{
		input:
			"Vous pouvez, jusqu'\u00e0 la fin de la semaine prochaine, d\u00e9poser diverses choses : - Couvertures, draps de toutes sortes, al\u00e8ses, serviettes de toilettes,",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Exemple de tricot policier On a en t\u00eate que ce genre d\u2019op\u00e9rations en rafale (7 lieux perquisitionn\u00e9s en deux jours sur Toulouse, Limoges, Ambert et Am",
		output: "xxx",
	},
	{
		input:
			"\u00a0 Le site du domaine de La Plantation a \u00e9t\u00e9 class\u00e9 par la Convention Natura 2000 cr\u00e9e par le Minist\u00e8re de l'Environnement et de l' Ecologie il y a plu",
		output: "*",
	},
	{
		input:
			"Apr\u00e8s avoir post\u00e9 un sondage bidon sur la n\u00e9cessit\u00e9 d'une fac ouverte (qui ne voudrait pas d'une fac ouverte, les personnes mobilis\u00e9es furent les prem",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Suite \u00e0 des plaintes d\u00e9pos\u00e9es pour agression le matin du 6 juin, la police a mont\u00e9 une op\u00e9ration visant \u00e0 retrouver les pr\u00e9sum\u00e9s coupables sur la zad ",
		output: "zadist",
	},
	{
		input:
			"INTERVENTION DE SIMON ASSOUN Beaucoup de choses ont d\u00e9j\u00e0 \u00e9t\u00e9 d\u00eetes, je vais essayer de ne pas \u00eatre redondant par mon propos. Je voulais revenir sur la",
		output: "ujfp",
	},
	{
		input:
			"Jeudi matin, 7h00, une arm\u00e9e de flics est d\u00e9ploy\u00e9e dans le quartier Graslin. Tout est boucl\u00e9, l'ancien EHPAD de Br\u00e9a va \u00eatre expuls\u00e9... Un matelas est",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"La pr\u00e9sence humaine sur le site est consid\u00e9r\u00e9e comme n\u00e9faste pour l\u2019environnement, \u00e0 l\u2019exception de l\u2019activit\u00e9 militaire, qui selon les avis ont permi",
		output: "...",
	},
	{
		input:
			"*LLAMAMIENTO DESTINADO A LOS PAISES FRANCOFONOS Nous pro\u00adpo\u00adsons que les mani\u00adfes\u00adta\u00adtions ne se r\u00e9dui\u00adsent pas aux ambas\u00adsa\u00addes espa\u00adgno\u00adles de vos p",
		output: "anonyme",
	},
	{
		input:
			'HEAR THIS YOU FOOLISH AND SENSELESS PEOPLE! "Hear this, you foolish and senseless people, who have eyes but do not see, who have ears but do not hear.',
		output: "bobbymeade",
	},
	{
		input:
			"En n'\u00e9tant pas au rendez-vous qu'attend le peuple de gauche, ces chefs de file de la vraie gauche vont rater une occasion rare et d\u00e9cevoir cruellement",
		output: "verdi",
	},
	{
		input:
			"25 novembre 1997 : \u00c0 Rennes commence le proc\u00e8s de Guillaume Morin, militant d\u2019Emgann. Il est poursuivi pour \u00ab outrage \u00e0 l\u2019arm\u00e9e \u00bb et \u00ab outrage \u00e0 une p",
		output: "dispac'h",
	},
	{
		input:
			"des gilets Jaunes ou v\u00e9t\u00e9ments jaunes\u00a0 (avec ou sans slogans) parapluies en nombre Banderoles\u00a0 ( avec embrouilles) des tracts\u00a0 ( avec embrouilles) \u00a0de",
		output: "a",
	},
	{
		input:
			"Ce soir : on vous a concoct\u00e9 musicale de la bonne humeur, on vous causera v\u00e9g\u00e9tarisme, on parlera d'Aboubacar Fofana tu\u00e9 par un CRS il y a un an, on f",
		output: "radiocayenne",
	},
	{
		input:
			"\u00ab On a cru que c'\u00e9tait des policiers en intervention \u00bb raconte une femme t\u00e9moin de la sc\u00e8ne. Cette attaque n\u00e9o-nazie n'est malheureusement pas un \u00e9v\u00e9n",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Division Nationaliste r\u00e9volutionnaire compl\u00e8te Nous avions d\u00e9j\u00e0 publi\u00e9 un article sur la Division Nationaliste R\u00e9volutionnaire \u00a0lorsqu\u2019ils voulaient o",
		output: "lahorde",
	},
	{
		input:
			'Le 31 juillet le squat de la Grande Ourse \u00e0 Angers se faisait expuls\u00e9, apr\u00e8s une semaine de "relogement" en hotel, plusieurs personnes se retrouvent d',
		output: "radiocayenne",
	},
	{
		input:
			"9 avril 2018 : Apr\u00e8s l'abandon du projet d'a\u00e9roport, des milliers de gendarmes d\u00e9barquent sur la ZAD pour tenter de r\u00e9duire \u00e0 n\u00e9ant cette zone bretonn",
		output: "dispac'h",
	},
	{
		input:
			"Cr\u00e9dit photo : ValK (cc-by-nc-sa) Cette semaine : \u2013 La lutte des camarades sans papiers \u00e0 l\u2019agence Chronopost d\u2019Alfortville et diffus\u00e9 un extrait de l",
		output: "maglib",
	},
	{
		input:
			"L\u2019\u00c9tincelle, lieu associatif alternatif, militant et culturel proposant des activit\u00e9s ouvertes \u00e0 tous et toutes (et pas seulement aux personnes \u00ab\u00a0blan",
		output: ".",
	},
	{
		input:
			"un article sur Antoine Planchenault, agresseur r\u00e9cidiviste, patron du Back caf\u00e9 \u00e0 Saint-Nazaire Notre collectif Guerri\u00e8res de l'Ouest a pris la parole",
		output: "...",
	},
	{
		input:
			"Cela fait maintenant un petit moment que la page ne propose plus de publications. Nous tenions \u00e0 vous en expliquer la raison ... Mardi 14 janvier 2020",
		output: ".",
	},
	{
		input:
			"Ce soir sur @radiocayenne pas de direct mais des redifs d'\u00e9missions/podcasts. Avec du @radiocayenne, mais aussi des extraits de @l_envolee, @Acentrale",
		output: "radiocayenne",
	},
	{
		input:
			"UNE IMMENSE COL\u00c8RE C\u2019est dans un contexte particuli\u00e8rement tendu que cette grande manifestation de rentr\u00e9e est organis\u00e9e. Un mouvement des Gilets Jaun",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pas de live ce soir, mais plein d'extraits de podcasts venus d'ailleurs : D\u00e9p\u00eache de Livo, Canut Infos, Karacole, Le Magazine libertaire. \u00a0 C'est main",
		output: "radiocayenne",
	},
	{
		input:
			"Le chat sur https://webchat.cyberguerrilla.org/#cayenne \u00a0 Email de contact: radiocayenne_AT_riseup.net",
		output: "radiocayenne",
	},
	{
		input:
			"On nous explique qu\u2019 \u00ab\u00a0\u00e0 l\u2019int\u00e9rieur, tout a fondu et comme il s\u2019agit de c\u00e2bles en cuivre, la chaleur s\u2019est transmise jusque dans la chambre, au pied ",
		output: "sansattendredemain",
	},
	{
		input:
			"30/10, le volcan Nevados de Chill\u00e1n en phase avec les \u00e9meutier.e.s depuis quelques jours La Serena, 19/10 la banque plus Security du tout Iquique, 30/",
		output: "solidari@s",
	},
	{
		input:
			"Oh mon Dieu on a tu\u00e9 la ZAP ! Et bien non ;) Suite au prochain \u00e9pisode \u00e0 construire avec vous toutes et tous ! Yo les ami-e-s ! En attendant l\u2019investi",
		output: "collectifterrescommunes",
	},
	{
		input:
			"On va parler : - de la gr\u00e8ve et du mouvement en cours contre la reforme des retraites, - de la CAF - un peu d'anti-r\u00e9pression - d'un nouvel outil pour",
		output: "radiocayenne",
	},
	{
		input:
			'"Nous avons [m\u00eame] perdu la peur" Conchal\u00ed, incendie de l\'hypermarch\u00e9 en gros Central Mayorista Santiago, hall saccag\u00e9 de la Torre Telef\u00f3nica Santiago',
		output: "solidari@s",
	},
	{
		input:
			"La lutte contre l\u2019a\u00e9roport de Notre-Dame-des-Landes a \u00e9t\u00e9 men\u00e9e par un large mouvement composite aux tendances anticapitaliste, \u00e9cologiste, paysanne, ",
		output: "...",
	},
	{
		input:
			"Message d'un etudiant: \"Ca fait 5 ans que je bosse de nuit -sans dormir- en parall\u00e8le de mes \u00e9tudes. Plus rare pour moi depuis un an, j'ai encore des ",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"\u00a0Radio cayenne en direct des luttes. Envoyez vos infos (#blocages, #gr\u00e8ves, #infotraflic...) \u00e0 06 05 75 34 50 on les retransmet \u00e0 l'antenne !",
		output: "radiocayenne",
	},
	{
		input:
			"Pudahuel (Santiago), restes du supermarch\u00e9 Mayorista 10 Concepci\u00f3n, incendie du si\u00e8ge des assurances Liberty Seguros La Serena, incendie d'une station",
		output: "solidari@s",
	},
	{
		input:
			"Arriv\u00e9 \u00e0 4H du mat sur les lieux, d\u00e9j\u00e0 de nombreuses personnes pr\u00e9sentes devant la raffinerie. Quelque chose comme 50 personnes se sont donn\u00e9es rendez",
		output: "anonyme",
	},
	{
		input:
			"Dans cette \u00e9mission : Mobilisation \u00e9tudiante contre la pr\u00e9carit\u00e9 Mobilisation des accompagnants d'\u00e9l\u00e8ves en situation de handicap Deuxi\u00e8me partie du b",
		output: "maglib",
	},
	{
		input:
			"je ne partage pas la position social-d\u00e9mocrate d'Hessel, ni de pr\u00e8s, ni de loin Je ne fais pas partie de ses fans politiques, dont on peut s'interroge",
		output: "patricebardet",
	},
	{
		input:
			"Le d\u00e9put\u00e9 a d\u00e9pos\u00e9 plainte \u00e0 la gendarmerie. De son c\u00f4t\u00e9, l\u2019intersyndicale du pays de Dinan n\u2019a pas trouv\u00e9 de mots assez durs pour condamner quelques ",
		output: "sansattendre",
	},
	{
		input:
			"On va causer antis\u00e9mitisme/antisionisme, confusionnistes, abolition du syst\u00e8me carc\u00e9ral, gilets jaunes, etc. \u00c0 tout de suite les cailloux ! Retrouvez ",
		output: "radiocayenne",
	},
	{
		input:
			"https://commons.wikimedia.org/wiki/File:Commune_de_Paris_parloir_%C3%A0_St_Lazare.jpg Dans le carde de la LOI n\u00b0 2016-731 du 3 juin 2016 renfor\u00e7ant la",
		output: "*",
	},
	{
		input:
			"Le 6 octobre dernier, iels \u00e9taient 2500 \u00e0 se r\u00e9unir pour occuper les lieux et protester contre ce projet de port. Il n\u2019en fallait pas plus pour \u00e9veill",
		output: ".",
	},
	{
		input:
			"- Nantes compte \u00e0 pr\u00e9sent 134 cam\u00e9ras de surveillance qui quadrillent la ville - La ville a cr\u00e9\u00e9 un \u00ab Centre de Supervision Urbaine \u00bb, autrement dit, ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Et vous pouvez causer avec nous en direct sur https://webchat.cyberguerrilla.org/#cayenne et retrouvez les news et podcasts sur https://radiocayenne.n",
		output: "radiocayenne",
	},
	{
		input:
			"De la consommation technologique \u00e0 sa consumation Antofagasta, l'Unimarc apr\u00e8s liquidation totale Maip\u00fa (Santiago), nouvel incendie d'une station de m",
		output: "solidari@s",
	},
	{
		input:
			"\u201cM\u00e9tropole apais\u00e9e ou mairie enflamm\u00e9e ? Ce dimanche 29 septembre 2019, \u00e0 l\u2019heure o\u00f9 les chats noirs sont de sortie, des briquets cagoul\u00e9s, issus de l",
		output: "*",
	},
	{
		input:
			"Une personne pr\u00e9sente raconte : \u00ab une vingtaine de militants \u00e9tait engag\u00e9e dans les caisses avec des caddies pleins [\u2026] Une soixantaine de vigiles \u00e9ta",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"LA LUTTE CONTRE L\u2019ISLAMOPHOBIE EST AUSSI UNE LUTTE F\u00c9MINISTE(et il est grand temps que nous le comprenions) L\u2019islamophobie actuelle ne vient pas de nu",
		output: "collectif",
	},
	{
		input:
			"Photo : Estelle Ruiz Au sein de cette \u00ab Manif Pour Tous \u00bb, des individus ouvertement n\u00e9o-nazis ont attaqu\u00e9 des militants et militantes pour l'\u00e9galit\u00e9 ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Qu'est ce qu'une grenade \u00ab offensive \u00bb ? Les flics font usage de deux types de grenades explosives lors du maintien de l'ordre, souvent confondues par",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Un programme est en cours d'\u00e9laboration pour demain avec d\u00e9j\u00e0 pos\u00e9 en amphi E: D\u00e8s 8h, des d\u00e9bats, notamment sur l'enseignement et la recherche. \u00c0 16h",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"\u00ab Dans la nuit, un ou plusieurs individus ont \u00e9galement p\u00e9n\u00e9tr\u00e9 vers une heure, dans le parking d\u2019un site de Toulouse M\u00e9tropole rue Louis Vitet dans l",
		output: "sansattendre",
	},
	{
		input:
			"le DAL 44 Solidaires Nantes. Un nouveau squat ouvert pour les exil\u00e9s dans un gymnase pr\u00e8s de Talensac Ouest France - Julie Cateau - Publi\u00e9 le 06/02/20",
		output: "...",
	},
	{
		input:
			"Non aux expulsions \u00e0 Notre-Dame-des-Landes\u00a0!Non \u00e0 l'A\u00e9roport Grand Ouest (AGO)Non au monde que Vinci veut nous construire En solidarit\u00e9 avec les famil",
		output: "@",
	},
	{
		input:
			"derri\u00e8re cet \u00ab ennemi \u00bb officiel de l\u2019occident (qui sert tr\u00e8s bien nombre de ses desseins et app\u00e9tits financiers au proche orient) , l\u2019argent et les a",
		output: "solidarit\u00e9aveclaluttedupeupleiranien",
	},
	{
		input:
			">> >> Important car l'ampleur des actions qui ont bouscul\u00e9 le syst\u00e8me nucl\u00e9aire >> d\u00e9but novembre d\u00e9passe les fronti\u00e8res. 50000 opposants au nucl\u00e9aire",
		output: "moi",
	},
	{
		input:
			"C\u2019est l\u00e0 qu\u2019on voit l\u2019hypocrisie des modos qui continuent \u00e0 parler de surpublication et qui s\u2019empressent de bloquer les commentaires des sujets qui le",
		output: "antifa",
	},
	{
		input:
			"http://www.cnt-f.org/ulnantes/spip.php?article139 Une salle municipale a \u00e9t\u00e9 r\u00e9serv\u00e9e par le m\u00e9dia d\u2019extr\u00eame droite Breizh Info pour une conf\u00e9rence pu",
		output: "cntnantes",
	},
	{
		input:
			"1\u00e8re Coordination nationale \u00e9tudiante (samedi 14 et dimanche 15 f\u00e9vrier \u00e0 Rennes II) se prononce pour l\u2019abrogation de la LRU, du LMD, et la \u00ab cessatio",
		output: "anonyme",
	},
	{
		input:
			"\u00ab\u00a0Le blop\u00a0, un g\u00e9nie sans cerveau\u00a0\u00bb Ce documentaire qui est en podcast sur ARTE, au-del\u00e0 de r\u00e9v\u00e9ler les extraordinaires capacit\u00e9s physiques de cet org",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 6550 Pas de titre pour 6548 Pas de titre pour 6546 Pas de titre pour 6544 Pas de titre pour 6542 Pas de titre pour 6540 Pas de titre",
		output: "valk",
	},
	{
		input:
			"APPEL A UN REFUS TOTAL DE L'INFORMATISATION DE NOS DONNEES DE SANTE ADAS Association de D\u00e9fense des Assur\u00e9s Sociaux :4 rue de Cardurand 44600 Saint-Na",
		output: "anonymous",
	},
	{
		input:
			"Ce soir, on rediffuse un extrait de la conf\u00e9rence de Gwenola Ricordeau autour du bouquin Pour elles toutes (montage par La Revanche des Zh\u00e9risson et C",
		output: "radiocayenne",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no431-fevrier-2018.html LUTTES SYNDICALES La pseudo-rupture \u00e0 l\u2019amiable conjugu\u00e9e au pluriel forc\u00e9. p.2 ICI E",
		output: "cntnantes",
	},
	{
		input:
			"Face \u00e0 la gravit\u00e9 de la situation, \u00e0 partir du lundi 23 mars, L\u2019Envol\u00e9e va diffuser \u00e0 19h une \u00e9mission quotidienne d\u2019un quart d\u2019heure sur FPP (106.3 M",
		output: "anonyme",
	},
	{
		input:
			"Certains d\u2019entre eux ont grimp\u00e9 sur une plate-forme de l\u2019entr\u00e9e principale afin de remplacer la publicit\u00e9 automobile par une banni\u00e8re sur laquelle \u00e9ta",
		output: "secoursrouge",
	},
	{
		input:
			"La critique des E3C port\u00e9e dans cet l'article \"Le scandale des E3C\" est... tr\u00e8s mauvaise. Le probl\u00e8me des E3C n'est pas la rupture d'\u00e9galit\u00e9 - qui exi",
		output: "-",
	},
	{
		input:
			"Conf\u00e9rence-D\u00e9bat avec Michel Warschaski La mercredi 28 avril 2004 \u00e0 20h30 Maison du Peuple (salle E) Michel Warschaski est l'une des figures les plus ",
		output: "anonymous",
	},
	{
		input:
			"Peut on faire confiance aux services sociaux\u00a0 dans cette soci\u00e9t\u00e9 de plus en plus polici\u00e8re ? \u00a0 On connait la violence\u00a0 du bras arm\u00e9 de l'Etat mais il ",
		output: "larage",
	},
	{
		input:
			"Appel national\u00a0: Jeudi 7 juin - 10 H - DEVANT TOUTES LES PREFECTURES et \u00e0 Rennes - RDV 9h \u00e0 la Pr\u00e9fecture de BEAUREGARD, Attention, ce n\u2019est pas o\u00f9 es",
		output: ".",
	},
	{
		input:
			"Pas de titre pour 657 DU 8 OCTOBRE AU 29 NOVEMBRE : SEMAINES DE \u00ab CREATION EN RESISTANCE \u00bb AU LIEU UNIQUE LUNDI 20 OCTOBRE : 18h30-20h30 / Lieu Unique",
		output: "anonymous",
	},
	{
		input:
			"Ces travailleurs ont commenc\u00e9 un nouveau cycle de gr\u00e8ves, qui fait suite \u00e0 leur pr\u00e9c\u00e9dente gr\u00e8ve qui avait dur\u00e9e onze journ\u00e9es le mois de Mars 2011 de",
		output: "soliranparis",
	},
	{
		input:
			'Bonjour. Prenez le temps de lire ce message jusqu\'au bout, il contient comme un chaque fois un "point sp\u00e9cial" sur un th\u00e8me g\u00e9n\u00e9ral, cette fois-ci sur',
		output: "anonymous",
	},
	{
		input:
			"Dans un contexte de gal\u00e8re generalis\u00e9e, on est favorable aux initiatives qui s'attaquent directement aux dirigeant.e.s. Prennons tout ce qui nous appa",
		output: "anonym",
	},
	{
		input:
			"Le 22 janvier 2019 au matin, 4 perquisitions ont eu lieu chez des camarades des milieux anarchiste et f\u00e9ministe de Grenoble. Elles ont \u00e9t\u00e9 men\u00e9es dans",
		output: "anonyme",
	},
	{
		input:
			"Quand le fric et les profits rendent fous. Cette \u00ab intervention \u00bb de ce cadre de Nokia a \u00e9t\u00e9 Trouv\u00e9e sur le forum du blog dentelle et tchador fait par",
		output: "solidarit\u00e9aveclaluttedupeupleiranien",
	},
	{
		input:
			"Les \u201cEtudiants critiques de Utrecht\u201d (KSU), la F\u00e9d\u00e9ration Anarcho-Syndicaliste (ASB) et le Courant Communiste International (CCI), ont publi\u00e9 aux Pays",
		output: "unsympathisantducci",
	},
	{
		input:
			"Au moins 12 universit\u00e9s (ou sites universitaires) sont en gr\u00e8ve avec piquets de gr\u00e8ve : Angers, Arras, Aix Marseille III, Limoges, Le Mans, Nantes, Pa",
		output: "anonyme",
	},
	{
		input:
			"Travaillant jusqu'\u00e0 peu sans grande publicit\u00e9 dans les soubassements de Framasoft, nous sommes heureux de pouvoir aujourd'hui prendre notre envol gr\u00e2c",
		output: "anonymous",
	},
	{
		input:
			"INTRODUCTION Le cycle de luttes et insurrections dont les peuples qui habitent la Bolivie ont \u00e9t\u00e9 les acteurs depuis 2000, est peut-\u00eatre la plus profo",
		output: "fab",
	},
	{
		input:
			"alentin B. est accus\u00e9 d'avoir incendi\u00e9 La Rotonde, ce restaurant o\u00f9 le pr\u00e9sident Emmanuel Macron est venu f\u00eater son accession au second tour de l'\u00e9lec",
		output: "anon",
	},
	{
		input:
			"http://www.serpsy.org/piste_recherche/violence(s)/violence_institution.html Vous avez dit violence? Un sujet \u00e0 la mode D. Friard La violence est un su",
		output: "anonymous",
	},
	{
		input:
			"Quelques informations importantes au sujet d'Indymedia Grenoble le 7 d\u00e9cembre 2018 Bonjour, je suis l'ancien administrateur syst\u00e8me d'Indymedia Grenob",
		output: ".",
	},
	{
		input:
			"\u201cAmateurisme\u201d, \u201cdangerosit\u00e9\u201d, \u201cincurie\u201d : ce sont les termes les plus couramment utilis\u00e9s de la part de l\u2019ensemble du corps m\u00e9dical au sujet de la cam",
		output: "unsympathisantducci",
	},
	{
		input:
			"Nantes, ce matin, emprise du Port autonome aux limites des communes de Bouguenais et de Rez\u00e9, deux expulsions en cours. Dispositif policier impression",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 2391 {{{32 000 TONNES DE TOURTEAU DE SOJA OGM ARRIVENT A LORIENT JEUDI 27 JANVIER}}} {Communiqu\u00e9 GreenPeace, Conf\u00e9deration Paysanne,",
		output: "anonymous",
	},
	{
		input:
			"La semaine derni\u00e8re, des tags obsc\u00e8nes souillant la m\u00e9moire du d\u00e9funt \u00e9taient r\u00e9alis\u00e9s sur cette fresque. Des tags de l'extr\u00eame droite, se r\u00e9jouissant",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"GRENOBLE: LA MORDUE EXPULSEE ! Message rapide ----------------------------------------- la Mordue c'\u00e9tait au 9 rue Jacques Thibault, 38 Grenoble, \u00e0 la",
		output: "anonymous",
	},
	{
		input:
			"Qui, sinon nous ? Quand, sinon maintenant ? O\u00f9, sinon partout ? Nous vivons une p\u00e9riode essentielle de transition, nous sommes de cette \u00e9poque, nous n",
		output: "guitoto",
	},
	{
		input:
			"Salari\u00e9-es, \u00e9tudiant-e-s, activistes, ch\u00f4meur-euse-s, r\u00e9volt\u00e9-e-s, Nous nous sommes rencontr\u00e9-e-s pour parler des moyens et des perspectives pour cons",
		output: "zadist",
	},
	{
		input:
			"En Loire-Atlantique, l'abstention a culmin\u00e9 \u00e0 75%. Autrement dit, parmi les inscrits, 25% seulement sont all\u00e9-e-s voter. Au sein de ces 25%, 12% ont v",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			'je copie ici le tract diffus\u00e9 aux usagers lors des "free zone" (voir article transports gratuits) Avec la Free-zone, "voyagez l\'esprit tranquille" !! ',
		output: "anonymous",
	},
	{
		input:
			"Hommage \u00e0 Carlo Giuliani Samedi 17 mai, \u00e0 partir de 19h au Babel Caf\u00e9, 109 bd Menilmontant PARIS, Bruno et Thom joueront, en hommage \u00e0 la m\u00e9moire de C",
		output: "collectifbellaciao",
	},
	{
		input:
			"Le trajet aller-retour Pratiquement\u00a0: Une douzaine de personnes\u00a0de Loire Atlantique\u00a0accompagnent\u00a0le\u00a0convoi\u00a0aller-retour. A chaque instant du convoi, v",
		output: "zadist",
	},
	{
		input:
			"cliquez sur l'image pour mieux la voir et/ou la t\u00e9l\u00e9charger cliquez sur l'image pour mieux la voir et/ou la t\u00e9l\u00e9charger cliquez sur l'image pour mieux",
		output: "imcnantes",
	},
	{
		input:
			"Le rassemblement a \u00e9t\u00e9 dynamis\u00e9 par des prises de paroles, des lectures de slogans, des chants, et par une attente palpable de la suite. Une banderole",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le Collectif Palestine Vaincra, le Secours Rouge International (sections belge, italienne et suisse), les Revolution\u00e4re Jugend Z\u00fcrich et de nombreuses",
		output: "secoursrouge",
	},
	{
		input:
			"La journ\u00e9e du 17 d\u00e9cembre au sommet de Hong-Kong a encore d\u00e9montr\u00e9 que les responsables de l'Organisation mondiale du commerce ne supportent pas la co",
		output: "anonymous",
	},
	{
		input:
			"Je sais que je vous dois beaucoup. Vous m\u2019avez donn\u00e9 naissance, vous m\u2019avez nourrie et abreuv\u00e9e, et vous m\u2019avez \u00e9lev\u00e9e. Vous m\u2019avez m\u00eame aim\u00e9e. Ou plu",
		output: "xxx",
	},
	{
		input:
			"\u00c0 mon domicile, les keufs m\u2019ont pr\u00e9sent\u00e9 un papier \u00e0 signer pour que j\u2019autorise une perquisition, ce que j\u2019ai refus\u00e9, il n\u2019y a donc pas eu de perquisi",
		output: "anonyme",
	},
	{
		input:
			"Ce matin (mardi 19 septembre 2006), j'apprends par des br\u00e9ves de l'AFP et de Reuters qu'il y a eu des \"\u00e9meutes \u00e0 Budapest contre le premier ministre h",
		output: "anonyme",
	},
	{
		input:
			"Jean Paul Delevoy, nomm\u00e9 pour r\u00e9former nos droits \u00e0 la retraite par le gouvernement de cette d\u00e9mocrature (et pour ce poste de killer, tr\u00e8s tr\u00e8s bien r",
		output: "...",
	},
	{
		input:
			"Cette ann\u00e9e, chaque foyer d\u00e9pense 538 \u20ac \u00e0 No\u00ebl. Pour acheter notamment 4,3 millions de smartphones et tablettes num\u00e9riques (dont un million de tablett",
		output: "pmo",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 123/ Octobre 2013 \u00ab Aux armes, citoyens... Formez vos bataillons !... Qu'un sang impur abreuve nos sillons ! \u00bb Po",
		output: "r\u00e9seaure",
	},
	{
		input:
			"Plus r\u00e9cemment, et tout autant tragique que l\u2019histoire des luttes sociales mexicaines, le terrorisme d\u2019\u00c9tat qui s\u2019est abattu sur les \u00e9tudiants de la N",
		output: "anonyme",
	},
	{
		input:
			"La FNSEA et les JA assi\u00e8gent la ZAD de Sievens, assi\u00e9geons les JA A Sievens, la CDAG veut construire un barrage sur une zone humide pour irriguer l\u2019ag",
		output: "zadist",
	},
	{
		input:
			"Un de ces \u00e9v\u00e9nement est notamment le discours d\u2019Emmanuel Macron pr\u00e9sident Fran\u00e7ais en visite en \u00c9gypte, pr\u00e9sident d\u2019un pays qui est en train de produi",
		output: "...",
	},
	{
		input:
			"Le texte commence en disant que \u00abc'est en r\u00e9affirmant son appartenance au camp [des travailleurs]\u00bb qu'Arlette a annonc\u00e9 sa candidature, et il critique",
		output: "pcint",
	},
	{
		input:
			"- Le glorieux leader du FN nantais est l'incarnation m\u00eame de la vieille garde fasciste du parti. Pourtant proche de Marine Le Pen, Christian Bouchet e",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Les batailles se multiplient et gagnent en intensit\u00e9 ; De mauvaises graines, nous sommes devenus mauvaise herbe qui partout se r\u00e9pand. Partout la guer",
		output: "guitoto",
	},
	{
		input:
			"Suite aux alertes du DAL, deux amendement adopt\u00e9s par le S\u00e9nat neutralisent le risque amende de 500\u20ac que pourrait d\u00e9livrer directement un maire contre",
		output: "anonyme",
	},
	{
		input:
			"Dans la chambre 23-3, passeront d'abord les pr\u00e9venus ayant \u00e9t\u00e9 plac\u00e9s en d\u00e9tention provisoire (parmi lesquels plusieurs compagnons). Compara\u00eetront aus",
		output: ".",
	},
	{
		input:
			"Nous partons du principe que la soci\u00e9t\u00e9 telle que nous la connaissons est fondamentalement bas\u00e9 sur la colonisation. La colonisation de multiples pays",
		output: ".",
	},
	{
		input:
			"HURLER AVEC LES LOUPS \u00a0 Le plus grand m\u00e9rite des Anarchistes contre le mur est leur capacit\u00e9 d'appr\u00e9cier honn\u00eatement le privil\u00e8ge qu'ils ont en tant q",
		output: "x",
	},
	{
		input:
			"http://www.cnt-f.org/IMG/pdf/cp_conf_migrant-es.pdf Travailleur-euses immigr\u00e9-es & fran\u00e7ais-es\u00a0: M\u00eame patron, m\u00eame combat Pris par des mesures tr\u00e8s im",
		output: "cntnantes",
	},
	{
		input:
			"En solidarit\u00e9, le rdv de poitiers a \u00e9t\u00e9 perturb\u00e9 par quelques personnes. Une petite table de presse (avec les brochures ZADissidences, Des Dynamiques ",
		output: ".",
	},
	{
		input:
			"CONTRE LE GENRE, CONTRE LA SOCIETE \u00a0 \u00ab\u00a0On ne rem\u00e9die pas \u00e0 l'exclusion par l'inclusion mais par l'attaque des forces qui excluent, qui sont nombreuses",
		output: ".",
	},
	{
		input:
			"! Le deuxi\u00e8me tour des pr\u00e9sidentielles et les l\u00e9gislatives qui suivront vont \u00eatre utilis\u00e9es pour diffuser \u00e0 plus haute dose encore l'intoxication \u00e9lec",
		output: "pcint",
	},
	{
		input:
			"Toute la \u00ab\u00a0alt-right\u00a0\u00bb (droite alternative), ainsi pudiquement nomm\u00e9e par les m\u00e9dias conservateurs am\u00e9ricains pour mieux en masquer le n\u00e9onazisme et l",
		output: "ujfp",
	},
	{
		input:
			"Incendie de la mairie, 30 septembre Restes de l'\u00e9glise Saint-Jacques, 17 janvier Le 22 janvier, cette attaque \u00e9tait revendiqu\u00e9e par \"Des courts circui",
		output: "aaa",
	},
	{
		input:
			"Le d\u00e9ferlement de la crise \u00e9conomique mondiale est aujourd\u2019hui r\u00e9v\u00e9lateur de l\u2019impasse dans laquelle le syst\u00e8me capitaliste enfonce l\u2019humanit\u00e9. Il est",
		output: "unsympathisantducci",
	},
	{
		input:
			"De gauche \u00e0 surtout tr\u00e8s tr\u00e8s tr\u00e8s \u00e0 droite : Chanclu, Mayadoux et s\u00fbrement un autre faf Visuel de \u00ab l\u2019\u00e9v\u00e9nement \u00bb sur la page facebook de l\u2019Alvarium ",
		output: "anonyme",
	},
	{
		input:
			"Les mois de juillet et d\u2019ao\u00fbt de cette ann\u00e9e auront \u00e9t\u00e9 marqu\u00e9s par des \u00e9v\u00e9nements apparemment stup\u00e9fiants. On assiste \u00e0 un affolement g\u00e9n\u00e9ralis\u00e9 des ",
		output: "unsympathisantducci",
	},
	{
		input:
			"De seize heures \u00e0 17 heures, RIEN\u00a0! Et pourtant, les r\u00e9dactions parisiennes suivent visiblement la retransmission en direct puisque les deux cha\u00eenes a",
		output: "anonyme",
	},
	{
		input:
			"\u201cLa premi\u00e8re crise globale de l\u2019humanit\u00e9\u201d (OMC, avril 2009) (1). La r\u00e9cession \u201cla plus profonde et la plus synchronis\u00e9e de m\u00e9moire d\u2019homme\u201d (OCDE, mar",
		output: "unsympathisantducci",
	},
	{
		input:
			"Communiqu\u00e9 de solidarit\u00e9 du congr\u00e8s du Forum civique europ\u00e9en \u00a0\u00a0\u00a0\u00a0Nous \u00e9tions r\u00e9unis \u00e0 plus de 400 personnes de diff\u00e9rents collectifs, mouvements et a",
		output: "zadist",
	},
	{
		input:
			"Et au programme \u00e7a cause : \u00a0 - De manif contre les f\u00e9minicides - De Exarchia, quartier ath\u00e9nien en lutte - De squat anarcha-f\u00e9ministes et queer en lut",
		output: "radiocayenne",
	},
	{
		input:
			'Table de presse du CNCA sur la "base de jeu" de la grande bandrolerie Pancartes pr\u00e9par\u00e9es lors des ateliers de la Grande Bandrolerie Pancartes pr\u00e9par\u00e9',
		output: "cnca",
	},
	{
		input: "Les keufs sont au gymnase !\u00a0 expulsion !",
		output: "a",
	},
	{
		input:
			"Apr\u00e8s le Cours des 50 otages, le cort\u00e8ge emprunte la rue de Strasbourg, interdite depuis plus d\u2019un an aux manifestant.e.s. Des tags fleurissent sur la",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Dans la nuit de lundi \u00e0 mardi 15 octobre, un engin incendiaire a \u00e9t\u00e9 jet\u00e9 sur le balcon du premier \u00e9tage et des tags contre le chef d\u2019Etat turc Recep ",
		output: "sansattendre",
	},
	{
		input:
			"Le contexte r\u00e9pressif, s\u2019aggravant de jours en jours, et les effrayantes dynamiques autoritaires qui se mettent en place, qui s\u2019acc\u00e9l\u00e8rent et se conso",
		output: "attaque",
	},
	{
		input:
			'M\u00eame La D\u00e9p\u00eache s\u2019en \u00e9meut\u00a0! "\u00c0 Arnaud Bernard, o\u00f9 vit une importante population musulmane, la p\u00e9riode de Ramadan est un temps fort de la vie du quart',
		output: "iaata",
	},
	{
		input:
			"La Zad, avant cette ann\u00e9e, plus que tout autre chose \u00e9tait une br\u00e8che. Nous, r\u00e9volutionnaires de tous poils, la ch\u00e9rissions et nous la ch\u00e9rissions pr\u00e9",
		output: "anonyme",
	},
	{
		input:
			"08h53min Tirs de lacrymos et de grenades assourdisssantes \u00e0 Lama et sur la route des Fosses. Les vilains avancent vers les vraies rouges. Gaffe \u00e0 vous",
		output: "zadist",
	},
	{
		input:
			"Parmi les 37 palestiniens bless\u00e9s, 14 avaient \u00e9t\u00e9 vis\u00e9s et bless\u00e9s par des tirs \u00e0 balles. 10 enfants font partie. Les manifestants palestiniens ont re",
		output: "secoursrouge",
	},
	{
		input:
			"Barricades avant la parade D\u00e8s l'aube, plusieurs b\u00e2timents du campus de l'universit\u00e9 de Nantes sont bloqu\u00e9s, signe que le mouvement ne s\u2019essouffle pas",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Bulletin num\u00e9ro 177, novembre/d\u00e9cembre 2018, du r\u00e9seau R\u00e9sistons Ensemble. Form\u00e9 en 2002, R\u00e9sistons Ensemble a pour but d'informer, de briser l'isolem",
		output: "r\u00e9seaur\u00e9sistonsensemble",
	},
	{
		input:
			"Le 4 d\u00e9cembre 2011, une action p\u00e9age \u00e0 prix libre a eu lieu, en soutien \u00e0 la lutte contre l'a\u00e9roport de Notre Dame des Landes. Elle s'inscrit dans le ",
		output: "anonyme",
	},
	{
		input:
			"CQFD\u00a0: Tu t\u2019es investi depuis le d\u00e9but dans la mobilisation des Bonnets rouges\u00a0? Matthieu Guillemot\u00a0: Carr\u00e9ment, depuis la premi\u00e8re minute\u00a0! On peut m",
		output: "anonyme",
	},
	{
		input:
			"Passage en revue de quelques changements embl\u00e9matiques : - Un h\u00f4tel de luxe au tribunal. Avant de se situer sur l\u2019\u00eele de Nantes, le tribunal de la vil",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Absents tous le week-end pass\u00e9 et loin de toutes sources m\u00e9diatique, je suis tr\u00e8s \u00e9tonn\u00e9s de ne pratiquement rien trouver ce matin sur les manifestati",
		output: ".",
	},
	{
		input:
			"ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0KLX: #InfoTrafflic de https://radioklaxon.antirep.net/\u00a0TWT: autres sour",
		output: "zad",
	},
	{
		input:
			"perquisition Suite au G20 de Hambourg des photos et vid\u00e9os d\u2019\u00e9meutier\u00b7es et des appels \u00e0 d\u00e9lation ont \u00e9t\u00e9 diffus\u00e9s dans plusieurs grands m\u00e9dias allema",
		output: "(((i)))",
	},
	{
		input:
			"Appel \u00e0 une semaine de r\u00e9sistances A Nantes, du 16 au 22 f\u00e9vrier - Manifestation samedi 21 f\u00e9vrier Nous sommes tes voisin-e-s, tes coll\u00e8gues, tes ami-",
		output: "...",
	},
	{
		input:
			"Pour le moment c'est musique, avant de passer quelques \u00e9pisodes des \"fils de la nuit\" sur la guerre d'Espagne. A tout de suite !",
		output: "radiocayenne",
	},
	{
		input:
			"\u00a0 La confirmation de ce non-lieu ferme la porte \u00e0 tout futur proc\u00e8s, la proc\u00e9dure en restant donc au stade de l\u2019instruction \u00e9crite et secr\u00e8te. La reco",
		output: "secoursrouge",
	},
	{
		input:
			"Je suis enferm\u00e9e \u00e0 la MAF de Fleury depuis le 14 octobre dernier, en attente d'un report de comparution imm\u00e9diate pour \u00ab outrage \u00bb. Mon proc\u00e8s est pr\u00e9",
		output: ".",
	},
	{
		input:
			"Malgr\u00e9 tout, un cort\u00e8ge plus \u00e9nergique d'environ 200 personnes r\u00e9unissant des collectifs et individu-e-s libertaires et anticapitalistes - rejoint par",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"L\u2019action directe\u00a0: histoire d\u2019un concept L\u2019action directe, th\u00e9oris\u00e9e comme concept politique et outil de lutte, est principalement issue des milieux a",
		output: "anonyme",
	},
	{
		input:
			"Un marteau, un trajet discret, quelques potes et un peu de d\u00e9termination sont les ingr\u00e9dients essentiels pour briser la monotonie et \u00e9gayer nos soir\u00e9e",
		output: ".",
	},
	{
		input:
			"Certes, la surpopulation Est l'ennemie de la r\u00e9volution Certes, faire des gosses En 2012, c'est tout \u00e0 fait rosse C'est de la compl\u00e8te d\u00e9mence C'est d",
		output: "patricefaubert",
	},
	{
		input:
			"La pr\u00e9fecture voulait emp\u00eacher tout rassemblement place sainte-anne (dite place satan). Les pouvoirs publics qui puent ont mis la pression sur les com",
		output: "a",
	},
	{
		input:
			"Puis a \u00e9t\u00e9 \u00e9voqu\u00e9 la mobilisation des gilets jaunes, et l'id\u00e9e de les rejoindre \u00e0 fait consensus. Le tournant social de la lutte dans la r\u00e9gion \u00e0 Sain",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"\u00c7a s'agite autour, de gens s'\u00e9nnervent, certains s'empoignent, d'autres essaient d'expliquer \u00e0 ce SO improvis\u00e9 ce que fait Emma\u00fcs, pourquoi ils m\u00e9rite",
		output: ".",
	},
	{
		input:
			"La seule raffinerie qui est autonome en alimentation en p\u00e9trole brut c'est celle de Donges qui poss\u00e8de ses propres appontement. Toutes les autres d\u00e9pe",
		output: "anonyme",
	},
	{
		input:
			"\u00c0 nantes, mais ailleurs aussi, cela fait un moment que l'\u00e9tat a lach\u00e9 la bride \u00e0 la flicaille, menant \u00e0 un nombre de bless\u00e9.e.s et de mort.es en const",
		output: "x",
	},
	{
		input:
			"Durant celle initi\u00e9e le 9 avril, nous avons eu l\u2019occasion de mesurer nos forces. Le mouvement, qu\u2019on disait gangren\u00e9 par les querelles internes depuis",
		output: "x",
	},
	{
		input:
			"Communiqu\u00e9 de l\u2019AFA PB sur les r\u00e9cents \u00e9v\u00e8nements \u2013 29 mai 2016 Mercredi 18 mai, le syndicat de police Alliance organisait\u00a0un\u00a0rassemblement sur la pla",
		output: "anonyme",
	},
	{
		input:
			"Dans un froid mordant, et malgr\u00e9 les intimidations polici\u00e8res, 1500 personnes d\u00e9filent. Jamais une manifestation de ce type n'avait tant rassembl\u00e9 ! D",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Lundi, dans son \u00e9mission C'dans l'air , Yves Calvi, aid\u00e9 par un ar\u00e9opage de journalistes et autres analystes bien pensants, Roland Cayrol (CSA), Chris",
		output: "verdi",
	},
	{
		input:
			"programme de la semaine de l\u2019Assembl\u00e9e de lutte pour le logement, qui se couple maintenant avec le planning d\u2019activit\u00e9 - au ralenti - de la Grande Our",
		output: "...",
	},
	{
		input:
			"Pas de titre pour 10925 Pas de titre pour 10924 Pas de titre pour 10923 Pas de titre pour 10922 Pas de titre pour 10921 Pas de titre pour 10920 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"Il est clair que plusieurs raisons ont motiv\u00e9 cette op\u00e9ration. L\u2019Asilo Occupato a pris part \u00e0 des nombreuses luttes qui ont d\u00e9rang\u00e9 les m\u00e9canismes de ",
		output: "attaque",
	},
	{
		input:
			"Malgr\u00e9 l\u2019arr\u00eat\u00e9 pr\u00e9fectoral interdisant la manifestation \u00e0 Montpellier, 200 personnes se sont rassembl\u00e9es sur la place de la Com\u00e9die. Les manifestant\u00b7",
		output: "secoursrouge",
	},
	{
		input:
			"La fabrique du sdf Nous\u00a0 les appellons SDF .Sans domicile fixe . D\u00e9j\u00e0 commence l'hypocrisie car on peut \u00eatre SDF et avoir un domicile mobile (P\u00e9niche ",
		output: "larage",
	},
	{
		input:
			"Les serrures d'agences immobili\u00e8res (X5), d'un bureau d'une soci\u00e9t\u00e9 de s\u00e9cu et d'un club de sport destin\u00e9 aux riches ont \u00e9t\u00e9 sabot\u00e9es \u00e0 la colle. Il a",
		output: "anonyme",
	},
	{
		input:
			"Rue de Belleville, au niveau du monoprix, j'aper\u00e7ois quatres gendarmes mobiles \u00e0 pieds contr\u00f4lant les passant-es. Peu t\u00e9m\u00e9raire mais pas paniqu\u00e9, je t",
		output: ".",
	},
	{
		input:
			"LE T\u00c9MOIGNAGE D\u2019UNE PERSONNE PR\u00c9SENTE EN TERRASSE PLACE SAINT-ANNE : \u00ab\u00a018 h Nous sommes \u00e0 la terrasse de l\u2019artiste assoiff\u00e9, nous entendons \u00ab\u00a0GUD, Gro",
		output: "anonyme",
	},
	{
		input:
			"Pour la caillasse indispo le lundi, l'\u00e9mission sera aussi rediffus\u00e9e (\u00e0 la m\u00eame adresse) mardi \u00e0 12h et mercredi \u00e0 15h. Retrouvez les podcasts et les ",
		output: "radiocayenne",
	},
	{
		input:
			"Dans la nuit du 8 au 9 janvier, d\u00e9j\u00e0, trois v\u00e9hicules avaient br\u00fbl\u00e9 dans cette m\u00eame caserne, quasiment \u00e0 la m\u00eame heure. Les pandores avaient \u00e9voqu\u00e9 un",
		output: "sansattendre",
	},
	{
		input:
			"Deux mois confin\u00e9\u00b7e\u00b7s C\u2019est tout en douceur, et sous la pluie, que\u00a0lundi dernier Toulouse a connu ses premiers rassemblements post-confinement\u00a0devant ",
		output: "iaata",
	},
	{
		input:
			"Dans une for\u00eat, des machines arrachent, d\u00e9racinent et jettent \u00e0 terre des centaines d\u2019arbres. Depuis quelques jours, des chenillards labourent un sol ",
		output: "vmc",
	},
	{
		input:
			"D\u00e9ployant des banderoles enflamm\u00e9es portant le message \u00ab Alerte rouge +3\u00b0C : Soci\u00e9t\u00e9 G\u00e9n\u00e9rale br\u00fble la plan\u00e8te ! \u00bb et brandissant leurs mains peintes ",
		output: "gignv",
	},
	{
		input:
			"Nous vous faisons part ici, de certaines de nos inqui\u00e9tudes li\u00e9es au contexte social et sanitaire actuel. Il y a, en ce moment, environ 600 m\u00e9nages mi",
		output: "l'autrecantinenantes",
	},
	{
		input:
			"Damien Camelio, incarc\u00e9r\u00e9 \u00e0 Fleury-M\u00e9rogis depuis d\u00e9but d\u00e9cembre 2016 pour plusieurs d\u00e9gradations commises lors de la manifestation sauvage du 14 avri",
		output: "x",
	},
	{
		input:
			"Dans cette ville localis\u00e9e entre Vannes et Nantes, deux v\u00e9hicules s\u00e9rigraphi\u00e9s ont \u00e9t\u00e9 incendi\u00e9s au c\u0153ur de la caserne de gendarmerie vers 3h du matin",
		output: "sansattendredemain",
	},
	{
		input:
			"Le m\u00eame Julien Mabrut Tu ne t\u2019es pas retrouv\u00e9 l\u00e0 par hasard. Dans cette petite salle se trouvent de nombreux amateurs de jazz manouche. Disons qu\u2019on e",
		output: "anonyme",
	},
	{
		input:
			"http://ulnantes.cnt-f.org/spip.php?article164 Au lendemain de l\u2019annonce de l\u2019abandon du projet d\u2019a\u00e9roport \u00e0 Notre-dame-des-Landes, suite \u00e0 un ultimatu",
		output: "cntnantes",
	},
	{
		input:
			"Pas de titre pour 11612 Pas de titre pour 11611 Pas de titre pour 11610 A l'appel de la conf\u00e9d\u00e9ration paysanne, le jeudi 12 avril, une manifestation \u00e9",
		output: "anonyme",
	},
	{
		input:
			'Le " Comit\u00e9 de soutien \u00e0 Fran\u00e7ois Thonier " a choisi de confier la d\u00e9fense de Fran\u00e7ois \u00e0 ma\u00eetre DE FELICE, avocat au barreau de Paris, membre de la LD',
		output: "anonymous",
	},
	{
		input:
			"Moment solennel \u00e0 la ferme de Bellevue \u00e0 14h\u00a0: les milliers de b\u00e2tons plant\u00e9 le 8 ocotobre 2016 ont \u00e9t\u00e9 d\u00e9terr\u00e9 du sol. Nous avions fait le serment de",
		output: "zadist",
	},
	{
		input:
			"les Alg\u00e9riens f\u00eatent la victoire Une premi\u00e8re victoire. Bouteflika a d\u00e9missionn\u00e9 hier soir ! Le pr\u00e9sident alg\u00e9rien a remis sa d\u00e9mission ce mardi soir ",
		output: "julieamadis",
	},
	{
		input:
			"Cinq autres compas (Martino, Otta, Angelo, Emma et Tommi) ont l\u2019interdiction de sortir de Bologne et doivent pointer chaque jour au commissariat. Les ",
		output: ".",
	},
	{
		input:
			"Assez de visages que nous aimons broy\u00e9s par les choix politiques de ce gouvernement et l\u2019internationale n\u00e9olib\u00e9rale pour ne pas oser d\u00e9fier ces struct",
		output: "*",
	},
	{
		input:
			"\u00a0 Parce que la radio c'est un super outil pour prendre la parole, parce que \u00e7a peut \u00eatre un outil d'organisation, parce qu'on la voit comme un outil d",
		output: "radiocayenne",
	},
	{
		input:
			"Pas de titre pour 10261 <!--OHAOFP--><!--OHSOSP--><!--OHSOFP--> La LOPPSI 2 (loi d'orientation et de programmation pour la performance de la s\u00e9curit\u00e9 ",
		output: "(((i)))",
	},
	{
		input:
			"Comme \u00e0 Fukushima il y a quelques ann\u00e9es, la catastrophe se d\u00e9ploie, cette fois-ci sous la forme d\u2019un virus et \u00e0 l\u2019\u00e9chelle de la plan\u00e8te. Comme l\u00e0-bas",
		output: "anonyme",
	},
	{
		input:
			"T\u00e9moignages Avant toute action juridique, il est important que certaines autorit\u00e9s administratives ind\u00e9pendantes puissent \u00eatre en possession de vos t\u00e9",
		output: "anonyme",
	},
	{
		input:
			"https://peertube.co.uk/videos/watch/ebff54b7-5ed6-45b0-931f-b9c8fc671ca3 Vid\u00e9os\u00a0: JT FR2 20h du 11,12,13\u00a0mai 2020 Photos\u00a0: https://sansattendre.noblog",
		output: ".",
	},
	{
		input:
			"\u00c9meute \u00e0 Leipzig contre un projet de gentrification du quartier de Connewitz Le chantier de construction entre Wiedebachplatz et Ecksteinstra\u00dfe emp\u00each",
		output: "secoursrouge",
	},
	{
		input:
			"Deux personnes se sont fait arr\u00eater par la BAC apr\u00e8s la dispersion de la manif anti-\u00e9lectorale du 7 mai, soir du 2\u00e8me tour des \u00e9lections pr\u00e9sidentiell",
		output: "..",
	},
	{
		input:
			"NON au projet d'a\u00e9roport \u00e0 NDDL Derni\u00e8res news : 16-12-10 : [N-D des Landes] Mobilisation contre l'enqu\u00eate publique concernant le projet d'a\u00e9roport 16",
		output: "imcnantes",
	},
	{
		input:
			"Apr\u00e8s l'assembl\u00e9e g\u00e9n\u00e9rale de ce jeudi, voil\u00e0 la mise \u00e0 jour de l'agenda de la semaine :Mercredi 7h40 : Tractage (Devant Tertre)Mercredi 12h : Bouffe ",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Trois ont \u00e9t\u00e9 incendi\u00e9s. Un se trouvait rue de la Mouill\u00e8re, un autre rue d\u2019Alsace et le dernier vers le pont de Bregille. Un quatri\u00e8me v\u00e9hicule a \u00e9t\u00e9",
		output: "sansattendredemain",
	},
	{
		input:
			"Ils sont soixante parlementaires d\u00e9guis\u00e9s en pompiers volontaires r\u00e9unis dans un \u00ab collectif d\u2019\u00e9lus de tous bords \u00bb. Ces politiciens et politiciennes ",
		output: "anonyme",
	},
	{
		input:
			"Victoire et peurs L\u2019annonce de l\u2019abandon du projet d\u2019a\u00e9roport le 17 janvier 2018, c\u2019\u00e9tait pour une bonne partie du mouvement la victoire d\u2019un long com",
		output: "zadist",
	},
	{
		input:
			"VENDREDI SOIR : Se retrouver - 18H : Chroniques sans contact 3 et 4 puis 5 et 6 - L'\u00e9mission d\u00e9j\u00e0 culte. - 19H30 : Mini sp\u00e9cial cocovidalocacaducul ra",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"\u2013 LE GOUVERNEMENT FREINE DES CENTAINES DE MILLIERS DE TESTS Les rares pays qui ont mis en \u0153uvre des campagnes massives de d\u00e9pistage ont fait reculer l",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Un.e ami.e qui habite avenue de la Va\u00eete a remarqu\u00e9 jeudi une grosse trace noire sur le bitume, pr\u00e9cis\u00e9ment \u00e0 l'endroit m\u00eame o\u00f9 un utilitaire de la ma",
		output: "..",
	},
	{
		input:
			"TURQUIE \u2013 ISTANBUL \u2013 La musicienne kurde du Grup Yorum*, Helin B\u00f6lek vient de nous quitter apr\u00e8s 288 jours de gr\u00e8ve de la faim. On vous invite chacun-",
		output: ".",
	},
	{
		input:
			"Photo : ValK \u00c0 la pr\u00e9fecture, un manequin est accroch\u00e9 \u00e0 la balustrade et br\u00fbl\u00e9, de nombreux tags sont faits et le cort\u00e8ge repart. On essaie de prendr",
		output: "radiocayenne",
	},
	{
		input:
			"entre vendredi et samedi 26. Il est 2h pass\u00e9es. 1, 2 puis 3 explosions au milieu de la nuit, \u00e0 l'heure o\u00f9 les braves travaileurs noient leurs semaines",
		output: "...",
	},
	{
		input:
			"Finalement, ce sont plusieurs centaines de personnes qui s'\u00e9parpillent devant le CHU de Nantes \u00e0 partir de 19H. Une affluence inattendue dans un centr",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Ou l'on peut constater que la police est effectivement prise sous un d\u00e9luge de coups et de projectiles lors de l'interpellation ... 3 jours plus tard,",
		output: "...",
	},
	{
		input:
			"Communiqu\u00e9 du 1er mai : Nous, \u00e9tudiant.e.s, lyc\u00e9en.ne.s, ch\u00f4meur.se.s, pr\u00e9caires, intermittent.e.s, int\u00e9rimaires, salari\u00e9.e.s du public et du priv\u00e9, s",
		output: "anonyme",
	},
	{
		input:
			"Banderole dans h\u00f4tel de r\u00e9gion Pays de la Loire Devant h\u00f4tel de r\u00e9gion Pays de la Loire Les activistes ont demand\u00e9 au conseil r\u00e9gional de se d\u00e9sengage",
		output: "gignv",
	},
	{
		input:
			"Nous sommes all\u00e9Es repeindre le si\u00e8ge du syndicat patronal en faisant exploser une dizaine d'ampoules remplies de peinture sur sa fa\u00e7ade. Cette action",
		output: "..",
	},
	{
		input:
			"Fran\u00e7ois Thonier vient de recevoir sa convocation devant la Cour d'Appel de Poitiers pour le jeudi 3 f\u00e9vrier 2005 Ce proc\u00e8s en Appel fait suite au pro",
		output: "anonymous",
	},
	{
		input:
			"Plusieurs c\u00e2bles ont \u00e9t\u00e9 sectionn\u00e9s et arrach\u00e9s, alors que la fibre optique venait tout juste d\u2019\u00eatre install\u00e9e (il y a quelques semaines seulement). L",
		output: "sansattendre",
	},
	{
		input:
			"\u00a0 En passant \u00e0 proximit\u00e9 du cimeti\u00e8re des Chaprais ce mercredi 8 juin, j'ai remarqu\u00e9 que la fa\u00e7ade terne de l'\u00e9glise St-Martin des Chaprais, en r\u00e9nova",
		output: "..",
	},
	{
		input:
			"nous avons attaqu\u00e9 deux \u00e9glises \u00e0 coups de marteaux.nous crachons sur leur visions de la famille, du couple et de la sexualit\u00e9.nous attaquons aussi en",
		output: ".",
	},
	{
		input:
			"En parall\u00e8le de cette mosa\u00efque d'initiatives enthousiasmantes, la pression monte \u00e0 Nantes. Pas moins de deux manifestations sont annonc\u00e9es l'apr\u00e8s-mid",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Un grand salut solidaire au compagnon arr\u00eat\u00e9 en Bretagne et incarc\u00e9r\u00e9 depuis une semaine \u00e0 Fleury, accus\u00e9 de d\u00e9gradations lors d'une manif sauvage en ",
		output: ".",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 161 / mars 2017Le bulletin no 162, avril 2017 du petit journal mobile recto-verso A4 du r\u00e9seau R\u00e9sistons ensemble",
		output: "r\u00e9seaure",
	},
	{
		input:
			"Prison du Neguev L\u2019administration de cette prison qui d\u00e9tient 1300 prisonniers politiques en toute ill\u00e9galit\u00e9, \u2014 puisqu\u2019Israel, n\u2019a pas le droit en ta",
		output: "secoursrouge",
	},
	{
		input:
			"Le 6 f\u00e9vrier 2009, on assistait \u00e0 la naissance officielle du Nouveau Parti Anticapitaliste (NPA) en m\u00eame temps qu\u2019\u00e0 l\u2019auto-dissolution de la Ligue Com",
		output: "unsympathisantducci",
	},
	{
		input:
			"La partition jou\u00e9e le 16 d\u00e9cembre par Mrs Meyer Habib et M Manuel Valls \u00e0 l\u2019Assembl\u00e9e Nationale \u00e0 propos de la campagne internationale BDS \u2013 Boycott, ",
		output: "bureaunationaldel\u2019ujfp",
	},
	{
		input:
			"10 millions de Fran\u00e7ais ne survivent que gr\u00e2ce \u00e0 la solidarit\u00e9 inscrite dans les lois de protection sociale depuis la Lib\u00e9ration. Si d'aventure la fra",
		output: "verdi",
	},
	{
		input:
			"Pas de titre pour 6362 ACTION URGENTE : La Soci\u00e9t\u00e9 Civile Las Abejas appelle au soutien financier pour sa Caravane en route pour Oaxaca Le 9 Novembre,",
		output: "anonymous",
	},
	{
		input:
			"Vous vous vantez ce matin de rester mod\u00e9r\u00e9 dans l\u2019usage de la violence que vous faites. C\u2019est vrai que vos sup\u00e9rieurs nous ont d\u00e9j\u00e0 montr\u00e9 au Chefresn",
		output: "zadist",
	},
	{
		input:
			"APPEL A TOUS LES FACTEURS , FACTRICES DE LA POSTE Nous savons aujourd'hui que 12 candidats se pr\u00e9sentent au 1\u00b0 tour de l'\u00e9lection Pr\u00e9sidentielle. Les ",
		output: "anonymous",
	},
	{
		input:
			"Ce mardi 7 mai, la Cour de Cassation a confirm\u00e9 le non-lieu qu\u2019avait prononc\u00e9 le parquet de Toulouse en faveur du gendarme responsable de la mort du m",
		output: "anonyme",
	},
	{
		input:
			"Heureusement, le gymnase r\u00e9quisitionn\u00e9 est en dehors de la convention entre la SCI et Saint Benoit, et son occupation ne mettrait en aucun cas en p\u00e9ri",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"Sous une averse de gr\u00ealons, dimanche 8 juin, 8 DABs ont \u00e9t\u00e9 sabot\u00e9s \u00e0 la mousse expansive ou au marteau, et deux agences immobili\u00e8res ont perdu leur v",
		output: "xxx",
	},
	{
		input:
			"Dans les luttes de la classe ouvri\u00e8re, le r\u00f4le sp\u00e9cifique des r\u00e9volutionnaires n'est pas seulement d'insister sur leur n\u00e9cessit\u00e9, sur l'importance de ",
		output: "unsympathisantducci",
	},
	{
		input:
			"Dimanche 27 mai, en fin d\u2019apr\u00e8s-midi, un d\u00e9part d\u2019incendie n\u00e9cessite la venue des pompiers \u00e0 Br\u00e9a, l\u2019ancien EHPAD r\u00e9quisitionn\u00e9 de la rue Maurice Sibi",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"COLLECTIF UN TOIT POUR TOUTES ET TOUS FIN DE LA TREVE HIVERNALE LES REMISES A LA RUE SONT INNACCEPTABLESEn lutte depuis plusieurs mois, nous sommes to",
		output: "dal44",
	},
	{
		input:
			"Les manifestations anti-globalisation qui se sont produites en juin dernier pendant la dur\u00e9e du Sommet Europ\u00e9en \u00e0 Thessalonique (Gr\u00e8ce), ont abouti \u00e0 ",
		output: "anonymous",
	},
	{
		input:
			"Je voudrais qu ' \u00e0 l ' appui de votre opinion , vous nous citassiez quelques exemples particuliers qui nous en fissent mieux sentir la v\u00e9rit\u00e9 . \" Nicc",
		output: "patricefaubertditpatl'invit\u00e9",
	},
	{
		input:
			"Il n'est pas exclut que la police intervienne sur la fac. A nous de r\u00e9agir si cela devait se produire. En cas d'expulsion, nous vous invitons toutes e",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"En 1835, Michel-Marie Derrion cr\u00e9e au 95 mont\u00e9e de la Grande C\u00f4te, dans les pentes de la Croix-Rousse, une \u00e9picerie sous l\u2019enseigne Au commerce v\u00e9ridi",
		output: ".",
	},
	{
		input:
			"Malgr\u00e9 la p\u00e9riode. Malgr\u00e9 la r\u00e9pression. Malgr\u00e9 les mensonges des m\u00e9dias qui, depuis 7 semaines, \u00e0 chaque \u00e9ch\u00e9ance, r\u00e9p\u00e8tent que le mouvement est fini",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Rappelons que le contr\u00f4le au faci\u00e8s est une pratique av\u00e9r\u00e9e de la police fran\u00e7aise et que l'\u00e9tat a d\u00e9j\u00e0 \u00e9t\u00e9 condamn\u00e9 ! De plus, ce type de contr\u00f4les f",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"Ce 1er f\u00e9vrier, premi\u00e8re journ\u00e9e d'action nationale, le d\u00e9partement de sociologie est barricad\u00e9 avant la lev\u00e9e du jour, puis d\u00e9bloqu\u00e9 par une cohorte ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"L'ambiance dans l'enceinte de ce lieu historique est extraordinaire. Les CRS sur\u00e9quip\u00e9s n'arrivent pas nous d\u00e9loger. Beaucoup de tags \u00e0 la m\u00e9moire de ",
		output: "@nonyme",
	},
	{
		input:
			"Pas de titre pour 12771 Pas de titre pour 12770 Pas de titre pour 12769 Les belles peintures de l'Alpe d'Huez ! Mesdames, Messieurs, Le 1er mars 2013,",
		output: "anonyme",
	},
	{
		input:
			"Le jeudi 12 d\u00e9cembre, Radio Cayenne sera en direct \u00e0 partir de 9h. Pour \u00e9couter : https://radiocayenne.antirep.net Vous pouvez donner des infos sur le",
		output: "radiocayenne",
	},
	{
		input:
			"Le proc\u00e8s pr\u00e9vu le 09 janvier a \u00e9t\u00e9 report\u00e9 au 13 f\u00e9vrier \u00e0 14h suite \u00e0 la gr\u00e8ve des avocatEs La solidarit\u00e9 exprim\u00e9e a fait chaud au coeur",
		output: ".",
	},
	{
		input:
			"Pas de titre pour 3868 Apr\u00e8s avoir demand\u00e9 le concours de la force publique pour expulser les squatters des 400 couverts, la mairie de Grenoble nomme ",
		output: "valk",
	},
	{
		input:
			"La d\u00e9termination des gens \u00e0 contester, bousculer, bord\u00e9liser nous a tou\u00b7te\u00b7s remont\u00e9\u00b7e\u00b7s comme des pendules. Apr\u00e8s moultes h\u00e9sitations nous ne faisons",
		output: "iaata",
	},
	{
		input:
			"Ce vendredi 11 d\u00e9cembre 2015, le Conseil d\u2019Etat a renvoy\u00e9 une QPC au Conseil constitutionnel afin que soit appr\u00e9ci\u00e9e la constitutionnalit\u00e9 d\u2019une dispo",
		output: "anonyme",
	},
	{
		input:
			"Le 06.06.2003 a 20h Haidi Giuliani a l'Espace Saint Michel 7, place Saint-Michel PARIS : d\u00e9bat avec le Collectif Bellaciao et Les Films d'ici Les Film",
		output: "collectifbellaciao",
	},
	{
		input:
			"Dimanche 8 juin, en me baladant dans le bas-montreuil, un peu de couleur a \u00e9gay\u00e9 ma matin\u00e9e. La fa\u00e7ade d'un de ces horribles immeubles de bureaux \u00e9tai",
		output: "anonyme",
	},
	{
		input:
			"Sur le casque d'un policier de la BAC : \"LE GANG LE PLUS DANGEREUX EN VILLE\". Un aveu autant qu'un symbole. Un militant n\u00e9o-nazi, accompagn\u00e9 d'une qui",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Place Graslin Le long de l'Erdre D\u00e8s l'aube, la plupart des lyc\u00e9es de Nantes, qu'ils se situent en p\u00e9riph\u00e9rie ou dans le centre-ville, sont bloqu\u00e9s. D",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Epiph\u00e9nom\u00e8ne m\u00e9diatique peu cr\u00e9dible Pour nombre d'observateurs, qui suivent la pr\u00e9tendante au tr\u00f4ne \u00e9lys\u00e9en depuis un certain temps, il n'y a pas de ",
		output: "verdi",
	},
	{
		input:
			"Une conf\u00e9d\u00e9ration syndicale bouscul\u00e9e par facebook\u2026 et par sa base\u00a0! C\u2019est tr\u00e8s clair. Les directions syndicales (nous parlerons ici surtout de la CGT",
		output: "...",
	},
	{
		input:
			"Le week-end du 16 et 17\u00a0novembre, \u00e0 Paris comme \u00e0 Ath\u00e8nes, les fascistes et les milices d\u2019\u00c9tat ont marqu\u00e9 des points en occupant la rue de leur cort\u00e8g",
		output: "anonyme",
	},
	{
		input:
			"Comment c\u2019est arriv\u00e9\u00a0? Et quelles en sont les causes\u00a0? Outre le fait que je participe effectivement, sans plus de responsabilit\u00e9s qu\u2019un-e autre, au co",
		output: "anonyme",
	},
	{
		input:
			"observer les routes et forger nos choix. Le coeur qui palpite de l\u2019amour et de la complicit\u00e9 que j\u2019ai \u00e9prouv\u00e9s avec tellement d\u2019entre vous, je vous en",
		output: ".",
	},
	{
		input:
			"Rapide compte rendu de ces comparutions imm\u00e9diates et petits morceaux choisis. La juge \u00e9tait tr\u00e8s hostile, en mode maitresse d'\u00e9cole, 3 bacueux t\u00e9moig",
		output: "legalteam",
	},
	{
		input:
			"Pas de titre pour 8576 la r\u00e9pression vise indymedia <!--OHAOFP--><!--OHSOSP--><!--OHSOFP--> R\u00e9pression sur Indymedia Le 22 Janvier 2009, la police du ",
		output: "imcnantes",
	},
	{
		input:
			"GUERRE CIVILE ESPAGNOLE (1936-1939) HOMMAGE AUX BRIGADES INTERNATIONALES ET A L'EXPOSITION \u00ab \u00a1NO PASARAN! \u00bb du 27 mars au 14 juin 2003 Commissaires de",
		output: "collectifbellaciao",
	},
	{
		input:
			"ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0KLX: #InfoTrafflic de https://radioklaxon.antirep.net/\u00a0TWT: autres sour",
		output: "zad",
	},
	{
		input:
			"Merci de tout, Luigi Samedi 17 mai, n\u00e9 \u00e0 Rome le 18 septembre 1925, Luigi Pintor est mort \u00e0 78 ans, souffrant d'une maladie incurable d\u00e9couvert il y a",
		output: "collectifbellaciao",
	},
	{
		input:
			"Autour de 14H, plus de 500 manifestants s'\u00e9lancent \u00e0 un rythme tranquille dans le centre-ville, en chantant des slogans. Le d\u00e9fil\u00e9 semble bien re\u00e7u pa",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Nanterre, le 28 mai 20005 COMMUNIQUE Nous prisonniers incarc\u00e9r\u00e9s dans des quartiers d'isolement depuis plusieurs ann\u00e9es, pour des motifs fallacieux et",
		output: "anonymous",
	},
	{
		input:
			"Se prostituer est un acte r\u00e9volutionnaire Ce lieu de nulle part, fluide, inconnaissable - Rencontre, Rupture, Affrontement, Corps \u00e0 corps sans visage,",
		output: ".",
	},
	{
		input:
			"Le th\u00e9 est aujourd\u2019hui la deuxi\u00e8me boisson la plus consomm\u00e9e au monde. Il s\u2019agit donc d\u2019un v\u00e9ritable produit marketing et nos supermarch\u00e9s ont m\u00eame \u00e9t",
		output: "anonym",
	},
	{
		input:
			"La ville de Nantes n\u2019est que tr\u00e8s faiblement repr\u00e9sent\u00e9e au sein d\u2019OpenStreetMap, il est temps de mobiliser quelques bonnes volont\u00e9s pour y rem\u00e9dier !",
		output: "anonyme",
	},
	{
		input:
			"LA VIE S'\u00c9COULE, LA VIE S'ENFUIT La vie s'\u00e9coule, la vie s'enfuit Les jours d\u00e9filent au pas de l'ennui Parti des rouges, parti des gris Nos r\u00e9volution",
		output: "anonymous",
	},
	{
		input:
			"NO MUOS Prochaine \u00e9mission de Radio Vosstanie. Le 22 f\u00e9vrier 2014 \u00e0 21h en Direct\u00a0! Invit\u00e9s\u00a0: des camarades investis dans la lutte. No MUOS www.nomuos",
		output: "vosstanie",
	},
	{
		input:
			"D\u00e9go\u00fbt\u00e9.e d'avoir rat\u00e9 Radio Cayenne la semaine derni\u00e8re ? Nous aussi, alors on se rattrappe ce soir ! On va parler des expulsions des exil\u00e9.e.s du sq",
		output: "radiocayenne",
	},
	{
		input:
			"Nous viendrons y d\u00e9noncer l\u2019hypocrisie flagrante entre, d\u2019une part, la volont\u00e9 affich\u00e9e en d\u00e9cembre, par le gouvernement, de lutter contre le r\u00e9chauff",
		output: "mslc21",
	},
	{
		input:
			"http://institproentraideantiviolencesaenfantsantifranceafric.blogs.nouvelobs.com/Je ne verrai pas 23 enfants bien habill\u00e9s en train de regarder leurs ",
		output: "julieamadis",
	},
	{
		input:
			"Depuis le 8 mars dernier, l'ancien ehpad de Br\u00e9a est occup\u00e9 par des exil\u00e9.e.s sans abris. En quelques mois le lieu s'est bien rempli tant les besoins ",
		output: "nantesaveclesexil\u00e9.e.s",
	},
	{
		input:
			"D\u00e9crochage \u00e0 la mairie de Saint-Herblain 4 bonnes raisons de d\u00e9crocher ces 4 portraits aujourd\u2019hui : Canicule : le d\u00e9r\u00e8glement climatique amplifie et ",
		output: "gignv",
	},
	{
		input:
			"http://ulnantes.cnt-f.org/spip.php?article155 C\u2019est pas avec des journ\u00e9es dispers\u00e9s et sectoris\u00e9es au cours des semaines \u00e0 venir qu\u2019on fera reculer un",
		output: "cntnantes",
	},
	{
		input:
			"libcom.org/blog a jusqu'ici re\u00e7u des compte-rendus de Su\u00e8de, du Danemark, du Japon, du Br\u00e9sil, des Etats-Unis, de Nouvelle-Z\u00e9lande, d'Irelande, de Tur",
		output: "anonymous",
	},
	{
		input:
			"Des manifestations r\u00e9unissent tous les jeudis depuis d\u00e9but janvier et ce dans de nombreuses villes des milliers d'\u00e9l\u00e8ves qui s\u00e9chent les cours pour ex",
		output: "camille",
	},
	{
		input:
			"Avec le soutien de Didier Coupe-papier, directeur de l\u2019UFR de langues et anti-blocus notable qui s\u2019est auto-proclam\u00e9 comme gestionnaire (pompier pyrom",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Le 25 avril 2012, \u00c0 la Direction et \u00e0 la Juge d\u2019Application des Peines, En cette date, nous, d\u00e9tenus du centre de d\u00e9tention de Roanne, entrons en lutt",
		output: "anonyme",
	},
	{
		input:
			"Reveillez vous camarades na\u00effs et na\u00efves, les polices ( Etats services secrets, forces de police) ne jouent pas selon les r\u00e8gles ou selon la loi !.! L",
		output: "*",
	},
	{
		input:
			"Une soixantaine d'Intermittents et Pr\u00e9caires ont investi le studio du \"7 \u00e0 9\" \u00e0 France inter vers 7h30 pour annoncer une journ\u00e9e d'action contre le Me",
		output: "anonymous",
	},
	{
		input:
			"Th\u00e8me 1 On ne peut pas r\u00e9duire la d\u00e9finition du sionisme \u00e0 une seule notion, sinon on perd la coh\u00e9rence. \u2013 Le sionisme est une r\u00e9ponse \u00e0 l\u2019antis\u00e9mitis",
		output: "pierrestambul",
	},
	{
		input:
			"J'ai d\u00e9cid\u00e9 d'\u00e9crire bri\u00e8vement ce texte pour exposer les choses suivantes :Le lundi 2 septembre 2019, j' ai \u00e9t\u00e9 captur\u00e9 par la Police Judiciaire dans",
		output: "a",
	},
	{
		input:
			"Pas de titre pour 12194 Pas de titre pour 12192 Pas de titre pour 12191 Pas de titre pour 12190 Pas de titre pour 12189 Pas de titre pour 12188 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"Samedi 21 septembre\u00a0d\u00e8s 19HLocal Sacco Venzetti \u2013 54, Chauss\u00e9e de Forest \u2013 BruxellesFacebook :\u00a0https://www.facebook.com/events/511319009682843/ Jeudi ",
		output: "antifa",
	},
	{
		input:
			"\u00ab\u00a0Du ch\u00e2teau au Cours Cambronne\u00a0\u00bb\u00a0: le luxe de la solidarit\u00e9 \u00c0 Grenoble, Lyon, Brest, Montpellier, Paris, Poitiers, Nantes et ailleurs, des \u00e9tudiant\u00b7e",
		output: ".",
	},
	{
		input:
			"Info r\u00e9v\u00e9l\u00e9e par Presse-Oc\u00e9an d\u00e8s hier au soir : le centre de r\u00e9tention de Nantes \u00e9tait en feu (vers 19 heures hier dimanche) . Un feu de matelas et u",
		output: "pj49",
	},
	{
		input:
			"Mais avant 16h, l'atelier cr\u00e9atif est rapidement interrompu : les forces de l'ordre en nombre encerclent la quinzaine de personnes pr\u00e9sentes. Contr\u00f4le",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Avis : Le comit\u00e9 de r\u00e9daction du Monde libertaire, auquel j'ai propos\u00e9 ce texte, n'a pas jug\u00e9 opportun de le publier. Cette d\u00e9cision met un terme \u00e0 la",
		output: "anonymous",
	},
	{
		input:
			'Pas de titre pour 3395 Multiplication des interventions \u00e0 la t\u00e9l\u00e9. Derni\u00e8re en date, celle d\'hier soir sur France 2, \u00e0 propos de "Culture". Campagne d',
		output: "verdi",
	},
	{
		input:
			"Ainsi, le plus officiellement du monde, les 50% d\u2019habitants entre M\u00e9diterran\u00e9e et Jourdain qui sont consid\u00e9r\u00e9s comme \u00ab\u00a0juifs\u00a0\u00bb ont tous les droits\u00a0: p",
		output: "pierrestambul",
	},
	{
		input:
			"Sarkozy proclame aujourd'hui que \u00ab le capitalisme doit se refondre sur des bases \u00e9thiques \u00bb. Madame Merkel insulte les sp\u00e9culateurs. Zapatero pointe d",
		output: "unsympathisantducci",
	},
	{
		input:
			"(1) UN PTIT RAPPEL DES FAITS ? 18-19 novembre : r\u00e9quisition et expulsion de l'ancienne \u00e9cole des Beaux Arts. 22 novembre - 7 mars : occupation \u00e0 la fa",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"A l'adresse des membres du Conseil d'Administration Jeudi dernier, des enseignants-chercheurs en sciences de l'\u00e9ducation sont venus annoncer en Assemb",
		output: "moi",
	},
	{
		input:
			"Avec trente grammes De LSD-25, le di\u00e9thylamide de l'acide lysergique, LSD Qui joue avec des d\u00e9s Quand dans le cerveau, c'est l'alarme L'on peut ais\u00e9me",
		output: "patricefaubert",
	},
	{
		input:
			"L'arriv\u00e9e du froid n'a pas atteint la motivation des roncier-e-s! Au contraire, nous vous invitons le dimanche 20 janvier \u00e0 partir de 14h pour un chan",
		output: "roncier",
	},
	{
		input:
			"Selon une source polici\u00e8re, \u00ab\u00a0des individus utilisent des petits objets pour faire levier et retirer les QR codes pr\u00e9sents sur les trottinettes. C\u2019est",
		output: "sansattendre",
	},
	{
		input:
			"La manifestation du jeudi 15 mars fait donc figure de retour d'une certaine conflictualit\u00e9 apr\u00e8s une trop longue accalmie sociale. Avant le lever du j",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Toute la semaine suivant le samedi 1er\u00a0d\u00e9cembre, dans les m\u00e9dias mainstream et ailleurs, on n'aura entendu que \u00ab\u00a0peur d'un climat insurrectionnel\u00a0\u00bb et",
		output: "desanarchistes",
	},
	{
		input:
			"C\u2019est un pr\u00e9c\u00e9dent qu\u2019on ne peut que souligner. Avait-ce \u00e9t\u00e9 le cas par exemple lors du saccage de l\u2019arc de triomphe, de l\u2019incendie du fouquet\u2019s, des ",
		output: "sansattendredemain",
	},
	{
		input:
			"D\u00e9but : Le Collectif antipatriarcat est un collectif mixte qui a \u00e9t\u00e9 cr\u00e9\u00e9 en octobre 2003 dans une ville fran\u00e7aise, \u00e0 l'initiative de militantes liber",
		output: "a",
	},
	{
		input:
			"Lundi 19 f\u00e9vrier 19H, au P\u00f4le \u00e9tudiant (arr\u00eat Universit\u00e9s, Ligne de tram 2) : Discussion sur les luttes des exil\u00e9s, \u00e9changes contre les fronti\u00e8res, en",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le Magazine libertaire c'est une \u00e9mission d'actu, d'infos et de d\u00e9bats tous les mercredis midi sur jetfm. On parle du monde qui pue, on essaie de donn",
		output: "maglib",
	},
	{
		input:
			"Presque un an qu\u2019\u00e0 travers la France, une franche aspiration \u00e0 ne plus vivre des vies de merde s\u2019est v\u00eatue de jaune pour r\u00e9sister \u00e0 Macron et \u00e0 la pol",
		output: "iaata",
	},
	{
		input:
			"JUGE : Constance DesmoratPROCUREURE : Sandrine CODEVELLEAVOCATE des flics : Annie Hup\u00e9Les audiences se d\u00e9roulent dans une ambiance tendue, des flics e",
		output: "legalteam",
	},
	{
		input:
			"Il ne faudrait tout de m\u00eame pas que des \u00e9cologistes fous et sanguinaires ne viennent \u00e0 \u00ab\u00a0d\u00e9tourner\u00a0\u00bb les \u00ab\u00a0forces de s\u00e9curit\u00e9\u00a0\u00bb (forces r\u00e9pressives) q",
		output: "anonyme",
	},
	{
		input:
			"Face \u00e0 la r\u00e9volte qui s\u2019empare r\u00e9guli\u00e8rement des rues depuis plus de deux mois, un vent mauvais d\u2019arrestations et de lynchage m\u00e9diatique est en train ",
		output: "desanarchistes",
	},
	{
		input:
			"Pas de titre pour 6932 La CBIL (Coordination pour une Bretagne Ind\u00e9pendante et Libertaire) revendique l'action de d\u00e9tournement des affiches \u00e9lectorale",
		output: "anonymous",
	},
	{
		input:
			"Voici son communique traduit par la cellule situationniste Lyon et son TerTer Apr\u00e8s 31 jours de lutte acharn\u00e9e je arr\u00eate la gr\u00e8ve de la faim apr\u00e8s avo",
		output: "anonyme",
	},
	{
		input:
			"M\u00e9tro Les diff\u00e9rentes stations sont repr\u00e9sent\u00e9es par une \u00e9pingle de couleur grise. Lorsque qu\u2019un danger est signal\u00e9 par les utilisateurs sur une stati",
		output: "anonyme",
	},
	{
		input:
			"Hanovre - Allemagne - Deux succursales de la Commerzbank attaqu\u00e9es \u00e0 coup de peinture et de jets de pierres Hanovre, 14 juillet 2010 Le communiqu\u00e9 sui",
		output: "ploumploum",
	},
	{
		input:
			"Outre le mat\u00e9riel informatique et les divers papiers (tracts...), les ordinateurs de Radio Black Out ont \u00e9t\u00e9 saisis. Les faits reproch\u00e9s sont de type ",
		output: "anonyme",
	},
	{
		input:
			"\u00ab Depuis janvier, 90 personnes reconduites au pays \u00bb indiquait la presse locale d\u00e9but septembre. Aujourd'hui, nous pouvons constater une aggravation d",
		output: "fab",
	},
	{
		input:
			"--- ac-info ---------- {{Oui au travail social, _ Non aux renseignements g\u00e9n\u00e9raux ''sociaux''}} Le rapport final du d\u00e9put\u00e9 BENISTI de novembre 2005 su",
		output: "karacole",
	},
	{
		input:
			"Les nouvelles cabanes tiennent toujours, d\u00e9fendons-les ! Point d\u2019info permanent sur le campement \u00e9tabli le long de la d81 entre le lieu dit les domain",
		output: "zadist",
	},
	{
		input:
			"\u00a0 Dans le contexte de circulation des d\u00e9bats et des propositions sur les squats et espaces antiautoritaires, nous partageons quelques r\u00e9flexions, exp\u00e9",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"COMPARUTIONS IMM\u00c9DIATES DU 16 AVRIL 2018 \u00c0 NANTES Pr\u00e9sident\u00a0: LEHORS R\u00e9miAss\u00a0: ROUILLON V\u00e9ro et BAUFRETON CatherineProcureur\u00a0: LECAT Pierre Affaire 1\u00a0",
		output: "legalteam",
	},
	{
		input:
			"La Fabrication de Greta Thunberg - pour consentement a \u00e9t\u00e9 \u00e9crit en six actes. Dans l'ACTE I, je r\u00e9v\u00e8le que Greta Thunberg, l'enfant prodige actuelle ",
		output: "-",
	},
	{
		input:
			"Pendant deux semaines, Laura Jarry, journaliste chez Ouest France encombre la messagerie de Nantes R\u00e9volt\u00e9e en ces termes : \u00abje souhaite r\u00e9aliser un p",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Vous \u00eates nombreu.x.ses \u00e0 nous demander r\u00e9guli\u00e8rement comment nous soutenir mat\u00e9riellement ou financi\u00e8rement.Bien que nous ne soyons donc pas en p\u00e9rio",
		output: "streetmedicnantes",
	},
	{
		input:
			"Au programme ce soir : - Squats d'\u00e9xil\u00e9\u00b7e\u00b7s \u00e0 Caen - Exarchia - Hong Kong - G7 de Biarritz - Soutien \u00e0 Vincenzo \u00a0 Vous pouvez papoter sur https://webc",
		output: "radiocayenne",
	},
	{
		input:
			"La Conf\u00e9d\u00e9ration Nationale du Travail aime se pr\u00e9senter comme \u00absyndicalisme r\u00e9volutionnaire\u00bb et h\u00e9riti\u00e8re de la CGT d\u2019avant 1914. L\u00e9nine d\u00e9finissait l",
		output: "pcint",
	},
	{
		input:
			"Rendre le territoire \u00e0 son usage prescrit. Le pouvoir ne peut se permettre de laisser des groupes s\u2019opposer concr\u00e8tement \u00e0 l\u2019am\u00e9nagement capitaliste d",
		output: "vmc",
	},
	{
		input:
			"Les mois d\u2019avril et mai dernier, les expulsions sur les terres de la zad \u00e0 Notre-Dame-Des-Landes signifiaient des milliers de gendarmes, de tirs tendu",
		output: "anonyme",
	},
	{
		input:
			"Dans le cadre de la pr\u00e9sidence du G7, Emmanuel Macron a fait le choix d\u2019organiser le sommet du G7 \u00e0 Biarritz du 24 au 26\u00a0ao\u00fbt. Une d\u00e9cision prise en c",
		output: "anonyme",
	},
	{
		input:
			"D\u00e8s vendredi soir \u00e0 B17, 2 rdv : \u00e0 19h - cr\u00e9ation d'une Caisse solidaire \"Dotons nous d'un outil collectif permettant de faire face aux impr\u00e9vus, r\u00e9al",
		output: "(((i)))",
	},
	{
		input:
			"Depuis plus de deux ans, le Collectif National Unitaire de r\u00e9sistance \u00e0 la d\u00e9lation est mobilis\u00e9 contre le projet de loi sur la pr\u00e9vention de la d\u00e9lin",
		output: "anonymous",
	},
	{
		input:
			"En plein centre ville, trop visible, peur de se faire \"d\u00e9border\", menace d'envoyer des contr\u00f4les sanitaires, tous les arguments sont bons pour s'oppos",
		output: "l'autrecantinenantes",
	},
	{
		input:
			"Arriv\u00e9e \u00e0 place d'Italie une heure en retard. Les m\u00e9tros \u00e9taient pleins de jeunes plut\u00f4t tr\u00e8s agit\u00e9s, \u00e9videmment pas venus pour d\u00e9filer tranquillement",
		output: "anonymous",
	},
	{
		input:
			"La police a arr\u00eat\u00e9 beaucoup de monde aujourd'hui : 15 personnes avant 18h, puis des interpellations dans la soir\u00e9e. Comme \u00e0 chaque fois, il y a un app",
		output: "radiocayenne",
	},
	{
		input:
			"Jeudi 19 octobre, la journ\u00e9e de mobilisation, annonc\u00e9e tard et peu relay\u00e9e, est pressentie \u00e0 l'avance comme plus faible et dispers\u00e9e que les pr\u00e9c\u00e9dent",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Alertes, rumeurs, informations : tout est v\u00e9rifi\u00e9 ! Au sujet des risques accrus d\u2019attaques dans les jours et semaines qui viennent :\u00a0Depuis plusieurs ",
		output: "zadist",
	},
	{
		input:
			"La COP21, ils l'a nomment la rencontre de la \u00ab derni\u00e8re chance \u00bb...soit disant, pour trouver des solutions face au d\u00e9r\u00e8glement climatique et son lot d",
		output: "zadist",
	},
	{
		input:
			"Le carnaval des Agit\u00e9-e-s, organis\u00e9 par les \u00e9tudiants en lutte, s'est d\u00e9roul\u00e9 sous un vent houleux et un dispositif policier parfaitement ridicule. Po",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"- Vendredi 20 juin 2014 \u2013 Rio de Janeiro Extrait \u00e0 peine retouch\u00e9 d\u2019un article paru sur Le Chat Noir \u00c9meutier: Quatre rassemblements de r\u00e9sistance se ",
		output: "@",
	},
	{
		input:
			"Aux alentours de 15h30 s\u2019entame un deuxi\u00e8me tour a partir de Commerce. La manifestants sont toujours aussi nombreux que lors du 1er tour. Nous repreno",
		output: "streetmedicnantes",
	},
	{
		input:
			"A qui attribuer les incendies synchronis\u00e9s de 3 pyl\u00f4nes de l'agglom\u00e9ration grenobloise\u00a0? Les grattes-claviers de m\u00e9tier, \u00e9quip\u00e9s d'\u00e9tiqueteuses politi",
		output: "-",
	},
	{
		input:
			"Et on a laiss\u00e9 les flics faire respecter des r\u00e8gles pas claires. C'\u00e9tait donc \u00e0 l'appr\u00e9ciation de chacun.e.s. Et comme chacun.e est souvent raciste et",
		output: "legalteam",
	},
	{
		input:
			"Le \u00ab\u00a0r\u00e9f\u00e9rendum\u00a0\u00bb annonc\u00e9 jeudi 11 f\u00e9vrier est un dispositif pi\u00e9g\u00e9 lanc\u00e9 par un gouvernement incapable de faire face \u00e0 la mont\u00e9e en puissance du mouve",
		output: "zadist",
	},
	{
		input:
			"La Gr\u00e8ve infinie. C'est une chose entendue. Le Parti de l'Ordre esp\u00e8re, \u00e0 toutes forces, nous faire rentrer chez nous. Syndicats et gouvernement auron",
		output: "anonyme",
	},
	{
		input:
			"L'avenir est une arnaque (R\u00e9flexions autour du non-d\u00e9sir d'enfant) Avant-propos Ce texte est le fruit d'une r\u00e9flexion et n'a pas pour vocation d'\u00eatre ",
		output: ".",
	},
	{
		input:
			"Aper\u00e7u \u00e0 la fac de Nantes - Les nouvelles d'Enguerrand -\"\u00c7a va pas \u00eatre facile tous les jours, pour vous comme pour moi, mais on est bien entour\u00e9s : l",
		output: "comit\u00e9desoutien\u00e0enguerrand",
	},
	{
		input:
			"\u00a0 Au programme\u00a0: Chile Desperto\u00a0: Quand un peuple revendique son droit \u00e0 vivre en paix Une lettre de Philippe Lalouel et une lecture de M\u00e9moires de co",
		output: "radiocayenne",
	},
	{
		input:
			"Partie commune C'est vaste ! Salle commune Entr\u00e9e EPHAD Le 7 Mars \u00e0 7h, plusieurs centaines de CRS expulsaient les b\u00e2timents universitaires Censive et",
		output: "nantesaveclesexil\u00e9.e.s",
	},
	{
		input:
			"Pas de titre pour 11376 Voil\u00e0 bien longtemps que nous avons cess\u00e9 de croire et d\u2019esp\u00e8rer avec le Parti Socialiste et plus g\u00e9n\u00e9ralement en la \u00ab G\u00f4che \u00bb",
		output: "anonyme",
	},
	{
		input:
			"Resum\u00e9 de la premi\u00e8re session du proc\u00e8s de M\u00f3nica Caballero et Francisco Solar 8 mars 2016 Juste au d\u00e9but du proc\u00e8s, un des avocats de la d\u00e9fense inte",
		output: "x",
	},
	{
		input:
			"Les m\u00e8res du Parc Laleh appellent a se rem\u00e9morer, les victimes Iraniennes du r\u00e9gime des ann\u00e9es 80. A l\u2019instar des \u00ab folles de la place de mai \u00bb en arg",
		output: "soliranparis",
	},
	{
		input:
			"Convoqu\u00e9s par le rectorat mi-mars, ils ont \u00e9t\u00e9 suspendus pour 4 mois avec interdiction de s\u2019approcher de l\u2019\u00e9tablissement ou d\u2019avoir des contacts avec ",
		output: "secoursrouge",
	},
	{
		input:
			"Nous avons cram\u00e9 un utilitaire vinci, constructeur et gestionnaire de taules, autoroutes, CRA et autres a\u00e9roports. Un utilitaire sodexo(gere la bouffe",
		output: ".",
	},
	{
		input:
			"Imaginez que votre ch\u00f4mage, votre RSA ou votre salaire ne vous permettent plus de faire des retraits, vous devez dor\u00e9navant tout payer par carte ! Cel",
		output: "l'autrecantine",
	},
	{
		input:
			"Le blog pour retrouver les podcasts et news : https://radiocayenne.noblogs.org Le chat pour converser pendant l'\u00e9mission : http://chat.koumbit.net (ch",
		output: "radiocayenne",
	},
	{
		input:
			"26 mai 2020 : Clous tordus et caillassages pour les keufs \u00e0 Friedrichain. Dans la nuit du 25 au 26 mai, la police a \u00e9t\u00e9 attaqu\u00e9e \u00e0 plusieurs reprises ",
		output: "sansattendre",
	},
	{
		input:
			"Regroupement de propri\u00e9taires et de commer\u00e7ants, s\u2019armant par crainte des \u00e9meutes, Seattle, dimanche 31/05 Voiture en feu \u00e0 Seattle, 30-31/05 Los Ange",
		output: "sansattendre",
	},
	{
		input:
			"Vous pouvez aussi devisez avec nous sur le chat : https://chat.indymedia.org salon #cayenne Retrouvez le blog \u00e0 https://radiocayenne.noblogs.org Email",
		output: "radiocayenne",
	},
	{
		input:
			"Jeudi 12 Avril : KLX : 21h53 : 32 camions GM depuis le bas de la 281 (La Paquelais). Pas de nouvelles de l'Est. N'h\u00e9sitez pas \u00e0 se pr\u00e9server pour teni",
		output: "zadist",
	},
	{
		input:
			"-- Les nouvelles d'Enguerrand -- \u00ab Merci pour les photos, ainsi que les cartes (et les messages qui vont avec, fais la bise aux copains), qui sont tou",
		output: "comit\u00e9desoutien\u00e0enguerrand",
	},
	{
		input:
			"C\u2019est un peu comme s\u2019il n\u2019\u00e9tait pas possible d\u2019\u00e9couter un CD plusieurs fois ou qu\u2019un logiciel informatique devait s\u2019autod\u00e9truire pass\u00e9 un certain d\u00e9la",
		output: "moi",
	},
	{
		input:
			"Une quarantaine d\u2019associations appelaient les habitant.e.s des villes et des campagnes \u00e0 d\u00e9terminer et bloquer les projets les plus toxiques sur le te",
		output: "...",
	},
	{
		input:
			"- Communiqu\u00e9 de presse - Alors que de nos jours les mouvements sociaux occupent la rue et l'espace public pour d\u00e9fendre les valeurs de solidarit\u00e9 esse",
		output: "comit\u00e9desoutien\u00e0enguerrand",
	},
	{
		input:
			"Salutations de Hannovre aux trois du banc public Ce qui s\u2019est pass\u00e9 Dans la nuit du 7 au 8 juillet, les trois compagnon-ne-s se sont fait contr\u00f4ler su",
		output: ".",
	},
	{
		input:
			"NE NOUS DEMANDEZ PAS DES FORMULES \u00e0 propos des arrestations du 31 janvier \u00ab Ne nous demande pas des formules qui puissent t'ouvrir des mondes, mais qu",
		output: ".",
	},
	{
		input:
			"RASSEMBLEMENTS AILLEURS : Angevin, 17h30 Le Collectif de citoyen Angevin \u00e0 l\u2019a\u00e9roport de NDDL appel \u00e0 un rassemblement \u00e0 17h30 Place du Ralliement, po",
		output: "zadist",
	},
	{
		input:
			"\"Ni juges ni prisons n'arr\u00eateront nos rebellions\" : rassemblement NDDL 2013 - photo : Val K / collectif Bon Pied Bon Oeil Plus d'une centaine de perso",
		output: "*",
	},
	{
		input:
			"Il y a 15 ans mourrait Carlo Giuliani, un militant italien de 23 ans, po\u00e8te et anarchiste, tu\u00e9 pendant les manifestations contre le sommet du Groupe d",
		output: "...",
	},
	{
		input:
			"Besan\u00e7on, 1er avril 2017. Les 4 pneus d\u2019une bagnole de SECURITAS (Verisure) crev\u00e9s. https://grenoble.indymedia.org/2017-04-01-Creve-SECURITAS \u00a0",
		output: "..",
	},
	{
		input:
			"\u00c0 l\u2019issue des gardes \u00e0 vue, les quatre personnes ont \u00e9t\u00e9 d\u00e9f\u00e9r\u00e9es au parquet de Bobigny en vue d\u2019une comparution imm\u00e9diate \u00e0 d\u00e9lai diff\u00e9r\u00e9. Cette nouv",
		output: "secoursrouge",
	},
	{
		input:
			"Samedi dernier, jour de grand d\u00e9part en vacances, 2 banderoles ont \u00e9t\u00e9 accroch\u00e9es au dessus d'une autoroute dans la r\u00e9gion nantaise. On pouvait y lire",
		output: ".",
	},
	{
		input:
			"Manifestation cons\u00e9cutive au meurtre de Breonna Taylor La police locale de Louisville, pr\u00e9venue par un appel, a annonc\u00e9 avoir retrouv\u00e9 un homme gri\u00e8ve",
		output: "secoursrouge",
	},
	{
		input:
			"Voici toute l\u2019histoire. Le FC Partyzan (ancien MTZ-RIPO) est un club de football antiraciste qui n\u2019existe plus aujourd\u2019hui, mais il existe encore quel",
		output: "anonyme",
	},
	{
		input:
			"C'est pas fini ! Au printemps dernier, le projet de \"loi travail\" a \u00e9t\u00e9 une goutte d'eau qui a fait d\u00e9border le ras-le-bol accumul\u00e9. Beaucoup ont sais",
		output: "anonyme",
	},
	{
		input:
			"Lib\u00e9rez Roland Veuillet! Halte \u00e0 la r\u00e9pression polici\u00e8re et judiciaire du mouvement syndical ! Notre camarade Roland Veuillet a \u00e9t\u00e9 arr\u00eat\u00e9 le samedi 3",
		output: "cnt",
	},
	{
		input:
			"Cette journ\u00e9e devait aussi \u00eatre un test, apr\u00e8s les grands discours du gouvernement, les promesses, et la gestion d\u00e9sastreuse de la pand\u00e9mie par un pou",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le meurtre de George Floyd film\u00e9 en direct Mardi, une manifestation d\u2019hommage au d\u00e9funt et contre les crimes policiers et le racisme a eu lieu \u00e0 Minne",
		output: "secoursrouge",
	},
	{
		input:
			"Campements de fortune construits dans les interstices du b\u00e9ton que, mardi 19 mai 2020 au petit matin, les forces de police parisiennes ont d\u00e9truit au ",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			'- Parcequ\'elle est une pi\u00e8ce du dispositif de la "smart & safe city". - Parceque la SEPAMAT, entreprise qui g\u00e8re la "marguerite", est partenaire de Na',
		output: ".",
	},
	{
		input:
			"D\u00e9j\u00e0 il peut \u00eatre important de donner quelques rep\u00e8res chronologiques. Les \u00e9l\u00e9ments analys\u00e9s ont \u00e9t\u00e9 saisis le 28 mars 2018 lors de 3 perquisitions si",
		output: "xxx",
	},
	{
		input:
			"Cinq policiers nationaux en uniformes sont arriv\u00e9s en courant et m\u2019ont menott\u00e9. Le policier en civil leur a dit qu\u2019il me suivait depuis Commerce. Il m",
		output: "anonyme",
	},
	{
		input:
			"Assez de morts au travail ! Assez d'assassinats l\u00e9gaux ! Thyssen Krupp avait d\u00e9cid\u00e9 de fermer ses aci\u00e9ries de Turin en juin 2008, mais la soif de prof",
		output: "pcint",
	},
	{
		input:
			"Comme un lundi sur deux, ce soir on laisse l'antenne \u00e0 d'autres \u00e9missions. Au programme : la derni\u00e8re \u00e9mission de Casse-Murailles, une \u00e9mission de May",
		output: "radiocayenne",
	},
	{
		input:
			"Aux alentours de 13h20, alors qu'un peu plus d'une centaine de manifestant-e-s commence \u00e0 investir la route, un groupe de CRS arrive depuis le centre ",
		output: "streetmedicnantes",
	},
	{
		input:
			"Il semble que des perquisitions ont eu lieu ce mardi matin dans la Z.A.D de Roybon ( en Is\u00e8re ) et dans des squats \u00e0 Grenoble et agglom\u00e9ration ( Is\u00e8re",
		output: "*",
	},
	{
		input:
			"22 f\u00e9vier 2014 : Une grande manifestation s'empare de Nantes pour d\u00e9fendre la zad et contester le projet d'a\u00e9roport de Notre-Dame-des-Landes. La foule",
		output: "dispac'h",
	},
	{
		input:
			"Samedi 9 d\u00e9cembre \u00e0 partir de 16 H \u00e0 B 17 17 rue Paul Bellamy Nantes, tram 2 arr\u00eat cour des 50 otages 16 H - 19 H d\u00e9bat avec les gim\u00e9nologues Bruno Sa",
		output: "anonymous",
	},
	{
		input:
			"C'est extr\u00eamement violent? mena\u00e7ant? Propre \u00e0 faire paniquer les gens ? Pas du tout, c'est de l'information on vous dit. C'est ind\u00e9cent, inhumain, ins",
		output: "l'autrecantinenantes",
	},
	{
		input:
			"Le Chat : https://webchat.cyberguerrilla.org/#cayenne Le blog : https://radiocayenne.noblogs.org Email de contact: radiocayenne_AT_riseup.net",
		output: "k-hy\u00e8ne",
	},
	{
		input:
			"Quel gachis ! Qu'ont-ils fait des plats pr\u00e9par\u00e9s qui, selon la loi, ne peuvent \u00eatre resservis le lendemain ? Comment peuvent-iels oser faire cela alor",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Samedi dernier, environ 200 personnes sont venues tout au long de l'apr\u00e8s-midi soutenir le collectif du Jardin des Ronces dans son combat. L'occasion,",
		output: "roncier",
	},
	{
		input:
			"Bulletin num\u00e9ro 171, mars/avril 2018, du r\u00e9seau R\u00e9sistons Ensemble. Form\u00e9 en 2002, R\u00e9sistons Ensemble a pour but d'informer, de briser l'isolement des",
		output: "r\u00e9seaure",
	},
	{
		input:
			"Au programme : Kurdistan, Blanquer et le voile, la non-violence, des br\u00e8ves, de la musique et d'autres trucs ! \u00a0 Le chat est sur https://webchat.cyber",
		output: "k-hy\u00e8ne",
	},
	{
		input:
			"KLX : 13:33: Quand tu te ballades dans les champs et que tu ouvres une cloture (type poign\u00e9e orange/elec) d'un champ, oubli pas de la refermer KLX : 1",
		output: "zad",
	},
	{
		input:
			"La pr\u00e9fecture a dit dans la presse que la mairie n\u2019aurait pas d\u00fb expulser si vite le lyc\u00e9e Leloup nous comptons donc sur elle pour ne pas envoyer ses ",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"Les temps sont durs. Les capitalistes insistent toujours davantage pour faire de chacun de nous une marchandise disponible \u00e0 n\u2019importe quel prix. Les ",
		output: "aaa",
	},
	{
		input:
			"Les annonces gouvernementales visant le quartier d\u2019Exarcheia ne datent pas de cet \u00e9t\u00e9 mais vont en s\u2019amplifiant depuis quelque temps. Historiquement m",
		output: "solidarit\u00e9",
	},
	{
		input:
			"\u00a0 Bonjour \u00e0 toutes et \u00e0 tous, Parce que la r\u00e9pression a une tr\u00e8s importante dimension psychologique, et pas uniquement physique ou l\u00e9gale, certaines p",
		output: "streetmedicnantes",
	},
	{
		input:
			"Ce matin trois rendez-vous sont pr\u00e9vus; * \u00c0 l'ambassade de France; La d\u00e9l\u00e9gation \u00e0 l'ambassade a tourn\u00e9 court; un sous fifre a pris le dossier concoct",
		output: "pj49",
	},
	{
		input:
			"KLX : 19h26 : 2 flics dans le champs nord du Gourbi. A 18h45 champs saulce et isolette, une personne bouff\u00e9e par un chien (des CRS, a priori) et matra",
		output: "zadist",
	},
	{
		input:
			"Le gouvernement a confirm\u00e9 ce matin que les tarifs de l\u2019\u00e9lectricit\u00e9 augmenteront, d\u00e9but 2011, de 3 % \u00e0 4%. Au mois d\u2019ao\u00fbt, le prix de l\u2019\u00e9lectricit\u00e9 av",
		output: "anonyme",
	},
	{
		input:
			"Hola compagnon.e.s d\u2019Atenco, d\u2019Acteal, de Las Abejas, des Caracoles du Chiapas et des autres communaut\u00e9s qui luttez pour une vie juste sur cette Terre",
		output: "zadist",
	},
	{
		input:
			"Malgr\u00e9 l\u2019ampleur du dispositif de r\u00e9pression polici\u00e8re et judiciaire d\u00e9ploy\u00e9 contre les Gilets jaunes par l\u2019\u00c9tat, le mouvement continue de b\u00e9n\u00e9ficier ",
		output: "collectif",
	},
	{
		input:
			"flics en boue face \u00e0 face douilles dans le champ un.e bless\u00e9.e dans un brancard autour de la gr\u00e9e jeudi 12 avril Vendredi 13 Avril : KLX 14h55 : Infot",
		output: "zadist",
	},
	{
		input:
			"Solidarit\u00e9 avec tous les lieux occup\u00e9s \u00e0 lutter ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0KLX: #InfoTrafflic de h",
		output: "zad",
	},
	{
		input:
			"CONTACTS :\u00a0 ZAD : mail Infos : zad_AT_riseup.net - mail Soutiens : soutienzad_AT_riseup.net Infotraflic ZAD (uniquement pour les signalements sur zone",
		output: "d\u00e9fendrelazad",
	},
	{
		input:
			"Beaucoup attendent encore, d\u00e9sabus\u00e9s, une prise de position et des actions fortes de la part de la gauche institutionnelle, laquelle, apr\u00e8s les coups ",
		output: "verdi",
	},
	{
		input:
			"10 millions de Fran\u00e7ais ne survivent que gr\u00e2ce \u00e0 la solidarit\u00e9 inscrite dans les lois de protection sociale depuis la Lib\u00e9ration. Si d'aventure la fra",
		output: "verdi",
	},
	{
		input:
			"[ACTE XVI - 02/03/2019 - NANTES] [BILAN PROVISOIRE - MAJ 06/03] Nous tenons tous d'abord \u00e0 remercier les nombreux-ses medics venu-es d'ailleurs en Fra",
		output: "streetmedicnantes",
	},
	{
		input:
			"Le Tribunal Russell sur la Palestine, tribunal symbolique constitu\u00e9 d\u2019\u00e9minentes personnalit\u00e9s, a consid\u00e9r\u00e9 que l\u2019\u00c9tat d\u2019Isra\u00ebl \u00e9tait coupable de crime",
		output: "pierrestambul",
	},
	{
		input:
			"Conf\u00e9d\u00e9ration nationale du travail 33, rue des Vignoles 75020 Paris medias@cnt-f.org Communiqu\u00e9 du 16 novembre 2003 La CNT contrainte \u00e0 une manifestat",
		output: "cnt",
	},
	{
		input:
			"Appel \u00e0 l'initiative des premiers signataires suivants : Dr Christine Bellas-Cabane (p\u00e9diatre, pr\u00e9sidente du syndicat national des m\u00e9decins de PMI), D",
		output: "anonymous",
	},
	{
		input:
			"Alors qu'en cette fin de mouvement social, la r\u00e9pression semble \u00eatre loin de faiblir, c'est \u00e0 pr\u00e9sent \u00e0 notre tour de devoir y faire face. En effet, c",
		output: "streetmedicnantes",
	},
	{
		input:
			"Apr\u00e8s une expulsion rat\u00e9e vendredi a-midi (gr\u00e2ce \u00e0 mob. CGT Roissy, et attitude bienveillante des passagers et du Cdt de bord), celle-ci a finalement ",
		output: "anonymous",
	},
	{
		input:
			"Depuis le d\u00e9but de l'ann\u00e9e 28 policiers se sont suicid\u00e9s . Les\" merdias\" aux ordres, toujours promptes \u00e0 d\u00e9fendre les forces de l'ordre capitaliste, s",
		output: "larage",
	},
	{
		input:
			"SVP vous pouvez envoyer cet email dans le liste: fse-france@fse-esf.org et fse-esf@fse-esf.org ATTAC Paris il nous censure...Paris: Attac, pour le FSE",
		output: "collectifbellaciao",
	},
	{
		input:
			"Il participait avec plus de trois mille agriculteurs et paysans, le 17 d\u00e9cembre \u00e0 une marche organis\u00e9e par la Via Campesina pour manifester pacifiquem",
		output: "anonymous",
	},
	{
		input:
			'Un appel re\u00e7u, que nous relayons. "Justice pour Th\u00e9o - Solidarit\u00e9 avec Aulnay Rendez-vous mercredi 8 f\u00e9vrier, 18H, Place Bouffay Jeudi dernier \u00e0 Aulna',
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pour commencer cette journ\u00e9e de lutte : le d\u00e9p\u00f4t de tramways d'h\u00f4pital Bellier bloqu\u00e9 depuis 5H le matin Photo : Marin DRIGUEZ, Taranis News Photo : M",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"\" Nous naissons seuls / seules et nous mourons seuls / seules . Nous aurons pass\u00e9 nos vies \u00e0 nous chercher nous-m\u00eames , chez les autres , et nous n ' ",
		output: "patricefaubertditpatl'invit\u00e9",
	},
	{
		input:
			"KLX: 11:00: besoin sur site de v\u00e9lo roulant, rustine, colle, WD 40, cl\u00e9 plate/ allen..., cable, pneu, chambre \u00e0 air KLX: 10:54: flic au croisement de ",
		output: "zad",
	},
	{
		input:
			'Pourtant\u00a0"Check News" du quotidien Lib\u00e9ration\u00a0a contact\u00e9 le responsable du Bagelstein qui lui a affirm\u00e9 que le graffiti avait \u00e9t\u00e9 fait dans la nuit du',
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"Chiffre exceptionnel au beau milieu de l'\u00e9t\u00e9 et surtout dans le cadre d'une manifestation contre les violences polici\u00e8res, au moins 3 \u00e0 4000 personnes",
		output: "streetmedicnantes",
	},
	{
		input:
			"https://twitter.com/Mimas87/status/1079074646492889088 On ne d\u00e9nombre pas encore toutes les blessures, mais on notera plusieurs blessures aux mains, d",
		output: "streetmedicsnantes",
	},
	{
		input:
			"D\u00e9but ao\u00fbt 2005, les squats de la traverse des 400 couverts et de la rue des bergers (la Kanaille) \u00e9taient expuls\u00e9s en toute h\u00e2te, projets urgents obl",
		output: "collectif",
	},
	{
		input:
			"Au menu ce soir : - des news de Marseille, un peu plus d'un mois apr\u00e8s l'effondrement des immeuble qui a fait 8 morts - paroles de malfaiteur.e.s / no",
		output: "radiocayenne",
	},
	{
		input:
			"L'automne au jardin des ronces fut riche en plantations. De nombreux fraisiers, framboisiers, et artichauts sont venus garnir nos parcelles collective",
		output: "roncier",
	},
	{
		input:
			"Sondage POUR ou CONTRE la redevance Etes-vous favorable \u00e0 la suppression de la redevance t\u00e9l\u00e9 destin\u00e9e \u00e0 financer l'audiovisuel public? OUI, car il es",
		output: "verdi",
	},
	{
		input:
			"Photo Taranis News Photo Taranis News A Nantes Valls avait fait d\u00e9ployer 700 casqu\u00e9s et bloquer toute une partie de la ville. A Rennes hier, un dispos",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pour la f\u00eate de la musique, les autorit\u00e9s nantaises ont mis les grands moyens pour g\u00e2cher la soir\u00e9e : nombreuses patrouilles, police municipale et BAC",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Cette gr\u00e8ve met \u00e0 nu toute l'hypocrisie de l'ensemble de la bourgeoisie br\u00e9silienne et sa responsabilit\u00e9 dans la crise des transports a\u00e9riens, tant de",
		output: "unsympathisantducci",
	},
	{
		input:
			"Cette cavale sert de pr\u00e9texte aux autorit\u00e9s pour lancer une vague de perquisitions sans pr\u00e9c\u00e9dant dans la mouvance antagoniste, principalement \u00e0 Ath\u00e8n",
		output: "anonyme",
	},
	{
		input:
			"L\u2019Iran est l\u2019un des pays o\u00f9 se d\u00e9roulent le plus grand nombre d\u2019ex\u00e9cutions dans le monde, et le r\u00e9gime vient de battre un nouveau record dans sa viole",
		output: "soliranparis",
	},
	{
		input:
			"Cinq personnes cagoul\u00e9es lui sont tomb\u00e9es dessus devant chez lui. Une fois au sol, il a \u00e9t\u00e9 rou\u00e9 de coups de poing et de coups de pieds. Le gardien, \u00e2",
		output: "sansattendre",
	},
	{
		input:
			"[1ER TOUR] C\u2019est sous un soleil et des temp\u00e9ratures \u00ab tropicales \u00bb que d\u00e9marre la manifestation, avec une grosse centaines de personnes au d\u00e9part de l",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Nos droits valent bien une gr\u00e8ve g\u00e9n\u00e9rale ! Nous avons connu, entre mars et juillet dernier, une mobilisation exceptionnelle \u2013 par sa dur\u00e9e comme par ",
		output: "cntnantes",
	},
	{
		input:
			"Le mardi 10 d\u00e9cembre, Radio Cayenne sera en direct \u00e0 partir de 9h ! (et peut-\u00eatre m\u00eame un peu avant, sait-on jamais !) Pour \u00e9couter : https://radiocay",
		output: "radiocayenne",
	},
	{
		input:
			"Modalit\u00e9s interractionnelles occidentalo-centr\u00e9es\u00a0 Cette r\u00e9flexion est partie du constat que, depuis que j\u2019habite en France, dans l\u2019ensemble de mes in",
		output: "iaata",
	},
	{
		input:
			"Au 733 \u00e8me jour d'impunit\u00e9 d'Uro et de sa clique d'assassins, nous vivons a Oaxaca un v\u00e9ritable \u00e9tat d'exception, les garanties individuelles n'existe",
		output: "anonymous",
	},
	{
		input:
			'Le cri de d\u00e9tresse d\'un agent verbalisateur: "Je me sens en ins\u00e9curit\u00e9" "Je n\'en peux plus". C\'est par ces mots que Jeremy commence son message envoy\u00e9',
		output: "anonyme",
	},
	{
		input:
			"Dans les ann\u00e9es qui ont suivi la prise de pouvoir par Adolf Hitler en Allemagne, un fl\u00e9au sans pr\u00e9c\u00e9dent en termes de syst\u00e9matisation et de justificat",
		output: "anonymous",
	},
	{
		input:
			"Aupr\u00e8s de mon arbre, je vivais heureux \u2026 Les habitants d\u2019Istanbul s\u2019opposent \u00e0 la destruction des arbres pr\u00e8s de la place Taksim. Le pouvoir, lui, en ",
		output: "anonyme",
	},
	{
		input:
			"Mercredi midi, une Assembl\u00e9e G\u00e9n\u00e9rale de lutte sociale, contre la pr\u00e9carit\u00e9 et contre les r\u00e9formes actuelles (ch\u00f4mage, retraites, s\u00e9cu, travail de nui",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Blog : https://radiocayenne.noblogs.org \u00a0 Chat sur https://chat.indymedia.org, salon #cayenne Email de contact: radiocayenne_AT_riseup.net",
		output: "radiocayenne",
	},
	{
		input:
			"Jeudi 7 juillet, le collectif MIE avec des associations nantaises occupent un nouveau lieu pour h\u00e9berger les jeunes exil\u00e9s \u00e0 la rue. La mairie sociali",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"20080123_004W_Manif anti retention (cc) ValK 20080123_003W_Manif anti retention (cc) ValK \u00catre sans papiers, c'est une situation administrative, ce n'",
		output: "m",
	},
	{
		input:
			'<!-- Feature Image change class to "left" to align image left--> 23/01/08 : CRA Waldeck de Nantes - photo (cc) ValK <!-- End of Feature Image --> Rapp',
		output: "imcnantes",
	},
	{
		input:
			"avec deux manifs de pr\u00e9vu : LES JEUDI 7 et 14 FEVRIER \u00e0 18h00 DEVANT LE CENTRE DE RETENTION une r\u00e9union unitaire est pr\u00e9vu le 20 f\u00e9vrier... \u00e0 suivre d",
		output: "m",
	},
	{
		input:
			"La situation actuelle de ces mineur-e-s en exil est d\u00e9satreuse. Cette quinzaine de jeunes rejoint celles et ceux qui se retrouvent \u00e0 la rue sans solut",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Ce mouvement improvis\u00e9 s'inscrit dans un contexte de r\u00e9forme du Bac, d'absence de perspectives pour la jeunesse, de fermeture de l'acc\u00e8s aux universit",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Chat : https://chat.indymadia.org, salon #cayenne Blog : https://radiocayenne.noblogs.org Email de contact: radiocayenne_AT_riseup.net",
		output: "radiocayenne",
	},
	{
		input:
			"T\u00e9moignage : \u00ab Nous \u00e9tions environ 400. La manifestation \u00e9tait dynamique, on a pu faire un grand tour dans le centre ville. Le passage devant la pr\u00e9fe",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Quelques news : [Manif et assembl\u00e9e] Les Mineur-e-s en exil \u00e0 Nantes appellent \u00e0 une grande manifestation suivie d'une assembl\u00e9e le 5 avril pour d\u00e9non",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Fin 2007, malgr\u00e9 la r\u00e9pression et l'expulsion de porte-parole, les personnes retenues dans les centres de r\u00e9tention s\u2019organisent et parviennent \u00e0 m\u00e9di",
		output: "anonyme",
	},
	{
		input:
			"- Fin du XIXe si\u00e8cle : un b\u00e2timent est \u00e9rig\u00e9 pour les \u00ab Postes et t\u00e9l\u00e9graphes \u00bb. L'h\u00f4tel des Postes, service public en plein c\u0153ur de la ville, donne s",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"\u00catre sans papiers, c'est une situation administrative, ce n'est pas un crime ! La politique du gouvernement veut r\u00e9duire les personnes sans papiers \u00e0 ",
		output: "m",
	},
	{
		input:
			"On peut bien voir le trac\u00e9 de ce projet de \u00ab\u00a0liaison structurante\u00a0\u00bb (sic) sur cette carte des projets en d\u00e9veloppement dans le 44, r\u00e9alis\u00e9 par la Cham",
		output: "collectifterrescommunes",
	},
	{
		input:
			"http://www.cnt-f.org/soutien-au-peuple-chilien.html CHILI\u00a0: REVOLTES SOCIALES CONTRE LA VIE CHERE ET LA MISERE, 40 MORTS Le 14 octobre, le pr\u00e9sident c",
		output: "cntnantes",
	},
	{
		input:
			"25/11, \"Le gouvernement propose que les militaires prot\u00e8gent l'infrastructure-clef des villes\" Puente Alto, 24/11 l'hypermarch\u00e9 ACuenta part en fum\u00e9e ",
		output: "solidari@s",
	},
	{
		input:
			"Les RDV de l\u2019AGI Suite \u00e0 la belle r\u00e9ussite de l\u2019AG d\u2019hier qui a r\u00e9unie une centaine de personnes plusieurs rendez vous ont \u00e9t\u00e9 fix\u00e9s afin de pr\u00e9parer ",
		output: ".",
	},
	{
		input:
			"Le projet d'a\u00e9roport de Notre dame des landes se voit chaque jour plus fragilis\u00e9. La manifestation du 22 f\u00e9vrier a connu une mobilisation in\u00e9dite et d",
		output: ".",
	},
	{
		input:
			"Fronti\u00e8re gr\u00e8que En plein chantage avec l'Europe sur la question du Kurdistan et des r\u00e9fugi\u00e9s syriens notamment, la Turquie ouvre sa fronti\u00e8re avec la",
		output: "radiocayenne",
	},
	{
		input:
			"Compte rendu du proc\u00e8s de Christine \u00e0 la cours d'appel de Paris le 26 septembre 2014 Le 26 septembre 2014, Christine est pass\u00e9e en proc\u00e8s \u00e0 la cours d",
		output: "anonyme",
	},
	{
		input:
			"\u00ab En f\u00e9vrier, toutes les commandes que nous avons re\u00e7ues ont \u00e9t\u00e9 bloqu\u00e9es \u00bb \u00abEn d\u00e9but de semaine, il devait y en avoir pas loin de 500 000 \u00bb, affirme ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Ce n\u2019est pas tant de sommes savantes des d\u00e9faites circonscrites dans les espaces nationaux dont nous avons besoin, que de critiques impitoyables de no",
		output: "vosstanie",
	},
	{
		input:
			"Selon le t\u00e9moignage des habitant-e-s, peu de temps avant l'op\u00e9ration d'expulsion, la mairie a envoy\u00e9 des agents qui ont promis leur aide aux personnes",
		output: "zadist",
	},
	{
		input:
			"Lundi 20\u00a0janvier au Ch\u00e2teau de Versailles, le pr\u00e9sident Macron a accueilli lors du sommet Choose France 200 magnats de l\u2019industrie dont les PDG de Tot",
		output: "...",
	},
	{
		input:
			"\u00c7a fait d\u00e9j\u00e0 deux semaines ke notre ami a \u00e9t\u00e9 arr\u00eat\u00e9 et emprisonn\u00e9 pour avoir fait la r\u00e9cup de bouffe dans les poubelles d\u2019un supermarch\u00e9 \u00e0 Brugges, B",
		output: "anonyme",
	},
	{
		input:
			"Une \u00e9lection s'ach\u00e8ve, une autre commence. Apr\u00e8s les pr\u00e9sidentielles du mois de mai, c'est au tour des l\u00e9gislatives d'occuper le terrain de la campagn",
		output: "unsympathisantducci",
	},
	{
		input:
			"Le projet est financ\u00e9 int\u00e9gralement par des fonds publics (dans les 10 millions d\u2019euros) et doit servir uniquement des int\u00e9r\u00eats priv\u00e9s. Il a \u00e9t\u00e9 men\u00e9 ",
		output: "zadist",
	},
	{
		input:
			"Comme dirait le jingle : \u00ab Si t'as pas d'ordi, va donc chez tes ami\u00b7e\u00b7s ! \u00bb Radio Cayenne, c'est tous les lundis \u00e0 partir de 19h sur https://radiocaye",
		output: "k-hy\u00e8ne",
	},
	{
		input:
			"Macron dit de venir le chercher : on va le chercher \u00e0 l\u2019Elys\u00e9e. L\u2019\u00c9tat nous rackette sur les routes : on p\u00e8te les radars. On en a marre de tourner en ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Finalement, autour de 200 personnes se sont retrouv\u00e9es. Et \u00e0 la surprise g\u00e9n\u00e9rale, ce tout petit cort\u00e8ge a \u00e9t\u00e9 plus audacieux que les 10 000 manifesta",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Tout a commenc\u00e9 avec l\u2019ex\u00e9cution extrajudiciaire (interdite par le droit international) d\u2019un dirigeant du Jihad Islamique, une des organisations de la",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"Vous pouvez aussi rejoindre le chat sur https://webchat.cyberguerrilla.org/#cayenne Email de contact: radiocayenne_AT_riseup.net",
		output: "radiocayenne",
	},
	{
		input:
			"C\u00d4T\u00c9 JARDIN Les graines de pois et de f\u00e8ves sont d\u00e9j\u00e0 sem\u00e9es, les belles couleurs de la rhubarbe ressortent de terre, et de nombreuses planches de cul",
		output: "roncier",
	},
	{
		input:
			"20 minutes de chouette musique et de r\u00e9cit de la manif de samedi (16/11) pour les un an du mouvement des gilets jaunes \u00e0 Nantes, c'est non exhaustif m",
		output: "radiocayenne",
	},
	{
		input: "Big up !",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			'PROLOGUE Pour nous qui assistons r\u00e9guli\u00e8rement au proc\u00e8s des manifestants et des cohortes de ceux que les magistrats appellent les "droits communs", l',
		output: "anonyme",
	},
	{
		input:
			"Elle est appel\u00e9e, indiquent les m\u00e9dias, par les syndicats CGT, IAC, COS e Intersindical CSC, ce qui confirmerait ce qui se pressentait hier, le retrai",
		output: "anonyme",
	},
	{
		input:
			"La CGT et la CNT, les deux syndicats anarchistes, ont r\u00e9agi depuis bien longtemps et ont m\u00eame sign\u00e9 des textes ensemble pour ce positionner contre le ",
		output: "anonyme",
	},
	{
		input:
			"Texte publi\u00e9 par le camarade avant son acte Bonjour Aujourd\u2019hui, je vais commettre l\u2019irr\u00e9parable. si je vise donc le b\u00e2timent du CROUS \u00e0 Lyon. ce n\u2019es",
		output: "anonyme",
	},
	{
		input:
			"En r\u00e9alit\u00e9, le butin est bien maigre. En cherchant un peu, on trouve bien quelques rares personnes \u00e0 avoir contest\u00e9 un jour publiquement le projet d'a",
		output: "zadist",
	},
	{
		input:
			"\u2022 Proclamer la Commune de Nantes \u2022 Recreuser la Loire et l\u2019Erdre \u2022 Transports gratuits et abolition des loyers \u2022 D\u00e9capiter la colonne de Louis XVI Pla",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le 22 juin 2008 le plus grand centre de r\u00e9tention de France a br\u00fbl\u00e9. Entre juin 2008 et juin 2009, une dizaine d\u2019anciens retenus sont arr\u00eat\u00e9s et incar",
		output: "anonyme",
	},
	{
		input:
			"Photo 9 Photo 8 Photo 7 Photo 6 Photo 5 Photo 4 Photo 3 Photo 2 Photo 1 \u00ab Ce qui doit arriver un jour peut arriver aujourd'hui \u00bb C'est \u00e0 la ZAD que j'",
		output: "anon",
	},
	{
		input:
			"Un peu d\u2019histoire Six beaux b\u00e2timents sur Rushcroft Road ont \u00e9t\u00e9 d\u00e9laiss\u00e9s dans un \u00e9tat de d\u00e9labrement par le Conseil de Lambeth [autorit\u00e9s locales]\u00a0d",
		output: "anonyme",
	},
	{
		input:
			"Le Grondement de la Bataille\u2026 \u00ab La recherche d'une meilleure int\u00e9gration du d\u00e9veloppement universitaire dans le d\u00e9veloppement local et r\u00e9gional ne doi",
		output: "laurent",
	},
	{
		input:
			"La plupart des \u201c\u00e9v\u00e9nements\u201d pr\u00e9vus par la DNR n\u2019ont en r\u00e9alit\u00e9 jamais eu lieu. Les \u201ccadres\u201d DNR de gauche \u00e0 droite : A. Eddie Batista (Paris), B. S\u00e9ba",
		output: "lahorde",
	},
	{
		input:
			"Banderole au rassemblement du 12 novembre sur le campus de Nantes Virginie Catherine, directrice g\u00e9n\u00e9rale du CROUS Normandie (co-responsable de la mis",
		output: "sansattendredemain",
	},
	{
		input:
			"Si la mobilisation n\u2019a pas \u00e9t\u00e9 aussi massive qu\u2019on aurait pu l\u2019esp\u00e9rer, ceci \u00e0 au moins permis de tester la mauvaise foi de celleux qui \u00e9taient contre",
		output: "maglib",
	},
	{
		input:
			"La v\u00e9ritable raison de cette expulsion brutale du plus vieux squat de jeunes migrants sur Nantes ? \u00ab\u00a0L\u2019application de la loi\u00a0\u00bb a dit la Pr\u00e9fecture, dr",
		output: "cnca",
	},
	{
		input:
			"Au programme : Wistand : loue un\u00b7e manifestant\u00b7e ! Fake, pas fake ? Jusqu'o\u00f9 peut aller l'imagination d'un entrepreneur qui n'a lui m\u00eame jamais fait d",
		output: "radiocayenne",
	},
	{
		input:
			"De la gr\u00e8ve de la faim de Notre-dame-des-Landes \u00e0 celle de la jungle de Calais. Le mercredi 23 mars prochain, des personnes ayant particip\u00e9 \u00e0 la gr\u00e8ve",
		output: "zadist",
	},
	{
		input:
			"(texte mise en page dans le fichier PDF) Jeudi 3 d\u00e9cembre 2015, Babacar Gueye meurt, tu\u00e9 par la bac de Rennes de 5 balles dans le corps alors qu\u2019il fa",
		output: "anonyme",
	},
	{
		input:
			"Expulsions partielles, r\u00e9sistance total ! ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0KLX: #InfoTrafflic de https:/",
		output: "zad",
	},
	{
		input:
			"Orel, activiste allemand membre de la legal team des manifestations anti G20 \u00e9tait de passage \u00e0 Dijon. Nous lui avons pos\u00e9 quelques questions sur la r",
		output: "@nonyme",
	},
	{
		input:
			"\u00ab\u00a0Quelle rage ressent-on \u00e0 la vue de leurs armes, parce que de notre c\u00f4t\u00e9 on doit courir \u00e0 cause des gaz qui t\u2019obscurcissent la vue, qu\u2019ils t\u2019arrivent",
		output: "anonyme",
	},
	{
		input:
			"ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0KLX: #InfoTrafflic de https://radioklaxon.antirep.net/\u00a0TWT: autres sour",
		output: "zad",
	},
	{
		input:
			"Nantes, le 10 d\u00e9cembre - 70 militants se sont mobilis\u00e9s devant une agence de la BNP-Paribas pour d\u00e9noncer l\u2019\u00e9vasion fiscale et appeler au financement ",
		output: "gignv",
	},
	{
		input:
			"On peut causer entre nous sur le chat \u00e0 http://6cd7qka6fo6aps2e.onion salon #cayenne en utilisant Tor. si on utilise un client IRC (genre pidgin) : su",
		output: "radiocayenne",
	},
	{
		input:
			"Le 22 f\u00e9vrier, plus de 50 000 personnes se rassemblaient \u00e0 Nantes pour la plus grande manifestation du mouvement anti-a\u00e9roport. D\u00e9clar\u00e9e ill\u00e9gale par ",
		output: "comit\u00e9desoutien\u00e0enguerrand",
	},
	{
		input:
			"\u00a0Le cort\u00e8ge s'est alors \u00e9lanc\u00e9 dans les rues habituellement bloqu\u00e9es par le dispositif policier, rue de Strasbourg dans un premier temps puis celles d",
		output: "actionantifascistenantes",
	},
	{
		input:
			"Parce-que ce n'\u00e9tait plus possible que ces familles dorment dehors. Parce-que ce n'\u00e9tait plus possible que ces familles dorment au gymnase Jeanne Bern",
		output: "l'autrecantinenantes",
	},
	{
		input:
			"Retrouvez sur le blog de Radio Cayenne un podcast sur l'insurrection en Ha\u00efti et un montage de news de Hong-Kong \u00a0 https://radiocayenne.noblogs.org/po",
		output: "radiocayenne",
	},
	{
		input:
			"Comme dirait le jingle : \u00ab Si t'as pas d'ordi, va donc chez tes ami\u00b7e\u00b7s ! \u00bb Radio Cayenne, c'est tous les lundis \u00e0 partir de 19h sur https://radiocaye",
		output: "k-hy\u00e8ne",
	},
	{
		input:
			"Plus c'est gros plus \u00e7a passe ? On savait que M. Notebaert, charg\u00e9 de mission en 2000 au minist\u00e8re des Transports au moment o\u00f9 le projet d'a\u00e9roport es",
		output: "zadist",
	},
	{
		input:
			"Licenciements, suppressions d'emplois, fermeture d'usines, pr\u00e9carisation, d\u00e9localisations\u2026 : de plus en plus de salari\u00e9s subissent la terrible r\u00e9alit\u00e9",
		output: "unsympathisantducci",
	},
	{
		input:
			"Mercredi 11 Avril : klx 19h02 : l'info de 18h30 c'\u00e9tait que les flics remontent de la monseli\u00e8re vers les fosses noires.\u00a0 La 4ailes est d\u00e9truite, la 2",
		output: "zadist",
	},
	{
		input:
			"Prenons par exemple ces armoires de t\u00e9l\u00e9phonie qu\u2019on trouve un peu partout, dont plusieurs ont \u00e9t\u00e9 incendi\u00e9es pendant le mouvement de gilets jaunes, p",
		output: "sansattendre",
	},
	{
		input:
			"15 mars 2002 : Un clash fait couler de l'encre lors des Nuits Celtiques au Stade de France. Bien que ce genre d'\u00e9v\u00e8nement soit absolument d\u00e9politis\u00e9 e",
		output: "dispac'h",
	},
	{
		input:
			'expulsion imminente du squat danois ungdomshuset / derni\u00e8res infos depuis les \u00e9meutes du 16 d\u00e9cembre "Nous apprenons par un mail de personnes pr\u00e9sente',
		output: "anonymous",
	},
	{
		input:
			"la voiture de Nicolaus Fest Vers 2h, la voiture du chef de l\u2019AfD de Berlin, Nicolaus Fest, a \u00e9t\u00e9 volontairement incendi\u00e9e dans le quartier de Charlott",
		output: "sansattendre",
	},
	{
		input:
			"Tous les jours, les ouvriers doivent \u00ab embarquer \u00bb \u00e0 bord des paquebots en construction. Parmi eux, le luxueux Celebrity Apex, qui doit \u00eatre livr\u00e9 et ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"2\u00e8me proc\u00e8s : 6 mois de prison avec sursis Ce mardi 29 ao\u00fbt, un polonais de 24 ans a \u00e9t\u00e9 condamn\u00e9 par le tribunal d\u2019Hambourg \u00e0 une peine de six mois d",
		output: "anonyme",
	},
	{
		input:
			"Nous n\u2019envisageons pas organiser un remplacement \u00e9gale aux rencontres Intersquat du pass\u00e9, \u00e0 moins que vous vouliez en faire en sorte. Les journ\u00e9es no",
		output: "@",
	},
	{
		input:
			"En ce lundi nous avons discut\u00e9: -De l\u2019assassinat par les flics (qui m\u00eame par temps de confinement n\u2019onts pas de r\u00e9pit). -Du quatri\u00eame \u00e9pisode de notre",
		output: "radiocayenne",
	},
	{
		input:
			"Voici ci-joint le texte d'appel du Collectif Enfants \u00e9trangers Contacts Collectif : 06. 79.15.05.47 et 02.28.23.58.53 Informer les familles concern\u00e9es",
		output: "anonymous",
	},
	{
		input:
			"Au printemps, la criminologue Sylvie Frigon a publi\u00e9 \u00e9ditions du Remue-m\u00e9nage \u00e0 Montr\u00e9al un\u00ab L'homicide conjugal au f\u00e9minin, d'hier \u00e0 aujourd'hui\u00bb dan",
		output: "sisyphe",
	},
	{
		input:
			"L'affaire des caricatures de Mahomet publi\u00e9es en septembre 2005 par le journal Danois Jyllands Posten (jounal fasciste dans les ann\u00e9es 30) , journal c",
		output: "patricebardet",
	},
	{
		input:
			"On n'y comprend plus rien. C'est la crise, la vraie, aucun doute l\u00e0-dessus, m\u00eame qu'on nous la met en avant pour justifier des milliers de fermetures ",
		output: "ibrahima",
	},
	{
		input:
			"Coup de fil \u00e0 l'instant (21h15) : Lieu dit des Ardilli\u00e8res - Notre Dame des Landes. Besoin de soutien pour \u00e9viter que les autorit\u00e9s \u00e9vacuent et emmure",
		output: "karacole",
	},
	{
		input:
			"Un rassemblement est organis\u00e9 par des syndicats fran\u00e7ais le Mercredi 6 juin la place des Nations entre 12h et 14h. Y participeront notamment des assoc",
		output: "soliranparis",
	},
	{
		input:
			"LE 12 NOVEMBRE 1938, la tr\u00e8s r\u00e9publicaine et d\u00e9mocrate IIIe R\u00e9publique impose par d\u00e9cret l\u2019internement administratif des \u00e9trangers \u00abind\u00e9sirables\u00bb dans",
		output: "solidarite",
	},
	{
		input:
			"20 juillet 2010 Selon la MDR (radio d'Allemagne centrale) et le Volksstimme (presse r\u00e9gionale), \u00e0 Burg (Saxe-Anhalt) la direction de la police du Jeri",
		output: "ploumploum",
	},
	{
		input:
			"UNE SALE HISTOIRE... Kaoutar Chtourou \u00e9tait incarc\u00e9r\u00e9e \u00e0 la centrale pour femmes de Rennes. Cela faisait plus de cinq ans qu\u2019elle avait \u00e9t\u00e9 balad\u00e9e de",
		output: "xxx",
	},
	{
		input:
			"POUR LA RELAXE DE MICHEL SITBON cit\u00e9 en correctionnelle pour \u00ab\u00a0diffamation\u00a0\u00bb et \u00ab\u00a0injure\u00a0\u00bb par Hortefeux\u00a0! le17/2/ \u00e0 13h30, 17e chambre correctionnell",
		output: "jc",
	},
	{
		input:
			"Pas de titre pour 3822 Pas de titre pour 3821 Pi\u00e8ces et Main d'Oeuvre a \u00e9t\u00e9 mis en cause dans l'affaire du faux M\u00e9troscope (\u00e9voquant la carte d'identi",
		output: "pmo",
	},
	{
		input:
			"La seule chose qui marche pour r\u00e9pondre au chantage, c\u2019est le chantage. La gr\u00e8ve est une forme de chantage. Pour combattre l\u2019exploitation, la d\u00e9noncer",
		output: "19h17",
	},
	{
		input:
			"Le texte ci-dessous s\u2019appuie en grande partie sur un article d\u2019Internationalismo, organe de presse du CCI au Venezuela, publi\u00e9 sur notre site en espag",
		output: "unsympathisantducci",
	},
	{
		input:
			"Pas de titre pour 11461 Solidarit\u00e9 avec tous les militant-e-s poursuivis de la Campagne BDS ! La Campagne BDS France appelle \u00e0 une large mobilisation ",
		output: "solidarit\u00e9",
	},
	{
		input:
			"http://www.fsmmali.org/jeunes/radio/audio60.html La qualit\u00e9 n'est pas extra, il y a quelques coupures, mais \u00e7a a le m\u00e9rite d'exister... Plus d'infos s",
		output: "anonymous",
	},
	{
		input:
			'Le collectif Attention mines, oppos\u00e9 au permis de Silfiac, alerte sur ce projet qui "ne prend pas en compte les impacts sur l\u2019environnement et les act',
		output: ".",
	},
	{
		input:
			"Salut les cailloux en ce 3\u00e8me Lundi de confinement nous avons d'abord \u00e9couter un texte perso sur le confinement et comment s'en sortir de tout ce merd",
		output: "radiocayenne",
	},
	{
		input:
			'"D\u00e9cadence et d\u00e9composition du capitalisme" 1) Un des \u00e9l\u00e9ments les plus importants d\u00e9terminant la vie actuelle de la soci\u00e9t\u00e9 capitaliste est l\'entr\u00e9e ',
		output: "unsympathisantducci",
	},
	{
		input:
			"Voici deux documents internes de l\u2019UNEF. Seuls les \u201ccadres\u201d (AGE = pr\u00e9sident local) y ayant acc\u00e8s (le 1er document est diffus\u00e9 un peu plus largement).",
		output: "a",
	},
	{
		input:
			"Pas de titre pour 12960 Pas de titre pour 12959 Pas de titre pour 12958 Pas de titre pour 12957 Mardi 11 juin : 9h : les forages continuent : deux fou",
		output: "zadist",
	},
	{
		input:
			"La Campagne BDS France\u00a0d\u00e9nonce la collaboration de la Mairie de Paris \u00e0 une nouvelle op\u00e9ration de la Hasbara isra\u00e9lienne (services de propagandes) \u00e0 t",
		output: "bds",
	},
	{
		input:
			"Au programme : \u00a0Le compteur linkill \u00e9pisode 1 et 2 (redif) Chronique sur Malakoff/Euronantes et la restructuration urbaine Revue de presse du monde qu",
		output: "maglib",
	},
	{
		input:
			"Le syndicat du secteur priv\u00e9 de Gr\u00e8ce GSEE a appel\u00e9 \u00e0 une gr\u00e8ve de 24h contre les interventions d\u00e9vastatrices \u00e0 venir du gouvernement et de la Tro\u00efka ",
		output: "anonyme",
	},
	{
		input:
			"Depuis la d\u00e9faite de la vague r\u00e9volutionnaire internationale dans les ann\u00e9es 1920, peu de termes ont connu une distorsion aussi grande que ceux de soc",
		output: "unsympathisantducci",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 158 / d\u00e9cembre 2016 Le bulletin no 159, janvier 2017 du petit journal mobile recto-verso A4 du r\u00e9seau R\u00e9sistons e",
		output: "r\u00e9seaur\u00e9sistonsensemble",
	},
	{
		input:
			"Depuis plus d'un an, les actes terroristes commis par des groupes islamistes sur des femmes irakiennes ont consid\u00e9rablement augment\u00e9. Ces violations a",
		output: "sisyphe",
	},
	{
		input:
			"Juge : Constance DESMORATAssesseures : Muriel BLANCHARD et Marie Caroline MATHIEU DE BOISSACProcureur : Thierry ROLLANDAvocate des flics : Annie HUP\u00c9-",
		output: "legalteam",
	},
	{
		input:
			"Date : 22/12/2006 21:07:29 A : Nosostros Incontrolados Solidarit\u00e9 directe avec les opprim\u00e9Es et exploit\u00e9Es de Oaxaca et du monde, pas avec l'APPO et s",
		output: "anonymous",
	},
	{
		input:
			"Paris, le 14 novembre 2008 Monsieur Brice HORTEFEUX Ministre de l'immigration, de l'int\u00e9gration, de l'identit\u00e9 nationale et du d\u00e9veloppement solidaire",
		output: "jc",
	},
	{
		input:
			"APPEL A RESISTER AU CONDITIONNEMENT SECURITAIRE lundi 14 novembre 2005 APPEL DU COLLECTIF NATIONAL UNITAIRE CONTRE LE PROJET DE PREVENTION DE LA DELIN",
		output: "valk",
	},
	{
		input:
			"Nous trouvons choquant que cette m\u00eame organisation reste totalement insensible aux discriminations flagrantes et enracin\u00e9es, inflig\u00e9es par Israel aux ",
		output: "bds",
	},
	{
		input:
			"La crise capitaliste suscite in\u00e9vitablement parmi les mouvements, syndicats et partis dits \u00abde gauche\u00bb qui se proclament les d\u00e9fenseurs des travailleu",
		output: "pcint",
	},
	{
		input:
			"On a recopi\u00e9 le texte : AVIS AUX AUTOMOBILISTES Communiqu\u00e9 d\u2019 agents verbalisateurs de Vinci Park Ixelles Comme un coll\u00e8gue l'avait d\u00e9j\u00e0 t\u00e9moign\u00e9 dans",
		output: "anonyme",
	},
	{
		input:
			'Politiciens et \u00e9conomistes ne savent plus comment exprimer la gravit\u00e9 de la situation : "Au bord du gouffre", "Un Pearl Harbor \u00e9conomique", "Un tsunam',
		output: "unsympathisantducci",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 49 / janvier 2007 L'Etat est \u00e0 suspecter ! - L'Etat est \u00e0 suspecter ! - Prostitution : les vraies zones de non-dr",
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			"Pas de titre pour 5283 Pas de titre pour 5281 Pas de titre pour 5279 Pas de titre pour 5277 Pas de titre pour 5275 Pas de titre pour 5273 Pas de titre",
		output: "valk",
	},
	{
		input:
			"communiqu\u00e9 Ces derniers mois plusieurs \u00e9v\u00e8nements sont venus perturber le fonctionnement du centre penitentiaire : lettre de revendications \u00e9crite par",
		output: "x",
	},
	{
		input:
			"Salut j'suis rebeu et j'ferai pas la r\u00e9volution avec toi, militant que tu sois alterprout ou anarchogloups mon nom est baby-blade ben ouais j'madresse",
		output: "anonymous",
	},
	{
		input:
			"On avait promis aux Rennais des chars et des clowns, du cotillon et du tambour, des ballons, des costumes, je fais des cr\u00eapes, je fais des cr\u00eapes, pou",
		output: "institutded\u00e9mobilisation",
	},
	{
		input:
			"L'ouverture de cette proc\u00e9dure fait suite \u00e0 l'affaire \u00abRadiateur\u00bb qui avait d\u00e9fray\u00e9 la chronique \u00e0 la fin du mois de janvier 2006. Rappel des faits : ",
		output: "anonymous",
	},
	{
		input:
			"La manifestation s'\u00e9lance \u00e0 travers la ville, avalant \u00e9nergiquement le pav\u00e9 et clamant la solidarit\u00e9 avec les mineurs rejet\u00e9.e.s. Celleux que l'on \u00e9va",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Salut,je t'\u00e9cris pour te dire qu'une douzaine de bagnoles se sont faites crev\u00e9es les pneus l'autre soir, dans la semaine du 23 au 29 mai \u00e0 Rennes. Il ",
		output: "anonyme",
	},
	{
		input:
			"TOUS ET TOUTES A CALAIS LES 28 ET 29 NOVEMBRE ! PASSONS LA MANCHE ! L'Etat s'enfonce ! En 2002, Sarkozy fermait un hangar ; en 2009, Besson s'attaque ",
		output: "jc",
	},
	{
		input:
			"Violences polici\u00e8res syst\u00e9matiques \u00e0 l'encontre des lyc\u00e9ens Non, l'\u00e9l\u00e8ve victime de violences polici\u00e8res rendu tristement c\u00e9l\u00e8bre par la vid\u00e9o qui a c",
		output: "r\u00e9seaur\u00e9sistonsensemble",
	},
	{
		input:
			"-2003 : manifestations monstres contre la r\u00e9forme des retraites ! -2004 : d\u00e9b\u00e2cle \u00e9lectorale de la droite aux \u00e9lections r\u00e9gionales et cantonales ! -20",
		output: "verdi",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin A4 recto-verso, num\u00e9ro 39 / f\u00e9vrier 2006 du r\u00e9seau R\u00e9sistons ensemble contre les violences polici\u00e8res et s\u00e9curitaires. -",
		output: "zozo",
	},
	{
		input:
			"Nous publions ci-dessous de larges extraits d\u2019un article \u00e9crit par notre section au Venezuela suite au d\u00e9c\u00e8s d\u2019Hugo Chavez. La version int\u00e9grale est d",
		output: "unsympathisantducci",
	},
	{
		input:
			"D\u00e9sormais, ce sont les opposants politiques qui doivent embo\u00eeter le pas d\u2019un mouvement syndical (enfin) unitaire! La mise hors d\u2019\u00e9tat de nuire de Sark",
		output: "verdi",
	},
	{
		input:
			"Par chance, nous avions dans nos besaces de larges stocks de peinture. C\u2019est alors que nous vint l\u2019id\u00e9e de faire payer \u00e0 quelques collabos l\u2019expulsion",
		output: "anonyme",
	},
	{
		input:
			"CONFEDERATION NATIONALE DU TRAVAIL Syndicat R\u00e9gional C.N.T P.T.T 36,Rue Sanche de Pomiers 33000 Bordeaux. 05 57 89 21 72 http://www.cnt-f.org/aquitain",
		output: "anonymous",
	},
	{
		input:
			"La rentr\u00e9e sociale approche, et qui dit rentr\u00e9e sociale, dit malheureusement militant-e-s bless\u00e9-e-s \u00e0 venir. Nous avons de nouveau des besoins mat\u00e9ri",
		output: "streetmedicnantes",
	},
	{
		input:
			"La cha\u00eene franco-allemande, Arte, a diffus\u00e9 le 22 mars 2005 des documentaires au cours d'une soir\u00e9e consacr\u00e9e \u00e0 des mouvements des droits des p\u00e8res. C",
		output: "sisyphe",
	},
	{
		input:
			"\u00a0 Il est pr\u00e9vu que les d\u00e9clarations des t\u00e9moins se cl\u00f4turent les 7 et 8 mai. Jours durant lesquel seront prises les d\u00e9clarations des t\u00e9moins des accus",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			'Des catalogues de jouets au rayon "enfants" des supermarch\u00e9s, il r\u00e8gne une division permanente et d\u00e9finitive. Les mini planches \u00e0 repasser, le maquill',
		output: "anonymous",
	},
	{
		input:
			'Bonjour,Voici en pdf, le No 173, mai/juin 2018, du petit journal mobile recto-verso A4"RESISTONS ENSEMBLE" du r\u00e9seau contre les violences polici\u00e8res e',
		output: "r\u00e9seaure",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no-420-fevrier-2017.html SOMMAIRE Luttes syndicales Bloqu\u00e9 un jour, Boulanger\u00a0plie\u00a0: \u00e0 H\u00e9nin-Beaumont la lutt",
		output: "cntnantes",
	},
	{
		input:
			"La gauche! Quelle gauche? D\u00e9boussol\u00e9s! D\u00e9sorient\u00e9s! D\u00e9sabus\u00e9s! D\u00e9courag\u00e9s! Sentiment d\u2019abandon largement r\u00e9pandu. Voil\u00e0 o\u00f9 en sont les citoyens de gau",
		output: "verdi",
	},
	{
		input:
			"Date : 22/12/2006 21:07:29 A : Nosostros Incontrolados Solidarit\u00e9 directe avec les opprim\u00e9Es et exploit\u00e9Es de Oaxaca et du monde, pas avec l'APPO et s",
		output: "anonymous",
	},
	{
		input:
			"Le rapport final du d\u00e9put\u00e9 BENISTI de novembre 2005 sur la pr\u00e9vention de la d\u00e9linquance propose en mati\u00e8re de protection de l\u00b9enfance de dynamiter le ",
		output: "anonymous",
	},
	{
		input:
			"Pas de titre pour 5285 {{COLLECTIF D'ACTION SOCIALE 44 NON AU PLAN DE \u00ab PREVENTION DE LA DELINQUANCE \u00bb TOUS DANS L'ACTION LE 22 MARS !}} Le plan Sarko",
		output: "anonymous",
	},
	{
		input:
			"Tract distribu\u00e9 : \u00c0 propos d'une keufmobile qui br\u00fble, de r\u00e9pression, et de solidarit\u00e9 \u00c0 la rentr\u00e9e prochaine, 9 personnes passeront en proc\u00e8s, accus\u00e9",
		output: ".",
	},
	{
		input:
			"\u00a0 1 \u2013 Diffusion par certaines sonos d\u2019artistes aux propos politiquement confus Tous les morceaux de phrases de cette partie ne sont pas forc\u00e9ment des ",
		output: "anonyme",
	},
	{
		input:
			"il y a eu ouverture d'un nouveau squat politik et autres \u00e0 Nantes dans les locaux d'un th\u00e9atre qui appartenait \u00e0 l'\u00e9v\u00e9ch\u00e9. Situ\u00e9 au 4 rue du (snip by ",
		output: "anonymous",
	},
	{
		input:
			"Alors que des camarades essaient d'entrer, les coups de matraque pleuvent, les premiers rangs sont copieusement gaz\u00e9s. Quelques tomates et autres proj",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 66 / juillet 2008 Les retenus ont ferm\u00e9 leur centre - Les retenus ont ferm\u00e9 leur centre - Citoyens \u00e9lecteurs, l\u2019a",
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			"Donc on avait \u00e7a + des trucs de d\u00e9cos, bref on va en caisse minute et je bip les articles que je paye puis ceux de mon p\u00e8re dont les 4 tupp, en m\u00eame t",
		output: "anonyme",
	},
	{
		input:
			"La multiplication des dates sectorielle, une division qui emp\u00eachera de gagner contre la loi travail La date du 12 septembre a sonn\u00e9 comme un avertisse",
		output: "anonyme",
	},
	{
		input:
			"Madame, Monsieur, Vous \u00eates nombreux \u00e0 penser que la traite et la colonisation ont eu pour heureuse issue, l'introduction des rudiments de la civilisa",
		output: "anonymous",
	},
	{
		input:
			'Pas de titre pour 12421 Pas de titre pour 12420 Pas de titre pour 12419 En haut \u00e0 gauche, un panneau "happy green year" c\u00e9l\u00e9brant l\'obsc\u00e8ne troph\u00e9e "N',
		output: "jackpalmer",
	},
	{
		input:
			"\u00a0 Les politiques d\u2019aust\u00e9rit\u00e9 et de casse sociale dans le secteur de la sant\u00e9 ont intensifi\u00e9 cette crise sanitaire avec un risque croissant de saturati",
		output: "iaata",
	},
	{
		input:
			"Le 30 mai 2017, la chambre du Conseil doit statuer sur l'\u00e9ventuel renvoi en proc\u00e8s antiterroriste de 12 compagnon-ne-s anarchistes et antiautoritaires",
		output: ".",
	},
	{
		input:
			"C'est beau non ? Sur la banderole on peut lire \"L'eglise veut expulser le squat de la poudri\u00e8re. R\u00e9sistances !!! Pas d'expulsions des ouvertures.\" Ema",
		output: "anonymous",
	},
	{
		input:
			"L'\u00e9quipe de s\u00e9curit\u00e9, heu pardon les \u00e9co-vigiles recyclables, nous ont vite rep\u00e9r\u00e9\u00b7es au milieu du march\u00e9. Gilet fluo sur le dos et talkie-walkie \u00e0 la",
		output: "cnca",
	},
	{
		input:
			"p { margin-bottom: 0.25cm; line-height: 120%; }a:link { Par Guarani Kaiow\u00e1, le 20/04/2014 En ce jour de l'indien, nous aurions d\u00fb chanter, danser, mai",
		output: "zadist",
	},
	{
		input:
			"Le vendredi 13 avril alors que nos forces \u00e9taient r\u00e9parties sur un info tour en caravane contre les center-parc pour une part et les nuages de lacrymo",
		output: "zadist",
	},
	{
		input:
			"DE QUOI S'AGIT-IL ?La Grande Banderolerie, c'est un grand jeu en ville qui consiste \u00e0 recouvrir la ville de messages pour (re)dire non \u00e0 l'a\u00e9roport et",
		output: "cnca",
	},
	{
		input:
			"Rejoignez le channel #cayenne sur https://chat.indymadia.org pour qu'on puisse \u00e9changer nsemble pendant l'\u00e9mission Il y a toujours le blog \u00e0 https://r",
		output: "radiocayenne",
	},
	{
		input:
			"le programme pr\u00e9cis et al\u00e9atoire samedi : - 12h bouffe v\u00e9g\u00e9tarienne - 14h ateliers divers (barricades, squat a\u00e9r\u00e9) - 17h comment d\u00e9truire/d\u00e9construire",
		output: "anonymous",
	},
	{
		input:
			"Nous avons re\u00e7u de la part de la CNT-AIT de Toulouse, le communiqu\u00e9 que nous publions ci-dessous. Nous sommes enti\u00e8rement d'accord avec les camarades ",
		output: "unsympathisantducci",
	},
	{
		input:
			"Le site web d\u2019informations The Electronic Intifada nous r\u00e9v\u00e8le que Shufersal est une soci\u00e9t\u00e9 isra\u00e9lienne qui poss\u00e8de plusieurs magasins dans les colon",
		output: "bds",
	},
	{
		input:
			"Vers 14H, les \u00e9tudiant-e-s en lutte partent de la fac en manifestation. Encore une fois, le dispositif policier est d\u00e9lirant, avec plus d'un policier ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 65 / juin 2008 \u00c0 nos \u00ab fr\u00e8res \u00bb morts \u2013 Contribution \u00e0 la d\u00e9fense de La Rumeur - \u00c0 nos \u00ab fr\u00e8res \u00bb morts \u2013 Contrib",
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			"Le Front d\u2019Unit\u00e9 Populaire (FUP), form\u00e9 par les quartiers El Pato, Barrio 11 (Berazategui), Barrio Parque (Florencio Varela), San Jeronimo (Almirante ",
		output: "fab",
	},
	{
		input:
			"Surveillance num\u00e9rique \u00e0 l'\u00e8re du Covid-19 n\u00b05 Cette semaine dans la chronique sur la surveillance num\u00e9rique on s'int\u00e9resse encore une fois \u00e0 l'appli ",
		output: "radiocayenne",
	},
	{
		input:
			"Les sionistes ont pu entra\u00eener beaucoup de Juifs \u00e0 soutenir leur projet en prenant appui sur l'antis\u00e9mitisme et les massacres qui les ont frapp\u00e9s. Mai",
		output: "ibrahima",
	},
	{
		input:
			"Happy Birthday Indy !!! Dans le fond, Indymedia Nantes ne change pas : bas\u00e9 sur les m\u00eames Principes d'Unit\u00e9 et mod\u00e9r\u00e9 par la CHARTE qui a \u00e9t\u00e9, certes,",
		output: "(((i)))",
	},
	{
		input:
			"A l'entr\u00e9e du quartier de Planoise, sur la passerelle Allende, deux banderoles portant l'inscription \u00ab La libert\u00e9 fleurira sur le cadavre de la police",
		output: ".",
	},
	{
		input:
			"Nous avions sollicit\u00e9 nos r\u00e9seaux au Mali, au S\u00e9n\u00e9gal, fait passer l'info chez les maliens de France, et suite \u00e0 nos d\u00e9marches un ami artiste malien \"",
		output: "bds",
	},
	{
		input:
			"L'illusion du changement N'est qu'un changement d'illusion En 1941, le grand Mufti Fut re\u00e7u, en grande pompe, par le r\u00e9gime nazi Le Mufti \u00e9tait le gla",
		output: "patricefaubert",
	},
	{
		input:
			"De 1979 \u00e0 2010 : un combat pour la libert\u00e9 et l\u2019\u00e9galit\u00e9 ! Contrairement \u00e0 ce qu\u2019on entend trop souvent, la r\u00e9volution de 1979 et l\u2019insurrection des 10",
		output: "solidarit\u00e9aveclaluttedupeupleiranien",
	},
	{
		input:
			"RECITS \u2013 COMMUNIQUES : Communiqu\u00e9 de presse de la coordination du 25 octobre suite \u00e0 la mort de R\u00e9mi\u00a0 De retour du Testet, \u00e9tat des lieux rapide T\u00e9moi",
		output: "(((i)))",
	},
	{
		input:
			"Je ne suis ni \u00e9crivaine, ni sociologue, ni philosophe ou personnage politique _ je n'aurais pas la fausse pr\u00e9tention et ill\u00e9gimit\u00e9 que \u00c9laine Audet, M",
		output: "anonyme",
	},
	{
		input:
			"LA GAUCHE EST D\u00c9TRUITE, ON PEUT ENFIN FAIRE LA R\u00c9VOLUTION ! (12 d\u00e9cembre 2006) LA GAUCHE EST D\u00c9TRUITE, ON PEUT ENFIN FAIRE LA R\u00c9VOLUTION ! http://mai6",
		output: "anonymous",
	},
	{
		input:
			"Envoy\u00e9 le : Samedi 22 f\u00e9vrier 2014 14h40 Objet\u00a0: [Raf] calais urgent Appel antifa \u00e0 venir au plus vite \u00e0 Calais. Pour la premi\u00e8re fois \u00e0 Calais, les f",
		output: "antifa",
	},
	{
		input:
			"Le triste feuilleton de la mise en liquidation de la soci\u00e9t\u00e9 Seafrance a quasiment pris fin, et tout a \u00e9t\u00e9 fait pour que la plus grande confusion r\u00e8gn",
		output: "unsympathisantducci",
	},
	{
		input:
			"\u00ab Qu'est-ce que c'est que cette histoire de Fantine\u00a0? C'est la soci\u00e9t\u00e9 achetant une esclave. A qui? A la mis\u00e8re. A la faim, au froid, \u00e0 l'isolement, \u00e0",
		output: "anonymous",
	},
	{
		input:
			"En France, une de ses composantes prend le nom de SOS Tout Petits. Cette association, pr\u00e9sid\u00e9e par Xavier Dor, un des organisateurs des commandos anti",
		output: "anonymous",
	},
	{
		input:
			"Profitant de la l\u00e9thargie de la constellation militante sur la situation des populations Roms, la pr\u00e9fecture a pu vider en deux jours pas moins de tro",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Version actualis\u00e9e et compl\u00e9t\u00e9e, en octobre 2009. Version originale, publi\u00e9e le 30 juin 2005, sur le site Vive la Liberte http://vive.laliberte.chez-a",
		output: "verdi",
	},
	{
		input:
			"Pour les capitalistes, la crise \u00e9conomique signifie risquer de perdre tout ou partie des profits qu'ils encaissent sous la protection \u00abd\u00e9mocratique\u00bb d",
		output: "pcint",
	},
	{
		input:
			"En d\u00e9pit du bourrage de cr\u00e2ne intensif par les m\u00e9dias serviles, la sauce \u00ab Royal \u00bb n'a pas encore pris. Malgr\u00e9 le ralliement opportuniste d'un Jack La",
		output: "verdi",
	},
	{
		input:
			"Qui est Georges Ibrahim Abdallah\u00a0? Militant communiste libanais, il combattit contre l'invasion de son pays par Isra\u00ebl et s'engagea aux c\u00f4t\u00e9s du Front",
		output: "ibrahima",
	},
	{
		input:
			"\u00a0Pr\u00e8s de 400 personnes ont tent\u00e9 malgr\u00e9 tout de se rassembler sur la Place de la Rotonde. De nombreux contr\u00f4les ont \u00e9t\u00e9 effectu\u00e9s aux abords de la pla",
		output: "@nonyme",
	},
	{
		input:
			"Depuis trois ans environ, certains individus ou groupes anarchistes et le CCI ont fait tomber quelques barri\u00e8res en osant commencer \u00e0 discuter de fa\u00e7o",
		output: "unsympathisantducci",
	},
	{
		input:
			"Pour t\u00e9l\u00e9charger ce bulletin mis en page au format pdf : [http://resistons.lautre.net/-> http://resistons.lautre.net/spip.php?article462] RESISTONS EN",
		output: "r\u00e9seaur\u00e9sistonsensemble",
	},
	{
		input:
			"Presse Oc\u00e9an Ouest France Pas de titre pour 12132 Pas de titre pour 12131 Pas de titre pour 12130 Pas de titre pour 12129 Pas de titre pour 12128 Pas ",
		output: "jackpalmer",
	},
	{
		input:
			"## Risques s\u00e9rieux d\u2019attaque dans les semaines qui viennent Depuis plusieurs jours des rumeurs d\u2019expulsion plus ou moins imminente bruissent sur la ZA",
		output: "zadist",
	},
	{
		input:
			"Le chiffre para\u00eet hallucinant. Depuis le d\u00e9but de l\u2019ann\u00e9e, plus de 398 personnes ont \u00e9t\u00e9 pendues en Iran. Selon le r\u00e9gime iranien la plupart auraient ",
		output: "soliranparis",
	},
	{
		input:
			"Dans le quartier de Harlem l'agitation suit l'assassinat d'un jeune black de 15 ans par un policier blanc qui n'\u00e9tait pas en service. Le jeune aurait ",
		output: "anonymous",
	},
	{
		input:
			"Action \u00e0 Minsk en soutien \u00e0 des personnes arr\u00eat\u00e9es au cours d\u2019un concert de punk. Sur le panneau : \u201cJe suis du SWAT, rien \u00e0 battre des lois\u201d Avec les ",
		output: "@",
	},
	{
		input:
			"A court d\u2019arguments pour emp\u00eacher la Catalogne de voter sur une possible s\u00e9paration de la Monarchie espagnole, Rajoy, appuy\u00e9 par les collabos du PSOE,",
		output: "m",
	},
	{
		input:
			"Pour cette nouvelle ann\u00e9e, nous avons manifest\u00e9 notre solidarit\u00e9 avec les prisonnier-e-s devant la maison d'arret de Nantes. Nous d\u00e9non\u00e7ons la soci\u00e9t\u00e9",
		output: "anonymous",
	},
	{
		input:
			"Comme les billes de mercure... Dans les lyc\u00e9es, le pouvoir s'attendait \u00e0 une r\u00e9sistance face \u00e0 la s\u00e9lection sociale et territoriale que repr\u00e9sente le ",
		output: "r\u00e9seaure",
	},
	{
		input:
			"Photo : Shadow News Photo : Jurneveles D\u00e8s 14H, tous les transports sont coup\u00e9s dans la Cit\u00e9 des Ducs. Un h\u00e9licopt\u00e8re de la gendarmerie gronde dans le",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"En attendant ces mondes n'ont qu'\u00e0 br\u00fbler. La critique nous a fait nous trouver. Alors que nous moisissions dans nos piaules pourries, une critique ra",
		output: "anonyme",
	},
	{
		input:
			"ces brochures sont disponible \u00e0 prix libre (chacun-e donne ce qu'ille peut/veut)... mais jusqu'\u00e0 maintenant l'argent r\u00e9colt\u00e9 n'a pas permis de recouvr",
		output: "anonymous",
	},
	{
		input:
			'Bonjour, Voici en pdf, le No 165, SEPTEMBRE 2017, du petit journal mobile recto-verso A4 "RESISTONS ENSEMBLE" du r\u00e9seau contre les violences polici\u00e8re',
		output: "r\u00e9seaur\u00e9sistonsensemble",
	},
	{
		input:
			"Quelques jours \u00e0 peine, apr\u00e8s la signature de l\u2019accord le 14 mai 2012 entre le service p\u00e9ni\u00adten\u00adtiaire isra\u00e9lien (IPS) et les repr\u00e9\u00adsen\u00adtants des 2000",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Ladyfest Contre le flashball et son monde, ne d\u00e9sarmons pas! 1 an de manifs mensuelles contre l'a\u00e9roport, la m\u00e9tropole et son monde. ---",
		output: "(((i)))",
	},
	{
		input:
			"Un chantage patronal soutenu par le gouvernement et certains syndicats Le 15 janvier 2013, la direction de Renault a annonc\u00e9 son intention de supprime",
		output: "pcint",
	},
	{
		input:
			"Les organisations syndicales su\u00e9doises, pourtant fortement influenc\u00e9es depuis un si\u00e8cle par la tradition r\u00e9formiste et sociale-d\u00e9mocrate, n'ont pas eu",
		output: "anonymous",
	},
	{
		input:
			"Recourant \u00e0 des m\u00e9thodes d'intimidation dignes de certain-es militant-es pro-vie et de certains masculinistes, des militant-es pro-prostitution ont fa",
		output: "sisyphe",
	},
	{
		input:
			"Sauf que\u2026 Comme \u00e0 Marseille o\u00f9 le SO syndical joue des gros bras contre les r\u00e9volt\u00e9s plus d\u00e9termin\u00e9s, ou \u00e0 Lille o\u00f9 l\u2019Intersyndicale appelle les flics",
		output: "sansattendre",
	},
	{
		input:
			"Collectif nantais Romeurope COMMUNIQUE DE PRESSE Expulser n'est pas g\u00e9rer Le 31 octobre 2009 Encore une fois, les pouvoirs publics ont fait expulser s",
		output: "karacole",
	},
	{
		input:
			"Une jeune factrice de Villefranche-sur-Sa\u00f4ne en a fait l\u2019am\u00e8re exp\u00e9rience d\u00e9but d\u00e9cembre. Elle s\u2019est mise en sc\u00e8ne dans une vid\u00e9o d\u2019une manif Gilet ja",
		output: "sansattendredemain",
	},
	{
		input:
			"Devant la pr\u00e9fecture, c'est l'affrontement rituel, presque th\u00e9\u00e2tralis\u00e9. Projectiles en tout genre contre lacrymog\u00e8nes. Floraison de tags. Quelques t\u00e9m",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pourquoi la gr\u00e8ve\u00a0? Arr\u00eater la machine\u00a0: Voyez la soci\u00e9t\u00e9 comme une immense machine. Imaginons que certaines des personnes qui font tourner cette mach",
		output: "19h17",
	},
	{
		input:
			"D\u00e9j\u00e0 s'adresser aux merdias bourgeois en l'occurrence plus que douteux ,comme ce personnage ou d'autres telle qu'une ex ou encore \u00e9lue qui vient de qu",
		output: "larage",
	},
	{
		input:
			"SALLE DES COMPARUTIONS IMM\u00c9DIATES- Juge\u00a0: Elisabeth CROIZE- Assesseur-e-s\u00a0: Jacques CHAUME et C\u00e9cile CALLOCH- Procureure\u00a0: Sandrine CODEVELLE- Avocate",
		output: "legalteam",
	},
	{
		input:
			"Le S\u00e9nat a termin\u00e9 la 1\u00e8re lecture de la loi ELAN le 25\u00a0juillet 2018. Une commission mixte paritaire (compos\u00e9e de 7 senateurs et 7 d\u00e9put\u00e9s) a \u00e9t\u00e9 mise",
		output: ".",
	},
	{
		input:
			'Parti du jardin des ronces, qui r\u00e9siste \u00e0 un projet "d\'\u00e9coquartier" dans le vieux Doulon, le d\u00e9fil\u00e9 a fait un passage par le stade de la Beaujoire, o\u00f9',
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"La Gr\u00e8ce s\u2019\u00e9meute toujours Yep\u00a0! Dans un silence m\u00e9diatique fran\u00e7ais le plus complet, la Gr\u00e8ce s\u2019enflamme de nouveau depuis que le 10 novembre dernier",
		output: "o.p.a",
	},
	{
		input:
			"Info importante pour Avignon et autres actions, PRENEZ BONNE NOTE DE CE QUI SUIT ! LE MINI GUIDE DU MANIFESTANT PAS CONTENT : PUISQU'IL FAUT ENTRER EN",
		output: "laurent",
	},
	{
		input:
			"POUR UNE JOURN\u00c9E DE R\u00c9SISTANCE SIMULTAN\u00c9E, SANS FRONTI\u00c8RES, LE 10 D\u00c9CEMBRE 2018 contre le durcissement du capitalisme et de la soci\u00e9t\u00e9 autoritaire Par",
		output: "anonyme",
	},
	{
		input:
			"Celle-ci a \u00e9t\u00e9 r\u00e9alis\u00e9e par le groupe fran\u00e7ais de consulting et d\u2019ing\u00e9nierie Ing\u00e9rop, un groupe habitu\u00e9 aux grands projets en tout genre et notamment ",
		output: "anonyme",
	},
	{
		input:
			"Le maton te guette A chaque mouvement social, au moment o\u00f9 l\u2019\u00e9tat d\u00e9cide de distribuer des mois de prison, on peut entendre \u00ab c\u2019est incroyable, on n\u2019a",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Comparution imm\u00e9diateJuge\u00a0: Marie-Th\u00e9r\u00e8se MONCHYAssesseur.e.s\u00a0: Jean RAVON et Cl\u00e9mentine BLANCProcureure\u00a0: Sandrine CODEVELLEAvocate des flics\u00a0: Annie",
		output: "legalteam",
	},
	{
		input:
			"Durant les \u00e9meutes de d\u00e9cembre 2014, marqu\u00e9e par la gr\u00e8ve de la faim de Nikos Romanos et de nombreuses occupations et manifestations sur tout le terri",
		output: "@",
	},
	{
		input:
			"Au cours de la derni\u00e8re d\u00e9cennie, le prol\u00e9tariat en Chine et dans le reste de l\u2019Asie du Sud-Est \u2013 Birmanie, Cambodge, Philippines, Indon\u00e9sie, Tha\u00efland",
		output: "unsympathisantducci",
	},
	{
		input:
			'Au programme\u00a0: - 18H30\u00a0: Acceuil - 19H\u00a0: Projection du film "L\u2019affaire Salah Hamouri", avocat franco-palestinien en d\u00e9tention administrative en Isra\u00ebl',
		output: "bds",
	},
	{
		input:
			"Depuis la fin du mois de novembre, les manifestations, \u00e9meutes, actions cibl\u00e9es et occupations se multiplient un peu partout en Gr\u00e8ce (dans le silence",
		output: "yannisyoulountas",
	},
	{
		input:
			"Derri\u00e8re leurs murs, 6 ao\u00fbt 2019. Ce qui leur fait peur, \u00e7a n'a jamais \u00e9t\u00e9 les marteaux dans le coffre de la voiture mais bien un nouveau monde dans l",
		output: ".",
	},
	{
		input:
			"Vous pouvez nous joindre sur le chat durant le direct \u00e0 https://webchat.cyberguerrilla.org/ (salon : #cayenne) Toujours sur https://radio.antirep.net ",
		output: "radiocayenne",
	},
	{
		input:
			"Pas de titre pour 12708 Le carrefour de la Saulce est occup\u00e9 par les militaires depuis le 23 novembre 2012. De ce fait, la vie quotidienne des habitan",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 9695 ACTION URGENTE contre la s\u00e9questration, torture, menaces et d\u00e9placements forc\u00e9s d\u00b4adh\u00e9rents a l\u00b4Autre Campagne. Explication et ",
		output: "espoirchiapas",
	},
	{
		input:
			"Apr\u00e8s plusieurs tentatives infructueuses \u00e0 travers l\u2019Europe visant \u00e0 accuser anarchistes et autres antiautoritaires de conspiration et de terrorisme, ",
		output: "crimethinc",
	},
	{
		input:
			"APPEL DES ANTI FASCISTES CR\u00c9TOIS: \u00ab\u00a0NI EN CRETE, NI AILLEURS ! Aujourd\u2019hui comme toujours, les fascistes sont des ennemis et sont donc ind\u00e9sirables. L",
		output: "*",
	},
	{
		input:
			"Pas de titre pour 6072 Pas de titre pour 6070 Le 14 juillet prochain, d\u00e9filez avec la glorieuse arm\u00e9e des clowns! ORDRE DE MOBILISATION G\u00c9N\u00c9RALE Le 14",
		output: "anonymous",
	},
	{
		input:
			"Les r\u00e9cents d\u00e9veloppements police-m\u00e9dias (embarqu\u00e9s lors du braquage \u00e0 main arm\u00e9e contre des civils ) sont \u00e0 mettre en relation avec les raids parano\u00ef",
		output: "anonyme",
	},
	{
		input:
			"Une foule de plusieurs dizaines de milliers de personnes, parmi lesquelles de nombreux \u00e9tudiants, s\u2019est rassembl\u00e9e lundi soir \u00e0 Santiago, sur la plaza",
		output: "secoursrouge",
	},
	{
		input:
			"Depuis 23h ce soir entre 50 et 15 personnes soutiennent les camarades arr\u00e9t\u00e9.e.s devant waledeck ! Objectif tenir les 48h avant les possibles fin de G",
		output: "...",
	},
	{
		input:
			'Pas de titre pour 10495 "Eclair\u00e9s un jour, irradi\u00e9s toujours." Pas de titre pour 10493 Pas de titre pour 10492 Pas de titre pour 10491 Des miliciens d',
		output: "jackpalmer",
	},
	{
		input:
			"L\u2019article pr\u00e9cise que les donn\u00e9es ne resteront pas en ligne tr\u00e8s longtemps, et qu\u2019il est conseill\u00e9 d\u2019en faire des copies, voir de cr\u00e9er des \u00ab\u00a0miroirs\u00a0",
		output: "anonyme",
	},
	{
		input:
			"+ LES 400 COUVERTS, C'EST QUOI, C'EST QUI ? C'est une petite rue du centre-ville de Grenoble, squatt\u00e9e depuis plus de trois ans, C'est le domicile d'u",
		output: "anonyme",
	},
	{
		input:
			"Le d\u00e9cret \u00ab Bienvenue en France \u00bb a \u00e9t\u00e9 publi\u00e9 le dimanche 21 avril, actant la multiplication par 16 des frais d'inscription pour les \u00e9tudiant\u00b7e\u00b7s ext",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Ce soir, on cause Actu logement, Gilets Jaunes, Oppressions, Pr\u00e9carit\u00e9, P\u00f4le Emploi, Luttes et r\u00e9pression, Informatique et s\u00e9curit\u00e9, Infokiosque, Inte",
		output: "k-hy\u00e8ne",
	},
	{
		input:
			"lI est courant de penser que l\u2019\u00e9conomie chinoise \u00e9chappe \u00e0 la crise globale du capitalisme. Mais il faudrait le dire aux milliers de travailleurs chin",
		output: "unsympathisantducci",
	},
	{
		input:
			"1. Quand le soja va tout va\u2026 (du d\u00e9but des ann\u00e9es 2000 jusqu\u2019en 2013) L\u2019\u00e9conomie\u00a0 Br\u00e9silienne, au cours des d\u00e9cennies 90/2000 s\u2019est recentr\u00e9e sur la p",
		output: "19h17",
	},
	{
		input:
			"24 JANVIER 2019 PAR ECOLOGIELIBERTAIRE Deep Green Resistance, des r\u00e9actionnaires \u00e0 l'assaut de l'\u00e9cologisme fran\u00e7ais Avertissement : le texte suivant ",
		output: "-",
	},
	{
		input:
			"Quelques faits marquants\u00a0: 5 des 7 personnes qui comparaissent pour des infractions li\u00e9es \u00e0 la manif sont parties directement en taule \u00e0 l'issue des a",
		output: "legalteam",
	},
	{
		input:
			"Ces derniers jours, apr\u00e8s que quatre salopards ont tabass\u00e9 et viol\u00e9 Th\u00e9o, on voit dans les rues la haine de la police \u00e9clater en paroles et en actes. ",
		output: ".",
	},
	{
		input:
			"Pas de titre pour 12306 Pas de titre pour 12305 Pas de titre pour 12304 Pas de titre pour 12303 Pas de titre pour 12302 En pleine effervescence consum",
		output: "jackpalmer",
	},
	{
		input:
			"L'article de Nantes R\u00e9volt\u00e9e : Scoop : un jeune auteur nantais assign\u00e9 \u00e0 r\u00e9sidence par Bernard Cazeneuve Exclusif : nous apprenons que le jeune auteur",
		output: "anonyme",
	},
	{
		input:
			"Juge\u00a0: LAURENTAssesseures\u00a0: GEGLO et VINCENTProcureur\u00a0: Thierry ROLLANDAvocate des flics\u00a0: Annie HUP\u00c9------L'ambiance dans la salle des compas est ten",
		output: "legalteam",
	},
	{
		input:
			"Les \u00e9lus socialistes transforment depuis pr\u00e8s de 30 ans la ville, pour en faire une m\u00e9tropole au service des riches. Guerre aux tags, r\u00e9pression des p",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pas de titre pour 12722 Pas de titre pour 12721 A droite avec la raie plaqu\u00e9e : Gauthier Bouchet, responsable FN local Pas de titre pour 12719 Pas de ",
		output: "jackpalmer",
	},
	{
		input:
			"Dans ce contexte tout recours pr\u00e9alable \u00e0 la force publique sur la Ch\u00e2taigne signifierait que la Pr\u00e9fecture choisit de passer en force. Apr\u00e8s deux moi",
		output: "zadist",
	},
	{
		input:
			"r\u00e9chauffons nos coeurs Je me suis fait arr\u00eater dans le 20eme arrondissement de Paris pour une arnaque au pr\u00e9judice d'un grand magasin \u00e0 hauteur de que",
		output: "anonyme",
	},
	{
		input:
			"DERNIER COMMUNIQU\u00c9 DE L'OCCUPATION DE L'\u00c9COLE POLYTECHNIQUE La lib\u00e9ration des 3 d\u00e9tenus du 6 mai, \u00e0 la suite de 70 jours de gr\u00e8ve de faim de T. Zadoro",
		output: "anonyme",
	},
	{
		input:
			"Leur \u00e9quipement semble quasiment les m\u00eame que sur les images ? Pas de titre pour 12101 Pas de titre pour 12100 Pas de titre pour 12099 Pas de titre po",
		output: "jackpalmer",
	},
	{
		input:
			"Au moment d'arriver \u00e0 la Porte d'Aix, lieu suppos\u00e9 de fin de la manif pour les orgas syndicales, le camion de l'ud 13 cgt a avanc\u00e9 vers les personnes ",
		output: "..",
	},
	{
		input:
			"\u00c9cologie et capitalisme Les trottinettes \u00e9lectriques sont souvent pr\u00e9sent\u00e9es comme \u00e9cologiques. Mais elles rivalisent plut\u00f4t avec les transports publi",
		output: "..",
	},
	{
		input:
			"Le Front populaire au secours de la famille Malthus avait, en son temps, affirm\u00e9 que la croissance d\u00e9mographique incontr\u00f4l\u00e9e entra\u00eenait n\u00e9cessairement",
		output: "*",
	},
	{
		input:
			"Lire la suite ici : http://palestinechronicle.com/view_article_details.php?...19565 traduit par Info-Palestine Naguib http://www.info-palestine.net/ar",
		output: "bds",
	},
	{
		input:
			"Rassemblement devant la fac de droit le 23 mars 2018 Hier soir [22mars 2018], nous, membre de l\u2019AG inter-sectorielle de Montpellier, occupant l\u2019amphit",
		output: "anonyme",
	},
	{
		input:
			"Blessure par plots de grenade d\u00e9sencerclante L'appareil photo du camarade de Shadow News apr\u00e8s sa rencontre avec la BAC Arriv\u00e9-es \u00e0 la pr\u00e9fecture, les",
		output: "streetmedicnantes",
	},
	{
		input:
			"Sam 5 et Dim 6 Mars \u2013 Assembl\u00e9e de lutte \u00e0 la Maison de R\u00e9sistance \u00e0 la poubelle nucl\u00e9aire. Assembl\u00e9e du mouvement le 5 \u00e0 partir de 14h, puis reunion ",
		output: "vmc",
	},
	{
		input:
			"Le 25 octobre 2014, \u00c0 Sivens, quelques milliers de personnes \u00e9taient rassembl\u00e9es en opposition \u00e0 un projet de barrage que la justice allait d\u00e9clarer i",
		output: ".",
	},
	{
		input:
			"MONTREAL - Un commando lanc\u00e9 dans un chic restaurant du Vieux-Montr\u00e9al le 16 novembre au soir -alors que se tenait du 17 au 19 novembre 2005 le Congr\u00e8",
		output: "anonymous",
	},
	{
		input:
			'Le 25 mars, tous les paysans et habitants dits "historiques" de la zad de Notre-Dame-des-Landes seront expulsables suite au proc\u00e8s intent\u00e9 en janvier ',
		output: "zadist",
	},
	{
		input:
			"Photo : KforC production blessure sur le flan la blessure au coude de notre m\u00e9dic blessure sur le coude blessure au ventre blessure \u00e0 la cuisse Jeudi ",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Lors de l'audience du vendredi 17 Juin une des dernieres \u00abapologie\u00bb r\u00e9alis\u00e9 f\u00fbt celle du prisonnier Dusko Fabio, accus\u00e9 d'avoir collaborer avec la ten",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"\u00ab Je revendique ces attaques en soutien aux compagnons anarchistes emprisonn\u00e9s et contre les cons\u00e9quences des politiques lib\u00e9rales appliqu\u00e9es en Europ",
		output: "aaa",
	},
	{
		input:
			"\" De nos jours , l ' \u00e9cran de t\u00e9l\u00e9vision , devenu indispensable \u00e0 l ' existence de millions de personnes , leur fait consid\u00e9rer comme accessoires et p",
		output: "patricefaubertditpatl'invit\u00e9",
	},
	{
		input:
			"Pour rappel des faits, 4 flics dont les noms ont \u00e9t\u00e9 rendu public ici\u00a0ont tabass\u00e9 le compagnon il y a peu . Damien est sorti de GAV avec une main frac",
		output: "desanarchistes",
	},
	{
		input:
			"le site de breizh info publie un article qui donne les adresses des squats sur nantes, ainsi que le lieu et date de r\u00e9union en soutien aux migrant-e-s",
		output: "antifa",
	},
	{
		input:
			"L\u2019illusion de la d\u00e9mocratie directe Un r\u00e9f\u00e9rendum n\u2019est en rien l\u2019expression d\u2019une d\u00e9mocratie directe, bien au contraire. Qui d\u00e9cide du moment, de la ",
		output: "anonyme",
	},
	{
		input:
			"L\u2019Action Antifasciste NP2C et la CNT Lille ont \u00e9galement publi\u00e9s des communiqu\u00e9s suite au fusil brandit par un groupe d\u2019extr\u00eame-droite contre les mani",
		output: "...",
	},
	{
		input:
			"\u00a0 22/06. Sabotage de station de pompage de RWE \u00e0 Hambach Dans la nuit du dimanche 21 au lundi 22 juin, des inconnus ont mis le feu \u00e0 une bo\u00eete \u00e0 fusib",
		output: "anonym",
	},
	{
		input:
			"Il \u00e9tait en livr\u00e9e verte ,celle du laquais mais il a m\u00fbri.Il a tellement muri ,en bon carri\u00e9riste ,qu'il est devenu \u00ab\u00a0sinistre\u00a0\u00bb apr\u00e8s avoir \u00e9t\u00e9 pr\u00e9si",
		output: "larage",
	},
	{
		input:
			"Le 15 mars 1999, un groupe de Pr\u00e9caires et Ch\u00f4meurs d'AC CLASH (Ch\u00f4meurs, Libres, Actifs, Solidaires, et Heureux) mettait d\u00e9finitivement hors service ",
		output: "anonymous",
	},
	{
		input:
			"AUCUNE EXPULSION N'EST \u00ab NORMALE \u00bb Le squat du 6 rue de la Renardi\u00e8re, \u00e0 Montreuil, a \u00e9t\u00e9 ouvert en mars dernier par quelques personnes qui avaient be",
		output: "anonyme",
	},
	{
		input:
			"Cet appel d\u2019offres s\u2019adresse \u00e0 toutes celles et ceux qui participent \u00e0 la lutte dans la r\u00e9gion et bien au-del\u00e0, qu\u2019ils soient organis\u00e9s en comit\u00e9s ou ",
		output: "zadist",
	},
	{
		input:
			"Les batiments occup\u00e9s rue Marmontel depuis des ann\u00e9es par diff\u00e9rents collectifs ou individuEs se voient menac\u00e9s d'expulsion par la SEM (soci\u00e9t\u00e9 d'\u00e9con",
		output: "anonymous",
	},
	{
		input:
			"ac-info ---------- Nous, ch\u00f4meurs, pr\u00e9caires, intermittents, salari\u00e9s, occupons ce jour, mardi 12 avril 2005 \u00e0 10h, la Commission Locale d'Insertion N",
		output: "anonymous",
	},
	{
		input:
			"La for\u00eat de Hambach est une for\u00eat ancienne de plus de mille ans. Elle se trouve aux alentours de Cologne. Nous occupons cette for\u00eat depuis cinq ans af",
		output: "anonyme",
	},
	{
		input:
			"Salut \u00e0 vous, Nous sommes la ZAD d\u2019\u00c9chillais (17) en lutte contre le projet d\u2019hyper-incin\u00e9rateur de d\u00eachets dont nous occupons l\u2019espace pr\u00e9vu pour le ",
		output: "camille",
	},
	{
		input:
			"Apr\u00e8s avoir \u00e9t\u00e9 ni\u00e9e pendant des semaines (1), la dangerosit\u00e9 du covid-19 a donn\u00e9 lieu \u00e0 un arsenal de mesures destin\u00e9 \u00e0 enrayer la propagation de la ",
		output: "...",
	},
	{
		input:
			"On a utilis\u00e9 3 engins incendiaires : des bouteilles de plastique \u00e0 bases carr\u00e9es remplies au 3/4 avec un m\u00e9lange d\u2019essence et d\u2019huile \u00e0 moteur. On a u",
		output: "desanarchistes",
	},
	{
		input:
			"- Au d\u00e9but de ce mois de Juillet de cette ann\u00e9e 2012, des rapports ont commenc\u00e9s \u00e0 \u00e9maner d\u2019Iran d\u00e9crivant comment des milices de monstres vicieux, co",
		output: "soliranparis",
	},
	{
		input:
			"Ce matin, les occupants du 81 rue alphonse gu\u00e9rin ont \u00e9t\u00e9 sorti du lit sans m\u00e9nagement par les forces de l'ordre \u00e9tabli. Juste le temps de r\u00e9cup\u00e9rer q",
		output: "anonymous",
	},
	{
		input:
			"En 1967 prennent fin les \u201c30 glorieuses\u201d, cette \u00e8re br\u00e8ve de relative prosp\u00e9rit\u00e9 \u00e9conomique qui a fait suite \u00e0 l\u2019effroyable succession \u201cPremi\u00e8re Guerr",
		output: "unsympathisantducci",
	},
	{
		input:
			"http://ulnantes.cnt-f.org/spip.php?article173 Solidarit\u00e9 avec les exil\u00e9\u00b7e\u00b7s et collectifs de soutien\u00a0! Une succession d\u2019expulsions depuis l\u2019\u00e9t\u00e9 Au cou",
		output: "cntnantes",
	},
	{
		input:
			"Tous les gouvernements, d\u2019extr\u00eame droite, de droite, de gauche ou d\u2019extr\u00eame gauche, m\u00e8nent partout les m\u00eames attaques ignobles contre les conditions d",
		output: "unsympathisantducci",
	},
	{
		input:
			'Bonjour,Voici en pdf, le No 175, septembre/octobre 2018, du petit journal mobile recto-verso A4"RESISTONS ENSEMBLE" du r\u00e9seau contre les violences pol',
		output: "r\u00e9seaure",
	},
	{
		input:
			"Il \u00e9tait enferm\u00e9 \u00e0 Nantes depuis le 22 juillet. Arr\u00eat\u00e9 au motif qu\u2019il n\u2019avait pas respect\u00e9 le suivi judiciaire d\u2019une condamnation li\u00e9e au mouvement co",
		output: ".",
	},
	{
		input:
			"\u201cLa France n\u2019est pas menac\u00e9e\u201d, selon la ministre de l\u2019Economie, Christine Lagarde. \u201cLa France n\u2019est pas dans la m\u00eame cat\u00e9gorie que l\u2019Irlande ou le Por",
		output: "unsympathisantducci",
	},
	{
		input:
			"\u00c9conomies nationales surendett\u00e9es, les plus faibles devant \u00eatre secourues pour leur \u00e9viter la banqueroute et celle de leurs cr\u00e9anciers ; plans de rigu",
		output: "unsympathisantducci",
	},
	{
		input:
			"Ils ne font que leur travail (Couleur) Ils ne font que leur travail (Noir et blanc) PDF couleur PDF Noir et blanc ...",
		output: "!",
	},
	{
		input:
			"Le 24 septembre 2008, le pr\u00e9sident des \u00c9tats-Unis, George W. Bush, a tenu, d'apr\u00e8s les commentateurs et journalistes du monde entier, un discours \"inh",
		output: "unsympathisantducci",
	},
	{
		input:
			"Vous trouverez ci-dessous le fly. N'h\u00e9sitez pas \u00e0 le partager/diffuser autour de vous ! ------------ A partir du 25 mars, toutes les habitantes de la ",
		output: "cnca",
	},
	{
		input:
			"A 10H30, c'est une v\u00e9ritable mar\u00e9e humaine qui d\u00e9ferle sur le Miroir d'eau, cette grande esplanade sans vie, soudain envahie par une foule dense et h\u00e9",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Il va y avoir un krach et la chute sera violente\u201d. \u201cAbsolument personne ne croit aux plans de sauvetage, ils savent que le march\u00e9 est cuit et que la b",
		output: "unsympathisantducci",
	},
	{
		input:
			"A Pittsburgh, les 24 et 25 septembre, s\u2019est tenu le troisi\u00e8me sommet du G20 1, nouveau \u201cforum international\u201d tout sp\u00e9cialement cr\u00e9\u00e9 pour endiguer la c",
		output: "unsympathisantducci",
	},
	{
		input:
			"La nuit du 8 au 9 novembre en r\u00e9gion parisienne, plusieurs entreprises li\u00e9es \u00e0 l'enfermement ont \u00e9t\u00e9 vis\u00e9es : Eiffage (une des plus grandes entreprise",
		output: "anonyme",
	},
	{
		input:
			"A en croire la bourgeoisie, tout allait pour le mieux dans le meilleur des mondes. Les bourses battaient des records, la croissance \u00e9tait soutenue, le",
		output: "unsympathisantducci",
	},
	{
		input:
			"Depuis l\u2019\u00e9t\u00e9 2007 et l\u2019\u00e9clatement de la bulle des pr\u00eats hypoth\u00e9caires nomm\u00e9s subprimes, la crise \u00e9conomique ne cesse de s\u2019aggraver. Pourtant, la bourg",
		output: "unsympathisantducci",
	},
	{
		input:
			"Le Centre national des Lettres (CNL) s'est rendu coupable, le 8 juin 2004, du grave d\u00e9lit de discrimination. R\u00e9uni en commission pour attribuer une su",
		output: "anonymous",
	},
	{
		input:
			"Communiste, anarchiste, adepte de la gu\u00e9rilla, compagnon de Jacques Mesrine, braqueur et trafiquant recherch\u00e9 par toutes les polices, puis prof de phi",
		output: "antifa",
	},
	{
		input:
			"En d\u00e9mocratie, confier le pouvoir \u00e0 d\u2019autres, par le suffrage universel, c\u2019est accepter, th\u00e9oriquement en toute connaissance de cause et de son plein ",
		output: "verdi",
	},
	{
		input:
			"plus d'\u00e9crou mais toujours les cros!! sortie de prison de Mike, inculp\u00e9 suite \u00e0 l'explosion de Chamb\u00e9ry en 2009 le 9 mars 2013, je suis sorti de priso",
		output: "anonyme",
	},
	{
		input:
			"- 15h04 : 2 fourgon GM, 2 pompi\u00e8res vers St. Eve ( Rosi\u00e8re ) - 14h59 : 1 fourgon qui roule doucement entre Ardilli\u00e8res direction Fosses noires - 14h55",
		output: "zadist",
	},
	{
		input:
			"Dans les semaines pr\u00e9c\u00e9dents les Jeux Olympiques 2016, qui auront lieu au Br\u00e9sil, le lieu a re\u00e7ut une menace d'expultion qui devrait avoir lieu d\u00e9but ",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"COMMUNIQUE - 28 JUIN 2004 - 69\u00e8me heure Nous pi\u00e9tinerons le MEDEF tant que le MEDEF pi\u00e9tinera nos droits. 4\u00e8me jour d'occupation du toit du MEDEF Nous",
		output: "anonymous",
	},
	{
		input:
			"Lire la suite du texte: http://www.non-fides.fr/?La-vengeance-de-Promethee T\u00e9l\u00e9charger la brochure: http://aiferricorti.entodaspartes.net/files/2010/0",
		output: "anonyme",
	},
	{
		input:
			"A ta sant\u00e9 ! 3 A ta sant\u00e9 ! 2 A ta sant\u00e9 ! 1 Mesdames et Messieurs les annonceurs de la campagne de publicit\u00e9 \u00ab A ta sant\u00e9 ! \u00bb, vous \u00eates des cons. No",
		output: "institutded\u00e9mobilisation",
	},
	{
		input:
			"Hambourg: 10 voitures br\u00fbl\u00e9es 25 juillet 2010 La s\u00e9rie des voitures br\u00fbl\u00e9es \u00e0 Hambourg ne faiblit pas: dans la nuit de samedi \u00e0 dimanche, des inconnus",
		output: "ploumploum",
	},
	{
		input:
			"Ce dispositif\u00a0high tech\u00a0(les photos prises par les smartphones et les coordonn\u00e9es GPS du t\u00e9moin \u00e9tant automatiquement transmises aux t\u00e9l\u00e9op\u00e9rateurs en",
		output: "anonyme",
	},
	{
		input:
			"{6 MARS CONTRE AGREXCO A SETE : NE RATEZ PAS LA MARCHE ! La Coalition contre Agrexco-Carmel organise le SAMEDI 6 MARS une grande marche aboutissant au",
		output: "bds",
	},
	{
		input:
			"Nous voulons aussi souligner le courage des habitant.e.s de Beaumont-sur-Oise qui ont montr\u00e9 que uni.e.s, solidaires et organis\u00e9.e.s, on pouvait faire",
		output: "zadist",
	},
	{
		input:
			"Apr\u00e8s les r\u00e9centes interventions de M. Donnedieu de Vabres devant le parlement, nous prenons acte avec satisfaction qu'apr\u00e8s un an et demi de contesta",
		output: "anonymous",
	},
	{
		input:
			"Oldenburg: Un monument aux mort pass\u00e9 au goudron et aux plumes! Oldenburg, 26 juillet 2010 Attaque d'un monument aux morts:des inconnus ont recouvert ",
		output: "ploumploum",
	},
	{
		input:
			"Ce carnage est totalement d\u00e9lirant ! D'un c\u00f4t\u00e9, on construit des barrages surdimensionn\u00e9s pour irriguer des zones naturellement adapt\u00e9es \u00e0 une agricul",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 9389 \u00ab Qu\u2019arrive-t-il aux V\u00e9lostars ? \u00bb, demandait Ouest-France sur ses affichettes jaunes, le 13 octobre 2009, comme pour r\u00e9pandre ",
		output: "institutded\u00e9mobilisation",
	},
	{
		input:
			"Appel aux jeunes Rroms, Gitans, Manouches, Sint\u00e9s et non-Roms \u00e0 participer \u00e0 la Comm\u00e9moration par les jeunes Europ\u00e9ens du G\u00e9nocide des Tsiganes du 30 ",
		output: "moi",
	},
	{
		input:
			"\u00ab Fuck you, Robert De Niro ! \u00bb Durant sa visite \u00e0 New York, M. D\u00edaz-Canel, consid\u00e9r\u00e9 par beaucoup comme le fantoche de Ra\u00fal Castro, a \u00e9t\u00e9 accueilli ch",
		output: ".",
	},
	{
		input:
			"C\u2019\u00e9tait peut-\u00eatre un petit geste, mais il \u00e9tait facile \u00e0 faire. Les voitures de ces compagnies sont partout. Fuck toutes les prisons et tous-tes ceux ",
		output: "sansattendredemain",
	},
	{
		input:
			"\u00ab\u00a0Le 14 juillet, c\u2019est le jour de votre ind\u00e9pendance, c\u2019est bien \u00e7a\u00a0?\u00a0\u00bb, interroge un jeune exil\u00e9, venu participer \u00e0 la session hebdomadaire de l\u2019\u00e9col",
		output: ".",
	},
	{
		input:
			"Nous poursuivons ici notre s\u00e9rie d\u2019articles commenc\u00e9e dans le n\u00b0 400 de RI sur cette \u201cnouvelle\u201d organisation au sein du paysage politique en France qu",
		output: "unsympathisantducci",
	},
	{
		input:
			"Au d\u00e9but des ann\u00e9es 1990 on prenait encore le train avec le plaisir de nagu\u00e8re, et l\u2019impatience de jadis. Puis la mise en concurrence de toutes les ch",
		output: "institutded\u00e9mobilisation",
	},
	{
		input:
			"Bita Ghaedi Sauvez Bita Ghaedi d\u2019une expulsion vers l\u2019Iran cher-es camarades du monde entier une camarade iranienne est menac\u00e9e d'expulsion vers l'ira",
		output: "solidarit\u00e9aveclaluttedupeupleiranien",
	},
	{
		input:
			"Apr\u00e8s un mois d'affrontements, de destructions et de barricades, la guerre qui est men\u00e9e ici semble prendre un nouveau tournant. Que le gouvernement d",
		output: "camille",
	},
	{
		input:
			"Apr\u00e8s une rapide caravane de voitures, nous nous rassemblons. Bien que rep\u00e9r\u00e9.e.s par les keufs, nous p\u00e9n\u00e9trons dans la for\u00eat et nous nous approchons ",
		output: ".",
	},
	{
		input:
			"Un formidable coup d\u2019audace Rendez-vous \u00e9tait pris au Parc des Cropettes pour ce d\u00e9fil\u00e9 de r\u00e9appropriation de la rue. De la musique latino-am\u00e9ricaine ",
		output: "@nonyme",
	},
	{
		input:
			"Pau, lo 19 de junh de 2007 (version en fran\u00e7ais ci-apr\u00e8s) Tun\u00e8l deth Somp\u00f2rt e \u00e8ish E7... gauj\u00f3s aniversari ! Quinze ans ara qu'\u00e8ra proclamat \u00ab era Cr",
		output: "anaramaupatac",
	},
	{
		input:
			"Bonjour, Un comit\u00e9 de soutien lyonnais \u00e0 Cesare Battisti (qui est sous le couperet d'une extradition depuis le 30 juin) s'est cr\u00e9\u00e9 afin de relancer le",
		output: "anonymous",
	},
	{
		input:
			"Le jardin des ronces f\u00eate son 4e printemps!Cette belle friche urbaine, vou\u00e9e comme beaucoup d'autres aux alentours \u00e0 \u00eatre aval\u00e9e par l'ogre m\u00e9tropolit",
		output: "roncier",
	},
	{
		input:
			"Pour protester contre les arrestations massives des travailleurs de \u00ab Soci\u00e9t\u00e9 du Transport de T\u00e9h\u00e9ran \u00bb en Iran ; Pour la lib\u00e9ration des travailleurs ",
		output: "solidarit\u00e9aveclaluttedupeupleiranien",
	},
	{
		input:
			"\"Le contractant, qui se d\u00e9clare libre de tout engagement, est recrut\u00e9 en qualit\u00e9 de salari\u00e9 li\u00e9 \u00e0 l'\u00e9tat par un contrat \u00e0 dur\u00e9e d\u00e9termin\u00e9.....\": c'est",
		output: "anonymous",
	},
	{
		input:
			"Mohammed El Abbouby, un de ces 14 sans-papiers condamn\u00e9s pour la r\u00e9volte est mort dans la nuite du vendredi 15 au samedi 16 octobre dans sa cellule de",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Anaram Au Patac, mouvement r\u00e9volutionnaire de la gauche occitane, demande la lib\u00e9ration imm\u00e9diate et sans condition du prisonnier politique basque I\u00f1a",
		output: "anaramaupatac",
	},
	{
		input:
			"La circulaire du 13 juin avait d\u00e9clench\u00e9 un immense espoir... mais ce fut une v\u00e9ritable loterie. Cet espoir, entretenu par les d\u00e9clarations m\u00e9diatis\u00e9e",
		output: "anonymous",
	},
	{
		input:
			"Pour la onzi\u00e8me fois, je tente encore. Car dix fois d\u00e9j\u00e0, j'ai commenc\u00e9 \u00e0 r\u00e9diger cette lettre pour m'adresser \u00e0 vous, Italiens, et Fran\u00e7ais aussi. Ma",
		output: "anonymous",
	},
	{
		input:
			"Nous reprenons donc les termes de l\u2019appel de la coordination de Montpellier\u00a0: Partout en France, les m\u00eames probl\u00e8mes persistent\u00a0: difficult\u00e9s \u00e0 finir ",
		output: "...",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 52 / avril 2007 La solidarit\u00e9 s'organise et c'est eux qui le disent - La solidarit\u00e9 s'organise et c'est eux qui l",
		output: "zozo",
	},
	{
		input:
			"Demain, nous n'irons pas au travail : - 4 camionnettes, une voiture et un camion de la Mairie de Paris - une voiture et une camionnette Vinci (constru",
		output: "anonyme",
	},
	{
		input:
			"<!--OHAOFP--><!--OHSOSP--><!--OHSOFP-->La multiplication des intimidations, violences polici\u00e8res, interpellations, condamnations de toutes sortes cont",
		output: "(((i)))",
	},
	{
		input:
			"L'organisme basque contre la torture TAR et la famille d'Amaia Urizar ont d\u00e9nonc\u00e9 dans une conf\u00e9rence de presse qu'Amaia avait \u00e9t\u00e9 viol\u00e9e \u00e0 la caserne",
		output: "anonymous",
	},
	{
		input:
			"L\u2019annonce du procureur en chef de Turin, Caselli, de prendre sa retraite quelques mois en avance n\u2019avait pas \u00e9chapp\u00e9 aux plus attentifs. Une nouvelle ",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 10876 Pas de titre pour 10877 Pas de titre pour 10873 Pas de titre pour 10872 <!--OHAOFP--><!--OHSOSP--><!--OHSOFP--> Pour mener \u00e0 b",
		output: "(((i)))",
	},
	{
		input:
			"F\u00caTE DU JARDIN DES RONCES, le grand rendez-vous\u00a0! R\u00e9servez les dates du 9 et 10 juin 2018 La nouvelle \u00e9dition de la f\u00eate du jardin se d\u00e9roulera du sam",
		output: "roncier",
	},
	{
		input:
			"Date : 15 f\u00e9vrier 2010 23:38 Objet : H\u00e9l\u00e8ne; garde \u00e0 vue \u00c0 6h10, quatre hommes et une femme ont frapp\u00e9 \u00e0 ma porte, ont dit que c\u2019\u00e9tait la police. J\u2019ai",
		output: "anonyme",
	},
	{
		input:
			'Bonjour,Voici en pdf, le No 170, f\u00e9vrier/mars 2018, du petit journal mobile recto-verso A4"RESISTONS ENSEMBLE" du r\u00e9seau contre les violences polici\u00e8r',
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			"Dans le box, des pauvres, \u00e9trangers pour la plupart. Vols et deals seront le lot de cet apr\u00e8s midi, avec une conduite sans permis pour couronner le no",
		output: ".",
	},
	{
		input:
			"Myriam est journaliste, militante de la Cimade \u00e0 la Rochelle, mari\u00e9e depuis l'automne avec Igor, Ukrainien menac\u00e9 de mort s'il devait \u00eatre renvoy\u00e9 che",
		output: "anonymous",
	},
	{
		input:
			"- Juge : Constance DESMORAT- Procureure : Sandrine CODEVELLE Le tribunal n'est pas bloqu\u00e9, les flics de la CDI sont absents. 8 flics des la BAC sont d",
		output: "legalteam",
	},
	{
		input:
			"Dans la nuit du 10 au 11 septembre 2008, \u00e0 la Maison d'Arr\u00eat de Rouen, s'est produit un drame comme il s'en produit si souvent en d\u00e9tention : un d\u00e9ten",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 3418 Pas de titre pour 3416 Pas de titre pour 3414 Pas de titre pour 3412 Ce matin, un responsable de la police grenobloise est pass",
		output: "anonymous",
	},
	{
		input:
			"- 9h55 : Le Saboteurs demandent de l\u2019eau et nourriture et renfort - 9h52 : selon nos Infos EDF devrais couper l\u2019elec de 3 maisons ce matin, dans l\u2019ord",
		output: "zadist",
	},
	{
		input:
			"Tu nous as tendu la main, nous t'avons tendu le tract \"Quelques vautours de la machine \u00e0 expulser\" devant la vitrine de l'agence recouverte d'affiches",
		output: "anonyme",
	},
	{
		input:
			"Il y a un peu plus d'un an maintenant, la crise de l'immobilier qui s'ouvrait aux Etats-Unis (la d\u00e9sormais c\u00e9l\u00e8bre \"crise des subprimes\") donnait le c",
		output: "unsympathisantducci",
	},
	{
		input:
			"- 10h : 2 interpellations signal\u00e9es au niveau des barricades du farouezt, une pelleteuse au travail devant le sabot - 9h45 : les flics s\u2019approchent de",
		output: "zadist",
	},
	{
		input:
			"Manifestation contre le projet sur la pr \u00e9vention de la d\u00e9linquance Manifestation le 3 f\u00e9vrier Depuis plus d\u00b9un an, un projet de loi sur la pr\u00e9vention",
		output: "anonymous",
	},
	{
		input:
			"Frank : non-coupable, relax\u00e9 de tous les chefs d\u2019inculpation, il peut demander r\u00e9paration pour les 6 mois de d\u00e9tention pr\u00e9ventive d\u00e9j\u00e0 effectu\u00e9s Ivan ",
		output: "anonyme",
	},
	{
		input:
			"Hier dans la nuit, pour exprimer activement notre solidarit\u00e9, nous avons attaqu\u00e9 le consulat italien \u00e0 la bombe de peinture.Pour la lib\u00e9ration imm\u00e9dia",
		output: "anonyme",
	},
	{
		input:
			"28 juillet 2010, Berlin. Dans la nuit de mardi \u00e0 mercredi, la police a emp\u00each\u00e9 plusieurs incendies de voitures. Sur un parking de Friedrichshain, des ",
		output: "ploumploum",
	},
	{
		input:
			"Forces sp\u00e9ciales fran\u00e7aises au Mali Mais depuis plusieurs mois, depuis le renversement du pr\u00e9sident Amadou Toumani Tour\u00e9, la diplomatie fran\u00e7aise s'ac",
		output: "pcint",
	},
	{
		input:
			"Aux quatre coins de la plan\u00e8te, la classe ouvri\u00e8re subit des conditions d\u2019exploitation et de mis\u00e8re de plus en plus insoutenables. Et dans les pays qu",
		output: "unsympathisantducci",
	},
	{
		input:
			"Ces notions semblent difficile \u00e0 d\u00e9finir. Quand on parle d\u2019enfermement, on pense habituellement \u00e0 la s\u00e9questration, au fait d\u2019\u00eatre retenu, d\u00e9tenu ou e",
		output: "desanarchistes",
	},
	{
		input:
			"Retourn\u00e9 au bas de la rue du Calvaire, une personne suite \u00e0 l'explosion d'une grenade d\u00e9sencerclante est touch\u00e9e au talon d'Achille. Toujours au bas d",
		output: "streetmedicsnantes",
	},
	{
		input:
			"\u00c0 la veille de la fin de semaine de mobilisation internationale contre l'a\u00e9roport de NDDL et son monde, nous avons tenu, pendant une demi-heure, des b",
		output: ".",
	},
	{
		input:
			"11 septembre 2001 - Manif pour la v\u00e9rit\u00e9 \u00e0 Bruxelles, le 9 sept 2007 \u00e0 14h, Gare de Bruxelles-Nord. Bonjour \u00e0 toutes et \u00e0 tous, Je ne vous apprendrai ",
		output: "do",
	},
	{
		input:
			"L'impact d'une GLIF4 dans un parterre pr\u00e8s de la pr\u00e9fecture Avant m\u00eame la manifestation, plusieurs Medic se sont fait confisquer du mat\u00e9riel de soin p",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Santa Cruz (USA), 1er mai : Une grande agence Wells Fargo (investisseur dans les prisons pour etrangers) voit ses treize vitres d\u00e9fonc\u00e9es, ainsi que l",
		output: "anonyme",
	},
	{
		input:
			'Le chemin d\u2019acc\u00e8s des GM, l\u2019endroit nomm\u00e9 "Les Lascards" ou "Les Enterr\u00e9s" est d\u00e9fendu par une s\u00e9rie d\u2019\u00e9normes barricades de rondins et plusieurs prof',
		output: "anonyme",
	},
	{
		input:
			"C\u2019est la citation hallucinante, du premier flic de France Christophe Castaner, mardi 30 juin, devant le Parlement. Il \u00e9voque en ces termes la fresque ",
		output: "x",
	},
	{
		input:
			"*Monique Crinon s'oppose dans ce texte \u00e0 une th\u00e8se propag\u00e9e depuis deux ans par les partisans de l'interdiction voile dit islamique : l'id\u00e9e selon laq",
		output: "anonymous",
	},
	{
		input:
			"6 octobre 2019 : mobilisation plage de la Normandeli\u00e8re violences des forces de l'ordre ce mardi 8 oct 2019 CREATION DE LA ZAD DE LA DUNE Urgent une Z",
		output: "...",
	},
	{
		input:
			"SVP vous pouvez poste pour nous cet message dans les liste du Forum Social, la censure et la r\u00e9pression sont applique, pas seulement par le syst\u00e8me, m",
		output: "collectifbellaciao",
	},
	{
		input:
			"Affiche trouv\u00e9e sur le web Avant la manif : Se nettoyer le visage et les parties du corps qui ne sont pas couvertes \u00e0 l'eau et au savon Ne PAS mettre ",
		output: "anonyme",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 44 / juillet 2006 Pourquoi la police fait-elle si peur ? - Pourquoi la police fait-elle si peur ? - Sarkozy met e",
		output: "zozo",
	},
	{
		input:
			"N'h\u00e9sitez pas \u00e0 transmettre vos suj\u00e9tions de sons, d\u00e9dicaces, jeux, blagues en commentaires. Le chat sera ouvert sur le canal #cayenne, sur https://ch",
		output: "radiocayenne",
	},
	{
		input:
			"Interpell\u00e9 sur le recours aux services d'une agence de communication pour assister la CNDP-Nanos dans sa campagne d'acceptabilit\u00e9, le pr\u00e9sident Jean B",
		output: "pmo",
	},
	{
		input:
			"- Ah super ! - Quoi ? - Enfin de nouveaux podcasts de Radio Cayenne ! - Radio Cayenne, c'est quoi \u00e7a ? - Ben la radio de lutte de Nantes ! Tu savais p",
		output: "radiocayenne",
	},
	{
		input:
			"Juge\u00a0: St\u00e9phane LORENTZAsseusseur.e.s\u00a0: Jeau RAVON et Aur\u00e9lie DUROCHERProcureur\u00a0: Laurent FICHOTAvocate des flics\u00a0: Annie Hup\u00e9T. est accus\u00e9 de\u00a0:- Viol",
		output: "legalteam",
	},
	{
		input:
			"Ce groupe d'extr\u00eame droite tente, depuis plusieurs mois maintenant, d'\u00e9tablir une section \u00e0 Nantes. Comptant sur un effectif tr\u00e8s faible, compos\u00e9 des ",
		output: "actionantifascistenantes",
	},
	{
		input:
			"Le m\u00e9contentement et la col\u00e8re se sont fortement accumul\u00e9s dans les rangs ouvriers. Face \u00e0 l\u2019aust\u00e9rit\u00e9, l\u2019inqui\u00e9tude est devenue palpable. Quelle est ",
		output: "unsympathisantducci",
	},
	{
		input:
			"Qui s\u00e8me des radiations r\u00e9colte des \u00e9trons ! Cette petite escapade nocturne n\u2019est que le d\u00e9but d\u2019une r\u00e9sistance collective. Car au vu de la col\u00e8re qu\u2019",
		output: "anonyme",
	},
	{
		input:
			"Quelques podcasts issus de l'\u00e9mission du 27 mai : - Une session musicale de Hip-Hop underground - Interview des sans-papiers Gilets Noirs (action occu",
		output: "radiocayenne",
	},
	{
		input:
			"Des choix qui les conduiront quelques heures plus tard dans le quartier Boyenval o\u00f9 vivent amis et famille d\u2019Adama Traor\u00e9. L\u00e0, pour reprendre les term",
		output: "anonyme",
	},
	{
		input:
			"Les pro-a\u00e9roports, pr\u00e9fecture, vinci et consorts reprennent ind\u00e9niablement du poil de la b\u00eate\u00a0: annonces va-t-en guerre et commentaires victorieux sur",
		output: "zadist",
	},
	{
		input:
			"7H45 ce matin, samedi 18 juillet. Des passants voient des flammes \u00e0 l'int\u00e9rieur de la Cath\u00e9drale de Nantes. Branle bas de combat. Des dizaines de pomp",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"1976 : rien n'a chang\u00e9... VENIR SUR PLACEPour rejoindre la zad / Pour acc\u00e9der \u00e0 la zone, voir ICI :\u00a0 https://web.archive.org/web/20180311232938/https:",
		output: "d\u00e9fendrelazad",
	},
	{
		input:
			"Faisant leurs premi\u00e8res armes en contestation pacifiste et apprentissage de la d\u00e9mocratie, Nathan et un ami, constitue un blog qu\u2019il nomme na\u00efvement C",
		output: "anonyme",
	},
	{
		input:
			"--------------- - AG Exceptionnelle: organisation expulsion Au vue de l'annonce d'expulsion imminente (lundi 9 selon certains journalistes), il a \u00e9t\u00e9 ",
		output: "zadist",
	},
	{
		input:
			"Les extr\u00e9mismes actuels sont issus en grande partie des classes populaires ou moyennes et se tournent vers les discours virulents pour \u00ab\u00a0prot\u00e9ger\u00a0\u00bb le",
		output: "x",
	},
	{
		input:
			"Apr\u00e8s presque deux ans de prison, il a pu retrouver ses potes mais doit toujours rendre des comptes \u00e0 la justice. Les nombreux messages de solidarit\u00e9 ",
		output: ".",
	},
	{
		input:
			"De : zad@riseup.net - \u00e0 relayer largement Pour commencer, une assembl\u00e9e d'organisation de la manifestation de r\u00e9occupation aura lieu le vendredi 26 oc",
		output: "zad",
	},
	{
		input:
			"Le jeune homme a re\u00e7u une balle dans la poitrine. Il a \u00e9t\u00e9 plac\u00e9 dans un taxi pour \u00eatre transf\u00e9r\u00e9 \u00e0 l\u2019h\u00f4pital local, mais il est d\u00e9c\u00e9d\u00e9 en chemin. Une",
		output: "secoursrouge",
	},
	{
		input:
			"\u201cLa condition de la femme au xxie si\u00e8cle\u201d\u2005; pourquoi un tel titre, pourquoi se pencher sur un tel sujet\u2005? N\u2019est-ce pas anachronique ou d\u00e9pass\u00e9\u2005? Apr\u00e8s",
		output: "unsympathisantducci",
	},
	{
		input:
			"le Turfu, c'est bien plus que 10 visions ! CONTACTS :\u00a0 ZAD : mail Infos : zad_AT_riseup.net - mail Soutiens : soutienzad_AT_riseup.net Infotraflic ZAD",
		output: "d\u00e9fendrelazad",
	},
	{
		input:
			"Depuis la r\u00e9sistance contre le projet de barrage de Sivens, depuis les multiples agressions que les opposants ont subies de la part des agriculteurs p",
		output: "anonyme",
	},
	{
		input:
			"La visite s'accompagnait de la lecture suivante , d\u00e9non\u00e7ant les exactions du pouvoir : \"Partout en France le mouvement \u00e9tudiant subit une r\u00e9pression e",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Le suivit des actualit\u00e9s concernant les situations et luttes des exil\u00e9.e.s et leurs soutiens ce mois de septembre et d\u00e9but octobre \u00e0 \u00e9couter en podcas",
		output: "radiocayenne",
	},
	{
		input:
			"Le 1er juillet 2020 \u00e0 6h du matin un appartemment a \u00e9t\u00e9 perquisitionn\u00e9 \u00e0 Amiens dans le cadre d'une enqu\u00eate criminelle ouverte contre x par la juge d'",
		output: "a",
	},
	{
		input:
			"Les factrices et facteurs des centres courrier de Nantes Eraudi\u00e8re (44300) et Nantes Rollin (44100) seront en gr\u00e8ve illimit\u00e9e \u00e0 compter du lundi 15 av",
		output: "moi",
	},
	{
		input:
			"Depuis plusieurs jours des femmes enceintes, des enfants dont des b\u00e9b\u00e9s sont sans h\u00e9bergement ... Parce que cette situation est insupportable, nous av",
		output: "l'autrecantine",
	},
	{
		input:
			"Pas de titre pour 961 Pas de titre pour 960 ON N'EST PAS VENU EN PRISON POUR TRAVAILLER ! ou pourquoi j'ai br\u00fbl\u00e9 les ateliers de la prison de Clairvau",
		output: "anonymous",
	},
	{
		input:
			"Ce mercredi dans le magazine libertaire\u00a0: Pr\u00e9sentation et lectures d\u2019extrait du livre Le travailleur de l\u2019extr\u00eame de \u00c4ke Anst\u00e4llning Chronique sur l\u2019i",
		output: "maglib",
	},
	{
		input:
			"Les actuelles manifestations contre le gouvernement, \u00e0 propos du CPE et de sa politique ignoble depuis quatre ans, rendent tr\u00e8s nerveux les partisans ",
		output: "verdi",
	},
	{
		input:
			"Tout cela avec la \"bienveillante\" participation d'enedis encore une fois! Pour rappel, c'est bien le Dioc\u00e8se qui fait preuve de mauvaise foi (!) puisq",
		output: "l'autrecantine",
	},
	{
		input:
			'[Photo : hier soir \u00e0 Ankara. "Katil devlet" : \u00c9tat assassin !] Depuis des ann\u00e9es, alors que les luttes gagnent en intensit\u00e9 sur le sol turc \u2013 on se so',
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Bure encercl\u00e9 par les flics au petit matin, plus d\u2019une centaine de GM d\u00e9ploy\u00e9s dans toute la zone \u00c0 la Maison de r\u00e9sistance, ils ont justifi\u00e9 leur ent",
		output: "...",
	},
	{
		input:
			"Voici un petit r\u00e9sum\u00e9 des informations et du programme de la journ\u00e9e ! VILLAGE DES LUTTES Il se tiendra tout l'apr\u00e8s-midi \u00e0 partir de 12h au Miroir d'",
		output: "x",
	},
	{
		input:
			"Voil\u00e0 une semaine que des affrontements opposent des gentes d\u00e9termin\u00e9-e-s aux forces casqu\u00e9es du gouvernement. Depuis la prise de la Sorbonne et son \u00e9",
		output: "anonymous",
	},
	{
		input:
			"Vous pouvez causer avec le studio et entre auditeur\u00b7rice\u00b7s sur https://webchat.cyberguerrilla.org/#cayenne Et toujours les news et podcasts sur https:",
		output: "k-hy\u00e8ne",
	},
	{
		input:
			"\u00a0 La manifestation de plusieurs milliers de personne d\u00e9marre place Bretagne pour se rendre place Aristide Briand. Alors que les manifestants d\u00e9filaien",
		output: "streetmedicsnantes",
	},
	{
		input:
			"dans la cour Fleury, le 4 avril 2017 Br\u00e8ve D\u00e9claration. J'aimerai que les gens sachent que je ne suis pas en accord avec les d\u00e9clarations que j'ai fai",
		output: ".",
	},
	{
		input:
			"A 06h30, le 3 mai, plusieurs \u00e9quipes d'agents de police coordonn\u00e9es par le ROS(criminalit\u00e9 organis\u00e9e et anti-terrorisme) et la Digos ( renseignement),",
		output: ".",
	},
	{
		input:
			"Lettre de Nabil (d\u00e9but f\u00e9vrier) : \u00ab A l\u2019attention du directeur de la Direction Interregionale des Services P\u00e9nitentiaires. Monsieur le Directeur, Je v",
		output: "x",
	},
	{
		input:
			"Concert de soutien \u00e0 m. O.P.A + Juste Barthab - Concert de soutien \u00e0 m.Jeudi 17 septembre 2015 - L\u2019Inglourious BarStar4 place Andr\u00e9 Meunier - Bordeaux",
		output: "o.p.a",
	},
	{
		input:
			"Rappelons que ces nouveaux b\u00e2timents collectifs sont appel\u00e9s \u00e0 devenir un carrefour pour les opposant.e.s et une antenne pour organiser la r\u00e9sistance ",
		output: "zadist",
	},
	{
		input:
			'un tag "feu aux prisons" y a \u00e9t\u00e9 accoll\u00e9. \u00a0 Solidarit\u00e9 avec toutes les personnes enferm\u00e9es, courage \u00e0 celles qui sont en cavale.',
		output: ".",
	},
	{
		input:
			"Depuis quand les keufs sont nos amis ? Depuis quand s'acoquine t-on avec l'ennemi ?Mais je vais cesser de suite de parler au \u00ab on \u00bb, car il est \u00e9viden",
		output: "...",
	},
	{
		input:
			"Pas de titre pour 12271 Pas de titre pour 12256 Pas de titre pour 12255 Pas de titre pour 12254 Pas de titre pour 12253 Pas de titre pour 12252 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"https://radiocayenne.noblogs.org/post/2018/06/17/emission-du-4-juin-zad-et-violences-policieres-expulsions-des-exile-e-s-mouvement-etudiant-news-de-li",
		output: "radiocayenne",
	},
	{
		input:
			"En r\u00e9sum\u00e9, le petit cadenas qui devait assurer la confidentialit\u00e9 des \u00e9changes (quand vous vous connectez \u00e0 votre mail par exemple, en allant sur http",
		output: "anonyme",
	},
	{
		input:
			"L'\u00c9tat, par le biais de l'OCLCTIC, attendait cette d\u00e9cision pour mettre \u00e0 ex\u00e9cution sa menace de priver les mouvements sociaux de ces outils devenus d",
		output: "(((i)))",
	},
	{
		input:
			"La man\u0153uvre de Ouest-France est claire : instrumentaliser ce cas pour frapper sur les manifestations en g\u00e9n\u00e9ral. Pour discr\u00e9diter celles et ceux qui s",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Passe le temps et les g\u00e9n\u00e9rations\u2026 Passent les diff\u00e9rents pouvoirs politiques (qui toujours te regardent de haut, te m\u00e9prisent)\u2026 Port\u00e9.e.s par l\u2019imp\u00e9r",
		output: "cnca",
	},
	{
		input:
			"[Nantes] Repas du R\u00e9seau Solidarit\u00e9 Logement Rencontre du r\u00e9seau pour parler probl\u00e8mes de logement et trouver des solutions concr\u00e8tes, se rencontrer l",
		output: "(((i)))",
	},
	{
		input:
			"Illustration de la volont\u00e9 de l'UMP d'\u00e9radiquer, non pas le ch\u00f4mage, mais les ch\u00f4meurs : cette odieuse attaque du d\u00e9put\u00e9 UMP de la Creuse Jean Auclair",
		output: "verdi",
	},
	{
		input:
			"Barcelone : Journ\u00e9es Anarcho-f\u00e9ministes - 100 ans de CNT Martha Ackelsberg, Ana Sig\u00fcenza, Antonia Rodrigo, le Colectivo Juana Julia Guzm\u00e1n de Colombie",
		output: "cnt",
	},
	{
		input:
			"\u00a0 L'audition du 31/05 s'est bas\u00e9 sur la pr\u00e9sentation des t\u00e9moins. Le juge qui pr\u00e9side la court, A Yfanti, a encore une fois utilis\u00e9 la ruse dans le bu",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"Le 19\u00a0juin est la journ\u00e9e internationale des prisonniers r\u00e9volutionnaires. Cette date est un jalon important de lutte dont se saisit chaque ann\u00e9e la c",
		output: "collectif",
	},
	{
		input:
			"UN SPECTRE HANTE LA VILLE DE RENNES : c\u2019est le spectre de Bacchus, le dieu couronn\u00e9 de grappes, avec sa suite de satyres et de sil\u00e8nes ; le dieu de l\u2019",
		output: "institutded\u00e9mobilisation",
	},
	{
		input:
			"Loi Fioraso et d\u00e9ficit des universit\u00e9s\u00a0: un nouveau coup dur pour les universit\u00e9s, les personnels et les \u00e9tudiant-e-s \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Genevi\u00e8v",
		output: "...",
	},
	{
		input:
			"JOURNAL Les textes devront contenir un maximum de 2 pages \u00e0 interligne 1.5, avec la typographie Times New Roman 12pt. et peuvent \u00eatre \u00e9crit en fran\u00e7ai",
		output: "anonyme",
	},
	{
		input:
			"Fin ao\u00fbt 2009, le juge d\u2019instruction antiterroriste Brunaud, qui s\u2019occupe de l\u2019affaire de janvier 2008 (fumig\u00e8nes, d\u00e9panneuse\u2026 pour rappel, voir http:",
		output: "anonyme",
	},
	{
		input:
			"Par ailleurs, apr\u00e8s la manifestation, une autre compagnie de flics s\u2019est post\u00e9e \u00e0 la sortie de la station de m\u00e9tro de Villejean, pr\u00e8s de la fac de Ren",
		output: "dispac'h",
	},
	{
		input:
			"La police, qui a enregistr\u00e9 dix-huit plaintes, a men\u00e9 l\u2019enqu\u00eate et a pu confondre une jeune femme du milieu d\u2019extr\u00eame gauche, gr\u00e2ce \u00e0 la cam\u00e9ra d\u2019une ",
		output: "attaque",
	},
	{
		input:
			"Au programme de cette deuxi\u00e8me \u00e9mission de la saison : \u00a0\u00c7a se passe comme \u00e7a chez Michelin : deux salari\u00e9\u00b7e\u00b7s sanctionn\u00e9\u00b7e\u00b7s apr\u00e8s des accidents de tr",
		output: "maglib",
	},
	{
		input:
			"Appel \u00e0 mobilisations Il y a une quarantaine d'ann\u00e9es, deux projets similaires voyaient le jour, \u00e0 5000km l'un de l'autre. Au Qu\u00e9bec, \u00e0 Mirabel, et en",
		output: "camille",
	},
	{
		input:
			"Cette photo a \u00e9t\u00e9 prise le 2 juin 2016, \u00e0 Oullins, \u00e0 c\u00f4t\u00e9 de Lyon, lors d'une manifestation \u00e0 l'occasion de la venue d'Emmanuel Macron. Cette arme ten",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pendant ce temps les merdias aux ordres collaborent et r\u00e9\u00e9crivent l'histoire selon la version de leurs maitres . La c\u00e9gette se fait attaquer par les f",
		output: "anonyme",
	},
	{
		input:
			"Urbs rhedonum resurgens, incendenda. 1. Dans la foul\u00e9e de la r\u00e9alisation d'un tr\u00e8s dispensable Centre des congr\u00e8s d'affaires en lieu et place du Couve",
		output: "institutded\u00e9mobilisation",
	},
	{
		input:
			"\u00a0 Contre la gentrification de nos espaces de vie, et en esp\u00e9rant que \u00e7a donnera des envies !",
		output: ".",
	},
	{
		input:
			"Chat sur le salon #cayenne \u00e0 https://chat.koumbit.net \u00a0 Le blog : https://radiocayenne.noblogs.org Email de contact: radiocayenne_AT_riseup.net",
		output: "radiocayenne",
	},
	{
		input:
			"Le 20 janvier dernier au Ch\u00e2teau de Versailles, le pr\u00e9sident Macron accueillait lors du sommet \u00ab Choose France \u00bb 200 grandes fortunes industrielles, d",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Nous devons maintenant nous mobiliser contre l\u2019accusation de \u00ab mohareb \u00bb ou \u00ab ennemie de dieu \u00bb port\u00e9 contre la jeune journaliste iranienne Shiva Naza",
		output: "solidarit\u00e9aveclaluttedupeupleiranien",
	},
	{
		input:
			"\u00a0 Le 28 janvier, des \u00e9tudiant-e-s de sociologie se mobilisent spontan\u00e9ment contre la d\u00e9gradation de leurs conditions d'\u00e9tudes (TD surcharg\u00e9s, suppress",
		output: "...",
	},
	{
		input:
			"Juge\u00a0: St\u00e9phane\u00a0 LORENTZProcureur\u00a0: DUPIREAvocat (commis d'office) des 3 pr\u00e9venu-e-s\u00a0: Matthieu CREACHAvocat des flics\u00a0: petite surprise, il ne s'agit",
		output: "legalteam",
	},
	{
		input:
			"Ce samedi 1er juin, on est all\u00e9es \u00e0 quelques personnes lire \u00e0 plusieurs voix le texte qui suit au d\u00e9but de la pr\u00e9sentation du nouveau bouquin du colle",
		output: ".",
	},
	{
		input:
			"T\u00e9moignage du proc\u00e8s du 06 juillet 2018 Juge\u00a0: MonchyProcureur\u00a0: BonhommeAvocate de la partie civile\u00a0: Hupp\u00e9 pour\u00a0: Recune et Daniel Inculp\u00e9s\u00a0: B, M, ",
		output: "legalteam",
	},
	{
		input:
			"L'IDEOLOGIE ULTRA-LIBERALE DE L'ULTRA-DROITE EST UN ACTE DE TERRORISME PERMANENT CONTRE L'ETRE HUMAIN. VIVE LA LIBERTE le site de Verdi t\u00e9moigne de l'",
		output: "verdi",
	},
	{
		input:
			"Sous pression pour mieux purger sa plateforme des contenus et mouvements racistes, Facebook a d\u00e9clar\u00e9 mardi avoir banni des groupes d'extr\u00eame droite a",
		output: "x",
	},
	{
		input:
			"Bulletin num\u00e9ro 168, d\u00e9cembre 2017/ janvier 2018, du r\u00e9seau R\u00e9sistons Ensemble. Form\u00e9 en 2002, R\u00e9sistons Ensemble a pour but d'informer, de briser l'i",
		output: "r\u00e9seaure",
	},
	{
		input:
			"8 7 6 5 4 3 2 1 Dans la foule des homophobes : des femmes en haillons, enchain\u00e9es (symbole ambigu dans cette manif de r\u00e9actionnaires nostalgiques), be",
		output: "jackpalmer",
	},
	{
		input:
			"Parmi elles, deux personnes sont accus\u00e9es de d\u00e9gradations sur l\u2019ensemble de cette p\u00e9riode, dont l\u2019une arr\u00eat\u00e9e le soir de la f\u00eate de la musique 2013 et",
		output: "..",
	},
	{
		input:
			"URGENT Des v\u00e9los\u00a0!!! Une caravane Des bottes et des chaussettes Du chocolat et du tabac Pisses-debouts Appel Faire des impressions de cartes, affiches",
		output: "zadist",
	},
	{
		input:
			'"Avec ce froid, ils sont inconscients d\u2019avoir volontairement saut\u00e9 dans le fleuve" nous expliquait un sapeur pompier le 3 novembre. Cet acte volontair',
		output: "iaata",
	},
	{
		input:
			"{{Lettre ouverte \u00e0 un aboyeur public de plateaux t\u00e9l\u00e9s.}} \u00ab La loi conserve, la r\u00e9volution r\u00e9g\u00e9n\u00e8re. Si l'on veut donc changer, il faut commencer par ",
		output: "anonyme",
	},
	{
		input:
			"toutes les dates du groupe culte affichent complets depuis belle lurette, Toulouse, Paris,Lyon,Douai,Amn\u00e9ville, mais \u00e0 Nantes si t'es pas branch\u00e9 \"cla",
		output: "anonymous",
	},
	{
		input:
			"Elles se sont \u00e9clips\u00e9es au moment o\u00f9 la nuit commen\u00e7ait \u00e0 s'\u00e9clairer. Nombreuses sont les raisons, et les mani\u00e8res, de s'attaquer \u00e0 la mairie... et au",
		output: "x",
	},
	{
		input:
			"L'intense et croissante pression qu'exercent les organisations sociales et populaires sur l'administration du n\u00e9olib\u00e9ral Carlos Mesa a cpmmenc\u00e9 \u00e0 port",
		output: "fab",
	},
	{
		input:
			"Vendredi 19 septembre, la juge du p\u00f4le antiterroriste Marie-Antoinette Houyvet convoque en urgence Ivan et Farid suite \u00e0 un rapport de police constata",
		output: "anonyme",
	},
	{
		input:
			"Le 14 juin, devant l\u2019Universit\u00e9 autonome Benito Juarez, \u00e0 Oaxaca, plusieurs groupes anarchistes ont protest\u00e9 contre la violence de l\u2019\u00c9tat, en souvenir",
		output: ".",
	},
	{
		input:
			"cliquez sur l'image pour l'agrandir On l'a compris d\u00e9sormais, la police nantaise, ayant \u00e9trangement renonc\u00e9 \u00e0 dissuader et \u00e0 identifier les auteurs d'",
		output: "anonyme",
	},
	{
		input:
			"L'Etat \u00e0 la fois juge et partie\u00a0 Il est \u00e0 la fois porteur du projet d'a\u00e9roport et organisateur\u00a0 de la consultation. Les m\u00eames qui m\u00e8nent le projet de ",
		output: "zadist",
	},
	{
		input:
			"(extraits). \"Dans les ann\u00e9es \u00e0 venir, nous assisterons au d\u00e9veloppement des luttes dans de nombreux secteurs de l'\u00e9conomie. Il y a des limites \u00e0 la pa",
		output: "verdi",
	},
	{
		input:
			"Partout, en \u00ab une \u00bb des journaux, en boucle sur les \u00e9crans, dans la bouche des politiciens : les vitres \u00e9toil\u00e9es d'un h\u00f4pital. Jusqu'\u00e0 l\u2019\u00e9c\u0153urement. U",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le 19 mars 2009, nous avons connu une mobilisation de grande envergure et plus forte que le 29 janvier 2009. 75000 \u00e0 Nantes, 25000 \u00e0 Saint-Nazaire, 40",
		output: "anonyme",
	},
	{
		input:
			"17 Avril, St Denis, La R\u00e9union : les manifestants pique-niquent devant la pr\u00e9fecture o\u00f9 De Robien participe \u00e0 un repas r\u00e9publicain, intervention muscl",
		output: "anonymous",
	},
	{
		input:
			"Nous publions ci-dessous la traduction d'un article de Communist Internationalist, organe de presse du CCI en Inde. Deux cent cinquante mille travaill",
		output: "unsympathisantducci",
	},
	{
		input:
			"Pas de titre pour 3369 53% des enfants londoniens vivent sous le seuil de pauvret\u00e9, soit 300 000 enfants pauvres. Voil\u00e0 leur mod\u00e8le! Gauche lib\u00e9rale (",
		output: "verdi",
	},
	{
		input:
			"Y a des jours comme \u00e7a o\u00f9 le \u00ab tous ensemble, tous ensemble \u00bb saute aux yeux comme une arnaque.Y a des jours comme \u00e7a o\u00f9 celles et ceux qui \u00e9crasent n",
		output: "anonyme",
	},
	{
		input:
			'Au moment o\u00f9, dans beaucoup de pays, les m\u00e9dias font, jour apr\u00e8s jour, leurs gros titres sur le "s\u00e9isme" du "scandale DSK", un autre "s\u00e9isme", r\u00e9el, f',
		output: "unsympathisantducci",
	},
	{
		input:
			"Lors de cette journ\u00e9e historique, nous avons pu assister pour la toute premi\u00e8re fois \u00e0 l'exp\u00e9rimentation et \u00e0 l' \"application\" de strat\u00e9gies et tactiq",
		output: "guitoto",
	},
	{
		input:
			"Ce texte s'adresse aux personnes qui soutiennent et/ou pratiquent l'attaque.Il\u00a0se\u00a0veut\u00a0\u00eatre\u00a0une\u00a0r\u00e9flexion\u00a0plus\u00a0globale\u00a0sur\u00a0le\u00a0choix\u00a0des\u00a0cibles.Il ne p",
		output: ".",
	},
	{
		input:
			"PARIS, 1 mai 2007 (AFP) - 15h48 Manifestation de quelque 2.000 anarchistes \u00e0 Paris pour le 1er mai Environ 2.000 manifestants anarchistes, selon la pr",
		output: "anonyme",
	},
	{
		input:
			"En effet\u00a0: L\u2019UJFP consid\u00e8re que dans la conjoncture actuelle de racisme exacerb\u00e9, il \u00e9tait n\u00e9cessaire d\u2019affirmer sa solidarit\u00e9 avec les Musulmanes et ",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"Extrait de L\u2019Est r\u00e9publicain du 28 septembre 2019 (version en ligne). Le lendemain, le quotidien r\u00e9gional n\u2019a pu que r\u00e9trop\u00e9daler en titrant, toujours",
		output: "@nonyme",
	},
	{
		input:
			"Attention, les extraits qui suivent sont les paroles de magistrats dans le cadre d\u2019une instruction. Leurs mots et leurs logiques ne sont pas les n\u00f4tre",
		output: "anonyme",
	},
	{
		input:
			'Par ailleurs, nous entendons beaucoup parler de mouvement de troupes et de volont\u00e9 d\'"expulser au plus vite a\u00e9roport ou pas". Au-del\u00e0 de toute consid\u00e9',
		output: "zadist",
	},
	{
		input:
			"affiche-manif-reoccup Pour t\u00e9l\u00e9charger les affiches, tracts et pour consulter les informations qui restent \u00e0 d\u00e9finir : http://zad.nadir.org/ La lutte ",
		output: "zadist",
	},
	{
		input:
			"- Cet \u00e9narque issu d'une grande famille aristocratique prend ses fonctions le 7 novembre 2018. Le soir m\u00eame, une manifestation en soutien aux r\u00e9fugi\u00e9s",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Oppos\u00e9e \u00e0 l\u2019\u00e9cologie r\u00e9sign\u00e9e des ONG, une g\u00e9n\u00e9ration a pris pour mot d\u2019ordre : \u00ab pas de compromis dans la d\u00e9fense de la terre ! \u00bb. Blocages de pellet",
		output: "anonyme",
	},
	{
		input:
			"Le gouvernement d\u00e9clare ne plus vouloir attendre les appels des recours contre le projet d\u2019a\u00e9roport, ce qui constituerait une rupture des engagements ",
		output: "zadist",
	},
	{
		input:
			"Il semble que ce soit le webjournal Breiz Atao , dont le fondateur Boris Le lay a r\u00e9cemment \u00e9t\u00e9 condamn\u00e9 pour injure raciale (voir aussi ici), qui se ",
		output: "@",
	},
	{
		input:
			"L\u2019hiver ne nous pousse pas \u00e0 hiberner, mais bien plus \u00e0 envisager avec joie le printemps et toutes les r\u00e9jouissances qui vont l\u2019accompagner. Apr\u00e8s le ",
		output: "notht",
	},
	{
		input:
			"Quel meilleur moyen que les faits divers dont on sait (dans la presse) qu\u2019ils suscitent le plus grand int\u00e9r\u00eat et tirent les ventes ou l\u2019audience par l",
		output: "verdi",
	},
	{
		input:
			"Derniers appels :\u00a0 Appel \u00e0 Chantiers Fortifications \u00e0 la Gr\u00e9e [fr] https://web.archive.org/web/20180512001847/http://zad.nadir.org/spip.php?article577",
		output: "d\u00e9fendrelazad",
	},
	{
		input:
			"Les Chr\u00e9tiens sionistes Quand appara\u00eet le protestantisme, la Bible est traduite dans les diff\u00e9rentes langues europ\u00e9ennes. Ses \u00e9pisodes et ses personna",
		output: "pierrestambul",
	},
	{
		input:
			"Le mercredi 18 mai, apr\u00e8s avoir \u00e9t\u00e9 retard\u00e9 par une gr\u00e8ve des avocats, le proc\u00e8s pour la tentative d'\u00e9vasion des compagnons-gnes de la Conspiration de",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"Hier, mardi 3 juillet, un jeune homme a \u00e9t\u00e9 assassin\u00e9 par un CRS \u00e0 Nantes, dans le quarier du Breil. Une compagnie de CRS y avait \u00e9t\u00e9 d\u00e9plac\u00e9e il y a ",
		output: "x",
	},
	{
		input:
			"Dans la Cit\u00e9 des Ducs, le cort\u00e8ge part de la Place Bretagne avec beaucoup de retard. Quelques centaines de participants seulement, car beaucoup de nan",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Alors que le groupe de 50 personnes repartait \u00e0 l'issue du rassemblement, les participants se sont fait encercl\u00e9s par la police qui menace de les arre",
		output: "(((i)))",
	},
	{
		input:
			"Malgr\u00e9 le tableau d'une mine isol\u00e9e en pleine for\u00eat, il serait hypocrite de penser que la m\u00e9ga-mine dite de la \u00ab\u00a0Montagne d'or\u00a0\u00bb ne concerne que les 8",
		output: "...",
	},
	{
		input:
			"Regardez le Mondial ! Origine : http://www.grouchos.org/montagnepelee.htm Vous oublierez de vivre - Vous oublierez vos cha\u00eenes - Vous oublierez vos ma",
		output: "philippe",
	},
	{
		input:
			"\u00a0 Nous d\u00e9plorons que ces services n\u2019aient pas recherch\u00e9 la m\u00e9diation lors du contr\u00f4le du 11 mai. Au contraire c\u2019est l\u2019escalade dans les m\u00e9thodes et le",
		output: "*",
	},
	{
		input:
			"Notamment pour le lien que cette entreprise entretient avec le projet CIGEO, l\u2019enfouissement des d\u00e9chets radioactifs \u00e0 Bure \u00e9tant une \u00e9tape n\u00e9cessaire",
		output: "desanarchistes",
	},
	{
		input:
			"Pas de titre pour 3954 Pas de titre pour 3953 Pas de titre pour 3952 A savoir, une parcelle de 6000 m\u00b2 sur la commune de Neschers, une parcelle de 6 h",
		output: "anonymous",
	},
	{
		input:
			"Le Collectif \u00ab\u00a0Solidarit\u00e9 avec les Exil\u00e9s de Calais\u00a0\u00bb d\u00e9crit l'\u00e9v\u00e8nement dans un langage plus cru: \u00ab\u00a0Nous pensions avoir \u00e9t\u00e9 t\u00e9moins du pire avec la d",
		output: "anonyme",
	},
	{
		input:
			"Dans tes recherches tu \u00e9labores une g\u00e9n\u00e9alogie coloniale et militaire de l\u2019ordre s\u00e9curitaire contemporain. Quel r\u00f4le a jou\u00e9, \u00e0 cet \u00e9gard, la d\u00e9clarati",
		output: "anonyme",
	},
	{
		input:
			"L\u2019\u00e9mergence du cort\u00e8ge de t\u00eate comme sujet n\u2019a pas simplement concern\u00e9 les participants aux cort\u00e8ges de t\u00eate des quelques villes o\u00f9 il \u00e9tait pratiqu\u00e9.",
		output: "19h17",
	},
	{
		input:
			"\u00a0 Notre t\u00e2che est simple : \u0153uvrer par tous les moyens \u00e0 la prolongation de la gr\u00e8ve, \u00e0 sa prise en main par les gr\u00e9vistes eux-m\u00eames, \u00e9largir les front",
		output: "anonyme",
	},
	{
		input:
			"Ce qui a \u00e9t\u00e9 vis\u00e9 dans la nuit de Sivens, c\u2019est le scandale que repr\u00e9sente l\u2019existence m\u00eame des ZAD et leur possible diss\u00e9mination. Les ZAD et leurs p",
		output: "zadist",
	},
	{
		input:
			"Vous pourrez aussi rejoindre le chat sur https://chat.indymedia.org , channel #cayenne (les autes champs \u00e0 remplir avec votre pseudo) Retrouvez new et",
		output: "radiocayenne",
	},
	{
		input:
			"C\u2019est en fait plut\u00f4t dr\u00f4le que des r\u00e9formistes c\u00e9l\u00e8brent une date pareille, car le premier mai pour les anarchistes ce n\u2019est pas la f\u00eate du travail, m",
		output: "sansattendredemain",
	},
	{
		input:
			"Aujourd'hui ils en sont \u00e0 interdire les manifestations, pr\u00e9textant le fait que de nombreuses personnes aient d\u00e9cid\u00e9 d'exprimer leur col\u00e8re, d'\u00eatre un ",
		output: "anonyme",
	},
	{
		input:
			"http://ulnantes.cnt-f.org/spip.php?article185 Qu'est ce qui est vital, patron ? La construction d'avions, une activit\u00e9 vitale, qui ne pourrait pas att",
		output: "cntnantes",
	},
	{
		input:
			"Alimentaire : - Huile - Ail et OIgnons - Sauce et concentr\u00e9 de tomates - P\u00e2te d'arachide - L\u00e9gumes - Cubes halal - Epices - Sel et Poivre - Th\u00e9, caf\u00e9 ",
		output: "l'autrecantinenantes",
	},
	{
		input:
			"Camarades, liens vid\u00e9os : http://www.youtube.com/watch?v=AWmJY2G2XtU&eurl=http%3A...edded ; (> les ouvriers font des mini-barricades enflamm\u00e9es sur St",
		output: "guitoto",
	},
	{
		input:
			"INTELLIGENCE COLLECTIVE Pour \u00e9viter de se faire nasser et bombarder de gaz lacrymog\u00e8ne comme \u00e0 chaque manif, un appel in\u00e9dit et surprenant avait \u00e9t\u00e9 l",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Photo souvenir, voici l\u2019est de la zad le 23 juillet 2012. \u00e0 quoi \u00e7a ressemble quand un proprio fait du terrassement zone est Mardi 20\u00a0novembre, la cab",
		output: "zadist",
	},
	{
		input:
			"Notre Dame des Landes : Assurer le suivi des \u00abmesures de compensation\u00bb, c\u2019est pr\u00e9parer la construction de l\u2019a\u00e9roport ! Un laboratoire de l'universit\u00e9 ",
		output: "zadist",
	},
	{
		input:
			"\u00ab\u00a0Je n\u2019ai pas d\u00e9couvert le f\u00e9minisme en arrivant en France, ni en allant \u00e0 l\u2019universit\u00e9, \u00e7a faisait partie de ma vie.\u00a0\u00bb Comment est-on pass\u00e9 de lib\u00e9ra",
		output: "iaata",
	},
	{
		input:
			"Un salut incandescent \u00e0 tou-te-s les indomptables contre les prisons et la soci\u00e9t\u00e9 carc\u00e9rale, en particulier \u00e0 Anna, Silvia et tou-te-s les compagnon-",
		output: "sansattendre",
	},
	{
		input:
			"\u2026Et pour en finir avec l\u2019\u00e9cole il faut en finir avec le capitalisme. Nous continuons notre petite s\u00e9rie sur les luttes lyc\u00e9ennes, \u00e9tudiantes, etc, con",
		output: "19h17",
	},
	{
		input:
			"Les m\u00e9thodes employ\u00e9es par les vichystes au pouvoir pour rendre responsables les assur\u00e9s sociaux du soi-disant d\u00e9ficit de l'assurance maladie manquent",
		output: "verdi",
	},
	{
		input:
			"MALCOLM X (19 Mai 1925 - assassin\u00e9 le 21 f\u00e9vrier 1965) And you dare to call me coloured... \"When I'm born I'm Black, when I grow up I'm Black, when I'",
		output: "collectifbellaciao",
	},
	{
		input:
			"Ce soir comme tous les lundi soir, c'est Radio Cayenne ! Soir\u00e9e involontairement en non mixit\u00e9 meufs, on vous promet deux fois plus de fun que d'habit",
		output: "radiocayenne",
	},
	{
		input:
			"Une vingtaine de personnes vivent dans ce squat, un des plus anciens de Nantes, dont deux jeunes mineurs de l'\u00e9cole Hors les Murs. Cette expulsion a l",
		output: "anonyme",
	},
	{
		input:
			"Pour la troisi\u00e8me fois en quelques mois, la presse locale offre une couverture m\u00e9diatique affriolante \u00e0 la police nantaise. On se souvient de la publi",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Il n'y a eu que des d\u00e9g\u00e2ts mat\u00e9riels : le mur et malheureusement une partie de notre camionnette qui sert aux distributions ... L'intervention des pom",
		output: "l'autrecantine",
	},
	{
		input:
			"AffTempsdencre2019mini Pour que l\u2019id\u00e9e ne fl\u00e9trisse pas, il faut l\u2019action pour la revigorer. Pour que l\u2019action ne tourne pas en rond, il faut l\u2019id\u00e9e p",
		output: ".",
	},
	{
		input:
			"Occupation de la Maison du 32 Mars\u00a0: s\u2019organiser horizontalement contre la loi-travail A Toulouse, en tout d\u00e9but de semaine avait \u00e9t\u00e9 ouverte au 36 ru",
		output: "anonyme",
	},
	{
		input:
			"Qu'est qu'il devient Indymedia Grenoble ? Il est disparu ? Des nouvelles ?",
		output: "*",
	},
	{
		input:
			"EN MOINS BREF Les feuilles rougissent de plus belle chaque jour. Le vent fra\u00eechit. La nuit s\u2019\u00e9tire peu \u00e0 peu. Les brumes givrantes du matin pointent l",
		output: "vmc",
	},
	{
		input:
			"Avant......A-raok.... Apr\u00e9s...Goude... \"A l'heure ou la pr\u00e9sence de militaires fran\u00e7ais en armes dans nos rue sous couvert de lutte antiterroriste sem",
		output: "anonyme",
	},
	{
		input:
			"je trouve int\u00e9ressant que vous lanciez un d\u00e9bat sur la militance, quelques semaines apr\u00e8s le film sur Indymedia Argentine. Mais ce film, comme cette d",
		output: "anonymous",
	},
	{
		input:
			"Au total, ce sont 24 lieux qui ont \u00e9t\u00e9 perquisitionn\u00e9s au petit matin \u00e0 la demande de la commission sp\u00e9ciale \u00ab\u00a0Black Block\u00a0\u00bb. Regroupant plus de 160 p",
		output: "@nonyme",
	},
	{
		input:
			"Talca, 20/11 l'office du tourisme Valvidia, 15/11 le supermarch\u00e9 du BTP Sodimac Temuco, 14/11 la statue du h\u00e9ros de la marine chilienne Valvidia, 17/1",
		output: "solidari@s",
	},
	{
		input:
			"On arr\u00eate le suivi pour aujourd\u2019hui LA CGT annonce 1.5 million sur toute la France. A Toulouse elle parle de 100 000 personnes. Les keufs et la pref\u2019 ",
		output: "iaata",
	},
	{
		input:
			"Dpuis plusieurs nuits, des prolos vnr et dtr ont pris bien du fun et du plaisir ces nuits en sabotant les flux \u00e9nerg\u00e9tiques qui nous oppressent tou-te",
		output: "*",
	},
	{
		input:
			"pr\u00e9 failli incendi\u00e9 cabane sur l'eau 2.0 Perdre c\u2019est les laisser vaincre Il y a quelques semaines, Nicole Klein, pr\u00e9f\u00e8te de Loire-Atlantique se f\u00e9lic",
		output: "zadist",
	},
	{
		input:
			"\u00a0 CONVERGENCE \u00a0: action de tendre vers un m\u00eame but tout en partant de points diff\u00e9rents. \u00ab\u00a0Des droites parall\u00e8les convergent \u00e0 l\u2019infini.\u00a0\u00bb Si on ne pe",
		output: "x",
	},
	{
		input:
			"Untitled Document R\u00c9F\u00c9RENDUM C'EST LE BON MOMENT POUR FAIRE GR\u00c8VE\u00a0! \u00a0\u00a0\u00a0\u00a0\u00a0S'il y a des gr\u00e8ves s\u00e9rieuses avant le r\u00e9f\u00e9rendum, par peur que les gens aill",
		output: "do",
	},
	{
		input:
			"Depuis des mois, le gouvernement Macron multiplie les attaques contre les lyc\u00e9ens, les \u00e9tudiants, les retrait\u00e9s, les cheminots, les ch\u00f4meurs, les fonc",
		output: ".",
	},
	{
		input:
			"sinon : https://blog.torservers.net/20180704/coordinated-raids-of-zwiebelfreunde-at-various-locations-in-germany.html Coordinated raids of Zwiebelfreu",
		output: "*",
	},
	{
		input:
			"L\u2019adolescent qui manifestait \u00e0 l\u2019est de la ville de Khan Younis, dans le sud de la bande de Gaza, pr\u00e8s de la fronti\u00e8re, a re\u00e7u une balle dans le ventr",
		output: "secoursrouge",
	},
	{
		input:
			"D\u00e8s 6H30 des dizaines de personnes s'affairent \u00e0 bloquer les campus Lettres, Sciences Humaines, Langues et Droit. A 7H30 tout est bloqu\u00e9, les r\u00e9flexes",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			'"Si les m\u00e9dias des zadistes en parlent \u00e7a va \u00eatre un indice local d\'indignation "\u00a0\u00a0 Entendu ce matin dans les arcanes du pouvoir national. 1) Pour la ',
		output: "*",
	},
	{
		input:
			"La place du Commando, devant la mer, quadrill\u00e9e par la police. Multiples contr\u00f4les. Arrestations pr\u00e9ventives de personnes trouv\u00e9es avec une banderoles",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Certes ces gens sont d\u00e9sesp\u00e9r\u00e9s, ils ne sont pas idiots... Avec l'aide du DAL, ils avaient obtenu du temps pour se reconstruire, rester \u00e0 l'abri, rech",
		output: "dal44",
	},
	{
		input:
			"Johanna Rolland a d\u00e9pos\u00e9 aujourd\u2019hui un recours pour demander l\u2019expulsion du Square, (contrairement \u00e0 ce qu\u2019elle avait promis dans les m\u00e9dias) et relo",
		output: "l'autrecantine",
	},
	{
		input:
			"Accus\u00e9s d\u2019avoir organis\u00e9 des r\u00e9seaux anarchistes avec l\u2019intention de renverser le pouvoir, Dmitry Pchelintsev, 27 ans, Ilya Shakursky, 23 ans, Andrei ",
		output: "a",
	},
	{
		input:
			"\u2022 La candidate, Eleonore Revel, \u00e9tait pr\u00e9sente r\u00e9cemment lors d\u2019une attaque aux c\u00f4t\u00e9s de groupes violents (il s\u2019agit de l\u2019attaque du 1er d\u00e9cembre cont",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0KLX: #InfoTrafflic de https://radioklaxon.antirep.net/\u00a0TWT: autres sour",
		output: "zad",
	},
	{
		input:
			"Pour l\u2019occasion, le collectif du Jardin des Ronces s\u2019associe \u00e0 des amis artistes, habitu\u00e9s des festivals de jardin ! Que l\u2019on soit sp\u00e9cialiste de la b",
		output: "roncier",
	},
	{
		input:
			"Cet acte n'a rien \u00e0 voir avec les \u00e9lections l\u00e9gislatives, dont on se fout. Ce n'\u00e9tait pas cette mairie en particulier qui \u00e9tait vis\u00e9e. Tous les jours ",
		output: ".",
	},
	{
		input:
			"SYNOPSIS Ce documentaire d'auteur DIY, aux confluents du film anthropologique occidental et de la qu\u00eate personnelle, examine la r\u00e9alit\u00e9 des femmes qui",
		output: ".",
	},
	{
		input:
			"Photo d'un gymnase \u00e0 Cachan en 2016 // Picture from a gymnasium opened temporarily by the prefecture in Cachan, 2016. [Communiqu\u00e9 de L'Autre Cantine s",
		output: "l'autrecantine",
	},
	{
		input:
			"\u00a0 Entre le 9 mars et le 5 juillet, quatre mois se sont \u00e9coul\u00e9s, qui ont vu le mouvement social le plus intense de ces dix derni\u00e8res ann\u00e9es. Le projet ",
		output: "desanarchistes",
	},
	{
		input:
			"Le mur d'apartheid Dans notre association, nombreux/ses parmi les plus \u00e2g\u00e9-e-s sont des enfants cach\u00e9s pendant l\u2019occupation ou des enfants de rescap\u00e9-",
		output: "ujfp",
	},
	{
		input:
			"Mobilisation contre la r\u00e9forme des universit\u00e9s : [->http://www.eurowiki.com/lru] Info Facs, l'info sociale sur les facs : [->http://www.infofac.new.fr",
		output: "anonyme",
	},
	{
		input:
			"Action vendredi 29 mars devant le si\u00e8ge social du groupe Etienne Lacroix \u00e0 MURET Action \u00e0 l\u2019initiative de bless\u00e9-es, de leurs proches, de leurs soutie",
		output: "acab",
	},
	{
		input:
			"Il y a trente ans, lorsque Richard Stallman[4] a lanc\u00e9 le projet GNU, et pendant les trois d\u00e9cennie qui ont suivi, ses vues radicales et parfois extr\u00ea",
		output: "anonyme",
	},
	{
		input:
			"En avril dernier, la procureure de Nantes Brigitte Lamy choisit de ne pas poursuivre les policiers qui ont \u00e9borgn\u00e9 les manifestant-e-s anti-a\u00e9roport d",
		output: "...",
	},
	{
		input:
			"Une premi\u00e8re application appel\u00e9 \u201cDesk Time\u201d permet de faire des captures d\u2019\u00e9cran des ordinateurs des salari\u00e9s, ainsi que de voir quelles applications ",
		output: "secoursrouge",
	},
	{
		input:
			"Photo Action de soutien \u00e0 la ZAD : un engin de chantier, stationn\u00e9 dans le cadre du r\u00e9am\u00e9nagment du centre ville de Poitiers, a \u00e9t\u00e9 incendi\u00e9 dans la n",
		output: "anonyme",
	},
	{
		input:
			"Les organisateurs saluent les plus de 60 000 personnes qui se sont d\u00e9plac\u00e9es, parfois de tr\u00e8s loin (68 cars venus de toute la France), pour apporter l",
		output: "zadist",
	},
	{
		input:
			"Ahmad Sa\u2019adat Dans le cadre de la campagne \u00e9lectorale, la r\u00e9pression contre les prisonniers palestinien a augment\u00e9 pour inclure des invasions de cellu",
		output: "secoursrouge",
	},
	{
		input: "NO PASARAN",
		output: "a",
	},
	{
		input:
			"Dans un communiqu\u00e9 diffus\u00e9 ce jour, la pr\u00e9fecture annonce que depuis le 17 novembre, il y a eu, pour la Loire-Atlantique: 76 interpellations suivies, ",
		output: "acab",
	},
	{
		input:
			"L\u2019attitude de la mairie socialiste est obsc\u00e8ne, volontairement provocatrice. Quel est l\u2019objectif de la municipalit\u00e9 si ce n\u2019est d\u2019humilier celles et c",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Certain.e.s ont eu un papier \u00e0 8h comme quoi ils doivent contacter le SIAO (115)... c'est-\u00e0-dire pas de proposition de logement. Des familles sont ori",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Des milliers de jeunes majeurs scolaris\u00e9s d\u00e9bout\u00e9s du regroupement familial qui risquent l'expulsion \u00e0 tout moment. Des milliers d'\u00e9tudiants priv\u00e9s de",
		output: "anonymous",
	},
	{
		input:
			"Pour toi camarade validiste, voici une nouvelle qui va te r\u00e9jouir, une feignasse de plus qui se barre, du moins c'est ce que tu te diras, toi qui juge",
		output: "!",
	},
	{
		input:
			"En avril 2012, des prisonniers du centre de d\u00e9tention remettent anonymement \u00e0 la juge d'application des peines et au directeur du centre de d\u00e9tention ",
		output: "x",
	},
	{
		input:
			"104 personnes recherch\u00e9es par la police La police annonce sur son site internet chercher \u00e0 identifier 104 personnes, dont elle publie des photos\u00a0: l\u2019o",
		output: ".",
	},
	{
		input:
			"Depuis le d\u00e9but du mouvement des retraites, on a fait des lives et pris du son en manif ou action sur Nantes. Nos montages sont rassembl\u00e9s sur une pag",
		output: "radiocayenne",
	},
	{
		input:
			"Soir du 26 juin 2016\u00a0: Grosse f\u00eate \u00e0 la fin du week-end de chantiers collectifs Refaire un d\u00f4me, malgr\u00e9 l'annonce du oui majoritaire. Ce qu'\u00e9voque le ",
		output: "zadist",
	},
	{
		input:
			"contrairement a ce qu'on peut lire ici et la a propos de l'attentat contre charlie hebdo, le blasph\u00e8me est r\u00e9prim\u00e9 en france trouv\u00e9 sur l\u00e9gifrance : J",
		output: "ahadhaam",
	},
	{
		input:
			"Le 14 avril dernier vers 22h, apr\u00e8s une journ\u00e9e de manifestations, plusieurs centaines de personnes partent en manif sauvage vers le canal Saint-Marti",
		output: "solidarite",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 70 / d\u00e9cembre 2008 - \u00ab La censure la plus parfaite \u00bb (Debord) - Incendie de Vincennes : les inculp\u00e9s ont maintena",
		output: "r\u00e9seaur\u00e9sistonsensemble",
	},
	{
		input:
			"Ce n'est pas moins de la 9\u00e8me expulsions en 5 mois \u00e0 Nantes qui cible directement les exil\u00e9-es apr\u00e8s les deux expulsions du Square Daviais, de Cap 44,",
		output: "l'autrecantine",
	},
	{
		input:
			"Dans d'autres circonstances, ce texte aurait \u00e9t\u00e9 \u00e9crit par Lutte R\u00e9volutionnnaire. Toutefois, le r\u00e9sultat de la tentative de faire \u00e9vader le camarade ",
		output: ".",
	},
	{
		input:
			"13 12 11 10 9 8 7 6 5 4 3 2 1 D\u00e8s 15h30, la Place Royale/du Peuple est d\u00e9cor\u00e9e de banderoles (photo 2). Une table d'informations contre les r\u00e9pression",
		output: "jackpalmer",
	},
	{
		input:
			"On entendra aussi Macron et d'autres, pour qui la solidarit\u00e9 rime incontestablement avec la suppression de l'imp\u00f4t sur la fortune et puis quelques son",
		output: "radiocayenne",
	},
	{
		input:
			"Du beau b\u00e9ton peint sur en vert sur 110 hectares de zones naturelles\u2026 Source : https://nantes.maville.com/actu/actudet_-l-amenagement-du-carnet-une-au",
		output: "collectifterrescommunes",
	},
	{
		input:
			"d'autres l\u00e9gumes sont moins \u00e0 l'abris... des l\u00e9gumes \u00e0 l'abris de la pluie ;) La tentative de monter un chapiteau pour tou-te-s a h\u00e9las du s il y avai",
		output: "jackpalmer",
	},
	{
		input:
			"L\u2019ann\u00e9e \u00e9coul\u00e9e aura \u00e9t\u00e9 pour notre organisation celle de notables transformations puisque nous nous sommes impliqu\u00e9s dans un nouveau mode de fonction",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"En coordination avec le collectif de m\u00e9dias anarchistes RadioFragmata, nous pr\u00e9sentons le compte-rendu suivant venu de Gr\u00e8ce. Ce dernier d\u00e9crit les ac",
		output: "crimethinc",
	},
	{
		input:
			"Le jeudi 9 janvier, Radio Cayenne sera en direct \u00e0 partir de 9h. Pour \u00e9couter : https://radiocayenne.antirep.net Vous pouvez donner des infos sur les ",
		output: "radiocayenne",
	},
	{
		input:
			"La majorit\u00e9 de ces perquisitions et expulsions ont \u00e9t\u00e9 effectu\u00e9es sans aucun ordre faisant suite \u00e0 une d\u00e9cision de justice. L\u2019ordre provenait du juge ",
		output: "anonyme",
	},
	{
		input:
			"Oui, ces harc\u00e8lements nous mettent en (n/r)age, nous \u00e9touffent, nous font penser qu\u2019ils peuvent tenter d\u2019expulser ou d\u00e9truire les constructions de la ",
		output: "vmc",
	},
	{
		input:
			"Terre et Libert\u00e9 ! Depuis 20 ans, l\u2019ANDRA nettoie le territoire pour creuser sa poubelle nucl\u00e9aire Depuis 20 ans l\u2019Agence Nationale de Gestion des D\u00e9c",
		output: "vmc",
	},
	{
		input:
			"(Des photos sont publi\u00e9es sur le site : http://zad.nadir.org ) D\u00e8s 9h du matin, des milliers de manifestant-e-s ont converg\u00e9 vers le bourg de Notre-Da",
		output: "zadist",
	},
	{
		input:
			"Rappel des faits : Depuis janvier 2008, sept personnes sont mises en examen dans le cadre d\u2019une instruction antiterroriste. Bruno, Ivan, Isa*, Farid*,",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Derniers podcasts : \u00c9mission du 4 mai : https://radiocayenne.noblogs.org/post/2020/05/09/podcasts-de-lemission-du-lundi-04-mai/ \u00c9mission sp\u00e9ciale d\u00e9di",
		output: "radiocayenne",
	},
	{
		input:
			'Il serait accus\u00e9 de "d\u00e9gradations", apparemment dans le cadre du mouvement contre la Loi travail. Plus d\'infos d\u00e9s que possible. \u00a0 Solidarit\u00e9 ! Nous n',
		output: "x",
	},
	{
		input:
			"5 4 3 2 1 Dans une chaleur lourde, derri\u00e8re une banderole \u00ab\u00a0Justice pour Cl\u00e9ment\u00a0\u00bb, le cort\u00e8ge, dynamique, d\u00e9termin\u00e9, exprimant tristesse et rage, s'\u00e9",
		output: "jackpalmer",
	},
	{
		input:
			"Alors que jeudi 5 d\u00e9cembre a \u00e9t\u00e9 marqu\u00e9 par une mobilisation historique et une gr\u00e8ve g\u00e9n\u00e9rale massive paralysant le pays, vendredi a \u00e9t\u00e9 ponctu\u00e9 d\u2019act",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"COMMUNIQUE DE PRESSE DU 25 FEVRIER 2005 PARIS Action de protestation contre les expulsions de squats, \u00e0 Paris et ailleurs dans la France enti\u00e8re Aujou",
		output: "anonyme",
	},
	{
		input:
			"1) La premi\u00e8re personne passait pour outrage sur personne d\u00e9positaire de l'autorit\u00e9 publique le 18 avril. Cette personne est actuellement d\u00e9tenue \u00e0 Re",
		output: "legalteam",
	},
	{
		input:
			"Alors, quel est l'objectif ? Permettre aux d\u00e9broussailleuses du Conseil D\u00e9partemental de venir tailler les haies en bordure de la route \u2026 Un tel dispo",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Les faits remontent au samedi 15 juin 2019, jour de la 4\u00e8me manifestation de soutien aux prisonniers politiques. Lorsque j\u2019\u00e9cris ces lignes au propre,",
		output: ".",
	},
	{
		input:
			"A bas les masperisateurs, \u00e0 bas les bureaucrates ! Souvent \u00e0 d\u00e9faut d'assumer des positions autoritaires, des lobbys, des milices secr\u00eates, une para-j",
		output: "*",
	},
	{
		input:
			"Apr\u00e8s 2 ans sans antenne, le magazine libertaire a repris son aventure radiophonique depuis la rentr\u00e9e 2019. Pour celles et ceux qui avaient rat\u00e9 l'in",
		output: "maglib",
	},
	{
		input:
			"Cap44 est un b\u00e2timent occup\u00e9 par des exil\u00e9.e.s depuis quelques semaines, situ\u00e9 en face de la carri\u00e8re Misery suite \u00e0 l'expulsion de Br\u00e9a par la pr\u00e9fec",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"l est non seulement accus\u00e9 d\u2019avoir mis le feu au restaurant McDonald\u2019s du Carr\u00e9 Feydeau et d\u2019avoir commis \u00ab\u00a0des violences sur un policier\u00a0\u00bb le 3 ao\u00fbt ",
		output: "sansattendredemain",
	},
	{
		input:
			"Les embrouilles qu'ils m'ont fait c'est suite \u00e0 un truc qui s'est pass\u00e9 en cours de promenade. C'\u00e9tait un matin, il y avait du monde, on \u00e9tait plusieu",
		output: "x",
	},
	{
		input:
			"On a beau savoir que les voitures polluent, qu\u2019elles sont des objets de consommation d\u00e9testables, force est de constater que celles et ceux qui p\u00e2tiss",
		output: "anonyme",
	},
	{
		input:
			"Le 12 septembre, Le 21 septembre, Le 25 septembre, Le 28 septembre (pour les retrait\u00e9-e-s)... Et, au d\u00e9part, le 10 octobre s'annon\u00e7ait comme une journ",
		output: "...",
	},
	{
		input:
			"Imposer l\u2019ineluctable Un grand concept sociologique de l\u2019am\u00e9nagement du territoire par les grandes entreprises, c\u2019est l\u2019acceptabilit\u00e9, ou comment fair",
		output: ".",
	},
	{
		input:
			"\u00ab Comme l'avait d\u00e9montr\u00e9 les diff\u00e9rentes composantes du mouvement, le cadre, le processus et le contenu de cette consultation \u00e9taient fondamentalement",
		output: "zadist",
	},
	{
		input:
			"A RENNES : ( legal team : defense-collective(at)riseup.net ) 20/09 : Rennes: interdiction de la soir\u00e9e \u00ab La d\u00e9fense collective en mouvement \u00bb ! 19 au ",
		output: "(((i)))",
	},
	{
		input:
			"Aujourd'hui, les fascistes d\u00e9filent librement dans la rue, tranquillement escort\u00e9s par une milice d'Etat aux ordres.R\u00e9pondant \u00e0 l'appel, du \u00ab jour de ",
		output: "actionantifascistenantes",
	},
	{
		input:
			"Parmi elles, 35 risquent de perdre totalement la vue. Au moins vingt personnes sont mortes depuis le d\u00e9but de la crise chilienne, et plus de 2.000 ont",
		output: "secoursrouge",
	},
	{
		input:
			"\u00c0 l\u2019arriv\u00e9e, d\u00e9chargement du foin, chargement du hangar et retour vers la zad par une autre route, par d\u2019autres tracteurs, avec d\u2019autres gens. Ce qui ",
		output: "zadist",
	},
	{
		input:
			"Le mois de juin des exil\u00e9.e.s \u00e0 NantesDepuis le 8 mars quelques 300 exil\u00e9.e.s occupent l'ancien EHPAD de Br\u00e9a, depuis d\u00e9but juin, fRance Horizon qui g",
		output: "nantesaveclesexil\u00e9.e.s",
	},
	{
		input:
			"Le compagnon est convoqu\u00e9 jeudi 9 janvier \u00e0 14h, au tribunal correctionnel de poitiers (4 boulevard de lattre de tassigny, ancien lyc\u00e9e priv\u00e9 des feui",
		output: ".",
	},
	{
		input:
			"Contrairement \u00e0 ce que leur nom indique, les grenades GLI-F4 contiennent de la TNT et explosent\u00a0! Leurs d\u00e9flagrations font 1m de diam\u00e8tre et peuvent t",
		output: "zadist",
	},
	{
		input:
			"Mais peu importe le blocage de l\u2019URL principale, puisque le site \u00e9tait relanc\u00e9 au nez et \u00e0 la barbe de l\u2019\u00c9tat en janvier 2012, sous une autre URL\u00a0: ht",
		output: "anonyme",
	},
	{
		input:
			"Juste avant le coup d\u2019envoi du match Br\u00e9sil-Croatie, la pr\u00e9sidente br\u00e9silienne Dilma Rousseff a \u00e9t\u00e9 siffl\u00e9e par une partie du public. Histoire de g\u00e2ch",
		output: "...",
	},
	{
		input:
			"Sur la place de la Bastille, les camions sonos braillent du Gala, Alec Benjamin et autres sons festifs entrecoup\u00e9s de slogans r\u00e9p\u00e9t\u00e9s au micro\u00a0: \u00ab\u00a0Pol",
		output: ".",
	},
	{
		input:
			"Pour nous la ZAD \u00e9tait d\u2019abord un mythe, c\u2019est-\u00e0-dire un r\u00e9cit qui d\u00e9passe sa r\u00e9alit\u00e9 et qui nous touche au-del\u00e0 d\u2019elle. Une histoire qui se racontait",
		output: ".",
	},
	{
		input:
			"Nos salutations vont \u00e0 toutes les personnes qui sont dans les taules des dominants, qui ne se d\u00e9couragent pas et s\u2019opposent chaque jour \u00e0 la r\u00e9pressio",
		output: "sansattendredemain",
	},
	{
		input:
			'"Je suis noire, en cas d\'urgence ne pas faire appel \u00e0 la police pour me secourir" Spliff in the sky Cerise sur le g\u00e2teau, un mondial organis\u00e9 par les ',
		output: "zadist",
	},
	{
		input:
			"Vous pouvez rejoindre le chat sur https://webchat.cyberguerrilla.org/#cayenne Email de contact: radiocayenne_AT_riseup.net",
		output: "radiocayenne",
	},
	{
		input: "On lutte comme on veut, o\u00f9 on veut, quand on veut !",
		output: "...",
	},
	{
		input:
			"Positionn\u00e9s sur la RN 23, plusieurs fourgons de gendarmes avaient bloqu\u00e9 la route et mis en place une d\u00e9viation pour les voitures. On nous explique qu",
		output: "mslc21",
	},
	{
		input:
			"pr\u00e9au et four aux Ronces \u00a0 Juillet fut plac\u00e9 sous le signe de la construction! Nouvelle cabane, pr\u00e9au pour s'abriter et y faire nos r\u00e9unions, four \u00e0 p",
		output: "roncier",
	},
	{
		input:
			"Ingr\u00e9dients : 2 ou 3 compas Des outils pour entrer (coupe-boulons, coupe-fils, etc.) Des gants, quelque chose pour couvrir son visage, des v\u00eatements p",
		output: "attaque",
	},
	{
		input:
			"\u00c0 ceux et celles qui r\u00e9sistent au Kurdistan, Nous suivons ce qui se passe actuellement en Turquie. Nous vous exprimons notre soutien face aux offensiv",
		output: "zad",
	},
	{
		input:
			"D\u00e9fendre la ZAD, Comme l\u2019on d\u00e9fend sa peau R\u00e9gion nantaise, Notre-Dame-des-Landes\u00a0[1]. Depuis quarante ans, un projet d\u2019a\u00e9roport \u00ab\u00a0vert\u00a0\u00bb menace d\u2019att",
		output: "@",
	},
	{
		input:
			"Alors qu'on apprend dans la presse que l'enqu\u00eate de l'IGPN serait finie et que le CRS responsable du meurtre d'Abou aurait repris ses fonctions \"sans ",
		output: "x",
	},
	{
		input:
			'On a pu y lire "zad partout", "recherche = collabo". Le GECCO envoie des \u00e9tudiant-e-s sur la ZAD de Notre Dame des Landes afin d\'y mener des \u00e9tudes qu',
		output: "-",
	},
	{
		input:
			"29-30 octobre 1998 : L\u2019H\u00f4tel de ville de Belfort subit une explosion d\u2019une forte intensit\u00e9 qui d\u00e9truit une quinzaine de bureaux. La revendication arri",
		output: "dispac'h",
	},
	{
		input:
			"Inaugur\u00e9 par la pr\u00e9f\u00e8te Nicole Klein, responsable, entre-autre, de la plus grande op\u00e9ration r\u00e9pressive depuis mai 68, sur la ZAD de Notre-Dame-des-Lan",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"http://www.cnt-f.org/ulnantes/spip.php?article176 Face \u00e0 Macron et la loi des patrons, ripostons\u00a0! Au pouvoir depuis deux ans \u00e0 peine, ce gouvernement",
		output: "cntnantes",
	},
	{
		input:
			"D\u00e8s midi, le centre ville est mis en \u00e9tat de si\u00e8ge. La BAC monte dans les tramways et fouille les sacs. Des patrouilles de Gendarmes Mobiles sillonnen",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"///// et grands rendez-vous ce week-end \u00e0 Nantes et sur la zad - samedi 14 - grande manifestation contre les expulsions de la zad \u00e0 Nantes - rendez-vo",
		output: "zadist",
	},
	{
		input:
			"Face aux mesures antisociales et au cynisme du gouvernement\u00a0: ne nous d\u00e9mobilisons pas ! La Conf\u00e9d\u00e9ration nationale du travail (CNT) appelle l\u2019ensembl",
		output: "cntnantes",
	},
	{
		input:
			"Appel \u00e0 organiser des rencontres intercomit\u00e9s d\u00e9centralis\u00e9es en septembre ----------------------------------------------------------------------------",
		output: "zadist",
	},
	{
		input:
			"Les M\u00e8res du parc Laleh sont les m\u00e8res de tous les prisonniers politiques et tous ceux qui ont \u00e9t\u00e9 emprisonn\u00e9s pour leurs convictions et leurs activit",
		output: "soliranparis",
	},
	{
		input:
			"\u00ab\u00a0Les communs\u00a0\u00bb ou le majoritarisme\u00a0? L'existence est un rapport conflictuel dans la vie, dans le monde, dans l\u2019existence en global comme sur l\u2019ex zad",
		output: "*",
	},
	{
		input:
			"En face de l'ensemble d'immeubles de bureaux et de l'h\u00f4tel Ibis de la City se trouvaient plusieurs v\u00e9hicules de la multinationale JC-Decaux. A savoir ",
		output: ".",
	},
	{
		input:
			"Nantes : 7h30, RV arr\u00eat chantier naval pour action de blocage 10h, Manif au d\u00e9part de la place du commerce Puis au mirroir d'eau quelques rendez-vous ",
		output: "(((i)))",
	},
	{
		input:
			"C\u2019est pour cette raison que nous avons d\u00e9cide de r\u00e9agir et de nous pr\u00e9parer a mener plusieurs types de r\u00e9ponses rapides, ce par la communication, l\u2019or",
		output: "zadist",
	},
	{
		input:
			"Outre leur fascination pour le r\u00e9gime nazi, ce qui nous int\u00e9resse ici c'est la pr\u00e9sence d'un militant d'extr\u00eame droite nantais, Pierre Vilotic. Ce der",
		output: "actionantifascistenantes",
	},
	{
		input:
			"L\u2019insurrection qui sera Il y a un anarchisme qu\u2019on pourrait d\u00e9finir \u00ab\u00a0asocial\u00a0\u00bb. Il court derri\u00e8re les luttes, il est toujours \u00e0 la recherche du bon t",
		output: "attaque",
	},
	{
		input:
			"Gr\u00e8ce: l\u2019h\u00f4pital de Kilkis passe \u00e0 l\u2019autogestion Traduit par Fausto Giudice \u0641\u0627\u0648\u0633\u062a\u0648 \u062c\u064a\u0648\u062f\u064a\u0634\u064a Les travailleurs ont rendu publique la d\u00e9claration suivante",
		output: "espoirchiapas",
	},
	{
		input:
			"La nuit de dimanche 22 septembre deux v\u00e9hicules de la Croix-Rouge (un Peugeot 208 et un Peugeot Partner) sont partis en fum\u00e9e, rue des Montiboeufs (Pa",
		output: "...",
	},
	{
		input:
			"De San Cristobal de las Casas, Chiapas-Mexico Mercredi 25 mars, une d\u00e9l\u00e9gation de 7 commandants, de 7 commandantes et d un sous-commandant (Marcos) ac",
		output: "anonymous",
	},
	{
		input:
			"\u00ab\u00a0D\u00e9go\u00fbt\u00e9e de la vie par les mauvais traitements et la brutalit\u00e9 de sa famille, une jeune modiste de quinze ans s'est jet\u00e9e \u00e0 l'eau la semaine derni\u00e8r",
		output: "!",
	},
	{
		input:
			"Nous publions ci-dessous de longs extraits d\u2019un article r\u00e9alis\u00e9 par Acci\u00f3n Proletaria, organe de presse du CCI en Espagne, sur la situation sociale qu",
		output: "unsympathisantducci",
	},
	{
		input:
			"Au cours de ces derni\u00e8res ann\u00e9es la crise \u00e9conomique mondiale n\u2019a cess\u00e9 d\u2019aggraver les conditions de vie de larges couches de la population , non seul",
		output: "pcint",
	},
	{
		input:
			"Alors que s'ach\u00e8ve une semaine de discussions qui ont eu lieu dans toute la ville sur des sujets aussi divers que le r\u00e9sistance kurde, les pratiques p",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Depuis mai 2002, le pouvoir l\u00e9gislatif fran\u00e7ais, majoritairement compos\u00e9 des d\u00e9put\u00e9s d'extr\u00eame-droite de l'Union des Massacreurs du Peuple, n'a eu com",
		output: "verdi",
	},
	{
		input:
			"Depuis des ann\u00e9es nous tirons des constats douloureux, nous d\u00e9non\u00e7ons l\u2019arbitraire l\u00e9gal et la brutalit\u00e9 d\u2019une d\u00e9mocratie toujours plus totalitaire, n",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le score au premier tour de Nicolas Sarkozy me semble hautement suspect. Voil\u00e0 un type qui a une soif de pouvoir quasi pathologique d'un c\u00f4t\u00e9 et une p",
		output: "anonymous",
	},
	{
		input:
			"A Nantes, le point de rendez-vous est fix\u00e9 d\u00e8s le matin dans le centre-ville. Quelques heures plus t\u00f4t, d\u00e9j\u00e0, la jeunesse est en mouvement. C'est elle",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"De Victor Java \u00e0 Public Enemy, la musique a jou\u00e9 un r\u00f4le central dans d\u2019innombrables cultures de r\u00e9sistance. Une grande part de celleux qui ont partic",
		output: "crimethinc",
	},
	{
		input:
			"Untitled Document MENSONGES GOUVERNEMENTAUX Le d\u00e9ficit public\u00a0; les riches sont riches\u00a0; la participation. \u00a0 size=2>\u00a0\u00a0\u00a0\u00a0\u00a0Nous n'aurons que ce que nous",
		output: "do",
	},
	{
		input:
			"L'affaire Clearstream, \u00e0 l'origine de cette motion de censure, n'est qu'un r\u00e9v\u00e9lateur (un \u00e9ni\u00e8me suppl\u00e9mentaire\u2026) des m\u00e9thodes mafieuses de l'UMP et d",
		output: "verdi",
	},
	{
		input:
			"Une manifestation dynamique, en soir\u00e9e, avec une banderole g\u00e9ante d\u00e9ploy\u00e9e au dessus de l'Erdre. Une mani\u00e8re de pr\u00e9parer la prochaine journ\u00e9e du 8 mar",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"A Nantes, le 10 octobre, les lyc\u00e9ens sont mobilis\u00e9s avant la lev\u00e9e du jour, avec plusieurs op\u00e9rations de blocages \u00e0 Guist'hau, Livet ou la Colini\u00e8re. ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Voil\u00e0 un texte que je voulais r\u00e9diger depuis un moment. Mais j\u2019avais besoin d\u2019un temps de r\u00e9flexion sur la situation \u00e0 laquelle j\u2019ai \u00e9t\u00e9 t\u00e9moin. Je su",
		output: "x",
	},
	{
		input:
			"La sc\u00e8ne de l\u2019arrestation, a \u00e9t\u00e9 diffus\u00e9e sur les r\u00e9seaux sociaux. La s\u00e9quence de pr\u00e8s de deux minutes montre deux motards de la police colombienne, t",
		output: "secoursrouge",
	},
	{
		input:
			"Photo : Axel Clergeau Photo : Clem LRT Photo : Shadow News Ceci est un h\u00f4tel 4 \u00e9toiles Photo : Shadow News Photo : Axel Clergeau Photo : Clem LRT Prem",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"{{La R\u00e9publique vache \u00e0 lait ou l'av\u00e8nement d'une nouvelle classe de privil\u00e9gi\u00e9s : les d\u00e9put\u00e9s et les s\u00e9nateurs}} Beaucoup de Fran\u00e7ais ignorent les pr",
		output: "verdi",
	},
	{
		input:
			"L\u2019usage de la violence \u00e0 l\u2019encontre de militants non-violents qui apportaient aux Palestiniens de Gaza un message de solidarit\u00e9 est totalement injusti",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 12016 Pas de titre pour 12015 Pas de titre pour 12014 Pas de titre pour 12013 Pas de titre pour 12012 Pas de titre pour 12011 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"\"Du r\u00e9gime d'assurance au r\u00e9gime d'assistance\" anim\u00e9 par Monique Titaux d'AC! Alen\u00e7on Ch\u00f4mage Du r\u00e9gime d'assurance au r\u00e9gime d'assistance Imagine-t-o",
		output: "anonymous",
	},
	{
		input:
			"La banderole Le mus\u00e9e Le tract ci-dessous y a \u00e9t\u00e9 distribu\u00e9 et une banderole d\u00e9ploy\u00e9e sur laquelle \u00e9tait \u00e9crit \u00ab L\u2019Australie traque et enferme / Vive ",
		output: "anonyme",
	},
	{
		input:
			"L'annonce \u00e9tait tomb\u00e9e au mois d'avril, relay\u00e9e par la presse locale : \u00ab La R\u00e9publique en marche fera sa rentr\u00e9e politique nationale \u00e0 Nantes \u00bb les 12",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"L'une de ses unit\u00e9s, la compagnie de tank \"Ezuz\", a pris part aux attaques contre Gaza l'\u00e9t\u00e9 dernier et \u00e9tait en activit\u00e9 dans des lieux pr\u00e9cis ou des",
		output: "bds",
	},
	{
		input:
			"Vendredi 27 octobre des hommes arm\u00e9s en civil tirent contre les barricades et tuent trois personnes dont un journaliste new-yorkais d'Indymedia. Soi-d",
		output: "anonymous",
	},
	{
		input:
			"\"dora\" Un dr\u00f4le de RG qui infiltre toutes les manifs dans l'\u00e9ducation. jeudi dernier premi\u00e8re manif' Bref r\u00e9sum\u00e9 de la manifestation lyc\u00e9enne de ce ma",
		output: "anonyme",
	},
	{
		input:
			"23h45 Nous nous organisons pour partir en convoi de tracteurs, par le pont de Chevir\u00e9, jusqu\u2019\u00e0 la Vacherit. Ils inondent de gaz. _____________________",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 4167 Pas de titre pour 4165 Pas de titre pour 4164 Pas de titre pour 4163 Pas de titre pour 4160 Pas de titre pour 4159 Pas de titre",
		output: "anonymous",
	},
	{
		input:
			"T\u00f4t, le matin du 9\u00a0septembre, dans le quartier de Santa Cecilia \u00e0 Bogota, Javier Ordo\u00f1ez a \u00e9t\u00e9 tu\u00e9 lors d\u2019une interpellation par la police nationale (",
		output: "anonyme",
	},
	{
		input:
			"Le nouveau pr\u00e9fet, Didier Martin, semble aussi autoritaire et irresponsable. Alors qu'un rassemblement festif est annonc\u00e9 ce vendredi soir \u00e0 Nantes, D",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Samedi 8 Ao\u00fbt, on est all\u00e9.e.s tirer des feux d'artifices devant la MAF de Fresnes pour saluer Carla et gueuler notre solidarit\u00e9 envers toutes les d\u00e9t",
		output: "x",
	},
	{
		input:
			"La justice fran\u00e7aise semble d\u00e9ployer une \u00e9norme \u00e9nergie \u00e0 emp\u00eacher toute enqu\u00eate s\u00e9rieuse sur la mort d\u2019Ali Ziri. La chambre de l\u2019instruction de la co",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 10595 Pour \u00e9crire un texte comme celui-ci, je suis bien oblig\u00e9 de partir de ma propre exp\u00e9rience, de partir du particulier pour disc",
		output: "anon",
	},
	{
		input:
			"La corruption, la bureaucratie politique, le ch\u00f4mage, ..., sont in\u00e9vitables dans le capitalisme. Il n\u2019est possible d\u2019en finir qu\u2019en retournant \u00e0 la lu",
		output: "pcint",
	},
	{
		input:
			"--- ac-forum ----------- Bonjour Ce texte reprend celui diffus\u00e9 en septembre, actualis\u00e9 apr\u00e8s les votes du budget et du RMI-RMA. M. CH\u00d4MAGE Du r\u00e9gime ",
		output: "anonyme",
	},
	{
		input:
			"Bonjour \u00e0 toutes et \u00e0 tous, Pendant sa campagne pr\u00e9sidentielle, Sarkozy avait promis de retirer les troupes fran\u00e7aises d'Afghanistan ! http://mai68.or",
		output: "do",
	},
	{
		input:
			"\"On va quand m\u00eame pas s'emmerder avec le droit, m\u00eame pas avec la loi et l'ordre: envoyons les gros bras pour expulser ces g\u00eaneurs!\"C'est apparemment c",
		output: "dal44",
	},
	{
		input:
			"Pour contrer ce fait, l\u2018action nocturne est \u00e0 chaque fois un peu plus r\u00e9fl\u00e9chie, plus secr\u00e8te, ou fait preuve d\u2018une technique plus aiguis\u00e9e. Dans les ",
		output: "...",
	},
	{
		input:
			"Pas de titre pour 5200 (version en fran\u00e7ais en dessous) La RESIST\u00e9NCIA qu'ei ua question de DIGNITAT CAUMA GENERAU Lo governament UMP/MEDEF que perseg",
		output: "anaramaupatac",
	},
	{
		input:
			"Pas de titre pour 9658 C\u2019est une nouvelle mascarade qui se joue \u00e0 l\u2019occasion des \u00e9l\u00e9ctions r\u00e9gionales. L\u2019actualit\u00e9 de cet entre-deux tour offre l\u2019occa",
		output: "(((i)))",
	},
	{
		input:
			"Pour que la libert\u00e9 ne se limite pas \u00e0 un demi m\u00e8tre carr\u00e9, \u00e0 bas toutes les prisons ! IL Y A CE QU'ON VOIT, ET CE QU'IL Y A DERRI\u00c8RE... Difficile d'a",
		output: "-",
	},
	{
		input:
			"Le 1er mai 2020 nous a confront\u00e9 \u00e0 un d\u00e9fi de taille : il n'a jamais \u00e9t\u00e9 aussi n\u00e9cessaire d'agir pour instaurer un changement, et cela n'a jamais \u00e9t\u00e9 ",
		output: "crimethinc",
	},
	{
		input:
			"\u2022 Nantes : Le retour des cam\u00e9ras pi\u00e9tons pour la police municipaleUn arr\u00eat\u00e9 pr\u00e9fectoral publi\u00e9 le 15 mai et pass\u00e9 quasiment innaper\u00e7u, autorise l'util",
		output: "radiocayenne",
	},
	{
		input:
			"insigne fasciste Depuis plusieurs mois de mobilisation des gilets nous avons vu apparaitre ce logo Mais qu'il y a t il de d\u00e9rangant dans ce logo ? La ",
		output: "...",
	},
	{
		input:
			"Untitled Document 10 aout 2006 FAUX COMPLOT \u00c0 LONDRES POUR JUSTIFIER LA GUERRE http://mai68.org/ag/1040.htm http://cronstadt.org/ag/1040.htm http://ka",
		output: "anonymous",
	},
	{
		input:
			"Au m\u00eame moment, les soudanais qui tentent de passer en Angleterre via Ouistreham sont toujours plus dans la gal\u00e8re. Confin\u00e9s de mars \u00e0 mai dans un cen",
		output: "desanarchistes",
	},
	{
		input:
			"16 mars 2013 - D.A.L Bordeaux Le Droit Au Logement Bordeaux D\u00e9non\u00e7ons les expulsions ! R\u00e9quisitionnons ! D\u00e9non\u00e7ons les mensonges des bailleurs et des ",
		output: "o.p.a",
	},
	{
		input:
			"Cette d\u00e9cision est tout sauf un ch\u00e8que en blanc \u00e0 la candidate sociale lib\u00e9rale, laquelle continue \u00e0 ne m'inspirer qu'une confiance extr\u00eamement limit\u00e9",
		output: "verdi",
	},
	{
		input:
			"Finies les vacances ? Depuis plus d'un mois la chape de plomb impos\u00e9e par l'Etat avec l'\u00e9tat d'urgence en prime est secou\u00e9e par des turbulences allant",
		output: ".",
	},
	{
		input:
			"Le premier mai est n\u00e9 autrefois comme une journ\u00e9e de lutte internationale des ouvriers, signifiant qu'ils sont une classe aux m\u00eames int\u00e9r\u00eats et aux m\u00ea",
		output: "pcint",
	},
	{
		input:
			"Les travailleurs manuels, les salari\u00e9Es issuEs des classes populaires totalisent souvent les 160 trimestres de cotisation requis pour la retraite bien",
		output: "anonymous",
	},
	{
		input:
			"AL-QA\u00cfDA VEUT SAUVER SARKOZY Al-Qa\u00efda, c'est-\u00e0-dire la CIA ! VID\u00c9OS INDISPENSABLES ! http://mai68.org/journal/N114/27janvier2008.htm Bonjour \u00e0 toutes ",
		output: "do",
	},
	{
		input:
			"Les carottes ne sont pas cuites, mais \u00e7a viendra. \u00a9 N! Les bras\u00e9ros ont \u00e9t\u00e9 tr\u00e8s appr\u00e9ci\u00e9s par cette froideur nocturne. \u00a9 N! Dirty Old Town, des Pogue",
		output: "...",
	},
	{
		input:
			"Cops, judges, screws : get your hands off! On February 22th, more than 50.000 people gathered in Nantes for the biggest anti-airport demonstration eve",
		output: "anonyme",
	},
	{
		input:
			"San Bernardo, 5/11 incendie de l'hypermarch\u00e9 Central Mayorista Copiap\u00f3, 8/11 hall de l'Universit\u00e9 technologique (Inacap) Concepci\u00f3n, 7/11 si\u00e8ge du par",
		output: "solidari@s",
	},
	{
		input:
			"Seule, une nouvelle provocation politique tapageuse \u00e9tait en mesure de permettre \u00e0 Marine le Pen de se r\u00e9introduire dans la course \u00e0 la premi\u00e8re place",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"L'effet Flamby expliqu\u00e9 aux petits censeurs Le texte sur le daub\u00e9 (trouv\u00e9 sur www.libre-parcours.net) D\u00e8s le matin suivant, la presse toujours en mal ",
		output: "(((i)))",
	},
	{
		input:
			"Lors de la manifestation du 26 Mai contre la loi travail, \u00e0 Lyon, la premi\u00e8re altercation avec les forces de l\u2019ordre a eu lieu place Gabriel-P\u00e9ri. Com",
		output: "anonyme",
	},
	{
		input:
			"Et ce alors que les drapeaux fran\u00e7ais et nationaux fleurissent toujours dans les rues, que la justice remplit les prisons (l\u2019\u00c9tat annonce la cr\u00e9ation ",
		output: "anonyme",
	},
	{
		input:
			"Nantes et Rennes sont pr\u00e9sent\u00e9es comme des \u00ab champs de bataille \u00bb. Le lendemain, 8 nantais-e-s re\u00e7oivent une interdiction administrative de circuler d",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Il faudrait faire preuve d\u2019une mauvaise foi affligeante pour y voir des actes isol\u00e9s. Ces attentats, au contraire, font syst\u00e8me. Ils s\u2019inscrivent dans",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"D\u00e9couvrez le programme : Le samedi 9 juin : A partir de 14h : Visite du jardin toute la journ\u00e9e 15h00 : Projection de 'Abandonn\u00e9.e.s' (documentaire su",
		output: "roncier",
	},
	{
		input:
			"Les mesures les plus graves de la loi ELAN : Le bail mobilit\u00e9 de 1 \u00e0 10 mois non reconduit pr\u00e9carise durement les locataires. Il cr\u00e9e une aubaine pour",
		output: "dal44",
	},
	{
		input:
			"L\u2019expulsion de l\u2019Amassada a d\u00e9but\u00e9 ce matin 07\u00a0F\u00e9vrier 2019 \u00e0 9h00. L\u2019Amassada est le lieu de lutte contre le projet de m\u00e9ga-transformateur de RTE sur",
		output: ".",
	},
	{
		input:
			"Lundi 09\u00a0 Avril : Klx : 18:44 : Encore pas mal de flics entre Lama et les Planchettes. Le repas \u00e0 la ch\u00e8vrerie va bient\u00f4t commencer. Repas \u00e0 la Wardin",
		output: "zadist",
	},
	{
		input:
			"Six personnes, n\u00e9es en Turquie mais vivant en France, ont \u00e9t\u00e9 interpell\u00e9es mardi en Gironde et en Charente-Maritime dans le cadre de cette enqu\u00eate. Qu",
		output: "secoursrouge",
	},
	{
		input:
			"1 - Que l'expulsion n\u00e9cessiterait une prise en charge des occupant.e.s du gymnase par les services de l'Etat. Ce qui, d'apr\u00e8s le sous pr\u00e9fet, encourag",
		output: "lecran-comit\u00e9der\u00e9quisitionetd'actionnantais",
	},
	{
		input:
			"\u00a0 \u00a0 Lundi, on s'est retrouv\u00e9.e.s pour une petite balade sauvage au centre-ville. On a saisi l'occasion pour affirmer notre d\u00e9go\u00fbt de la propri\u00e9t\u00e9 et d",
		output: "..",
	},
	{
		input:
			"zad: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0Klx: #InfoTrafflic de https://radioklaxon.antirep.net/\u00a0Twt: autres sour",
		output: "zad",
	},
	{
		input:
			"Le matin du mardi 16 d\u00e9cembre nous a surpris avec une vague de perquisitions et d'arrestations... Nous a surpris ? Nous n'allons pas mentir. Reprenons",
		output: "x",
	},
	{
		input:
			"On sera 100% podcasts, mais vous pouvez quand m\u00eame rejoindre le chat sur https://webchat.cyberguerrilla.org/#cayenne \u00a0 retrouvez notre blog (podcasts,",
		output: "radiocayenne",
	},
	{
		input:
			"Flics Digos boia - Digos bourreau Toit Malgr\u00e9 le froid et les tentatives des keufs de mettre fin \u00e0 la r\u00e9sistance, cela fait plus de 30 heures que 2 co",
		output: ".",
	},
	{
		input:
			"Dans la nuit du lundi 23 au mardi 24 nous avons p\u00e9n\u00e9tr\u00e9 \u00e0 Clermont-Ferrand, proche du centre ville, dans un parking o\u00f9 \u00e9taient stationn\u00e9es trois voitu",
		output: "anonyme",
	},
	{
		input:
			"L\u2019Agence v\u00e9n\u00e9zu\u00e9lienne d\u2019information (AVN) et Castro soutiennent Kadhafi : que vont faire leurs partisans \u00ab anticapitalistes \u00bb et altermondialistes en",
		output: "ahadhaam",
	},
	{
		input:
			"Petit rappel des faits Ivan, Bruno et Damien sont arr\u00eat\u00e9s en janvier 2008 alors qu\u2019ils se rendent \u00e0 une manif devant le centre de r\u00e9tention de Vincenn",
		output: "anonyme",
	},
	{
		input:
			'Nous ne sommes pas seul.es \u00e0 refuser la fable du "il y en a qui bossent pendant que d\'autres profitent des allocs" (https://attaque.noblogs.org/post/2',
		output: "anonym",
	},
	{
		input:
			"Vers 3 h, le 11 juin, la voiture priv\u00e9e d\u2019Andr\u00e9 Cardinal, vice-pr\u00e9sident de la firme Lemay, \u00e0 Montr\u00e9al a \u00e9t\u00e9 incendi\u00e9e devant son domicile. La Presse ",
		output: "sansattendredemain",
	},
	{
		input:
			"ACAB Sa demande de lib\u00e9ration conditionnelle, apr\u00e8s avoir tra\u00een\u00e9 plus de neuf mois, lui a \u00e9t\u00e9 refus\u00e9e au motif de son silence sur les faits. Peut-\u00eatre",
		output: ".",
	},
	{
		input:
			"Une premi\u00e8re ligne d'environ une quinzaine de manifestant.es se retrouve contre les policiers r\u00e9alisant le barrage : ces derniers gazent abondamment \u00e0",
		output: "streetmedicnantes",
	},
	{
		input:
			"Le centre introuvable C\u2019est un article de Philippe Argouarch qui a lanc\u00e9 la pol\u00e9mique, \u00ab\u00a0Gael Le Rouge, le boulet du mouvement breton\u00a0\u00bb, dont l\u2019auteur",
		output: ".",
	},
	{
		input:
			'Invitation FRANCE 3, MENSONGE ET VID\u00c9O D\u00e9monstation Publique du Collectif "Du Breton dans ma T\u00e9l\u00e9/Brezhoneg \'Barzh an T\u00e9l\u00e9" Dimanche 19 octobre \u00e0 11 h',
		output: "anonymous",
	},
	{
		input:
			"Juge : Aude Le Quinquis - Assesseur : Georges Lombard Procureur : Laurent Fichot --------------------------- La premi\u00e8re personne, Q.,\u00a0 passait pour v",
		output: "legalteam",
	},
	{
		input:
			"- A quoi sert Bruno Retailleau ? Catholique int\u00e9griste, ce villi\u00e9riste n'est pas seulement un fervent opposant au mariage pour tous. Il est aussi un o",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Ce matin 28 mars, \u00e0 partir de 8h30, au moins trois lieux d'habitation dont une maison occup\u00e9e ont \u00e9t\u00e9 perquisitionn\u00e9s dans le cadre d'une enqu\u00eate men\u00e9",
		output: ".",
	},
	{
		input:
			"Pas de titre pour 10951 On peut voir \u00e0 l'\u0153uvre ces miliciens depuis quelques jours dans les trams. Pr\u00e9sents en nombre (une vingtaine d'agents : ceux q",
		output: "jackpalmer",
	},
	{
		input:
			"/// Rendez-vous pour l\u2019arriv\u00e9e et le banquet de la tracto-v\u00e9lo de Notre Dame des Landes et des autres convois venus d\u2019espaces en r\u00e9sistance \u00e0 14h\u00a0\u00e0\u00a0Ve",
		output: "mslc21",
	},
	{
		input:
			"Voir \u00e9galement notre appel avec la carte des projets inutiles du grand ouest ici (nous sommes \u00e9galement en contact avec le mouvement SuperLocal que no",
		output: "collectifterrescommunes",
	},
	{
		input:
			"Pas de titre pour 3121 Pas de titre pour 3119 Pas de titre pour 3117 Pas de titre pour 3115 Loisirs sous survaillance La Cnil autorise la surveillance",
		output: "valk",
	},
	{
		input:
			"Quelques conseils de base en cas d\u2019intervention polici\u00e8re\u00a0: Perquisitions/Interpellations\u00a0: Pr\u00e9viens les gens potentiellement concern\u00e9-e-s par ce mess",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 11830 Pas de titre pour 11829 Pas de titre pour 11828 Pas de titre pour 11827 Pas de titre pour 11826 Pas de titre pour 11825 Pas de",
		output: "anonyme",
	},
	{
		input:
			"Les manifestations de cette semaine \u00e0 Minneapolis marquent un tournant historique dans l'\u00e8re du COVID-19. Comme nous l'avons fait valoir en mars, cert",
		output: "crimethinc",
	},
	{
		input:
			"- 9h15 : du c\u00f4t\u00e9 de la Saulce, on entend la batoukada mais aussi des grenades assourdissantes. Un flic aurait \u00e9t\u00e9 touch\u00e9 par une grenade de ses camara",
		output: "zadist",
	},
	{
		input:
			"Le d\u00e9fil\u00e9, ponctu\u00e9 de fumig\u00e8nes, morceaux de rap fran\u00e7ais et chants de luttes, s'est dirig\u00e9 en direction du pont Saint Mihiel. Quelques fleurs ont \u00e9t\u00e9",
		output: "jackpalmer",
	},
	{
		input:
			"La premi\u00e8re, c\u2019est que nous prenons soin\u00a0[1], de la s\u00e9curit\u00e9 de la machine. De la m\u00eame mani\u00e8re, le m\u00e9tacollectif Tachanka et des gens de Mutu nous aid",
		output: "anonyme",
	},
	{
		input:
			"http://ulnantes.cnt-f.org/spip.php?article157 M\u00eame avec retard, il nous semble important de condamner fermement l\u2019agression physique de f\u00e9ministes par",
		output: "cntnantes",
	},
	{
		input:
			"Parcelle sur laquelle les forages doivent avoir lieu Plan de situation de la zone de forages OSCAILTIMAGE(attachments/may2011/situation_foragesc4c76.p",
		output: "zadist",
	},
	{
		input:
			"graff v\u00e9g\u00e9tal D\u00e9j\u00e0 bient\u00f4t 4 ans que ce grand jardin collectif a vu le jour. Cet espace est d\u00e9sormais largement reconnu dans le quartier et ailleurs. ",
		output: "roncier",
	},
	{
		input:
			"On d\u00e9compte 2 cort\u00e8ges diff\u00e9rents ce 14 Septembre, un au d\u00e9part de la place Mellinet, et un autre au d\u00e9part de la crois\u00e9e des trams de Commerce. D\u00e8s 1",
		output: "streetmedicnantes",
	},
	{
		input:
			"Renon\u00e7ant \u00e0 baisser les loyers, alors que les expulsions sont en hausse constante et chaque ann\u00e9e d\u00e9passent des record absolus (15 220 expulsions forc",
		output: "dal44",
	},
	{
		input:
			"http://ulnantes.cnt-f.org/spip.php?article147 Suite \u00e0 l\u2019affaire d\u2019accusation de viol dont le SSCT Lorraine a \u00e9t\u00e9 saisi, nous tenons tout d\u2019abord \u00e0 man",
		output: "cntnantes",
	},
	{
		input:
			"Une pote sonne \u00e0 la porte du Moulin. Je regarde par la fen\u00eatre et j\u2019aper\u00e7ois avec elle un homme d\u2019une quarantaine d\u2019ann\u00e9es, v\u00eatu d\u2019un imperm\u00e9able. L\u2019a",
		output: "anonyme",
	},
	{
		input:
			"\u00a0 Face aux menaces du gouvernement, le mouvement anti-a\u00e9roport est plus dense et vivant que jamais. En t\u00e9moignent la mobilisation en urgence de 20 000",
		output: "zadist",
	},
	{
		input:
			"Peu apr\u00e8s 18H, le petit rassemblement prend forme, une banderole \u00ab ni COP 21 ni \u00c9tat d'Urgence, R\u00e9sistance \u00bb est d\u00e9ploy\u00e9e. Quelques prises de paroles ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Nous avons atteint un point de rupture. Les meurtres de George Floyd \u2013 et de Breonna Taylor, Tony McDade, et des autres personnes noires dont les vies",
		output: "crimethinc",
	},
	{
		input:
			"Urgent COP 21\u00a0!RETOURNEMENT\u00a0! Hier, nous vous avons fait part de l\u2019interdiction de manifester dans l\u2019Eure et Loir mais ce matin, surprise\u00a0! le directe",
		output: "mslc21",
	},
	{
		input:
			"Les premiers travaux ont d\u00e9j\u00e0 commenc\u00e9 (travaux en vue de la soi-disant compensation \u00e9cologique) ! Avec la ZAP et le collectif Nantais contre le proje",
		output: "collectifterrescommunes",
	},
	{
		input:
			"Bonsoir, Tout juste rentr\u00e9 d'une journ\u00e9e \u00e9prouvante de mobilisation en grande partie pass\u00e9e sur un trottoir aux c\u00f4t\u00e9s d'une famille expuls\u00e9e de son h\u00f4",
		output: "anonymous",
	},
	{
		input:
			"En cette p\u00e9riode d'\u00e9tat d'urgence, ayant men\u00e9 la pr\u00e9fecture de police \u00e0 interdire toute manifestation en Ile-de-France, on n'\u00e9tait vraiment pas s\u00fbr-e-",
		output: "anonyme",
	},
	{
		input:
			"Le gouvernement envisage-t-il une surveillance num\u00e9rique de masse ? Comme sur les autres sujets depuis le d\u00e9but de la crise sanitaire, rien ne parait ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"1965 Naissance du mouvement Provo \u00e0 Amsterdam. Anars non-violents et provocateurs venus des milieux activistes, artistiques et intellos critiques, inv",
		output: "anonymous",
	},
	{
		input:
			"Au passage, signalez nous sur logistiquedodobure(at)riseup.net si vous souhaitez \u00eatre log\u00e9-es chez les habitant-es autour, sinon nous avons pr\u00e9vu un b",
		output: "vmc",
	},
	{
		input:
			"police car other police station Police Station This was the video of the anarchist call against G20 in Hamburg. And this are some actions, collected f",
		output: "@",
	},
	{
		input:
			"Le 24/10 : #Nantes : Rassemblement \u00e0 18h devant la pr\u00e9fecture #Angers : Rassemblement 18h place du ralliement #Brest : Rassemblement \u00e0 18h\u00a0 place de l",
		output: "(((i)))",
	},
	{
		input:
			"Le parachute dor\u00e9 du ministre de l'Economie Francis Mer touchera 30 millions d'euros en quittant le Gouvernement Francis Mer a n\u00e9goci\u00e9 sa participatio",
		output: "anonymous",
	},
	{
		input:
			"Nous, associations nationales et locales, collectifs, comit\u00e9s, personnalit\u00e9s, d\u00e9non\u00e7ons la politique de criminalisation et de r\u00e9pression syst\u00e9mique qu",
		output: "...",
	},
	{
		input:
			"Dans le cadre de cette enqu\u00eate, nous avons re\u00e7u de nombreuses convocations (courriers simples puis recommand\u00e9s et appels de la police judiciaire sur l",
		output: "anonyme",
	},
	{
		input:
			"Top d\u00e9part aujourd\u2019hui m\u00eame \u00e0 20h. Elle sera rediffus\u00e9e vendredi samedi et dimanche \u00e0 14h. Voici le texte qu\u2019ils nous onts envoy\u00e9 en m\u00eame temps. Gr\u00e8ve",
		output: "radiocayenne",
	},
	{
		input:
			"BELLACIAO \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Bonjour \u00e0 toutes et \u00e0 tous, \u00a0\u00a0\u00a0\u00a0\u00a0Bellaciao a censur\u00e9 un message o\u00f9 j'accusais Bush et la CIA d'avoir organis\u00e9 eux-m\u00eames les attent",
		output: "do",
	},
	{
		input:
			"Untitled Document ISRA\u00cbL-LIBAN Une guerre pr\u00e9vue depuis longtemps http://mai68.org/journal/N111/20juillet2006.htm http://cronstadt.org/journal/N111/20",
		output: "anonymous",
	},
	{
		input:
			"Appel \u00e0 soutien international contre les menaces de mort aux ouvriers de Zanon et face \u00e0 la menace d'expulsion de la fabrique. Estim\u00e9(e)s ami(e)s, Dan",
		output: "fab",
	},
	{
		input:
			"GUERRE DE CLASSE A OAXACA De mai \u00e0 d\u00e9cembre 2006, le mouvement social de lutte g\u00e9n\u00e9ralis\u00e9e dans la r\u00e9gion d'Oaxaca, au Mexique, a renou\u00e9 avec diff\u00e9ren",
		output: "anonymous",
	},
	{
		input:
			"\u00a0 A 10H30, les prises de paroles se succ\u00e8dent devant la pr\u00e9fecture. La foule semble moins dense que la semaine pr\u00e9c\u00e9dente, lors de la manifestation in",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Deuxi\u00e8mement. Th\u00e8me des d\u00e9bats : 1. La guerre de conqu\u00eate capitaliste et les peuples indig\u00e8nes d\u2019Am\u00e9rique ; 2. La r\u00e9sistance des peuples indig\u00e8nes d\u2019A",
		output: "karacole",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 59 / d\u00e9cembre 2007 \u00ab Ce n\u2019est pas de la violence, c\u2019est de la rage qui s\u2019exprime\u2026 \u00bb - \u00ab Ce n\u2019est pas de la violen",
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			"Quels droits pour les salari\u00e9s \u00e0 l\u00b9emploi discontinu ? La lutte prot\u00e9iforme engag\u00e9e apr\u00e8s la signature, le 26 juin, du protocole Unedic r\u00e9visant le r\u00e9",
		output: "laurent",
	},
	{
		input:
			'Pas de titre pour 8251 Pas de titre pour 8236 <!--OHAOFP--><!--OHSOSP--><!--OHSOFP--> \u00a0 Projection de film de la t\u00e9l\u00e9 libre et alternative chilienne "',
		output: "imcnantes",
	},
	{
		input:
			"Les pensions de retraite ne sont pas autre chose qu'une partie du salaire pay\u00e9 aux travailleurs par les patrons: la partie du salaire dite \u00abdiff\u00e9r\u00e9e\u00bb ",
		output: "pcint",
	},
	{
		input:
			"Un incendie a malheureusement d\u00e9truit notre belle cabane de jardin, laissant en cendre graines et divers outils. Mais bon on ne s'arr\u00eate pas l\u00e0 pour a",
		output: "roncier",
	},
	{
		input:
			"Les batailles que les \u00e9tudiants fran\u00e7ais portent en avant contre les r\u00e9formes d'\u00e9cole et universit\u00e9, contre CPE, contre l'exploitation, ne sont pas di",
		output: "anonymous",
	},
	{
		input:
			"Le juge en charge du concours de cr\u00e9anciers de Zanon a fix\u00e9 la date de cl\u00f4ture du processus, sans reconna\u00eetre la coop\u00e9rative form\u00e9e par les travailleu",
		output: "fab",
	},
	{
		input:
			"Des manifestations et des protestation se poursuivent dans de nombreuses villes de la province du Kurdistan Iranien pour la cinqui\u00e8me journ\u00e9e cons\u00e9cut",
		output: "soliranparis",
	},
	{
		input:
			"Le gouvernement a voulu pr\u00e9senter l\u2019\u00e9vacuation du bidonville comme une expulsion \u00ab\u00a0douce\u00a0\u00bb, qui serait progressive et sans violence. L\u2019hypocrisie de c",
		output: "zadist",
	},
	{
		input:
			"Le d\u00e9but des partiels a marqu\u00e9 le franchissement d'un cap dans la r\u00e9pression. En plus d\u2019appeler les flics pour matraquer \u00e0 tout va des \u00e9tudiant-e-s de",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Plus dangereux qu\u2019un virus, ce sont les militaires qui patrouillent dans les rues. Parce qu\u2019ils sont le bras arm\u00e9 du pouvoir, parce qu\u2019ils envahissent",
		output: "sansattendre",
	},
	{
		input:
			"- Seule la lutte paie 2010, des millions de personnes descendent dans la rue pour faire retirer la \u00ab r\u00e9forme de retraites \u00bb de Nicolas Sarkozy. Gouver",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Au-del\u00e0 de leurs petites enqu\u00eates anecdotiques dans lesquelles les flics savent bien qu\u2019ils n\u2019obtiendront pas grand chose en terme de r\u00e9pression, il s",
		output: "desanarchistes",
	},
	{
		input:
			"Le quartier San Lorenzo, le plus pauvre et le plus peupl\u00e9 de la ville de Neuqu\u00e9n (centre du pays) a \u00e9t\u00e9 secou\u00e9 par une op\u00e9ration polici\u00e8re qui a laiss",
		output: "fab",
	},
	{
		input:
			"Un v\u00e9ritable programme de gauche, \u00e0 faire p\u00e2lir d'envie Manuel Valls. L'ann\u00e9e qui vient de s'\u00e9couler en t\u00e9moigne : expulsions syst\u00e9matiques, harc\u00e8leme",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Jean-Louis Debr\u00e9, ex-Pr\u00e9sident de l'Assembl\u00e9e Nationale et nouveau Pr\u00e9sident du Conseil Constitutionnel, a fait porter \u00e0 60 mois (!!!) la p\u00e9riode d'in",
		output: "anonymous",
	},
	{
		input:
			"L\u2019arriv\u00e9e du fou Sarkozy, d\u2019abord comme ministre de la R\u00e9pression sous Chirac, en 2002, puis comme pr\u00e9sident \u00e9lu par seulement 39% des Fran\u00e7ais, en 20",
		output: "verdi",
	},
	{
		input:
			"Il ne s'agit l\u00e0 que d'une premi\u00e8re attaque dans le cadre de la politique d'aust\u00e9rit\u00e9 qui va in\u00e9vitablement s'instaurer en France dans les mois qui vie",
		output: "pcint",
	},
	{
		input:
			"Depuis 3 ans, cinq expulsions de la fabrique ont \u00e9t\u00e9 mises en \u00e9chec par la d\u00e9termination des ouvriers (\"nous nous battrons jusqu'aux derni\u00e8res cons\u00e9qu",
		output: "fab",
	},
	{
		input:
			"PROTESTATION CONTRE LES MINES Les Panam\u00e9ens luttent depuis plus d'une semaine contre les projets hydro\u00e9lectriques. Les indig\u00e8nes exigent au Parlement ",
		output: "espoirchiapas",
	},
	{
		input:
			"Mais samedi 7 d\u00e9cembre, le patron de l\u2019entreprise a constat\u00e9 qu\u2019il pouvait y avoir d\u2019autres formes de contestation contre ce pyl\u00f4ne que la p\u00e9tition ci",
		output: "sansattendre",
	},
	{
		input:
			"Pas de titre pour 11723 Pas de titre pour 11722 Pas de titre pour 11721 Pas de titre pour 11720 Pas de titre pour 11719 Pas de titre pour 11718 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"Montpellier, le 5 avril 2004 La d\u00e9faite de 19 ministres du gouvernement Raffarin aux derni\u00e8res \u00e9lections r\u00e9gionales a montr\u00e9 le d\u00e9saccord profond d\u00b9un",
		output: "anonymous",
	},
	{
		input:
			"photo: Vane\u00df Lambert - Calais - avril 2016 Les gouverneMents successifs nous broient au d\u00e9sespoir.\u00a0 Sous couvert d'un humanisme factice d\u00e9nonc\u00e9 par to",
		output: "valk",
	},
	{
		input:
			"Le mouvement des Indign\u00e9s en Espagne est riche en enseignements. Il r\u00e9v\u00e8le la mont\u00e9e progressive de la combativit\u00e9 des exploit\u00e9s face \u00e0 l\u2019incessante d",
		output: "unsympathisantducci",
	},
	{
		input:
			"Depuis plusieurs mois, un haox circule en boucle \u00e0 propos de l'indemnit\u00e9 de fin de mandat d'un d\u00e9put\u00e9. Il a encore une fois \u00e9t\u00e9 valid\u00e9 sur IMP http://",
		output: "patricebardet",
	},
	{
		input:
			"Untitled Document LE TESTAMENT DE L'ABB\u00c9 PIERRE http://mai68.org/ag/1109.htm http://cronstadt.org/ag/1109.htm http://kalachnikov.org/ag/1109.htm \u00a0\u00a0\u00a0\u00a0\u00a0",
		output: "anonymous",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 38 / janvier 2006 Abattre le nouveau mur de Berlin\u2026 autour des quartiers - Abattre le nouveau mur de Berlin\u2026 auto",
		output: "zozo",
	},
	{
		input:
			"D\u00e8s le d\u00e9part, initi\u00e9 par la premi\u00e8re conf\u00e9rence de presse du camp climat, le ton est donn\u00e9. L'article qui en r\u00e9sulte n'est qu'une longue suite de pro",
		output: "ploumploum",
	},
	{
		input:
			"Pas de titre pour 11255 De \u00ab participation \u00e0 un groupement form\u00e9 en vue de la pr\u00e9paration de violences contre les personnes ou de destruction ou de d\u00e9",
		output: "o.p.a",
	},
	{
		input:
			"La priorit\u00e9 de ce p\u00f4le sera d\u2019augmenter les expulsions \u00e0 partir de l\u2019Italie et de la Gr\u00e8ce, les deux principaux pays d\u2019entr\u00e9e dans l\u2019Union europ\u00e9enne.",
		output: "anonyme",
	},
	{
		input:
			"- 7:15 : situation sur les routes : bcp de flics entre les ardilli\u00e8res et les Planchettes barrage \u00e0 la Paquelais croisement route des fosses noires/ro",
		output: "zadist",
	},
	{
		input:
			"CE POUR QUOI NOUS IRONS AUSSI A CANNES OU LES MEILLEURS FILMS SONT CEUX QUE L'ON NE VOIT PAS. En lutte(s), pr\u00e9sents depuis onze mois, ce que nous d\u00e9fe",
		output: "anonymous",
	},
	{
		input:
			"Je tiens \u00e0 pr\u00e9ciser en pr\u00e9ambule que n\u2019\u00e9tant pas un tr\u00e8s grand sp\u00e9cialiste des concepts marxistes l\u00e9ninistes, je ne suis pas la pour \u00e9crire un v\u00e9ritab",
		output: "anonyme",
	},
	{
		input:
			"Intro de l'article sur publi\u00e9 par L.T. sur Brasiers et Cerisiers : \"La d\u00e9fense de la \u00ab libert\u00e9 d\u2019expression \u00bb est une question qui traverse aujourd\u2019hu",
		output: "karacole",
	},
	{
		input:
			"La proposition \u00e9tait tr\u00e8s ouverte et peu pr\u00e9cise. De nombreuses et riches discussions ont eu lieu parmi les occupant-e-s sans que se d\u00e9gage une positi",
		output: "anonyme",
	},
	{
		input:
			"\u00ab\u00a0Des activistes d\u2019extr\u00eame gauche ont men\u00e9 une op\u00e9ration anti-V\u00e9lib\u2019 \u00e0 Paris, entre mardi 15 et mercredi 16 avril. Le groupe Indymedia s\u2019en est pris \u00e0",
		output: "anonymous",
	},
	{
		input:
			"Dans le mouvement des Indign\u00e9s en Espagne comme en France et dans tous les pays, le collectif Democracia Real Ya ! (DRY \u2013 \u201cD\u00e9mocratie r\u00e9elle maintenan",
		output: "unsympathisantducci",
	},
	{
		input:
			"SQUATS MALS LOGE(ES) SANS DROITS NI TITRES NOUS NE LAISSERONS PLUS FAIRE APPEL A LA RESISTANCE CONTRE LE NETTOYAGE SOCIAL DE NOS VILLES ET QUARTIERS B",
		output: "anonymous",
	},
	{
		input:
			"MEMOIRES PIQUETERAS Au c\u0153ur de la terre, un feu maintient la chaleur dont nous avons besoin pour que la vie continue. Au centre de l'histoire, br\u00fble l",
		output: "fab",
	},
	{
		input:
			"Le jour o\u00f9 j'ai entendu cette phrase, mon \u00e9go de personne fumeuse (mais pas m\u00e9contente d'avoir arr\u00eat\u00e9 d'imposer mes comportements alcoolis\u00e9s \u00e0 mes pot",
		output: ".",
	},
	{
		input:
			"Gaza, jusqu\u2019\u00e0 quand laissera-t-on faire\u00a0? Personne ne peut faire semblant de ne pas voir ce qui est \u00e0 l\u2019\u0153uvre. Tous les jours, l\u2019arm\u00e9e isra\u00e9lienne ass",
		output: "bureaunationaldel\u2019ujfp",
	},
	{
		input:
			"plan programme D\u2019ici deux ou trois ans, le chantier sera bien loin d\u2019\u00eatre fini. Et ce n\u2019est pas parce que la construction de l\u2019EPR est d\u00e9j\u00e0 pas mal av",
		output: "anonyme",
	},
	{
		input:
			'L\u2019adolescent aurait 15 ans selon "Lib\u00e9ration", et serait en seconde au lyc\u00e9e Bergson dans le 19\u00e8me arrondissement de Paris. Le site affirme que l\u2019IGPN',
		output: "*",
	},
	{
		input:
			"\u00a0 Juste avant le rassemblement, CRS et civils contr\u00f4laient et fouillaient les sacs de tout ce qui ressemblait \u00e0 un \u00ab\u00a0anarcho-autonome\u00a0\u00bb aux alentours ",
		output: "anonyme",
	},
	{
		input:
			"Le document est un guide de la r\u00e9pression. Cette circulaire de 16 pages est une s\u00e9rie de conseils directement adress\u00e9s aux juges et aux procureurs ave",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Soutien aux inculp\u00e9s de Vincennes L\u2019Etat isole, renfor\u00e7ons les liens ! IL EST POSSIBLE D'ECRIRE AUX PERSONNES INCARCEREES. Il vaut mieux joindre une e",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Nous publions ci-dessous de longs extraits d\u2019un communiqu\u00e9 de nos camarades d\u2019Acci\u00f3n Proletaria, envoy\u00e9 initialement \u00e0 toutes les sections du CCI pour",
		output: "unsympathisantducci",
	},
	{
		input:
			"Je vous \u00e9cris parce que je suis pas venu\u22c5e \u00e0 la manif. Pas parce que j\u2019\u00e9tais occup\u00e9\u22c5e, mais parce j\u2019ai d\u00e9cid\u00e9 de rester chez moi, et \u00e7a m\u2019\u00e9tait pas ar",
		output: ".",
	},
	{
		input:
			"SOLIDARITAT OCCITANISTA DAB LOS P\u00d2PLES PALESTINIAN E LIBAN\u00c9S Encara e tostemps l'ataca sionista e imperialista ! L'organisacion revolucion\u00e0ria de l'es",
		output: "anaramaupatac",
	},
	{
		input:
			"Entrer \u00e0 Gaza c\u2019est possible mais il y a une proc\u00e9dure un peu compliqu\u00e9e. Depuis quelque temps, les p\u00e9riodes d\u2019ouverture de la fronti\u00e8re de Rafah sont",
		output: "pierrestambul",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 47 / novembre 2006 - La g\u00e9g\u00e8ne pour tous - Le Taser X26, c'est : - Le flash-ball n'est pas en reste - Tous aux As",
		output: "zozo",
	},
	{
		input:
			"Bonjour Une info => Un atelier Philo et un centre de Ressources chez Apo33 Constellations le site philo http://www.noiser.org/constellatio/doku.php?id",
		output: "philippe",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 56 / septembre 2007 Les \u00ab d\u00e9linquants \u00bb sont des \u00ab fous \u00bb et les \u00ab fous \u00bb sont des \u00ab d\u00e9linquants \u00bb - Les \u00ab d\u00e9linq",
		output: "zozo",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 60 / janvier 2007 - Haut les c\u0153urs - La 2e voiture - Dammarie r\u00e9siste ! - Cela fait 10 ans - [ A G I R ] Centres ",
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			"Attentat d'Ankara Il s'inscrit en effet dans un climat de tension politique croissante; en juin dernier un attentat \u00e0 Diyarbakir, au Kudistan, contre ",
		output: "pcint",
	},
	{
		input:
			"Pour protester contre la menace d\u2019expulsion de notre camarade, et demander l\u2019annulation de cette expulsion, envoyez des messages \u00e0 l\u2019ambassade de Su\u00e8d",
		output: "soliranparis",
	},
	{
		input:
			"Ces UFR (qui regroupent diff\u00e9rentes fili\u00e8res comme la sociologie, l'histoire, le droit, les lettres ,...) avaient pris des mesures pour que la s\u00e9lecti",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"\u00a0 Pour les personnel\u00b7le\u00b7s des h\u00f4pitaux qui depuis des nombreuses ann\u00e9es d\u00e9j\u00e0 bossent dans des conditions d\u00e9grad\u00e9es et vont prendre des risques \u00e9normes",
		output: "iaata",
	},
	{
		input:
			"On constate que cette op\u00e9ration polici\u00e8re a des objectifs moins banals que prot\u00e9ger une d\u00e9broussailleuse. Il y a un \u00e9norme programme de fichage et de ",
		output: "zadist",
	},
	{
		input:
			"Et ailleurs : \u00e0 Rennes : Les pr\u00e9sidentielles nous emmerdent ! rendez-vous est d\u00e9j\u00e0 donn\u00e9 pour nous rejoindre, occuper l\u2019espace public et manifester\u00a0: ",
		output: "(((i)))",
	},
	{
		input:
			"Une dizaine de personnes se sont perch\u00e9-e-s dans les arbres, soutenu-e-s par d'autres militant-e-s rest\u00e9-e-s au sol ; pour protester contre les projet",
		output: "zadist",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 50 / fevrier 2007 Pourquoi veulent-ils tous glorifier le travail ? Car le travail est la \u00ab meilleure des polices ",
		output: "zozo",
	},
	{
		input:
			"Ce matin, une jeune femme noire est dans une rame de la ligne 1. Des contr\u00f4leur.e.s entrent et commencent \u00e0 v\u00e9rifier les titres de transports. La jeun",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"Projet d'appel \u00e0 engager un processus d'Assembl\u00e9e Constituante pour une autre Europe Nous, Citoyennes et Citoyens d'Europe, estimons que : la construc",
		output: "anonymous",
	},
	{
		input:
			"Ce \"journaliste\" travaille pour le m\u00e9dia d'extr\u00eame droite Breizh Info, qui photographie et publie le nom et l'adresse de militants nantais. Proche du ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"18 17 16 15 14 13 12 11 Pas de titre pour 11123 Pas de titre pour 11122 Pas de titre pour 11121 Pas de titre pour 11120 Pas de titre pour 11119 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"Cette brochure est une collaboration entre la revue anarchiste ap\u00e9riodique Des Ruines, qui nous offre ici son dossier \u00ab No TAV : La vall\u00e9e des larmes\u2026",
		output: ".",
	},
	{
		input:
			"Les remontrances culpabilisantes et les strat\u00e9gies de justification manich\u00e9enne qui \u00e9manent des gestionnaires du mouvement social ont tent\u00e9 de moralis",
		output: "19h17",
	},
	{
		input:
			"Sur \u00ab la libert\u00e9 d\u2019expression \u00bb La d\u00e9fense de la \u00ab libert\u00e9 d\u2019expression \u00bb est une question qui traverse aujourd\u2019hui les mouvements sociaux, les organi",
		output: "xxx",
	},
	{
		input:
			"Evenements de Oaxaca d'aujourd'hui Ce matin Le compas des gr\u00e9vistes l\u00e8vent la gr\u00e8ve de faim, Une Marche de paramilitaires Priistses prot\u00e9g\u00e9s par la Pf",
		output: "anonymous",
	},
	{
		input:
			"Vers 11h du matin nous avons entendu des bruits de machines en for\u00eat. Sur un chemin forestier \u00e0 deux pas de la communale, une cabane collective, un en",
		output: "vmc",
	},
	{
		input:
			"L\u2019avenir se joue maintenant. Le 25 janvier un jugement a confirm\u00e9 les expulsions des habitantEs et paysanNEs historiques. Avant et depuis ce jugement ",
		output: "zadist",
	},
	{
		input:
			"Solidaridad con la revuelta en Chile ! Abajo la karcel ! Plut\u00f4t fraudeuse que contr\u00f4leuse ! De hong kong \u00e0 la r\u00e9union, Vive la r\u00e9volte ! Mejor Chile q",
		output: ".",
	},
	{
		input:
			"Pourquoi un blocage d'une telle ampleur ? Pour r\u00e9clamer de meilleurs salaires ? Pour protester contre les ordonnances ? La baisse des APL ? La casse d",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Texte issu de la Coordination des intermittents et pr\u00e9caires d'Ile de France, ppour peut-\u00eatre donner des envies ici... Contre leur d\u00e9sert, des mondes ",
		output: "laurent",
	},
	{
		input:
			'Untitled Document OGM avec un M comme MANIPUL\u00c9 \u00a0\u00a0\u00a0\u00a0Pour neutraliser la contestation, les mots "manipul\u00e9" et "manipulation" furent remplac\u00e9s par "Modif',
		output: "anonymous",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 67 / septembre 2008 Les mamelles de l\u2019imp\u00e9rialisme fran\u00e7ais - Les mamelles de l\u2019imp\u00e9rialisme fran\u00e7ais - Loi du si",
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			'Regardons un peu, cest vertigineux : anciennement "Fonciere des r\u00e9gions", l\'entreprise bas\u00e9e \u00e0 Metz devient Covivio en 2008 et depuis 10ans, ne cesse ',
		output: "l'autrecantine",
	},
	{
		input:
			"Ce soir, alors qu'une sono est install\u00e9e devant la FNAC, qui obstrue prudemment ses entr\u00e9es avant 'heure de fermeture, un h\u00e9licopt\u00e8re s'\u00e9l\u00e8ve au dessu",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Renseignement pris aupr\u00e8s d'un d\u00e9l\u00e9gu\u00e9 CGT de la raffinerie de Donges, il s'av\u00e8re que ca n'est pas pr\u00eat de repartir. Petite explication... Il y en eff",
		output: "anonyme",
	},
	{
		input:
			"http://www.cnt-f.org/combat-syndicaliste-no435-juin-2018.html \u00c9DUCATION En Lorraine, le pr\u00e9sident de l\u2019universit\u00e9 emploie des \u00e9tudiants contre les \u00e9tu",
		output: "cntnantes",
	},
	{
		input:
			"Lettre de Ma\u00eft\u00e9 de mi janvier: Ces derniers temps, on a beaucoup entendu parler du CPF de Rennes. Ainsi, on a pu lire dans le quotidien Ouest-France d",
		output: "!",
	},
	{
		input:
			"COMMUNIQUE (presque) OFFICIEL DU MEDEF VICTOIRE ! Le MEDEF, organisation patronale repr\u00e9sentative, tient \u00e0 exprimer par ce communiqu\u00e9 toute sa satisfa",
		output: "anonymous",
	},
	{
		input:
			"La facult\u00e9 de Nantes joue donc en faveur du capital ce que nous nommerons clairement. Ce paradoxe clair n\u2019est que le reflet d\u2019un paradoxe plus grand q",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"\u00a0 Lors de son arrestation, sa maison a \u00e9t\u00e9 fouill\u00e9e ainsi que, une fois encore, la biblioth\u00e8que anarchiste Fermento. Ces perquisitions ont \u00e9t\u00e9 justifi",
		output: ".",
	},
	{
		input:
			"Dans cette course \u00e0 la mairie, El\u00e9onore REVEL sait donc bien s\u2019entourer. Son directeur de campagne, Wifried VAN LIEMPD, aussi. Pr\u00e9sent\u00e9 comme \u00abla pers",
		output: "actionantifascistenantes",
	},
	{
		input:
			"Pas de titre pour 11375 Pas de titre pour 11374 Pas de titre pour 11373 Pas de titre pour 11372 Pas de titre pour 11371 Pas de titre pour 11370 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			'David Pearce, l\'ambassadeur des Etats-Unis \u00e0 Ath\u00e8nes, manifestant d\u00e9j\u00e0 son "inqui\u00e9tude" ce lundi \u00e0 Nikos Kotzias, le ministre grec des affaires \u00e9trang',
		output: "anonyme",
	},
	{
		input:
			"Si ce n\u2019est pas la premi\u00e8re fois, celle-ci est diff\u00e9rente des pr\u00e9c\u00e9dentes puisqu\u2019il s\u2019agit cette fois d\u2019expulser le b\u00e2timent occup\u00e9 depuis 24 ans. D\u00e9c",
		output: ".",
	},
	{
		input:
			"En exclusivit\u00e9 dans les carnets : Le boycott de B\u00e9cassine BZH et r\u00e9sidences secondaires Dossier Gilets Jaunes, en Bretagne et ailleurs Grandes surface",
		output: "dispac'h",
	},
	{
		input:
			"Leur \u00e9tat de sant\u00e9 est plut\u00f4t stable, le manque d'\u00e9nergie se fait ressentir, mais pas de sympt\u00f4mes alarmants encore. Iels se plaignent cependant de lo",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Il fait chaud, tr\u00e8s chaud samedi 3 ao\u00fbt \u00e0 Nantes. Ni les temp\u00e9ratures caniculaires, ni les violences polici\u00e8res, ni les provocations des autorit\u00e9s, ni",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pendant l'op\u00e9ration C\u00e9sar en 2012 sur la zad de Notre-Dame-des-Landes, de nombreuses autres personnes avaient d\u00e9j\u00e0 \u00e9t\u00e9 bless\u00e9es gri\u00e8vement par ces gre",
		output: "zadist",
	},
	{
		input:
			"Voici bient\u00f4t quatre longues semaines que les gens normaux, j'entends les gens issus de la norme, avec deux bras et deux jambes pour signifier qu'ils ",
		output: "ahadhaam",
	},
	{
		input:
			"Pas de titre pour 12104 - 10h21 : il y a des manifestants au Liminbout. La maison n\u2019est pas encore attaqu\u00e9, ils sont en train d\u2019enlever l\u2019amiante. - 1",
		output: "zadist",
	},
	{
		input:
			"Face au projet urbain des gohards, d\u00e9fendons le jardin des ronces! Nous avons appris derni\u00e8rement que notre beau jardin des ronces serait prochainemen",
		output: "roncier",
	},
	{
		input:
			"- Un r\u00e9f\u00e9rendum, c'est l'\u00e9chec de la lutte. Dans la grande ville allemande de Stuttgart, une lutte tr\u00e8s ressemblante au mouvement anti-a\u00e9roport s'est ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Ce magazine ( l'Etudiant Libre ) est partie prenante de la \"convention de la droite\" de Marion Mar\u00e9chal Le Pen, un outil pour favoriser l'acceptabilit",
		output: "a",
	},
	{
		input:
			"A l'heure du d\u00e9jeuner, sous le soleil, les terrasses du centre ville sont remplies. On entend des chants de lutte sur les terrasses, et les hymnes inc",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le message d'un jeune execut\u00e9 d'un flic dans un banlieu de Nantes nous a choqu\u00e9s. Notre haine n'est pas explicaple. Nous voulions montr\u00e9es notre solid",
		output: "anonyme",
	},
	{
		input:
			"Dans un mouvement d'euphorie et d'\u00e9motion collective, malgr\u00e9 une certaine confusion, l'assembl\u00e9e d\u00e9cide de partir d\u00e9brayer les autres campus universit",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Rappelons d\u2019abord les bilans des audiences de comparution imm\u00e9diates des jeudi 3 et vendredi 4\u00a0mai 2018 au TGI de Paris. Sur les 6 personnes qui ont \u00e9",
		output: "...",
	},
	{
		input:
			"Bons comptes et vieux ennemis \u00ab\u00a0Et deux qui font neuf\u2026 C\u2019est moi qui vous remercie\u00a0!\u00a0\u00bb Depuis quelques jours une image vient me hanter\u00a0: celle de Kevi",
		output: "@nonyme",
	},
	{
		input:
			"Cette semaine :- nous avons diffus\u00e9 la prise de parole d'Awa Gueye lors de la conf\u00e9rence de presse organis\u00e9e \u00e0 l'occasion de la marche en hommage \u00e0 so",
		output: "maglib",
	},
	{
		input:
			"JUGE : Elisabeth CROISEASSESSEUSES : Marie LE VERRE et Mich\u00e8le AIRIAUDPROCUREURE : Sandrine CODEVELLE + 1 stagiaireAVOCATE des flics : Annie Hup\u00e9Parmi",
		output: "legalteam",
	},
	{
		input:
			"Pr\u00e9cisions et impressions, apr\u00e8s ma condamnation dans le proc\u00e8s en appel que m\u2019intentaient les fascistes de Defend Europe. \u00caTRE CONDAMN\u00c9 PAR UN \u00c9TAT A",
		output: "lahorde",
	},
	{
		input:
			"MOBILISATION CONTRE LA REPRESSION LE 17 SEPTEMBRE A AGEN N'HESITEZ PAS A FAIRE SUIVRE CE MESSAGE Le 17 septembre prochain se tiendra le proc\u00e8s de \" Ce",
		output: "laurent",
	},
	{
		input:
			"Il n'est pas rare d'entendre dire, avec des accents assez foucaldiens, par les n\u00e9oanarchistes qu'il s'agit de se transformer soi-m\u00eame, de modifier not",
		output: "a",
	},
	{
		input:
			"Nous entrons dans une s\u00e9quence r\u00e9pressive in\u00e9dite \u00e0 Nantes : les mesures d'expulsion des lieux de vies sont maintenant accompagn\u00e9es de mesures d'enfer",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"12 11 10 9 8 7 6 5 4 3 2 1 Les membres du groupuscule d'extr\u00eame droite int\u00e9griste et anti-avortement venaient faire une pri\u00e8re publique \u00e0 l'occasion d",
		output: "jackpalmer",
	},
	{
		input:
			"Le comit\u00e9 Lib\u00e9rons Georges / Nantes t'envoie cette lettre en t\u00e9moignage de notre soutien militant, dans le combat pour ta lib\u00e9ration. Comme des centai",
		output: "ibrahima",
	},
	{
		input:
			"Pas de titre pour 12360 Pas de titre pour 12359 Pas de titre pour 12358 Pas de titre pour 12357 Pas de titre pour 12356 Pas de titre pour 12355 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"En mars-avril, deux grandes gr\u00e8ves de la faim collectives des prisonni\u00e8r-e-s anarchistes et combattifs (celle des CCF et celle du R\u00e9seau des Prisonnie",
		output: "*",
	},
	{
		input:
			"Sous-vie ou insoumission ? Chaque jour de ta vie, ton corps dit des choses. Et ton corps ne peut pas mentir.Entends-tu le bruit des moteurs, le vrombi",
		output: "*",
	},
	{
		input:
			"- Nous nous opposerons \u00e0 tout d\u00e9placement d\u2019esp\u00e8ces ou mesures compensatoires et invitons chacun-e \u00e0 faire de m\u00eame\u00a0! Ces derni\u00e8res ann\u00e9es, les experts",
		output: "zadist",
	},
	{
		input:
			"Le 4 f\u00e9vrier 2020, le CRA* de Vincennes \u00e0 \u00e9t\u00e9 attaqu\u00e9 par des personnes enferm\u00e9es dans cette prison pour \u00e9trang\u00e8r-e-s. Un b\u00e2timent entier a cram\u00e9, ce ",
		output: "a",
	},
	{
		input:
			"En attendant que notre blog soit mis \u00e0 jour, vous pouvez \u00e9couter celui du 3 d\u00e9cembre sur https://archive.org/details/@radio_cayenne et celui du 10 d\u00e9c",
		output: "radiocayenne",
	},
	{
		input:
			"stephane mayer Un article du journal le point nous apprend que les tanks turques sont \u00e9quip\u00e9s d'armes fabriqu\u00e9es en France par une entreprise en plein",
		output: "x",
	},
	{
		input: "rue de la Baraudiere - tram 3 - arr\u00eat Beaus\u00e9jour",
		output: "anonyme",
	},
	{
		input:
			"Le Parti Socialiste ouvert \u00e0 la disqueuse Photo : Evan Forget La police tire sur la foule, place Graslin - Photo : Clem LRT Photo : Clem LRT Photo : V",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"26 mars : 19h Sons de l\u2019atelier radio r\u00e9alis\u00e9 avec des exil\u00e9.es \u00e0 Nantes / 20h30 \u00e9mission mensuelle de la CNT 31 mars : Radio Cayenne en direct des lu",
		output: "radiocayenne",
	},
	{
		input:
			"Infoaut : Maintenant que Syriza semble avoir conquis la majorit\u00e9 des si\u00e8ges au Parlement grec, que devrions-nous attendre des premiers pas du nouveau ",
		output: "...",
	},
	{
		input:
			"De fait, aveugl\u00e9 par sa \u00ab toute \u00bb puissance m\u00e9diatique, Sarkozy n\u00e9glige sa faiblesse politique. Il n\u2019est pas totalement ignorant de son impopularit\u00e9. ",
		output: "verdi",
	},
	{
		input:
			"Les contr\u00f4leurs du STAR tombent des nues. \u00ab On ne respecte plus notre fonction. Au contraire, on devient des cibles. \u00bb (1) Et \u00e0 l\u2019incompr\u00e9hension succ",
		output: "institutded\u00e9mobilisation",
	},
	{
		input:
			"\u00ab Un climat naus\u00e9abond s'installe dans notre pays \u00bb, tou-te-s les individu-e-s s'inscrivant dans\u00a0une d\u00e9marche politique progressiste au sens large ne ",
		output: "actionantifascistenantes",
	},
	{
		input:
			"Nouvelles de Mike, condamn\u00e9 suite \u00e0 l'explosion du 1er mai 2009 \u00e0 Chamb\u00e9ry Le 16 octobre 2012, j'ai \u00e9t\u00e9 convoqu\u00e9 chez une JAP (juge d'application des ",
		output: "anonyme",
	},
	{
		input:
			"La France ne tue plus les opposants \u00e0 sa politique uniquement en Afrique. Parce qu'en Afrique, c'est courant et consid\u00e9r\u00e9 comme presque \"normal\" de tu",
		output: "julieamadis",
	},
	{
		input:
			"La premi\u00e8re R\u00e9pression industrielle nous a vus expuls\u00e9s de la terre, entass\u00e9s dans des villes et des villages pleins de monde, utilis\u00e9s comme chair \u00e0 ",
		output: "anonyme",
	},
	{
		input:
			"Marche en hommage \u00e0 Steve Maia Cani\u00e7o, dimanche 21 Juin \u00e0 15H devant la pr\u00e9fecture.Il y a 1 an, cet homme de 24 ans est port\u00e9 disparu \u00e0 Nantes dans la",
		output: "...",
	},
	{
		input:
			"blocages : 4 rond-points sont bloqu\u00e9s pour les camions, et barrage filtrant pour les bagnoles, d\u00e8s 6h30 le matin (Carpiquet, Ifs, Renault trucks, Colo",
		output: "anonyme",
	},
	{
		input:
			"source : https://www.flickr.com/photos/valkphotos/ source : https://www.flickr.com/photos/valkphotos/ Et... ? Non, rien. Le gouvernement, de gauche ul",
		output: "(((i)))",
	},
	{
		input:
			"Lors de cette manif qui, contrairement aux 1er mai\u00a0 pr\u00e9c\u00e9dents, a su se d\u00e9faire du dispositif policier, les bureaux de Lemay, qui dessine les plans de",
		output: "sansattendredemain",
	},
	{
		input:
			"- Musicale de la bonne humeur - Chronique : du viandard au v\u00e9g\u00e9tarisme suivie de la lecture d\u2019un extrait de la brochure Nous ne mangeons pas de viande",
		output: "radiocayenne",
	},
	{
		input:
			"Les gens sont venus nombreux devant la 14e chambre au TGI, avant m\u00eame l'heure pr\u00e9vue pour l'audience. Les journalistes aussi. Ils tirent d'abord le po",
		output: "x",
	},
	{
		input:
			"Depuis plusieurs ann\u00e9es, diverses op\u00e9rations r\u00e9pressives sont men\u00e9es par l\u2019\u00c9tat italien contre celles et ceux qui luttent contre toute forme d\u2019autorit",
		output: ".",
	},
	{
		input:
			"Prison, technologies de surveillance, gal\u00e8res li\u00e9es \u00e0 l'\u00e9pid\u00e9mie et au confinement, questionnements et bien d'autres choses encore sont au programme d",
		output: "radiocayenne",
	},
	{
		input:
			"Selon la presse, il s'agit du r\u00e9sultat de l'enqu\u00eate men\u00e9e par la DIGOS et l'antiterro, pour deux \u00e9pisodes. Le premier, un engin explosif d\u00e9pos\u00e9 devant",
		output: "acab",
	},
	{
		input:
			"Zyed et Bouna, R\u00e9mi, Adama... trop de morts ! Trop de blessures, de mutilations, d'humiliations. Jusqu'\u00e0 ce dernier affront, qui n'a rien d'un acciden",
		output: "anonyme",
	},
	{
		input:
			"Aujourd'hui \u00e0 19h sur https://radiocayenne.antirep.net Au programme : La quotidienne de l'envol\u00e9e Chronique surveillance num\u00e9rique Pr\u00e9dation immobili\u00e8",
		output: "radiocayenne",
	},
	{
		input:
			"zad: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0Klx: #InfoTrafflic de https://radioklaxon.antirep.net/\u00a0Twt: autres sour",
		output: "zadist",
	},
	{
		input:
			"Avec plus de 1\u00a0000\u00a0prisonniers entass\u00e9s dans une prison de 587 \u00ab\u00a0places\u00a0\u00bb, la maison d\u2019arr\u00eat de Villepinte en Seine-St-Denis est l\u2019une des plus surpeu",
		output: ".",
	},
	{
		input:
			"\u00a0 Le 29 avril, une op\u00e9ration de flics a eu lieu dans un appart et dans un lieu collectif dans la Drome. Les flics sont venus avec une commission rogat",
		output: ".",
	},
	{
		input:
			"Limoges\u00a0: chronologie d\u2019une farce judiciaire\u00c9pisode 1\u00a0: \u00ab\u00a0Pour faire plaisir aux gendarmes, une juge transgresse sa propre loi\u00a0\u00bb sur le pr\u00e9l\u00e8vement d\u2019",
		output: ".",
	},
	{
		input:
			"Damien n\u2019\u00e9tait m\u00eame pas au courant de cette condamnation : ses signatures en bas des notifications de la date du proc\u00e8s, de la condamnation et de la c",
		output: "attaque",
	},
	{
		input:
			"R\u00e9sum\u00e9 des ces derniers jours d'occupation : - Dimanche fin d'apr\u00e8s midi : prise du ch\u00e2teau du tertre - Dans la nuit de dimanche \u00e0 lundi et lundi mati",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"A Paris, les \u00ab gilets jaunes \u00bb avaient refus\u00e9 le compromis avec les autorit\u00e9s. Le mouvement annon\u00e7ait son intention de bloquer la capitale, et d'attei",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Cela a \u00e9t\u00e9 l\u2018occasion, et l\u2018est encore et encore, d\u2018\u00e9crire sur les aspects th\u00e9oriques - m\u00eame si c\u2018est le plus souvent de facon limit\u00e9e. Le lien entre ",
		output: "...",
	},
	{
		input:
			"Notes rapides sur l'enqu\u00eate sociale rapideLes assistants sociaux ou conseillers d'insertion charg\u00e9s de ladite enqu\u00eate sont l\u00e0 pour \"aider\".\u00a0 Mais\u00a0 pou",
		output: "anonyme",
	},
	{
		input:
			"L\u2019affiche en cas d\u2019expulsion, \u00e0 diffuser largement ! On sent bien maintenant que le sens de nos vies se cherche dans des lieux communs et autonomes : ",
		output: "vmc",
	},
	{
		input:
			"Il a \u00e9t\u00e9 annonc\u00e9 il y a quelques jours qu'une ZAD allait se monter ce samedi 11 avril sur l'\u00eele d'Ol\u00e9ron en Charente-Maritime (17) en opposition \u00e0 un ",
		output: "camille",
	},
	{
		input:
			"ON BLOQUE TOUT ! Il y avait entre 30 000 et 40 000 manifestants ce jeudi 5 d\u00e9cembre dans les rues de Nantes. Une mobilisation \u00e9norme, mais cela ne suf",
		output: "@",
	},
	{
		input:
			"Besoin de soutien sur place, en face de l'entr\u00e9e du parking Graslin ! \u00c0 tout de suite !\u00a0 ______________ 14 oct : Aujourd'hui nous sommes en mesure de ",
		output: "l'autrecantinenantes",
	},
	{
		input:
			'La fnac : "certifi\u00e9 non conforme", les flics font sortir les clients sous le regard des cam\u00e9ras de surveillance Pas de titre pour 9987 Les camarades d',
		output: "jackpalmer",
	},
	{
		input:
			"Les accus\u00e9(e)s sont les compagnons Spyros Mandilas (qui a ni\u00e9 les accusations, mais a d\u00e9fendu la violence r\u00e9volutionnaire anarchiste), Andreas Tsavdar",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"Hier, on a sabot\u00e9 plusieurs distributeurs du tickets pour le transport public en Berlin, dans une action anticapitaliste directe. Avec cette action, o",
		output: ".",
	},
	{
		input:
			"Photo-02 Photo-01 \u00a0 Une fois de plus, le pr\u00e9fet de Loire Atlantique a choisi d\u2019employer la m\u00e9thode \u00ab\u00a0force et peur\u00a0\u00bb pour proc\u00e9der \u00e0 l\u2019expulsion des h",
		output: "dal44",
	},
	{
		input:
			"Benezech, charg\u00e9 de mission pour la pr\u00e9f, se r\u00e9veille et n'est pas au courant.. bon matin ! https://zad.nadir.org/spip.php?page=article&id_article=631",
		output: "zadist",
	},
	{
		input:
			"Une attaque de ce type peut parfois sembler futile, face \u00e0 ce monstre aux nombreuses t\u00eates, puisque, le plus souvent, une nouvelle t\u00eate repousse \u00e0 la ",
		output: ".",
	},
	{
		input:
			"KLX: 19h30 : rappel, l'AG des Usages (ce soir \u00e0 20h30) c'est pour les personnes qui habitent la zad et qui s'y organisent, les autres sont invit\u00e9es \u00e0 ",
		output: "zadist",
	},
	{
		input:
			"fallait bien les faire rentrer les bulldozers... b\u00e2timent qui aurait du devenir le squat a\u00e9r\u00e9 une des chambres le toit sur la zone de gratuit\u00e9 voila l",
		output: "anonymous",
	},
	{
		input:
			"Photo : Estelle Ruiz [ACTE 26 - APPEL NATIONAL \u00c0 NANTES - 11/05] Pour cet appel national, la pr\u00e9fecture avait annonc\u00e9 la couleur, en annon\u00e7ant un disp",
		output: "streetmedicnantes",
	},
	{
		input:
			"Squats Grecs en danger ! Recherchant des articles sur l\u2019indispensable site Contra Info (site multi-langues d\u2019infos alternatives), j\u2019apprends que le sq",
		output: "o.p.a",
	},
	{
		input:
			"C'est donc au miroir d'eau, en fin d'apr\u00e8s-midi, que quelques dizaines de personnes s'agr\u00e8gent pour inaugurer le v\u00e9ritable \u00e9v\u00e9nement de la rentr\u00e9e soc",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"La blessure d'une photographe, vis\u00e9e par une grenade de d\u00e9sencerclement intentionnellement. \u00a0 Bilan des bless\u00e9.es: - On notera un usage particuli\u00e8reme",
		output: "streetmedicsnantes",
	},
	{
		input:
			"RESISTONS ENSEMBLE / bulletin num\u00e9ro 124/ Novembre 2013 -\u00ab Ni oubli ni pardon \u00bb- [ S U R L E V I F ]Au Petit-Bard, la brutalit\u00e9 d'une expulsion locati",
		output: "r\u00e9seaure",
	},
	{
		input:
			"Une des stations de m\u00e9tro en flammes Un des seize bus enflamm\u00e9s Le si\u00e8ge du g\u00e9ant Enel en flammes Une des stations de m\u00e9tro saccag\u00e9e Fraude en masse d",
		output: "solidari@s",
	},
	{
		input:
			'- 10h20 : ils n\u2019arrivent pas \u00e0 sortir la pelleteuse (au nom de "Mairie de Vigneux") embourb\u00e9e \u00e0 la S\u00e9cherie !! Il va probablement falloir appeler une ',
		output: "zadist",
	},
	{
		input:
			"Pourtant, avant m\u00eame le d\u00e9but du d\u00e9fil\u00e9, la police avait multipli\u00e9 les provocations. Les \u00e9tudiants, partis de l'universit\u00e9 en tramway pour rejoindre l",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Mais il entre dans la cat\u00e9gorie des personnes concern\u00e9es par une loi de 2014 pondue par Taubira (article 721-2 du code p\u00e9nal), qui permet d'assortir l",
		output: ".",
	},
	{
		input:
			"Depuis le 2 mars nous avons commenc\u00e9, avec les compagnons \u00e0 l\u2019exterieur, une lutte pour l\u2019abolition des prisons de haute s\u00e9curit\u00e9 de type C, l\u2019aboliti",
		output: "anonyme",
	},
	{
		input:
			"Terrasse du Cercle Rouge Pas de titre pour 8944 Pas de titre pour 8943 Pas de titre pour 8942 Pas de titre pour 8941 Pas de titre pour 8940 Pas de tit",
		output: "anonyme",
	},
	{
		input:
			"M\u00e9lancolie ouvri\u00e8re https://fr.wikipedia.org/wiki/M%C3%A9lancolie_ouvri%C3%A8re fiction historique M\u00e9lancolie ouvri\u00e8re adapt\u00e9e de l\u2019essai de Michelle ",
		output: "*",
	},
	{
		input:
			"Photo : Jurneveles Photo : Jurneveles Photo : Jurneveles Photo : Jurneveles Photo : Axel Clergeau Photo : Jurneveles Photo : Marion Vacca Photo : Jurn",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Nous relayons ici le communiqu\u00e9 des copains de Vincennes\u00a0: Nous sommes des prisonniers en centre de r\u00e9tention administrative de Vincennes,en banlieue ",
		output: ".",
	},
	{
		input:
			"Beaucoup de rues et ruelles bloqu\u00e9es, nombreux bus de MAT (CRS) et jeeps de la police antiterroriste (OPKE) Appel \u00e0 solidarit\u00e9 du squat de r\u00e9fugi\u00e9.es/",
		output: ".",
	},
	{
		input:
			"DFAK : Digital First Aid Kithttps://www.digitalfirstaid.org/fr/ ?Une trousse con\u00e7ue pour vous conduire \u00e0 la bonne \u00e9quipe CiviCERTLa trousse de premier",
		output: "valk",
	},
	{
		input:
			"\u00a0 Chasse aux indig\u00e8nes en Bolivie Le 20 octobre dernier, il y a eu des \u00e9lections sur le territoire contr\u00f4l\u00e9 par l'Etat plurinational de Bolivie, un jo",
		output: "x",
	},
	{
		input:
			"\u00ab Parents et enfant fuyant les gaz des CRS. Calais \u2013 France le 29/02/2016 \u00bb Au fil des heures, les t\u00e9moignages s\u2019accumulent d\u2019une expulsion (voir ici,",
		output: "anonyme",
	},
	{
		input:
			'Je voulais partager il ya peu de temps des infos \u00e9chang\u00e9es avec "mon conseiller" de banque.je voulais le faire avant le 6 novembre, date de changement',
		output: ".",
	},
	{
		input:
			"1. Le secret, c\u2019est commencer D\u2019abord, tu as besoin de choisir la cible de ton action directe et la tactique que tu utiliseras. Pour cette recette, m\u00ea",
		output: "anonyme",
	},
	{
		input:
			"A Nantes, la nouveaut\u00e9 tient dans la convergence nouvelle des diff\u00e9rentes forces de lutte. Des syndicalistes ont pris part \u00e0 une assembl\u00e9e de Gilets J",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Avec les ann\u00e9es Sarkozy, les forces de l\u2019ordre se sont dot\u00e9es d\u2019armes de guerre permettant de rendre leur combat contre les ennemi-e-s int\u00e9rieur-e-s (",
		output: "zadist",
	},
	{
		input:
			"Avant, le principal moyen pour la police d\u2019interdire la diffusion d\u2019un site Internet, c\u2019\u00e9tait la saisie du serveur, une proc\u00e9dure parfois complexe. Av",
		output: "@nonyme",
	},
	{
		input:
			'- d\u00e8s maintenant "Appel \u00e0 sur-occupation", on se retrouve tous les jours pour construire, \u00e9changer, surveiller les flics qui nous surveillent (chouett',
		output: "(((i)))",
	},
	{
		input:
			"FRANCE - 4 projections en France autour de la Journ\u00e9e internationale pour l'\u00e9limination de la violence \u00e0 l'\u00e9gard des femmes (du 25 novembre 2013) DES ",
		output: "anonyme",
	},
	{
		input:
			"A l'occasion du 27 janvier, comm\u00e9moration de la shoah, les sal\u00e9siens ont choisi de mettre en avant la m\u00e9moire du cardinal Hlond, primat de pologne pen",
		output: "ahadhaam",
	},
	{
		input:
			"Pour une critique de l\u2019id\u00e9ologie IDENTITAIRE. Contre l\u2019assignation, pour le d\u00e9passement et la totalit\u00e9. Emission 2 Le samedi 25 Juin \u00e0 20h *Une discus",
		output: "vosstanie",
	},
	{
		input:
			"\u00a0 Le 1er mai 2019 \u00e0 Paris et ses lendemains nous ont trimball\u00e9 d'un rouage \u00e0 l'autre des diff\u00e9rentes cha\u00eenes de la r\u00e9pression: des commicos aux tribun",
		output: "a",
	},
	{
		input:
			"Ce mardi 10 octobre 2017, le Pink Bloc que nous avions connu en 2016 durant la mobilisation contre la loi travail, s\u2019est reconstitu\u00e9. Appel\u00e9 par le Co",
		output: "anonyme",
	},
	{
		input:
			"A diffuser Rapide retour sur les diff\u00e9rentes exactions estivales de l'extr\u00eame droite \u00e0 Nantes : D\u00e9but Juillet, au moment du festival de la ZAD, une de",
		output: "actionantifascistenantes",
	},
	{
		input:
			"Quelles revendications ? La revendication premi\u00e8re para\u00eet tr\u00e8s limit\u00e9e : la lutte contre l'augmentation du prix du carburant, qui atteint effectivemen",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Les nouvelles balles de gomme \u00ab made in france \u00bb sont tir\u00e9es sur la foule Comme on l\u2019avait signal\u00e9 d\u00e9but 2016, le minist\u00e8re de l\u2019int\u00e9rieur s\u2019est dot\u00e9 ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Quand l'AFP (ou autre) fait mine de d\u00e9couvrir que des Antifas aux Zadistes, en omettant l'immense majorit\u00e9 de monsieur et madame, tout le monde d\u00e9test",
		output: "karacole",
	},
	{
		input:
			"Cette information, sortie \u00e0 l\u2019occasion d\u2019une courte gr\u00e8ve lanc\u00e9e par le syndicat FO sur fond de revendications salariales, pourrait certainement int\u00e9r",
		output: "sansattendredemain",
	},
	{
		input:
			"Qui est aux commandes ? Qui se cache derri\u00e8re ce bilan accablant, profond\u00e9ment injuste ? Le boss de l'institution judiciaire dans un endroit, c'est le",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Appel pour une mobilisation internationale \u00e0 Gen\u00e8ve du 27 au 30 juillet Stoppons l'agenda OMC/multinationales avant Hong Kong ! Appel lanc\u00e9 apr\u00e8s une ",
		output: "anonymous",
	},
	{
		input:
			"Ci-dessous quelques extraits du communiqu\u00e9: \"PROJET NEMESIS PREMIER ACTE Nous assumons la responsabilit\u00e9 de l'attaque de la maison du procureur Georgi",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"Le gouvernement trahit les accords obtenus par la lutte selon lesquels ni les travaux de l'a\u00e9roport ni les expulsions ne commenceraient avant l'\u00e9puise",
		output: "zadist",
	},
	{
		input:
			"Les JNR version ann\u00e9es 1990. Ayoub \u00e0 la tribune, \u00e0 droite sur la photo J\u00e9r\u00e9my Mourain et \u00e0 ses cot\u00e9s Yohan Mutte Fuyant ses responsabilit\u00e9s, tant vis-",
		output: "anonyme",
	},
	{
		input:
			"Par 478 voix contre 39 (et 165 abstentions), ce trait\u00e9 qui a longtemps demeur\u00e9 dans le secret et \u00e9t\u00e9 n\u00e9goci\u00e9 dans les couloirs par les lobbys (notamme",
		output: "r\u00e9voltenum\u00e9rique",
	},
	{
		input:
			"Communiqu\u00e9 des \u00ab\u00a0colleuses\u00a0\u00bb Pour la premi\u00e8re fois, dans la nuit du dimanche 3 au lundi 4\u00a0novembre, plus de 300 colleuses ont \u00e9t\u00e9 coller simultan\u00e9ment",
		output: "...",
	},
	{
		input:
			"\"Notre autonomie, bas\u00e9e sur l'esprit de l'autod\u00e9termination, est irr\u00e9versible... Qu'ils sachent [\u00e0 La Paz] que nous n'allons plus les allaiter\" s'est ",
		output: "fab",
	},
	{
		input:
			'Bolivie - "Un regard anarchiste sur les mouvements de protestation et la d\u00e9mission du pr\u00e9sident indig\u00e8ne Evo Morales en Bolivie." La fin d\'un leadersh',
		output: "a",
	},
	{
		input:
			"A 11 h ce matin (12/06/03) les syndicats appelaient \u00e0 un rassemblement devant la pref'. Il y a eu d'abord les sempiternelles d\u00e9clarations des d\u00e9l\u00e9gu\u00e9s",
		output: "anonymous",
	},
	{
		input:
			"La deuxi\u00e8me section de la Cour D\u2019appel du chef-lieu ligure a lu le verdict vers midi : Vincenzo Puglisi est condamn\u00e9 \u00e0 15 ans de prison, Vincenzo Vecc",
		output: "anonymous",
	},
	{
		input:
			"Sous un soleil frais et timide, \u00e0 11h du matin, une longue colonne chamarr\u00e9e et joyeuse de pr\u00e8s de 600 personnes s\u2019est \u00e9tir\u00e9e entre Bure et le Bois Le",
		output: ".",
	},
	{
		input:
			"\u00a0 1- Les v\u00e9ritables h\u00e9ros de cette soir\u00e9e \u00e9lectorale ne sont pas les finalistes, Macron et Le Pen. Ce sont les strat\u00e8ges du Parti Socialiste ! Malgr\u00e9 ",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Pas de titre pour 12478 Rien n'a \u00e9t\u00e9 fait pour les riverains et l'omerta a \u00e9t\u00e9 quasi-totale. Cependant, une mesure a \u00e9t\u00e9 prise par les autorit\u00e9s : l'a",
		output: "pcint",
	},
	{
		input:
			"Devant un \u00e9norme drapeau wiphala (drapeau indig\u00e9niste) et les portraits de Bartolina Sisa et de Hugo Ch\u00e1vez, le leader paysan Felipe Quispe parle avec",
		output: "fab",
	},
	{
		input:
			"Non PRESS TV n\u2019est pas un m\u00e9dia comme un autre PRESS TV est l\u2019organe officiel de propagande du pouvoir iranien : Press TV a \u00e9t\u00e9 cr\u00e9\u00e9e par l\u2019\u00c9tat irani",
		output: "collectif",
	},
	{
		input:
			"A Paris, la r\u00e9volte et la Nuit Debout ont bien du mal \u00e0 \u00eatre canalis\u00e9espar les citoyennistes de tout poil, qui sont pourtant \u00e0 la manoeuvre.Les gens o",
		output: "anonyme",
	},
	{
		input:
			"Libres \u00a9 Val K - https://www.flickr.com/people/valkphotos/ Deux jours apr\u00e8s l'attentat abject, le lundi 8 septembre,\u00a0Ouest-France publiait un article ",
		output: "anonyme",
	},
	{
		input:
			"De tout bois #4 Revue de lutte contre le Center Parcs de Roybon Num\u00e9ro 4, hiver 2015/2016 ISBN 979-10-91772-10-5 ISSN 2426-3486 Publication trimestrie",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 1737 Les ministres europ\u00e9ens en charge de l'immigration et des politiques envers les r\u00e9fugi\u00e9s vont se r\u00e9unir \u00e0 Groningue, aux Pays-B",
		output: "anonymous",
	},
	{
		input:
			"La solidarit\u00e9 c'est l'offensive Le vendredi 24 juillet, les compagnon-ne-s anarchistes M\u00f3nica Caballero et Francisco Solar ont \u00e9t\u00e9 arr\u00eat\u00e9es, accus\u00e9s d",
		output: "a",
	},
	{
		input:
			"Urgent : Emma\u00fcs expulse ? Nous sommes des familles, avec ou sans-papiers, en attente d'un logement . Depuis plusieurs mois ou plusieurs ann\u00e9es nous vi",
		output: "anonymous",
	},
	{
		input:
			"La r\u00e9volution du 4 ao\u00fbt 1983 ne fut pas seulement une r\u00e9volution humanocrate, une r\u00e9volution instaurant le CDR avec d\u00e9l\u00e9gu\u00e9s r\u00e9vocables, pas seulement",
		output: "julieamadis",
	},
	{
		input:
			"Pas de titre pour 1793 Pas de titre pour 1791 Pas de titre pour 1786 Pas de titre pour 1790 Pas de titre pour 1784 Pas de titre pour 1783 Pas de titre",
		output: "anonymous",
	},
	{
		input:
			"La derni\u00e8re personne toujours enge\u00f4l\u00e9e pour cette affaire vient d'ailleurs tout juste d'\u00eatre enfin relach\u00e9e. Une autre personne est aussi par ailleurs",
		output: "(((i)))",
	},
	{
		input:
			"Les flics fran\u00e7ais ont arrete Carla il y a deux semaines, apres 1 an et demi de clandestinite. Elle etait recherchee notamment parceque elle etait acc",
		output: "a",
	},
	{
		input:
			"Samedi 25\u00a0f\u00e9vrier avait donc lieu une manifestation contre la venue de Marine Le Pen \u00e0 Nantes. Les opposants au FN \u00e9taient appel\u00e9s par la CGT, la LDH ",
		output: ".",
	},
	{
		input:
			"Deux autres piqueteros ont \u00e9t\u00e9 arr\u00eat\u00e9s, cette fois \u00e0 Quilmes (grand Buenos Aires), accus\u00e9s d' \"extorsion\" pour avoir particip\u00e9 \u00e0 un blocage d'une usin",
		output: "fab",
	},
	{
		input:
			"A PROPOS DES ARRESTATIONS DE SOI DISANT TERRORISTES ( D\u00e9cembre 2008) A la fin de mois de Janvier 2008, quatre personnes ont \u00e9t\u00e9 incarc\u00e9r\u00e9es en d\u00e9tenti",
		output: "solidarite",
	},
	{
		input:
			"Les traductrices ont fait le choix de sortir des infos du tac-au-tac : cette petite brochure est vou\u00e9e \u00e0 servir de support pour des initiatives de sol",
		output: "-",
	},
	{
		input:
			'Depuis la d\u00e9claration \u00ab\u00a0d\u2019ind\u00e9pendance\u00a0\u00bb et la partition des territoires en 1948 Isra\u00ebl n\u2019a eu de cesse d\u2019en conqu\u00e9rir davantage, car" il re-vient" et',
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"Cerveaux non disponibles Paul* est fondateur et administrateur des Cerveaux non disponibles, \u00ab\u00a0collectif qui a pour ambition de relayer des contenus (",
		output: "@nonyme",
	},
	{
		input: "Par Polemix et la voix off www.polemixetlavoixoff.com",
		output: "moi",
	},
	{
		input:
			"Une patrouilleuse attaqu\u00e9e \u00e0 Guadalajara Une manifestation a rassembl\u00e9 des centaines de jeunes, dans le centre de la ville de Guadalajara. Les premi\u00e8r",
		output: "secoursrouge",
	},
	{
		input:
			"Sur les bicyclettes, les vtt customis\u00e9s, les v\u00e9lo-couch\u00e9 ou les tandems on retrouve des gens de tous les \u00e2ges, des militants du mouvements, des occupa",
		output: "mslc21",
	},
	{
		input:
			"un site libanais \u00e9voque une \u00e9mission d'une t\u00e9l\u00e9 israelienne ( du 21/12 ), qui \u00e9voque un entretien datant de 2000 entre le directeur du principal insti",
		output: "ahadhaam",
	},
	{
		input:
			"Pas de titre pour 9458 Vendredi 22 janvier, le rassemblement contre le d\u00e9bat sur l\u2019identit\u00e9 nationale a \u00e9t\u00e9 attaqu\u00e9 par une trentaine de fachos. Alors",
		output: "anonyme",
	},
	{
		input:
			"Cette demande est en passe de devenir r\u00e9alit\u00e9. Le conseil municipal de Minneapolis a annonc\u00e9 ce dimanche 7 juin qu\u2019il allait d\u00e9manteler ses services d",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Madame la Professeure Ir\u00e8ne Kahn-Bensaude Pr\u00e9sidente du Conseil de l\u2019Ordre des m\u00e9decins de Paris 14, rue Euler, 75008 PARIS Madame la Pr\u00e9sidente, Par ",
		output: "sisyphe",
	},
	{
		input:
			"Un gros dispositif de gendarmes nous attendait aux abords de la prison. D\u00e8s 18h, ils avaient la possibilit\u00e9 d'arr\u00eater toutes les voitures se rendant \u00e0",
		output: ".",
	},
	{
		input:
			"Mes services de renseignement ont pu, par des \u00e9changes d\u2019informations, savoir que des terroristes proc\u00e9daient, sur le darknet, \u00e0 des communications cr",
		output: "anonyme",
	},
	{
		input:
			"Un rendez-vous d\u2019habitu\u00e9s - les Turons 1951 devant l\u2019Ep\u00e9e Royale en train de faire des quenelles L\u2019attaque a dur\u00e9 moins de deux minutes. Les n\u00e9o-fasci",
		output: "anonyme",
	},
	{
		input:
			'Ces "consid\u00e9rations sur le viol et le patriarcat" s\'attaquent de front \u00e0 diff\u00e9rentes questions comme celles de la sexualit\u00e9, du corps, du consentement',
		output: "anonyme",
	},
	{
		input:
			"Manifestation BLM \u00e0 Bruxelles A l\u2019issue du rassemblement, des milliers de personnes ont remont\u00e9 le boulevard de la R\u00e9gence avant d\u2019\u00eatre bloqu\u00e9s place ",
		output: "secoursrouge",
	},
	{
		input:
			"Assassinat de Giovanni et manifestations \u00e0 Guadalajara (4 juin) En plus du climat international provoqu\u00e9 non seulement par la pand\u00e9mie, mais aussi par",
		output: "anonyme",
	},
	{
		input:
			"Le fascisme en Vend\u00e9e sonne depuis longtemps comme un euph\u00e9misme de ph de Villiers et de son groupuscule le mpf. R\u00e9cemment, il y a eu une focalisation",
		output: "a",
	},
	{
		input:
			"Ce sont tout de m\u00eame plus de 6000 personnes qui s'\u00e9lancent vers le c\u0153ur de la m\u00e9tropole, en franchissant la Loire puis en suivant le cours des 50 Otag",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Des voitures de police ont notamment \u00e9t\u00e9 attaqu\u00e9es par des individus arm\u00e9s de bouteilles et de pav\u00e9s. Sur le passage de la centaine de casseurs impliq",
		output: "sansattendre",
	},
	{
		input:
			"Pas de titre pour 8900 Pas de titre pour 8899 Venez manifester votre solidarit\u00e9 contre toutes les r\u00e9pressions et avec les r\u00e9volt\u00e9s le 25 avril \u00e0 Nante",
		output: "collectif",
	},
	{
		input:
			"Comme nous l'avons vu dans une pr\u00e9c\u00e9dente analyse, la pand\u00e9mie li\u00e9e au COVID-19 a brusquement interrompu les troubles sociaux et politiques dans le mo",
		output: "crimethinc",
	},
	{
		input:
			"Facebook (FB) a supprim\u00e9 plusieurs pages qu\u2019ils croient \u00eatre connect\u00e9es \u00e0 crimethinc.com et itsgoingdown.org, parmi d\u2019autres pages anarchistes et anti",
		output: ".",
	},
	{
		input:
			"Le boycott d\u2019Isra\u00ebl prend une ampleur jamais vue gr\u00e2ce \u00e0 la campagne BDS (Boycott, D\u00e9sinvestissements et Sanctions), port\u00e9e par des militants du monde",
		output: "patricebardet",
	},
	{
		input:
			"Personne ne peut \u00eatre assur\u00e9.e de n'avoir jamais \u00e0 subir la prison, que ce soit en \u00e9tant enferm\u00e9.e ou \u00e0 travers ses proches. Il faut garder en t\u00eate qu",
		output: ".",
	},
	{
		input:
			"Le printemps revenu, les discussions sur la non-mixit\u00e9 vont bon train. Et \u00e0 chaque fois que je vois des discussions sur le sujet, je ne peux m'emp\u00eache",
		output: "anonyme",
	},
	{
		input:
			"Les affrontements de vendredi 18 septembre ont commenc\u00e9 quand la police a d\u00e9clar\u00e9 ill\u00e9gale une manifestation devant le b\u00e2timent de l\u2019Immigration et de",
		output: "secoursrouge",
	},
	{
		input:
			"Photo : Marin Driguez Photo : Estelle Ruiz Photo : Marin Driguez Photo : Estelle Ruiz Photo : Marin Driguez Photo : Estelle Ruiz Photo : Estelle Ruiz ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Le 4 juin dernier \u00e0 Lille, lors d\u2019une des manifestations contre les crimes et les violences polici\u00e8res qui ont suivi la mort de George Floyd, un polic",
		output: "secoursrouge",
	},
	{
		input:
			"Vendredi 25 septembre \u00e0 19h30 au Champfou. A Notre Dame et autour, l'\u00e9t\u00e9 a \u00e9t\u00e9 bien rempli. Il y a eu du monde, des moments forts et souvent enthousia",
		output: "anonyme",
	},
	{
		input:
			"Cette journ\u00e9e de manifestation commen\u00e7ait avec l'annonce d'une nouvelle du racisme ordinaire, meurtrier quand la police est dans les parages: la veill",
		output: "anonyme",
	},
	{
		input:
			"Quelqu\u2019un est mort. Un camarade, un compagnon, un antifa. Tu\u00e9 lors d\u2019une bagarre de rue contre des skins fascistes. Tu\u00e9s dans la rue par un fasciste, ",
		output: "anonyme",
	},
	{
		input:
			"Le r\u00e9sultat obtenu par le MAS n'a pas seulement repr\u00e9sent\u00e9 un coup dur pour une droite qui se postulait comme mur de contention face \u00e0 l'\u00e9mergence ind",
		output: "fab",
	},
	{
		input:
			"Ils risquent 10 ans de prison et 150 000\u20ac d'amende et cela pour un simple DDOS (distributed denail of service) autrement dit un blocage des services i",
		output: "anonyme",
	},
	{
		input:
			"Un article est mis \u00ab\u00a0en d\u00e9bat\u00a0\u00bb [sic], mais sans autre d\u00e9batteurs que des modos et un comparse.https://nantes.indymedia.org/articles/51300Le probl\u00e8me,",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Euromanifestion en m\u00e9moire de notre ami tu\u00e9 au chzechtek ce mois d'aout 2005 pour le seul crime d'avoir voulu danser et faire la f\u00e9te LIBERTE DE CIRCU",
		output: "anonymous",
	},
	{
		input:
			"Cher.e.s vous, Nous en appelons \u00e0 vous pour la protection des droits de tous les enfants. Le gouvernement a lanc\u00e9 le processus parlementaire en vue de",
		output: "moi",
	},
	{
		input:
			'Non \u00e0 "Isra\u00ebl start up nation" Le \u00ab\u00a0Tour de France\u00a0\u00bb a fait \u00e9tape \u00e0 Lyon, les 12 et 13\u00a0Septembre. Occasion pour les militants des droits humains de d\u00e9',
		output: "antifa",
	},
	{
		input:
			"Vinci \u00c9nergies travaille dans l'\u00e9nergie et l\u2019information via 6 r\u00e9seaux de marques : Actemium : solutions pour l\u2019industrie, Axians : communication voix",
		output: "zadist",
	},
	{
		input:
			"\u2013 Le couvre feu : un confinement partiel. C\u2019est une mesure de p\u00e9riode de guerre, qui est impos\u00e9e d\u00e8s samedi \u00e0 20 millions de personnes, pour l\u2019instant",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Marseille solidaire Avec ce texte, nous, des femmes du Belarus, nous adressons \u00e0 toutes les femmes de ce monde . On a besoin de votre soutien. Le Bela",
		output: ".",
	},
	{
		input:
			"Le 17 juillet, les recours qui concernaient les demandes de justice au sujet des contrevenances aux lois dites \u00e9cologiques cens\u00e9es prot\u00e9ger notre natu",
		output: "anonyme",
	},
	{
		input:
			"Cet ensauvagement des \u00e9lites fran\u00e7aises, qui se traduit par des appels aux meurtres policiers, n\u2019est pas nouveau. Au d\u00e9but du mouvement des Gilets Jau",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Une contre manifestation imm\u00e9diatement bloqu\u00e9e par un tr\u00e8s fort dispositif policier, pendant que l'extr\u00eame droite \u00e9tait prot\u00e9g\u00e9e. Le cort\u00e8ge gaz\u00e9 dans",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Mardi 25 ao\u00fbt 2020, Carla, arr\u00eat\u00e9e le 26 juillet dernier , a finalement \u00e9t\u00e9 extrad\u00e9e en Italie. Elle est d\u00e9sormais incarc\u00e9r\u00e9e \u00e0 la prison de Vigevano,",
		output: ".",
	},
	{
		input:
			"Cette entreprise a \u00e9t\u00e9 attaqu\u00e9e parce que c'est un rouage de l'exploitation animale et plus largement de la domestication du vivant. C'est ce syst\u00e8me,",
		output: ".",
	},
	{
		input:
			"EVO MORALES A DECRETE LA NATIONALISATION DES HYDROCARBURES EN BOLIVIE. Le pr\u00e9sident bolivien a effectu\u00e9 l'annonce depuis un champ p\u00e9trolier, o\u00f9 il est",
		output: "fab",
	},
	{
		input:
			"Dans sa course folle aux profits, le capitalisme jette toujours plus de monde dans la pr\u00e9carit\u00e9 et rend notre environnement toujours plus invivable. F",
		output: "anonyme",
	},
	{
		input:
			"Ce jour-l\u00e0, la police a bless\u00e9 plus de 200 personnes, dont au moins 3 ont perdu l'usage d'un \u0153il suite \u00e0 des tirs de flashball. Les 1800 policiers mob",
		output: "comit\u00e9desoutien\u00e0enguerrand",
	},
	{
		input:
			"Comment le droit \u00e0 l\u2019autod\u00e9termination des femmes*\u00a0[1] se voit attaqu\u00e9 avec des motifs frivoles et pourquoi les avortements ne sont jamais faciles. Tr",
		output: "x",
	},
	{
		input:
			"Intelligence artificielleB\u00e9n\u00e9ficiaires de plusieurs $100M en financement d\u2019\u00c9tat, les labos d\u2019IA \u0153uvrent \u00e0 mettre des algorithmes d\u2019\u00ab apprentissage aut",
		output: "anonyme",
	},
	{
		input:
			"\"J'appelle Hormando Vaca D\u00edez \u00e0 renoncer \u00e0 la succession constitutionnelle. Il est l'heure du renoncement. L'appel vaut aussi pour Mario Cossio. Et le",
		output: "fab",
	},
	{
		input:
			"Il y a une semaine, des appels \u00e0 solidarit\u00e9 internationale nous parvenaient depuis la Bi\u00e9lorussie, qui connait en ce moment un soul\u00e8vement contre Louk",
		output: "anonym",
	},
	{
		input:
			"Ensemble rejetons la politique actuelle de remise \u00e0 la rue, soutenons les personnes expuls\u00e9es pour la d\u00e9fense de leurs droits essentiels.#accueilincon",
		output: "l'autrecantine",
	},
	{
		input:
			"Des homophobes en sous-nombre, m\u00eame compar\u00e9s aux keufs Le 10\u00a0octobre \u00e0 14h, un rassemblement a \u00e9t\u00e9 organis\u00e9 par la clique de La manif pour tous sur la",
		output: "anonyme",
	},
	{
		input:
			"ARRESTATIONS DE MASSE ET R\u00c9PRESSION JUDICIAIRE Le document promet d'abord une \u00ab plus grande mobilit\u00e9 des forces, pour mettre fin aux exactions et inte",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"LE CONFLIT AVEC AGUAS DE ILLIMANI Les acteurs principaux de la dite \"guerre de l'eau\" furent les habitants de El Alto et l'entreprise francaise Suez-L",
		output: "fab",
	},
	{
		input:
			"Cette campagne a lanc\u00e9 un appel aux actions pour le 10 octobre. Durant tout le week-end des rassemblements sont organis\u00e9s dans diff\u00e9rentes villes d\u2019Eu",
		output: "secoursrouge",
	},
	{
		input:
			"Image Affiche Vegouest Festival Programme du festival 10h00 : pr\u00e9sentation et petite formation sur les actions anti-chasse 11h30 : formation argumenta",
		output: "anonyme",
	},
	{
		input:
			"Voici l\u2019appel t\u00e9l\u00e9phonique en question\u00a0: Une personne - qu\u2019on a qu\u2019\u00e0 appeler \u00ab\u00a0A\u00a0\u00bb - re\u00e7oit un appel sur son t\u00e9l\u00e9phone de la part de quelqu\u2019un qui se ",
		output: "anonyme",
	},
	{
		input:
			"Du coup, les services de la PASS font un simple exercice d'orientation, sachant qu'il n'y aura pas de solution pour les \u00e9ventuels malades... Conclusio",
		output: "anonyme",
	},
	{
		input:
			"Le 14 juillet 2020, une \u00e9quipe de colleuses f\u00e9ministes subissait une r\u00e9pression hallucinante de la part de policiers nantais : arrestations arbitraire",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Il y a des b\u00e2timents vacants \u00e0 Nantes ! On les connait !Qu\u2019est ce qui peut justifier de laisser des gens dormir sur le trottoir quand il y a la place ",
		output: "l'autrecantine",
	},
	{
		input:
			"Le vendredi 16 novembre, une manifestation \u00e9tait appel\u00e9e \u00e0 18 heures pour s'approcher au plus pr\u00e8s du centre de r\u00e9tention de Vincennes. (Un r\u00e9cit de l",
		output: "anonyme",
	},
	{
		input:
			"\u00a053 personnes ont \u00e9t\u00e9 trait\u00e9es m\u00e9dicalement, dont dix personnes bless\u00e9es par balles r\u00e9elles. Treize autres ont \u00e9t\u00e9 bless\u00e9s par balles en caoutchouc et",
		output: "secoursrouge",
	},
	{
		input:
			"D\u00e8s le d\u00e9but d'apr\u00e8s-midi, la salle de comparution imm\u00e9diate du Tribunal de Grande Instance de Nantes est bond\u00e9e. Des journaliste sont venus se r\u00e9gale",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"...le distributeur de billets d'une banque a cram\u00e9 \u00e0 Montreuil (93), la vitre de la section PS du Pr\u00e9-St Gervais (93) a \u00e9t\u00e9 transperc\u00e9e sous les coups",
		output: "aaa",
	},
	{
		input:
			"\u00ab Nous exigeons que le Crous reconnaisse ses fautes \u00bb Dans un communiqu\u00e9, plusieurs organisations et syndicats, dont Solidaires \u00c9tudiant\u00b7e\u00b7s et le Syn",
		output: "x",
	},
	{
		input:
			'La Bolivie est le cadre depuis plusieurs ann\u00e9es de ce que l\'on appelle la "guerre du gaz (et du P\u00e9trole)". En effet ces ressources naturelles, les seu',
		output: "fab",
	},
	{
		input:
			"J'ai entendu dire que les for\u00eats devaient \u00eatre \u00ab\u00a0entretenues\u00a0\u00bb. Pire, qu'elles devaient \u00eatre \u00ab\u00a0nettoy\u00e9es\u00a0\u00bb. J'ai entendu dire que les for\u00eats devaient ",
		output: ".",
	},
	{
		input:
			"\u00abUn violador sobre tu camino\u00bb El patriarcado es un juez que nos juzga al nacer Y nuestro castigo es la violencia que NO vesEl patriarcado es un juez q",
		output: "karacole",
	},
	{
		input:
			"Manifeste R\u00e9sister \u00e0 la surveillance totale de nos villes et de nos vies Partout sur le territoire fran\u00e7ais, la Smart City r\u00e9v\u00e8le son vrai visage\u00a0: ce",
		output: "anonyme",
	},
	{
		input:
			"En attendant le grand rendez-vous de ce soir (anniversaire de l\u2019assassinat du jeune Alexis Grigoropoulos \u00e0 Exarcheia le 6 d\u00e9cembre 2008 qui avait prov",
		output: "anonyme",
	},
	{
		input:
			"UNE CENSURE QUI NE DIT PAS SON NOM Nantes R\u00e9volt\u00e9e n\u2019est pas seule : il semble que cette invisibilisation touche d\u2019autres pages facebook de m\u00e9dias ind",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Samedi 26 Mai: 20h30: klaxon: \u00e9mission-discussion sur l'historique de la lutte \u00e0 la zad et la situation depuis l'abandon du projet d'a\u00e9roport: la n\u00e9go",
		output: "d\u00e9fendrelazad",
	},
	{
		input:
			"Le colis contenait des tubes m\u00e9talliques remplis d'explosifs, des vis et des morceaux de lames de rasoir, et devait \u00eatre activ\u00e9 par l'interm\u00e9diaire d'",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"\u00c7a commence avec la manifestation du 9 mai : en 1994, lors de la dispersion d\u2019une manifestation anti-am\u00e9ricaine organis\u00e9e par plusieurs groupes d\u2019extr",
		output: "@nonyme",
	},
	{
		input:
			"Que faire lorsqu\u2019un proche est incarc\u00e9r\u00e9\u00a0? Comment demander un permis de visite\u00a0? Comment se d\u00e9roule un parloir\u00a0? Quels sont les droits des proches de",
		output: "anonyme",
	},
	{
		input:
			"RIC, Europ\u00e9ennes, on s\u2019en fout on ne vote pas, on lutte ! LE VENT DE COLERE QUI SOUFFLE depuis deux mois a commenc\u00e9 \u00e0 faire reculer le gouvernement. G",
		output: "desanarchistes",
	},
	{
		input:
			"Le gouvernement a d\u00e9j\u00e0 prohib\u00e9 toute les manifestations publiques pr\u00e9vues dans les rues de la capitale pendant la cop 21. Un bataillon de gendarmes mo",
		output: "mslc21",
	},
	{
		input:
			"...au bord de la route Pourtant, il n\u2019est pas simple de gagner. D\u2019autant que dans une volont\u00e9 de revanche quasi unanime, journalistes, \u00e9lus et entrepr",
		output: "zadist",
	},
	{
		input:
			"Samedi 27 f\u00e9vrier nous manifesterons aux deux extr\u00e9mit\u00e9s de la zad, l\u00e0 o\u00f9 le gouvernement voudrait commencer les travaux, en l\u2019occurence aux deux endr",
		output: "zadist",
	},
	{
		input:
			"Le convoi cap sur la cop est parti samedi de Notre dame des landes avec 200 cyclistes, 5 tracteurs, une cantine mobile, une cabane et un triton. Il es",
		output: "mslc21",
	},
	{
		input:
			"Exemple de donn\u00e9es recolt\u00e9es Suite \u00e0 un hack de la socit\u00e9t\u00e9 Cellebrite en 2016 : https://www.zdnet.com/article/israeli-firm-cellebrite-grab-phone-data",
		output: "anonyme",
	},
	{
		input:
			"Salut \u00e0 tous et toute et merci d'\u00eatre venus nous accueillir et partager un repas. Nous sommes partis de Notre Dame des Landes samedi dernier avec 5 tr",
		output: "*",
	},
	{
		input:
			"Venez rejoindre la convergence sur Paris des convois des territoires en lutte suivie d\u2019un grand banquet ! Le 28 novembre 2015 les convois de territoir",
		output: "mslc21",
	},
	{
		input:
			"Pas de titre pour 12474 Pas de titre pour 12267 Pas de titre pour 12266 Pas de titre pour 12265 Pas de titre pour 12197 Pas de titre pour 12057 Pas de",
		output: "zadist",
	},
	{
		input:
			"Du 30 novembre au 11 d\u00e9cembre prochain va se tenir \u00e0 Paris et au Bourget la prochaine mascarade de l\u2019ONU sur la question du changement climatique\u00a0: la",
		output: "anonyme",
	},
	{
		input:
			"Sachant que la COP 21 aura bien lieu et que le projet d\u2019a\u00e9roport est momentan\u00e9ment diff\u00e9r\u00e9, nous maintenons notre convoi de NDDL \u00e0 Paris dans le but d",
		output: "mslc21",
	},
	{
		input:
			"Alors qu'une grosse partie du mouvement pr\u00e9voyait de converger sur Paris, \u00e0 Nantes des rendez-vous \u00e9taient fix\u00e9s \u00e0 partir de midi pour la \u00ab reprise de",
		output: "streetmedicnantes",
	},
	{
		input:
			"Ola Bini, un informaticien su\u00e9dois \u00e2g\u00e9 de 37 ans et ami de Julian Assange, n'a jamais song\u00e9 qu'il passerait de l'anonymat le plus absolu \u00e0 un cas embl",
		output: "karacole",
	},
	{
		input:
			"Le premier ministre fraichement \u00e9lu et chef de la droite, Kyriakos Mitsotakis, a promis de \u00ab nettoyer Exarcheia \u00bb durant l\u2019\u00e9t\u00e9 et d\u2019 \u00ab en finir avec R",
		output: "yannisyoulountas",
	},
	{
		input:
			"\u00a0 Le Comit\u00e9 international Contre Les Ex\u00e9cutions appelle \u00e0 une condamnation ferme venant des opinions publiques mondiales et a multiplier les pressions",
		output: "soliranparis",
	},
	{
		input:
			"Comme c'est dit dans un des commentaires du texte en question, on peut se questionner sur la pertinence de sa publication sur Indym\u00e9dia.Le seul int\u00e9r\u00ea",
		output: ".",
	},
	{
		input:
			"nous citoyens responsables!qui avons oubli\u00e9 de voter pour notre cher pr\u00e9sident macronremercions la vinci compagny\u00a0 pour son travail d\u00e9sint\u00e9ress\u00e9 de pr",
		output: "camille",
	},
	{
		input:
			"Quilpu\u00e9, cendres d'hypermarch\u00e9 Vi\u00f1a del Mar, hypermarch\u00e9 ACuenta Coquimbo, la Croix en flammes du Troisi\u00e8me Mill\u00e9naire Valparaiso, restes du si\u00e8ge du ",
		output: "solidari@s",
	},
	{
		input:
			"Cette conf\u00e9rence se situe dans un contexte d\u2019installation des groupuscules d\u2019extr\u00eame droite radicale \u00e0 Nantes\u00a0: plusieurs attaques pendant la derni\u00e8re",
		output: "antifa",
	},
	{
		input:
			"RDV \u00e9tait donn\u00e9 \u00e0 10h30 \u00e0 Bretagne, pour un d\u00e9fil\u00e9 unitaire jusqu'\u00e0 la maison des syndicats. La pr\u00e9sence polici\u00e8re se fera plus que discr\u00e8te, tout le ",
		output: "streetmedicnantes",
	},
	{
		input:
			"La Serena, statue du conquistador espagnol Francisco de Aguirre descell\u00e9e puis jet\u00e9e au feu Rancagua, restes de l'AFP (fonds de pension) Maip\u00fa, \"Monsi",
		output: "solidari@s",
	},
	{
		input:
			"Deux temps vous sont propos\u00e9s\u00a0: Arpentons \u00ab\u00a0Planter du blanc\u00a0\u00bb, chroniques du (n\u00e9o)colonialisme fran\u00e7ais, le vendredi 21 f\u00e9vrier 2020 \u00e0 partir de 18h3",
		output: "iaata",
	},
	{
		input:
			"A Nantes, les derniers jours ont \u00e9t\u00e9 agit\u00e9s. Samedi, une manifestation multicolore men\u00e9e par la jeunesse et les Gilets Jaunes a mis en d\u00e9route la r\u00e9pr",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"La nuit pr\u00e9c\u00e9dent la manifestation, aux Dervalli\u00e8res Autour de 16H30, plus de 500 personnes convergent timidement aux abords de la pr\u00e9fecture. Pour re",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Mardi 20 mars dernier, 5 personnes cagoul\u00e9es, arm\u00e9es de battes de baseball et de gazeuses ont fait une incursion dans un squat sur la ZAD. Ils ont tab",
		output: "legalteam",
	},
	{
		input:
			"La pluie qui tombe d\u00e8s le matin et nous accompagne toute la journ\u00e9e ne d\u00e9motive pas les cyclistes\u00a0! C'est l'occasion de tester et comparer dans les ri",
		output: "mslc21",
	},
	{
		input:
			"Mardi 24 septembre, La Quadrature \u00e9tait convi\u00e9e \u00e0 la \u00ab\u00a0vingt-quatri\u00e8me journ\u00e9e technico-op\u00e9rationnelle de la s\u00e9curit\u00e9 int\u00e9rieure\u00a0\u00bb, qui se tenait dans",
		output: "anonyme",
	},
	{
		input:
			"on boit des coup avec la prefete apres qu'elle est detruit une grande partie de la zad ! La reconqu\u00eate des luttes passe aussi par l\u00e0\u00a0! Lors du festiva",
		output: ".",
	},
	{
		input:
			"15 f\u00e9vrier 2017, \u00e0 Nantes. Une bande de militants n\u00e9o-nazis, membres du GUD \u2013 groupuscule raciste violent \u2013 munis de gants coqu\u00e9s \u2013 pour provoquer plu",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Dans la vie r\u00e9elle, ces racistes ne repr\u00e9sentent personne. Seule une quinzaine de retrait\u00e9s et quelques cadres du parti de Marine Le Pen \u00e9taient pr\u00e9se",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"V\u00e9rit\u00e9 pour Adama Au programme de cette \u00e9mission : Acharnement judiciaire sur la famille Traor\u00e9 qui, avec le collectif La v\u00e9rit\u00e9 pour Adama, se bat po",
		output: "maglib",
	},
	{
		input:
			"INTERPELLATIONS SUR LA ZAD DU 9/04/18 AU 03/05/18 A ce jour, on d\u00e9nombre plus de 70 arrestations diverses parmi lesquelles : - plusieurs dizaines de c",
		output: "legalteam",
	},
	{
		input:
			"L\u2019aboutissement de 50 ans de lutte. De 10 ans d\u2019occupation de la zone. De manifestations m\u00e9morables rassemblant des dizaines de milliers de personnes ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"L\u2019OP\u00c9RATION POLICI\u00c8RE \u00ab LOI ET ORDRE \u00bb CONTRE EXARCHEIA ET ROUVIKONAS SERAIT PR\u00caTE \u00c0 \u00caTRE LANC\u00c9ESelon le nouveau ministre de l\u2019ordre public, Michalis ",
		output: "yannisyoulountas",
	},
	{
		input:
			"Baptiste M\u00e9gard, militant actif de la Manif pour tous, fait partie des Veilleurs pour la famille. On le voit sur la photo jointe, lors d\u2019 une \u00ab\u00a0veill\u00e9",
		output: "anonyme",
	},
	{
		input:
			"Frontex \u00e0 nos fronti\u00e8res - Qu'est-ce qui coule ? Transmis par Annelie - Gatineau, le 21 octobre 2013LE MASSACRE DES INNOCENTS (L\u2019Europe assassine !)Si",
		output: "o.p.a",
	},
	{
		input:
			"Dans le cadre du maintien de l\u2019ordre en m\u00e9tropole et dans les territoires d\u2019outre-mer, l\u2019\u00c9tat fran\u00e7ais a recours \u00e0 un arsenal militaire sans commune m",
		output: "anonyme",
	},
	{
		input:
			'+++++ Convoi "cap vers la cop" Etape 3 - La fl\u00e8che ne se laisse pas abattre D\u00e9part d\'Angers. Dans une brume opaque, on avance \u00e0 travers les zones comm',
		output: "mslc21",
	},
	{
		input:
			"Emission de La Web Radio Vosstanie du 2/05/2015 - Le MEXIQUE Avec Pierre. Radio Vosstanie\u00a0! Emission Anim\u00e9e par Travail Contre Capital & Vosstanie Int",
		output: "vosstanie",
	},
	{
		input:
			"Mais on ne gouverne pas sur un bidon d'essence en jouant avec des allumettes. L'acte 9, du 12 janvier, est marqu\u00e9 par une augmentation consid\u00e9rable du",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"\u00c0 Paris, des mobilisations se sont organis\u00e9es en plusieurs endroits. Dans la matin\u00e9e, sur le p\u00e9riph\u00e9rique parisien, les forces de l\u2019ordre sont rapidem",
		output: ".",
	},
	{
		input:
			"Transmis par Melting Pot Europa le 18 octobreAux Ministres de la R\u00e9publique, aux Pr\u00e9sidents des Chambres, aux Institutions europ\u00e9ennes, aux Organisati",
		output: "o.p.a",
	},
	{
		input:
			"L'indigente Nouvelle DroiteR\u00e9flexions sur les morts-vivants et le commerce de cadavres.L'offensive men\u00e9e par la Nouvelle Droite depuis 68 et dont les ",
		output: "vosstanie",
	},
	{
		input:
			"D\u2019abord on a su dimanche matin que plus d\u2019une centaine de gendarmes avaient intercept\u00e9 le convoi de l\u2019ouest pour lui signifier qu\u2019il ne parviendrait j",
		output: "anonyme",
	},
	{
		input:
			"\u00a0 Gert Postel est un condamn\u00e9, tricheur, sexiste et harceleur. En plus du latte habituel de fraude, des d\u00e9passements sont \u00e9galement \u00e0 son compte. Post",
		output: "anon",
	},
	{
		input:
			"A Angers, jusqu'ici, le mouvement des Gilets Jaunes et ses petits cort\u00e8ges faisait peu parler de lui. Ou alors sous un angle peu flatteur : lorsqu'une",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Un petit point sur les diff\u00e9rents rassemblements organis\u00e9s partout en France en m\u00e9moire de R\u00e9mi Fraisse.\u00a0N\u2019h\u00e9sitez pas \u00e0 nous informer d\u2019autres rassem",
		output: "(((i)))",
	},
	{
		input:
			"Les gilets jaunes ont par ailleurs suscit\u00e9 beaucoup de m\u00e9fiance dans les milieux politiques de gauche radicale. Les premi\u00e8res revendications exprim\u00e9es",
		output: "x",
	},
	{
		input:
			"A 14H pr\u00e9cise, la chaine commence \u00e0 se mettre en place. Un cort\u00e8ge anticapitaliste se forme au m\u00eame moment quelques m\u00e8tres plus loin. Progressivement,",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"En Loire-Atlantique, deux manifestations \u00e9taient organis\u00e9es simultan\u00e9ment. Dans la grande m\u00e9tropole, Nantes, et le bastion portuaire et ouvrier, \u00e0 l'e",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"La pelleteuse nivelant le terrain du futur camp. Dessin Loup Blaster http://loupblaster.tumblr.com On aurait pu oublier ce rapport, si le ministre n\u2019y",
		output: "anonyme",
	},
	{
		input:
			"Il s\u2019agit d\u2019un grand b\u00e2timent de plusieurs centaines de m\u00e8tres carr\u00e9, situ\u00e9 dans le quartier Doulon. Il accueillera les diff\u00e9rentes luttes en cours ! ",
		output: "x",
	},
	{
		input:
			"CONTACTS :\u00a0 ZAD : mail Infos : zad_AT_riseup.net - mail Soutiens : soutienzad_AT_riseup.net Infotraflic ZAD (uniquement pour les signalements sur zone",
		output: "d\u00e9fendrelazad",
	},
	{
		input:
			"ZAD: #FlashInfo de zad.nadir https://zad.nadir.org/spip.php?page=backend-infos\u00a0KLX: #InfoTrafflic de https://radioklaxon.antirep.net/\u00a0TWT: autres sour",
		output: "acab",
	},
	{
		input:
			"Lors de l'audience du 24 mai, la juge A. Yfanti a de nouveau commenc\u00e9 la s\u00e9ance sans attendre l'arriv\u00e9e de tou(te)s les compagnons-nes accus\u00e9(e)s. Le ",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"AGO Aeroport du Grand Ouest soci\u00e9t\u00e9 \u00e0 action simplifi\u00e9e pr\u00e9sid\u00e9e par M. NOTEBAERT Nicolas Aeroport de Nantes Atlantique 44340 Bouguenais est compos\u00e9e ",
		output: "anonyme",
	},
	{
		input:
			"Voici une premi\u00e8re partie des podcasts de l'\u00e9mission de ce lundi 3 f\u00e9vrier 2020. (la suite \u00e0 venir sous peu) https://radiocayenne.noblogs.org/post/202",
		output: "radiocayenne",
	},
	{
		input:
			"Texte de revendications des gr\u00e9vistes de la faim : Aux \u00e9tudiant.e.s, au personnel de l\u2019universit\u00e9 de Nantes et tout sp\u00e9cifiquement \u00e0 Olivier Laboux Pr",
		output: "universit\u00e9denantesenlutte",
	},
	{
		input:
			"Pr\u00e9sident de COPELFI en France\u00a0: Eric GHOZLAN, Directeur du P\u00f4le Enfance \u00e0 l\u2019association des Oeuvres de Sauvegarde de l\u2019Enfance/Pr\u00e9sidente en Isra\u00ebl\u00a0:",
		output: "antifa",
	},
	{
		input:
			"Apr\u00e8s la manifestation de samedi dernier organis\u00e9e par des partisans de Poutine d\u2019une part, le rassemblement anti-BHL du Renouveau fran\u00e7ais devant le ",
		output: "@nonyme",
	},
	{
		input:
			"Le viol\u00a0: Erotisation et D\u00e9ni \u00ab\u00a0Ce n'est pas un viol, c'est une frasque libidinale\u00a0\u00bb Roger Dadoun r\u00e9ussi un tour de force lorsqu'il nous parle du viol",
		output: "camille",
	},
	{
		input:
			"- Ce jeudi matin, la politicienne d'extr\u00eame droite Marine Le Pen \u00e9tait re\u00e7ue en grande pompe au commissariat central de Nantes. Venue soutenir la cand",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pour un Juin dangereux La r\u00e9pression \u00e9tatique est la partie la plus importante du syst\u00e8me de domination et l'une de ses expressions les plus honteuses",
		output: "a",
	},
	{
		input:
			"Le spectre du r\u00e9chauffement climatique est un leurre. La v\u00e9ritable catastrophe \u00e9cologique n\u2019est pas situ\u00e9e dans un futur abstrait mais inscrite au c\u0153u",
		output: "anonyme",
	},
	{
		input:
			"Le confinement, le temps qui passe \u00e0 l'identique chaque jour, l'ennuie, l'attente, la peur de ne pas \u00eatre en r\u00e8gle, l'arbitraire, la limitation de nos",
		output: "anonym",
	},
	{
		input:
			"Quoiqu'il en soit, un appel \u00e0 manifestation sauvage est lanc\u00e9 en fin d'apr\u00e8s-midi. Apr\u00e8s un premier rassemblement syndical qui regroupe 200 personnes,",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"On a pas encore de programmation d\u00e9finie, mais venez quand m\u00eame nous \u00e9couter ! Puis quand on est pas en direct, on passe des bandes continues, du coup",
		output: "radiocayenne",
	},
	{
		input:
			"Haine et dix raisons de s'attaquer \u00e0 une entreprise qui promeut et propage l'\u00e9lectricit\u00e9 et le d\u00e9sastre.Pour les anarchistes et autres antiautoritaire",
		output: "...",
	},
	{
		input:
			"Autour d'un feu de palettes et de cr\u00eapes, de tartines, fromage et rillettes maison, nous y avons rencontr\u00e9 ceux qui bloquent : des salari\u00e9s des entrep",
		output: "anonyme",
	},
	{
		input:
			"Le 27 septembre c'est la journ\u00e9e mondiale du tourisme. Faisons de cette date une journ\u00e9e d'action contre Airbnb et pour le droit \u00e0 la ville. L'industr",
		output: "dispac'h",
	},
	{
		input:
			"Vous pouvez nous rejoindre pendant le direct sur le chat, \u00e0 l'adresse https://webchat.cyberguerrilla.org/#cayenne. Retouvez les podcasts, les news de ",
		output: "k-hy\u00e8ne",
	},
	{
		input:
			"Le sentiment du danger qui menace nos vies augmente, jour apr\u00e8s jour, heure apr\u00e8s heure, dans les prisons de l\u2019entit\u00e9 sioniste du fait de la propagati",
		output: "secoursrouge",
	},
	{
		input:
			"FIN DES TEMPS ou TEMPS DES FINS \u00a0 Alors qu\u2019\u00e0 Tchernobyl, la catastrophe fut ni\u00e9e, les diff\u00e9rents pouvoirs orchestrent aujourd\u2019hui la prise en main de ",
		output: "...",
	},
	{
		input:
			"Eustace Mullins est un auteur peu connu en France. Collaborateur r\u00e9gulier du journal d\u2019extr\u00eame droite American Free Press, Mullins est un plumitif n\u00e9o",
		output: "ahadhaam",
	},
	{
		input:
			"Brochette... Le 18 mai 2016, une voiture de flics en service a \u00e9t\u00e9 cram\u00e9e dans la rue, renvoyant \u00e0 l'\u00c9tat un peu de la violence que nous subissons tou",
		output: ".",
	},
	{
		input:
			"Pas de titre pour 2646 Pas de titre pour 2632 Pas de titre pour 2630 {{Le projet Supportolegale (Soutien l\u00e9gal), n\u00e9 gr\u00e2ce au travail collectif des act",
		output: "anonymous",
	},
	{
		input:
			"Pourtant l'Union Europ\u00e9enne a cess\u00e9 les accords avec le Soudan, mais la France continue pourtant a expuls\u00e9 l\u00e0-bas, alors m\u00eame que l'instabilit\u00e9 politi",
		output: "l'autrecantine",
	},
	{
		input:
			"On a besoin de monde notamment pour diffuser les tracts et affiches sur Nantes et ses environs, voici les rendez-vous : Collages\u00a0: \u2013 \u00e0 Nantes, RDV pou",
		output: "zadist",
	},
	{
		input:
			"Sommaire 1. Depuis 2 semaines, le quartier Sur est sous si\u00e8ge (Amed/Diyarbak?r)2. Un massacre se pr\u00e9pare \u00e0 Silopi et Cezire (r\u00e9gion de ??rnex/??rnak)3",
		output: "merhabahevalno",
	},
	{
		input:
			"Dans un document publi\u00e9 le 13 d\u00e9cembre 2005 et intitul\u00e9 \u00abSexe, travail, droits/changer les lois p\u00e9nales du Canada pour prot\u00e9ger la sant\u00e9 et les droits",
		output: "sisyphe",
	},
	{
		input:
			"http://squat.net - La Chapelle : lieu alternatif menac\u00e9 d'expulsion \u00e0 Toulouse par une association Lyonnaise http://rebellyon.info/article3519.html ex",
		output: "anonyme",
	},
	{
		input:
			"\u00a0 Que ce soit sur le plan r\u00e9pressif (LDB, grenades de d\u00e9sencerclement, coups de matraques) ou sur le plan coercitif incluant l\u2019adoption de la nouvelle",
		output: ".",
	},
	{
		input:
			"Un Guide d\u2019Autod\u00e9fense Num\u00e9rique (https://guide.boum.org) est en \u00e9laboration depuis plusieurs ann\u00e9es. On y retrouve des explications sur le fonctionne",
		output: "@nonyme",
	},
	{
		input:
			"La r\u00e9pression que subissent les manifestant.e.s ne se limite pas aux lacrymos, canons \u00e0 eau, grenades, ..., qui pleuvent sur les cort\u00e8ges. Apr\u00e8s chaqu",
		output: "legalteam",
	},
	{
		input:
			"\u00abM\u00e9faits divers\u00bb \u00abLe dimanche 3 avril, l'\u00e9mission Tout le monde en parle, de Radio-Canada, accueillait Xavier Cantat, fr\u00e8re de Bertrand Cantat et aute",
		output: "anonymous",
	},
	{
		input:
			"REFLEXIONS SUR LE MOUVEMENT DES GILETS JAUNES Du nouveau dans la brume Apr\u00e8s la nouvelle journ\u00e9e plut\u00f4t r\u00e9jouissante du 1er d\u00e9cembre, et qui ne met qu",
		output: "...",
	},
	{
		input:
			"Dans une entrevue qu\u2019elle a accord\u00e9e au quotidien montr\u00e9alais Le Devoir, le 1er octobre 2007, la chercheuse f\u00e9ministe fran\u00e7aise, Christine Delphy, a d",
		output: "sisyphe",
	},
	{
		input:
			"En annon\u00e7ant l\u2019adoption prochaine d\u2019une loi autorisant le mariage homosexuel, le gouvernement fran\u00e7ais a d\u00e9clench\u00e9, comme ce fut le cas dans l\u2019ensembl",
		output: "unsympathisantducci",
	},
	{
		input:
			"Le r\u00e9gime p\u00e9nal totalitaire et inhumain des Mollahs et de sa \u00abR\u00e9publique Islamique\u00bb ne fait aucune distinction entre les enfants et les personnes \u00e2g\u00e9e",
		output: "soliranparis",
	},
	{
		input:
			"L\u2019abandon du projet d\u2019a\u00e9roport est l\u2019aboutissement d\u2019une longue lutte soutenue activement par des dizaines de milliers de personnes. Le mouvement cont",
		output: "zadist",
	},
	{
		input:
			"Quelques textes sortis ces derniers jours, la plupart en rapport avec le rapport de la m\u00e9diation et l\u2019avenir de la zad Lettre aux comit\u00e9s locaux, aux ",
		output: "(((i)))",
	},
	{
		input:
			"TarnacSNCF-fer Dans le rapport de d\u00e9cembre 2010 de l\u2019ACAT (Action des chr\u00e9tiens pour l\u2019abolition de la torture, site Internet ici), intitul\u00e9 Un monde ",
		output: "anonyme",
	},
	{
		input:
			"Photo 1 Photo 2 Photo 3 Photo 4 Photo 5 Au lendemain de no\u00ebl, le 26 d\u00e9cembre, en d\u00e9but de soir\u00e9e, un individu est insult\u00e9 et menac\u00e9 de mort alors qu'i",
		output: "actionantifascistenantes",
	},
	{
		input:
			"L\u2019ensemble du mouvement a affirm\u00e9 qu\u2019il s\u2019opposerait \u00e0 toute expulsion de celles et ceux qui ont su prot\u00e9ger ce bocage et souhaitent continuer \u00e0 y viv",
		output: "zadist",
	},
	{
		input:
			'D\u00e9claration d\u2019autonomie de la ZAD de Nddl en r\u00e9ponse \u00e0 l\u2019appel du KCK La ZAD se d\u00e9clare "autonome", tout comme l\u2019ont fait certaines communes dans le K',
		output: "zadist",
	},
	{
		input:
			"(..) \"La nature bureaucratique de l'EZLN se traduit, entre autres, par le contr\u00f4le de la parole. Les voix des r\u00e9volt\u00e9s du Chiapas se r\u00e9duisent \u00e0 une s",
		output: "*",
	},
	{
		input:
			"En m\u00eame temps, s\u2019il s\u2019agissait d\u2019une \u00e9ni\u00e8me op\u00e9ration de communication, il n\u2019en reste pas moins qu\u2019il convient d\u2019en tenir compte, de se pr\u00e9parer une f",
		output: "*",
	},
	{
		input:
			"Arriv\u00e9 devant la pr\u00e9fecture, le cort\u00e8ge est copieusement arros\u00e9 de grenades lacrymog\u00e8nes. La lance \u00e0 eau \u00e9tait \u00e9galement de la partie, mais les flics ",
		output: "streetmedicsnantes",
	},
	{
		input:
			"C\u2019est pourquoi nous vous appelons \u00e0 venir de nouveau les soutenir \u00e0 partir de 18h devant le commissariat central de Toulouse (m\u00e9tro Canal du Midi).\u00a0No",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Le rencart donn\u00e9 \u00e0 21h sur la Wismarplatz a r\u00e9uni 1 500 personnes et le nombre de participantEs a rapidement grimp\u00e9 \u00e0 2 000 pour atteindre finalement ",
		output: "anonyme",
	},
	{
		input:
			"La r\u00e9v\u00e9lation de ce clich\u00e9 est l\u2019occasion pour notre organisation de soulever certains points importants li\u00e9s au dramatique assassinat de Cl\u00e9ment. Voi",
		output: "lahorde",
	},
	{
		input:
			"\u00a0 T\u00f4t, le matin du 9\u00a0septembre, dans le quartier de Santa Cecilia \u00e0 Bogota, Javier Ordo\u00f1ez a \u00e9t\u00e9 tu\u00e9 lors d\u2019une interpellation par la police nationale",
		output: "anonyme",
	},
	{
		input:
			'Quelques extraits de ce num\u00e9ro\u00a0: \u00ab\u00a0\u00c0 Istanbul, des centaines de femmes se sont retrouv\u00e9es Place Taksim aux cris de "Nous r\u00e9sistons \u00e0 la violence d\u2019\u00c9ta',
		output: "merhabahevalno",
	},
	{
		input:
			"La cour europ\u00e9enne des droits de l\u2019homme vient de condamner la Bosnie pour discrimination \u00e0 l\u2019encontre des minorit\u00e9s rom et juive En cause : un articl",
		output: "ahadhaam",
	},
	{
		input:
			"Depuis plusieurs semaines, nous sommes sous la menace d'expulsions, devenues imminentes \u00e0 l'approche de la fin de la tr\u00e8ve hivernale. Ces expulsions p",
		output: "zad",
	},
	{
		input:
			"Herv\u00e9 a myst\u00e9rieusement disparu dans la nuit du 11 au 12 novembre 2011 apr\u00e8s un concert \u00e0 La Chim\u00e8re (Boulevard Montebello \u00e0 Lille). A l\u2019\u00e9poque le par",
		output: ".",
	},
	{
		input:
			"ci dessous, la d\u00e9claration de Marie Georges Buffet __________________ Les masques tombent : Nicolas Sarkozy est dangereux pour la d\u00e9mocratie et pour l",
		output: "patricebardet",
	},
	{
		input:
			"Pas de titre pour 7427 Alors pourquoi des militant-es en lien et/ou soutenu-es par les extr\u00eames droites et les courants religieux int\u00e9gristes pr\u00e9sents",
		output: "anonyme",
	},
	{
		input:
			"insigne fasciste Depuis plusieurs mois de mobilisation des gilets nous avons vu apparaitre ce logo Mais qu'il y a t il de d\u00e9rangant dans ce logo ? \u00a0 L",
		output: "...",
	},
	{
		input:
			"Soutien aux jeunes d\u00e9bout\u00e9s du droit \u00e0 la protection de l'enfance Toutes les semaines, des Conseils D\u00e9partementaux, charg\u00e9s par l'Etat de la protectio",
		output: "lesluttesdesexil\u00e9-e-s\u00e0nantes",
	},
	{
		input:
			"source: https://www.flickr.com/photos/valkphotos/albums/72157669786957783 La semaine derni\u00e8re, Bruno Retailleau appelait \u00e0 \u201cinterdire\u201d les formations ",
		output: "zadist",
	},
	{
		input:
			"En cette avant-rentr\u00e9e, la r\u00e9alit\u00e9 s\u2019impose : malgr\u00e9 les violences et les destructions successives de parties enti\u00e8res du bidonville (voir ici et l\u00e0),",
		output: "...",
	},
	{
		input:
			"Manifestation du 6 mai - photo by Val K. http://bonpiedbonoeil.net/index.php?album=ValK%2F20140506_Manifestation_sans-papiers Occupation de l'\u00e9glise S",
		output: "!",
	},
	{
		input:
			"En Argentine, en raison du poids de l'Eglise catholique (il n'y a pas s\u00e9paration de l'Eglise et de l'Etat), l'avortement est ill\u00e9gal. On estime qu'il ",
		output: "fab",
	},
	{
		input:
			"Cinq prisonniers politiques Arabes Ahwazis dont les aveux forc\u00e9s ont \u00e9t\u00e9 diffus\u00e9s par la chaine d\u2019\u00c9tat Iranienne PRESS.TV sont menac\u00e9s d\u2019ex\u00e9cutions im",
		output: "soliranparis",
	},
	{
		input:
			"Barcelone, le 18 d\u00e9cembre 2014 Turin, le 10 mai 2014 - Chiara, Mattia, Niccolo, Claudio : No TAV Liberi ! - Les 4 militant-e-s italien-ne-s du mouveme",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Un assemblage d\u2019images prises \u00e0 des moments diff\u00e9rents par des personnes diff\u00e9rentes, lors des \u00e9meutes de Baltimore, ont permis \u00e0 la police de lancer ",
		output: "valk",
	},
	{
		input:
			"Le groupe de fafs organis\u00e9 et violent qui va pourtant bient\u00f4t se faire charger sur plusieurs centaines de m\u00e8tres, pas loin du Ch\u00e2teau Une courageuse b",
		output: "actionantifascistenantes",
	},
	{
		input:
			"Se souvenir qu\u2019il y a 75 ans, Auschwitz \u00e9tait lib\u00e9r\u00e9 et que le monde d\u00e9couvrait effar\u00e9 l\u2019ampleur de l\u2019extermination, est indispensable. Qu\u2019un raciste ",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"LE CONDUCTEUR DU CAMION SONO RELAX\u00c9, F\u00caTE \u00c0 20H \u00c0 BOUFFAYLe 21 juin dernier \u00e0 Nantes, une f\u00eate de la musique contre la r\u00e9pression et en hommage \u00e0 Stev",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Sabotage d\u2019\u00e9olienne, acte 3La montagne noire La stupeur, malicieusement j\u2019imagine, d\u2019une promeneuse ou d\u2019un chasseur qui, aux premi\u00e8res lueurs, d\u00e9couv",
		output: "-",
	},
	{
		input:
			"APPEL \u00c0 RASSEMBLEMENT MASSIF LE 18 MAI \u00c0 MANDRES Devant la mairie de Mandres-en-Barrois, \u00e0 partir de 18h : ramenons de quoi faire un banquet partag\u00e9, ",
		output: "vmc",
	},
	{
		input:
			"Portefolio L\u2019id\u00e9e d\u2019\u00e9crire cette brochure est n\u00e9e \u00e0 la suite d\u2019une rencontre. Car se sont ces liens qui nous permettent d\u2019\u00e9largir notre vision et notr",
		output: "anonyme",
	},
	{
		input:
			"Voil\u00e0 plusieurs semaines d\u00e9j\u00e0 que l'\u00e9tat d'exception du confinement sanitaire est impos\u00e9 \u00e0 l'ensemble de la population, avec son lot d'interdits in\u00e9di",
		output: "...",
	},
	{
		input:
			"Plusieurs dizaines de personnes sont pass\u00e9es par la prison de Seysses depuis le d\u00e9but du mouvement des Gilets Jaunes. Certaines sont sorties, et d\u2019aut",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Dans les lyc\u00e9es, d\u00e9j\u00e0, une r\u00e9pression conjointe de la police et du personnel des \u00e9tablissements est charg\u00e9e de faire r\u00e9gner l'ordre. A Livet et Clemen",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"C\u2019est pourquoi nous vous appelons \u00e0 venir de nouveau les soutenir \u00e0 partir de 18h devant le commissariat central de Toulouse (m\u00e9tro Canal du Midi).\u00a0No",
		output: "solidarit\u00e9",
	},
	{
		input:
			"Un retrait\u00e9 Alg\u00e9rien mort \u00e0 la suite d'un contr\u00f4le policier \u00e0 Argenteuil Le mardi 9 juin, vers 20h30, trois policiers d'Argenteuil, dont une femme, on",
		output: "r\u00e9sistonsensemble",
	},
	{
		input:
			"Le long des grands axes, les manifestants s\u2019agr\u00e8gent. Premier objectif : la Place Royale, o\u00f9 doit se tenir une f\u00eate c\u00e9l\u00e9brant la victoire du banquier.",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Au programme cette semaine : La r\u00e9forme de l\u2019assurance ch\u00f4mage Soutien \u00e0 Vincenzo Vecchi : arr\u00eat\u00e9 dans le cadre de deux mandats d\u2019arr\u00eat europ\u00e9ens, inc",
		output: "maglib",
	},
	{
		input:
			"TRIBUNAL DE NANTES MARDI 17 AVRIL 2018 PR\u00c9SIDENTE\u00a0: RAYNAUD EmiliePROCUREURE\u00a0: SRODA FlorenceAVOCATE des flics\u00a0: HUP\u00c9 Annie ARRESTATION MANIF DU 14 AV",
		output: "legalteam",
	},
	{
		input:
			"Le site de raffinage de Petit-Couronne (pr\u00e8s de Rouen) \u00e9tait d\u00e9j\u00e0 sous le coup d'un projet de plan social mena\u00e7ant 120 emplois. L'usine de Petit-Couro",
		output: "pcint",
	},
	{
		input:
			"Depuis le 21 avril, Jock Palfreeman, un Australien purgeant une peine de 20 ans de prison en Bulgarie pour meurtre invent\u00e9 de toutes pi\u00e8ces, est en gr",
		output: "antifa",
	},
	{
		input:
			"Un t\u00e9l\u00e9phone jetable n\u2019est pas la m\u00eame chose qu\u2019un t\u00e9l\u00e9phone d\u2019appoint Un t\u00e9l\u00e9phone jetable, comme dit plus haut, est un t\u00e9l\u00e9phone \u00e0 usage unique dest",
		output: "anonyme",
	},
	{
		input:
			"A Commerce, un cordon de gendarmes mobile bloque subitement le cort\u00e8ge qui refuse de se laisser arbitrairement immobiliser : premiers coups de matraqu",
		output: "streetmedicsnantes",
	},
	{
		input:
			"Ce n\u2019est donc pas pour engager un d\u00e9bat, fort l\u00e9gitime et n\u00e9cessaire par ailleurs, que nous prenons le temps d\u2019y apporter une r\u00e9ponse. Mais parce que ",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"Si tu vois un vendeur ambulant dans la rue, n\u2019appelle pas le 17 pour le signaler. Vas lui acheter quelque chose. Si tu remarques qu\u2019il n\u2019utilise pas d",
		output: "*",
	},
	{
		input:
			"Sans grande surprise la Cour a rejet\u00e9 ce pourvoi et suivi l'avis de l'avocat g\u00e9n\u00e9ral jugeant que ces contr\u00f4les judiciaires, qui interdisent pourtant \u00e0",
		output: "...",
	},
	{
		input:
			"\u00c0 l'aube du 7 f\u00e9vrier \u00e0 Turin, Chiara Appendino et sa clique \u00e9toil\u00e9e** assument la responsabilit\u00e9 politique d'\u00e9vacuer de mani\u00e8re militaire l'Asilo, oc",
		output: ".",
	},
	{
		input:
			"#OpGPII #NOTAV Dites non \u00e0 la ligne ferroviaire Turin-Lyon Rh\u00f4ne-Alpes HACKED&DEFACED - Official site of the Rh\u00f4ne-Alpes region www.rhonealpes.fr terr",
		output: "anonymous",
	},
	{
		input:
			"Pr\u00e8s-programme fait le 1er septembre vou\u00e9 \u00e0 \u00e9voluer cf bureburebure.info Il y aura des espaces libres pour que les personnes puissent proposer des dis",
		output: "x",
	},
	{
		input:
			"Pas de titre pour 11575 Pas de titre pour 11559 Pas de titre pour 11558 Pas de titre pour 11557 Pas de titre pour 11556 Pas de titre pour 11555 Pas de",
		output: "jackpalmer",
	},
	{
		input:
			"Pas de titre pour 8318 Qui sont les terroristes ? Penser peut-il faire d\u00e9railler le pouvoir ? L\u2019offensive m\u00e9diatico-politique sur de pr\u00e9tendus groupes",
		output: "anaramaupatac",
	},
	{
		input:
			"Sur 18 interpellations suite \u00e0 la manifestation parisienne, il y a eu 11 gardes \u00e0 vue. Plusieurs d\u2019entre eux sont mis en examen. 3 d\u2019entre eux seront ",
		output: "secoursrouge",
	},
	{
		input:
			"Des deux c\u00f4t\u00e9s de l'Atlantique, des statues de racistes, de colons ou d'esclavagistes sont d\u00e9boulonn\u00e9es lors des manifestations. Et \u00e0 Nantes ? En vous",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"La pr\u00e9sidence Macron a \u00e9t\u00e9 marqu\u00e9e ces derniers mois par une multiplicit\u00e9 de lois bouleversant l\u2019Education nationale vers un approfondissement des in\u00e9",
		output: "anonyme",
	},
	{
		input:
			"Audiences du 06 et 07 juin. Les 06 et 07 Juin se sont d\u00e9roul\u00e9s les audiences en relation avec les 250 attaques reproch\u00e9s \u00e0 la Conspiration des Cellule",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"Quintero, 28/10 incendie de l'agence de Chilquinta (compagnie d'\u00e9lectricit\u00e9) Iquique, 28/10 la gu\u00e9rite du port de Patillos en fum\u00e9e Antofagasta, 28/10",
		output: "solidari@s",
	},
	{
		input:
			"1er de mai un dia de luta... com tots los autes ! 1er mai un jour de lutte... comme tous les autres 1er de mai de 1886 - 2006 : 120 ans de luta antica",
		output: "anaramaupatac",
	},
	{
		input:
			"Un militant anti-nucl\u00e9aire assassin\u00e9 ! S\u00e9bastien Briat, jeune militant anarchiste de la CNT, est mort pr\u00eat de la fronti\u00e8re allemande le 7 novembre der",
		output: "anaramaupatac",
	},
	{
		input:
			"On peut tracer les racines du mouvement breton contemporain (le terme emsav, qui signifie \u00ab\u00a0mouvement\u00a0\u00bb breton, n\u2019appara\u00eet qu\u2019apr\u00e8s la Seconde Guerre ",
		output: "@nonyme",
	},
	{
		input:
			"Manif contre la lois travail et son monde du 16 novembre. Nous terminons le premier tour au niveau de Bouffay. Ca gaze pas mal mais le cort\u00e8ge semble ",
		output: ".",
	},
	{
		input:
			"Mais o\u00f9 va-t-il aller ? Comme \u00e0 l'habitude avec les identitaires, tout n'est que brouillage de pistes, m\u00ealant esbrouffe et crainte d'un \u00e9chec retentis",
		output: "yannisyoulountas",
	},
	{
		input:
			"Mercredi 1er juillet, la Semitan et la police nantaise se sont coordonn\u00e9es pour un contr\u00f4le group\u00e9 dans les transports. Le contr\u00f4le \u00e9tait double : des",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"\u00a0 Mise \u00e0 jour sur la situation de Carla incarcer\u00e9e dans le cardre de l'operatrion scintilla. 18 aout. Alors que l'administration p\u00e9nitentiaire avait a",
		output: ".",
	},
	{
		input:
			"Aucune \u00ab union sacr\u00e9e \u00bb n\u2019est possible avec les profiteurs d\u2019un syst\u00e8me, le capitalisme, qui tue des millions d\u2019entre nous dans le monde, tous les ans",
		output: "cnt",
	},
	{
		input:
			"#JeSuisIndymedia : un logo d\u00e9sormais interdit ! edit du 31/08 19:20: ajout du lien vers le communiqu\u00e9 de la CGA edit du 30/08 17:45: ajout du communiq",
		output: "(((i)))",
	},
	{
		input:
			"Samedi 9 janvier :\u00a0 #Nantes : >> D\u00e9parts de la Tracto-v\u00e9lo : 8h30 : Bourg de Notre-Dame-des-Landes\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 11h30 : Nantes : Le Cardo + Z\u00e9nith Atlantis",
		output: "(((i)))",
	},
	{
		input:
			"Notre campement est install\u00e9 sur les berges du Lac Tartiens d\u00e9s ce week-end, profitant d'un panorama unique dans un cadre g\u00e9ographique centrale, \u00e0 seu",
		output: "camille",
	},
	{
		input:
			"Et voil\u00e0 que l\u2019Etat essaie, avec un coup repressif contre quelques r\u00e9volutionnaires, d\u2019eclaircir un peu l\u2019obscurit\u00e9. 14 personnes sont accus\u00e9es de s\u2019\u00ea",
		output: ".",
	},
	{
		input:
			"et la semaine prochaine ne manquez pas la premi\u00e8re radio Libre de Tata Simone et Missy Celia ! \u00a0 https://radiocayenne.noblogs.org/",
		output: "radiocayenne",
	},
	{
		input:
			"Parce que nous ne voulons pas rester dans la position de victimes dans laquelle la soci\u00e9t\u00e9 voudrait nous placer en nous reconnaissant comme meufs. Vic",
		output: ".",
	},
	{
		input:
			"Partout dans le monde ce ph\u00e9nom\u00e8ne de privatisation des c\u00f4tes ne profitant qu'\u00e0 certains nantis s'\u00e9tend \u00e0 toute vitesse ! Dans chaque territoire lutto",
		output: "collectifterrescommunes",
	},
	{
		input:
			"Deux ans et demi \u00a0et certainement encore tout autant devant nous, avant de remettre les compteurs de notre redevabilit\u00e9 \u00e0 z\u00e9ro, d'en finir avec une co",
		output: "anonyme",
	},
	{
		input:
			"Les manifestant\u00b7es r\u00e9clamaient des r\u00e9formes dans le financement de la police et la fin des brutalit\u00e9 polici\u00e8res. La police les a asperg\u00e9 de gaz lacrym",
		output: "secoursrouge",
	},
	{
		input:
			"Le 14 ao\u00fbt 2016, la destruction collective du \u201cmur de la honte\u201c de l\u2019ANDRA a \u00e9t\u00e9 le point d\u2019orgue d\u2019un fol \u00e9t\u00e9 d\u2019urgence consacr\u00e9 \u00e0 la d\u00e9fense du Bois",
		output: "vmc",
	},
	{
		input:
			"Apr\u00e8s un d\u00e9part timide, peut-\u00eatre du \u00e0 l'interdiction de manifester encore prononc\u00e9e par le pr\u00e9fet, le cort\u00e8ge gagne en puissance alors qu'il parvient",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pas de titre pour 11300 La guerre est ouverte! 75 000 sites qui se mettent en gr\u00e8ve (selon SOPA Strike), 162 millions de personnes touch\u00e9es par l'init",
		output: "r\u00e9voltenum\u00e9rique",
	},
	{
		input:
			"NO. That\u2019s exactly what we have been and will be doing. We are fighting against the 6th DDoS attack this year and we are also fending off this one. Th",
		output: "anonyme",
	},
	{
		input:
			"Occupation des bureaux de Syriza \u00e0 Thessalonique Banderole suspendue au local de Syriza \u00e0 Larissa, qui dit \u201cBas les pattes des squats \u2013 Libert\u00e9 pour l",
		output: "anonyme",
	},
	{
		input:
			"COMUNICAT DE PREMSA - COMMUNIQUE DE PRESSE (en occitan et en fran\u00e7ais) Pau, lo 08 de mar\u00e7 de 2006 - La RESIST\u00e9NCIA qu'ei ua question de DIGNITAT CAUMA",
		output: "anaramaupatac",
	},
	{
		input:
			"Certains parmi nous, signataires de cette lettre, avons \u00e9t\u00e9 des \u00e9l\u00e8ves de la petite \u00c9cole Zapatiste, d\u2019autres non, mais nous savons que les ma\u00eetres et",
		output: "zadist",
	},
	{
		input:
			"Pau, lo 29 de mar\u00e7 de 2007 (version en fran\u00e7ais ci-dessous) MANIFESTACION DE BESIERS DEU 17 DE MARC DE 2007 Aqueth 17 de Mars de 2007, mei de 20 000 p",
		output: "anaramaupatac",
	},
	{
		input:
			"\u00a0 L\u2019exploitation des donn\u00e9es de t\u00e9l\u00e9phone portable ou une application d\u2019espionnage sur le portable, destin\u00e9 \u00e0 enregistrer tous les autres portables (a",
		output: "..",
	},
	{
		input:
			"On a fait tellement de bruit qu'ils ont \u00e9t\u00e9 oblig\u00e9s d'arr\u00eater le conseil communautaire ;) On a m\u00eame r\u00e9ussi \u00e0 rentrer dedans et \u00e0 l'occuper durant 2 he",
		output: "collectifterrescommunes",
	},
	{
		input:
			"Petit \u00e0 petit, par grappes, une petite foule se forme dans le square Daviais, alors que des cohortes de la BAC contr\u00f4lent d\u00e9j\u00e0 tout ce qui peut ressem",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"R\u00e9sistance et sabotage Posons les bases. Une vie s\u2019est cr\u00e9\u00e9e depuis plus de cinq ans \u00e0 la ZAD de Notre-Dame-des-Landes. Il n\u2019est pas du tout question ",
		output: "anonyme",
	},
	{
		input:
			"Ces derni\u00e8res semaines, les inculp\u00e9s de Tarnac se sont exprim\u00e9s publiquement, par diff\u00e9rents moyens, mais pas une seule fois via des m\u00e9dias ind\u00e9pendan",
		output: "anonyme",
	},
	{
		input:
			"Pas de titre pour 11284 Pas de titre pour 11263 Pas de titre pour 11262 Pas de titre pour 11261 Pas de titre pour 11260 Digne d'un titre de tract du s",
		output: "jackpalmer",
	},
	{
		input:
			"L\u2019OCAM, qui a succ\u00e9d\u00e9 en 2006 au Groupe interforces antiterroriste (GIA), est un organisme plac\u00e9 sous l\u2019autorit\u00e9 conjointe des Ministres de la Justice",
		output: "anon",
	},
	{
		input:
			"Nous nous arr\u00eatons \u00e0 midi dans un \u00ab\u00a0foyer rural\u00a0\u00bb \u00e0 l\u2019imposante fa\u00e7ade. A l\u2019int\u00e9rieur une salle en parquet, faite pour accueillir confortablement des ",
		output: "mslc21",
	},
	{
		input:
			"CAP SUR LA COP\u00a0: EN CONVOI DEPUISNOTRE-DAME-DES-LANDES JUSQU\u2019\u00c0 PARIS La COP21 se tiendra \u00e0 Paris au bourget du 30 novembre au 11 d\u00e9cembre. Elle est so",
		output: "mslc21",
	},
	{
		input:
			"Le r\u00e9seau fibre d\u2019Orange (t\u00e9l\u00e9phonie mobile 4G, internet) conna\u00eet d\u2019importantes perturbations depuis ce mardi : plusieurs communes du Val-de-Marne, do",
		output: "sansattendre",
	},
	{
		input:
			"\u00ab\u00a0Les responsables politiques qui se pr\u00eatent \u00e0 ces manoeuvres estivales d\u00e9shonorent l'Europe et leur mandat. Ils misent sur le fait que personne ne le",
		output: "karacole",
	},
	{
		input:
			"Dans le m\u00eame avion dans lequel se rendait \u00e0 Buenos Aires le dirigeant syndical bolivien Oscar Olivera pour expliquer aux diff\u00e9rents mouvements sociaux",
		output: "fab",
	},
	{
		input:
			"xpansive\u00a0: Comment s\u2019est cr\u00e9\u00e9 votre local\u00a0? L\u2019\u00e9quipe du local s\u2019est rencontr\u00e9 \u00e0 Douarnenez lors de la premi\u00e8re instauration de l\u2019\u00e9tat d\u2019urgence en 201",
		output: "anonyme",
	},
	{
		input:
			"Ne soyons pas passifs ! R\u00e9agissons ! D\u00e8s dimanche, \u00e0 la maison de r\u00e9sistance \u00e0 la poubelle nucl\u00e8aire se tient une rencontre du groupe foncier pour r\u00e9f",
		output: "vmc",
	},
	{
		input:
			'"Il y a une paix fragile dont la suite d\u00e9pendra du traitement de la loi des hydrocarbures au S\u00e9nat" a synth\u00e9tis\u00e9 Evo Morales en r\u00e9f\u00e9rence au climat po',
		output: "fab",
	},
	{
		input:
			'erh " La r\u00e9pression de toute opposition n\u2019explique pas tout. Surtout pas la \u00ab\u00a0r\u00e9ussite\u00a0\u00bb de l\u2019\u00c9tat islamique (EI), c\u2019est-\u00e0-dire le soutien populaire q',
		output: "anonyme",
	},
	{
		input:
			"Le temps du blocageD\u00e8s l'aube, une centaine d'\u00e9tudiants s'affaire \u00e0 bloquer le campus de la fac de Nantes. Plusieurs salles de classe sont d\u00e9m\u00e9nag\u00e9es,",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Dans le cadre de la campagne contre Vinci lanc\u00e9e par les opposant-e-s \u00e0 l\u2019a\u00e9roport de Notre Dame des landes, une action a \u00e9t\u00e9 men\u00e9e dans 3 parking Vin",
		output: "anonyme",
	},
	{
		input:
			"6 novembre 2013 _ STOP _ Rue des Montiboeuf 75020 _ STOP _ Kangoo utilitaire collabo cram\u00e9 _ STOP _ Croix-rouge _ STOP _ Gestionaire humanitaire des c",
		output: "anonyme",
	},
	{
		input:
			"Voici quelques textes en PDF \u00e0 propos de la mort de Mauricio le 22 mai 2009 au Chili. *** Depuis un petit bout de temps, les attaques explosives et in",
		output: "a",
	},
	{
		input:
			"Alors que commence \u00e0 appara\u00eetre une mobilisation sur les r\u00e9seaux sociaux acquis \u00e0 leur cause, nous devons prendre les devants et revendiquer l'action ",
		output: "*",
	},
	{
		input:
			"Commen\u00e7ons par revenir sur la g\u00e9n\u00e8se de ce jardin pas comme les autres. Le Jardin des Ronces est n\u00e9 en avril 2014, il y a bient\u00f4t 4 ans maintenant. Ma",
		output: "roncier",
	},
	{
		input:
			"hier avait lieu une journ\u00e9e nationale de gr\u00e8ve contre la loi travail. A Caen, la manif syndicale \u00e9tait pour le moins classique : rendez-vous 10h30 pla",
		output: "anonyme",
	},
	{
		input:
			"crevure des pelles m\u00e9ca pelle m\u00e9ca incendi\u00e9e Pas de titre pour 12458 Pas de titre pour 12457 Pas de titre pour 12456 Pendant des mois la r\u00e9sistance co",
		output: "notht",
	},
	{
		input:
			"Grandir, grandir, se d\u00e9velopper toujours plus pour tenter une derni\u00e8re fois de convaincre qu'on a raison de leur donner nos votes et le pouvoir sur no",
		output: "anonyme",
	},
	{
		input:
			"C\u2019est dans la nuit de mardi 8 septembre 2020, que l\u2019une des prisons les plus d\u00e9test\u00e9es d\u2019Europe a pris feu. Ce n\u2019\u00e9tait pas la premi\u00e8re fois que des pe",
		output: ".",
	},
	{
		input:
			"Editorial d'Indym\u00e9dia Argentine (http://argentina.indymedia.org) Le message pr\u00e9sidentiel du 4 janvier dans lequel il annonce de nouveaux sacrifices et",
		output: "fab",
	},
	{
		input:
			"Ce matin du 18 f\u00e9vrier 2013, depuis l\u2019aube, deux parcelles agricoles du Chefresne (50), au lieu dit Les Mares, sont occup\u00e9es. Ces deux parcelles sont ",
		output: "notht",
	},
	{
		input:
			"Pas de titre pour 11831 Ce lieu de rassemblement, et lieu symbolique de la lutte anti-tht, devenait s\u00fbrement trop g\u00e9nant pour les autorit\u00e9s. Ce matin,",
		output: "notht",
	},
	{
		input:
			"C'est le printemps....la parole fuse, les discours fleurissent et les individus se consument en tournant foutraquement autour des places ou des sortie",
		output: "vosstanie",
	},
	{
		input:
			"Le rendu des maisons qui sont pass\u00e9s en proc\u00e8s \u00e0 Saint-Nazaire le 6 septembre a eu lieu aujourd\u2019hui. Bel-Air, le Tertre et les Planchettes (et probabl",
		output: "zadist",
	},
	{
		input:
			"Objet: [Cntait-info] bobigny 7/11 De: cntait-info@rezo.net Date: Mar 8 novembre 2005 2:49 Comparution imm\u00e9diates du 07 11 \u00e0 bobigny J'ai assist\u00e9 aux a",
		output: "cnt",
	},
	{
		input:
			"La nomination \u00e0 la direction de TF1 de Laurent Solly, ancien membre du cabinet de campagne de Nicolas Sarkozy, est choquante. Elle rappelle les relati",
		output: "patricebardet",
	},
	{
		input:
			"vendredi c\u2019est la folie ! bonjour, aujourd\u2019hui pas de r\u00e9cit de la journ\u00e9e d\u2019hier, pas qu\u2019elle ne fut interessante mais plut\u00f4t qu\u2019on est pas mal occup\u00e9",
		output: "mslc21",
	},
	{
		input:
			"Une cartouche en acier de 9mm retrouv\u00e9e hier. Le contexte : Alors que l'\u00e9motion est immense apr\u00e8s le t\u00e9moignage de Th\u00e9o, viol\u00e9 \u00e0 coup de matraque par ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"C'est lorsque le cort\u00e8ge s'\u00e9branle depuis Commerce, apr\u00e8s quelques discours, que la police se d\u00e9ploie. Des dizaines de policier-e-s enserrent la manif",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"PS : Les liens ont \u00e9t\u00e9 enlev\u00e9s de l\u2019article. Le \u00ab racisme libertaire \u00bb est une expression que nous aurions aim\u00e9 n\u2019avoir \u00e0 jamais employer. Pourtant, i",
		output: "xxx",
	},
	{
		input:
			"La situation des r\u00e9fugi\u00e9s \u00e0 Calais ne se r\u00e9soudra pas par la force ! En 2002, Sarkozy fermait un hangar ; en 2009, Besson s'attaquait \u00e0 des terrains v",
		output: "jc",
	},
	{
		input:
			"OGM : DES CHANSONS POUR LE RASSEMBLEMENT ET ACTIONS DU DIMANCHE 5 SEPT. OGM : QUELQUES CHANSONS DES JOURNEES D'ETE DES VERTS A TOULOUSE OGM Sur l'air ",
		output: "anonymous",
	},
	{
		input:
			"Afin de savoir ce que nous comptons faire ensemble face \u00e0 cette situation urgente, il est n\u00e9cessaire que nous nous regroupions sans attendre. Il sera ",
		output: "anonyme",
	},
	{
		input:
			"1) La r\u00e9forme des retraites : qui consiste \u00e0 allonger la dur\u00e9e de cotisation, \u00e0 calculer des pensions de telle sorte qu'elles soient moins fortes et d",
		output: "anonymous",
	},
	{
		input:
			"Bulletin num\u00e9ro 174, juillet/ao\u00fbt 2018, du r\u00e9seau R\u00e9sistons Ensemble. Form\u00e9 en 2002, R\u00e9sistons Ensemble a pour but d'informer, de briser l'isolement d",
		output: "r\u00e9seaure",
	},
	{
		input:
			"500 personnes se retrouvent sur la place \u00e0 la nuit tombante. Contre les humiliations, le racisme, et l'impunit\u00e9 polici\u00e8res. Alors qu'ont lieu des pris",
		output: "nantesrevolt\u00e9e",
	},
	{
		input:
			"Avant le d\u00e9part, quelques militants racistes du GUD, d\u00e9j\u00e0 boloss\u00e9s la veille \u00e0 la fac, viennent faire des provocations aux abords de la manifestation.",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pas de titre pour 11322 La riposte des Anonymous, face \u00e0 la fermeture de MU, fut rapide net et pr\u00e9cise : de nombreux sites institutionnels furent atta",
		output: "o.p.a",
	},
	{
		input:
			"INDEPENDANCE DE LA JUSTICE\u00a0 MIEUX VAUT EN RIRE ! Le proc\u00e8s des 4 de Tours va toujours de surprise en surprise. Nous avons pu enfin lire le d\u00e9lib\u00e9r\u00e9 mo",
		output: "jc",
	},
	{
		input:
			'BASES IDEOLOGIQUES DU PTB : D\u00e9claration du "S\u00e9minaire Communiste International" Bruxelles, 4 mai 1999 (PTB est signataire). Extraits : "L\'histoire a p',
		output: "laurent",
	},
	{
		input:
			"Photo : Morka Photo : Morka Photo : Morka (Le patron de carrouf \u00e9nerv\u00e9) Photo : Morka Photo : Morka Photo : Morka Photo : Morka Photo (pourrie et mal ",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Si il s\u2019agit d\u2019avoir des avis de riverains bien r\u00e9els, rappelons ici l\u2019opinion port\u00e9e par une soixantaines de nos voisins lors d\u2019un point presse la se",
		output: "zadist",
	},
	{
		input:
			"Pas de titre pour 11568 Fid\u00e8le \u00e0 sa technique habituelle: un fait isol\u00e9, une loi pour tous, il persiste et signe malgr\u00e9 la quarantaine de lois s\u00e9curit",
		output: "r\u00e9voltenum\u00e9rique",
	},
	{
		input: "\u00a0",
		output: "anonyme",
	},
	{
		input:
			"\u2013 Nouvelles condamnations \u00e0 mort de deux activistes Ahwazis. M.Ghasem Abdullah, n\u00e9 en 1986, mari\u00e9, p\u00e8re de deux enfants originaire du village de Beit ",
		output: "soliranparis",
	},
	{
		input:
			'"LA RAGE ENTRE LES DENTS ET LE SOURIRE SUR LES L\u00c8VRES\u201d \u201cLorsque les foules subissent les gouvernements, v\u00e9g\u00e9tant dans la paix sainte et honteuse de le',
		output: ".",
	},
	{
		input:
			".pdf \"[...] Malgr\u00e9 la guerre psychologique sem\u00e9e par l'\u00c9tat turc, les c\u00e9l\u00e9brations du 8 mars (journ\u00e9e mondiale des femmes) et celles du Newroz le 21 m",
		output: "merhabahevalno",
	},
	{
		input:
			"Cap sur le paradis lib\u00e9ral ! Nantes 2030 apparait donc comme une pure op\u00e9ration de communication, un vernis de consultation de la population. En faisa",
		output: "cnca",
	},
	{
		input:
			"LA MULTINATIONALE VINCI S'ACHARNE CONTRE UNE FAMILLE QUI R\u00c9SISTE \u00c0 NOTRE-DAME-DES-LANDES Le 22 octobre prochain au tribunal de Saint-Nazaire, VINCI et",
		output: "cnca",
	},
	{
		input:
			"LA FAMILLE ROM DU KOSOVO EST HEBERGEE PAR LA PREFECTURE Journ\u00e9e mouvement\u00e9e \u00e0 Tours. Le Conseil G\u00e9n\u00e9ral est en \u00e9tat de si\u00e8ge, le hall est bond\u00e9 de fli",
		output: "jc",
	},
	{
		input:
			"Pour commencer, regardons comment l\u2019analyse des donn\u00e9es est utilis\u00e9e. Pour ce faire, nous devons parler de trois choses\u00a0: les m\u00e9tadonn\u00e9es, les mod\u00e8les",
		output: "-",
	},
	{
		input:
			"Pas de titre pour 11458 A 19h cinq sections de gardes mobiles ont d\u00e9barqu\u00e9s (venant de direction la Paquelais). Ils ont escort\u00e9 les gendarmes locaux q",
		output: "zadist",
	},
	{
		input:
			"Quelques extraits: \u00ab\u00a0Le sommet Europe Turquie a bien eu lieu, malgr\u00e9 le climat militaris\u00e9 de Bruxelles, le refroidissement des relations entre la Turq",
		output: "merhabahevalno",
	},
	{
		input:
			"Outrecuidance extr\u00eame alors que cette place de la ville est g\u00e9n\u00e9ralement interdite d\u2019acc\u00e8s. Le premier appel \u00e9mane d\u2019une soixantaine d\u2019associations r\u00e9",
		output: "...",
	},
	{
		input:
			"J'esp\u00e8re que la d\u00e9finition n'est pas trop cardoc.. A faire pulluler \u00e0 notre tour... Au plaisir d'en voir un peu partout \u00e0 Nantes....",
		output: "anonyme",
	},
	{
		input:
			"Ces organisations souhaitent faire de ce rassemblement un moment festif, solidaire et engag\u00e9 pour la d\u00e9fense de nos droits. Certaines organisations on",
		output: "...",
	},
	{
		input:
			"LA MAISON DE LA DISCRIMINATION Des associations anti-racisme raciste ! Voil\u00e0 comment devrait s'appeler la \u00ab Maison de la mixit\u00e9 \u00bb, situ\u00e9e au 70, rue d",
		output: "anonymous",
	},
	{
		input:
			"Dans la premi\u00e8re partie de cet article, nous avons vu que le communisme n'\u00e9tait pas seulement un vieux r\u00eave de l'humanit\u00e9 ou le simple produit de la v",
		output: "unsympathisantducci",
	},
	{
		input:
			'Jupp\u00e9 et sa t\u00eate de suppositoire sont balay\u00e9s. Pendant que les m\u00e9dias focalisaient leurs attentions sur la "gauche" qui irait - soi-disant- voter pour',
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Un parti jeune et plein d'avenir : Marguerite Lussaud et Christian Bouchet, leader du FN nantais, au micro vendredi dernier Pour rappel, Christian Bou",
		output: "actionantifascistenantes",
	},
	{
		input:
			"LA JUSTICE N'ASSUME PAS\u00a0! PROCES EN APPEL DES 4 DE TOURS LE... 23 AOUT La justice fait encore tr\u00e8s fort. Les 4 de Tours (deux militants de SOIF D'UTOP",
		output: "jc",
	},
	{
		input:
			"Pas de titre pour 7878 Les mobilisations contre le projet d'un nouveau a\u00e9roport sur Nantes s'accentuent : Diffusion de textes et de vid\u00e9os : - argumen",
		output: "anonyme",
	},
	{
		input:
			"Depuis les rendus des proc\u00e8s en septembre et octobre, la situation semblait claire : les maisons d\u00e9pendant de la juridiction de Nantes ayant pr\u00e9sent\u00e9 ",
		output: "zadist",
	},
	{
		input:
			"CARTE EMPLACEMENT OCCUPATION COMMUNIQUE\u00a0: L\u2019Andra entame des travaux forestiers ill\u00e9gaux pour implanter Cig\u00e9o, les opposants reprennent la for\u00eat Diman",
		output: "anonyme",
	},
	{
		input:
			"Trois ans que la porte de l'ancienne pr\u00e9fecture s'ouvre ill\u00e9galement et l\u00e9gitimement sur plus de 300 artistes et une dizaine d'associations en \u00e9tat de",
		output: "anonymous",
	},
	{
		input:
			"Le collectif Vrij Keelbeek Libre\u00a0! qui occupe la ZAD depuis ao\u00fbt 2014 appelle \u00e0 venir renforcer la r\u00e9sistance sur place [Appel FR + VL Oproep] Le comi",
		output: "zadist",
	},
	{
		input:
			"Adesso - feuille de critique sociale Rovereto, 14 novembre 2008 \u2013 num\u00e9ro 25. Traduction par Non Fides, 2009. A paraitre dans Non Fides N\u00b0IV. Lire la l",
		output: "anonyme",
	},
	{
		input:
			"Le climat en Bolivia est particulierement tendu. A la pauvret\u00e9 chaque fois plus extr\u00eame (90 % de la population indigene et paysanne sont pauvres), s'a",
		output: "fab",
	},
	{
		input:
			"Le 16 avril 2003, des prisonniers de la prison centrale de Clairvaux se mutinaient, moins de deux mois apr\u00e8s une autre r\u00e9volte dans le m\u00eame \u00e9tablissem",
		output: "anonymous",
	},
	{
		input:
			"Redaction de Econoticiasbolivia.com La Paz, 5 juillet 2004 Avec la Cour Electorale, les ministres et principaux collaborateurs de Mesa sont en train d",
		output: "fab",
	},
	{
		input:
			"=== DU 2 AU 15 AO\u00dbT : INFO TOUR CONTRE LA POUBELLE NUCLEAIRE DE BURE === Les lieux pr\u00e9cis et horaires seront actualis\u00e9s sur vmc.camp mais notez d\u00e8s \u00e0 ",
		output: "vmc",
	},
	{
		input:
			"Vendredi 24 sept, une joyeuse bande s'en est all\u00e9e stopper une conf\u00e9rence de \"l'atelier urbain\" \u00a0 L'atelier urbain: 3 jours de visites, petits fours e",
		output: "anonyme",
	},
	{
		input:
			"d\u00e9claration de la CGT, le 18/12/2006 Refus de soins \u00e0 l'\u00e9gard de patients b\u00e9n\u00e9ficiaires de la CMU (Couverture Maladie universelle) et de l'AME (Aide M",
		output: "patricebardet",
	},
	{
		input:
			"Il semblerait que le projet d'enfouissement de d\u00e9chets radioactifs soit abandonn\u00e9..!!Un communiqu\u00e9 de presse \u00e0 para\u00eetre lundi prochain qui l'annonce a",
		output: "anonyme",
	},
	{
		input:
			"Concert de soutien \u00e0 la ZAD Communiqu\u00e9 de Presse Concerts de soutien \u00e0 Notre Dame des Landes Samedi 19 janvier, salle Delteil, B\u00e8gles. Cette soir\u00e9e de",
		output: "o.p.a",
	},
	{
		input:
			"Nous venons des contre-sommets, des campements Action Climat, des villages No Border, des luttes \u00e0 Notre-Dame-des-Landes, au Val de Suse ou \u00e0 Sivens, ",
		output: "vmc",
	},
	{
		input:
			"En avril 2013, la prison de Cond\u00e9-sur-Sarthe \u00e9tait inaugur\u00e9e par Taubira, ministre des tribunaux et des prisons. Cette taule est le r\u00e9sultat de plus d",
		output: "@",
	},
	{
		input:
			"Depuis presque 5 ans, nous, membres de la CREA (Campagne de R\u00e9quisition, d\u2019Entraide et d\u2019Autogestion) r\u00e9quisitionnons des b\u00e2timents vides priv\u00e9s et pu",
		output: "anonyme",
	},
	{
		input:
			"Le 11 septembre 2016, lac de la RAMA, Hautes-Alpes. Notre patience, autant que nos recours l\u00e9gaux, sont \u00e0 bout.\u00a0Ici, ils installent des pyl\u00f4nes de 225",
		output: "anonyme",
	},
	{
		input:
			"Enfin\u2005! Cette \u00e9dition de l\u2019essai d\u2019Anton Pannekoek, Darwinisme et Marxisme, m\u00e9rite bien cette exclamation. En 2009, nous avions d\u00e9j\u00e0 publi\u00e9 dans notre",
		output: "unsympathisantducci",
	},
	{
		input:
			"L'article en question: Vendredi dernier, une \u00e9tape a \u00e9t\u00e9 franchie pour les migrants qui occupent le presbyt\u00e8re de l\u2019\u00e9glise Saint-M\u00e9dard \u00e0 Doulon avec ",
		output: "anonyme",
	},
	{
		input:
			"Avec Trump et N\u00e9tanyahou, le crime qui se d\u00e9roule s\u2019est acc\u00e9l\u00e9r\u00e9\u00a0: l\u2019apartheid et les m\u00e9thodes de gangster ne se cachent m\u00eame plus. Malgr\u00e9 cela, le pe",
		output: "coordinationnationaledel\u2019ujfp",
	},
	{
		input:
			"Le 30 juillet dernier, \u00e0 la demande de la mairie de Nantes et d'un propri\u00e9taire priv\u00e9, des personnes migrantes ont \u00e9t\u00e9 expuls\u00e9es de mani\u00e8re brutale, i",
		output: "anonyme",
	},
	{
		input:
			"Crise de r\u00e9gime \u00e0 six jours du premier tour de l'\u00e9lection pr\u00e9sidentielle. Le gouvernement qui vit ses derniers instants conna\u00eet un niveau de discr\u00e9dit",
		output: "nantesr\u00e9volt\u00e9e",
	},
	{
		input:
			"Pas de titre pour 11169 L'id\u00e9e ne date pas d'hier et ne surprend qu'\u00e0 moiti\u00e9. Depuis des ann\u00e9es, la guerre des ayants droit contre la culture fait rag",
		output: "r\u00e9voltenum\u00e9rique",
	},
	{
		input:
			"Le proc\u00e8s pour la tentative d'\u00e9vasion ds 10 compagnons-nes membres de la Conspiration des Cellules de Feu. Chaqu'un(e) d'elleux a \u00e9t\u00e9 condamner \u00e0 115 ",
		output: "sinbanderasnifronteras",
	},
	{
		input:
			"Pas de titre pour 11624 En taule les boutonneux ! L\u2019objectif est donc \u00e9videmment de relancer la lutte contre tous ces horribles islamo-nazis qui passe",
		output: "r\u00e9voltenum\u00e9rique",
	},
	{
		input:
			"BOLIVIE : LES INSOMNIES DES ELITES Un soul\u00e8vement des \u00e9lites de l'orient de Bolivie, soutenu par quelques dirigeants d'organisations populaires, a eff",
		output: "fab",
	},
	{
		input:
			"L\u2019autorit\u00e9 la plus insidieuse est celle qui porte la promesse de la globalit\u00e9. C\u2019est pourquoi nous sommes pass\u00e9s de la monarchie \u00e0 la d\u00e9mocratie, et n",
		output: ".",
	},
	{
		input:
			"Jeudi 20 avril au soir. Une campagne pr\u00e9sidentielle marqu\u00e9e par d'innombrables affaires et un discr\u00e9dit sans pr\u00e9c\u00e9dent de la classe politique s'ach\u00e8ve",
		output: "nantesr\u00e9volt\u00e9e",
	},
];

// Let's go
const network = new brain.recurrent.LSTM();
network.train(data, config);
const json = network.toJSON();
fs.writeFileSync("./trained-net.json", JSON.stringify(json), "utf8");

// const output = network.run(test);
// const result = `${output} (Go to console for more informations)`;
// return result;
