import React from "react";
import "../Modal/index.scss"

const Modal = ({ setIsOpen }) => {
  return (
    <>
        <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
        <div className="modal">

          <div className="modalHeader">
            <h1 className="title-modal">Deseja excluir esse item?</h1>
          </div>

          <div className="modal-content">
          Colocar as descrições das tarefas aqui.
          </div>

          <div className="modalActions">
            <div className="actionsContainer">
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Não
              </button>
              <button
                className="deleteBtn"
                onClick={() => setIsOpen(false)}
              >
                Sim
              </button>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Modal;