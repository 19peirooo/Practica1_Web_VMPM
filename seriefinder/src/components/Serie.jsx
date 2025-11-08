import { useState } from "react";
import "./styles/Serie.css"
import SeriePopUp from "./SeriePopUp";
import { FaHeart } from "react-icons/fa";

export default function Serie({serie, onFavourite, handleClick}) {

    const [mostrada,setMostrada] = useState(false);

    const clicked = () => {
        setMostrada(true)
        handleClick(serie.id)
    }

    return (
        <li className="serie" onClick={clicked}>
            <img src={serie.img} alt="Portada"></img>
            <span>{serie.nombre}</span>
            <FaHeart className={`favourite-icon ${serie.favourite ? "favourite":""}`} onClick={(e) => {
                e.stopPropagation();
                onFavourite(serie.id)
                }}>
            </FaHeart>
            <SeriePopUp serie={serie} cast={serie.cast} mostrada={mostrada} onOk={() => setMostrada(false)}/>

        </li>
    );

}