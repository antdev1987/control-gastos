
import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos': 'no hay gastos'}</h2>

            {gastos.map( gasto =>(
                <Gasto key={gasto.id} />
            ))}
        </div>
    )
}

export default ListadoGastos