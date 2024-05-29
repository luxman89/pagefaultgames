import {SimpleTranslationEntries} from "#app/plugins/i18n";

// Titles of special trainers like gym leaders, elite four, and the champion
export const titles: SimpleTranslationEntries = {
  "elite_four": "Conseil 4",
  "elite_four_female": "Conseil 4",
  "gym_leader": "Champion d’Arène",
  "gym_leader_female": "Championne d’Arène",
  "gym_leader_double": "Duo de Champions",
  "champion": "Maitre",
  "champion_female": "Maitresse",
  "champion_double": "Duo de Maitres",
  "rival": "Rival·e", //Written in gender-inclusive language in wait of a potential split of the entry
  "professor": "Professeur",
  "professor_female": "Professeure",
  "frontier_brain": "Meneur·euse de Zone", //Written in gender-inclusive language in wait of a potential split of the entry

  // Special Trainers
  "pkm_trainer": "Dresseur Pokémon",
  "pkm_trainer_female": "Dresseuse Pokémon",
  "pkm_wielder": "Expert en Pokémon",
  "pkm_wielder_female": "Experte en Pokémon",

  // Double Names
  "timespace_double": "Duo Spatio-Temporel",
  "sibling_double": "Fratrie",
  "ninja_double": "Duo de Ninjas",
  "dragon_tamer_double": "Duo de Dracologues",
  "kalos_legends_double": "Légendes de Kalos",
  "alola_legends_double": "Légendes d’Alola",
  // Maybe if we add the evil teams we can add "Team Rocket" and "Team Aqua" etc. here as well as "Team Rocket Boss" and "Team Aqua Admin" etc.
} as const;

// Titles of trainers like "Youngster" or "Lass"
export const trainerClasses: SimpleTranslationEntries = {
  "ace_trainer": "Topdresseur",
  "ace_trainer_female": "Topdresseuse",
  "ace_duo": "Topdresseurs",
  "artist": "Artiste",
  "artist_female": "Artiste",
  "backers": "Pompom Girls",
  "backpacker": "Randonneur",
  "backpacker_female": "Randonneuse",
  "backpackers": "Randonneurs",
  "baker": "Boulangère",
  "battle_girl": "Combattante",
  "beauty": "Canon",
  "beginners": "Novices",
  "biker": "Motard",
  "black_belt": "Karatéka",
  "breeder": "Éleveur",
  "breeder_female": "Éleveuse",
  "breeders": "Éleveurs",
  "clerk": "Employé",
  "clerk_female": "Employée",
  "colleagues": "Collègues de Bureau",
  "crush_kin": "Duo Baston",
  "cyclist": "Cycliste",
  "cyclist_female": "Cycliste",
  "cyclists": "Cyclistes",
  "dancer": "Danseur",
  "dancer_female": "Danseuse",
  "depot_agent": "Cheminot",
  "doctor": "Docteur",
  "doctor_female": "Docteure",
  "fisherman": "Pêcheur",
  "fisherman_female": "Pêcheuse",
  "gentleman": "Gentleman",
  "guitarist": "Guitariste",
  "guitarist_female": "Guitariste",
  "harlequin": "Clown",
  "hiker": "Montagnard",
  "hooligans": "Loubards",
  "hoopster": "Basketteur",
  "infielder": "Baseballeur",
  "janitor": "Nettoyeur",
  "lady": "Mademoiselle",
  "lass": "Fillette",
  "linebacker": "Quaterback",
  "maid": "Gouvernante",
  "madame": "Mondaine",
  "medical_team": "Médecins",
  "musician": "Musicien",
  "hex_maniac": "Mystimaniac",
  "nurse": "Infirmière",
  "nursery_aide": "Institutrice",
  "officer": "Policier",
  "parasol_lady": "Sœur Parasol",
  "pilot": "Pilote",
  "pokéfan": "Poké Fan",
  "pokéfan_female": "Poké Fan",
  "pokéfan_family": "Couple de Pokéfans",
  "preschooler": "Petit",
  "preschooler_female": "Petite",
  "preschoolers": "Petits",
  "psychic": "Kinésiste",
  "psychic_female": "Kinésiste",
  "psychics": "Kinésistes",
  "pokémon_ranger": "Pokémon Ranger",
  "pokémon_ranger_female": "Pokémon Ranger",
  "pokémon_rangers": "Pokémon Rangers",
  "ranger": "Ranger",
  "restaurant_staff": "Serveurs",
  "rich": "Rich",
  "rich_female": "Mondaine",
  "rich_boy": "Gentleman",
  "rich_couple": "Couple de Bourgeois",
  "rich_kid": "Richard",
  "rich_kid_female": "Mademoiselle",
  "rich_kids": "Richards",
  "roughneck": "Loubard",
  "scientist": "Scientifique",
  "scientist_female": "Scientifique",
  "scientists": "Scientifiques",
  "smasher": "Tenniswoman",
  "snow_worker": "Ouvrier Alpin",
  "snow_worker_female": "Ouvrière Alpine",
  "striker": "Footballeur",
  "school_kid": "Élève",
  "school_kid_female": "Élève",
  "school_kids": "Élèves",
  "swimmer": "Nageur",
  "swimmer_female": "Nageuse",
  "swimmers": "Nageurs",
  "twins": "Jumelles",
  "veteran": "Vénérable",
  "veteran_female": "Vénérable",
  "veteran_duo": "Vénérables",
  "waiter": "Serveur",
  "waitress": "Serveuse",
  "worker": "Ouvrier",
  "worker_female": "Ouvrière",
  "workers": "Ouvriers",
  "youngster": "Gamin"
} as const;

// Names of special trainers like gym leaders, elite four, and the champion
export const trainerNames: SimpleTranslationEntries = {
  "brock": "Pierre",
  "misty": "Ondine",
  "lt_surge": "Major Bob",
  "erika": "Erika",
  "janine": "Jeannine",
  "sabrina": "Morgane",
  "blaine": "Auguste",
  "giovanni": "Giovanni",
  "falkner": "Albert",
  "bugsy": "Hector",
  "whitney": "Blanche",
  "morty": "Mortimer",
  "chuck": "Chuck",
  "jasmine": "Jasmine",
  "pryce": "Frédo",
  "clair": "Sandra",
  "roxanne": "Roxanne",
  "brawly": "Bastien",
  "wattson": "Voltère",
  "flannery": "Adriane",
  "norman": "Norman",
  "winona": "Alizée",
  "tate": "Lévy",
  "liza": "Tatia",
  "juan": "Juan",
  "roark": "Pierrick",
  "gardenia": "Flo",
  "maylene": "Mélina",
  "crasher_wake": "Lovis",
  "fantina": "Kiméra",
  "byron": "Charles",
  "candice": "Gladys",
  "volkner": "Tanguy",
  "cilan": "Rachid",
  "chili": "Armando",
  "cress": "Noa",
  "cheren": "Tcheren",
  "lenora": "Aloé",
  "roxie": "Strykna",
  "burgh": "Artie",
  "elesa": "Inezia",
  "clay": "Bardane",
  "skyla": "Carolina",
  "brycen": "Zhu",
  "drayden": "Watson",
  "marlon": "Amana",
  "viola": "Violette",
  "grant": "Lino",
  "korrina": "Cornélia",
  "ramos": "Amaro",
  "clemont": "Lem",
  "valerie": "Valériane",
  "olympia": "Astera",
  "wulfric": "Urup",
  "milo": "Percy",
  "nessa": "Donna",
  "kabu": "Kabu",
  "bea": "Faïza",
  "allister": "Alistair",
  "opal": "Sally",
  "bede": "Travis",
  "gordie": "Chaz",
  "melony": "Lona",
  "piers": "Peterson",
  "marnie": "Rosemary",
  "raihan": "Roy",
  "katy": "Éra",
  "brassius": "Colza",
  "iono": "Mashynn",
  "kofu": "Kombu",
  "larry": "Okuba",
  "ryme": "Laïm",
  "tulip": "Tully",
  "grusha": "Grusha",
  "lorelei": "Olga",
  "bruno": "Aldo",
  "agatha": "Agatha",
  "lance": "Peter",
  "will": "Clément",
  "koga": "Koga",
  "karen": "Marion",
  "sidney": "Damien",
  "phoebe": "Spectra",
  "glacia": "Glacia",
  "drake": "Aragon",
  "aaron": "Aaron",
  "bertha": "Terry",
  "flint": "Adrien",
  "lucian": "Lucio",
  "shauntal": "Anis",
  "marshal": "Kunz",
  "grimsley": "Pieris",
  "caitlin": "Percila",
  "malva": "Malva",
  "siebold": "Narcisse",
  "wikstrom": "Tileo",
  "drasna": "Dracéna",
  "hala": "Pectorius",
  "molayne": "Molène",
  "olivia": "Alyxia",
  "acerola": "Margie",
  "kahili": "Kahili",
  "rika": "Cayenn",
  "poppy": "Popi",
  "hassel": "Hassa",
  "crispin": "Rubépin",
  "amarys": "Nérine",
  "lacey": "Taro",
  "drayton": "Irido",
  "blue": "Blue",
  "red": "Red",
  "steven": "Pierre Rochard",
  "wallace": "Marc",
  "cynthia": "Cynthia",
  "alder": "Goyah",
  "iris": "Iris",
  "diantha": "Dianthéa",
  "hau": "Tili",
  "geeta": "Alisma",
  "nemona": "Menzi",
  "kieran": "Kass",
  "leon": "Tarak",
  "rival": "Gwenaël", //Male breton name, a celtic language spoken in  Brittany (France) and related to the word for "white" (gwenn). Finn meaning is also "white" in irish/goidelic which are also celtic languages.
  "rival_female": "Papina", //Litteral translation of ivy, also used as Female name in a North-American indigenous language

  "volo": "Percupio",
  "hop": "Nabil",
  "kukui": "Euphorbe",
  "carmine": "Roseille",

  // Double Names
  "tate_liza_double": "Lévy & Tatia",
  "liza_tate_double": "Tatia & Lévy",
  "steven_wallace_double": "Pierre R. & Marc",
  "wallace_steven_double": "Marc & Pierre R.",
  "alder_iris_double": "Goyah & Iris",
  "iris_alder_double": "Iris & Goyah",
  "marnie_piers_double": "Rosemary & Peterson",
  "piers_marnie_double": "Peterson & Rosemary",
  "volo_cynthia_double": "Percupio & Cynthia",
  "cynthia_volo_double": "Cynthia & Percupio",
  "hop_leon_double": "Nabil & Tarak",
  "leon_hop_double": "Tarak & Nabil",
  "opal_bede_double": "Sally & Travis",
  "bede_opal_double": "Travis & Sally",
  "nemona_geeta_double": "Menzi & Alisma",
  "geeta_nemona_double": "Alisma & Menzi",
  "janine_koga_double": "Jeannine & Koga",
  "koga_janine_double": "Koga & Jeannine",
  "lance_clair_double": "Peter & Sandra",
  "clair_lance_double": "Sandra & Peter",
  "kieran_carmine_double": "Kass & Roseille",
  "carmine_kieran_double": "Roseille & Kass",
  "hau_kukui_double": "Tili & Euphorbe",
  "kukui_hau_double": "Euphorbe & Tili",
  "diantha_korrina_double": "Dianthéa & Cornélia",
  "korrina_diantha_double": "Cornélia & Dianthéa",
  "roark_byron_double": "Pierrick & Charles",
  "byron_roark_double": "Charles & Pierrick",
} as const;
