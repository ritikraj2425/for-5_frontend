'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from 'react-toastify';
import Link from "next/link";
function Questions() {

    const router = useRouter()
    const [subject, setSubject] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [status, setStatus] = useState('');
    const [searchData, setSearchData] = useState('');
    const [questionData, setQuestionData] = useState([]);
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL



    useEffect(() => {
        if (typeof window !== 'undefined') {
            fetch(`${backend_url}/allquestions?subject=${subject}&search=${searchData}&difficulty=${difficulty}&status=${status}`, {
                method: 'GET',
                headers: {
                    'apikey': process.env.NEXT_PUBLIC_API_KEY,
                    'jwttoken': localStorage.getItem('jwttoken'),
                    'refreshtoken': localStorage.getItem('refreshtoken')
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`${response}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setQuestionData(data);
                })
                .catch((error) => {

                    toast.error('Failed to fetch:', error);
                });
        }
    }, [subject, searchData, difficulty, status]);




    return (
        <>

            <div className="ml-4 md:ml-12 flex flex-col md:flex-row items-start md:items-center">
                <div className="mt-3 w-full md:w-auto">
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            onChange={(e) => {
                                setSearchData(e.target.value)
                            }}
                            placeholder="search questions"
                            className="rounded-sm pl-10 p-1 w-full md:w-[40rem] sm:w-[30rem] h-[2rem] md:h-[3rem] focus:outline-none"
                        />
                    </div>
                </div>

                {/* <div className="flex mt-3 ml-0 md:ml-7 w-full md:w-auto cursor-pointer justify-center md:justify-start">
                    <div className="bg-[#2CBB5D] rounded-full h-[3rem] w-[3rem]"></div>
                    <h1 className="text-[#2CBB5D] text-xl md:text-2xl font-bold mt-2 ml-2">Pick Random</h1>
                </div> */}
            </div>





            <div className="md:flex-row flex-col mt-10 ml-4 md:ml-12 ">
                <button className={`rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mr-[0.5rem] mt-[0.5rem] transition-transform transform hover:scale-105 focus:scale-105 focus:bg-orange-400 hover:bg-[#B0B0B0]`} onClick={() => { setSubject('') }}>All</button>
                <button className={`rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mr-[0.5rem] mt-[0.5rem] transition-transform transform hover:scale-105 focus:scale-105 focus:bg-orange-400 hover:bg-[#B0B0B0]`} onClick={() => { setSubject('Mathematics') }}>Mathematics</button>
                <button className={`rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mr-[0.5rem] mt-[0.5rem] transition-transform transform hover:scale-105 focus:scale-105 focus:bg-orange-400 hover:bg-[#B0B0B0]`} onClick={() => { setSubject('Physics') }}>Physics</button>
                <button className={`rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mr-[0.5rem] mt-[0.5rem] transition-transform transform hover:scale-105 focus:scale-105 focus:bg-orange-400 hover:bg-[#B0B0B0]`} onClick={() => { setSubject('Chemistry') }}>Chemistry</button>
                <button className={`rounded-3xl bg-[#D9D9D9] p-2 w-[8rem] mr-[0.5rem] mt-[0.5rem] transition-transform transform hover:scale-105 focus:scale-105 focus:bg-orange-400 hover:bg-[#B0B0B0]`} onClick={() => { setSubject('') }}>PYQs</button>
            </div>

            <div className="md:ml-12 ml-4 overflow-y-auto max-h-[calc(100vh-8rem)]">
                {questionData.result ?
                    <table className="w-full border-collapse mt-16">
                        <thead>
                            <tr className="text-white">
                                <th className="p-3 text-left border-b-2">Title</th>
                                <th className="p-3 text-left border-b-2">

                                    <select id="difficulty" className="bg-transparent cursor-pointer focus:outline-none"
                                        onChange={(e) => setDifficulty(e.target.value)}>
                                        <option value="">Difficulty(All)</option>
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>

                                </th>
                                <th className="p-3 text-left border-b-2">
                                    <select id="status" className="bg-transparent cursor-pointer focus:outline-none"
                                        onChange={(e) => setStatus(e.target.value)}>
                                        <option value="">Status(All)</option>
                                        <option value="solved">solved</option>
                                        <option value="unsolved">Unsolved</option>
                                        <option value="attempted">Attempted</option>
                                    </select>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {questionData.result.map((item, index) => (
                                <>
                                    <tr key={`${item._id}-empty`} className="md:h-7 h-4"></tr> 
                                    <tr key={item._id} className=" bg-[#c8c3c3] text-gray-900 ">
                                        <td className="p-3 mt-4 text-gray-900 font-semibold cursor-pointer">
                                            <Link href={`/question/${item._id}`}>
                                                {index + 1}. {item.questionTitle}
                                            </Link>
                                        </td>
                                        <td className="p-3">{item.difficulty}</td>
                                        <td className="p-3">Unsolved</td>
                                    </tr>
                                </>
                            ))}
                        </tbody>

                    </table> : <div className="animate-spin rounded-full h-7 w-7 ml-96 mt-32 border-t-2 border-b-2 border-orange-500"></div>}
            </div>




        </>
    )
}

export default Questions;