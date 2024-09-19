import Link from "next/link"
import Questions from "../../homepagePageComponent/questions"
export default function HomePage() {
    return (
        <div className="bg-[#1B1B1B] min-h-screen">
            <div className="h-[3rem] bg-gradient-to-r from-[#1B1B1B] to-[#E47406] w-full"> 
                <Link href='/'><button className="text-white">Landing Page</button></Link>
            </div>


            <div className="md:flex flex-row">
            <div className="md:w-2/3 w-full  min-h-screen ">

            <Questions/>
            </div>


                <div className="md:w-1/3 w-full min-h-screen p-7">

                    <div className="bg-[#7D7D7D] w-full h-full rounded-xl">
                        <h1 className="">Upcoming Contests</h1>
                        <hr className="border-t-4 border-[#1B1B1B] w-full border-2"></hr>

                            
                    </div>
                </div>

            </div>


        </div>
    )
}