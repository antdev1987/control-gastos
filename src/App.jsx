import { useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'

import generateId from './helper/generateId'

import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

   const [presupuesto, setPresupuesto] = useState(0)
   const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
   const [modal, setModal] = useState(false)
   const [gastos, setGastos] = useState([])


   const handleModal = () => {
      setModal(true)
   }


   const guardarGasto = (gasto) => {
      gasto.id = generateId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
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
            <>
               <main>
                  <ListadoGastos gastos={gastos}/>
               </main>

               <div className='nuevo-gasto'>
                  <img
                     src={IconoNuevoGasto}
                     alt='icono nuevo gasto'
                     onClick={handleModal}
                  />
               </div>
            </>
         )}

         {modal && (<Modal guardarGasto={guardarGasto} modal={modal} setModal={setModal} />)}

      </div>




   )
}

export default App
