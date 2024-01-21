import React from "react";
import "../Modal/index.scss"
import { useState } from "react";

const ModalExcluir = ({setIsOpenExcluir, data}) => {
  
  const [valor, setValor] = useState(data.description)
    const handleChange = (event) => {
      setValor(event.target.value)
    } 
  
  return (
    <>
        <div className="darkBG" onClick={() => setIsOpenExcluir(false)} />
        
        <div className="centered">
        <div className="modal">

          <div className="modalHeader">
            <h1 className="title-modal"> Deseja excluir esse item? </h1>
          </div>

          <div className="modal-content">
          <input className="title-modal" value={data.title}/>
          <p>Descrição da Tarefa: </p>
          <textarea className="inputDesc" type="text" textArea value={valor} onChange={handleChange} />
          </div>

          <div className="modalActions">
            <div className="actionsContainer">
              <button className="cancelBtn" onClick={() => setIsOpenExcluir(false)}>
                Não
              </button>
              <button
                className="deleteBtn"
                onClick={() => setIsOpenExcluir(false)}
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
export default ModalExcluir;