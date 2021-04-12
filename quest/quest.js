import { findById } from '../utils.js';
import quests from '../data.js';
import { getUser, updateUserGivenChoice } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';
renderHeader();

const params = new URLSearchParams(window.location.search);

const section = document.getElementById('quest-section');
const descriptionContainer = document.getElementById('questDescription');
const choicesContainer = document.getElementById('choices');
const body = document.querySelector('body');

const audioTag = document.createElement('audio');
const sourceTag = document.createElement('source');


audioTag.append(sourceTag);
body.append(audioTag);

const questId = params.get('id');

const quest = findById(quests, questId);

sourceTag.src = `../assets/${quest.audio}`;

//console.table(quest);

const image = document.createElement('img');
const h2 = document.createElement('h2');

console.log(quest.description);

image.src = `../assets/${quest.image}`;

h2.textContent = quest.title;
descriptionContainer.textContent = quest.description;

const form = document.createElement('form');

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
    console.log(choiceId);

    const choice = findById(quest.choices, choiceId);
    //console.log(choiceId);

    updateUserGivenChoice(questId, choice);

    if (choiceId === 'bagEnd') {
        window.location = `../quest/?id=bagEnd`;
    } else {
        window.location = '../map';
    }
    //alert(JSON.stringify(getUser(), true, 2));

    //window.location = '../map';
});

section.append(h2, image, descriptionContainer, form);

