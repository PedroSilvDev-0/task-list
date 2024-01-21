import React from "react";
import "../Modal/index.scss"
import { useState } from "react";

const ModalAdicionar = ({setIsOpenAdicionar}) => {
  
  const [valor, setValor] = useState()
    const handleChange = (event) => {
      setValor(event.target.value)
    } 
  
  return (
    <>
        <div className="darkBG" onClick={() => setIsOpenAdicionar(false)} />
        
        <div className="centered">
        <div className="modal">

          <div className="modalHeader">
          <h1 className="title-modal"> Deseja adicionar esse item? </h1>
          </div>

          <div className="modal-content">
          <input className="title-modal" placeholder="Escreva a tarefa..."/>
          <p>Descrição da Tarefa: </p>
          <textarea className="inputDesc" type="text" textArea placeholder="Escreva a descrição..."  onChange={handleChange} />
          </div>

          <div className="modalActions">
            <div className="actionsContainer">
              <button className="cancelBtn" onClick={() => setIsOpenAdicionar(false)}>
                Não
              </button>
              <button
                className="deleteBtn"
                onClick={() => setIsOpenAdicionar(false)}
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

export default ModalAdicionar;