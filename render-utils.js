import { getUser } from './local-storage-utils.js';

export function renderHeader() {
    const header = document.querySelector('header');

    const user = getUser();
    const div = document.createElement('div');

    div.textContent = `Name: ${user.name}, Class: ${user.class}, HP: ${user.hp}, EXP: ${user.exp}`;

    header.append(div);
}