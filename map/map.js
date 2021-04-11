import quests from '../data.js';
import { getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';
import { areAllQuestsCompleted } from '../local-storage-utils.js';

renderHeader();

//we need to check our end game conditions
const user = getUser();
const userIsDead = user.hp <= 0;



if (userIsDead || areAllQuestsCompleted()) {
    window.location = '../results';
}

const mapDiv = document.getElementById('map');

for (let quest of quests) {
    const anchorTag = document.createElement('a');

    anchorTag.textContent = quest.title;

    anchorTag.href = `../quest/?id=${quest.id}`;

    mapDiv.append(anchorTag);
}