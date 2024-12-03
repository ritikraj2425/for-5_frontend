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
            <div className='relative z-10'>
                <div className='relative' id='home'>
                    <WavyBackground className="max-w-4xl mx-auto pb-40 flex flex-col items-center md:mt-28 justify-center space-y-8">
                        <p className="text-5xl p-2 md:text-6xl  lg:text-8xl text-white font-bold inter-var text-center">
                            Empower your<br />journey with for5
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
                <section className="py-12 " id="featured">
                    <div className="container mx-auto px-4">
                        <h2 className="text-5xl font-bold text-white mb-8">Featured</h2>
                        <VideoScrollerFeatured />
                    </div>
                </section>


                <section className="" id="featured">
                    <div className="container mx-auto px-4">
                        <h2 className="text-5xl font-bold text-white mb-8">Learn</h2>
                        <VideoScrollerLearn />
                    </div>
                </section>


                <div id='about'>
                    <AboutSection />
                </div>
                

            </div>

        </div>
    );
}
