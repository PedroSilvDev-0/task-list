import Header from '../../components/Header/Header'
import './index.scss'
import Dados from '../../components/Dados/Dados'
import React, {useState} from "react";
import Editar from '../../icons/Editar.svg'
import Excluir from '../../icons/Excluir.svg'
import ModalExcluir from '../../components/Modal/ModalExcluir'
import ModalAlterar from '../../components/Modal/ModalAlterar'
import AdicionarDado from '../../components/Dados/AdicionarDado';

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

          <div className='main2'>
            <Dados data={data[0]} />
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
            {isOpenExcluir && <ModalExcluir data={data[0]} setIsOpenExcluir={setIsOpenExcluir} />}
            {isOpenAlterar && <ModalAlterar data={data[0]} setIsOpenAlterar = {setIsOpenAlterar} />}
          </div>

          <div className='main2'>
            <Dados data={data[1]} />
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
            {isOpenExcluir && <ModalExcluir data={data[1]} setIsOpenExcluir={setIsOpenExcluir} />}
            {isOpenAlterar && <ModalAlterar data={data[1]} setIsOpenAlterar = {setIsOpenAlterar} />}
          </div>

          <div className='main2'>
            <Dados data={data[2]} />
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
            {isOpenExcluir && <ModalExcluir data={data[2]} setIsOpenExcluir={setIsOpenExcluir} />}
            {isOpenAlterar && <ModalAlterar data={data[2]} setIsOpenAlterar = {setIsOpenAlterar} />}
          </div>

          <div className='main2'>
            <Dados data={data[3]} />
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
            {isOpenExcluir && <ModalExcluir data={data[3]} setIsOpenExcluir={setIsOpenExcluir} />}
            {isOpenAlterar && <ModalAlterar data={data[3]} setIsOpenAlterar = {setIsOpenAlterar} />}
          </div>

          <div className='main2'>
            <Dados data={data[4]} />
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
            {isOpenExcluir && <ModalExcluir data={data[4]} setIsOpenExcluir={setIsOpenExcluir} />}
            {isOpenAlterar && <ModalAlterar data={data[4]} setIsOpenAlterar = {setIsOpenAlterar} />}
          </div>

          <AdicionarDado/>
  
  </div>
  )
}

export default Tasks