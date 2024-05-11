import { FaGraduationCap } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";

const Stat = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center py-10 justify-between w-11/12 md:w-[60%] mx-auto">
            <div className="flex items-center justify-center flex-col space-y-6">
                <IoPeopleSharp className="text-8xl p-4 border rounded-full bg-black bg-opacity-55"/>
                <h2 className="text-2xl font-bold">9</h2>
                <h1 className="text-2xl font-bold">Total Teacher&apos;s</h1>
            </div>
            <div className="flex items-center justify-center flex-col space-y-6">
                <PiStudentFill className="text-8xl p-4 border rounded-full bg-black bg-opacity-55"/>
                <h2 className="text-2xl font-bold">11,234</h2>
                <h1 className="text-2xl font-bold">Total Student&apos;s</h1>
            </div>
            <div className="flex items-center justify-center flex-col space-y-6">
                <FaGraduationCap className="text-8xl p-4 border rounded-full bg-black bg-opacity-55"/>
                <h2 className="text-2xl font-bold">6</h2>
                <h1 className="text-2xl font-bold">Total Degrees</h1>
            </div>
        </div>
    );
};

export default Stat;