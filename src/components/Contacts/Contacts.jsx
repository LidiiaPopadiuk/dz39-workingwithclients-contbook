import { selectFilter } from '../../redux/find/findSelectors'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contacts/contactsOperation'
import styled from 'styled-components'
import x from './Contacts.module.css'
import { selectAll } from '../../redux/contacts/contactsSlice'

const Button = styled.button`
padding: 10px 24px;
border - radius: 30px;
border: 2px solid #ff9500;
background: transparent;
color: white;
font - size: 15px;
font - weight: 600;
cursor: pointer;
transition: .3s;
&:hover{
    background: #ff9500;
    box - shadow: 0 0 15px #ff9500;
}`;


export const Contacts = () => {
    const dispatch = useDispatch()

    const contacts = useSelector(selectFilter)
    const allContacts = useSelector(selectAll)
    console.log("contacts", contacts);

    const noContacts = allContacts.length === 0;

    return (
        <div className={x.contacts}>
            <h2>Contacts</h2>
            {contacts.length === 0 ? (
                <div className={x.noContacts}>
                    <h3>
                        {noContacts ? "📭 No contacts yet" : "🔍 No contacts found"}
                    </h3>

                    <p>
                        {noContacts
                            ? "Add your first contact to get started."
                            : "Try another name or clear the search."}
                    </p>
                </div>
            ) : (
                <ul>
                    {contacts.map(contact => {
                        return <li key={contact.id}>
                            <div className={x.contactInfo}>
                                <strong>{contact.name} :</strong>
                                <span>{contact.number}</span>
                            </div>
                            <Button id={contact.id} onClick={() => dispatch(deleteContact(contact.id))}>Delete</Button>
                        </li>
                    })}
                </ul>
            )}
        </div>
    )
}