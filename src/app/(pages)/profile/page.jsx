'use client'
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { BookOpen, Target, Calendar, Brain, FileText, Award } from 'lucide-react'
import { ThemeContext } from "@/app/context/usecontext"
import Modal from "@/app/components/modal"
import UpdateProfile from './updateProfile'

const mockUserData = {
    title: "JEE Aspirant",
    bio: "Passionate about Physics and Mathematics. Aiming for IIT Bombay!",
    totalProblems: 3,
    physicsSolved: 12,
    chemSolved: 10,
    mathSolved: 9,
    ranking: 40,
    testsGiven: 0,
    streak: [
        { month: 'May', hours: 120 },
        { month: 'June', hours: 140 },
        { month: 'July', hours: 100 },
        { month: 'Aug', hours: 160 },
        { month: 'Sept', hours: 150 },
        { month: 'Oct', hours: 10 },
    ],
    recentTests: [
        { name: "JEE Main Mock Test 1", score: "220/300", percentile: 98.5 },
        { name: "FIITJEE AITS 3", score: "185/300", percentile: 95.2 },
        { name: "Resonance Test Series 2", score: "250/300", percentile: 99.1 },
    ],
    strongTopics: ["Mechanics", "Organic Chemistry", "Calculus", "Electrostatics", "Thermodynamics"]
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];



export default function Profile() {
    const [userData, setUserData] = useState(mockUserData);
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL
    const [apiData, setApiData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { signIn } = useContext(ThemeContext);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    
      

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const jwt = localStorage.getItem('jwtToken');
            const refresh = localStorage.getItem('refreshToken');
            fetch(`${backend_url}/user/details`, {
                method: 'GET',
                headers: {
                    'apikey': process.env.NEXT_PUBLIC_API_KEY,
                    'jwttoken': jwt,
                    'refreshtoken': refresh
                }
            })
                .then((response) => response.json())
                .then((data) => setApiData(data));
        }
    }, [signIn])

    if (!signIn) {
        return "unauthorized"
    }

    if (!hydrated) {
        return null;
    }



    const pieData = [
        { name: 'Physics', value: 1 },
        { name: 'Chemistry', value: 1 },
        { name: 'Mathematics', value: 1 }
    ];


    return (
        <div className="bg-gray-900 min-h-screen text-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1">
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
                            <div className="flex flex-col items-center">
                                <Image src="/profileimage.png" alt="User" width={150} height={150} className="rounded-full border-4 border-blue-500" />
                                <h1 className="text-3xl font-bold mt-4">{apiData?.name || "Loading..."}</h1>
                                <h2 className="text-xl text-gray-400">@{apiData?.username || "Loading..."}</h2>
                                <p className="text-blue-400 font-semibold mt-2">{userData.title}</p>
                                <p className="text-center mt-4 text-gray-300">{userData.bio}</p>
                                <button onClick={() => setIsModalOpen(true)} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1">
                                    Edit Profile
                                </button>
                                <Modal title="Edit Profile" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                                    <UpdateProfile/>
                                </Modal>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 flex items-center"><Brain className="mr-2" /> Strong Topics</h2>
                            <div className="flex flex-wrap gap-2">
                                {userData.strongTopics.map((topic, index) => (
                                    <span key={index} className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="lg:col-span-2">
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
                            <h2 className="text-2xl font-bold mb-4 flex items-center"><Award className="mr-2" /> JEE Preparation Statistics</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <StatCard title="Total Problems" value={userData.totalProblems} icon={<Target className="h-6 w-6" />} />
                                <StatCard title="All India Rank" value={`#${userData.ranking}`} icon={<Award className="h-6 w-6" />} />
                                <StatCard title="Tests Given" value={userData.testsGiven} icon={<FileText className="h-6 w-6" />} />
                                <StatCard title="Study Streak" value={`${userData.streak[userData.streak.length - 1].hours} hrs`} icon={<Calendar className="h-6 w-6" />} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Subject-wise Progress</h3>
                                    <PieChart width={200} height={200}>
                                        <Pie
                                            data={pieData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Monthly Study Hours</h3>
                                    <ResponsiveContainer width="100%" height={200}>
                                        <BarChart data={userData.streak}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="hours" fill="#8884d8" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 flex items-center"><BookOpen className="mr-2" /> Recent Test Performance</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-700">
                                            <th className="py-2">Test Name</th>
                                            <th className="py-2">Score</th>
                                            <th className="py-2">Percentile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userData.recentTests.map((test, index) => (
                                            <tr key={index} className="border-b border-gray-700">
                                                <td className="py-2">{test.name}</td>
                                                <td className="py-2">{test.score}</td>
                                                <td className="py-2">
                                                    <span className={`px-2 py-1 rounded text-xs ${test.percentile >= 99 ? 'bg-green-800 text-green-200' :
                                                        test.percentile >= 95 ? 'bg-blue-800 text-blue-200' :
                                                            'bg-yellow-800 text-yellow-200'
                                                        }`}>
                                                        {test.percentile}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StatCard({ title, value, icon }) {
    return (
        <div className="bg-gray-700 rounded-lg p-4 flex items-center">
            <div className="mr-4 text-blue-400">
                {icon}
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-400">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    )
}