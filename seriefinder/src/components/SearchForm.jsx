import {useForm} from 'react-hook-form'
import { FaSearch } from "react-icons/fa";
import "./styles/SearchForm.css"

export default function SearchForm({onSearch}) {
    
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        onSearch(data.query)
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('query')} placeholder="Introduzca Serie a Buscar"></input>
            <button><FaSearch></FaSearch></button>
        </form>
    );

}