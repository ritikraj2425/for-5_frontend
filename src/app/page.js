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




                <div className='relative' id='home'>

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

                <div className=' ml-6' id='featured'>
                    <h3 className='relative text-4xl font-bold inline-block bg-white text-black rounded-md p-1 z-10'>Featured</h3>
                    <div>
                        <VideoScrollerFeatured />
                    </div>
                </div>


                <div className='mt-8 ml-6' id='learn'>
                    <h3 className='relative text-4xl font-bold inline-block bg-white text-black rounded-md  p-1 z-10'>Learn</h3>

                    <div>
                        <VideoScrollerLearn />
                    </div>
                </div>


                <div id='about'>
                    <AboutSection />
                </div>
                <div className="bg-black text-white py-8 border-t border-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold">for5</h4>
                                <p className="text-sm text-gray-400">Empowering your JEE journey with cutting-edge learning tools and resources.</p>
                                <div className="flex space-x-4">
                                    <a href="https://x.com/RitikRa65973406" className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/ritik_raj2425/" className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                                    <li><a href="/problems" className="text-gray-400 hover:text-white transition-colors">Problems</a></li>
                                    <li><a href="#learn" className="text-gray-400 hover:text-white transition-colors">Learn</a></li>
                                    <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">Contact Us</h4>
                                <p className="text-sm text-gray-400">Have questions? Reach out to us!</p>
                                <a href="mailto:support@for5.com" className="text-sm text-gray-400 hover:text-white transition-colors">support@for5.com</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}
