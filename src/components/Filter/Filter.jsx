import { useDispatch } from "react-redux"
import { findContact } from "../../redux/find/findSlice"
import x from './Filter.module.css'

export const Filter = () => {

    const dispatch = useDispatch()
    
    return (
        <div className={x.filter}>
            <p>Find contacts by name</p>
            <input onInput={(e) => dispatch(findContact(e.target.value))} id="filterInput" type="text" />
        </div>
    )
}