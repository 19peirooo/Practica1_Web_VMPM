import {useForm} from 'react-hook-form'
import { FaSearch } from "react-icons/fa";
import "./styles/SearchForm.css"

export default function SearchForm() {
    
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data.serie);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('serie')} placeholder="Introduzca Serie a Buscar"></input>
            <button><FaSearch></FaSearch></button>
        </form>
    );

}