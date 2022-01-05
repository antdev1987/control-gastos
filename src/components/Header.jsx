import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({presupuesto,setPresupuesto,isValidPresupuesto, setIsValidPresupuesto}) => {

   return (
      <header>

         <h1>Planificador de Gatos</h1>

         {/* se muestra si hay presupuesto valido*/}
         {isValidPresupuesto && (
            <ControlPresupuesto presupuesto={presupuesto} />
         )}
         {/* se muestra si no hay presupuesto valido */}
         {!(isValidPresupuesto) && (
            <NuevoPresupuesto 
               presupuesto={presupuesto}
               setPresupuesto={setPresupuesto}
               setIsValidPresupuesto={setIsValidPresupuesto}
            />
         )}

      </header>
   )

}

export default Header