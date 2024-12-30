import React, { useEffect } from 'react';
import floral_1 from '../assets/floral-1.png';
import ScrollReveal from 'scrollreveal';

const Footer = () => {
    
    const scrollUp = () => {
        const scrollBtn = document.getElementById('scroll-up');

        if (scrollBtn) {
            if (window.scrollY >= 250) {
                scrollBtn.classList.remove("-bottom-1/2");
                scrollBtn.classList.add("bottom-4");
            } else {
                scrollBtn.classList.add("-bottom-1/2");
                scrollBtn.classList.remove("bottom-4");
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollUp);
        return () => {
            window.removeEventListener('scroll', scrollUp);
        };
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 2500,
          delay: 300,
          reset: true
        })
    
        sr.reveal(`.footer_icon, .footer_content, .copy_right`)
      }, [])

    return (
        <>
            <footer className='bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative'>
                {/* newsletter */}
                <div className='container text-white absolute top-0 right-0 left-0 -translate-y-1/2'>
                    <div className='bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md'>
                        <h3>
                            <span className='text-yellow-500'>Subscribe</span> to our
                            newsletter
                        </h3>

                        <div className='flex flex-col md:flex-row gap-1'>
                            <input
                                className='w-full px-5 py-3 text-green-900 rounded-md outline-none'
                                type='email'
                                placeholder='Your Email Address'
                            />
                            <button
                                className='flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md
                                hover:opacity-80 duration-300'
                            >
                                <span>Subscribe</span>
                                <i className='ri-send-plane-2-fill'></i>
                            </button>
                        </div>
                    </div>
                </div>
                {/* social icons */}
                <div className='footer_icon container mt-16 mb-10'>
                    <div className='border-b border-green-500 relative'>
                        <div className='absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto'>
                            <div className='bg-yellow-100 text-lg text-center space-x-2'>
                                <i className='hover:text-yellow-500 duration-300 cursor-pointer ri-facebook-fill'></i>
                                <i className='hover:text-yellow-500 duration-300 cursor-pointer text-base ri-twitter-x-line'></i>
                                <i className='hover:text-yellow-500 duration-300 cursor-pointer ri-instagram-line'></i>
                                <i className='hover:text-yellow-500 duration-300 cursor-pointer ri-linkedin-fill'></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className='footer_content container grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start'>
                    {/* item 1 */}
                    <div>
                        <div className='text-7xl text-green-700 text-center inline-block'>
                            <i className='ri-leaf-fill'></i>
                            <p className='font-Lobster text-xl sm:text-2xl'>IndorePlants.</p>
                        </div>
                    </div>
                    {/* item 2 */}
                    <div>
                        <p className='mb-5 font-bold text-xl'>Quick Link</p>
                        <div className='flex flex-col gap-1'>
                            <a href='#'>Plants</a>
                            <a href='#'>Flowers</a>
                            <a href='#'>Gardening</a>
                            <a href='#'>Seeds</a>
                            <a href='#'>Shipping</a>
                        </div>
                    </div>
                    {/* item 3 */}
                    <div>
                        <p className='mb-5 font-bold text-xl'>Popular Services</p>
                        <div className='flex flex-col gap-1'>
                            <a href='#'>Tree Planting</a>
                            <a href='#'>Grass Cutting</a>
                            <a href='#'>Weeds Control</a>
                            <a href='#'>Project</a>
                        </div>
                    </div>
                    {/* item 4 */}
                    <div>
                        <p className='mb-5 font-bold text-xl'>Contact Us</p>
                        <div className='flex flex-col gap-1'>
                            <a href='tel:+8833378901'>+88 333 78 901</a>
                            <a href='mailto:zainzeeshan@gmail.com'>zainzeeshan@gmail.com</a>
                            <br />
                            <p>1234 Tailwind Ave, CSS City, Webland 56789, USA</p>
                        </div>
                    </div>
                </div>
                {/* copyright */}
                <div className='copy_right container'>
                    <p className='text-center mt-10 opacity-50'>
                        Copyright &copy; 2024 LightCode. All rights reserved.
                    </p>
                </div>
                {/* floral image */}
                <div className='absolute bottom-0 left-0 opacity-20 pointer-events-none'>
                    <img className='w-full lg:w-1/2' src={floral_1} alt='floral_image' />
                </div>
            </footer>
            {/* Scroll Up */}
            <a
                onClick={scrollUp}
                href='#'
                className='fixed right-4 -bottom-1/2 bg-yellow-500 shadow-sm inline-block
                px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300'
                id='scroll-up'>
                <i className='ri-arrow-up-line'></i>
            </a>
        </>
    );
};

export default Footer;
