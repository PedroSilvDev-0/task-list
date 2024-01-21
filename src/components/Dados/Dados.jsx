import './index.scss'

const Dados = ({ data }) => {

  return (
    


      <div className='itens--div'>
        <div className='itens--space--start'><label className='text-label'> {data.title} </label></div>
        <div className='itens--space--center'><input type="checkbox" name="myCheckbox" checked={data.completed} /></div>
        
 
    </div>

  )
}

export default Dados