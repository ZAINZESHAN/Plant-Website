import React from 'react'
import review_1 from '../assets/review-1.jpg'
import review_2 from '../assets/review-2.jpg'
import review_3 from '../assets/review-3.jpg'
import review_4 from '../assets/review-4.jpg'
import leaf_4 from '../assets/leaf-4.png'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import required modules
import { Pagination } from 'swiper/modules'

const Review = () => {
  return (
    <section className='relative mb-20 md:mb-28 overflow-hidden'>

      <div className='absolute -top-8 -left-12 opacity-50'>
        <img src={leaf_4} alt="leaf_image" 
        className='w-40 md:w-52 xl:w-64'
        />
      </div>

      <style>
        {`

          .swiper-pagination-bullet {
            width: 9px;
            height: 9px;
            margin: 0 4px;
          }

          .swiper-pagination-bullet-active {
            background: #228B22;
            width: 10px;
            height: 10px;
          }
        `}
      </style>
      <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
        <h2 className='title'>Customer Review</h2>
        <p className='max-w-2xl'>Follow Instruction for more</p>
      </div>

      <div className='container'>
        <div className='py-12'>
          <Swiper
            speed={400}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            spaceBetween={30}
            grabCursor={true}
            slidesPerView={1} // Default slides per view
            breakpoints={{
              640: {
                slidesPerView: 1 // For screens 640px and up
              },
              768: {
                slidesPerView: 2 // For screens 768px and up
              },
              1024: {
                slidesPerView: 3 // For screens 1024px and up
              }
            }}
            pagination={{
              clickable: true
            }} // Enable pagination bullets
            modules={[Pagination]}
          >
            {/* {[review_1, review_2, review_3, review_4].map((review, index) => ( */}
            <SwiperSlide>
              <div className='flex flex-col gap-5 mb-12 bg-green-900 rounded-md p-6'>
                <p className='font-Lobster'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae nulla voluptatibus ipsam. Doloremque rem repellendus
                  fugiat, eius culpa quasi sed temporibus.
                </p>
                <div className='flex items-center'>
                  <img
                    className='w-12 h-12 rounded-full'
                    src={review_1}
                    alt='review_image'
                  />
                  <div className='ml-2'>
                    <p className='text-yellow-500 uppercase'>John Doe</p>
                    <p>Designer</p>
                  </div>
                  <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-5 mb-12 bg-green-900 rounded-md p-6'>
                <p className='font-Lobster'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae nulla voluptatibus ipsam. Doloremque rem repellendus
                  fugiat, eius culpa quasi sed temporibus.
                </p>
                <div className='flex items-center'>
                  <img
                    className='w-12 h-12 rounded-full'
                    src={review_2}
                    alt='review_image'
                  />
                  <div className='ml-2'>
                    <p className='text-yellow-500 uppercase'>John Doe</p>
                    <p>Designer</p>
                  </div>
                  <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-5 mb-12 bg-green-900 rounded-md p-6'>
                <p className='font-Lobster'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae nulla voluptatibus ipsam. Doloremque rem repellendus
                  fugiat, eius culpa quasi sed temporibus.
                </p>
                <div className='flex items-center'>
                  <img
                    className='w-12 h-12 rounded-full'
                    src={review_3}
                    alt='review_image'
                  />
                  <div className='ml-2'>
                    <p className='text-yellow-500 uppercase'>John Doe</p>
                    <p>Designer</p>
                  </div>
                  <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-5 mb-12 bg-green-900 rounded-md p-6'>
                <p className='font-Lobster'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae nulla voluptatibus ipsam. Doloremque rem repellendus
                  fugiat, eius culpa quasi sed temporibus.
                </p>
                <div className='flex items-center'>
                  <img
                    className='w-12 h-12 rounded-full'
                    src={review_4}
                    alt='review_image'
                  />
                  <div className='ml-2'>
                    <p className='text-yellow-500 uppercase'>John Doe</p>
                    <p>Designer</p>
                  </div>
                  <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                </div>
              </div>
            </SwiperSlide>
            {/* ))} */}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Review
