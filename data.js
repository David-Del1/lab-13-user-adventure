
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
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
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

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    shire,
    bagEnd,
    dragonInn,
    insideBagEnd,
    ringInBagEnd, 
    corrupted,
    destroyQuest,
    treasure,
    bree,
];

export default quests;