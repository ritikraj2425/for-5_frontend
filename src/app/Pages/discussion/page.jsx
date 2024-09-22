import Navbar from '../../components/navbar';
import Image from 'next/image';

export default function Discussion() {
    return (
        <div className="bg-[#1B1B1B] min-h-screen relative">

    <Image
        src='/Freelancing start.png'
        className='blur-md absolute inset-0 object-cover'
        alt='Background'
        layout='fill'
        priority
    />
    <div className='absolute mt-60 ml-96 z-30 text-center  text-8xl font-bold text-white max-md:max-w-full max-md:text-5xl'>
        Coming Soon
    </div>
</div>

    );
}
