import reducer, { add, initialState } from './phoneBookSlice';

describe('redux', () => {
  test('should return initialState', () => {
    expect(reducer(undefined, {type: ''})).toEqual(initialState);
  });

  test('add action works', () => {
    const prevState = {
      list: [
        {
          fname: 'fname',
          lname: 'lname',
          number: 'number'
        }
      ]
    };

    expect(reducer(prevState, add({fname: 'fname1', lname: 'lname1', number: 'number1'}))).toEqual({
      list: [
        {
          fname: 'fname',
          lname: 'lname',
          number: 'number'
        },
        {
          fname: 'fname1',
          lname: 'lname1',
          number: 'number1'
        },
      ]
    });
  })
})