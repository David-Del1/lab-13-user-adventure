import { getUser } from './local-storage-utils.js';

export function renderHeader() {
    const header = document.querySelector('header');

    const user = getUser();
    const div = document.createElement('div');

    div.textContent = `Name: ${user.name}, class: ${user.class}, HP: ${user.hp}, Gold: ${user.gold}`;

    header.append(div);
}