import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import first from "../../img/slider/1.png";
import second from "../../img/slider/3.png";
import third from "../../img/slider/4.png";
import 'swiper/css';
import './Slider.scss'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
   	 <Swiper
	      className="swiper"
		 	modules={[Pagination]}
	      spaceBetween={0}
			navigation
	      slidesPerView={1}
			pagination={{ clickable: true }}
	    >
	      <SwiperSlide className="swiper__slide">
				<div className="content__wrapper">
					<img src={first} alt="flower"/>
					<div className="swiper__content swiper-content">
						<p className="swiper-content__p">Trendy House Plant</p>
						<h3 className="swiper-content__title">Calathea plant</h3>
						<button className="swiper-content__btn explore_b"><span>Buy Now</span></button>
					</div>
				</div>
			</SwiperSlide>
	      <SwiperSlide className="swiper__slide">
				<div className="content__wrapper">
					<img src={second} alt="flower"/>
					<div className="swiper__content swiper-content">
						<p className="swiper-content__p">Trendy House Plant</p>
						<h3 className="swiper-content__title">Calathea plant</h3>
						<button className="swiper-content__btn explore_b"><span>Buy Now</span></button>
					</div>
				</div>
			</SwiperSlide>
	      <SwiperSlide className="swiper__slide">
				<div className="content__wrapper">
					<img src={third} alt="flower"/>
					<div className="swiper__content swiper-content">
						<p className="swiper-content__p">Trendy House Plant</p>
						<h3 className="swiper-content__title">Calathea plant</h3>
						<button className="swiper-content__btn explore_b"><span>Buy Now</span></button>
					</div>
				</div>
			</SwiperSlide>
	    </Swiper>
  );
};