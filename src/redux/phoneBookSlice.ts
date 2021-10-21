import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../redux/store';

export type PhoneBook = {
  fname: string;
  lname: string;
  number: string;
}

interface PhoneBookState {
  list: Array<PhoneBook>
}

export const initialState: PhoneBookState = {
  list: []
}

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    add: (state, { payload }: { payload: PhoneBook }) => {
      state.list.push(payload)
    }
  }
})

export const { add } = phoneBookSlice.actions;

export const allPhoneBooks = (state: RootState) => state.phoneBook.list;

export default phoneBookSlice.reducer;