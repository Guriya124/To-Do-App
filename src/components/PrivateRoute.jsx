import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"


export default function PrivateRoute() {
    const currentuser = useSelector(state => state.user.currentUser)

  return currentuser ? <Outlet/> : <Navigate to='/sign-in'/>
}
