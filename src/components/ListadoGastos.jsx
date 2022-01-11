
import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, setGastos, gastosFiltrados, filtro}) => {


    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos': 'no hay gastos'}</h2>

            {filtro ? (
                gastosFiltrados.map( gasto =>(
                    <Gasto key={gasto.id} setGastoEditar={setGastoEditar} setGastos={setGastos} gasto={gasto} />
                ))
            ):(
                gastos.map( gasto =>(
                    <Gasto key={gasto.id} setGastoEditar={setGastoEditar} setGastos={setGastos} gasto={gasto} />
                )) 
            )}

        
        </div>
    )
}

export default ListadoGastos
