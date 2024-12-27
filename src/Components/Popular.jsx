import React from 'react'
import cart_1 from '../assets/cart-1.png'
import cart_2 from '../assets/cart-2.png'
import cart_3 from '../assets/cart-3.png'
import cart_4 from '../assets/cart-4.png'

const Popular = () => {
    return (
        <section className='bg-green-900'>
            <div className='flex flex-col items-center gap-3 text-center mb-40'>
                <h2 className='title'>Your Choice Plant</h2>
                <p className='max-w-2xl'>Follow instruction for more</p>
            </div>

            <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36
            md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

                {/* card 1 */}
                <div className='popular_card bg-green-950 p-10 pt-24 rounded-md relative'>
                    <img className='w-56 absolute -top-5 left-1/2 transform 
                    -translate-x-1/2 -translate-y-1/2 duration-500' src={cart_1} alt="popular_image" />
                    <p className='italic'>Nephrolepis exaltata</p>
                    <h3>Boston Fern</h3>

                    <div className='text-yellow-500 text-xs py-3'>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                        <i className="ri-star-line text-gray-400"></i>
                        <i className="ri-star-line text-gray-400"></i>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='text-xl'>$5</p>

                        <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl'>
                            <i className="ri-shopping-cart-fill"></i>
                        </button>
                    </div>
                </div>

                {/* card 2 */}
                <div className='popular_card bg-green-950 p-10 pt-24 rounded-md relative'>
                    <img className='w-56 absolute -top-5 left-1/2 transform 
                    -translate-x-1/2 -translate-y-1/2 duration-500' src={cart_2} alt="popular_image" />
                    <p className='italic'>Ficus elastica</p>
                    <h3>Rubber Plant</h3>

                    <div className='text-yellow-500 text-xs py-3'>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                        <i className="ri-star-line text-gray-400"></i>
                        <i className="ri-star-line text-gray-400"></i>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='text-xl'>$5</p>

                        <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl'>
                            <i className="ri-shopping-cart-fill"></i>
                        </button>
                    </div>
                </div>

                {/* card 3 */}
                <div className='popular_card bg-green-950 p-10 pt-24 rounded-md relative'>
                    <img className='w-56 absolute -top-5 left-1/2 transform 
                    -translate-x-1/2 -translate-y-1/2 duration-500' src={cart_3} alt="popular_image" />
                    <p className='italic'>Spathiphyllum wallisii</p>
                    <h3>Peace Lily</h3>

                    <div className='text-yellow-500 text-xs py-3'>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                        <i className="ri-star-line text-gray-400"></i>
                        <i className="ri-star-line text-gray-400"></i>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='text-xl'>$5</p>

                        <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl'>
                            <i className="ri-shopping-cart-fill"></i>
                        </button>
                    </div>
                </div>

                {/* card 4 */}
                <div className='popular_card bg-green-950 p-10 pt-24 rounded-md relative'>
                    <img className='w-56 absolute -top-5 left-1/2 transform 
                    -translate-x-1/2 -translate-y-1/2 duration-500' src={cart_4} alt="popular_image" />
                    <p className='italic'>Adenium obesum</p>
                    <h3>Desert Rose</h3>

                    <div className='text-yellow-500 text-xs py-3'>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                        <i className="ri-star-line text-gray-400"></i>
                        <i className="ri-star-line text-gray-400"></i>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='text-xl'>$5</p>

                        <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl'>
                            <i className="ri-shopping-cart-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular
