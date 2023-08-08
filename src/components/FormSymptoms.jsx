"use client";
import mongoose from 'mongoose';
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import Modal from "react-modal";
import PopUpResults from "./PopUpResults";
import { useRouter } from "next/navigation";

const FormSymptoms = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isBirthDateOpen, setIsBirthDateOpen] = useState(false);
  const [isMedicalHistoryOpen, setIsMedicalHistoryOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAddressOpen, setAddressOpen] = useState(false);

  // const formValuesString = localStorage.getItem('formValues');
  // const formValues = JSON.parse(formValuesString);

  const commonLabel = "text-blue-900 flex mb-1";
  const errorMessage = "text-red-600 text-sm";
  const inputBox = "rounded-lg p-2 bg-inputfield text-zinc-400 font-semibold";

  const raceOptions = [
    "American Indian or Alaska Native",
    "Asian",
    "Black or African American",
    "Native Hawaiian or Other Pacific Islander",
    "Two or more races (Not Hispanic or Latino",
    "White"
  ];

  const ethnicityOptions = [
    "Hispanic or Latino",
    "Not Hispanic or Latino"
  ]

  const statesList = [
    { value: "", label: "Select" },
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  const sexOptions = ["Male", "Female"];

  const ageOptions = Array.from({ length: 100 }, (_, index) => index + 1); // Generate age options from 1 to 100

  const initialValues2 = {
    date: "",
    sex: "",
    age: "",
    zipCode: "",
    ethnicity: "",
    race: "",
    phoneNumber: "",
    dateOfBirth: "",
    medicalHistory: "",
    optStAddress: "",
    optZipcode: "",
    optState: "",
  };

  const checkValue = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (/\D/.test(String.fromCharCode(charCode))) {
      e.preventDefault();
    }
  };
  // "w-24 bg-white m-1 h-24 hover:bg-[#8eaadd] relative rounded-lg flex justify-center
  const validationSchema = Yup.object({
    date: Yup.date().required("Required"),
    sex: Yup.string().required("Required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .integer("Age must be an integer")
      .required("Age is required"),
    zipCode: Yup.string()
      .matches(/^\d{5}$/, "Zip Code must be exactly 5 digits")
      .required("Required")
      .min(5, "Zip must be 5 digits"),
    ethnicity: Yup.string().required("Required"),
    race: Yup.string(),
    phoneNumber: Yup.string()
    .min(10, "Phone must be 10 digits")
    .max(10, "Phone must be 10 digits")
    .when("isDropdownOpen", {
      is: true,
      // then: Yup.string().required('Phone Number is required'),
      then: Yup.string(),
    }),
    dateOfBirth: Yup.string().when("isDropdownOpen", {
      is: true,
      then: Yup.string(),
    }),
    medicalHistory: Yup.string().when("isDropdownOpen", {
      is: true,
      then: Yup.string().max(
        500,
        "Medical history must be at most 500 characters"
      ),
    }),
    optStAddress: Yup.string().when("isDropdownOpen", {
      is: true,
      then: Yup.string(),
    }),
    optZipcode: Yup.string()
      .matches(/^\d{5}$/, "Zip Code must be exactly 5 digits")
      .min(5, "Zip must be 5 digits")
      .when("isDropdownOpen", {
        is: true,
        then: Yup.string(),
      }),
    optState: Yup.string().when("isDropdownOpen", {
      is: true,
      then: Yup.string(),
    }),
  });

  const handleSubmit = async (values2, { resetForm }) => {
    setIsSubmitting(true);
    // const combinedFormData = { ...formValues, ...values2 };
    try {
      const response = await fetch(
        "https://top-backend-739f5c08dc02.herokuapp.com/symptoms",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values2),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setIsSubmitting(false);
      resetForm();
      // localStorage.removeItem('formValues');
      console.log(values2);
    } catch (error) {
      console.error("There was an error!", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-12 my-8">
      <Formik
        // page1Values={page1Values}
        initialValues={initialValues2}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className=""
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mt-4">
              <label htmlFor="date" className={classNames(commonLabel, "")}>
                Date of Test:
              </label>
              <Field
                type="date"
                id="date"
                name="date"
                className={classNames(inputBox, "")}
              />
              <ErrorMessage
                name="date"
                component="div"
                className={classNames(errorMessage, "")}
              />
            </div>

            <div className="flex justify-between mt-4">
              <div>
                <label htmlFor="sex" className={classNames(commonLabel, "")}>
                  Sex:
                </label>
                <Field
                  as="select"
                  id="sex"
                  name="sex"
                  className={classNames(inputBox, "w-40")}
                >
                  <option value="">Select</option>
                  {sexOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="sex"
                  component="div"
                  className={classNames(errorMessage, "")}
                />
              </div>

              <div>
                <label htmlFor="age" className={classNames(commonLabel, "")}>
                  Age:
                </label>
                <Field
                  as="select"
                  id="age"
                  name="age"
                  className={classNames(inputBox, "")}
                >
                  <option value="" className="">
                    Select
                  </option>
                  {ageOptions.map((option) => (
                    <option key={option} value={option} className="">
                      {option}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="age"
                  component="div"
                  className={classNames(errorMessage, "")}
                />
              </div>
            </div>


              <div className="mt-4">
                <label htmlFor="ethnicity" className={classNames(commonLabel, "")}>
                  Ethnicity:
                </label>
                <Field
                  as="select"
                  id="ethnicity"
                  name="ethnicity"
                  className={classNames(inputBox, "w-full")}
                >
                  <option value="" className="w-full">
                    Select
                  </option>
                  {ethnicityOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="ethnicity"
                  component="div"
                  className={classNames(errorMessage, "")}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="race" className={classNames(commonLabel, "")}>
                  Race:
                </label>
                <Field
                  as="select"
                  id="race"
                  name="race"
                  className={classNames(inputBox, "w-full")}
                >
                  <option value="" className="w-full">
                    Select
                  </option>
                  {raceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="race"
                  component="div"
                  className={classNames(errorMessage, "")}
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="zipCode"
                  className={classNames(commonLabel, "")}
                >
                  Zip Code:
                </label>
                <Field
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="12345"
                  maxLength={5}
                  onKeyPress={(e) => checkValue(e)}
                  className={classNames(inputBox, "w-20")}
                />
                <ErrorMessage
                  name="zipCode"
                  component="div"
                  className={classNames(errorMessage, "")}
                />
              </div>

            <div>
              <p
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-blue-900 mt-4 mb-2"
              >
                Additional Information
              </p>
              <p className="font-semibold text-[#7195D3] text-sm mb-2">Enter more info to enter yourself into our lottery!</p>

              {isDropdownOpen ? (
                <div className="w-full rounded-lg  bg-inputfield text-zinc-400 font-semibold ">
                  <div>
                    <p
                      onClick={() => setIsPhoneOpen(!isPhoneOpen)}
                      className="p-2 font-semibold border-b border-b-zinc-300"
                    >
                      Phone
                    </p>
                    {isPhoneOpen && (
                      <div className="bg-[#E4EAEE] flex flex-col pl-4">
                        <label
                          htmlFor="phoneNumber"
                          className="text-blue-900 font-normal pt-4"
                        >
                          Phone Number:
                        </label>
                        <Field
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          onKeyPress={(e) => checkValue(e)}
                          className={classNames(inputBox, "w-40 mb-4")}
                        />
                        <ErrorMessage name="phoneNumber" component="div" />
                      </div>
                    )}
                  </div>

                  <div>
                    <p
                      onClick={() => setIsBirthDateOpen(!isBirthDateOpen)}
                      className="p-2 font-semibold border-b border-b-zinc-300"
                    >
                      Date of Birth
                    </p>
                    {isBirthDateOpen && (
                      <div className="bg-[#E4EAEE] flex flex-col pl-4">
                        <label
                          htmlFor="dateOfBirth"
                          className="text-blue-900 font-normal pt-4"
                        >
                          Date of Birth:
                        </label>
                        <Field
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          className={classNames(inputBox, "w-40 mb-4")}
                        />
                        <ErrorMessage name="dateOfBirth" component="div" />
                      </div>
                    )}
                  </div>

                  <div>
                    <p
                      onClick={() =>
                        setIsMedicalHistoryOpen(!isMedicalHistoryOpen)
                      }
                      className="p-2 font-semibold border-b border-b-zinc-300"
                    >
                      Medical History
                    </p>
                    {isMedicalHistoryOpen && (
                      <div className="bg-[#E4EAEE] flex flex-col pl-4">
                        <label
                          htmlFor="medicalHistory"
                          className="text-blue-900 font-normal mt-4"
                        >
                          Medical History:
                        </label>
                        <Field
                          as="textarea"
                          id="medicalHistory"
                          name="medicalHistory"
                          rows="4"
                          // cols="30"
                          placeholder="Enter your medical history here..."
                          className={classNames(inputBox, "w-full mb-4")}
                        />
                        <ErrorMessage
                          name="medicalHistory"
                          component="div"
                          className="error"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <p
                      onClick={() => setAddressOpen(!isAddressOpen)}
                      className="p-2 font-semibold border-b border-b-zinc-300"
                    >
                      Address
                    </p>
                    {isAddressOpen && (
                      <div className="bg-[#E4EAEE] flex flex-col pl-4">
                        <div className="mt-4">
                          <label
                            htmlFor="optStreetAddress"
                            className="text-blue-900 font-normal mt-4"
                          >
                            Street Address:
                          </label>
                          <Field
                            type="text"
                            id="optStreetAddress"
                            name="optStreetAddress"
                            className={classNames(inputBox, "w-full mb-4")}
                          />
                          <ErrorMessage
                            name="optStreetAddress"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div className="flex flex-col">
                            <label
                              htmlFor="optZipcode"
                              className="text-blue-900 font-normal"
                            >
                              Zipcode:
                            </label>
                            <Field
                              type="text"
                              id="optZipcode"
                              name="optZipcode"
                              className={classNames(inputBox, "w-20 mb-4")}
                              placeholder="12345"
                              maxLength={5}
                              onKeyPress={(e) => checkValue(e)}
                            />
                            <ErrorMessage
                              name="optZipcode"
                              component="div"
                              className="error"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label
                              htmlFor="optState"
                              className="text-blue-900 font-normal"
                            >
                              State:
                            </label>
                            <Field
                              as="select"
                              id="optState"
                              name="optState"
                              className={classNames(inputBox, "mb-4")}
                            >
                              {statesList.map((state) => (
                                <option key={state.value} value={state.value}>
                                  {state.value}
                                </option>
                              ))}
                            </Field>

                            <ErrorMessage
                              name="optState"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <p
                  className={classNames(inputBox, "w-full mb-4")}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Click here
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="shadow-lg rounded-md py-1 text-sm text-bold text-white bg-[#30528F] w-full mt-4"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
        >
          <PopUpResults />
        </Modal>
      )}
    </div>
  );
};

export default FormSymptoms;