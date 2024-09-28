import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
    return (

        <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                            Empowering JEE Aspirants with Smart Preparation
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            At For5, we believe every JEE aspirant deserves a fair chance to succeed. Our platform is designed to provide an interactive, engaging, and efficient way to prepare for your exams. With a user-friendly interface that works seamlessly on mobile devices, we make it easy for you to practice questions, receive instant feedback, and improve continuously.
                        </p>
                        <p className="text-xl text-gray-300">
                            Built by fellow students, For5 understands your challenges and is committed to helping you achieve your dreams. Join us and take a confident step toward your future!
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                            <Image
                                src="/1701422105587.jpeg"
                                width={800}
                                height={320}
                                className="w-full h-80 object-cover object-center"
                                alt="For5 team"
                            />
                            <div className="p-6">
                                <p className="text-gray-800 font-semibold text-center">
                                    Ritik and Amod here to help JEE aspirants.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
