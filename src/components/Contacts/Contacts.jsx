import css from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <div>
            <p className={css.contactName}>{name}</p>
            <p className={css.contactNumber}>{number}</p>
          </div>
          <button
            type="button"
            className={css.deleteButton}
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
