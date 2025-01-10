import React, { useState } from 'react';
import './BasicModal.scss'; 


function openModal(setOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  setOpen(true);
}


function closeModal(setOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  setOpen(false);
}

const BasicModal = () => {
  const [open, setOpen] = useState(false);  

  return (
    <div className="modal-container">

      <button className="open-modal-button" onClick={() => openModal(setOpen)}>
        Open modal
      </button>
      

      {open && (
        <div className="modal-overlay" onClick={() => closeModal(setOpen)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Text in a modal</h2>
            <p className="modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicModal;
