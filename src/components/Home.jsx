import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createMyPaste, reset } from '../feature/pasteSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Home = () => {
  const navigator = useNavigate();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [button, setButton] = useState('Create My Paste');
  const [searchParams, setSearchParams] = useSearchParams();
  // const pastes = useSelector(state => state.paste.pastes);

  const pasteId = searchParams.get("pasteId");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const existingPaste = pastes.find(paste => paste._id === pasteId);
      if (!existingPaste) {
        navigator('/');
      }
      else{
        setButton("Update my Paste");
        setTitle(existingPaste.title);
        setValue(existingPaste.content);
      }

    }

    else {

      setTitle('');
      setValue('');
    }
  }, [pasteId])

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if(paste.title=='' || paste.content==''){
      toast.error("Please fill in all fields",{
        position:'top-right'
      });
    }
    else{
      dispatch(createMyPaste(paste));
    }
    setTitle('');
    setValue('');
    setSearchParams({});
  }
  function resetAll() {
    dispatch(reset());
  }
  return (
    <div className='pt-20'>
      <div className='flex flex-row gap-7 place-content-between'>
        <input
          className='border-2 border-indigo-600 p-3 rounded-2xl mt-7 mr-5 w-[50%] pl-5 transition-all duration-300 transform hover:w-[60%]'
          type='text'
          placeholder='Enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className='border-1 border-red-600 p-3 rounded-2xl mt-7 mr-5'
          onClick={createPaste}
        >{button}
        </button>
      </div>
      <div className='mt-10'>
        <textarea
          className='flex flex-row bg-black bg-opacity-90 text-white resize-none font-mono rounded-2xl min-w-[700px] p-5 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={value}
          placeholder='Enter code here...'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
      <button className='border-1 border-red-600 p-3 rounded-2xl mt-7 mr-5'
        onClick={resetAll}>Reset</button>
    </div>

  )
}

export default Home
