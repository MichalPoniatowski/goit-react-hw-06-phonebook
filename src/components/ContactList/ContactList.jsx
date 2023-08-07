import { useSelector } from 'react-redux';

import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactList = ({ children }) => {
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // console.log(contacts, filter);

  return (
    <div className={css.list}>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
