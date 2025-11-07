import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./styles/SeriePopUp.css"
import CastList from "./CastList";

export default function SeriePopUp({serie,mostrada,onOk}) {
    
    const ref = useRef(null);
    const [cast,setCast] = useState([])

    const transform_cast = (data) => {
        const transformed_data = data.map(item => ({
            actor: item.person.name,
            character: item.character.name,
            image: item.character.image?.original ?? null,
        })).slice(0,7)
        setCast(transformed_data)
    }

    useEffect(() => {
        if (mostrada && !ref.current.open) {
            fetch(`https://api.tvmaze.com/shows/${serie.id}/cast`)
                .then (res => res.json())
                .then (data => transform_cast(data))
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
        <div id="casting-container">
            <h2>Casting: </h2>
            <CastList cast={cast}/>
        </div>

    </dialog>
}