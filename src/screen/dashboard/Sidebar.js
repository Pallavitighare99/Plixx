import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaHeart, FaListAlt, FaUser } from 'react-icons/fa'
import { RiLockPasswordLine, RiLogoutCircleLine, RiMovie2Fill } from 'react-icons/ri'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiViewGridAdd } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import Layout from '../../layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../Redux/Actions/userAction'
import { toast } from 'react-hot-toast'


function Sidebar({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

   

    const {  userInfo } = useSelector((state) => state.userLogin);

    const logout = () => {
        dispatch(logoutAction())
        navigate("/login")
        toast.success("Logged Out Successfully")
    }

    const SideLink = 
        userInfo?.isAdmin ? ([
            {
                name: "Dashboard",
                link: "/dashboard",
                icon: BsFillGridFill
            },
            {
                name: "Movies List",
                link: "/movie-list",
                icon: FaListAlt
            },
            {
                name: "Add Movie",
                link: "/addMovie",
                icon: RiMovie2Fill
            },
            {
                name: "Categories",
                link: "/categories",
                icon: HiViewGridAdd
            },
            {
                name: "Users",
                link: "/users",
                icon: FaUser
            },
            {
                name: "Update Profile",
                link: "/profile",
                icon: FiSettings
            },
            {
                name: "Favourite Movies",
                link: "/favourite",
                icon: FaHeart
            },
            {
                name: "Change Password",
                link: "/password",
                icon: RiLockPasswordLine
            },
        ]
        ) : userInfo ? (
            [
            {
                name: "Movies List",
                link: "/movie-list",
                icon: FaListAlt
            },
            {
                name: "Update Profile",
                link: "/profile",
                icon: FiSettings
            },
            {
                name: "Favourite Movies",
                link: "/favourite",
                icon: FaHeart
            },
            {
                name: "Change Password",
                link: "/password",
                icon: RiLockPasswordLine
            },
        ] 
        ) 
        : (
            []
        )

    const active = "bg-dryGray text-subMain"
    const hover = "hover:text-white hover:bg-main"
    const inActive = "rounded font-medium text-sm transitions flex gap-3 items-center p-4"
    const Hover =({isActive}) =>
        isActive ?`${active} ${inActive}` : `${inActive} ${hover}`;
    
    
    return (
        <Layout>
            <div className='min-h-screen container mx-auto px-2'>
                <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
                    <div className='col-span-2 sticky bg-dry border-gray-800 p-6 rounded-md xl:mb-0 mb-6'>
                    {
                        SideLink.map((item, index) => (
                            <NavLink to={item.link} key={index} className={Hover}>
                                <item.icon/><p>{item.name}</p> 
                            </NavLink>
                        ))
                    }
                    { userInfo &&
                    <button onClick={logout} className={`${inActive} ${hover} w-full`}>
                        <RiLogoutCircleLine /> Log Out
                    </button>
                    }
                    </div>
                    <div 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay='10'
                    data-aos-offset='200'
                    className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'>
                        {children}
                        </div>
                </div>
            </div>


        </Layout>
    )
}

export default Sidebar