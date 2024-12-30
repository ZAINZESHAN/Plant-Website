import React, { useEffect } from 'react'
import plant_1 from '../assets/plant-1.png'
import plant_2 from '../assets/plant-2.png'
import leaf_3 from '../assets/leaf-3.png'
import ScrollReveal from 'scrollreveal'

const About = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: true
        })

        sr.reveal(`.about_data`, { interval: 100 }) // Staggered animation
        sr.reveal(`.about_leaf`, { delay: 1000, origin: 'right' })
        sr.reveal(`.about_item_1-content , .about_item_2-img`, { origin: 'right' })
        sr.reveal(`.about_item_2-content , .about_item_1-img`, { origin: 'left' })
    }, []);

    return (
        <section id='about' className='relative overflow-hidden'>
            <div className='about_leaf absolute -top-8 -right-12 opacity-50'>
                <img className='w-40 md:w-52 xl:w-64' src={leaf_3} alt="leaf_image" />
            </div>
            <div className='about_data flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
                <h2 className='title'>About Us</h2>
                <p className='max-w-2xl'>Follow Instruction for more</p>
            </div>

            <div className='container space-y-10 xl:space-y-0'>
                {/* item 1 */}
                <div className='flex flex-col items-center lg:flex-row gap-5'>
                    {/* image */}
                    <div className='about_item_1-img w-full lg:w-1/2'>
                        <img className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto' src={plant_1} alt='about_image' />
                    </div>
                    {/* content */}
                    <div className='about_item_1-content w-full lg:w-1/2'>
                        <div className='space-y-5'>
                            <h3>
                                Make your <span className='text-yellow-500'>organic</span>
                                <br />
                                garden
                            </h3>
                            <p className='text-slate-300 font-Lobster'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                                cumque eos expedita corrupti aperiam, reprehenderit iste
                                laboriosam architecto sed inventore, accusantium ipsam, maiores
                                ipsum nemo nam nostrum laudantium dolores culpa! reprehenderit iste
                                laboriosam architecto sed inventore!
                            </p>
                        </div>
                    </div>
                </div>
                {/* item 2 */}
                <div className='flex flex-col items-center lg:flex-row-reverse gap-5'>
                    {/* image */}
                    <div className='about_item_2-img w-full lg:w-1/2'>
                        <img className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto' src={plant_2} alt='about_image' />
                    </div>
                    {/* content */}
                    <div className='about_item_2-img w-full lg:w-1/2'>
                        <div className='space-y-5'>
                            <h3>
                                Come with us <br /><span className='text-yellow-500'>grow up</span>
                                your plant
                            </h3>
                            <p className='text-slate-300 font-Lobster'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                                cumque eos expedita corrupti aperiam, reprehenderit iste
                                laboriosam architecto sed inventore, accusantium ipsam, maiores
                                ipsum nemo nam nostrum laudantium dolores culpa! reprehenderit iste
                                laboriosam architecto sed inventore!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
