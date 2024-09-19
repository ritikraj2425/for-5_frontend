// src/app/page.jsx
"use client";
import { signOut } from 'firebase/auth';
import { auth } from './lib/fireBaseConfig';
import { useRouter } from 'next/navigation';
import VideoScrollerFeatured from './components/videoScrollerFeatured';
import AboutSection from './components/aboutSectionLandingPage';
import VideoScrollerLearn from './components/videoScrollerLearn';
import { Button } from './components/moving-border';
import Navbar from './components/navbar';

export default function HomePage() {
    const router = useRouter();

   
    const handleGoToProblems =()=>{
        router.push('/Pages/homepage');
    }

    return (
        <div className='bg-[#1B1B1B] relative min-h-screen w-full '>
            <div className="absolute inset-0 bg-[url('/backgroundWhiteGrid.png')] bg-repeat bg-center opacity-70 "></div>

            <div className='relative z-10'>
                <Navbar/>




            <div className='relative'>
                    <h1 className='text-center mt-20 text-8xl font-bold text-white max-md:mt-5 max-md:max-w-full max-md:text-5xl'>
                        Empower your<br></br> journey <span className='relative inline-block bg-gradient-to-r from-[#E47406] to-white text-black rounded-md  z-10' >with for5</span>
                    </h1>
                    <div className="absolute inset-x-0 bottom-[-4rem] flex justify-center">
                        <img src='/lighRay.png' alt='underline image' className='w-80 h-16' />
                    </div>
                    <div className='absolute left-0 right-0 flex justify-center bottom-[-8rem]'>
                        <Button borderRadius="1.75rem" onClick={handleGoToProblems}
                            className="bg-white dark:bg-[#e7eaed] text-black dark:text-black border-neutral-200 dark:border-[#0c9bd4] transition-transform duration-300 hover:scale-105" ><span className='font-bold '>Go To Problems</span>
                        </Button>
                </div>


            </div>

                <div className='mt-40 ml-6'>
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


            </div>

        </div>
    );
}
