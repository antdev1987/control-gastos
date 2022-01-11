import {useState,useEffect} from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({presupuesto,gastos}) => {

    const [gastado,setGastado] = useState(0)
    const [disponible,setDisponible] = useState(0)
    const [porcentaje,setPorcentaje] = useState(0)

    console.log('ejecutandose')
    
    useEffect(()=>{

        const totalGastado = gastos.reduce((total,gasto)=>{
            return gasto.cantidad + total
        },0)

        const dispo = presupuesto - totalGastado

        const nuevoPorcentaje =(((presupuesto - dispo) /presupuesto) *100).toFixed(2)

        setGastado(totalGastado)
        setDisponible(dispo)

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1500);
        
    },[gastos])
    


    const formatearCantidad = (cantidad)=>{
        return cantidad.toLocaleString('es-MX',{
            style: 'currency',
            currency:'HNL'
        })
    }
    

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

            <div>
                <CircularProgressbar value={porcentaje} text={`${porcentaje}%`} />
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>

                <p>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>

                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
            
        </div>
    )
}

export default ControlPresupuesto 
