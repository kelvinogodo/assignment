import './landpage.css'
import Header from '../header/Header'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
const Landpage = () => {
    const progressCircle = useRef(null);
      const progressContent = useRef(null);
    const navigate= useNavigate()
  return (
      <main className='landpage' >
        <Header />
          <div className='landpage-content-wrapper'>
              <div className="landpageswiperwrapper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                      <SwiperSlide className='iswipe'>
                          <div className="swipeChild">
                              <img src="/launch-picture-with-ministers.jpg" alt="" className='swipeChildImage' />
                              <div className="swipeChildTextContainer">
                                <h1>
                                    ebonyi state local government service commission 
                                  </h1>
                                  <p className="slideBadge">
                                      Rural remuneration programme
                                  </p>
                                  
                              </div>

                              
                          </div> 
                    </SwiperSlide>
                      <SwiperSlide className='iswipe'>
                          <div className="swipeChild">
                              <img src="/rebasing-coverpicture-052024.jpg" alt="" className='swipeChildImage' />
                              <div className="swipeChildTextContainer">
                                <h1>
                                    ebonyi state local government service commission
                                  </h1>
                                  <p className="slideBadge">
                                      Community revitalization scheme
                                  </p>
                              </div>
                              
                          </div> 
                    </SwiperSlide>
                      <SwiperSlide className='iswipe'>
                          <div className="swipeChild">
                              <img src="/226.jpg" alt="" className='swipeChildImage' />
                              <div className="swipeChildTextContainer">
                                <h1>
                                    ebonyi state local government service commission
                                  </h1>
                                  <p className="slideBadge">
                                      Youth employment drive
                                  </p>
                              </div>
                              
                          </div> 
                    </SwiperSlide>
                      <SwiperSlide className='iswipe'>
                          <div className="swipeChild">
                              <img src="/F8uB6jNWcAEj6Ba.jpg" alt="" className='swipeChildImage' />
                              <div className="swipeChildTextContainer">
                                <h1>
                                    ebonyi state local government service commission
                                  </h1>
                                  <p className="slideBadge">
                                      Public health outreach programme
                                  </p>
                              </div>
                              
                          </div> 
                    </SwiperSlide>
                      <SwiperSlide className='iswipe'>
                          <div className="swipeChild">
                              <img src="/abuja-with-sg.jpg" alt="" className='swipeChildImage' />
                              <div className="swipeChildTextContainer">
                                <h1>
                                    ebonyi state local government service commission
                                  </h1>
                                  <p className="slideBadge">
                                      Cultural heritage preservation project
                                  </p>
                              </div>
                              
                          </div> 
                    </SwiperSlide>
                   
                </Swiper>
              </div>
      </div>
      {/* <Tickertape /> */}
    </main>
  )
}

export default Landpage
