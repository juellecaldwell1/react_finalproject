import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faSpider,
} from "@fortawesome/free-solid-svg-icons";
import './StudentCl.css';

function SpiderClass(props) {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [abilities, setAbilities] = useState("");
  const [spiderYear, setSpiderYear] = useState("");

  useEffect(() => {
    setFirstName(props.student.firstName);
    setLastName(props.student.lastName);
    setAbilities(props.student.abilities);
    setSpiderYear(props.student.spiderYear);
  }, [props.student]);

  const saveStudent = () => {
    setEditMode(false);
    const updatedStudent = {
      id: props.student.id,
      first_name: firstName,
      last_name: lastName,
      abilities: abilities,
      spiderYear: spiderYear,
      image: props.student.image,
    };
    props.updateStudent(updatedStudent);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <img src={props.student.image} alt="happy students" />
          {!editMode && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.student.first_name}</li>
              <li className="list-group-item">{props.student.last_name}</li>
              <li className="list-group-item">{props.student.abilities}</li>
              <li className="list-group-item">{props.student.spiderYear}</li>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => props.removeStudent(props.student)}
              >
                <FontAwesomeIcon icon={faX}/>
                Delete Spider-Man
              </button>
              <button className="btn btn-primary" onClick={() => setEditMode(true)}>
                Edit Spider-Man
                <FontAwesomeIcon icon={faSpider} />
              </button>
            </ul>
          )}
          {editMode && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(evt) => setFirstName(evt.currentTarget.value)}
                />
              </li>
              <li className="list-group-item">
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(evt) =>  setLastName(evt.currentTarget.value)}
                />
              </li>
              <li className="list-group-item">
                <input
                  type="text"
                  className="form-control"
                  value={abilities}
                  onChange={(evt) => setAbilities(evt.currentTarget.value)}
                />
              </li>
              <li className="list-group-item">
                <input
                  type="text"
                  className="form-control"
                  value={spiderYear}
                  onChange={(evt) => setSpiderYear(evt.currentTarget.value)}
                />
              </li>
              <li className="list-group-item">
                <button id="btnSave" className="btn btn-secondary" onClick={saveStudent}>
                  Save
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SpiderClass;
