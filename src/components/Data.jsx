import React from 'react'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePaste } from '../feature/pasteSlice';

const Data = (props) => {
  const navigate=useNavigate();
  
  const dispatch=useDispatch();
  const dateString = props.createdAt;
  const date = new Date(dateString);
  const formattedDateTime = format(date, 'MMMM d, yyyy h:mm a');
  function edit(){
    navigate(`/?pasteId=${props.id}`);
  }
  function del(){
    dispatch(deletePaste(props.id));

  }
  function v(){
    navigate(`/view/${props.id}`);
  }
  return (
    <div className='p-6 border rounded max-w-[650px] bg-gray-100 transition-all duration-500 ease-in-out hover:scale-105 shadow-lg'>

      <div className='font-bold text-3xl pb-5 '>
        {props.title}
      </div>
      <div className='pb-5'>
        {props.content.substring(0, 250)}
      </div>
      <div className='flex flex-row gap-4 place-content-evenly'>
        <button className="bg-blue-500 text-white px-7 py-2 rounded hover:bg-blue-600 transition-all duration-500 ease-in-out hover:bg-blue-700 hover:scale-105"
        onClick={()=>edit()}
        >Edit</button>
        <button className="bg-blue-500 text-white px-7 py-2 rounded hover:bg-blue-600 transition-all duration-500 ease-in-out hover:bg-blue-700 hover:scale-105"
        onClick={()=>v()}
        >View</button>
        <button className="bg-blue-500 text-white px-7 py-2 rounded hover:bg-blue-600 transition-all duration-500 ease-in-out hover:bg-blue-700 hover:scale-105"
        onClick={()=>del()}
        >Delete</button>
        <button className="bg-blue-500 text-white px-7 py-2 rounded hover:bg-blue-600 transition-all duration-500 ease-in-out hover:bg-blue-700 hover:scale-105" 
        onClick={props.copy}
        >Copy</button>
        <button className="bg-blue-500 text-white px-7 py-2 rounded hover:bg-blue-600 transition-all duration-500 ease-in-out hover:bg-blue-700 hover:scale-105"
        onClick={props.share}
        >Share</button>
        
      </div>
      <p className='p-5'>{formattedDateTime}</p>
    </div>
  )
}

export default Data
