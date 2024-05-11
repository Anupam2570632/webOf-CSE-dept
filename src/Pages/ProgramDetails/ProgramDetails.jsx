import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProgramDetails = () => {
    const { id } = useParams()

    const [{ programs }, setPrograms] = useState([])
    useEffect(() => {
        fetch('/programs.json')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])

    const program = programs?.find(program => program.id == id)


    return (
        <div
            className="bg-cover bg-center w-full h-screen flex items-center justify-center"
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${program?.bannerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="glasso text-black rounded-lg w-11/12 md:w-[60%] mx-auto p-10 space-y-4">
                <h1 className="text-xl font-bold">Program Name : <span className="opacity-75">{program?.name}</span></h1>
                <h2 className="text-xl font-bold">Degree Name : <span className="opacity-75">{program?.degree}</span></h2>
                <h3 className="text-xl font-bold">Program Duration : <span className="opacity-75">{program?.duration}</span></h3>
                <h3 className="text-xl font-bold">Program Level : <span className="opacity-75">{program?.level}</span></h3>
                <hr />
                <div>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="space-y-3">
                            <h2 className="font-bold text-xl">
                                Requirement :
                            </h2>
                            <div className="space-y-3">
                                <h2 className="font-medium">GPA : {program?.requirements?.GPA}</h2>
                                <h3 className="font-medium">SAT/ACT : {program?.requirements?.["SAT_ACT"]}</h3>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h1 className=" text-xl font-bold">Prerequisites :</h1>
                            {program?.requirements?.Prerequisites?.map((btn, idx) => <h1 className="  rounded-md" key={idx}>
                                {program?.requirements?.Prerequisites?.[idx]}
                            </h1>)}
                        </div>

                    </div>
                </div>
                <hr />
                <div>
                    <p>{program?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetails;