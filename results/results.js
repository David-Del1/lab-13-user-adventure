import { getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';
import { aliveEXPMessages, deadEXPMessages, hpMessages } from './messages.js';

renderHeader();

const user = getUser();

const userIsDead = user.hp <= 0;

let goldStatus;

if (user.exp < 20) {
    goldStatus = 'poor';
} else if (user.gold > 20 && user.gold < 50) {
    goldStatus = 'modest';
} else {
    goldStatus = 'rich';
}

let hpStatus;

if (user.hp <= 0) {
    hpStatus = 'dead';
} else if (user.hp > 20 && user.hp < 50) {
    hpStatus = 'frail';
} else {
    hpStatus = 'healthy';
}

let goldMessagesToUse;

if (userIsDead) {
    goldMessagesToUse = deadEXPMessages;
} else {
    goldMessagesToUse = aliveEXPMessages;
}

const resultsString = `${goldMessagesToUse[goldStatus]}. ${hpMessages[hpStatus]}`;

const button = document.createElement('button');
button.textContent = 'Try Again';

button.addEventListener('click', () => {
    window.location = '../index.html';
});

const section = document.querySelector('section');
const pTag = document.querySelector('p');

pTag.textContent = 'You completed Part 1. ' + resultsString;

section.append(pTag);
section.append(button);

