import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';
import React from 'react';


const CheckboxWrapper = ({name,label,legend,...otherProps}) => {

    const {setFieldValue} = useFormikContext();

    const [fields,meta] = useField(name);

    const handleChange = (e) =>{
        setFieldValue(name,e.target.checked)
    }

    const configCheckbox = {
        ...fields,
        onChange:handleChange      
    }
    const configFormControl = {};

    if(meta && meta.error && meta.touched){
        configFormControl.error = true;
        configFormControl.textHelper = meta.error;
    }

    return (
        <FormControl {...configCheckbox}>
            <FormLabel component='legend'>{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox {...otherProps}/>}
                    label={label}
                />

            </FormGroup>
        </FormControl>
    )
}

export default CheckboxWrapper
