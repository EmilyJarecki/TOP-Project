"use client"
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';




function FormSymptoms() {

  const raceOptions = [
    'Hispanic or Latino',
    'American Indian or Alaska Native',
    'Asian',
    'Black or African American',
    'Native Hawaiian or Other Pacific Islander',
    'White',
  ];  

  const sexOptions = ['Male', 'Female'];

  
  const initialValues = {
    date: '',
    sex: '',
    age: '',
    zipCode: '',
    race: '',
  };

  const validationSchema = Yup.object({
    date: Yup.date().required('Date is required'),
    sex: Yup.string().required('Sex is required'),
    age: Yup.number()
      .typeError('Age must be a number')
      .integer('Age must be an integer')
      .required('Age is required'),
    zipCode: Yup.string()
      .matches(/^\d{5}$/, 'Zip Code must be exactly 5 digits')
      .required('Zip Code is required'),
    race: Yup.string().required('Race is required'),
  });

  const handleSubmit = (values) => {
    // Perform any necessary actions with the form data here
    console.log('Form submitted:', values);
  };

return (

  <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="date">Date:</label>
          <Field type="date" id="date" name="date" />
          <ErrorMessage name="date" component="div" />
        </div>
        <div>
          <label htmlFor="sex">Sex:</label>
            <Field as="select" id="sex" name="sex">
            <option value="">Select Sex</option>
            {sexOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Field>          <ErrorMessage name="sex" component="div" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <Field type="number" id="age" name="age" />
          <ErrorMessage name="age" component="div" />
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <Field type="text" id="zipCode" name="zipCode" />
          <ErrorMessage name="zipCode" component="div" />
        </div>
        <div>
          <label htmlFor="race">Race:</label>
          <Field as="select" id="race" name="race">
            <option value="">Select Race</option>
            {raceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Field>          
          <ErrorMessage name="race" component="div" />
        </div>
        <p>Additional Information</p>
      <p>Enter more info to enter yourself into our lottery?</p>
      <button type="submit" className="rounded-xl px-20 text-white bg-[#30528F]">Submit</button>
      </Form>
    </Formik>
  
  )
}

export default FormSymptoms;