import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Notice = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch('/notice.json')
            .then(res => res.json())
            .then(data => setNotices(data))
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    return (
        <div className="py-10">
            <div className="border border-[#ccc] rounded-lg max-w-[500px] mx-auto">
                <h2 className="border-b border-[#ccc] p-4 text-2xl font-bold bg-[#AAAA] text-blue-700 text-center">Notice Board</h2>
                <div className="flex flex-col overflow-y-scroll max-h-[500px]">
                    {notices.map((notice, idx) => (
                        <div className="border-y px-4 py-2 border-[#ccc]" key={idx}>
                            <Link to="" className="hover:underline text-xl hover:text-blue-800 duration-200 mt-2 p-4">{notice.title}</Link>
                            <h2 className="px-4">Published On: <span>{formatDate(notice.published_date)}</span></h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notice;
