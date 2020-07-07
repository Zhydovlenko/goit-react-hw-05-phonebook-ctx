import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactListItem
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
