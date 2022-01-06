import { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, modal }) => {

    const [animarModal, setAnimarModal] = useState(false)


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

            </form>
        </div>
    )

}

export default Modal