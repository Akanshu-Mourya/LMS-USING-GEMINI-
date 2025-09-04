import React from 'react'
import axios from 'axios'
import logo from '../assets/logo.jpg'
import { IoPersonCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { serverUrl } from '../App'
import { setUserData } from '../redux/userSlice';
import { toast } from 'react-toastify';
function Nav() {
    const { userData } = useSelector(state => state.user);
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const handleLogOut = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
            dispatch(setUserData(null))
            toast.success("Logout Successfully")
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className='w-full h-[70px] fixed top-0 px-5 py-2 flex items-center justify-between bg-[#00000047] z-10'>
            {/* Logo */}
            <div className='lg:w-[20%] w-[40%] lg:pl-[50px]'>
                <img src={logo} alt="Logo" className='w-[60px] rounded-md border-2 border-white' />
            </div>

            {/* Right section */}
            <div className='flex items-center justify-center gap-4'>
                {!userData && <IoPersonCircle className='w-[50px] h-[50px] fill-black cursor-pointer' />}

                {userData && <div className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center
                text-[20px] border-2 bg-black border-white cursor-pointer '>
                    {userData?.name.slice(0, 1).toUpperCase()}</div>}

                {userData?.role === "educator" && <div className='px-5 py-2 border-2 border-white text-white bg-black rounded-xl text-lg font-light cursor-pointer'>
                    Dashboard
                </div>
                }
                {!userData ? <span className='px-5 py-2 border-2 border-white text-white bg-[#000000d5] rounded-xl text-lg font-light cursor-pointer' onClick={() => navigate("/login")}>
                    Login
                </span> :

                    <span className='px-5 py-2 bg-white text-black rounded-xl shadow-sm shadow-black text-lg font-light cursor-pointer hover:bg-gray-200 transition' onClick={handleLogOut}>
                        LogOut
                    </span>}
            </div>
        </div>
    )
}

export default Nav


