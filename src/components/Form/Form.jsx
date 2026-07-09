import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/contacts/contactsOperation'
import x from './Form.module.css'
import { selectAll } from '../../redux/contacts/contactsSlice'
import { useState } from 'react'


export const Form = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(selectAll)
    const [message, setMessage] = useState('')
    console.log(contacts);
    

    const inputsData = (e) => {
        e.preventDefault()

        const name = e.target.elements.name.value
        const number = e.target.elements.number.value

        const nameUpper = name.toUpperCase();

        const nameExist = contacts.some((contact) => {
            console.log("contact", contact);
            
            return contact.name.toUpperCase() === nameUpper;
        });

        const numberExist = contacts.some((contact) => {
            return contact.number === number;
        });

          if (nameExist) {
            setMessage(`${name} is already in contacts!`);
            return;
          }

          if (numberExist) {
            setMessage(`${number} is already exist!`);
            return;
          }

        dispatch(addContact({name, number}))
        setMessage("");

        e.target.reset()
    }

    return (
        <form onSubmit={inputsData} className={x.formClas}>

            <label htmlFor="input">Name</label>
            <input
                id="input"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />

            <label htmlFor="input2">Number</label>
            <input
                className={x.formClas}
                id="input2"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <button type="submit" >Add Contact</button>
            {message && <p className={x.message}>{message}</p>}
        </form>
    )
}