import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import first from "../../img/slider/1.png";

import "./Slider2.scss"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Slider2 = () => {
	return(
		<>
			<Swiper
				className="swiper2"
				modules={[Pagination, Navigation]}
				spaceBetween={0}
				navigation
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				<SwiperSlide className="swiper2__slide">
					<div className="swiper2__wrapper">
						<img src={first} className="swiper2__image" alt="flower"/>
						<div className="swiper2__content swiper2-content">
							<h3 className="swiper2-content__title">We Have Small And Best O2 Plants Collection’s</h3>
							<p className="swiper2-content__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
							<p className="swiper2-content__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							<button className="swiper2-content__btn explore_b"><span>Explore</span></button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="swiper2__slide">
				<div className="swiper2__wrapper">
						<img src={first} className="swiper2__image" alt="flower"/>
						<div className="swiper2__content swiper2-content">
							<h3 className="swiper2-content__title">We Have Small And Best O2 Plants Collection’s</h3>
							<p className="swiper2-content__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
							<p className="swiper2-content__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							<button className="swiper2-content__btn explore_b"><span>Explore</span></button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="swiper2__slide">
				<div className="swiper2__wrapper">
						<img src={first} className="swiper2__image" alt="flower"/>
						<div className="swiper2__content swiper2-content">
							<h3 className="swiper2-content__title">We Have Small And Best O2 Plants Collection’s</h3>
							<p className="swiper2-content__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
							<p className="swiper2-content__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							<button className="swiper2-content__btn explore_b"><span>Explore</span></button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="swiper2__slide">
				<div className="swiper2__wrapper">
						<img src={first} className="swiper2__image" alt="flower"/>
						<div className="swiper2__content swiper2-content">
							<h3 className="swiper2-content__title">We Have Small And Best O2 Plants Collection’s</h3>
							<p className="swiper2-content__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
							<p className="swiper2-content__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							<button className="swiper2-content__btn explore_b"><span>Explore</span></button>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Slider2;