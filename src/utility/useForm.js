import { useState } from "react";

export default function useForm(initial = {}){
    const [inputs, setInputs] = useState(initial);

    function clearForm(){
        const inputsArray = Object.entries(inputs);

        const clearInputsArray = inputsArray.map(([key]) => [key,'']);
        
        const inputsJson = Object.fromEntries(clearInputsArray);

        setInputs(inputsJson);
    }

    return{
        clearForm
    }
}