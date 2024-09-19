import { TbUserHexagon } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar(){
    const navbarOptions = ["Home","Questions","Contest","Discussion"]
    return(
        <div className="flex w-[100vw] h-[7vh] bg-red-500 justify-between items-center">
            <div>logo</div>
            <div className="flex bg-yellow-200 w-[80vw] h-[7vh] items-center justify-end pr-10 ">
                {navbarOptions.map((option)=>{
                    return(
                        <div className="w-fit h-fit bg-black p-[1vh] m-1 items-center 
                        left-auto right-0 rounded-[10px]">
                            <h2 className="text-white font-bold text-[2vmin]">
                                {option}
                            </h2>
                        </div>
                    )
                })}
                <div className="flex items-center bg-white p-1 rounded-[10px]">
                    <TbUserHexagon className="size-[5vmin]"/>
                    <IoIosArrowDown className="size-[2.5vmin]"/>
                </div>
            </div>
        </div>
    )
}