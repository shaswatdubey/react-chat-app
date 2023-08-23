import React from 'react';
import Modal from 'react-modal';
import { dummydata } from './dummydata';

Modal.setAppElement('#root');

function CreateConversationPopup({ isOpen, onClose, onConversationCreated }) {
  const handleContactClick = (contactId) => {
    const existingConversation = dummydata.find((conv) => conv.id === contactId);
    if (existingConversation) {
      onConversationCreated(existingConversation);
    } else {
      // Create a new conversation
      const newConversation = {
        id: contactId,
        contactName: "New Contact",
        messages: [],
      };
      onConversationCreated(newConversation);
    }
    onClose();
  };

  return (
<Modal isOpen={isOpen} onRequestClose={onClose} className="modal-content">
  <div className="message-list message-input">
    <h2 className="modal-header">Create Conversation</h2>
    <ul className="contact-list">
      {dummydata.map((contact) => (
        <li
          key={contact.id}
          className="contact-item"
          onClick={() => handleContactClick(contact.id)}
        >
          {contact.contactName}
        </li>
      ))}
    </ul>
    <button className="cancel-button" onClick={onClose}>
      Cancel
    </button>
  </div>
</Modal>

  );
}

export default CreateConversationPopup;
