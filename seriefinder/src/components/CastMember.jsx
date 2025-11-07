import "./styles/CastMember.css"

export default function CastMember({actor}) {

    return (
        <li id="cast-container">
            <img src={actor.image} alt="Foto"/>
            <span>{actor.actor} como {actor.character}</span>
        </li>
    );

}