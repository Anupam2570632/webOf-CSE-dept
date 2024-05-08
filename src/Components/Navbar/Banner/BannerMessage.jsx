import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const BannerMessage = () => {

    const handleType = (number) => {
        // access word count number
    }

    const handleDone = () => {

    }

    return (
        <div className="space-y-4 text-black text-start">
            <div className="text-start flex items-center gap-3 text-2xl lg:text-5xl md:text-3xl  text-white font-bold">
                Welcome to
                <h1 to={'/'} className="flex items-center gap-1"><h2>Tech<span className="text-blue-300">Nova</span></h2> University</h1>

            </div>
            <p className="animate__animated animate__backInRight text-[#CCCC] mt-4 max-w-[750px]">
                Begin your digital journey at CodeCraft University. From mastering algorithms and software engineering principles to diving deep into artificial intelligence and cybersecurity, unleash your potential in the world of computer science and engineering. Start coding your future now with expertise in
                <span className="inline" style={{ color: 'blue', fontWeight: 'bold' }}>
                    <Typewriter
                        words={[' Data Science', ' Machine Learning', ' Cybersecurity', ' Web Development', ' Cloud Computing']}
                        loop={5} // loop 5 times (once for each word)
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />.
                </span>            </p>
            <a data-aos-delay='400' className="animate__animated animate__bounce animate__delay-1s btn font-bold btn-accent btn-outline">
                Learn More
                <FaArrowRight />
            </a>
        </div>
    );
};

export default BannerMessage;
