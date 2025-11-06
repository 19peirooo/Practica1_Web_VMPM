import Serie from "./Serie";

export default function SeriesList({series}) {

    return (
        <>
            {series.length === 0 ?
                (<p>Aun no se ha realizado una busqueda valida</p>) :
                (<ul>
                    {series.map((item,idx) => <Serie key={idx} serie={item}></Serie>)}
                </ul>)
            }
        </>
    );

}