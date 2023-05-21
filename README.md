# Lend A Paw

![1](https://github.com/Yolisss/Lend-A-Paw/assets/106282120/2d458cf7-c83b-4a72-8651-fc7bf99817b0)


## Contents

- About
- Tech Stack
- API Reference
- Drawing Board/Planning Phase

<h2>About<h2>
<h3 align="center"> Why use Lend A Paw? - App Overview </h3>
  Lend A Paw is an application for animal lovers and are looking to find ways to help animals in need. With Lend A Paw, you have the option to adopt your pet of choice, and have access to a list of animals that are up for adoption. What if you're not interested in adopting a pet at the moment? No problem! Lend A Paw's mission (besides getting you to adopt instead of shop animals) is to also spread awareness about fostering, donating, and volunterring! 
  <br></br>

## Tech Stack 
[Back to Contents](#contents)

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    <td align="center" width="96">
        <img src="[https://pbs.twimg.com/profile_images/1337188620222906368/oNKK_fVe_400x400.jpg](https://www.petfinder.com/themes/custom/consumer_react/logo.svg)" width="48" height="48" alt="Render" />
      <br>Render
    </td>
  </tr>
</table>

## API Reference 
[Back to Contents](#contents)

<table align="center">
  <tr>
     <td align="center" width="96">
        <img src="petfinder.png" width="60" height="48" alt="PetFinder" />
     </td>
   <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202351473-c2b9308b-9fd1-4dd6-980e-108bb1eb8731.png" height="40px"><br>Auth0</td>
  </tr>
</table>
  
<h2 align="center">Drawing Board/Planning Phase</h2>
<h3 align="center"> Official Database Schema </h3>
<h4 align="center">User</h4>
<table align="center">
  </tr>
  <tr>
    <th>id</th>
    <th>nickname</th>
    <th>first Name</th>
    <th>last Name</th>
    <th>email</th>
  </tr>
  <tr>
    <td>INTEGER (Primary Key)</td>
    <td>VARCHAR (255)</td>
    <td>VARCHAR (255)</td>
    <td>VARCHAR (255)</td>
    <td>VARCHAR (255)</td>
  </tr>
</table>
<h4 align="center">Adoption_form</h4>
<table align="center">
  <tr>
    <th>id</th>
    <th>pet_id</th>
    <th>fullname</th>
    <th>email</th>
    <th>reason</th>
  </tr>
  <tr>
    <td>INTEGER (Primary Key)</td>
    <td>INTEGER (Foreign Key)</td>
    <td>VARCHAR (255)</td>
    <td>VARCHAR (255)</td>
    <td>VARCHAR (255)</td>
  </tr>
</table>

## Installation
Step 1. Go to the source directory in your terminal to clone this project. Once that is done, switch into the project directory.
```bash
 git clone https://github.com/Yolisss/Lend-A-Paw
```

Step 2. To remove the owner git track from the project's main directory, run the command `rm -rf .git`. Then run the command `git init` to start your own git track.
```bash
 rm -rf .git
 git init
```

Step 3. Switch into the server folder with the command `cd server` and install npm with the command `npm install`.
```bash
 cd server
 npm install
```

Step 4. Inside your server folder, create an .env file with the command `touch .env`. Copy the instructions in the .env.example files to copy the correct option for your configuation into the new .env file. 
```bash
 touch .env
```

Step 5. Staying inside of the server folder, run either option A or option B:
<ul>
 <li>A. The command `psql -U postgres -f db.sql` if your postgres is set-up with a user and password</li>
 <li>B. The command `psql -f db.sql` if your postgres is not set-up with a user and password</li>
</ul>

Here is what your command might look like:

```bash
 psql postgres -f db.sql
```
Step 6. Go to the client folder in the project with the command `cd ..` and `cd client`. Then run the command `npm install` in that client folder.
```bash
 cd .. 
 cd client
 npm install
```

Step 7: Run both servers by opening a new terminal and by switching over to the server folder with the command `cd server`in it. Then run the command `npm run dev` inside the new terminal. 
```bash
 cd server
 npm run dev
```

## Wireframe
<h4>Home Page</h4>
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/2aace635-0982-4ad6-ad8b-8b5e91ad53f3" width="300" height="500" />

