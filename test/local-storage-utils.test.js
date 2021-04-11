// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getUser, setUser, updateUserGivenChoice } from '../local-storage-utils.js';

const test = QUnit.test;

test('should get the user from local storage', (expect) => {
    const user = {
        hp: 100,
        gold: 0,
        name: 'David',
        class: 'Ranger',
        completed: {}
    };

    localStorage.setItem('USER', JSON.stringify(user));
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getUser();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, user);
});

test('should set the user into local storage', (expect) => {
    const user = {
        hp: 100,
        gold: 0,
        name: 'David',
        class: 'Ranger',
        completed: {}
    };

  
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    setUser(user);

    const actual = JSON.parse(localStorage.getItem('USER'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, user);
});

test('should update user based on their choice', (expect) => {
    const user = {
        hp: 100,
        gold: 100,
        name: 'David',
        class: 'Ranger',
        completed: {}
    };

    localStorage.setItem('USER', JSON.stringify(user));

    const questId = 'dragon';

    const choice = {
        hp: 10,
        gold: -30
    };

    const expected = {
        hp: 110,
        gold: 70,
        name: 'David',
        class: 'Ranger',
        completed: {
            dragon : true
        }
    };

  
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    updateUserGivenChoice(questId, choice);

    const actual = JSON.parse(localStorage.getItem('USER'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
