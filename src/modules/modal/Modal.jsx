import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Link to open the modal */}
      <Link
        href="#"
        onClick={openModal}
        style={{ textDecoration: "none", color: "black" }}
      >
        £0.00
      </Link>

      {/* Modal element */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times; {/* Close button */}
            </span>
            <h2>Shopping Cart</h2>
            <p>Add YOur Items in it </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
