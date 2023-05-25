const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");
const fakeanimals = require("./fakeanimaldata.js");
const fetch = require("node-fetch");

//const path = require("path");
//const { appendFileSync } = require("fs");

const app = express();
const PORT = process.env.PORT || 8081;
const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "dist");

app.use(cors());
app.use(express.json());
app.use(express.static(REACT_BUILD_DIR));

//get 0Auth token as you need it
//we'll be storing 0auth in a var and get a new one as we need it
let OAuthToken = "";
//time to live
//keeps track how long this token is going to be active for
let OAuthTokenTTL = null;
//whenever you call this function, its going to be a blocking function
//bc the 0authtoken is necessary before you can make subsequent calls
// when something is blocking, none of the api calls will be called until
//we get the token
async function getOAuthToken() {
  //current time
  let now = new Date();
  //current time + 10 secs
  //allow a buffer
  //if the token we have is within 10s seconds of expiring,
  //generate a new one
  now.setSeconds(now.getSeconds() + 10);

  //if the current time + 10 secs is less than 3600
  //return access_token which will allow us to continue
  //reusing the same token to make API calls
  if (OAuthTokenTTL != null && now < OAuthTokenTTL) {
    console.log("hello");
    return OAuthToken;
  }
  //headers: specifies content type; telling the server how to handle the
  // incoming request
  //specifying the format of the data we're sending is in 'www' form incoded in format
  //where you're sending 0authtoken in other calls
  const myHeaders = { "Content-Type": "application/x-www-form-urlencoded" };
  //browser only and doesn't exist in node which is why we had to write it in an obj on line 44
  //myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  //sending data as url incoded
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", process.env.PET_FINDER_CLIENT_KEY);
  urlencoded.append("client_secret", process.env.PET_FINDER_APISECRET_KEY);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  //and we recieve it, it'll be in json format

  const result = await fetch(
    "https://api.petfinder.com/v2/oauth2/token",
    requestOptions
  );
  const response = await result.json();
  console.log("toast", response);
  OAuthToken = response.access_token;
  //current time + time that is going to expires in
  //creating a new day time. without anything inside it,
  //it will give you the current time
  //ex. 12:00:35
  //with new Date, OAuthTokenTTL now has the data that it will expire
  //in 1 hour, 0 mins and 35 seconds
  //TIME TO LIVE
  //at what time will the token expire
  //when you call to the api it returns 3600 seconds which indicates
  //how much we have left before it expires
  OAuthTokenTTL = new Date();
  //we're getting 35
  //35 + expires_in = 3635
  //js will convert 3635 to the correct num of hour, mins, seconds
  //set those seconds to the OAuthTTL
  //get the current time and add that to the 3600
  //
  OAuthTokenTTL.setSeconds(OAuthTokenTTL.getSeconds() + response.expires_in);
}

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
  //res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

// create the get request for students in the endpoint '/api/students'
// app.get("/api/animals", async (req, res) => {
//   res.json(fakeanimals.animals);
//   //   try {
//   //     const { rows: allAnimals } = await db.query("SELECT * FROM allAnimals");
//   //     //res.send(allAnimals);
//   //   } catch (e) {
//   //     return res.status(400).json({ e });
//   //   }
// });

app.get("/api/animals", async (req, res) => {
  //recieving request. in query param we're getting city value
  //process: is a reference to the current execution that's running your code (node)
  //any environment var that node has access to, will be accessible via process.env
  //exist by default in terminal
  let access_token = await getOAuthToken();
  // let animal = req.query.animals;
  let URL = "https://api.petfinder.com/v2/animals";
  console.log(URL);
  fetch(URL, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    //what code do you want to execute when that fetch is finished
    //.then executes once the fetch has been resolved
    //i get the respond back essentially as a string
    //json converts string to actual object
    //.json returns another promise
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      //it is returning that result obj as a json response
      //that can then be used by the front end
      //result defining new obj from api
      res.json(result.animals);
    });
});

// app.get("/api/animals/:animalID", async (req, res) => {
//   //represents the obj that will be returned with the specific
//   //data we're asking for
//   //params = anytime you have a param in route
//   //ex :bookID; in order to access these values;
//   //you need to do req.params
//   //params used for searching sorting filtering etc
//   let requestedAnimal = req.params.animalID;
//   for (let animal of fakeanimals) {
//     if (fakeanimals.animal === requestedAnimal) {
//       res.json(animal);
//     }
//   }
// });
//post req for user
// app.post("/api/users", async (req, res) => {
//   try {
//     console.log(req.body);
//     const newAdoption = {
//       email: req.body.email,
//     };
//     //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
//     console.log(newAdoption);
//     //res.status(200).json();
//     const result = await db.query(
//       "INSERT INTO adoptionform(email) VALUES($1) RETURNING *",
//       [newAdoption.email]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
//   } catch (e) {
//     console.log(e);
//     res.status(400).json({ e });
//   }
// });
// app.post("/api/users", async (req, res) => {
//   try {
//     const newUser = {
//       fullname: req.body.fullname,
//       email: req.body.email,
//     };
//     console.log(newUser);
//     const resultUser = await db.query(
//       "INSERT INTO users(fullname, email) VALUES($1, $2) RETURNING *",
//       [newUser.fullname, newUser.email]
//     );
//     console.log(resultUser.rows[0]);
//     res.json(resultUser.rows[0]);
//   } catch (e) {
//     console.log(e);
//     res.status(400).json({ e });
//   }
// });

// // create the POST request
app.post("/api/adoptionform", async (req, res) => {
  try {
    const newAdoption = {
      pet_id: req.body.id,
      fullname: req.body.fullname,
      email: req.body.email,
      reason: req.body.reason,
    };
    const newUser = {
      fullname: req.body.fullname,
      email: req.body.email,
    };

    console.log(newUser);

    //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
    console.log(newAdoption);
    //res.status(200).json();
    const result = await db.query(
      "INSERT INTO adoptionform(pet_id, fullname, email,reason) VALUES($1, $2, $3, $4) RETURNING *",
      [
        newAdoption.pet_id,
        newAdoption.fullname,
        newAdoption.email,
        newAdoption.reason,
      ]
    );
    const resultUser = await db.query(
      "INSERT INTO users(fullname, email) VALUES($1, $2) RETURNING *",
      [newUser.fullname, newUser.email]
    );
    console.log(result.rows[0]);
    console.log(resultUser.rows[0]);
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(400).json({ e });
  }
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
