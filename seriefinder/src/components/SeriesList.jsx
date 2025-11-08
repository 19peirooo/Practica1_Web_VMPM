import Serie from "./Serie";

export default function SeriesList({series, onFavourite,handleClick}) {

    return (
        <>
            <ul>
                {series.map((item,idx) => <Serie key={idx} serie={item} onFavourite={onFavourite} handleClick={handleClick}></Serie>)}
            </ul>
        </>
    );

}