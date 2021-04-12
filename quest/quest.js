import { findById } from '../utils.js';
import quests from '../data.js';
import { getUser, updateUserGivenChoice } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';
renderHeader();

const params = new URLSearchParams(window.location.search);

const section = document.getElementById('quest-section');
const descriptionContainer = document.getElementById('questDescription');
const choicesContainer = document.getElementById('choices');



const questId = params.get('id');

const quest = findById(quests, questId);

//console.table(quest);

const image = document.createElement('img');
const h2 = document.createElement('h2');



image.src = `../assets/${quest.image}`;

h2.textContent = quest.title;

const form = document.createElement('form');
for (let choice of quest.choices) {
    const label = document.createElement('label');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;

    label.append(choice.description, radio);
    form.append(label);

    descriptionContainer.textContent = quests.description;
}

const button = document.createElement('button');
button.textContent = 'submit';

form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const choiceId = formData.get('choice');

    const choice = findById(quest.choices, choiceId);
    //console.log(choiceId);

    updateUserGivenChoice(questId, choice);

    alert(JSON.stringify(getUser(), true, 2));

    window.location = '../map';
});

section.append(h2, image, form, descriptionContainer);

