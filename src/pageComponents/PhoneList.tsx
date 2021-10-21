import React, { useMemo, useState } from 'react';
import { useAppSelector } from '../hooks/reduxHooks';
import { allPhoneBooks, PhoneBook } from '../redux/phoneBookSlice';
import { debounce } from '../util/helper';

const mockUsers = [
  {
    fname: 'FNAME',
    lname: 'LNAME',
    number: '3152772536'
  },
  {
    fname: 'FNAME',
    lname: 'LNAME',
    number: '3152772536'
  },
  {
    fname: 'FNAME',
    lname: 'LNAME',
    number: '3152772536'
  },
  {
    fname: 'FNAME',
    lname: 'LNAME',
    number: '3152772536'
  },
  {
    fname: 'FNAME',
    lname: 'LNAME',
    number: '3152772536'
  },
]

const PhoneList: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const users = useAppSelector(allPhoneBooks)

  const filteredUsers = useMemo<Array<PhoneBook>>(() => {
    return users.filter((user) => `${user.fname} ${user.lname}`.toLowerCase().includes(search.toLowerCase()))
  }, [search, users]);

  const handleSearch = debounce((v: string) => {
    setSearch(v);
  }, 500)

  return (
    <div className="flex flex-col text-left ml-10">
      <input 
        className="w-full border border-solid border-gray-300 p-2 mb-3 focus:outline-none" 
        placeholder="search user..."
        onChange={(e) => handleSearch(e.currentTarget.value)}
        data-testid="search-input"
      />

      {
        filteredUsers.map((user: PhoneBook) => (
          <div className="flex mt-3 justify-between py-3 px-5 shadow-sm" data-testid="phone-list">
            <div>
            {`${user.fname} ${user.lname}`}
            </div>
             {user.number}
          </div>
        ))
      }
    </div>
  )
}

export default PhoneList;