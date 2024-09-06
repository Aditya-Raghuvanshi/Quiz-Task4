import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const DisplayQuestions = () => {
    const question = useSelector(store=>store.question.qArr);
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        {console.log(question)}
      {
        question.map((item,index)=>{
            return (
            <div key={index} className='flex flex-col mx-10 my-6'>
                <div className="flex mx-auto">
                    <p>Q{index+1}</p>    
                    <p className='mx-2'>{item.question}</p>
                </div>
                <div className="flex flex-col">
                    <p>Option 1 :- {item.option1}</p>
                    <p>Option 2 :- {item.option2}</p>
                    <p>Option 3 :- {item.option3}</p>
                    <p>Option 4 :- {item.option4}</p>
                </div>
            </div>
            )
        })
      }
    </div>
  )
}

export default DisplayQuestions
