import { useState } from "react";
import "./styles/Serie.css"
import SeriePopUp from "./SeriePopUp";
import { FaHeart } from "react-icons/fa";

export default function Serie({serie, onFavourite}) {

    const [mostrada,setMostrada] = useState(false)

    return (
        <li className="serie" onClick={() => setMostrada(true)}>
            <img src={serie.img} alt="Portada"></img>
            <span>{serie.nombre}</span>
            <FaHeart className={`favourite-icon ${serie.favourite ? "favourite":""}`} onClick={(e) => {
                e.stopPropagation();
                onFavourite(serie.id)
                }}>
            </FaHeart>
            <SeriePopUp serie={serie} mostrada={mostrada} onOk={() => setMostrada(false)}/>

        </li>
    );

}