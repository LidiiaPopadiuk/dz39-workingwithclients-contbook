import x from "./UserInfo.module.css";
import { useSelector } from "react-redux";
import {
    selectUserEmail,
    selectUserName,
} from "../../redux/users/usersSelectors";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/users/usersOperation";

export const UserInfo = () => {
    const dispatch = useDispatch()

    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);

    return (
        <div className={x.userInfo}>
            <div className={x.avatar}>
                {userName?.charAt(0).toUpperCase()}
            </div>

            <div className={x.userData}>
                <p>
                    <span>Name:</span> {userName}
                </p>
                <p>
                    <span>Email:</span> {userEmail}
                </p>
            </div>
            
            <button onClick={() => dispatch(logOutUser())} className={x.logoutBtn}>
                Log Out
            </button>
        </div>
    );
};