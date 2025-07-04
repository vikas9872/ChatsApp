// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { SERVER_URL } from '../src/main'
// import { useDispatch, useSelector } from 'react-redux'
// import { setUserData } from '../src/Redux/userSlice'

// const getCurrentUser = () => {
//     const dispatch=useDispatch()
//     const {userData}=useSelector(state=>state.user)
//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 let res=await axios.get(`${SERVER_URL}/api/user/current`,{withCredentials:true})
//                 dispatch(setUserData(res.data))
//             } catch (error) {
//                 console.log("Error in getCurrentUser: ",error)
//             }
//         }
//         fetchUser()
//     },[userData])
// }

// export default getCurrentUser


import axios from 'axios'
import { useEffect } from 'react'
import { SERVER_URL } from '../src/main'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../src/Redux/userSlice'

const useCurrentUser = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.user)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                let res = await axios.get(`${SERVER_URL}/api/user/current`, { withCredentials: true })
                dispatch(setUserData(res.data))
            } catch (error) {
                console.log("Error in getCurrentUser: ", error)
            }
        }
        fetchUser()
    }, [dispatch])
    return userData
}

export default useCurrentUser