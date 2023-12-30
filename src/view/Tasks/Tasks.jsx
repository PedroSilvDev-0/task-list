import Header from '../../components/Header/Header'
import './index.scss'
import Editar from '../../icons/Editar.svg'
import Excluir from '../../icons/Excluir.svg'
import Adicionar from '../../icons/Adicionar.svg'
import Modal from '../../components/Modal/Modal'
import React, { useState } from "react";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='main'>
        <Header/>

        <h1 className='title-main'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

        <div  className='form'>
          <div className='form--titles'>
            <h1>Tarefa</h1>
            <h1>Status</h1>
            <h1>Opções</h1>
          </div>

          <div className='line'></div>

          <div className='itens'>
            <div className='itens--div'>
              <div className='itens--space--start'><label className='text-label'> Limpar a casa </label></div>
              <div className='itens--space--center'><input type="checkbox" name="myCheckbox" /></div>

              <div className='itens--space--end'>     
              <button className="primaryBtn" onClick={() => setIsOpen(true)}>
              <img className='editar' src={Editar} alt="Error"/>
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}

              <button className="primaryBtn" onClick={() => setIsOpen(true)}>
              <img className='excluir' src={Excluir} alt="Error"/>
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
              </div>
 
            </div>

            <div className='itens--div'>
              <div className='itens--space--start'><label className='text-label'> Responder e-mails </label></div>
              <div className='itens--space--center'><input type="checkbox" name="myCheckbox" /></div>
              
              <div className='itens--space--end'>
              <button className="primaryBtn" onClick={() => setIsOpen(true)}>
              <img className='editar' src={Editar} alt="Error"/>
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}

              <button className="primaryBtn" onClick={() => setIsOpen(true)}>
              <img className='excluir' src={Excluir} alt="Error"/>
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
              </div>
              
            </div>

            <div className='itens--div'>
              <div className='itens--space--start'><label className='text-label-adicionar'> Nova tarefa... </label></div>
              <div className='itens--space--center'></div>
              <div className='itens--space--end'>
                <img className='adicionar' src={Adicionar} alt="Error"/>
              </div>   
            </div>

          </div>
        </div>
    </div>
  )
}

export default Tasks