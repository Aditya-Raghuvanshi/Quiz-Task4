import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pushQuestion } from '../utils/questionSlice';
import { Link, useNavigate } from 'react-router-dom';

const CreateQuiz = () => {
    const[question,setQuestion] = useState("");
    const [option1,setOption1] = useState("");
    const [option2,setOption2] = useState("");
    const [option3,setOption3] = useState("");
    const [option4,setOption4] = useState("");
    const [correctAns,setCorrectAns] = useState("");
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const handleClick=()=>{
        if(question==="" || option1==="" || option2==="" || option3==="" || option4==="" || correctAns==="")
        {
            alert("write full question");
        }
        else{
            dispatch(pushQuestion({question,option1,option2,option3,option4,correctAns}));
            setQuestion("");
            setOption1("");
            setOption2("");
            setOption3("");
            setOption4("");
            setCorrectAns("");
            alert("question added successfully");
        }
    }
  return (
    <div>
        <div className="flex flex-col mt-14 mx-auto w-3/4 md:w-3/4">
        <button type="button" onClick={()=>navigate(-1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-1/2 mt-2">Go Back</button>
        <Link to={"./seequestions"} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-1/2"><button type="button" >See All Questions</button></Link>
            <input type="text" value={question} className='border-2 border-black p-2' onChange={(e)=>setQuestion(e.target.value)} placeholder='type your question here...'/>
            <input type="text" value={option1} onChange={(e)=>setOption1(e.target.value)} placeholder='type your option 1 here .' className='border-2 border-black p-2 w-1/2 mt-2'/>
            <input type="text" value={option2} onChange={(e)=>setOption2(e.target.value)} placeholder='type your option 2 here .' className='border-2 border-black p-2 w-1/2 mt-2'/>
            <input type="text" value={option3} onChange={(e)=>setOption3(e.target.value)} placeholder='type your option 3 here .' className='border-2 border-black p-2 w-1/2 mt-2'/>
            <input type="text" value={option4} onChange={(e)=>setOption4(e.target.value)} placeholder='type your option 4 here .' className='border-2 border-black p-2 w-1/2 mt-2'/>
            <input type="text" value={correctAns} onChange={(e)=>setCorrectAns(e.target.value)} placeholder='write the correct option number (1 or 2 or 3 or 4).' className='border-2 border-black p-2 w-1/2 mt-2'/>
            <button type="button" onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-1/2 mt-2">ADD</button>
        </div>
    </div>
  )
}

export default CreateQuiz
