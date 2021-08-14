import { MenuItem, TextField } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'
import React from 'react'

const SelectWrapper = ({name,options,...otherProps}) => {

    const {setFieldValue} = useFormikContext();
    const [fields,meta] = useField(name);

    const handleChange = (e)=>{
        setFieldValue(name,e.target.value)
    }
    

    const configSelect ={
        ...otherProps,
        ...fields,
        variant:'outlined',
        fullWidth:true,
        select:true,
        onChange: handleChange
    }
    if(meta && meta.error && meta.touched){
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField {...configSelect}>
                {Object.keys(options).map((item,index)=>(
                    <MenuItem key={index} value={item}>
                        {options[item]}
                    </MenuItem>
                ))}     
        </TextField>
    )
}

export default SelectWrapper
