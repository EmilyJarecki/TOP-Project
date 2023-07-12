import React from "react";


function FormSymptoms() {
return (
    <div>
      <p className='flex items-center justify-center font-semibold text-[#30528F]'>Page 2 of 2</p>
      <form action="/" method="post">

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
    </div>
  )
}

export default FormSymptoms