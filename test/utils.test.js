// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils.js';

const test = QUnit.test;

test('should find the right item in an array', (expect) => {
    const arr = [
        { id: 'spot', type: 'dog' },
        { id: 'jumper', type: 'frog' }
    ];
    //Arrange
    // Set up your arguments and expectations
    const expected = { id: 'spot', type: 'dog' };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(arr, 'spot');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
