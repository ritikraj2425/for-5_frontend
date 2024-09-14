export default function AboutSection(){
    return(
        <div className="flex flex-col md:flex-row mt-14 ml-5 md:ml-10 gap-3">
            <div className="text-white md:w-[60%] flex-1">
                <h1 className="text-5xl font-bold">Empowering JEE Aspirants with Smart Preparation</h1>
                <p className="mt-6 text-1xl mb-5 md:w-[80%]">At For5, we believe every JEE aspirant deserves a fair chance to succeed. Our platform is designed to provide an interactive, engaging, and efficient way to prepare for your exams. With a user-friendly interface that works seamlessly on mobile devices, we make it easy for you to practice questions, receive instant feedback, and improve continuously. Built by fellow students, For5 understands your challenges and is committed to helping you achieve your dreams. Join us and take a confident step toward your future!</p>
            </div>

            <div className="bg-white flex-1 h-[30rem] rounded-md mb-5 mr-5">
                <img src="/1701422105587.jpeg" className="h-3/4 w-full" rel="image"></img>
            </div>
        </div>
    )

}