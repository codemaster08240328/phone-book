import { render, screen, fireEvent } from '../util/test-util';
import NewUser from './NewUser';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootReducer';

test('renders NewUser component correctly', () => {
  render(<NewUser />, {
    preloadedState: undefined,
    store: configureStore({
      reducer: rootReducer,
      preloadedState: undefined
    })
  });

  const fNameLabelElem = screen.getByText(/First Name:/i);
  const AddButtonElem = screen.getByTestId('add-button');
  const FNameElem = screen.getByTestId('fname-input');
  const LNameElem = screen.getByTestId('lname-input');
  const NumberElem = screen.getByTestId('number-input');

  fireEvent.change(FNameElem, { target: { value: 'fName' }});
  fireEvent.change(LNameElem, { target: { value: 'lName' }});
  fireEvent.change(NumberElem, { target: { value: '000000' }});
  fireEvent.click(AddButtonElem)

  expect(fNameLabelElem).toBeInTheDocument();
  expect(AddButtonElem).toBeInTheDocument();
  expect(FNameElem).toBeInTheDocument();
  expect(LNameElem).toBeInTheDocument();
  expect(NumberElem).toBeInTheDocument();
});
