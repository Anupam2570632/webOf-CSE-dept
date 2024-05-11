import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import '../../Pages/Academic/academic.css'
import { useEffect, useState } from "react";

const Feature = () => {
    const [{ programs }, setPrograms] = useState([])
    useEffect(() => {
        fetch('/programs.json')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])


    return (
        <div className="w-11/12 md:w-[85%] mx-auto py-10 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-center">Academic Programs</h2>
            <p className="text-[#ACACAC] text-center">Explore tech excellence at TechNova University&apos;s CSE Department. Top programs, expert faculty, endless opportunities. Start your journey now!</p>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                {
                    programs?.slice(0, 3).map((program, idx) => <div className="program-card mx-auto flex flex-col border rounded-md w-[100%] space-y-6 p-4" key={idx}>
                        <div className="h-[260px] overflow-hidden relative w-[100%]">
                            <img className="card-img h-full rounded-sm w-full" src={program.bannerImg} alt="" />
                            <h2 className="absolute inset-0 bg-black bg-opacity-40 text-white font-bold flex items-end justify-end p-6 text-xl">{program.shortName}</h2>
                        </div>
                        <div className="flex-1">
                            <h2 className="program-name text-xl font-bold">{program.name}</h2>
                        </div>
                        <Link to={`/programDetails/${program.id}`} className="btn btn-block font-bold btn-info">See Details<BiRightArrowAlt className="text-xl"></BiRightArrowAlt></Link>
                    </div>)
                }
            </div>
            <div className="w-full flex items-center justify-center py-4">
                <Link to={'/academic'}><button className=" btn btn-secondary">See All Programs</button></Link>
            </div>
        </div>
    );
};

export default Feature;