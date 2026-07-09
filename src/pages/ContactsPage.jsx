
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/contactsOperation";
import { Form } from "../components/Form/Form";
import { Filter } from "../components/Filter/Filter";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { Contacts } from "../components/Contacts/Contacts";

const Title = styled.h2`
 text-align: center;
  color: #ff9500;
  font-size: 34px;
  margin-bottom: 35px;
`;

const Div = styled.div`
  width: 850px;
  margin: 40px auto;
  padding: 40px;

  background: #1a1a2e;

  border: 2px solid #ff9500;
  border-radius: 20px;

  box-shadow: 0 0 25px #ff9500;

  display: flex;
  flex-direction: column;
`;

export const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <Div className="App">
      <UserInfo />
      <Form />
      <Title>My Contacts</Title>
      <Filter />
      <Contacts />
    </Div>
  );
};

export default ContactsPage;