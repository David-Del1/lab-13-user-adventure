import { findById } from '../utils.js';
import quests from '../data.js';
import { updateUserGivenChoice } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';
renderHeader();

const params = new URLSearchParams(window.location.search);

const section = document.getElementById('quest-section');
const descriptionContainer = document.getElementById('questDescription');
const choicesContainer = document.getElementById('choices');
const body = document.querySelector('body');

const audioTag = document.createElement('audio');
const sourceTag = document.createElement('source');
const image = document.createElement('img');
const h2 = document.createElement('h2');

audioTag.autoplay = 'true';

const questId = params.get('id');

const quest = findById(quests, questId);

sourceTag.src = `../assets/${quest.audio}`;

audioTag.append(sourceTag);
body.append(audioTag);

image.src = `../assets/${quest.image}`;

h2.textContent = quest.title;
descriptionContainer.textContent = quest.description;

const form = document.createElement('form');
form.autocomplete = 'off';

for (let choice of quest.choices) {
    
    const label = document.createElement('label');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;

    choicesContainer.append(choice.description, radio);

    label.append(choicesContainer);
    form.append(label);
    
}

const button = document.createElement('button');
button.textContent = 'Submit';
button.classList.add('submit-choice');

form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const choiceId = formData.get('choice');

    const choice = findById(quest.choices, choiceId);
    //console.log(choiceId);

    updateUserGivenChoice(questId, choice);

    if (choiceId === 'bagEnd') {
        window.location = `../quest/?id=bagEnd`;
    } 
    else if (choiceId === 'greenDragonInn') {
        window.location = `../quest/?id=greenDragonInn`;
    }
    else if (choiceId === 'inside'){
        window.location = `../quest/?id=insideBagEnd`;
    }
    else if (choiceId === 'barFight') {
        alert('You manage to kick a few hobbits around but are soon overwhelmed by their drunken rage. They beat you up and throw you out into the mud. You lose 20 HP.');
        window.location = `../quest/?id=shire`;
    }
    else if (choiceId === 'back') {
        window.location = '../map';
    }
    else if (choiceId === 'ring') {
        window.location = `../quest/?id=ringInBagEnd`;
    }
    else if (choiceId === 'putOn') {
        window.location = `../quest/?id=corrupted`;
    }
    else if (choiceId === 'tryAgain') {
        localStorage.clear();
        window.location = `../index.html`;
    }
    else if (choiceId === 'tea') {
        alert('Scrumptious! Your belly is full. You thank Bilbo and go on your way.');
        window.location = '../map';
    }
    else if (choiceId === 'destroy') {
        window.location = `../quest/?id=destroyQuest`;
    }
    else if (choiceId === 'go') {
        window.location = '../map';
    }
    else if (choiceId === 'wander') {
        window.location = `../quest/?id=wander`;
    }
    else if (choiceId === 'prancingPony') {
        window.location = `../quest/?id=prancingPony`;
    }
    else if (choiceId === 'confront') {
        window.location = `../quest/?id=confrontStrider`;
    }
    else if (choiceId === 'rest') {
        window.location = `../quest/?id=rest`;
    }
    else if (choiceId === 'run') {
        window.location = `../quest/?id=safe`;
    }
    else if (choiceId === 'continue') {
        window.location = `../quest/?id=rivendell`;
    }
    else if (choiceId === 'fellowship') {
        window.location = `../quest/?id=fellowship`;
    }
    else if (choiceId === 'done') {
        window.location = `../results`;
    }
    else {
        window.location = '../map';
    }

    //alert(JSON.stringify(getUser(), true, 2));

    //window.location = '../map';
});

section.append(h2, image, descriptionContainer, form);

