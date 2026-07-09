import { useSelector } from "react-redux"
import { selectLogin } from "../../redux/users/usersSelectors"
import { Navigate } from "react-router"

export const PrivateRoute = ({children}) => {
    const login = useSelector(selectLogin)

    return login ? children : <Navigate to="/"/>
}