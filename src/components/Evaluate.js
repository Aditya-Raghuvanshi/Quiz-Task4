import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

const Evaluate = () => {
    const params = useParams();
    const noQ=useSelector(store=>store.question.noQ);
    console.log(noQ);
    const navigate=useNavigate();
    
    const score=params.id;
  return (
    <>
    <div className='h-fit my-20 bg-emerald-700 w-1/2 mx-auto py-4 text-white'>
        <p>Congratulations 🥳
            <br />Your Score is :- </p>
        <p>
            {score}/{noQ} is the Score.
        </p>
    </div>
    <button type="button" onClick={()=>navigate("/")} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Home</button>
    </>
  )
}

export default Evaluate
