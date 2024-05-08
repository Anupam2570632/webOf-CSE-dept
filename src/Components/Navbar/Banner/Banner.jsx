import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import BannerMessage from './BannerMessage';

const Banner = () => {

    return (
        <Swiper navigation={true} loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className='mySwiper h-screen object-center object-cover'>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage />
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage />
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage />
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1557644978-f61037cfbe49?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage />
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Banner;