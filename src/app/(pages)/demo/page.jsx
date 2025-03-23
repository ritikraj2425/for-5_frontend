import Image from 'next/image';
import AnimatedTestimonials from './component.jsx';
import { WobbleCard } from './wobbleCard.jsx';
import { Carousel, Card } from './cardsCarousel.jsx';
import { Cover } from './cover.jsx';
export default function Test() {

    return <div className='bg-black md:py-8 py-4'>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Gippity AI powers the entire universe
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p>
                </div>
                <Image
                    src="/check.webp"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    No shirt, no shoes, no weapons.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    If someone yells “stop!”, goes limp, or taps out, the fight is over.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Signup for blazing-fast cutting-edge state of the art Gippity AI
                        wrapper today!
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p>
                </div>
                <Image
                    src="/check.webp"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
        </div>



        <AppleCardsCarouselDemo />
        <AppleCardsCarouselDemo />
        {/* <div className='-[#EED6B2]'>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  relative z-20 md:py-10 py-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Solve amazing questions <br /> with <Cover>for5</Cover>
            </h1>
        </div> */}
        <AnimatedTestimonials />


    </div>
}





function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full md:py-14 py-5">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Get to know your iSad.
            </h2>
            <Carousel items={cards} />
        </div>
    );
}



const data = [
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/check.webp",
    },
    {
        category: "Productivity",
        title: "Enhance your productivity.",
        src: "/check.webp",
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "/check.webp",
    },

    {
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "/check.webp",
    },
    {
        category: "iOS",
        title: "Photography just got better.",
        src: "/check.webp",
    },
    {
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer",
        src: "/check.webp",
    },
];

