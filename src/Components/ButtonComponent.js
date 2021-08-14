import { Button } from '@material-ui/core'
import { useFormikContext } from 'formik'
import React from 'react'

const ButtonComponent = ({children,...otherProps}) => {

    const {values,submitForm} = useFormikContext();

    const handleSubmit = () =>{
        console.log(values);
        // submitForm(values);
        // console.log(submitForm());
    }   

    const configButton = {
        ...otherProps,
        variant:'contained',
        color:'primary',
        fullWidth:true,
        onClick:handleSubmit,
        type:'submit'
    }

    return (
        <Button 
            {...configButton}
        >
            {children}
        </Button>
    )
}

export default ButtonComponent
