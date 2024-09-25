// src/app/page.jsx
"use client";


import { useRouter } from 'next/navigation';
import VideoScrollerFeatured from './components/videoScrollerFeatured';
import AboutSection from './components/aboutSectionLandingPage';
import VideoScrollerLearn from './components/videoScrollerLearn';
import { Button } from './components/moving-border';
import Navbar from './components/navbar';
import { motion } from "framer-motion";
import { LampContainer } from './components/lamp';
import { WavyBackground } from "./components/wavy-background"


export default function HomePage() {
    const router = useRouter();


    const handleGoToProblems = () => {
        router.push('/problems');
    }

    return (
        <div className='bg-black relative min-h-screen w-full '>
            {/* <div className="absolute inset-0 bg-[url('/backgroundWhiteGrid.png')] bg-repeat bg-center opacity-70 "></div> */}
            <div className='relative z-10'>




                <div className='relative'>

                    <WavyBackground className="max-w-4xl mx-auto pb-40 flex flex-col items-center md:mt-28 justify-center space-y-8">
                        <p className="text-5xl p-2 md:text-6xl  lg:text-8xl text-white font-bold inter-var text-center">
                            Empower your<br />journey with for5
                            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E47406] to-white"> with for5</span> */}
                        </p>
                        <Button
                            borderRadius="1.75rem"
                            onClick={handleGoToProblems}
                            className="bg-white dark:bg-[#e7eaed] text-black dark:text-black border-neutral-200 dark:border-orange-500 transition-transform duration-300 hover:scale-105"
                        >
                            <span className="font-bold">Go To Problems</span>
                        </Button>
                    </WavyBackground>




                </div>

                <div className=' ml-6'>
                    <h3 className='relative text-4xl font-bold inline-block bg-white text-black rounded-md p-1 z-10'>Featured</h3>
                    <div>
                        <VideoScrollerFeatured />
                    </div>
                </div>


                <div className='mt-8 ml-6'>
                    <h3 className='relative text-4xl font-bold inline-block bg-white text-black rounded-md  p-1 z-10'>Learn</h3>

                    <div>
                        <VideoScrollerLearn />
                    </div>
                </div>


                <div>
                    <AboutSection />
                </div>
                <footer className="bg-gray-800 text-gray-300 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm mb-4 md:mb-0">&copy; 2024 JEE Contest Platform. All rights reserved.</p>
                    </div>
                </div>
            </footer>


            </div>

        </div>
    );
}
