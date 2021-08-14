import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container,Grid, Typography } from '@material-ui/core';
import { Formik,Form } from 'formik';
import Header from './Components/Header';
import * as yup from 'yup';
import TextFieldContainer from './Components/TextFieldContainer';
import SelectWrapper from './Components/SelectWrapper';
import countries from './data/countries.json'
import DateTimePicker from './Components/DateTimePicker';
import CheckboxWrapper from './Components/CheckboxWrapper';
import ButtonComponent from './Components/ButtonComponent';

const useStyles =makeStyles((theme)=>({
  formWrapper:{
    marginTop:theme.spacing(5),
    marginBottom:theme.spacing(8)
  }
}))

const INITIAL_FORM_STATE = {
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  addressLine1:'',
  addressLine2:'',
  city:'',
  state:'',
  country:'',
  arrivaldate:'',
  depatureDate:'',
  message:'',
  termsOfService:''
};

const VALIDATION_SCHEMA = yup.object().shape({
  firstName:yup.string().required('Required'),
  lastName:yup.string().required('Required'),
  email:yup.string().email('Invalid email').required('Required'),
  phone:yup.number().integer().typeError('Please enter a valid phone number').required('Required'),
  addressLine1:yup.string().required('Required'),
  addressLine2:yup.string().required('Required'),
  city:yup.string().required('Required'),
  state:yup.string().required('Required'),
  country:yup.string().required('Required'),
  arrivalDate:yup.string().required('Required'),
  depatureDate:yup.string().required('Required'),
  message:yup.string(),
  termsOfService:yup.string().oneOf([true],'The terms must be accepted').required('The terms must be accepted')
});

const App = () => {
  const classes = useStyles();
  
  return (
    <Grid container>
      <Grid item xs={12}>
          {/* <Header/> */}
      </Grid>

      <Grid item xs={12}>
          <Container maxWidth='md'>
            <div  className={classes.formWrapper}>
              <Formik
                initialValues={{...INITIAL_FORM_STATE}}
                validationSchema = {VALIDATION_SCHEMA}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography>
                        Your details
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextFieldContainer
                          name='firstName'
                          label='First Name'
                        />
                    </Grid>
                    <Grid item xs={6}>
                      <TextFieldContainer
                          name='lastName'
                          label='Last Name'
                        />
                    </Grid>
                    <Grid item xs={12}>
                      <TextFieldContainer
                          name='email'
                          label='Email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                      <TextFieldContainer
                          name='phone'
                          label='Phone'
                        />
                    </Grid>
                    

                    <Grid item xs={12}>
                      <Typography>
                        Address
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextFieldContainer
                          name='addressLine1'
                          label='Address Line 1'
                        />
                    </Grid>
                    <Grid item xs={12}>
                      <TextFieldContainer
                          name='addressLine2'
                          label='Address Line 2'
                        />
                    </Grid>
                    <Grid item xs={6}>
                      <TextFieldContainer
                          name='city'
                          label='City'
                        />
                    </Grid>
                    <Grid item xs={6}>
                      <TextFieldContainer
                          name='state'
                          label='State'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectWrapper
                          name='country'
                          label='Country'
                          options={countries}
                        />
                    </Grid>


                    <Grid item xs={12}>
                      <Typography>
                        Booking information
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <DateTimePicker
                          name='arrivalDate'
                          label='Arrival Date'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <DateTimePicker
                          name='depatureDate'
                          label='Depature Date'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <DateTimePicker
                          name='message'
                          label='Message'
                          multiline={true}
                          rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CheckboxWrapper
                          name='termsOfService'
                          legend='Terms Of Service'
                          label='I agree'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <ButtonComponent type='submit'>
                            Submit
                        </ButtonComponent>
                    </Grid>


                  </Grid>

                </Form>
              </Formik>
            </div>
          </Container>
      </Grid>
    </Grid>
  )
}

export default App
