

export const todoReducer = ( state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'delete':
            return state.filter( todo => todo.id !== action.payload);
            //el filter regresa un nuevo arreglo, regresa todos los elementos del state que cumplan una condicion
            //en este caso seria que el todo.id sea diferente al todo.id que quiero borrar osea diferente al action.payload
        
            case 'toggle':
                return state.map( todo =>
                    ( todo.id === action.payload ) //es un ternario que tiene q regresar dos valores
                      ? { ...todo, done: !todo.done } //este valor es exactamente lo que se necesita al dar en la logica inicial
                      : todo //en el caso q sean iguales y que se quiere hacer al respecto
                    );

            case 'toggle-old': //este es igual al anterior toggle pero es la version mas larga
            return state.map( todo =>{
                if ( todo.id === action.payload ){
                    return{
                        ...todo, 
                        done: !todo.done
                    }
                }else{
                        return todo;
                    }
                
            })
            default:
            return state;
    }

}