import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NoticeDetails = () => {
    const { id } = useParams()


    const [notices, setNotices] = useState([])
    useEffect(() => {
        fetch('/notice.json')
            .then(res => res.json())
            .then(data => setNotices(data))
    }, [])

    const notice = notices.find(notice => notice.id == id)

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    return (
        <div className="w-11/12 md:w-[60%] mx-auto border rounded-md space-y-4 border-[#ccc] p-6 my-10">
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-blue-400">{notice?.title}</h2>
                <h2 className="text-[18px]  font-medium"> Published Date : {formatDate(notice?.published_date)}</h2>
                <hr />
                <p className=" opacity-45">{notice?.details}</p>
            </div>
            <hr />
            <div className="flex items-end flex-col">
                <h2 className="text-xl font-bold text-green-600">{notice?.creator}</h2>
                <p className=" opacity-50">{notice?.designation}</p>
            </div>
        </div>
    );
};

export default NoticeDetails;