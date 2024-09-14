import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';
import { BsBank2 } from "react-icons/bs";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user} = useContext(AuthContext);
    console.log(user)

    // toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    // navItem
    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Shop", path: "/shop"},
        {link: "Sell Your Book", path: "/admin/dashboard"},
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-24 ${isSticky ? "sticky top-0 left-0 right-0 bg-black" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/* logo */}
                <Link to = "/" className='text-2xl font-bold text-white flex items-center gap-2'><BsBank2 className='inline-block'/>Baca Yuk</Link>

                {/* nav item untuk ukuran large  */} 
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) =>  <Link key = {path} to = {path} className='block text-base text-white uppercase cursor-pointer hover:text-yellow-400 font-serif'>{link}</Link>)
                    }
                </ul>

                {/* btn untuk lg devices */}
               <div className='space-x-12 hidden lg:flex items-center'>

               </div>
                
                {/* menu btn untuk mobile device */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-white'/> : <FaBarsStaggered className='h-5 w-5 text-white'/>
                        }
                    </button>
                </div>
            </div>
            
            {/* navItems ketika ukuran mobile */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "Block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) =>  <Link key = {path} to = {path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>)
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar