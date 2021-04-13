import quests from './data.js';

const USER = 'USER';

export function getUser() {
    const user = localStorage.getItem(USER);

    if (!user) return {};

    return JSON.parse(user);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function updateUserGivenChoice(questId, choice) {
    // Get user
    const user = getUser();
    //we need to change hp
    user.hp += choice.hp;

    //we need to change gold
    user.gold += choice.gold;
    user.exp += choice.exp;

    //we need to change quest completed
    // we don't know ahead of time which quest is completed
    // that's why we use dynamic bracket notation
    user.completed[questId] = true;

    setUser(user);

}

export function areAllQuestsCompleted() {
    const user = getUser();
    // if everything in the quests array is accounted for in the user completed object, we are done!

    //if any item is the quest data is not ALSO in my character's completed object, (!allQuestsComplete)
    for (let quest of quests)
    // if the user hasn't completed this quest, break out of the function 
        if (!user.completed[quest.id]) { 
            return false;
        }

    return true;

    
}