// src/app/page.jsx
"use client";
import { signOut } from 'firebase/auth';
import { auth } from './lib/fireBaseConfig';
import { useRouter } from 'next/navigation';
import VideoScrollerFeatured from './components/videoScrollerFeatured';
import AboutSection from './components/aboutSectionHomepage';
import VideoScrollerLearn from './components/videoScrollerLearn';

export default function HomePage() {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('email');
            router.push('/Pages/Login');
        } catch (error) {
            console.error('Error during sign-out:', error);
        }
    };

    return (
        <div className='bg-[#1B1B1B] relative min-h-screen w-full '>
            <div className="absolute inset-0 bg-[url('/backgroundWhiteGrid.png')] bg-repeat bg-center opacity-70 "></div>

            <div className='relative z-10'>

            <div className="h-[3rem] bg-[#FF9900] w-full"><button onClick={handleSignOut} className=''>Sign Out</button></div>



            <div className='relative'>
            <h1 className='text-center mt-20 text-8xl font-bold text-white max-md:mt-5 max-md:max-w-full max-md:text-5xl'>
                    Empower your<br></br> journey <span className='relative inline-block bg-gradient-to-r from-[#E47406] to-white text-black rounded-md  z-10' >with for5</span>
                    </h1>
                <div className="absolute inset-x-0 bottom-[-4rem] flex justify-center">
                    <img src='/lighRay.png' alt='underline image' className='w-80 h-16' />
                </div>
                <div className='absolute left-0 right-0 flex justify-center bottom-[-8rem]'>
                        <button className='bg-slate-100 p-3 rounded-md'><span className='font-bold '>Go To Problems</span></button>
                </div>

            </div>



            <div className='mt-40 ml-6'>
                <h3 className='relative text-4xl font-bold inline-block bg-gradient-to-r from-[#E47406] to-white text-black rounded-md p-1 z-10'>Featured</h3>
                <div>
                    <VideoScrollerFeatured/>
                </div>
            </div>


            <div className='mt-16 ml-6'>
                <h3 className='relative text-4xl font-bold inline-block bg-gradient-to-r from-[#E47406] to-white text-black rounded-md  p-1 z-10'>Learn</h3>

                <div>
                    <VideoScrollerLearn/>
                </div>
            </div>


            <div>
                <AboutSection/>
            </div>


            </div>

        </div>
    );
}
