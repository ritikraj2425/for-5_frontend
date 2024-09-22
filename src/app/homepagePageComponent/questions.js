'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
function Questions() {

    const router = useRouter()
    const [questionData, setQuestionData] = useState([]);
    const [searchData,setSearchData] = useState('');

    useEffect(() => {
        fetch('https://for5-backend-quiz.vercel.app/api/questions').then((response) => {
            return response.json();
        }).then((data) => {
            setQuestionData(data);
        });
    }, [])





    return (
        <>
        
                <div className="ml-4 md:ml-12 mt-2 flex flex-col md:flex-row items-start md:items-center">
                    <div className="mt-3 w-full md:w-auto">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input
                                type="text"
                                onChange={(e)=>{
                                    setSearchData(e.target.value)
                                }}  
                                placeholder="search questions"
                                className="rounded-sm pl-10 p-1 w-full md:w-[40rem] sm:w-[30rem] h-[2rem] md:h-[3rem] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex mt-3 ml-0 md:ml-7 w-full md:w-auto cursor-pointer justify-center md:justify-start">
                        <div className="bg-[#2CBB5D] rounded-full h-[3rem] w-[3rem]"></div>
                        <h1 className="text-[#2CBB5D] text-xl md:text-2xl font-bold mt-2 ml-2">Pick Random</h1>
                    </div>
                </div>





                <div className="md:flex-row flex-col mt-10 ml-4 md:ml-12 ">
                    <button className="rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mr-[0.5rem] mt-[0.5rem]">All</button>
                    <button className="rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mr-[0.5rem] mt-[0.5rem]">Mathematics
                    </button>
                    <button className="rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mr-[0.5rem] mt-[0.5rem]">Physics</button>
                    <button className="rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mr-[0.5rem] mt-[0.5rem]">Chemistry</button>
                    <button className="rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mt-[0.5rem]">PYQs</button>
                </div>

                <div className="md:ml-12 ml-4 overflow-y-auto max-h-[calc(100vh-8rem)]">
                    <table className="w-full border-collapse mt-16">
                        <thead>
                            <tr className="text-white">
                                <th className="p-3 text-left border-b-2">Title</th>
                                <th className="p-3 text-left border-b-2">

                                    <select id="difficulty" className="bg-[#1B1B1B] cursor-pointer focus:outline-none">
                                        <option value="all">Difficulty</option>
                                        <option value="Easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </th>
                                <th className="p-3 text-left border-b-2">
                                <select id="status" className="bg-[#1B1B1B] cursor-pointer focus:outline-none">
                                        <option value="all">Status</option>
                                        <option value="Easy">Solved</option>
                                        <option value="medium">Unsolved</option>
                                        <option value="medium">Attempted</option>
                                    </select>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {questionData ? questionData.map((item,index) => (
                                <>
                                    <tr className="md:h-7 h-4"></tr>
                                    
                                    <tr key={item._id} className="cursor-pointer bg-[#5F5F5F] text-[#E7E7E4] ">

                                        <td className="p-3 mt-4 text-orange-200"> <Link href={`/Pages/questionPage/${item._id}`}>{index+1}. {item.questionTitle}</Link></td>
                                        <td className="p-3">{item.difficulty}</td>
                                        <td className="p-3">Unsolved</td>
                                    </tr>
                                    
                                </>

                            )):<div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 border-orange-500"></div>}



                        </tbody>
                    </table>
                </div>



            {/* </div> */}
        </>
    )
}

export default Questions;