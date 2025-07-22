import { useState } from "react";

function RadioButton(){

  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');

  return (
    <div>
      <h3>Select Gender:</h3>
      <input type="radio" onChange={(event) => setGender(event.target.value)} id="male" name="gender" value="male" />
      <label htmlFor="male">Male</label>

      <input type="radio" onChange={(event) => setGender(event.target.value)} id="female" name="gender" value="female" />
      <label htmlFor="female">Female</label>
<h2>Selected Gender : {gender}</h2>

<br />
<br />
<h3>Select City :</h3>
<select name="city" id="city" defaultValue={'sahana'} onChange={(event) => setCity(event.target.value)}>
  <option value="gaya" id="gaya">Gaya</option>
  <option value="jamtara" id="jamtara">Jamtara</option>
  <option value="Sahana" id="Sahana">Sahana</option>
</select>

      <h2>Selected City : {city}</h2>




    </div>
  );
}

export default RadioButton;