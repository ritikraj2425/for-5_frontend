"use client";
import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Questions from "@/app/homepagePageComponent/questions";

export default function QuestionPage() {
    const [statusDropdown, setStatusDropdown] = useState(false);
    const { id } = useParams();
    console.log(id);

    const toggleStatusDropDown = () => {
        setStatusDropdown(!statusDropdown);
    }

    const [questionList, setQuestionList] = useState(false);
    const [questionData, setQuestionData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/questions/${id}`).then((response) => {
            return response.json();
        }).then((data) => {
            setQuestionData(data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    console.log(questionData.options);

    const toggleQuestionList = () => {
        setQuestionList(!questionList);
    }

    return (
        <div className="bg-[#1B1B1B] min-h-screen">
            <div className="h-[3rem] bg-gradient-to-r from-[#1B1B1B] to-[#E47406] w-full">
                <Link href="/Pages/homepage"><button className="text-white">HomePage</button></Link>
            </div>

            <div className="h-[3.5rem] bg-[#626262] flex ">
                <div className="p-2">
                    <TiThMenu className="md:text-4xl relative text-3xl cursor-pointer  text-[#f3efef]" onClick={toggleQuestionList} />
                    {questionList &&

                        <div
                            className={`h-full ml-h-40% overflow-y-auto z-10 absolute mt-3 bg-[#1B1B1B] p-5 max-h-[calc(100vh)] overflow-x-auto 
                                transform transition-transform duration-1000 ease-in-out ${questionList ? "translate-x-0" : "-translate-x-full"}
                            `}
                        >
                            <Questions />
                        </div>

                    }
                </div>
                <div className="md:text-3xl text-2xl font-bold mt-2 text-[#f3efef]">
                    Problem List
                </div>
                <div className="md:text-3xl text-2xl font-bold mt-2 relative text-[#f3efef] flex ml-auto mr-4 cursor-pointer" onClick={toggleStatusDropDown}>
                    Status <IoMdArrowDropdown className="mt-1.5" />
                </div>

                {statusDropdown && <div className="absolute mt-14 mr-5 left-auto right-0 bg-white rounded-md shadow-lg p-4   z-10">
                    <p className="font-bold">Level- Easy</p>
                    <p className="font-bold">Opened by- 544</p>
                    <p className="font-bold">Solved by- 323</p>
                </div>}
            </div>


            <div class="max-w-6xl mx-auto w-full bg-[#5F5F5F] p-1 mt-3 flex rounded-md">
                <button className=" ml-auto right-0 bg-green-400 p-3 rounded-xl">Check</button>
            </div>

            <div class="max-w-6xl mx-auto w-full text-white bg-[#5F5F5F] p-4 rounded-md mt-3 flex ">
                Q) {questionData.question}
            </div>

            <div className="mt-[5rem]">
                {questionData?.options?.length > 0 ? (
                    questionData.options.map((option, index) => (
                        <div key={index} className="max-w-4xl mx-auto rounded-md cursor-pointer text-white w-full bg-[#5F5F5F] p-3 mt-2 flex ">
                            {index + 1}) {option.option}
                        </div>
                    ))
                ) : (
                    <p>Loading options or no options available</p>
                )}


            </div>




        </div>
    )

}