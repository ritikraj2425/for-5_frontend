import React from "react";
import Link from "next/link";
import { Calendar, Clock, ChevronRight, Search } from "lucide-react";

const ContestCard = ({ title, startTime, endTime, participants, difficulty }) => (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-[300px] flex-shrink-0 snap-start hover:bg-gray-700 transition-colors duration-200">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <div className="space-y-2 mb-4 text-gray-300">
            <div className="flex items-center space-x-2">
                <Calendar size={18} className="text-white" />
                <p>Start: {startTime}</p>
            </div>
            <div className="flex items-center space-x-2">
                <Clock size={18} className="text-white" />
                <p>End: {endTime}</p>
            </div>
            <p className="text-sm text-gray-400">{participants} participants</p>
        </div>
        <div className="flex justify-between items-center">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${difficulty === "Easy" ? "bg-green-200 text-green-800" :
                difficulty === "Medium" ?"bg-yellow-200 text-yellow-800" :
                    "bg-red-200 text-red-800"
                }`}>
                {difficulty}
            </span>
            <Link href={"/Pages/contestPage"}>
                <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center">
                    View Details
                    <ChevronRight size={18} className="ml-2" />
                </button>
            </Link>
        </div>
    </div>
);

const ContestSection = ({ title, contests }) => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-white">{title}</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {contests.map((contest, index) => (
                <ContestCard key={`${title}-${index}`} {...contest} />
            ))}
        </div>
    </section>
);

export default function JEEContestDetails() {
    const upcomingContests = [
        { title: "JEE Main Challenge #1", startTime: "30 Sep 9:00 AM", endTime: "30 Sep 12:00 PM", participants: 1500, difficulty: "Medium" },
        { title: "Physics Olympiad Prep", startTime: "2 Oct 10:00 AM", endTime: "2 Oct 1:00 PM", participants: 2000, difficulty: "Hard" },
        { title: "Chemistry Concepts Quiz", startTime: "5 Oct 2:00 PM", endTime: "5 Oct 4:00 PM", participants: 1000, difficulty: "Easy" },
        { title: "Math Marathon", startTime: "8 Oct 9:00 AM", endTime: "8 Oct 3:00 PM", participants: 1800, difficulty: "Medium" },
    ];

    const recentContests = [
        { title: "JEE Advanced Simulation", startTime: "25 Sep 9:00 AM", endTime: "25 Sep 12:00 PM", participants: 1200, difficulty: "Hard" },
        { title: "NCERT Mastery Test", startTime: "27 Sep 3:00 PM", endTime: "27 Sep 5:00 PM", participants: 1800, difficulty: "Medium" },
        { title: "Organic Chemistry Sprint", startTime: "28 Sep 11:00 AM", endTime: "28 Sep 2:00 PM", participants: 1600, difficulty: "Medium" },
        { title: "Mechanics Problem Solving", startTime: "29 Sep 10:00 AM", endTime: "29 Sep 1:00 PM", participants: 1400, difficulty: "Hard" },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">

            <header className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                            JEE Contest Arena
                        </h1>
                        <p className="text-xl md:text-2xl text-orange-100">
                            Challenge yourself with JEE-focused contests and climb the ranks among India&apos;s top aspirants.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#mainDiv">
                                <button className="bg-white text-orange-600 py-3 px-6 rounded-full font-semibold hover:bg-orange-100 transition-colors duration-200">
                                    Explore Contests
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12" id="mainDiv">
                <div className="mb-12 flex justify-between items-center">
                    <h2 className="text-4xl font-bold text-white">JEE Contests</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search contests..."
                            className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>

                <ContestSection title="Upcoming JEE Contests" contests={upcomingContests} />
                <ContestSection title="Recent JEE Contests" contests={recentContests} />

                <section className="bg-gray-800 text-white rounded-lg p-8 mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0 md:mr-6">
                            <h3 className="text-2xl font-bold mb-2 text-white">Ready to ace JEE?</h3>
                            <p className="text-gray-300">Join our next contest and benchmark your preparation!</p>
                        </div>
                        <button className="bg-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200">
                            Register Now
                        </button>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter mb-8 text-white">Top JEE Performers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-gray-800 rounded-lg shadow p-6 flex items-center space-x-4">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Top Performer &apos;#{i}</p>
                                    <p className="text-sm text-gray-400">Score: {95 - i * 5}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <footer className="bg-gray-800 text-gray-300 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm mb-4 md:mb-0">&copy; 2024 JEE Contest Platform. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
