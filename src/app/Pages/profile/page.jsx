'use client'
import Navbar from "@/app/components/navbar"
import Image from "next/image"
import { useState,useEffect } from "react"
export default function Profile() {
    const[userData,setUserData] = useState();

    useEffect( ()=>{
        const fetchUserData =async()=>{

            let uid = JSON.parse(localStorage.getItem("uid"));
            if(!uid){
                console.log("no uid found");
            }
    
            const response = await fetch(`https://quizprojectserver.vercel.app/get/userDetails?uid=${uid}`);
            const data = await response.json();
            console.log(data);
            setUserData(data)
        }
        fetchUserData();

    },[])


    return (
        <div className="bg-[#1B1B1B] min-h-screen">
            <Navbar />
            
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 w-full">
                    <div className="mt-4 md:ml-5 md:mt-4 flex flex-col items-center md:items-start">
                        <Image src="/profileimage.png" alt="User" width={170} height={170} className="ml-10 md:ml-5" />
                        <h1 className="text-4xl ml-6 md:text-6xl text-[#e5dede] mt-3 font-bold text-center md:text-left">
                            {userData? userData.name: "Error"}
                        </h1>
                        <h1 className="text-2xl ml-6 md:text-3xl text-[#e5dede] font-bold text-center md:text-left">
                        {userData? userData.username: "Not available"}
                        </h1><br></br>
                        <button className="bg-white text-black p-2 rounded-md ml-6">Edit Profile</button>
                    </div>
                </div>

                <div className="md:w-3/4 w-full bg-[#5F5F5F]">

                </div>
            </div>


            <div className="mt-10 ml-10">
                <h1 className="  text-[#E7E7E4]"><span className="bg-[#5F5F5F] rounded-md p-3 font-bold">Submissions</span></h1>
                <div className="bg-[#5F5F5F] w-full h-[20rem] mt-5"></div>
            </div>
        </div>
    )
}