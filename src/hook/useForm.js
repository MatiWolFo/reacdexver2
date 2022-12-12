//CUSTOM HOOKS FORMULARIOS
import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState([initialForm])

    //RECIBIR EL EVENTO, OBTENIENDO EL TARGET
    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    //USESTATE PARA RESETEAR EL FORM
    const onResetForm = () => {
        setFormState(initialForm);
    };

    return (
        {
            ...formState,
            formState,
            onInputChange,
            onResetForm
        }
    );
};
