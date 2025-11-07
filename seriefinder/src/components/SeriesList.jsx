import Serie from "./Serie";

export default function SeriesList({series, onFavourite}) {

    return (
        <>
            <ul>
                {series.map((item,idx) => <Serie key={idx} serie={item} onFavourite={onFavourite}></Serie>)}
            </ul>
        </>
    );

}