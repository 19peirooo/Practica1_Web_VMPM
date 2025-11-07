import CastMember from "./CastMember";

export default function CastList({cast}) {
    
    return (
        <ul>
            {cast.map((item,idx) => <CastMember key={idx} actor={item}></CastMember>)}
        </ul>
    );

}