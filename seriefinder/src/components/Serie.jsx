import "./styles/Serie.css"

export default function Serie({serie}) {

    return (
        <li className="serie"><img src={serie.img} alt="Portada"></img><span>{serie.nombre}</span></li>
    );

}