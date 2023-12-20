import React, { useState, useEffect } from 'react';
import './App.css';
import navBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import AddSpiderMan from './components/AddSpiderMan';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SpiderClass from './components/SpiderClass';

function App() {
  const [allStudents, setAllStudents] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [keyWords, setKeyWords] = useState("");
  const [spiderYear, setSpiderYear] = useState("");

  useEffect(() => {

if(localStorage){
const studentLocalStorage = JSON.parse(localStorage.getItem('student'));

if(studentLocalStorage){
  saveStudents(studentLocalStorage);
}
else{
  saveStudents(students);
}}

  },[])


  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
    if(localStorage){
localStorage.setItem('students', JSON.stringify(students))
console.log('Saved to the local storage');
    }
  };

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents);
  };

  const searchStudents = () => {
    let keywordsArray = [];

    if (keyWords) {
      keywordsArray = keyWords.toLowerCase().split(' ');
    }

    if (spiderYear) {
      keywordsArray.push(spiderYear.toString());
    }

    if (keywordsArray.length > 0) {
      const searchResults = allStudents.filter((student) => {
        for (const word of keywordsArray) {
          if (
            student.first_name.toLowerCase().includes(word) ||
            student.last_name.toLowerCase().includes(word) ||
            student.spiderYear === parseInt(word)
          ) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allStudents);
    }
  };

  const removeStudents = (studentToDelete) => {
    console.log(studentToDelete);
    const updatedStudentArray = allStudents.filter(student => student.id !== studentToDelete.id);
    saveStudents(updatedStudentArray);
  }

  const updateStudent = (updatedStudent) => {
    console.table(updatedStudent);
    const updatedStudentArray = allStudents.map((student) =>
      student.id === updatedStudent.id ? { ...student, ...updatedStudent } : student
    );
    saveStudents(updatedStudentArray);
  };
  


   const students = [
    {
      id: nanoid(),
      first_name: "Tobey",
      last_name: "Maguire",
      abilities: "Webbed Strike",
      image: './public/images/student1.jpg',
      spiderYear: 2001
    },


    {
      id: nanoid(),
      first_name: "symbiote",
      last_name: "Spider-Man",
      abilities: "Symbiote Surge",
      image: './public/images/student2.jpg',
      spiderYear: 2002
      
    },
    {
      id: nanoid(),
      first_name: "Iron ",
      last_name: "Spider-Man",
      abilities: "Iron Road Crush",
      image: './public/images/student3.jpg',
      spiderYear: 2003
    },
    {
      id: nanoid(),
      first_name: "Superior",
      last_name: "Spider-Man",
      abilities: "Assassin Pumble",
      image: './public/images/student4.jpg',
      spiderYear: 2004
    },
    {
      id: nanoid(),
      first_name: "2099",
      last_name: "Spider-Man",
      abilities: "Spider-Slash",
      image: './public/images/student5.jpg',
      spiderYear: 2099
    },
    {
      id: nanoid(),
      first_name: "Andrew",
      last_name: "Garfield",
      abilities: "Web Rush",
      image: './public/images/student6.jpg',
      spiderYear: 2006
    },
    {
      id: nanoid(),
      first_name: "Spider-Man",
      last_name: "PS4",
      abilities: "Web Rush",
      image: './public/images/student7.jpg',
      spiderYear: 2007
    },
    {
      id: nanoid(),
      first_name: "Yuri",
      last_name: "Spider-Man",
      abilities: "Web Health Drain",
      image: './public/images/student8.jpg',
      spiderYear: 2008
    },
    {
      id: nanoid(),
      first_name: "Fancy",
      last_name: "Spider-Man",
      abilities: "Tap Dancing Spider",
      image: './public/images/student9.jpg',
      spiderYear: 2009
    },
    {
      id: nanoid(),
      first_name: "Miles ",
      last_name: "Spider-Man",
      abilities: "Bio-Hazard",
      image: './public/images/student10.jpg',
      spiderYear: 2010
    }
  ];


  return (
    <div className='body'>
    <div className='container'>
      <div className="row">
        {searchResults && searchResults.map((student) => (
          <div className="col-lg-2" key={student.id}>
           <SpiderClass student={student} removeStudent={removeStudents} updateStudent={updateStudent} />
          </div>
        ))}
      </div>
      {(!allStudents || allStudents.length === 0) && (
  <button type='button' className='btn btn-lg btn-success' onClick={() => saveStudents(students)}>Save Spider-Man</button>
)}
      <AddSpiderMan addStudent={addStudent} />
<div className="right-side">

</div>
<div className="left-side">
</div>
      <div className='row mt-4'>
        <div className="col-md-4" >
          <label htmlFor="txtKeywords">Search by First Name or Last Name</label>
          <input type="text" className='form-control' placeholder='Spider and Man' onChange={(evt) => setKeyWords(evt.target.value)} />
        </div>
        <div className="col-md-4">
          <select value={spiderYear} onChange={evt => setSpiderYear(evt.target.value)} className='form-control'>
            <option value=''>Select Suit</option>
            {allStudents &&
              _(allStudents)
                .map((student) => student.spiderYear)
                .sort()
                .uniq()
                .map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))
                .value()}
          </select>
        </div>
        <div className="col-md-4">
          <button type='button' className='btn btn-primary' onClick={searchStudents}>Search Spider-Man<FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;