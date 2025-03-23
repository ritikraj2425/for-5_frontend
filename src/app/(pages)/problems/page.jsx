'use client'
import Link from "next/link";
import Questions from "../../homepagePageComponent/questions";
import { Calendar, Clock, Book } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/usecontext";
import { WobbleCard } from "../demo/wobbleCard";


export default function HomePage() {
    const { signIn } = useContext(ThemeContext)


    return (
        <div className="bg-black min-h-screen py-4 text-black">

            <div className="md:flex flex-row">
                <div className="md:w-2/3 w-full min-h-screen">
                    <Questions />
                </div>

                <div className="md:w-1/3 w-full min-h-screen p-7 space-y-6">
                    {/* Upcoming Contests Card */}
                    <WobbleCard containerClassName="w-full max-w-md text-white rounded-xl shadow-lg overflow-hidden">
                        <h1 className="text-center text-2xl font-bold py-4 bg-gradient-to-r from-[#0A192F] to-[#172A45]">
                            Upcoming Contests
                        </h1>
                        <hr className="border-t-2 border-gray-700 w-full" />
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold text-orange-300">
                                JEE Main Contest Level 2 #193eacbd
                            </h3>

                            <div className="space-y-2 text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Calendar size={20} className="text-orange-400" />
                                    <p>Start: 30 Sep 9:00 AM</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={20} className="text-orange-400" />
                                    <p>End: 30 Sep 12:00 PM</p>
                                </div>
                            </div>

                            <Link href="/contestDetails">
                                <button
                                    aria-label="View contest details"
                                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200"
                                >
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </WobbleCard>

                    {/* Today's DPP Card */}
                    <WobbleCard containerClassName="w-full max-w-md text-white rounded-xl shadow-lg overflow-hidden">
                        <h1 className="text-center text-2xl font-bold py-4 bg-gradient-to-r from-[#0A192F] to-[#172A45]">
                            Todays DPP
                        </h1>
                        <hr className="border-t-2 border-gray-700 w-full" />
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <Book size={24} className="text-orange-400" />
                                <h3 className="text-xl font-semibold text-orange-300">
                                    Magnetic force on a moving charge
                                </h3>
                            </div>

                            <Link href={signIn ? "/question/66e60ddda4eadd8fc855540a" : '/login'}>
                                <button
                                    aria-label="View question"
                                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200"
                                >
                                    View Question
                                </button>
                            </Link>
                        </div>
                    </WobbleCard>

                    {/* Calendar Card */}
                    <WobbleCard containerClassName="w-full text-white rounded-xl ">
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-orange-300">Calendar</h2>
                            <div className="grid grid-cols-7 gap-2">
                                {Array.from({ length: 30 }, (_, i) => (
                                    <div
                                        key={i + 1}
                                        className="h-12 w-12 bg-orange-500 rounded-lg flex items-center justify-center 
                                                hover:bg-gray-600 transition-colors cursor-pointer text-sm"
                                    >
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </WobbleCard>
                </div>
            </div>
        </div>
    );
}
