import React, { useState } from 'react';
import './AlertDialog.scss'; 

// ダイアログを開く関数
function openDialog(setOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  setOpen(true);
}

// ダイアログを閉じる関数
function closeDialog(setOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  setOpen(false);
}

const AlertDialog = () => {
  const [open, setOpen] = useState(false);  // ダイアログの開閉状態を管理

  return (
    <div className="dialog-container">
      <button className="open-dialog-button" onClick={() => openDialog(setOpen)}>
        Open alert dialog
      </button>
      
      {open && (
        <div className="dialog-overlay" onClick={() => closeDialog(setOpen)}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="dialog-title">
              Use Google's location service?
            </h2>
            <div className="dialog-content">
              <p className="dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </p>
            </div>
            <div className="dialog-actions">
              <button className="dialog-action-button" onClick={() => closeDialog(setOpen)}>
                Disagree
              </button>
              <button className="dialog-action-button agree-button" onClick={() => closeDialog(setOpen)}>
                Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertDialog;
