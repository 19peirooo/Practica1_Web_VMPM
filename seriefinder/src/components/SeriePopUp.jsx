import { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import "./styles/SeriePopUp.css"

export default function SeriePopUp({serie,mostrada,onOk}) {
    
    const ref = useRef(null);


    useEffect(() => {
        if (mostrada && !ref.current.open) {

            ref.current.showModal();
        }
        if (!mostrada && ref.current.open) {
            ref.current.close();
        }
    },[mostrada])

    const closePopup = () => {
        ref.current.close();
        onOk()
    }

    return <dialog ref={ref} onClose={onOk} className="pop-up">
        <div onClick={closePopup} id='close-btn'><RxCross2 ></RxCross2></div>
        <img src={serie.img} alt="Portada"/>
        <h1>{serie.nombre}</h1>
        <div dangerouslySetInnerHTML={{__html: serie.resumen}}></div> 
    </dialog>
}