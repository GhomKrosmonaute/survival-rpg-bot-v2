enum EquipmentSlot {
  Head,
  Neck,
  Chest,
  Belt,
  Legs,
  Feet,
  Hand,
  Finger,
}

enum Stat {
  Strength,
  Resistance,
  Luck,
}

enum Temporary {
  Strength,
  Resistance,
  Luck,
  Drunkenness,
}

enum World {
  Euphoria,
}

enum Equipment {
  LowQualityHelmet = "couvre-tête en cuir",
  LowQualityNecklace = "collier de fleurs",
  LowQualityChest = "manteau en cuir",
  LowQualityRing = "anneau en bois",
  LowQualityBelt = "bout de ficelle",
  LowQualityLegs = "braies",
  LowQualityFeet = "chaussettes",
  LowQualityFeet2 = "sandales",
  LowQualityHand = "bouclier en bois",

  MediumQualityHelmet = "casque léger",
  MediumQualityNecklace = "collier de coquillages",
  MediumQualityChest = "plastron léger",
  MediumQualityRing = "anneau de fer",
  MediumQualityBelt = "corde",
  MediumQualityLegs = "braies culottées",
  MediumQualityFeet = "chaussettes vertes",
  MediumQualityFeet2 = "bottes",
  MediumQualityHand = "bouclier rond",

  LowQualityFastWeapon = "épée de bois",
  LowQualityHeavyWeapon = "massue en bois",
  LowQualityLongWeapon = "canne en bois",
  LowQualityRangedWeapon = "arc en bois",

  MediumQualityFastWeapon = "dague de fer",
  MediumQualityHeavyWeapon = "massue de fer",
  MediumQualityLongWeapon = "pique de fer",
  MediumQualityRangedWeapon = "arc à poulies",

  GoodQualityFastWeapon = "rapière",
  GoodQualityHeavyWeapon = "hache lourde",
  GoodQualityLongWeapon = "lance pointue",
  GoodQualityRangedWeapon = "arbalète",

  LowQualityMagicWandExplosive = "baguette paxaf",
  LowQualityMagicWandPsychic = "baguette hypnotique",
  LowQualityMagicWandFire = "allumette",
  LowQualityMagicWandWater = "baguette de sourcier",
  LowQualityMagicWandNature = "brindille magique",

  MediumQualityMagicWandExplosive = "baguette boxom",
  MediumQualityMagicWandPsychic = "baguette psychotique",
  MediumQualityMagicWandFire = "baguette incendiaire",
  MediumQualityMagicWandWater = "baguette des marées",
  MediumQualityMagicWandNature = "branche de mojo",

  GoodQualityMagicWandExplosive = "baguette braxoum",
  GoodQualityMagicWandPsychic = "baguette psychokinétique",
  GoodQualityMagicWandFire = "baguette calcifiante",
  GoodQualityMagicWandWater = "baguette des tempètes",
  GoodQualityMagicWandNature = "baguette phytokinésique",
}

enum Resource {
  Wood,
  Leather,
  Rock,
  Iron,
  MerlinPowder,
  Gold,
  Diamond,
}

enum EnemyName {
  BabyVampire = "futur vampire",
  Slime = "slime",
  Zombie = "zombie",
  Nymphe = "nymphe",
  PretentiousPrince = "prince prétentieux",
  SpectralJellyfish = "méduse spectrale",
  GlobulatedMucosa = "mucosité globulée",
  Imp = "diablotin",
  YoungIntruder = "jeune intrus",
  DoorGuardian = "gardien des portes",
  Ninja = "ninja",
  FlirtatiousLumberjack = "bûcheronne coquette",
  RecklessSwordsman = "épéiste téméraire",
  LuxuriousOracle = "oracle luxurieux",
  BackbitingWizard = "sorcier médisant",
  PrankishSpearman = "lancier farceur",
  TrainedGuard = "maton entraîné",
  MysteriousPyromancer = "pyromancien mystérieux",
  PigOrc = "orc porcin",
  Vampire = "vampire",
  SilverWerewolf = "loup-garou d'argent",
  RoyalPriest = "prêtre royal",
  ForestDragon = "dragon des forêts",
  Purificator = "purificateur",
  Cerberus = "cerbère",
  SupremePhoenix = "phénix suprême",
}

enum Item {}

enum Potion {
  LowQualityHealing = "fiole de guérison",
  MediumQualityHealing = "fiole de guérison supérieure",
  GoodQualityHealing = "wakfu embouteillé",

  Drunkenness = "vieille liqueur",
  Strength = "fiole draconique",
  Resistance = "fiole de renforcement",
  Life = "fiole de jouvence",
}

enum EffectName {
  Heal = "soin",
  Life = "jouvence",
}

enum Title {
  BeginnerAdventurer,
}

export enum Logo {
  Strength = "💪",
  Resistance = "🛡️",
  Luck = "🍀",
  Beer = "🍺",

  Healing = "💖",
  MoreLife = "💝",

  Lance = "lance",
  Crossbow = "arbalete",
  Ring = "bague",
  MagicWand = "baguettemagique",
  Broom = "balai",
  Wood = "bois",
  Boots = "bottes",
  Shield = "bouclierRond",
  Helmet = "casque",
  Belt = "ceinture",
  Chain = "chaine",
  Leather = "cuir",
  Diamond = "diamant",
  Sword = "epee",
  Iron = "fer",
  String = "ficelle",
  HealingVial = "fioledeguerison",
  RoyalElixir = "fioledelixirroyal",
  ReinforcementVial = "fiolederenforcement",
  DragonVial = "fioledraconique",
  RepulseVial = "fiolerepulsive",
  Gauntlet = "gants",
  Axe = "hache",
  Leggings = "jambieres",
  Milk = "lait",
  Sledgehammer = "massue",
  MerlinPowder = "merlinpowder",
  Gold = "or",
  Chest = "plastron",
  Pullover = "pullover",
  Rock = "roche",
  Necklace = "talisman",
  LotteryTicket = "ticketdeloto",
  YellowGlass = "shooter",

  Leaf = "🍂",
  Flower = "🌼",
  Mountain = "⛰️",
  Village = "🏘️",
  Volcano = "🌋",
  Field = "🌾",
  Tropical = "🌴",
  Swamp = "🐸",
  Lake = "🦆",
  Canyon = "🦂",
  Cactus = "🌵",
  Penguin = "🐧",
  Rainbow = "🌈",
  Camel = "🐫",
  Beach = "🏖️",
  Magical = "✨",
  Temple = "🕍",
  Crocodile = "🐊",
  Castle = "🏰",
  Forest = "🌲",
  Sanctuary = "🌟",
  Waterfall = "🌊",

  CaribouChief = "🦌",
  DoyaMaster = "🖖",

  Meticulous = "🧐",
  Stingy = "🤑",
  WellLiving = "🤩",
  Hacker = "⚒️",
  Skillful = "🤹",
  Glutton = "🍩",
  Fast = "🏃",
  Focused = "🧘",
  Hardened = "🤺",
  Alcoholic = "🍻",

  Shell = "🐚",
}
