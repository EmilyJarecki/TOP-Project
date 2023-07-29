"use client"
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classNames from "classnames";




function FormSymptoms() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);



  const commonLabel = "text-blue-900 flex mb-1";
  const errorMessage = "text-red-600 text-sm";
  const inputBox = "rounded-lg p-2 bg-inputfield text-zinc-400 font-semibold"

  const raceOptions = [
    'Hispanic or Latino',
    'American Indian or Alaska Native',
    'Asian',
    'Black or African American',
    'Native Hawaiian or Other Pacific Islander',
    'White',
  ];  

  const sexOptions = ['Male', 'Female'];

  const ageOptions = Array.from({ length: 100 }, (_, index) => index + 1); // Generate age options from 1 to 100

  
  const initialValues = {
    date: '',
    sex: '',
    age: '',
    zipCode: '',
    race: '',
    phoneNumber: '',
    dateOfBirth: '',
  };

  const checkValue = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (/\D/.test(String.fromCharCode(charCode))) {
      e.preventDefault();
    }
  };


  const validationSchema = Yup.object({
    date: Yup.date().required('Required'),
    sex: Yup.string().required('Required'),
    age: Yup.number()
      .typeError('Age must be a number')
      .integer('Age must be an integer')
      .required('Age is required'),
    zipCode: Yup.string()
      .matches(/^\d{5}$/, 'Zip Code must be exactly 5 digits')
      .required('Required')
      .min(5, "Zip must be 5 digits"),
    race: Yup.string().required('Required'),
    phoneNumber: Yup.string().when('isDropdownOpen', {
      is: true,
      // then: Yup.string().required('Phone Number is required'),
      then: Yup.string(),
    }),
    dateOfBirth: Yup.string().when('isDropdownOpen', {
      is: true,
      // then: Yup.date().required('Date of Birth is required'),
      then: Yup.string(),
    })
  });

  const handleSubmit = (values) => {
    // Perform any necessary actions with the form data here
    console.log('Form submitted:', values);
  };

return (
<div className="mx-12 my-8">
  <Formik
      initialValues={{ ...initialValues }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      className=""
    >
{({ values }) => (
      <Form>

        
        <div className="mt-4">
          <label htmlFor="date" className={classNames(commonLabel, "")}>Date of Test:</label>
          <Field type="date" id="date" name="date" className={classNames(inputBox, "")} />
          <ErrorMessage name="date" component="div" className={classNames(errorMessage, "")} />
        </div>

      <div className="flex justify-between mt-4">

        <div>
          <label htmlFor="sex" className={classNames(commonLabel, "")}>Sex:</label>
            <Field as="select" id="sex" name="sex" className={classNames(inputBox, "w-40")}>
            <option value="">Select</option>
            {sexOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Field>          
          <ErrorMessage name="sex" component="div" className={classNames(errorMessage, "")} />
        </div>


        <div>
          <label htmlFor="age" className={classNames(commonLabel, "")}>Age:</label>
          <Field as="select" id="age" name="age" className={classNames(inputBox, "")}>
            <option value="" className="">Select</option>
            {ageOptions.map((option) => (
              <option key={option} value={option} className="">
                {option}
              </option>
            ))}
          </Field>          
          <ErrorMessage name="age" component="div" className={classNames(errorMessage, "")} />
        </div>





</div>
<div className="flex justify-between mt-4">
        <div className="">
          <label htmlFor="race" className={classNames(commonLabel, "")}>Race:</label>
          <Field as="select" id="race" name="race"  className={classNames(inputBox, "w-40")}>
            <option value="" className="w-40">Select</option>
            {raceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Field>          
          <ErrorMessage name="race" component="div" className={classNames(errorMessage, "")} />
        </div>




        <div>
          <label htmlFor="zipCode" className={classNames(commonLabel, "")}>Zip Code:</label>
          <Field type="text" id="zipCode" name="zipCode" placeholder="12345" maxLength={5} onKeyPress={(e) => checkValue(e)} className={classNames(inputBox, "w-20")}/>
          <ErrorMessage name="zipCode" component="div" className={classNames(errorMessage, "")}/>
        </div>

      </div>

{/* will be working here */}
<div>
            <p onClick={() => setIsDropdownOpen(!isDropdownOpen) }className="text-blue-900 my-4">Additional Information</p>

            {isDropdownOpen && (
              <div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    // onChange={handleAdditionalFormChange}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                  />
                </div>

                <div>
                  <label htmlFor="dateOfBirth">Date of Birth:</label>
                  <Field
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={values.dateOfBirth}                    
                    // onChange={handleAdditionalFormChange}
                  />
                  <ErrorMessage
                    name="dateOfBirth"
                    component="div"
                  />
                </div>
              </div>
            )}
          </div>


      <button type="submit" className="shadow-lg rounded-md py-1 text-sm text-bold text-white bg-[#30528F] w-full">Submit</button>
      </Form>
)}


    </Formik>
  </div>
  )
}

export default FormSymptoms;