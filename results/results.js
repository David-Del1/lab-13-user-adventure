import { getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';
import { aliveGoldMessages, deadGoldMessages, hpMessages } from './messages.js';

renderHeader();

const user = getUser();

const userIsDead = user.hp <= 0;

let goldStatus;

if (user.gold < 20) {
    goldStatus = 'poor';
} else if (user.gold > 20 && user.gold < 50) {
    goldStatus = 'modest';
} else {
    goldStatus = 'rich';
}

let hpStatus;

if (user.hp === 0) {
    hpStatus = 'dead';
} else if (user.hp > 20 && user.hp < 50) {
    hpStatus = 'frail';
} else {
    hpStatus = 'healthy';
}

let goldMessagesToUse;

if (userIsDead) {
    goldMessagesToUse = deadGoldMessages;
} else {
    goldMessagesToUse = aliveGoldMessages;
}

const resultsString = `${goldMessagesToUse[goldStatus]}. ${hpMessages[hpStatus]}`;

const section = document.querySelector('section');

section.textContent = resultsString;

