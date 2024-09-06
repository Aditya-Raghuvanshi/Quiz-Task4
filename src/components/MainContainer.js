import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const MainContainer = () => {
    const length=useSelector(store=>store.question.qArr.length);
    const navigate=useNavigate();
    
    const handleClick=()=>{
        const temp=prompt("Please how number of question you want out of "+length);
        console.log(temp);
        const path="/starttest/"+temp;
        navigate(path);
    }
  return (
    <div className=''>
      <div className='h-1/2 w-1/4 mx-auto flex flex-col my-44 bg-green-200 rounded-lg text-black'>
        <Link to={"/createquiz"}><button className='p-6  hover:text-4xl my-2'>
            Add Questions
        </button>
        </Link>
        <button className='p-6 hover:text-4xl my-2 ' onClick={handleClick}>
            Start Quiz
        </button>
      </div>
    </div>
  )
}

export default MainContainer
