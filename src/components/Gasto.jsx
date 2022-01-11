import React from 'react'

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

import formatFecha from '../helper/formatFecha'

const Gasto = ({ gasto, setGastoEditar, setGastos }) => {



    const deleting =()=>{
       
        setGastos((prev)=>{
            return prev.filter((item)=>{
                return item.id !== gasto.id
            })
        })
    }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={deleting}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    );


    const diccionario = {
        ahorro: IconoAhorro,
        casa: IconoCasa,
        comida: IconoComida,
        gastos: IconoGastos,
        ocio: IconoOcio,
        salud: IconoSalud,
        suscripciones: IconoSuscripciones
    }

    return (

        <SwipeableList>
            <SwipeableListItem
             leadingActions={leadingActions()}
             trailingActions={trailingActions()}
            >

                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        {<img
                            src={diccionario[gasto.categoria]}
                            alt='categorias imagenes'
                        />}
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{gasto.categoria}</p>
                            <p className='nombre-gasto'>{gasto.nombre}</p>
                            <p className='fecha-gasto'>
                                Agregado el: {''}
                                <span>{formatFecha(gasto.fecha)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>{gasto.cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto
