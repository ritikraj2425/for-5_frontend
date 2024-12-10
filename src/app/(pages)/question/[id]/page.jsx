"use client";
import Questions from "@/app/homepagePageComponent/questions";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { ThemeContext } from "@/app/context/usecontext";



export default function QuestionPage() {
    const [statusDropdown, setStatusDropdown] = useState(false);
    const { id } = useParams();
    const [questionList, setQuestionList] = useState(false);
    const [questionData, setQuestionData] = useState([]);
    const [optionSelected, setOptionSelected] = useState('');
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL

    const { signIn } = useContext(ThemeContext)


    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            fetch(`${backend_url}/allquestions/question/${id}`, {
                method: 'GET',
                headers: {
                    'apikey': process.env.NEXT_PUBLIC_API_KEY,
                    'jwttoken': localStorage.getItem('jwtToken'),
                    'refreshtoken': localStorage.getItem('refreshToken')
                }
            })
                .then((response) => response.json())
                .then((data) => setQuestionData(data.result));
        }
    }, [id]);

    useEffect(() => {
        
            if (!signIn) {
                router.push('/login')
            }
        

    }, [router])

    const handleOptionClick = (index) => {
        let option = String.fromCharCode(65 + index)
        setOptionSelected(prevOption => prevOption === option ? '' : option);

    }



    const handleCheck = async () => {
        if (typeof window !== 'undefined') {
            
            
            const response = await fetch(`${backend_url}/allquestions/check/${id}`, {
                method: 'POST',
                body: JSON.stringify({
                    selected: optionSelected
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': process.env.NEXT_PUBLIC_API_KEY,
                    'jwttoken': localStorage.getItem('jwtToken'),
                    'refreshtoken': localStorage.getItem('refreshToken')
                }
            })

            if (!response.ok) {
                return toast.error('error')
            }
            const data = await response.json();

            if(data['result']){
                toast.success('Correct answer')
            }else{
                toast.error('Wrong Answer')
            }
        }
    }


    const toggleStatusDropDown = () => setStatusDropdown(!statusDropdown);
    const toggleQuestionList = () => setQuestionList(!questionList);

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <div className="bg-orange-700 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <TiThMenu
                            className="text-3xl md:text-4xl cursor-pointer hover:text-gray-200 transition-colors"
                            onClick={toggleQuestionList}
                        />
                        <h1 className="text-2xl md:text-3xl font-bold">Problem List</h1>
                    </div>
                    <div className="relative">
                        <button
                            onClick={toggleStatusDropDown}
                            className="flex items-center space-x-1 text-xl md:text-2xl font-bold hover:text-gray-200 transition-colors"
                        >
                            <span>Status</span>
                            <IoMdArrowDropdown className="text-2xl" />
                        </button>
                        {statusDropdown && (
                            <div className="absolute top-full md:w-40 right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg p-4 z-20">
                                <p className="font-bold">Level- Easy</p>
                                <p className="font-bold">Opened by- 34</p>
                                <p className="font-bold">Solved by- 23</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {questionList &&

                <div
                    className={`h-full ms:w-full text-black ml-h-40% md:overflow-y-auto z-10 absolute mt-3 bg-gray-900 p-5 max-h-[calc(100vh)] overflow-x-auto 
        transform transition-transform duration-1000 ease-in-out ${questionList ? "translate-x-0" : "-translate-x-full"}
    `}
                >
                    <Questions />
                </div>

            }

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-orange-500">Question</h2>
                        <button onClick={() => {
                            handleCheck();
                        }} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                            Check
                        </button>
                    </div>
                    <p className="text-lg">{questionData ? questionData.question : "Loading..."}</p>
                </div>

                {questionData?.options?.length > 0 ? (
                    <div className="space-y-4">
                        {questionData.options.map((option, index) => (
                            <div
                                key={index} onClick={() => {
                                    handleOptionClick(index)
                                }}

                                className={`p-4 rounded-lg shadow-md text-[#ffffff] font-bold cursor-pointer border border-orange-700 transition-transform transform 
                                    ${optionSelected === String.fromCharCode(65 + index) ? 'bg-green-600' : 'bg-gray-800 hover:bg-gray-700'} 
                                    focus:scale-105`}
                            >
                                <p className="text-lg">
                                    <span className="font-bold mr-2 text-orange-500">{index + 1})</span>
                                    {option.option}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                    </div>
                )}
            </div>
        </div>
    );
}