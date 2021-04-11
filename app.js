import { setUser } from "./local-storage-utils.js";

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const name = data.get('name');
    const userClass = data.get('class');

    const user = {
        hp: 100,
        gold: 0,
        name: name,
        class: userClass,
        completed: {}
    };

    setUser(user);

    window.location = './map';
});