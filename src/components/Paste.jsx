import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Data from './Data';
import toast from 'react-hot-toast';

const Paste = () => {
  const [search, setSearch] = useState('');
  const pastes = useSelector(state => state.paste.pastes);
  const filterSearch = pastes.filter((paste) => paste.title.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div>
      <div className='flex flex-col justify-center items-center pt-16'>
      
        <div className='mt-5 text-2xl font-bold text-600 p-2 '>
          List of Pastes
          
          </div>
        <input
          className='border-2 border-indigo-600 p-3 rounded-2xl mt-7 mr-5 w-[65%] pl-5 mb-10 transition-all duration-300 transform hover:w-[100%]'
          type='search'
          placeholder='Search Pastes'
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>
      <div className='flex flex-col gap-5 mt-5'>
        
      {filterSearch.length > 0 ? 
      (filterSearch.map((paste)=>
      <Data
      key={paste?._id}
      id={paste?._id}
      title={paste.title}
      content={paste.content}
      createdAt={paste.createdAt}
      copy={() => {
        navigator.clipboard.writeText(paste?.content);
        toast.success("Copied to Clipboard", {
          position: 'top-right',
      });
      }}
      />))
      :
          <div>
            No Pastes Found
          </div>}
      </div>
    </div>
  )
}

export default Paste
