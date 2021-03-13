import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import "./modalWrapper.scss";
const ModalWrapper = ({ isOpen, setIsOpen, title, children }) => {
  useEffect(() => {
    Modal.setAppElement("body");
  });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Modal"
      className={{
        base: "modal-base",
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close",
      }}
      shouldCloseOnOverlayClick={true}
    >
      <div className="modalWrapper__header">
        <div className="modalWrapper__header__title">{title}</div>
        <div
          onClick={() => setIsOpen(false)}
          className="modalWrapper__header__close"
        >
          <IoCloseSharp size={30} />
        </div>
      </div>

      <div className="modalWrapper__content">{children}</div>

      {/* <button onClick={onRequestClose}>Close</button> */}
    </Modal>
  );
};

export default ModalWrapper;
