"use client";
import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Questions from "@/app/homepagePageComponent/questions";
import Navbar from '../../../components/navbar'

export default function QuestionPage() {
    const [statusDropdown, setStatusDropdown] = useState(false);
    const { id } = useParams();
    const [questionList, setQuestionList] = useState(false);
    const [questionData, setQuestionData] = useState([]);

    useEffect(() => {
        fetch(`https://quizprojectserver.vercel.app/api/questions/${id}`)
            .then((response) => response.json())
            .then((data) => setQuestionData(data))
            .catch((err) => console.log(err));
    }, [id]);

    const toggleStatusDropDown = () => setStatusDropdown(!statusDropdown);
    const toggleQuestionList = () => setQuestionList(!questionList);

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Navbar />
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
                            <div className="absolute top-full right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg p-4 z-20">
                                <p className="font-bold">Level- Easy</p>
                                <p className="font-bold">Opened by- 544</p>
                                <p className="font-bold">Solved by- 323</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {questionList &&

                <div
                    className={`h-full ms:w-full ml-h-40% md:overflow-y-auto z-10 absolute mt-3 bg-[#1B1B1B] p-5 max-h-[calc(100vh)] overflow-x-auto 
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
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                            Check
                        </button>
                    </div>
                    <p className="text-lg">{questionData ? questionData.question : "Loading..."}</p>
                </div>

                {questionData?.options?.length > 0 ? (
                    <div className="space-y-4">
                        {questionData.options.map((option, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors cursor-pointer border border-orange-700"
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