const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");
const fakeanimals = require("./fakeanimaldata.js");

const app = express();
const PORT = process.env.PORT || 8081;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

// create the get request for students in the endpoint '/api/students'
app.get("/api/animals", async (req, res) => {
  res.json(fakeanimals.animals);
  //   try {
  //     const { rows: allAnimals } = await db.query("SELECT * FROM allAnimals");
  //     //res.send(allAnimals);
  //   } catch (e) {
  //     return res.status(400).json({ e });
  //   }
});

app.get("/api/animals/:animalID", async (req, res) => {
  //represents the obj that will be returned with the specific
  //data we're asking for
  //params = anytime you have a param in route
  //ex :bookID; in order to access these values;
  //you need to do req.params
  //params used for searching sorting filtering etc
  let requestedAnimal = req.params.animalID;
  for (let animal of fakeanimals) {
    if (fakeanimals.animal === requestedAnimal) {
      res.json(animal);
    }
  }
});

// // create the POST request
app.post("/api/adoptionform", async (req, res) => {
  // try {
  console.log(req.body);
  const newAdoption = {
    fullname: req.body.fullname,
    petInterested: req.body.petInterested,
    email: req.body.email,
    reason: req.body.reason,
  };
  //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
  console.log(newAdoption);
  res.status(200).json();
  //   const result = await db.query(
  //     "INSERT INTO adopt(firstname, lastname, is_current) VALUES($1, $2, $3) RETURNING *",
  //     [newStudent.firstname, newStudent.lastname, newStudent.iscurrent]
  //   );
  //   console.log(result.rows[0]);
  //   res.json(result.rows[0]);
  // } catch (e) {
  //   console.log(e);
  //   return res.status(400).json({ e });
  // }
});

// // delete request for students
// app.delete("/api/students/:studentId", async (req, res) => {
//   try {
//     const studentId = req.params.studentId;
//     await db.query("DELETE FROM students WHERE id=$1", [studentId]);
//     console.log("From the delete request-url", studentId);
//     res.status(200).end();
//   } catch (e) {
//     console.log(e);
//     return res.status(400).json({ e });
//   }
// });

// //A put request - Update a student
// app.put("/api/students/:studentId", async (req, res) => {
//   //console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const studentId = req.params.studentId;
//   const updatedStudent = {
//     id: req.body.id,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     iscurrent: req.body.is_current,
//   };
//   console.log("In the server from the url - the student id", studentId);
//   console.log(
//     "In the server, from the react - the student to be edited",
//     updatedStudent
//   );
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
//   const values = [
//     updatedStudent.firstname,
//     updatedStudent.lastname,
//     updatedStudent.iscurrent,
//   ];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);
//   } catch (e) {
//     console.log(e);
//     return res.status(400).json({ e });
//   }

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
