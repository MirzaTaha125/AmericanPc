import React from "react";

const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="success-icon">✓</div>
          <h2 className="modal-title">Thank You!</h2>
          <p className="modal-message">
            We have received your message and will contact you shortly.
          </p>
          <p className="modal-submessage">
            Our team will get back to you within 24 hours.
          </p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
