import Link from "next/link"
import Navbar from '../../components/navbar'

export default function ContestDetails(){
    return(
        <div className="flex flex-col min-h-[100dvh]">
             <Navbar/>
            <header className="bg-[#E6E6E6] text-black py-12 md:py-16  lg:py-20">
                <div className="container">
                    <div className="max-w-3xl space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter ml-5 sm:text-5xl md:text-6xl">Compete and Conquer</h1>
                        <p className="text-lg ml-6 md:text-xl">
                            Join our thrilling contests and showcase your skills against talented participants from around the India.
                        </p>
                    </div>
                </div>
            </header>
            <main className="bg-[#1B1B1B] text-[#E7E7E4]">
                <div className="p-4">
                    <h1 className="text-3xl font-bold  tracking-tighter ml-5 sm:text-3xl md:text-3xl">Upcoming Contests</h1>
                    <br></br>


                    <div className="flex gap-2  rounded-md max-w-full overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory">

                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>
                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>
                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>
                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>

                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>
                    </div>
                </div>



                <div className="p-4">
                    <h1 className="text-3xl font-bold tracking-tighter ml-5 sm:text-3xl md:text-3xl">Recent Contests</h1>
                    <br></br>


                    <div className="flex gap-2 rounded-md max-w-full overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory">

                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>
                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>
                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>
                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>

                        <div className="bg-[#7D7D7D] p-4 rounded-md w-[50vh] flex-shrink-0 snap-start inline-block">
                            <h3 className="text-xl font-semibold">Jee Main Contest #123</h3>
                            <br></br>
                            <p>Start: 30sep 9:00am</p>
                            <p>End: 30sep 12:00pm</p>
                            <br></br>
                            <button className="bg-white text-black p-2 rounded-md">View Details</button>
                        </div>

                    </div>
                </div>

            </main>

            <footer className="bg-[#38383a] text-[#E7E7E4] py-2">
                <div className="container">
                    <p className="text-sm text-center">&copy; 2024 for5. All rights reserved.</p>
                </div>
            </footer>


        </div>
    )
}