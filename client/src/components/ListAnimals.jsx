import React, { useState, useEffect } from "react";
//import * as ioicons from "react-icons/io5";
import MyForm from "./Form";
import Student from "./Student";

const ListAnimals = () => {
  // this is my original state with an array of students
  const [animals, setAnimals] = useState([]);

  //this is the state needed for the UpdateRequest
  //const [editingStudent, setEditingStudent] = useState(null);

  const loadAnimals = () => {
    // A function to fetch the list of students that will be load anytime that list change
    fetch("http://localhost:8081/api/animals")
      .then((response) => response.json())
      .then((animals) => {
        setAnimals(animals);
      });
  };

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
        <h2>Techtonica Participants </h2>
        <ul>
          {animals.map((animal, index) => {
            return (
              <li key={index}>
                {animal.name}
                {animal.species}
                {animal.description}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListAnimals;