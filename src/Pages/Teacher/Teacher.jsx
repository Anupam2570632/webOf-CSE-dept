import { useEffect, useState } from "react";

const Teacher = () => {

    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('/teachers.json')
            .then(res => res.json())
            .then(data => {
                setTeachers(data)
            })
    }, [])

    return (
        <div className="w-11/12 md:w-4/5 mx-auto py-10 space-y-6">
            <h2 className="text-3xl font-bold text-center">Teachers of CSE Dept.</h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                {
                    teachers?.map((teacher, idx) => <div className="teacherCard max-w-[390px] mx-auto text-center w-full border rounded-lg border-[#ccc]" key={idx}>
                        <div className="relative">
                            <img className="h-[300px] w-full object-cover rounded-md object-top px-6 pt-6 pb-0" src={teacher.image} alt="" />
                            <div className="absolute bg-black bg-opacity-30 inset-0 mx-6 mt-6 mb-0">

                            </div>
                        </div>
                        <div className="border-t border-[#ccc] bg-opacity-15 p-6 bg-[#aaa] space-y-4">
                            <h2 className="text-2xl font-bold text-blue-500">{teacher.name}</h2>
                            <h3 className="text-xl font-medium">{teacher.designation}</h3>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Teacher;