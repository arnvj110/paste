import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPaste = () => {
  const pastes=useSelector(state=>state.paste.pastes);
  const params=useParams();
  const f = pastes.filter((e) => e._id === params.id);
  return (
    <div className='mt-16'>
      <h1 className='p-10 '>{f.length>0?f[0].title:""}</h1>
      <textarea
          className='flex flex-row bg-black bg-opacity-90 text-white resize-none font-mono rounded-2xl min-w-[700px] p-5 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={f.length>0?f[0].content:"No Paste Found..."}
          placeholder='Enter code here...'
          readOnly
          rows={20}
        />
    </div>
  )
}

export default ViewPaste
