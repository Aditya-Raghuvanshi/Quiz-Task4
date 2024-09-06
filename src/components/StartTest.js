import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateNoQuestion } from '../utils/questionSlice';

const StartTest = () => {
    // const [showNext,setShowNext]=useState(false);
    const [count,setCount]=useState(0);
    const [select,setSelect]=useState("-1");
    const [score,setScore]=useState(0);

    const [checkBox1,setCheckBox1]=useState(false);
    const [checkBox2,setCheckBox2]=useState(false);
    const [checkBox3,setCheckBox3]=useState(false);
    const [checkBox4,setCheckBox4]=useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    //console.log(params.id);
    const arr=useSelector(store=>store.question.qArr);
    const qArr=arr.slice(0,params.id);
    dispatch(updateNoQuestion(qArr.length));
    const navigate = useNavigate();
    // select==="-1"?setShowNext(false):setShowNext(true);

    const handleClick=()=>{
        if(qArr[count].correctAns===select)
        {
            setScore(score+1);
        }
        setCount(count+1);
        setCheckBox1(false);
        setCheckBox2(false);
        setCheckBox3(false);
        setCheckBox4(false);
    }
    const handleClickFinish=()=>{
        //console.log(qArr[count].correctAns + select);
        
        if(qArr[count].correctAns===select)
        {
            setScore(score+1);
            const temp=Number(score)+Number(1);
            navigate("/evaluate/"+temp);
        }
        else{
            setCount(count+1);
            console.log(score);
            navigate("/evaluate/"+score);
        }
    }
  return (
    <div>
        {
            <div className="flex flex-col h-fit w-1/2 mx-auto mt-20 bg-green-200 rounded-xl p-4">
                {/* <Timer time={params.id}/> */}
                <p className='text-black text-left m-2'>Question{count+1} :- {qArr[count].question}</p>
                <button className=' border-2 border-black rounded-2xl hover:bg-green-400 active:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 p-2 m-2' onClick={()=>{
                    setSelect("1");
                    setCheckBox1(!checkBox1);
                    setCheckBox2(false);
                    setCheckBox3(false);
                    setCheckBox4(false);
                }}><div className='flex'><input type="checkbox" checked={checkBox1} name="" id="" /><p className='text-black text-left mx-2'>Option1 :- {qArr[count].option1}</p></div></button>
                <button className=' border-2 border-black rounded-2xl hover:bg-green-400 active:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 p-2 m-2' onClick={()=>{
                    setSelect("2");
                    setCheckBox2(!checkBox2);
                    setCheckBox1(false);
                    setCheckBox3(false);
                    setCheckBox4(false);
                }}><div className='flex'><input type="checkbox" checked={checkBox2} name="" id="" /><p className='text-black text-left mx-2'>Option2 :- {qArr[count].option2}</p></div></button>
                <button className=' border-2 border-black rounded-2xl hover:bg-green-400 active:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 p-2 m-2' onClick={()=>{
                    setSelect("3");
                    setCheckBox3(!checkBox3);
                    setCheckBox1(false);
                    setCheckBox2(false);
                    setCheckBox4(false);
                }}><div className='flex'><input type="checkbox" checked={checkBox3} name="" id="" /><p className='text-black text-left mx-2'>Option3 :- {qArr[count].option3}</p></div></button>
                <button className=' border-2 border-black rounded-2xl hover:bg-green-400 active:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 p-2 m-2' onClick={()=>{
                    setSelect("4");
                    setCheckBox4(!checkBox4);
                    setCheckBox1(false);
                    setCheckBox2(false);
                    setCheckBox3(false);
                }}><div className='flex'><input type="checkbox" checked={checkBox4} name="" id="" /><p className='text-black text-left mx-2'>Option4 :- {qArr[count].option4}</p></div></button>
                <div className="flex">
                    {count>0?<button type="button" className="focus:outline-none text-black hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-500 border-2 border-black w-1/2" onClick={()=>setCount(count-1)}>prev</button>:<div></div>}
                    {count<qArr.length-1?<button type="button" className="focus:outline-none text-black hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-500 border-2 border-black w-1/2" onClick={handleClick}>Next</button>
                    :<button type="button" className="focus:outline-none text-black hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-500 border-2 border-black w-1/2" onClick={handleClickFinish}>Finish</button>}
                </div>
            </div>
        }
    </div>
  )
}

export default StartTest
