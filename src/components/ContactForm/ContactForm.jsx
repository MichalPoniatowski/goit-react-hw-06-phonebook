import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handlesubmit = event => {
    const form = event.target;
    event.preventDefault();
    const nameValue = event.target.elements.name.value;
    const numberValue = event.target.elements.number.value;
    dispatch(addContact({ name: nameValue, number: numberValue }));
    form.reset();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handlesubmit} className={css.contact}>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+( [a-zA-Z]+)?$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Type name as John Doe"
        />
        <span>Number:</span>
        <input
          type="tel"
          name="number"
          pattern="^\d{1,3}([- ]?\d{1,3}){2,3}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Type number as 000-00-00"
        />
        <button type="submit" className={css.contact__button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
