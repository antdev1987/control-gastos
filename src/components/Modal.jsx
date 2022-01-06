import { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, modal }) => {

    const [animarModal, setAnimarModal] = useState(false)
    const [inputs, setInputs] =useState({nombre:'',cantidad:0,categoria:''})

    useEffect(() => {

        setTimeout(() => {
            setAnimarModal(true)
        }, 700);

    }, [modal])


    const ocultarModal = () => {

        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 700);

    }

    const handleInputs=(e)=>{

        let value = e.target.value
 
        setInputs((prev)=>{
            if(e.target.name === 'cantidad'){
                return {
                    ...prev,
                    [e.target.name]: Number(value)
                }
            }

            return {
                ...prev,
                [e.target.name]: value
            }
        })
    }


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt='ocultar modal'
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>

                <legend>Nuevo Gasto</legend>

                <div className='campo'>
                    <label htmlFor='nombre'>Nombre gasto</label>
                    <input
                        id='nombre'
                        type='text'
                        name='nombre'
                        placeholder='Anade nombre de gasto'
                        value={inputs.nombre}
                        onChange={handleInputs}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        id='cantidad'
                        type='number'
                        name='cantidad'
                        placeholder='Ingresa una canitdad'
                        value={inputs.cantidad}
                        onChange={handleInputs}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>

                    <select
                        id='categoria'  
                        name='categoria'
                        value={inputs.categoria}
                        onChange={handleInputs}
                        >
                        <option value=''> -- Seleccione --</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida</option>
                        <option value='casa'>Casa</option>
                        <option value='gastos'>Gastos Varios</option>
                        <option value='ocio'>Ocio</option>
                        <option value='salud'>Salud</option>
                        <option value='suscripciones'>Suscripciones</option>
                    </select>
                </div>

                <input 
                    type='submit'
                    value='Enviar Gasto'
                />

            </form>
        </div>
    )

}

export default Modal