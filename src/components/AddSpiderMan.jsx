import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import "./Addstud.css";

function AddSpiderMan(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [abilities, setAbilities] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const[spiderYear,setSpiderYear] = useState("");

  const doWork = () => {
    if (selectedFile) {
      const newStudent = {
        "id": nanoid(),
        "first_name": firstName,  
        "last_name": lastName, 
        "abilities": abilities,
        "image": URL.createObjectURL(selectedFile),
        "spiderYear":parseInt(spiderYear)
      };
      props.addStudent(newStudent);
   }
  };

  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
  };



  return (
    <div className="container">
    <div className="row mt-5">
      <h3>Add your Spider-Man</h3>
      <div className="col-md-2">
        <label htmlFor="txtFirstName" className=''>First Name</label>
        <input type="text" id='txtFirstName' placeholder='First name' className='form-control' onChange={(evt) => setFirstName(evt.currentTarget.value)} value={firstName} />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtLastName" className='form-label'>Last Name</label>
        <input type="text" id='txtLastName' placeholder='Last name' className='form-control' onChange={(evt) => setLastName(evt.currentTarget.value)} value={lastName} />
      </div>
      <div className="col-md-2">
        <label htmlFor="txtAbilities" className='form-label'>Personal Abilities</label>
        <input type="text" id='txtAbilities' placeholder='Abilities' className='form-control' onChange={(evt) => setAbilities(evt.currentTarget.value)} value={abilities} />
      </div>
      <div className="col-md-2">
        <label htmlFor="fileUpload" className='form-label'>Spider Image</label>
        <input type="file" name="file" id="fileUpload" onChange={imageUpdate} />
      </div>
      <div className="col-md-2">
        <label htmlFor="SuitYearYear" className='form-label'>Suit Year</label>
        <input type="text" id='txtSpiderYear' placeholder='2000' className='form-control' onChange={(evt) => setSpiderYear(evt.currentTarget.value)} value={spiderYear} />
      </div>
      <div className="col-md-2">
      <button type="button" id='btnAdd' className='btn btn-danger btn-lg' onClick={doWork} >
  Add Spider-Man
  <FontAwesomeIcon icon={faPlusCircle} />
</button>
      </div>
    </div>
    </div>
  );
}

export default AddSpiderMan