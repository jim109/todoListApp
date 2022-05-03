import { useState } from "react"

//useForm que recibe un objeto en este caso lo llamamos initialState, en el cual debe tener las
//propiedades que queremos usar o manipular.
//tambien tenemos en handleInputChange que me sirve para leer rapidamente
//el useForm retorna un arreglo por consecuencia el primer valor es el estado del formulario
//y el segundo es el handleInputChange para cambiar los valores del formulario
export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)
    const reset = () =>{
        setValues(initialState);
    }

    const handleInputChange = ({ target }) =>{
        
        setValues({
                ...values,
                [target.name]:target.value,
            });
    }
    return[values, handleInputChange, reset];
}
 

