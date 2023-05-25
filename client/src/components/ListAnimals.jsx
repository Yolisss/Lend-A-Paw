import React, { useState, useEffect } from "react";
import { Card, Button, Image } from "semantic-ui-react";
//import * as ioicons from "react-icons/io5";
import AdoptionForm from "./Form";
import { Link } from "react-router-dom";
import { Placeholder } from "semantic-ui-react";
import Catordog from "./catordog";
import { useAuth0 } from "@auth0/auth0-react";

const ListAnimals = (props) => {
  // this is my original state with an array of students
  const [animals, setAnimals] = useState([]);
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [favorites, setFavorites] = useState([]);

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

  //What i'm trying to say:
  //once the user clicks on favorite, i want that pet info to be transferred to
  //favorites page
  //to take pet info to another page, we can do that by its id
  const addToFavorites = (animalId, userEmail) => {
    console.log("animal id from line 41", animalId);
    console.log("animal id from line 41", userEmail);
    fetch("/api/favorites", {
      method: "POST",
      //headers is a way to specify metadata or instructions
      //for the backend
      //this header is content-type: application/json
      //its telling backend: the info is in json format
      headers: {
        "Content-Type": "application/json",
      },
      //body is what data i'm sending
      //in js, all info in 'json' is formatted in an obj
      //but in order to pass data to the backend,
      //we need to format from obj to str
      body: JSON.stringify({ userEmail: userEmail, animalId: animalId }),
    })
      //because this arrow function doesn't have curly braces
      //whatever is on the right of the arrow, it will automatically return
      //the response will come back automatically
      .then((response) => response.json())
      .then((data) => {
        console.log("data on line 63", data);
        if ((data.action = "added")) {
          setFavorites([...favorites, animalId]);
        } else {
          setFavorites([...favorites, []]);
        }
      });
  };

  //if data was removed, remove it from your favorites

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
        <Card.Group itemsPerRow={3} centered>
          {animals.map((animal, index) => {
            return (
              <Card key={index} centered>
                {animal.photos.length === 0 ? (
                  <Catordog species={animal.species} />
                ) : (
                  <Image src={animal.photos[0].full} size="small" centered />
                )}
                <Card.Content>
                  <Card.Header>{animal.name}</Card.Header>
                  <Card.Meta>{animal.species}</Card.Meta>
                  <Card.Description>{animal.description}</Card.Description>
                </Card.Content>
                <Card.Content>
                  {/* jsx */}
                  {isAuthenticated ? (
                    <>
                      <Link to={`/adopt/${animal.id}`}>Adopt</Link>
                      <Button
                        onClick={() => addToFavorites(animal.id, user.email)}
                      >
                        {/* javascript */}
                        {favorites.includes(animal.id)
                          ? "remove to favorites"
                          : "add to favorites"}
                      </Button>
                    </>
                  ) : (
                    <Button onClick={() => loginWithRedirect()}>Log In</Button>
                  )}
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </div>
    </div>
  );
};

export default ListAnimals;

{
  /* <Link to={`/adopt/${animal.id}`}>Adopt</Link>; */
}

{
  /* <button onClick={() => props.setId(animal.id)}>
                      Adopt!
                    </button>*/
}
