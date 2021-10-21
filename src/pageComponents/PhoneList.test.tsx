import { render, screen, fireEvent } from '../util/test-util';
import PhoneList from './PhoneList';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootReducer';

test('renders PhoneList component correctly', () => {
  const preloadedState = {
    phoneBook: {
      list: [
        {
          fname: 'fname',
          lname: 'lname',
          number: 'number'
        }
      ]
  }}

  render(<PhoneList />, {
    preloadedState,
    store: configureStore({
      reducer: rootReducer,
      preloadedState
    })
  });

  const SearchInputElem = screen.getByTestId('search-input');
  const phoneLists = screen.getByTestId('phone-list');
  fireEvent.change(SearchInputElem, { target: {value: 'search'} });

  expect(SearchInputElem).toBeInTheDocument();
  expect(phoneLists).toBeInTheDocument();
});