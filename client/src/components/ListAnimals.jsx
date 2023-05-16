import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
//import * as ioicons from "react-icons/io5";
import AdoptionForm from "./Form";
import { Link } from "react-router-dom";
import { Placeholder } from "semantic-ui-react";
import Catordog from "./catordog";
import { useAuth0 } from "@auth0/auth0-react";

const ListAnimals = (props) => {
  // this is my original state with an array of students
  const [animals, setAnimals] = useState([]);
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  //this is the state needed for the UpdateRequest
  //const [editingStudent, setEditingStudent] = useState(null);

  const loadAnimals = () => {
    // A function to fetch the list of students that will be load anytime that list change
    fetch("/api/animals")
      .then((response) => response.json())
      .then((animals) => {
        setAnimals(animals);
      });
  };

  // let newId = () => {
  //   props.setId();
  // };

  useEffect(() => {
    loadAnimals();
  }, []);

  //   const onSaveStudent = (newStudent) => {
  //     //console.log(newStudent, "From the parent - List of Students");
  //     setStudents((students) => [...students, newStudent]);
  //   };

  //A function to control the update in the parent (student component)
  //   const updateStudent = (savedStudent) => {
  //     // console.log("Line 29 savedStudent", savedStudent);
  //     // This function should update the whole list of students -
  //     loadStudents();
  //   };

  //A function to handle the Delete funtionality
  //   const onDelete = (student) => {
  //     //console.log(student, "delete method")
  //     return fetch(`http://localhost:8081/api/students/${student.id}`, {
  //       method: "DELETE",
  //     }).then((response) => {
  //       //console.log(response);
  //       if (response.ok) {
  //         loadStudents();
  //       }
  //     });
  //   };

  //A function to handle the Update functionality
  //   const onUpdate = (toUpdateStudent) => {
  //     //console.log(toUpdateStudent);
  //     setEditingStudent(toUpdateStudent);
  //   };

  return (
    <div className="mybody">
      <div className="list-students">
        <h2>Meet Our Adoptable Pets </h2>
        <ul>
          {animals.map((animal, index) => {
            return (
              <Card key={index}>
                <Card.Content>
                  <li>
                    {animal.name}
                    {animal.photos.length === 0 ? (
                      <Catordog species={animal.species} />
                    ) : (
                      <img src={animal.photos[0].small} />
                    )}
                    ,{animal.species}
                    {animal.description}
                    <Link to={`/adopt/${animal.id}`}>Adopt</Link>
                    {/* {isAuthenticated ? (
                      <Link to={`/adopt/${animal.id}`}>Adopt</Link>
                    ) : (
                      <button onClick={() => loginWithRedirect()}>
                        Log In
                      </button>
                    )} */}
                    {/* <button onClick={() => props.setId(animal.id)}>
                      Adopt!
                    </button> */}
                  </li>
                </Card.Content>
              </Card>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListAnimals;
