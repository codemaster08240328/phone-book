import React, { useCallback, useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { add } from '../redux/phoneBookSlice';

const NewUser: React.FC = () => {
  const [fname, setfname] = useState<string>('');
  const [lname, setlname] = useState<string>('');
  const [number, setnumber] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    switch (e.currentTarget.name) {
      case 'fName':
        setfname(value);
        break;
      case 'lName':
        setlname(value);
        break;
      case 'number':
        setnumber(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = useCallback(() => {
    dispatch(add({
      fname,
      lname,
      number
    }));
  }, [dispatch, fname, lname, number]);

  return (
    <div className="flex flex-col text-left">
      <label htmlFor="fName"> First Name: </label>
      <input
        type="text"
        name="fName"
        value={fname}
        className="w-full border border-solid border-gray-300 p-2 focus:outline-none"
        onChange={handleChange}  
        data-testid="fname-input"
      />
      <label htmlFor="lName" className="mt-3"> Last Name: </label>
      <input
        type="text"
        name="lName"
        value={lname}
        className="w-full border border-solid border-gray-300 p-2 focus:outline-none"
        onChange={handleChange}
        data-testid="lname-input"
      />
      <label htmlFor="number" className="mt-3"> Phone Number: </label>
      <input
        type="text"
        name="number"
        value={number}
        className="w-full border border-solid border-gray-300 p-2 focus:outline-none"
        onChange={handleChange}
        data-testid="number-input"
      />
      
      <button
        className="text-white bg-green-500 p-3 mt-3"
        onClick={handleSubmit}
        disabled={!fname || !lname || !number}
        data-testid="add-button"
      >
        Add Number
      </button>
    </div>
  )
}

export default NewUser