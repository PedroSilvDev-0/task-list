import './index.scss'
import Adicionar from '../../icons/Adicionar.svg'
import { useState } from 'react';
import ModalAdicionar from '../Modal/ModalAdicionar';

const AdicionarDado = () => {
  
  const [isOpenAdicionar, setIsOpenAdicionar] = useState(false); 
  
  return (
    <div className='add'>
        <div className='add--div'>
        <div className='itens--space--start'><label className='text-label-adicionar'> Nova tarefa... </label></div>
        <div className='itens--space--center'></div>
        <div className='add--space--end'>
          <button className="primaryBtn" onClick={() => setIsOpenAdicionar(true)}>
          <img className='adicionar' src={Adicionar} alt="Error"/>
          </button>
        </div>

        {isOpenAdicionar && <ModalAdicionar setIsOpenAdicionar = {setIsOpenAdicionar} />}
      </div>
    </div>
  )
}

export default AdicionarDado