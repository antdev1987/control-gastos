import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

   const [presupuesto, setPresupuesto] = useState(0)
   const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
   const [modal,setModal]= useState(false)


   const handleModal =()=>{
      setModal(true)
   }


   const guardarGasto =(gasto)=>{
      console.log(gasto)
   }

   return (

      <div>
         <Header
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
         />


         {isValidPresupuesto && (
            <div className='nuevo-gasto'>
               <img
                  src={IconoNuevoGasto}
                  alt='icono nuevo gasto'
                  onClick={handleModal}
               />
            </div>
         )}

         {modal && (<Modal guardarGasto={guardarGasto} modal={modal} setModal={setModal}/>)}

      </div>




   )
}

export default App
