import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'

import generateId from './helper/generateId'

import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

   // const [presupuesto, setPresupuesto] = useState(0)
   const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('budget')) ?? 0)
   // const [presupuesto, setPresupuesto] = useState(0)

   const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
   const [modal, setModal] = useState(false)
   const [gastos, setGastos] = useState(
      JSON.parse(localStorage.getItem('gastosBd') ?? '[]')
   )
   const [gastoEditar, setGastoEditar] = useState({})
   const [filtro,setFiltro] = useState('')
   const [gastosFiltrados,setGastosFiltrados] = useState([])


   useEffect(() => {
      localStorage.setItem('budget', presupuesto)
   }, [presupuesto])


   useEffect(() => {
      if (presupuesto > 0) {
         setIsValidPresupuesto(true)
      }
   }, [])

   useEffect(() => {

      if(filtro){
         const filtrados = gastos.filter((item)=>{
            return item.categoria === filtro
         })
         setGastosFiltrados(filtrados)
      }

      
   }, [filtro])


   useEffect(() => {

      localStorage.setItem("gastosBd", JSON.stringify(gastos));

   }, [gastos])


   useEffect(() => {

      if (!!Object.entries(gastoEditar).length) {
         setModal(true)
      }
   }, [gastoEditar])


   const handleModal = () => {
      setModal(true)
      setGastoEditar({})
   }


   const guardarGasto = (gasto) => {

      if (!!Object.entries(gastoEditar).length) {
         gasto.id = gastoEditar.id
         gasto.fecha = gastoEditar.fecha
         setGastos((prev) => {
            return prev.map((item) => {
               return item.id === gastoEditar.id ? gasto : item
            })
         })
         console.log('aqui')
         setGastoEditar({})
         return
      }


      gasto.id = generateId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
   }

   return (

      <div>
         <Header
            gastos={gastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
         />


         {isValidPresupuesto && (
            <>
               <main>
                  <Filtros
                     filtro={filtro}
                     setFiltro={setFiltro}
                  />
                  <ListadoGastos
                     setGastoEditar={setGastoEditar}
                     gastos={gastos}
                     setGastos={setGastos}
                     gastosFiltrados={gastosFiltrados}
                     filtro={filtro}
                  />
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

         {modal && (
            <Modal
               guardarGasto={guardarGasto}
               gastoEditar={gastoEditar}
               modal={modal}
               setModal={setModal}
               setGastos={setGastos}
               setGastoEditar={setGastoEditar}
            />
         )}

      </div>

   )
}

export default App