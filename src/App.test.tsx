import { render, screen } from './util/test-util';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/rootReducer';

test('renders App successfully', () => {
  render(<App />, {
    preloadedState: undefined,
    store: configureStore({
      reducer: rootReducer,
      preloadedState: undefined
    })
  });

  const titleElement = screen.getByText(/Fancy Phone Book/i);
  
  expect(titleElement).toBeInTheDocument();
});
