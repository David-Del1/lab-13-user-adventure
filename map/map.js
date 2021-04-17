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
    console.log(quest);
    const anchorTag = document.createElement('a');
    if (!user.completed['shire'] && quest.id === 'shire') {

        anchorTag.classList.add(`${quest.id}`);

        anchorTag.textContent = quest.title;

        anchorTag.href = `../quest/?id=${quest.id}`;

        
    }
    if (user.completed['shire'] && quest.id === 'bree') {
        anchorTag.classList.add(`${quest.id}`);

        anchorTag.textContent = quest.title;

        anchorTag.href = `../quest/?id=${quest.id}`;
    
    }
    // For next quest after Bree
    if (user.completed['bree'] && quest.id === 'weatherTop') {
        anchorTag.classList.add(`${quest.id}`);

        anchorTag.textContent = quest.title;

        anchorTag.href = `../quest/?id=${quest.id}`;
    
    }

    mapDiv.append(anchorTag);

    

    if (quest.id === 'greenDragonInn' || quest.id === 'bagEnd' || quest.id === 'insideBagEnd' || quest.id === 'ringInBagEnd' || quest.id === 'corrupted' || quest.id === 'destroyQuest') {
        anchorTag.style.display = 'none';
    }


}