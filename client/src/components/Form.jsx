import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Thankyou from "./thankyou";
// {
//   onSaveStudent, editingStudent, onUpdateStudent;
// }

const AdoptionForm = (props) => {
  // This is the original State with not initial student
  const [adoption, setAdoption] = useState({
    fullname: "",
    email: "",
    reason: "",
  });

  // editingAdoption ||

  //create functions that handle the event of the user typing into the form
  const handleFullnameChange = (event) => {
    const fullname = event.target.value;
    setAdoption((adoption) => ({ ...adoption, fullname }));
  };

  // const handlePetIdChange = (event) => {
  //   const petInterested = event.target.value;
  //   setAdoption((adoption) => ({ ...adoption, petInterested }));
  // };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    //console.log(iscurrent);
    setAdoption((adoption) => ({ ...adoption, email }));
  };

  const handleReasonChange = (event) => {
    const reason = event.target.value;
    //console.log(iscurrent);
    setAdoption((adoption) => ({ ...adoption, reason }));
  };

  const clearForm = () => {
    setAdoption({
      fullname: "",
      email: "",
      reason: "",
    });
  };

  //A function to handle the post request
  const postAdoption = (newAdoption) => {
    return fetch("/api/adoptionform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAdoption),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        //I'm sending data to the List of Students (the parent) for updating the list
        //onSaveStudent(data);
        //this line just for cleaning the form
        clearForm();
      });
    //console.log(newAdoption);
  };

  //A function to handle the post request
  // const putStudent = (toEditStudent) => {
  //   return fetch(`http://localhost:8081/api/students/${toEditStudent.id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(toEditStudent),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       onUpdateStudent(data);
  //       //this line just for cleaning the form
  //       clearForm();
  //     });
  // };

  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    let newAdoption = {
      id: props.id,
      fullname: adoption.fullname,
      email: adoption.email,
      reason: adoption.reason,
    };
    // if (adoption.id) {
    //   putStudent(student);
    // } else {
    //   postStudent(student);
    // }
    postAdoption(newAdoption);
  };

  // const handleRedirect = (e) => {
  //   e.preventDefault();
  //   <Thankyou />;
  // };

  return (
    <Form className="form-students" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <input
          type="text"
          id="add-user-fullname"
          placeholder="Full name"
          required
          value={adoption.fullname}
          onChange={handleFullnameChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <input
          type="text"
          id="add-user-email"
          placeholder="Email"
          required
          value={adoption.email}
          onChange={handleEmailChange}
        />
        <Form.Group>
          <Form.Label>Reason</Form.Label>
          <input
            type="text"
            id="add-user-reason"
            placeholder="Reason"
            required
            value={adoption.reason}
            onChange={handleReasonChange}
          />
        </Form.Group>
      </Form.Group>

      <Form.Group>
        <Button
          type="submit"
          variant="outline-success"
          // onClick={handleRedirect}
        >
          {adoption.id ? "Edit Adoption" : "Add Adoption"}
        </Button>
        {adoption.id ? (
          <Button type="button" variant="outline-warning" onClick={clearForm}>
            Cancel
          </Button>
        ) : null}
      </Form.Group>
    </Form>
  );
};

export default AdoptionForm;
