import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto%',
    bottom: 'auto',
    marginRight: '10%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function App({ book }) {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#495057';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Saiba Mais</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 ref={(_subtitle) => (subtitle = _subtitle)}>{book.title}</h1>
        <div>
          <h6>{book.author}</h6><br />
          <p>{book.description}</p>
          </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
