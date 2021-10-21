import { debounce } from './helper';

describe('debounce', () => {

  let func: jest.Mock;
  let debouncedFunc: Function;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 200);
  });

  test('execute just once', () => {
    jest.useFakeTimers();

    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});

// test('debounce works correctly', () => {
//   const func = jest.fn();
//   const debouncedFunc = debounce(func, 1000);

//   debouncedFunc('');
//   expect(func).toHaveBeenCalledTimes(0);

//   jest.advanceTimersByTime(500);

//   debouncedFunc('');
//   jest.runAllTimers();
//   expect(func).toHaveBeenCalledTimes(1);
// });