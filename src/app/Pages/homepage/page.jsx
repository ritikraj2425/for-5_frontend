import Link from "next/link";
import Questions from "../../homepagePageComponent/questions";
import Navbar from '../../components/navbar';
import { Calendar, Clock, Book } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="bg-gray-900 min-h-screen text-black">
            {/* <Navbar /> */}
            <div className="md:flex flex-row">
                <div className="md:w-2/3 w-full min-h-screen">
                    <Questions />
                </div>

                {/* *********************** */}
                <div className="md:w-1/3 w-full min-h-screen p-7 space-y-6">

                    <div className="bg-gray-800 w-full max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden">
                        <h1 className="text-center text-2xl font-bold py-4 bg-gradient-to-r from-orange-700 to-orange-900">Upcoming Contests</h1>
                        <hr className="border-t-2 border-gray-700 w-full" />
                        <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-orange-300">JEE Main Contest Level 2 &apos;#193eacbd</h3>
                        <div className="space-y-2 text-gray-300">
                                <div className="flex items-center space-x-2">
                                    <Calendar size={20} className="text-orange-400" />
                                    <p>Start: 30 Sep 9:00 AM</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock size={20} className="text-orange-400" />
                                    <p>End: 30 Sep 12:00 PM</p>
                                </div>
                            </div>
                            <br />
                            <Link href={'/Pages/contestDetails'}>
                                <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center w-full">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>


                    <div className="bg-gray-800 w-full max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden">
                        <h1 className="text-center text-2xl font-bold py-4 bg-gradient-to-r from-orange-700 to-orange-900">Today's DPP</h1>
                        <hr className="border-t-2 border-gray-700 w-full" />
                        <div className="p-6 space-y-4">
                            <div className="flex items-center space-x-3">
                                <Book size={24} className="text-orange-400" />
                                <h3 className="text-xl font-semibold text-orange-300">Magnetic force on a moving charge</h3>
                            </div>
                            <br />
                            <Link href={'/Pages/questionPage/66e60ddda4eadd8fc855540a'}>
                                <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center w-full">
                                    View Question
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-800 w-full text-white rounded-xl h-[15rem] p-4">
                        <h2 className="text-xl font-bold mb-4 text-orange-300">Calendar</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
