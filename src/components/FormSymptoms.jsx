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

      <label htmlFor="date">Date of Test:</label>
      <input type="number" id="date" name="date" required onChange={handleInputChange}/>
      <br />

      <label htmlFor="age">Age Range:</label>
      <input type="number" id="age" name="age" required onChange={handleInputChange}/>

      <label htmlFor="race">Race:</label> <br />
      <input type="text" id="race" name="race" required onChange={handleInputChange}/>
      <br />

      <label htmlFor="sex">Sex:</label>
      <input type="text" id="sex" name="sex" required onChange={handleInputChange}/>

      <label htmlFor="zip">Zip Code</label>
      <input type="number" id="zip" name="zip" required minLength="5" maxLength="5" onChange={handleInputChange}/>

      <p>Additional Information</p>
      <p>Enter more info to enter yourself into our lottery?</p>
      <button type="submit" className="rounded-xl px-20 text-white bg-[#30528F]" disabled={!isFormComplete}>Submit</button>
      </form>
      {isOpen && (
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} ariaHideApp={false}>
        <PopUpResults />
      </Modal>
      )}
    </div>
  )
}

export default FormSymptoms;