import { useState } from "react";
import "./styles/Serie.css"
import SeriePopUp from "./SeriePopUp";

export default function Serie({serie}) {

    const [mostrada,setMostrada] = useState(false)

    return (
        <li className="serie" onClick={() => setMostrada(true)}>
            <img src={serie.img} alt="Portada"></img>
            <span>{serie.nombre}</span>
            <SeriePopUp serie={serie} mostrada={mostrada} onOk={() => setMostrada(false)}/>

        </li>
    );

}