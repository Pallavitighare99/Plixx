import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { BsCollectionPlay } from 'react-icons/bs'
import { FaFacebook, FaMedium, FaTelegram, FaYoutube } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import MainDrawer from './MainDrawer'

function MenuuDrawer({ drawerOpen, toggleDrawer }) {
    const active = "bg-dry text-subMain"
    const hover = " hover:bg-dry"
    const inActive = "rounded sm:gap-10 font-medium text-sm transitions flex gap-3 items-center sm:px-8 px-4 py-4 items-center"
    const Hover = ({ isActive }) =>
        isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;


    const Links = [{
        name: "Movies",
        link: "/movies",
        icon: BsCollectionPlay
    },
    {
        name: "About Us",
        link: "/about-us",
        icon: HiOutlineUserGroup
    },
    {
        name: "Contact Us",
        link: "/contact-us",
        icon: BiPhoneCall
    },
    ]
    const LinkDatas = [
        {
            icon: FaFacebook,
            link: ""
        },
        {
            icon: FaMedium,
            link: ""
        },
        {
            icon: FaTelegram,
            link: ""
        },
        {
            icon: FaYoutube,
            link: ""
        }

    ]
    return (
        <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
            <div className='flex flex-col w-full h-full justify-between items-center bg-main text-white rounded'>
                <div className='w-full flex justify-between items-center h-16 px-6 py-4 bg-dry'>
                    <Link
                        onClick={toggleDrawer}
                        to='/'>
                        <img
                            src='../../images/lloogo.png'
                            alt='plixx'
                            className='w-28 h-28 object-contain'
                        />
                    </Link>
                    <button
                        onClick={toggleDrawer}
                        type='button'
                        className='transitions w-12 h-12 font-bold flex flex-col justify-center items-center text-base font-medium text-subMain bg-white rounded-full hover:bg-subMain hover:text-white'>
                        <IoClose />
                    </button>
                </div>
                <div className='w-full overflow-y-scroll flex-grow max-height-full'>
                    <div className='pb-12 pt-4'>
                        {
                            Links.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.link}
                                    onClick={toggleDrawer}
                                    className={Hover}>
                                    <item.icon className='text-lg' /> {item.name}
                                </NavLink>
                            ))
                        }
                    </div>
                    <div className='flex flex-row justify-center items-center gap-6 w-full'>
                        {
                            LinkDatas.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.link}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='flex flex-col justify-center items-center w-12 h-12 transitions hover:bg-subMain text-lg bg-white rounded bg-opacity-30'>
                                    <link.icon />
                                </a>
                            ))
                        }

                    </div>
                </div>
            </div>
        </MainDrawer>
    )
}

export default MenuuDrawer