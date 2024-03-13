import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "./Slider2.scss"

const Slider2 = () => {
	return(
		<>
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Slider2;