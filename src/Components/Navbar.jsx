import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Updated to use react-scroll
import leaf_1 from '../assets/leaf-1.png';
import leaf_2 from '../assets/leaf-2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggler = () => {
        setIsOpen(!isOpen);
    };

    const handleLink = () => {
        setIsOpen(false);
    };

    const scrollHeader = () => {
        const header = document.getElementById('navbar');

        if (header) {
            if (window.scrollY >= 50) {
                header.classList.add("border-b", "border-yellow-500");
            } else {
                header.classList.remove("border-b", "border-yellow-500");
            }
        } 
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []);

    return (
        <div id='navbar' className='bg-green-950 fixed w-full top-0 left-0 z-50'>
            <nav className='container flex items-center justify-between h-16 sm:h-20'>
                <div className='font-Lobster flex items-center sm:text-2xl'>IndorePlants.</div>
                <div
                    className={`absolute top-0 min-h-[80vh] w-full 
                    bg-green-950/80 backdrop-blur-sm flex items-center justify-center lg:justify-end
                    duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto ${isOpen ? 'left-[0]' : 'left-[-100%]'}`}
                >
                    <ul className='flex flex-col lg:flex-row items-center gap-8'>
                        <li className='nav-link'>
                            <Link 
                                onClick={handleLink} 
                                to='home' 
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-link'>
                            <Link 
                                onClick={handleLink} 
                                to='about' 
                            >
                                About
                            </Link>
                        </li>
                        <li className='nav-link'>
                            <Link 
                                onClick={handleLink} 
                                to='popular' 
                            >
                                Popular
                            </Link>
                        </li>
                        <li className='nav-link'>
                            <Link 
                                onClick={handleLink} 
                                to='review' 
                            >
                                Review
                            </Link>
                        </li>
                    </ul>
                    <div className='absolute bottom-0 -right-10 opacity-90 lg:hidden'>
                        <img className='w-32' src={leaf_1} alt='' />
                    </div>
                    <div className='absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden'>
                        <img className='w-32' src={leaf_2} alt='' />
                    </div>
                </div>
                <div className='flex items-center text-xl sm:text-3xl cursor-pointer z-50 lg:hidden'>
                    <i onClick={handleToggler} className={isOpen ? 'ri-close-large-line' : 'ri-menu-4-line'}></i>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
