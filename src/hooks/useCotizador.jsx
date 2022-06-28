import { useContext } from "react";
import CotizadorContext from "../constants/CotizadorProvider";

const useCotizador = () =>{
    return(
        useContext(CotizadorContext )
    )
}

export default useCotizador