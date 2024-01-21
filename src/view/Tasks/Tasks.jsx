import Header from '../../components/Header/Header'
import './index.scss'
import Dados from '../../components/Dados/Dados'
import React, {useState} from "react";
import Editar from '../../icons/Editar.svg'
import Excluir from '../../icons/Excluir.svg'
import ModalExcluir from '../../components/Modal/ModalExcluir'
import ModalAlterar from '../../components/Modal/ModalAlterar'
import AdicionarDado from '../../components/Dados/AdicionarDado';
import Footer from '../../components/Footer/Footer';

const Tasks = ({data}) => {

  const [isOpenExcluir, setIsOpenExcluir] = useState(false);
  
  const [isOpenAlterar, setIsOpenAlterar] = useState(false);  

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
          </div>

        {data.map((data) => (
            <div key={data.id} className='main2'>
            <Dados data={data} />
            <div>
              <button className="primaryBtn" onClick={() => {
                setIsOpenAlterar(true)
              }}>
              <img className='editar' src={Editar} alt="Error"/>
              </button>
              <button className="primaryBtn" onClick={() => setIsOpenExcluir(true)}>
              <img className='excluir' src={Excluir} alt="Error"/>
              </button>
            </div>
            {isOpenExcluir && <ModalExcluir data={data} setIsOpenExcluir={setIsOpenExcluir} />}
            {isOpenAlterar && <ModalAlterar data={data} setIsOpenAlterar = {setIsOpenAlterar} />}
          </div> 
        ))}
               

          <AdicionarDado/>
          
          <Footer/>
  </div>
  )
}

export default Tasks