import { TextField } from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'



const TextFieldContainer = ({name,...otherProps}) => {

    const [fields,meta] = useField(name);

    const configTextField = {
        ...fields,
        ...otherProps,
        fullWidth:true,
        variant:'outlined'
    }

    
    if(meta && meta.error && meta.touched){
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <TextField {...configTextField}/>
    )
}

export default TextFieldContainer;
