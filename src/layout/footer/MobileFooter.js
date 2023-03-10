import React, { useContext } from 'react'
import { BsCollectionPlay } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { FiHeart, FiLogIn, FiUserCheck } from 'react-icons/fi'
import { CgMenuBoxed } from 'react-icons/cg'
import { SidebarContext } from '../../context/DrawerContext'
import MenuuDrawer from '../../components/Drawer/MennuDrawer'
import { useSelector } from 'react-redux'


function MobileFooter() {
    const { mobileDrawer, toggleDrawer } = useContext(SidebarContext)

    const {userInfo} = useSelector((state) => state.userLogin)

    const active = ""
    const inActive = "transitions text-2xl flex flex-col justify-center items-center hover:bg-white hover:text-main text-white rounded-md px-4 py-3"
    const Hover = ({ isActive }) => isActive ? `${active} ${inActive}` : inActive
    const {likedMovies} = useSelector((state) => state.userFavMovies)


    return (
        <>
            <div className='flex flex-col justify-between align-middle h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full'>
                {/*Drawer */}
                <MenuuDrawer drawerOpen={mobileDrawer} toggleDrawer={toggleDrawer} />

            </div>
            <footer className='lg:hidden fixed z-50 bottom-0 w-full px-1'>
                <div className='bg-dry rounded-md flex justify-between items-center w-full p-1'>
                    <NavLink to='/movies' className={Hover}>
                        <BsCollectionPlay />
                    </NavLink>
                    <NavLink to="/favourite" className={Hover}>
                        <div className='relative'>
                            <div className='w-5 h-5 flex flex-col justify-center items-center rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1 '>
                                {likedMovies?.length > 0 ? likedMovies?.length : 0}
                            </div>
                            <FiHeart />
                        </div>
                    </NavLink>
                    <NavLink to={userInfo ? userInfo.isAdmin ? '/dashboard' : '/profile' : '/login'} className={Hover}>
                        <FiUserCheck />
                    </NavLink>
                    <button
                        onClick={toggleDrawer}
                        className={inActive}>
                        <CgMenuBoxed />
                    </button>


                </div>
            </footer>
        </>
    )

}

export default MobileFooter