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

  useEffect(() => {
    loadAnimals();
  }, []);

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
                  {isAuthenticated ? (
                    <Link to={`/adopt/${animal.id}`}>Adopt</Link>
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
