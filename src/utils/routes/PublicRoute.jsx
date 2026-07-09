import { selectLogin } from "../../redux/users/usersSelectors"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"

export const PublicRoute = ({children, restricted = false}) => {
    const login = useSelector(selectLogin)

    const shouldRedirect = login && restricted
    return shouldRedirect ? <Navigate to="/contacts"/> : children
}