import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { insertName } from '../utils/userSlice';
import MainContainer from './MainContainer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name,setName] = useState("");
    const dispatch = useDispatch();
    const [enterIntoTest,setEnterIntoTest] = useState(false);
    const navigate = useNavigate();

    const handleClick=()=>{
        if(name===""){
            alert("enter name");
            navigate("/");
        }
        else{
            dispatch(insertName(name));
            setEnterIntoTest(true);
            navigate("/maincontainer")
        }
    }

  return (enterIntoTest?<MainContainer/>:
    <div className='flex'>
      {/* https://t3.ftcdn.net/jpg/02/48/13/84/360_F_248138476_vRdrN0FuKMMOPViRojcK41IqCiFn4J1q.jpg */}
      {/* <img className='h-full w-full' src="https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg" alt="bg-img" />  */}
      <form onSubmit={(e)=> e.preventDefault()} className='absolute bg-emerald-200 rounded-md w-3/12 mx-auto my-10 p-12 right-0 left-0 bg-opacity-85'>
            <h1 className='text-black text-3xl p-2 my-4 font-bold '>SIGN IN</h1>
            <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Name' className='p-2 my-4 w-full bg-white '/>
            <button onClick={handleClick} className='bg-blue-500 p-3 my-4 w-full hover:bg-blue-6700 rounded-md transition duration-200'>SIGN IN</button>
        </form>
    </div>
  )
}

export default Login
