
const shire = {
    id: 'shire',
    title: 'The Shire',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'theShire.jpg',
    audio: 'Hills of the Shire.mp3',
    description: `You've made it to the rolling hills and green pastures of the Shire. Take a minute to enjoy the smell of fresh greenery and the beautiful sights. Here in the town of Hobbiton live a simple, happy folk; The Hobbits. Where would you like to go next?`,
    choices: [{
        id: 'bagEnd',
        description: 'Visit Bag End',
        result: `
            
        `,
        hp: 0,
        gold: 0,
        exp: 10

    },
    {
        id: 'greenDragonInn',
        description: 'Get a drink at the Green Dragon Inn',
        hp: 0,
        exp: 10
    }, {
        id: 'back',
        description: 'Back to the map!',
        hp: 0,
        gold: 0,
        exp: 0
    }]
};

const bagEnd = {
    id: 'bagEnd',
    title: 'Bag End',
    image: 'BagEnd.jpeg',
    audio: 'bagEnd.mp3',
    action: 'dragon-growl.aiff',
    description: `
        Ahhh, Bag End. The cozy house under the hill. Oh look! You meet the hobbit Bilbo Baggins and the wizard Gandalf the Gray. You gain 10 XP! What to do next?
    `,
    choices: [{
        id: 'inside',
        description: 'Let\'s go inside!',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: 10,
        gold: 0,
        exp: 0,
    }, {
        id: 'wander',
        description: 'Wander off into the wilderness',
        hp: -200,
        exp: 0
    }, {
        id: 'back',
        description: 'Back to the map!',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const dragonInn = {
    id: 'greenDragonInn',
    title: 'The Green Dragon Inn',
    image: 'greenDragon.gif',
    audio: 'Hey Ho, To the Bottle I go.mp3',
    description: `
        There's lots of drinking going on at the Green Dragon Inn! You meet Mariadoc (Mary) Brandybook and Pereguin (Pippin) Took, and they're singing drinking songs! You gain 10 XP. What to do next?
    `,
    choices: [{
        id: 'barFight',
        description: 'Get into a senseless bar fight',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -20,
        gold: 0,
        exp: 0
    }, {
        id: 'fight',
        description: 'Drink away your woes',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'back',
        description: 'Back to the map!',
        hp: 0,
        exp:0
    }]
};
const wander = {
    id: 'wander',
    title: 'A Troll has eaten you...',
    image: 'bilbo-and-the-trolls.gif',
    audio: 'Player Death Scream Sound Effect Third Variation.mp3',
    description: `
        You've wandered into a pack of hungry trolls. They smell like old fish and toe jam. They have you for lunch. You have died.
    `,
    choices: [{
        id: 'tryAgain',
        description: 'Try Again',
        hp: 0,
        gold: 0,
        exp: 0
    }]
};

const insideBagEnd = {
    id: 'insideBagEnd',
    title: 'Inside Bag End',
    image: 'insideBagEnd.jpg',
    audio: 'Dreaming of Bag End.mp3',
    description: `
        It's lovely inside Bag End. The tempurature feels just right, there's always warm food to fill our bellies and oak-barreled wine to calm our nerves. You gain 10 HP. Come back to Bag End anytime for a recharge. What's next?
    `,
    choices: [{
        id: 'tea',
        description: 'Have some tea & scrambled eggs',
        hp: 0,
        gold: 0
    }, {
        id: 'ring',
        description: 'Huh? What\'s this on the floor?',
        hp: 0,
        gold: 0,
        exp: 10
    }, {
        id: 'back',
        description: 'Back to the map!',
        hp: 0,
        gold: 90,
        exp: 0
    }]
};

const ringInBagEnd = {
    id: 'ringInBagEnd',
    title: 'One Ring to Rule Them All...',
    image: 'ring.webp',
    audio: 'Prologue One Ring to Rule Them All.mp3',
    description: `
        You discover the Ring of Power and gain 10 XP. It's warm glow... It's addictive lure... It calls to you.... It's hypnotizing. It's... it's so precious... Will you resist? 
    `,
    choices: [{
        id: 'putOn',
        description: 'MY PRECIOUS! Put on the ring',
        hp: -100,
        gold: 0,
        exp: 0
    }, {
        id: 'destroy',
        description: 'No being can wield this much power! It must be destroyed!',
        hp: 0,
        gold: 0,
        exp: 10
    }, {
        id: 'back',
        description: 'Back to the map!',
        hp: 0,
        gold: 0,
        exp: 0
    }]
};

const destroyQuest = {
    
    id: 'destroyQuest',
    title: 'Be the Savior of Middle Earth!',
    image: 'Frodo.jpg',
    audio: 'conspiracy.mp3',
    description: `
        You have resisted the temptation of the Ring! You gain 10 XP. You have been tasked to take the Ring of Power to the depths of Mordor and throw it into the fires of Mount Doom! The people of Middle Earth believe in you! You must head for the village of Bree to begin your mission.
    `,
    choices: [{
        id: 'go',
        description: 'Let\'s go!',
        hp: 0,
        gold: 0,
        exp: 0
    }]
};

const corrupted = {
    id: 'corrupted',
    title: 'You\'ve been corrupted...',
    image: 'gollum-gif-11.gif',
    audio: 'Smeagol says MY PRECIOUS!!!!.mp3',
    description: `
        You've become corrupted by The Ring. You spend your days in complete isolation, become sickly looking and paranoid, and eventually succumb to the Ring's grasp on you. You are dead.
    `,
    choices: [{
        id: 'tryAgain',
        description: 'Start Over',
        hp: 0,
        gold: 0,
        exp: 0
    }]
};

const bree = {
    id: 'bree',
    title: 'Bree',
    image: 'bree.webp',
    audio: 'rain.mp3',
    description: `
        You've made it to the village of Bree. Quick, get out of this storm and find a place to sleep for the night.
    `,
    choices: [{
        id: 'prancingPony',
        description: 'Head for the Prancing Pony Inn',
        hp: 0,
        gold: 0,
        exp: 10
    }, {
        id: 'shiver',
        description: 'Stay out in the rain',
        hp: -50,
        gold: 0,
        exp: 0
    }, {
        id: 'back',
        description: 'Back to the map!',
        hp: 0,
        gold: 0,
        exp: 0
    }]
};
const prancingPony = {
    id: 'prancingPony',
    title: 'Who is that man?',
    image: 'strider.gif',
    audio: 'Strider.mp3',
    description: `
        Here in the Prancing Pony, you get the chance to dry off and grab a bite to eat. However, there's a man that's been staring at you from afar. You ask a worker whether they know who the man is, but they say they do not know. They mention that he stays around the area and that there's an aura of mystery that surrounds him. The locals call him Strider. Who is he and what does he want?
    `,
    choices: [{
        id: 'confront',
        description: 'Confront him',
        hp: 0,
        gold: 0,
        exp: 10
    }, {
        id: 'shiver',
        description: 'Flip him the bird',
        hp: 0,
        gold: 0,
        exp: 0
    }, {
        id: 'back',
        description: 'Back to the map!',
        hp: 0,
        gold: 0,
        exp: 0
    },
    ]
};
const confront = {
    id: 'confrontStrider',
    title: 'Strider wants to help you!',
    image: 'aragorn.jpg',
    audio: 'The Nazgûl.mp3',
    description: `
        Without warning, the man rushes you into a room. He tells you that dark, powerful beings hunt you and that you are not safe. The man says he knows what you have in your possession. He reveals himself as Aragon, and he wishes to help you in your mission to destroy the Ring of Power. "We must head for Rivendell at first light.", says Aragon. 
    `,
    choices: [{
        id: 'go',
        description: 'Let\'s go!',
        hp: 0,
        gold: 0,
        exp: 0
    },
    ]
};

const weatherTop = {
    id: 'weatherTop',
    title: 'Weathertop',
    prerequisites: ['dragon', 'monsters'],
    image: 'weathertop.jpg',
    audio: 'The Doors of Durin.mp3',
    description: `
        With the company of Aragon, you come across Weathertop, an abandoned watch-tower and military outpost overlooking the Great East Road since the days of the reign of Elendil the Dunedain. Both of you decide it would be best to lay low here for the night and continue your travels in the morning. 
    `,
    choices: [{
        id: 'rest',
        description: 'Try to get some rest',
        hp: 0,
        gold: 0,
        exp: 0
    }, {
        id: 'wander',
        description: 'Wander off into the wilderness',
        hp: -150,
        gold: 0,
        exp: 0
    }, {
        id: 'back',
        description: 'Back to the map!',
        hp: 0,
        gold: 0, 
        exp: 0
    }]
};
const rest = {
    id: 'rest',
    title: 'The Nazgul found you!',
    image: 'naz.gif',
    audio: 'Orthanc.mp3',
    description: `
       Oh No! The Nazgul have located their prized possession: The Ring of Power! They will stop at nothing to obtain it. Run away!
    `,
    choices: [{
        id: 'run',
        description: 'Run away!',
        hp: 0,
        gold: 0,
        exp: 0
    }, {
        id: 'fight',
        description: 'Stand and fight!',
        hp: -150,
        gold: 0,
        exp: 0
    }]
};

const runAway = {
    id: 'safe',
    title: 'You are safe... for now.',
    image: 'safe.jpg',
    audio: 'The Passing of the Elves.mp3',
    description: `
       The brave Aragon fended off those evil Nazgul to give you just enough time to escape. You haven't seen Aragon since. You see Rivendell in the distance. What will you do?
    `,
    choices: [{
        id: 'continue',
        description: 'Let\'s keep going',
        hp: 0,
        gold: 0,
        exp: 10
    }, {
        id: 'despair',
        description: 'Collapse in despair',
        hp: -150,
        gold: 0,
        exp: 0
    }]
};

const rivendell = {
    id: 'rivendell',
    title: 'You made it to Rivendell!',
    image: 'rivendell.jpg',
    audio: 'Rivendell.mp3',
    description: `
       You have made it to the Elven town of Rivendell! You gain 10 XP. Here, you will unite with others who share in the belief of your mission. They will help you in any way they can so that you can succeed in your quest. 
    `,
    choices: [{
        id: 'fellowship',
        description: 'Let\'s do it!',
        hp: 0,
        gold: 0,
        exp: 10
    }]
};
const fellowship = {
    id: 'fellowship',
    title: 'The Fellowship of the Ring has been founded!',
    image: 'fellowship.jpg',
    audio: 'The Road Goes Ever On... , Pt. 1.mp3',
    description: `
       Elrond, lord of Rivendell, has established the The Fellowship of the Ring-- a group of brave ones that are tasked to destroy the Ring of Power by throwing it into the fires of Mount Doom. And... is that Aragon? It is! He made it out alive from the encounter with the Nazgul and he is here in Rivendell showing his devotion to your cause. There's also Gandlaf the Gray, The archer Elf Legolas, the brave dwarf Gimli, Boromir, Mary, Pippin and Samwise Gamgee! The fate of the ring  will determine the fate of Middle Earth and all those who inhabit it.
    `,
    choices: [{
        id: 'done',
        description: 'I am ready.',
        hp: 0,
        exp: 10
    }]
};

const quests = [
    shire,
    bagEnd,
    dragonInn,
    insideBagEnd,
    wander,
    ringInBagEnd, 
    corrupted,
    destroyQuest,
    weatherTop,
    bree,
    prancingPony,
    confront,
    rest,
    runAway,
    rivendell,
    fellowship,
];

export default quests;