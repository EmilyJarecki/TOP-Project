"use client"
import React, { useState } from "react";
import Modal from "react-modal";
import PopUpResults from "./PopUpResults";


function FormSymptoms() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);


  const handleInputChange = () => {
    const dataInput = document.getElementById('date').value;
    const ageInput = document.getElementById('age').value;
    const raceInput = document.getElementById('race').value;
    const sexInput = document.getElementById('sex').value;
    const zipInput = document.getElementById('zip').value;

    setIsFormComplete(dataInput && ageInput && raceInput && sexInput && zipInput);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(true); 
  };

return (
    <div>
      <p className='flex items-center justify-center font-semibold text-[#30528F]'>Page 2 of 2</p>
      <form action="/" method="post" onSubmit={handleSubmit}>

      <label for="date">Date of Test:</label>
      <input type="number" id="date" name="date" required />
      <br />

      <label for="age">Age Range:</label>
      <input type="number" id="age" name="age" required />

      <label for="race">Race:</label> <br />
      <input type="text" id="race" name="race" required />
      <br />

      <label for="sex">Sex:</label>
      <input type="text" id="sex" name="sex" required />

      <label for="zip">Zip Code</label>
      <input type="number" id="zip" name="zip" required minLength="5" maxLength="5" />

      <p>Additional Information</p>
      <p>Enter more info to enter yourself into our lottery?</p>
      <button type="submit" className="rounded-xl px-20 text-white bg-[#30528F]">Submit</button>
      </form>
      {isOpen && (
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <PopUpResults />
      </Modal>
      )}
    </div>
  )
}

export default FormSymptoms;