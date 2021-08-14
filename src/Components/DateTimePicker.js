import { TextField } from '@material-ui/core'
import { useField } from 'formik';
import React from 'react';



const DateTimePicker = ({name,...otherProps}) => {

    const [fields,meta] = useField(name);
    
    const configDatePicker = {
        ...otherProps,
        ...fields,
        fullWidth:true,
        type:'date',
        variant:'outlined',
        InputLabelProps:{
            shrink:true
        }
    }

    if(meta && meta.error && meta.touched){
        configDatePicker.error = true;
        configDatePicker.helperText = meta.error;
    }
    return (
        <TextField {...configDatePicker}/>
    )
}

export default DateTimePicker
